"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Newsletter from "../components/Newsletter";


export default function MobileAppPage() {
  const [angle, setAngle] = useState(0);
  const [paused, setPaused] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const images = [
    {
      src: "/iphone1.png",
      title: "Smart Dashboard",
      desc: "Everything you need in one glance — track health, access quick tools, and manage appointments seamlessly.",
    },
    {
      src: "/iphone2.png",
      title: "Remote Screening",
      desc: "Check your pet’s health instantly through smart AI-driven symptom analysis — anywhere, anytime.",
    },
    {
      src: "/iphone3.png",
      title: "Pet Profile",
      desc: "Keep all your pet’s health, grooming, and vaccination records securely in one place — fully synced and updated.",
    },
    {
      src: "/iphone4.png",
      title: "Calendar & Reminders",
      desc: "Never miss a vet visit or vaccine. Get automatic reminders and an easy-to-read timeline for all activities.",
    },
    {
      src: "/iphone5.png",
      title: "Community & Support",
      desc: "Connect with trusted vets, trainers, and other pet parents to share advice, stories, and expert guidance.",
    },
  ];

  // Continuous rotation (pause when a phone is clicked)
  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      setAngle((prev) => prev + 0.3);
    }, 30);
    return () => clearInterval(interval);
  }, [paused]);

  return (
    <main className="min-h-screen bg-[#F9F6F1] text-[#4A321E] flex flex-col items-center overflow-hidden px-6 relative">
      {/* ===== HEADER ===== */}
      <section className="pt-20 pb-10 text-center">
        <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">
          PetGo Mobile App
        </h1>
        <p className="text-lg md:text-xl text-[#8B6A43] max-w-2xl mx-auto leading-relaxed">
          Smart, connected, and built for modern pet parents.
          <br />Your all-in-one care companion — coming soon to iOS & Android.
          <br />
          Tap the screens to explore!
        </p>
      </section>

      {/* ===== 3D CAROUSEL ===== */}
      <section className="relative w-[600px] h-[380px] perspective mb-40">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            transformStyle: "preserve-3d",
            transform: `rotateY(${angle}deg)`,
            transition: paused ? "transform 0.4s ease-out" : "none",
          }}
        >
          {images.map((item, i) => {
            const theta = (360 / images.length) * i;
            return (
              <div
                key={i}
                className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
                style={{
                  transform: `rotateY(${theta}deg) translateZ(380px)`,
                }}
              >
                <div
                  className="relative w-[180px] h-[370px] rounded-[2rem] shadow-xl overflow-hidden border border-[#E7E2DD] bg-white cursor-pointer hover:scale-105 transition-transform"
                  onClick={() => {
                    setPaused(true);
                    setActiveIndex(i);
                  }}
                >
                  <Image
                    src={item.src}
                    alt={`PetGo App Screen ${i + 1}`}
                    fill
                    className="object-contain"
                    unoptimized
                  />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ===== DESCRIPTION OVERLAY ===== */}
      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              setActiveIndex(null);
              setPaused(false);
            }}
          >
            <motion.div
              className="bg-white rounded-2xl p-8 max-w-lg text-left relative mx-4 shadow-lg"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-lg"
                onClick={() => {
                  setActiveIndex(null);
                  setPaused(false);
                }}
              >
                ✕
              </button>
              <h3 className="text-2xl font-serif font-semibold text-[#4A321E] mb-3">
                {images[activeIndex].title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {images[activeIndex].desc}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ===== WAITLIST CTA ===== */}
<section className="bg-white w-full py-24 flex flex-col items-center border-t border-[#E7E2DD] shadow-sm z-10">
  <h2 className="text-3xl font-serif font-semibold mb-4 text-[#4A321E]">
    Get ready for the next chapter of pet care
  </h2>
  <p className="text-[#8B6A43] mb-8 text-center max-w-lg leading-relaxed">
    PetGo App is coming soon — built to simplify every part of your pet’s health and happiness.  
    Be among the first to experience it.
  </p>
  <button className="px-8 py-3 bg-[#8B6A43] text-white rounded-full shadow-md hover:bg-[#6E5334] transition text-lg">
    Join the Waitlist →
  </button>
</section>

<style jsx>{`
  .perspective {
    perspective: 1000px;
  }
`}</style>
</main>

  );
}
