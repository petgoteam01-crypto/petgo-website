"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft, Send } from "lucide-react";
import Image from "next/image";
import {
  collection,
  doc,
  onSnapshot,
  addDoc,
  orderBy,
  query,
  serverTimestamp,
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
    return '/default-avatar.png';
  }
  return userImage;
}

export default function GroupChatPage() {
  const { id } = useParams();
  const router = useRouter();
  const user = auth.currentUser;

  const [group, setGroup] = useState<any>(null);
  const [messages, setMessages] = useState<any[]>([]);
  const [messageInput, setMessageInput] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editText, setEditText] = useState("");

  // === Fetch Group Info ===
  useEffect(() => {
    if (!id) return;
    const unsub = onSnapshot(doc(db, "groups", id as string), (d) => {
      if (d.exists()) {
        setGroup({ id: d.id, ...d.data() });
      }
    });
    return () => unsub();
  }, [id]);

  // === Fetch Messages ===
  useEffect(() => {
    if (!id) return;
    const q = query(
      collection(db, "groups", id as string, "messages"),
      orderBy("createdAt", "asc")
    );
    const unsub = onSnapshot(q, async (snap) => {
      const list = await Promise.all(
        snap.docs.map(async (d) => {
          const data = d.data() as any;
          let latestAvatar = data.userAvatar;
          let latestName = data.username;
          
          // ✅ Fetch latest user info
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
      setMessages(list);
    });
    return () => unsub();
  }, [id]);

  // === Send Message ===
  async function handleSendMessage() {
    if (!messageInput.trim() || !user) return;
    await addDoc(collection(db, "groups", id as string, "messages"), {
      text: messageInput.trim(),
      username: user.displayName ?? "User",
      userId: user.uid,
      userAvatar: user.photoURL ?? null,
      createdAt: serverTimestamp(),
    });
    setMessageInput("");
  }

  // === Delete Message ===
  async function handleDelete(msgId: string) {
    if (!confirm("Are you sure you want to delete this message?")) return;
    await deleteDoc(doc(db, "groups", id as string, "messages", msgId));
  }

  // === Edit Message ===
  function startEdit(msgId: string, text: string) {
    setEditingId(msgId);
    setEditText(text);
  }

  async function handleUpdate(msgId: string) {
    if (!editText.trim()) return;
    await updateDoc(doc(db, "groups", id as string, "messages", msgId), {
      text: editText.trim(),
    });
    setEditingId(null);
    setEditText("");
  }

  if (!group)
    return (
      <main className="min-h-screen flex justify-center items-center text-gray-600">
        Loading group...
      </main>
    );

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
        <h1 className="text-3xl font-bold text-[#111827]">{group.name}</h1>
        <p className="text-sm text-gray-500">
          {messages.length} {messages.length === 1 ? "message" : "messages"}
        </p>
      </div>

      {/* Messages */}
      <div className="bg-white rounded-xl shadow p-6 mb-6 max-h-[500px] overflow-y-auto">
        {messages.length === 0 ? (
          <p className="text-center text-gray-500 py-10">
            No messages yet. Start the conversation!
          </p>
        ) : (
          <ul className="space-y-4">
            {messages.map((msg) => (
              <li key={msg.id} className="flex gap-3">
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
                    {user && msg.userId === user.uid && editingId !== msg.id && (
                      <div className="flex gap-2 ml-auto">
                        <button
                          onClick={() => startEdit(msg.id, msg.text)}
                          className="text-xs text-[#8B6A43] hover:underline"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(msg.id)}
                          className="text-xs text-red-500 hover:underline"
                        >
                          Delete
                        </button>
                      </div>
                    )}
                  </div>
                  {editingId === msg.id ? (
                    <div>
                      <input
                        type="text"
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                        className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-[#8B6A43] text-[#111827] mb-2"
                      />
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleUpdate(msg.id)}
                          className="px-3 py-1 bg-[#8B6A43] text-white rounded text-xs hover:bg-[#B58963]"
                        >
                          Save
                        </button>
                        <button
                          onClick={() => setEditingId(null)}
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
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Message Input */}
      <div className="bg-white rounded-xl shadow p-4">
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Type a message..."
            value={messageInput}
            onChange={(e) => setMessageInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSendMessage();
            }}
            className="flex-1 border rounded-lg px-4 py-2 text-sm focus:outline-[#8B6A43] text-[#111827] placeholder:text-gray-400"
          />
          <button
            onClick={handleSendMessage}
            className="bg-[#8B6A43] text-white px-6 py-2 rounded-lg hover:bg-[#B58963] flex items-center gap-2"
          >
            <Send size={16} />
            Send
          </button>
        </div>
      </div>
    </main>
  );
}