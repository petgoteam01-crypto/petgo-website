"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Heart, MessageCircle, Share2 } from "lucide-react";
import {
  collection,
  doc,
  getDoc,
  onSnapshot,
  query,
  orderBy,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import { auth, db } from "@/lib/firebase";

type FeedPost = {
  id: string;
  userId?: string;
  username?: string;
  text?: string;
  caption?: string;
  imageUrl?: string;
  createdAt?: any;
  likes?: number;
  likedBy?: string[];
  userAvatar?: string;
};

type Comment = {
  id: string;
  username?: string;
  text: string;
};

// Time format function
function formatTimeAgo(timestamp: any): string {
  if (!timestamp) return "";
  
  const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffMs / 86400000);

  if (diffMins < 1) return "Just now";
  if (diffMins < 60) return `${diffMins}m ago`;
  if (diffHours < 24) return `${diffHours}h ago`;
  if (diffDays < 7) return `${diffDays}d ago`;
  
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function CommunityPage() {
  const [posts, setPosts] = useState<FeedPost[]>([]);
  const [likes, setLikes] = useState<Record<string, number>>({});
  const [comments, setComments] = useState<Record<string, Comment[]>>({});
  const [groups, setGroups] = useState<any[]>([]);
  const [showGroupModal, setShowGroupModal] = useState(false);
  const [newGroupName, setNewGroupName] = useState("");
  const [talkMessages, setTalkMessages] = useState<any[]>([]);
  const [talkInput, setTalkInput] = useState("");
  const [showAllMessages, setShowAllMessages] = useState(false);
  const [showAllPosts, setShowAllPosts] = useState(false);
  const user = auth.currentUser;

  // === Fetch Posts ===
  useEffect(() => {
    const q = query(collection(db, "posts"), orderBy("createdAt", "desc"));
    const unsub = onSnapshot(q, async (snap) => {
      const list = await Promise.all(
        snap.docs.map(async (d) => {
          const data = d.data() as any;
          let latestAvatar = data.userAvatar;
          let latestName = data.username;
          try {
            if (data.userId) {
              const userDoc = await getDoc(doc(db, "users", data.userId));
              if (userDoc.exists()) {
                const u = userDoc.data();
                if (u.photoURL) latestAvatar = u.photoURL;
                if (u.firstName || u.lastName)
                  latestName = `${u.firstName ?? ""} ${u.lastName ?? ""}`.trim();
              }
            }
          } catch {}
          return {
            id: d.id,
            username: latestName || "User",
            text: data.text ?? "",
            caption: data.caption ?? "",
            imageUrl: data.imageUrl ?? "",
            createdAt: data.createdAt,
            likes: data.likes ?? 0,
            userAvatar: latestAvatar,
          } as FeedPost;
        })
      );
      setPosts(list);
      const likeMap: Record<string, number> = {};
      list.forEach((p) => (likeMap[p.id] = p.likes ?? 0));
      setLikes(likeMap);
    });
    return () => unsub();
  }, []);

  // === Fetch Comments Preview ===
  useEffect(() => {
    const unsubscribers: (() => void)[] = [];
    posts.forEach((p) => {
      const q = query(
        collection(db, "posts", p.id, "comments"),
        orderBy("createdAt", "desc")
      );
      const unsub = onSnapshot(q, (snap) => {
        const list = snap.docs.map((d) => d.data() as any);
        setComments((prev) => ({ ...prev, [p.id]: list.slice(0, 2) }));
      });
      unsubscribers.push(unsub);
    });
    return () => unsubscribers.forEach((u) => u());
  }, [posts]);

  // === Fetch Groups ===
  useEffect(() => {
    const q = query(collection(db, "groups"), orderBy("createdAt", "desc"));
    const unsub = onSnapshot(q, async (snap) => {
      const list = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
      setGroups(list);

      // Auto-create default groups if none exist
      if (snap.docs.length === 0) {
        const defaultGroups = ["Large Breed", "Small Breed", "Puppy"];
        try {
          for (const groupName of defaultGroups) {
            await addDoc(collection(db, "groups"), {
              name: groupName,
              createdAt: serverTimestamp(),
              memberCount: 0,
            });
          }
        } catch (error) {
          console.error("Error creating groups:", error);
        }
      }
    });
    return () => unsub();
  }, []);

  // === Fetch PetGo Talk Messages ===
  useEffect(() => {
    const q = query(collection(db, "petgoTalk"), orderBy("createdAt", "desc"));
    const unsub = onSnapshot(q, (snap) => {
      const list = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
      setTalkMessages(list);
    });
    return () => unsub();
  }, []);

  // === Create New Group ===
  async function handleCreateGroup() {
    if (!newGroupName.trim()) return;
    await addDoc(collection(db, "groups"), {
      name: newGroupName.trim(),
      createdAt: serverTimestamp(),
      memberCount: 0,
    });
    setNewGroupName("");
    setShowGroupModal(false);
  }

  // === Post PetGo Talk Message ===
  async function handlePostTalkMessage() {
    if (!talkInput.trim() || !user) {
      alert("Please log in to post.");
      return;
    }
    if (talkInput.length > 200) {
      alert("Message must be 200 characters or less.");
      return;
    }
    await addDoc(collection(db, "petgoTalk"), {
      text: talkInput.trim(),
      username: user.displayName ?? "User",
      userId: user.uid,
      userAvatar: user.photoURL ?? null,
      createdAt: serverTimestamp(),
    });
    setTalkInput("");
  }

  const displayedMessages = showAllMessages ? talkMessages : talkMessages.slice(0, 3);
  const displayedPosts = showAllPosts ? posts : posts.slice(0, 6);

  return (
    <div className="min-h-screen bg-gray-50 text-black">
      {/* HERO */}
      <div className="relative w-full h-64 flex items-center justify-center text-center">
        <Image
          src="/community-heromain.jpg"
          alt="Community Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-10 px-4 text-black">
          <h1 className="text-3xl md:text-4xl font-bold">PetGo Community</h1>
          <p className="mt-2 text-lg md:text-xl">
            Share your stories, connect with other pet parents, and celebrate
            the joy of pet care together.
          </p>
          <div className="mt-4 flex flex-col items-center space-y-2">
            <Link
              href="/community/create"
              className="bg-black text-white px-5 py-2 rounded hover:opacity-90"
            >
              Create Post
            </Link>
            <a
              href="#"
              className="font-semibold underline hover:no-underline"
            >
              Community Etiquette &gt;
            </a>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT WITH SIDEBAR */}
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col lg:flex-row gap-6">
        {/* FEED */}
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedPosts.map((post) => (
              <Link
                key={post.id}
                href={`/community/${post.id}`}
                className="bg-white rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col cursor-pointer"
              >
                {/* HEADER */}
                <header className="flex items-center gap-3 mb-2">
                  <Image
                    src={
                      post.userAvatar ||
                      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=200"
                    }
                    alt="User Avatar"
                    width={28}
                    height={28}
                    className="rounded-full border border-gray-300"
                  />
                  <div className="flex-1">
                    <p className="font-semibold text-sm">{post.username}</p>
                    <p className="text-xs text-gray-500">
                      {formatTimeAgo(post.createdAt)}
                    </p>
                  </div>
                </header>

                {/* IMAGE */}
                <div className="relative w-full h-48 rounded-md overflow-hidden">
                  <Image
                    src={
                      post.imageUrl ||
                      "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&q=80"
                    }
                    alt={post.text || "Post image"}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* CAPTION */}
                {post.caption && (
                  <p className="mt-3 text-sm">{post.caption}</p>
                )}

                {/* ACTIONS */}
                <div className="flex items-center gap-6 mt-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Heart size={16} /> {likes[post.id] ?? 0}
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle size={16} /> {comments[post.id]?.length ?? 0}
                  </div>
                  <div className="flex items-center gap-1">
                    <Share2 size={16} /> Share
                  </div>
                </div>

                {/* COMMENTS PREVIEW */}
                <ul className="mt-3 text-sm text-gray-700 space-y-1">
                  {comments[post.id]?.map((c, i) => (
                    <li key={i}>
                      <span className="font-medium">{c.username}</span>: {c.text}
                    </li>
                  ))}
                </ul>
              </Link>
            ))}
          </div>

          {/* View More Button for Posts */}
          {posts.length > 6 && (
            <div className="flex justify-center mt-6">
              <button
                onClick={() => setShowAllPosts(!showAllPosts)}
                className="px-6 py-2 bg-[#8B6A43] text-white rounded-lg hover:bg-[#B58963]"
              >
                {showAllPosts ? "Show Less" : "View More"}
              </button>
            </div>
          )}
        </div>

        {/* SIDEBAR */}
        <aside className="w-full lg:w-80 space-y-6">
          {/* Search + My Groups */}
          <div className="bg-white rounded-xl shadow p-6">
            {/* Search */}
            <div className="relative mb-6">
              <input
                type="text"
                placeholder="Search"
                className="w-full pl-10 pr-4 py-2 border rounded-lg text-sm focus:outline-[#8B6A43]"
              />
              <svg
                className="absolute left-3 top-2.5 w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
            </div>

            {/* My Groups */}
            <h2 className="text-xl font-bold mb-4">My Groups</h2>
            {groups.length === 0 ? (
              <p className="text-gray-500 text-sm mb-4">Loading groups...</p>
            ) : (
              <ul className="space-y-2 mb-4">
                {groups.map((group) => (
                  <li key={group.id}>
                    <Link
                      href={`/community/groups/${group.id}`}
                      className="block px-4 py-2 rounded-lg hover:bg-gray-100 text-sm font-medium"
                    >
                      {group.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
            <button
              onClick={() => setShowGroupModal(true)}
              className="w-full border-2 border-gray-300 text-gray-700 font-medium py-2 rounded-lg hover:bg-gray-50"
            >
              + Add Group
            </button>
          </div>

          {/* PetGo Talk */}
          <div className="bg-white rounded-xl shadow p-6">
            <Link href="/community/talk">
              <h2 className="text-xl font-bold mb-2 hover:text-[#8B6A43] cursor-pointer">
                PetGo Talk
              </h2>
            </Link>
            <p className="text-sm text-gray-600 mb-4">
              Quick shoutouts, meetups, buy & sell, or tips. Be kind and keep it pet-friendly!
            </p>
            <textarea
              placeholder='e.g., "Anyone at Withrow Park this Saturday morning?"'
              value={talkInput}
              onChange={(e) => setTalkInput(e.target.value)}
              maxLength={200}
              className="w-full border rounded-lg p-3 text-sm mb-2 resize-none focus:outline-[#8B6A43]"
              rows={3}
            />
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs text-gray-500">{200 - talkInput.length} characters left</span>
              <button 
                onClick={handlePostTalkMessage}
                className="bg-[#8B6A43] text-white px-4 py-2 rounded-lg text-sm hover:bg-[#B58963]"
              >
                Post
              </button>
            </div>

            {/* Messages List */}
            {talkMessages.length === 0 ? (
              <p className="text-sm text-gray-500">
                No messages yet. Be the first to start a chat!
              </p>
            ) : (
              <>
                <ul className="space-y-3">
                  {displayedMessages.map((msg) => (
                    <li key={msg.id} className="border-t pt-3">
                      <div className="flex items-start gap-2 mb-1">
                        <img
                          src={msg.userAvatar || "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=200"}
                          alt="Avatar"
                          className="w-6 h-6 rounded-full border border-gray-300"
                        />
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <p className="font-semibold text-xs">{msg.username}</p>
                            <p className="text-xs text-gray-500">{formatTimeAgo(msg.createdAt)}</p>
                          </div>
                          <p className="text-sm text-gray-700 mt-1">{msg.text}</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
                {talkMessages.length > 3 && (
                  <button
                    onClick={() => setShowAllMessages(!showAllMessages)}
                    className="w-full mt-4 text-sm text-[#8B6A43] font-medium hover:underline"
                  >
                    {showAllMessages ? "Show Less" : "View More"}
                  </button>
                )}
              </>
            )}
          </div>
        </aside>
      </div>

      {/* Add Group Modal */}
      {showGroupModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-6 max-w-md w-full">
            <h3 className="text-xl font-bold mb-4">Create New Group</h3>
            <input
              type="text"
              placeholder="Group name..."
              value={newGroupName}
              onChange={(e) => setNewGroupName(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleCreateGroup();
              }}
              className="w-full border rounded-lg px-4 py-2 mb-4 focus:outline-[#8B6A43]"
            />
            <div className="flex gap-2">
              <button
                onClick={() => setShowGroupModal(false)}
                className="flex-1 border border-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={handleCreateGroup}
                className="flex-1 bg-[#8B6A43] text-white py-2 rounded-lg hover:bg-[#B58963]"
              >
                Create
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}