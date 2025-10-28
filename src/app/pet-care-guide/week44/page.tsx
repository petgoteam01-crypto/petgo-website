"use client";

import Image from "next/image";
import Link from "next/link";

export default function Week44Page() {
  return (
    <main className="min-h-screen bg-[#F9F6F1] text-[#111827] py-16 px-6">
      {/* ===== HEADER ===== */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-2">
          Puppy Care Guide
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-[#8B6A43]">
          Week 44 – Building a Deeper Bond: Communicating with Your Dog
        </h2>
      </div>

      {/* ===== SMARTIE IMAGE ===== */}
      <div className="flex justify-center mb-10">
        <Image
          src="/week44mainpic.jpg"
          alt="Owner bonding with their dog"
          width={600}
          height={400}
          className="rounded-2xl shadow-md object-cover"
        />
      </div>

      {/* ===== INTRO ===== */}
      <section className="text-center max-w-3xl mx-auto mb-12">
        <p className="text-gray-700 leading-relaxed">
          Your puppy is now 44 weeks old — nearly a year of shared moments,
          laughter, and love. As your companion grows into adulthood, it’s time
          to go beyond daily routines and build a deeper, more meaningful
          relationship rooted in mutual understanding.
        </p>
      </section>

      {/* ===== CONNECTING WITH YOUR COMPANION ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">
          ❤️ Connecting with Your Canine Companion
        </h4>
        <p className="text-gray-700 leading-relaxed mb-3">
          Our dogs may turn our homes upside down with mischief, yet they also
          carry an extraordinary power — to comfort our hearts and bring
          unconditional joy. They don’t just share our space; they share our
          emotional world.
        </p>
        <p className="text-gray-700 leading-relaxed">
          When you gaze into your dog’s eyes and wonder, “Do you know how much I
          love you?” — that’s the beginning of true connection.
        </p>
      </section>

      {/* ===== BEYOND MATERIAL LOVE ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-[#fffaf5] border border-[#e6dccf] p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">
          🐾 Beyond Material Expressions of Love
        </h4>
        <p className="text-gray-700 leading-relaxed mb-3">
          Many pet parents express affection through premium meals, stylish
          outfits, or tasty treats. While these are acts of love, they don’t
          always communicate the full depth of what we feel.
        </p>
        <p className="text-gray-700 leading-relaxed">
          True connection comes from awareness and empathy — understanding your
          dog’s emotions, responding with patience, and engaging in shared
          experiences. Love is shown not only by what you give, but how you
          listen and respond.
        </p>
      </section>

      {/* ===== FOUNDATION OF FRIENDSHIP ===== */}
      <section className="max-w-3xl mx-auto mb-16 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">
          🌿 The Foundation of a Lifelong Friendship
        </h4>
        <p className="text-gray-700 leading-relaxed mb-3">
          As guardians, it’s our responsibility to nurture a lasting bond built
          on communication and respect. This requires active participation and
          daily intention:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
          <li>
            <strong>Learning Their Language:</strong> Observe posture, sounds,
            and habits to interpret emotions and needs.
          </li>
          <li>
            <strong>Quality Time:</strong> Dedicate focused, joyful moments —
            through play, training, or peaceful companionship.
          </li>
          <li>
            <strong>Patience &amp; Consistency:</strong> Build trust through
            calm repetition and predictable routines.
          </li>
        </ul>
        <p className="text-gray-700 leading-relaxed">
          When you invest genuine attention and empathy, your dog learns to
          trust your tone, gestures, and presence — recognizing love not just as
          comfort, but as safety.
        </p>
        <p className="text-[#8B6A43] text-sm mt-3">
          💛 <strong>PetGo Reminder:</strong> Respect is the language every dog
          understands. A bond built on empathy becomes unbreakable.
        </p>
      </section>

      {/* ===== APP BANNER ===== */}
      <section className="text-center max-w-4xl mx-auto mb-20">
        <h4 className="font-semibold mb-3 text-[#111827]">
          Continue with PetGo’s Puppy Care Guide
        </h4>
        <p className="text-gray-700 mb-10">
          Deepen your connection with your pup using PetGo’s guided bonding
          activities, emotion-tracking features, and professional tips for
          communication.
        </p>

        <div className="relative rounded-3xl overflow-hidden shadow-lg">
          <Image
            src="/petgoapp-banner.jpg"
            alt="PetGo mobile app banner"
            width={1200}
            height={600}
            className="object-cover w-full h-auto"
            priority
          />
          <div className="absolute top-6 right-6 text-right">
            <Link
              href="/mobile-app"
              className="inline-block border border-white text-white hover:bg-white hover:text-[#8B6A43] px-6 py-3 rounded-lg font-medium shadow-sm transition"
            >
              Explore PetGo Mobile App &gt;
            </Link>
          </div>
        </div>

        <p className="text-gray-500 text-xs mt-4">
          © 2025 PetGo. All Rights Reserved
        </p>
      </section>
    </main>
  );
}
