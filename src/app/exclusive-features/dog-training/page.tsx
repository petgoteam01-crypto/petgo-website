"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function DogTrainingComingSoon() {
  return (
    <main className="min-h-screen bg-[#F9F6F1] flex flex-col items-center justify-center text-center px-6 py-20 overflow-hidden relative">
      {/* Floating Background Accent Circles */}
      <motion.div
        className="absolute top-28 left-20 w-56 h-56 bg-[#8B6A43]/10 rounded-full blur-3xl"
        animate={{ y: [0, -25, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-24 right-24 w-64 h-64 bg-[#4A321E]/10 rounded-full blur-3xl"
        animate={{ y: [0, 25, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Animated Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-6"
      >
        <h1 className="text-4xl md:text-5xl font-serif font-semibold text-[#4A321E]">
          Dog Training
        </h1>
        <h2 className="text-5xl md:text-6xl font-serif font-bold text-[#8B6A43] tracking-wide mt-2">
          COMING SOON
        </h2>
      </motion.div>

      {/* Animated Divider Line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
        className="w-24 h-[3px] bg-[#8B6A43] mb-8 origin-center"
      />

      {/* Animated Description */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="text-[#6B5A49] text-lg max-w-2xl leading-relaxed mb-8"
      >
        The PetGo Team is working hard to bring you our new{" "}
        <strong>Dog Training</strong> feature. Soon, you’ll be able to explore
        step-by-step lessons, behavioral guides, and expert tips from trainers
        — helping your puppy learn with love, patience, and confidence.
      </motion.p>

      {/* Subtext with gentle shimmer */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ delay: 1, duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="text-[#8B6A43] mb-12 italic"
      >
        We’re excited to release this feature very soon. Stay tuned!
      </motion.p>

      {/* Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        <Link
          href="/exclusive-features"
          className="inline-block border px-6 py-3 rounded-lg font-medium text-[#4A321E] hover:bg-[#f0ebe5] transition"
          style={{ borderColor: "#4A321E" }}
        >
          ← Back to Exclusive Features
        </Link>
      </motion.div>
    </main>
  );
}
