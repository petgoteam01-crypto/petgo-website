"use client";

import { useState } from "react";
import { db } from "@/lib/firebase";
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState<null | { type: "ok" | "err"; text: string }>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setMsg(null);

    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!valid) {
      setMsg({ type: "err", text: "Please enter a valid email address." });
      return;
    }

    try {
      setLoading(true);
      
      const normalizedEmail = email.toLowerCase().trim();

      // ✅ 중복 구독 확인
      const newsletterRef = collection(db, "newsletter_subscribers");
      const q = query(newsletterRef, where("email", "==", normalizedEmail));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        setMsg({ type: "ok", text: "Thank you — exciting updates are on their way." });
        setEmail("");
        setLoading(false);
        return;
      }

      // ✅ Firestore에 저장
      await addDoc(newsletterRef, {
        email: normalizedEmail,
        subscribedAt: new Date().toISOString(),
        status: "active",
        source: "website",
      });

      setMsg({ type: "ok", text: "Thank you — exciting updates are on their way." });
      setEmail("");
    } catch {
      setMsg({ type: "err", text: "Something went wrong. Please try again." });
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-4xl px-4 md:px-6 py-16 md:py-24 text-center">
        {/* Title */}
        <h2
          className="font-serif text-4xl md:text-5xl font-semibold tracking-tight"
          style={{ color: "#4A321E" }}   // ✅ dark brown
        >
          Stay in the Loop with PetGo
        </h2>

        {/* Subtitle (gold) */}
        <p className="mt-4 text-base md:text-lg text-[#B58963]">
          Join our mailing list to get notified when the app goes live and <br />
          receive regular newsletters filled with expert advice and exclusive updates.
        </p>

        {/* Form */}
        <form onSubmit={onSubmit} className="mx-auto mt-10 max-w-2xl text-left">
          <label className="block text-[#111827]">
            Enter your email here <span className="align-super"></span>
          </label>

          <input
            type="email"
            inputMode="email"
            autoComplete="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-3 w-full bg-transparent border-0 border-b border-[#4A321E]/40 focus:border-[#4A321E] focus:outline-none py-3 text-[17px] placeholder:text-gray-400"
            required
          />

          {/* Big brown button with long shadow */}
          <div className="relative mt-8">
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-md bg-[#8B6A43] py-4 text-white text-lg font-semibold
                         hover:brightness-105 active:translate-y-[1px]
                         disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? "Joining..." : "Join Now"}
            </button>
            {/* shadow strip */}
            <div className="pointer-events-none absolute -bottom-3 left-1/2 h-3 w-[96%] -translate-x-1/2 rounded-full bg-black/25 blur-[2px]" />
          </div>
        </form>

        {/* Message */}
        {msg && (
          <p className={`mt-6 text-center ${msg.type === "ok" ? "text-gray-700" : "text-red-600"}`}>
            {msg.text}
          </p>
        )}
      </div>
    </section>
  );
}