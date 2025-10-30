"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import {
  collection,
  onSnapshot,
  query,
  orderBy,
  addDoc,
  serverTimestamp,
  doc,
  getDoc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import { auth, db } from "@/lib/firebase";

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

// ✅ 프로필 이미지 헬퍼 함수
function getProfileImage(userImage: string | null | undefined): string {
  if (!userImage || userImage.trim() === '') {
    return '/default-Avatar.png';
  }
  return userImage;
}

export default function PetGoTalkPage() {
  const router = useRouter();
  const user = auth.currentUser;
  const [talkMessages, setTalkMessages] = useState<any[]>([]);
  const [talkInput, setTalkInput] = useState("");
  const [editingMessageId, setEditingMessageId] = useState<string | null>(null);
  const [editMessageText, setEditMessageText] = useState("");

  // === Fetch PetGo Talk Messages ===
  useEffect(() => {
    const q = query(collection(db, "petgoTalk"), orderBy("createdAt", "desc"));
    const unsub = onSnapshot(q, async (snap) => {
      const list = await Promise.all(
        snap.docs.map(async (d) => {
          const data = d.data() as any;
          let latestAvatar = data.userAvatar;
          let latestName = data.username;
          
          // ✅ Fetch latest user info from users collection
          try {
            if (data.userId) {
              const userDocRef = doc(db, "users", data.userId);
              const userDoc = await getDoc(userDocRef);
              if (userDoc.exists()) {
                const u = userDoc.data();
                if (u.photoURL) latestAvatar = u.photoURL;
                if (u.firstName || u.lastName)
                  latestName = `${u.firstName ?? ""} ${u.lastName ?? ""}`.trim();
              }
            }
          } catch (error) {
            console.error("Error fetching user data:", error);
          }
          
          return {
            id: d.id,
            ...data,
            username: latestName || data.username || "User",
            userAvatar: latestAvatar,
          };
        })
      );
      setTalkMessages(list);
    });
    return () => unsub();
  }, []);

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

  // === Delete Message ===
  async function handleDeleteMessage(messageId: string) {
    if (!confirm("Are you sure you want to delete this message?")) return;
    await deleteDoc(doc(db, "petgoTalk", messageId));
  }

  // === Edit Message ===
  function startEditMessage(messageId: string, text: string) {
    setEditingMessageId(messageId);
    setEditMessageText(text);
  }

  async function handleUpdateMessage(messageId: string) {
    if (!editMessageText.trim()) return;
    if (editMessageText.length > 200) {
      alert("Message must be 200 characters or less.");
      return;
    }
    await updateDoc(doc(db, "petgoTalk", messageId), {
      text: editMessageText.trim(),
    });
    setEditingMessageId(null);
    setEditMessageText("");
  }

  return (
    <main className="max-w-4xl mx-auto py-10 px-4 bg-[#F9F6F1] min-h-screen text-[#111827]">
      {/* Header */}
      <div className="mb-6">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-[#8B6A43] hover:underline mb-4"
        >
          <ArrowLeft size={18} /> Back to Community
        </button>
        <h1 className="text-3xl font-bold text-[#111827]">PetGo Talk</h1>
        <p className="text-sm text-gray-600 mt-2">
          Quick shoutouts, meetups, buy & sell, or tips. Be kind and keep it pet-friendly!
        </p>
      </div>

      {/* Post Input */}
      <div className="bg-white rounded-xl shadow p-6 mb-6">
        <textarea
          placeholder='e.g., "Anyone at Withrow Park this Saturday morning?"'
          value={talkInput}
          onChange={(e) => setTalkInput(e.target.value)}
          maxLength={200}
          className="w-full border rounded-lg p-3 text-sm mb-2 resize-none focus:outline-[#8B6A43] text-[#111827]"
          rows={3}
        />
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-500">
            {200 - talkInput.length} characters left
          </span>
          <button
            onClick={handlePostTalkMessage}
            className="bg-[#8B6A43] text-white px-4 py-2 rounded-lg text-sm hover:bg-[#B58963]"
          >
            Post
          </button>
        </div>
      </div>

      {/* Messages List */}
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-xl font-bold mb-4">All Messages</h2>
        {talkMessages.length === 0 ? (
          <p className="text-center text-gray-500 py-10">
            No messages yet. Be the first to start a conversation!
          </p>
        ) : (
          <ul className="space-y-4">
            {talkMessages.map((msg) => (
              <li key={msg.id} className="border-b pb-4 last:border-b-0">
                <div className="flex items-start gap-3">
                  {/* ✅ 프로필 이미지 (default-Avatar.png 적용) */}
                  <div className="relative w-10 h-10 rounded-full overflow-hidden border border-gray-300 shrink-0">
                    <Image
                      src={getProfileImage(msg.userAvatar)}
                      alt={msg.username || "User"}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <p className="font-semibold text-sm text-[#111827]">
                        {msg.username}
                      </p>
                      <p className="text-xs text-gray-500">
                        {formatTimeAgo(msg.createdAt)}
                      </p>
                      {user && msg.userId === user.uid && editingMessageId !== msg.id && (
                        <div className="flex gap-2 ml-auto">
                          <button
                            onClick={() => startEditMessage(msg.id, msg.text)}
                            className="text-xs text-[#8B6A43] hover:underline"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDeleteMessage(msg.id)}
                            className="text-xs text-red-500 hover:underline"
                          >
                            Delete
                          </button>
                        </div>
                      )}
                    </div>
                    {editingMessageId === msg.id ? (
                      <div>
                        <textarea
                          value={editMessageText}
                          onChange={(e) => setEditMessageText(e.target.value)}
                          maxLength={200}
                          className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-[#8B6A43] text-[#111827] mb-2 resize-none"
                          rows={3}
                        />
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs text-gray-500">
                            {200 - editMessageText.length} characters left
                          </span>
                        </div>
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleUpdateMessage(msg.id)}
                            className="px-3 py-1 bg-[#8B6A43] text-white rounded text-xs hover:bg-[#B58963]"
                          >
                            Save
                          </button>
                          <button
                            onClick={() => setEditingMessageId(null)}
                            className="px-3 py-1 border border-gray-300 text-gray-700 rounded text-xs hover:bg-gray-50"
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    ) : (
                      <p className="text-sm text-[#111827]">{msg.text}</p>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}