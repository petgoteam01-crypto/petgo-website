"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function TravelComingSoonPage() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <main className="relative flex items-center justify-center min-h-screen bg-[#F9F6F1] overflow-hidden px-4 py-16">
      {/* ===== Background 3D Animated Layer ===== */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {/* Soft gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#fffaf4]/70 to-[#f9f6f1]/90" />

        {/* Plane Animation */}
        {mounted && (
          <motion.div
            initial={{ x: -250, y: 120, rotate: -10, opacity: 0 }}
            animate={{
              x: [-250, 400, -150],
              y: [120, 80, 100],
              rotate: [-10, 10, -8],
              opacity: [0, 0.8, 0.8],
            }}
            transition={{
              duration: 9,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 3,
            }}
            className="absolute top-20 left-0 text-[5rem] md:text-[7rem] opacity-70"
            style={{
              textShadow: "0 4px 20px rgba(0,0,0,0.15)",
              filter: "drop-shadow(0 0 6px rgba(0,0,0,0.1))",
            }}
          >
            ✈️
          </motion.div>
        )}

        {/* Floating Tickets */}
        {mounted && (
          <>
            <motion.div
              initial={{ x: 200, y: 300, rotate: 10, opacity: 0 }}
              animate={{
                y: [300, 280, 300],
                rotate: [10, 13, 10],
                opacity: 0.7,
              }}
              transition={{
                duration: 5,
                ease: "easeInOut",
                repeat: Infinity,
                delay: 1.2,
              }}
              className="absolute right-32 top-48 text-[3rem] md:text-[4rem] opacity-60"
            >
              🎟️
            </motion.div>

            <motion.div
              initial={{ x: -120, y: 500, rotate: -8, opacity: 0 }}
              animate={{
                y: [500, 480, 500],
                rotate: [-8, -10, -8],
                opacity: 0.6,
              }}
              transition={{
                duration: 5.5,
                ease: "easeInOut",
                repeat: Infinity,
                delay: 2,
              }}
              className="absolute left-24 bottom-24 text-[2.8rem] md:text-[3.5rem] opacity-60"
            >
              🎫
            </motion.div>
          </>
        )}
      </div>

      {/* ===== Foreground Card ===== */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-lg w-full bg-white rounded-2xl shadow-md border border-[#E7E2DD] text-center px-8 py-12"
      >
        <h1
          className="font-serif text-4xl md:text-5xl font-semibold mb-6"
          style={{ color: "#4A321E" }}
        >
          Coming Soon
        </h1>

        <p className="text-[#6B5A49] text-base md:text-lg leading-relaxed mb-8">
          The <span className="font-semibold text-[#4A321E]">PetGo Travel</span> feature is in development — crafted to make every journey with your pet simple, premium, and stress-free.
          <br />
          From documentation to vet approvals and flight requirements, everything will be handled seamlessly.
        </p>

        <p className="text-[#8B6A43] italic text-sm md:text-base mb-10">
          ✈️ Because adventures are better together — PetGo makes it possible.
        </p>

        <button
          onClick={() => window.history.back()}
          className="px-8 py-3 border border-[#8B6A43] text-[#8B6A43] rounded-full font-medium text-base hover:bg-[#8B6A43] hover:text-white transition"
        >
          ← Back to Features
        </button>
      </motion.div>
    </main>
  );
}
