"use client";

import Image from "next/image";
import Link from "next/link";

export default function Week46Page() {
  return (
    <main className="min-h-screen bg-[#F9F6F1] text-[#111827] py-16 px-6">
      {/* ===== HEADER ===== */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-2">
          Puppy Care Guide
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-[#8B6A43]">
          Week 46 – Managing Your Puppy’s Energy Expenditure
        </h2>
      </div>

      {/* ===== SMARTIE IMAGE ===== */}
      <div className="flex justify-center mb-10">
        <Image
          src="/week46mainpic.jpg"
          alt="Energetic puppy running outdoors"
          width={600}
          height={400}
          className="rounded-2xl shadow-md object-cover"
        />
      </div>

      {/* ===== INTRO ===== */}
      <section className="text-center max-w-3xl mx-auto mb-12">
        <p className="text-gray-700 leading-relaxed">
          Your puppy is now 46 weeks old — just one month away from adulthood!
          This period is defined by boundless curiosity and overflowing energy.
          Managing that energy properly is key to raising a calm, confident,
          well-balanced dog.
        </p>
      </section>

      {/* ===== ENERGY IMPORTANCE ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">
          ⚡ The Importance of Energy Expenditure
        </h4>
        <p className="text-gray-700 leading-relaxed mb-3">
          At this age, the world is an endless playground — every leaf, sound,
          and scent is an invitation to explore. Just as a child thrives on
          active play, your puppy depends on consistent physical and mental
          engagement to stay healthy and happy.
        </p>
        <p className="text-gray-700 leading-relaxed">
          A short daily walk may not be enough. From your perspective, it feels
          adequate — but from your puppy’s, it might leave too much energy
          unspent. This surplus energy needs a positive outlet before it turns
          into frustration or misbehavior.
        </p>
      </section>

      {/* ===== CONSEQUENCES ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-[#fffaf5] border border-[#e6dccf] p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">
          🚫 The Consequences of Pent-Up Energy
        </h4>
        <p className="text-gray-700 leading-relaxed mb-4">
          When dogs don’t have enough opportunity to burn off energy, it doesn’t
          just vanish — it builds up as internal stress, which inevitably shows
          up in behavior.
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Destructive chewing on shoes, furniture, or fabrics</li>
          <li>Excessive barking or whining</li>
          <li>Hyperactivity and difficulty settling</li>
          <li>Mouthing or nipping during play</li>
        </ul>
        <p className="text-[#8B6A43] text-sm mt-3">
          💡 <strong>PetGo Tip:</strong> These are not “bad behaviors” — they’re
          signs of unmet physical or mental needs.
        </p>
      </section>

      {/* ===== SOLUTION ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">
          The Solution: Consistent and Varied Activity
        </h4>
        <p className="text-gray-700 leading-relaxed mb-4">
          The key is not just long exercise sessions, but a mix of frequency,
          variety, and consistency. Provide several short bursts of movement
          throughout the day — walks, fetch, tug games, scent puzzles, or short
          training drills.
        </p>
        <p className="text-gray-700 leading-relaxed mb-3">
          When you give your dog structured outlets to release energy, you’ll
          notice fewer unwanted behaviors and a calmer home atmosphere. Regular
          engagement also strengthens your bond — your dog learns to follow your
          lead and mirror your calmness.
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Two or three moderate walks per day</li>
          <li>Short indoor play or training breaks between naps</li>
          <li>Interactive feeding (snuffle mats, food puzzles)</li>
          <li>Weekend adventures — new parks, trails, or playdates</li>
        </ul>
      </section>

      {/* ===== DEEP SLEEP ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-[#fffaf5] border border-[#e6dccf] p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">
          💤 The Benefits of Deep Sleep
        </h4>
        <p className="text-gray-700 leading-relaxed mb-3">
          After expending energy through play, training, and exploration, dogs
          experience true restorative sleep — the kind that supports growth,
          recovery, and emotional balance.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Deep sleep boosts memory, improves learning, and stabilizes mood. It’s
          nature’s reward for an active, fulfilled day.
        </p>
      </section>

      {/* ===== PERSPECTIVE SHIFT ===== */}
      <section className="max-w-3xl mx-auto mb-16 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">
          🌿 A Shift in Perspective
        </h4>
        <p className="text-gray-700 leading-relaxed mb-3">
          It’s perfectly normal for an 11-month-old dog to feel like a ball of
          energy. Instead of seeing this as a challenge, view it as an
          opportunity — each walk, play session, or training game shapes your
          puppy’s future personality.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Through active engagement, you’re teaching patience, building trust,
          and creating the foundation for a well-adjusted adult dog. The time
          you invest today returns a lifetime of calm companionship.
        </p>
      </section>

      {/* ===== APP BANNER ===== */}
      <section className="text-center max-w-4xl mx-auto mb-20">
        <h4 className="font-semibold mb-3 text-[#111827]">
          Continue with PetGo’s Puppy Care Guide
        </h4>
        <p className="text-gray-700 mb-10">
          Track walks, play sessions, and rest patterns using the PetGo App.
          Smart reminders and daily logs help you maintain a healthy balance of
          activity and relaxation for your growing dog.
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

