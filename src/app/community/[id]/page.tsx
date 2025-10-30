"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Heart, MessageCircle, ArrowLeft } from "lucide-react";
import {
  collection,
  doc,
  onSnapshot,
  addDoc,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
  arrayUnion,
  arrayRemove,
  deleteDoc,
  getDoc,
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
    return '/default-avatar.png';
  }
  return userImage;
}

export default function PostDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const user = auth.currentUser;

  const [post, setPost] = useState<any>(null);
  const [comments, setComments] = useState<any[]>([]);
  const [commentInput, setCommentInput] = useState("");
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [editingCommentId, setEditingCommentId] = useState<string | null>(null);
  const [editCommentText, setEditCommentText] = useState("");

  // === Fetch Post ===
  useEffect(() => {
    if (!id) return;
    const unsub = onSnapshot(doc(db, "posts", id as string), async (d) => {
      const data = d.data();
      if (data) {
        // ✅ 최신 사용자 정보 가져오기
        let latestAvatar = data.userAvatar;
        let latestName = data.username;
        
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

        setPost({ 
          id: d.id, 
          ...data,
          username: latestName || data.username || "User",
          userAvatar: latestAvatar,
        });
        setLikeCount(data.likes ?? 0);
        setLiked(user ? data.likedBy?.includes(user.uid) : false);
      }
    });
    return () => unsub();
  }, [id, user]);

  // === Fetch Comments ===
  useEffect(() => {
    if (!id) return;
    const q = query(
      collection(db, "posts", id as string, "comments"),
      orderBy("createdAt", "desc")
    );
    const unsub = onSnapshot(q, async (snap) => {
      // ✅ 댓글 작성자 프로필 이미지 가져오기
      const list = await Promise.all(
        snap.docs.map(async (d) => {
          const data = d.data() as any;
          let latestAvatar = data.userAvatar;
          let latestName = data.username;
          
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
      setComments(list);
    });
    return () => unsub();
  }, [id]);

  // === Add Comment ===
  async function handleAddComment() {
    if (!commentInput.trim()) return;
    await addDoc(collection(db, "posts", id as string, "comments"), {
      text: commentInput.trim(),
      username: user?.displayName ?? "User",
      userId: user?.uid ?? null,
      userAvatar: user?.photoURL ?? null,
      createdAt: serverTimestamp(),
    });
    setCommentInput("");
  }

  // === Handle Like ===
  async function handleLike() {
    if (!user) {
      alert("Please log in to like this post.");
      return;
    }
    const postRef = doc(db, "posts", id as string);
    const newLiked = !liked;
    setLiked(newLiked);
    setLikeCount((prev) => prev + (newLiked ? 1 : -1));

    await updateDoc(postRef, {
      likedBy: newLiked ? arrayUnion(user.uid) : arrayRemove(user.uid),
      likes: likeCount + (newLiked ? 1 : -1),
    });
  }

  // === Delete Post ===
  async function handleDeletePost() {
    if (!user || post.userId !== user.uid) return;
    if (!confirm("Are you sure you want to delete this post?")) return;
    
    await deleteDoc(doc(db, "posts", id as string));
    alert("Post deleted successfully!");
    router.push("/community");
  }

  // === Delete Comment ===
  async function handleDeleteComment(commentId: string) {
    if (!confirm("Are you sure you want to delete this comment?")) return;
    await deleteDoc(doc(db, "posts", id as string, "comments", commentId));
  }

  // === Edit Comment ===
  function startEditComment(commentId: string, text: string) {
    setEditingCommentId(commentId);
    setEditCommentText(text);
  }

  async function handleUpdateComment(commentId: string) {
    if (!editCommentText.trim()) return;
    await updateDoc(doc(db, "posts", id as string, "comments", commentId), {
      text: editCommentText.trim(),
    });
    setEditingCommentId(null);
    setEditCommentText("");
  }

  if (!post)
    return (
      <main className="min-h-screen flex justify-center items-center text-gray-600">
        Loading post...
      </main>
    );

  return (
    <main className="max-w-3xl mx-auto py-10 px-4 bg-[#F9F6F1] min-h-screen text-[#111827]">
      <button
        onClick={() => router.back()}
        className="flex items-center gap-2 mb-6 text-[#8B6A43] hover:underline"
      >
        <ArrowLeft size={18} /> Back to Community
      </button>

      {/* Header */}
      <div className="bg-white rounded-xl shadow p-6 mb-6">
        <div className="flex items-center gap-3 mb-3">
          {/* ✅ 프로필 이미지 (default-Avatar.png 적용) */}
          <div className="relative w-9 h-9 rounded-full overflow-hidden border border-gray-300 shrink-0">
            <Image
              src={getProfileImage(post.userAvatar)}
              alt={post.username || "User"}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex-1">
            <p className="font-semibold text-[#111827]">{post.username}</p>
            <p className="text-xs text-gray-500">
              {formatTimeAgo(post.createdAt)}
            </p>
          </div>
        </div>

        <div className="relative w-full h-80 rounded-lg overflow-hidden mb-4">
          <Image
            src={
              post.imageUrl ||
              "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&q=80"
            }
            alt="Post image"
            fill
            className="object-cover"
          />
        </div>

        <p className="text-[#111827] mb-3">{post.caption}</p>

        {/* ✅ Share 버튼 제거 */}
        <div className="flex items-center gap-6 text-sm text-[#111827]">
          <button
            onClick={handleLike}
            className={`flex items-center gap-1 ${
              liked ? "text-red-500" : "text-[#111827]"
            }`}
          >
            <Heart size={16} fill={liked ? "currentColor" : "none"} /> {likeCount}
          </button>
          <div className="flex items-center gap-1">
            <MessageCircle size={16} /> {comments.length}
          </div>
          {user && post.userId === user.uid && (
            <button
              onClick={handleDeletePost}
              className="ml-auto text-red-500 hover:underline text-xs"
            >
              Delete Post
            </button>
          )}
        </div>
      </div>

      {/* Comments */}
      <section className="bg-white rounded-xl shadow p-6">
        <h3 className="font-semibold text-lg text-[#8B6A43] mb-4">
          Comments
        </h3>

        <div className="flex gap-2 mb-4">
          <input
            type="text"
            placeholder="Write a comment..."
            value={commentInput}
            onChange={(e) => setCommentInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleAddComment();
            }}
            className="flex-1 border rounded-lg px-3 py-2 text-sm focus:outline-[#8B6A43] text-[#111827]"
          />
          <button
            onClick={handleAddComment}
            className="px-4 py-2 bg-[#8B6A43] text-white rounded-lg text-sm hover:bg-[#B58963]"
          >
            Post
          </button>
        </div>

        <ul className="space-y-3">
          {comments.map((c) => (
            <li key={c.id} className="border-b pb-3">
              <div className="flex items-start gap-3">
                {/* ✅ 댓글 작성자 프로필 이미지 추가 */}
                <div className="relative w-8 h-8 rounded-full overflow-hidden border border-gray-300 shrink-0">
                  <Image
                    src={getProfileImage(c.userAvatar)}
                    alt={c.username || "User"}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <p className="font-medium text-[#111827]">{c.username}</p>
                      {editingCommentId === c.id ? (
                        <div className="mt-2">
                          <input
                            type="text"
                            value={editCommentText}
                            onChange={(e) => setEditCommentText(e.target.value)}
                            className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-[#8B6A43] text-[#111827] mb-2"
                          />
                          <div className="flex gap-2">
                            <button
                              onClick={() => handleUpdateComment(c.id)}
                              className="px-3 py-1 bg-[#8B6A43] text-white rounded text-xs hover:bg-[#B58963]"
                            >
                              Save
                            </button>
                            <button
                              onClick={() => setEditingCommentId(null)}
                              className="px-3 py-1 border border-gray-300 text-gray-700 rounded text-xs hover:bg-gray-50"
                            >
                              Cancel
                            </button>
                          </div>
                        </div>
                      ) : (
                        <p className="text-sm text-[#111827] mt-1">{c.text}</p>
                      )}
                    </div>
                    <div className="flex items-center gap-2 ml-2">
                      <p className="text-xs text-gray-500">
                        {formatTimeAgo(c.createdAt)}
                      </p>
                      {user && c.userId === user.uid && editingCommentId !== c.id && (
                        <div className="flex gap-2">
                          <button
                            onClick={() => startEditComment(c.id, c.text)}
                            className="text-xs text-[#8B6A43] hover:underline"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDeleteComment(c.id)}
                            className="text-xs text-red-500 hover:underline"
                          >
                            Delete
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
          {comments.length === 0 && (
            <p className="text-sm text-gray-500">No comments yet.</p>
          )}
        </ul>
      </section>
    </main>
  );
}