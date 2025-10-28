"use client";

import Image from "next/image";
import Link from "next/link";

export default function Week45Page() {
  return (
    <main className="min-h-screen bg-[#F9F6F1] text-[#111827] py-16 px-6">
      {/* ===== HEADER ===== */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-2">
          Puppy Care Guide
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-[#8B6A43]">
          Week 45 – Mastering the Essential “Come” Command
        </h2>
      </div>

      {/* ===== SMARTIE IMAGE ===== */}
      <div className="flex justify-center mb-10">
        <Image
          src="/week45mainpic.jpg"
          alt="Puppy recalling happily to guardian"
          width={600}
          height={400}
          className="rounded-2xl shadow-md object-cover"
        />
      </div>

      {/* ===== INTRO ===== */}
      <section className="text-center max-w-3xl mx-auto mb-12">
        <p className="text-gray-700 leading-relaxed">
          Your puppy is already 45 weeks old — with their first birthday just
          ahead! Now is the perfect moment to lock in a reliable recall: the
          “Come/Here” cue that brings your dog to you, every time. It’s not a
          luxury — it’s safety, good manners, and peace of mind.
        </p>
      </section>

      {/* ===== RECALL CHECK-IN ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-3">📋 Recall Training Check-In</h4>
        <p className="text-gray-700 leading-relaxed">
          Few dogs respond instantly under real-world distractions. A trustworthy
          recall prevents accidents in off-leash areas, helps at dog parks, and
          keeps your companion safe in surprises — from dropped leashes to
          open gates.
        </p>
      </section>

      {/* ===== DON'Ts ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-[#fffaf5] border border-[#e6dccf] p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">
          ❌ The “Don’ts” of Recall Training (Common Mistakes)
        </h4>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>
            <strong>Don’t call for things they dislike.</strong> Avoid pairing
            “come” with baths, nail trims, or leaving the dog park.
          </li>
          <li>
            <strong>Don’t overuse the cue.</strong> Calling constantly without
            great rewards = the cue fades into background noise.
          </li>
          <li>
            <strong>Don’t forget to reward.</strong> Arriving must pay — fast,
            high-value, and joyful.
          </li>
          <li>
            <strong>Don’t test in chaos first.</strong> Start in low-distraction
            spaces before squirrels and busy paths.
          </li>
          <li>
            <strong>Don’t mix phrasing.</strong> Pick one: “Come” or “Here” —
            and stick to it.
          </li>
        </ul>
      </section>

      {/* ===== DO's / METHOD ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">
          ✅ The “Do’s” — A Step-by-Step Method for Rock-Solid Recall
        </h4>

        <div className="space-y-4 text-gray-700">
          <p>
            <strong>What you’ll need:</strong> Small, <em>high-value</em> treats
            your dog can eat quickly (think soft and smelly).
          </p>

          <ol className="list-decimal list-inside space-y-2">
            <li>
              <strong>Grab attention.</strong> Hold a high-value treat near the
              nose to spark interest.
            </li>
            <li>
              <strong>Say your cue happily.</strong> Use one clear phrase like
              “Come!” in a warm, inviting tone.
            </li>
            <li>
              <strong>Move back 2–3 steps.</strong> Backing up invites chase and
              builds momentum toward you.
            </li>
            <li>
              <strong>Reward instantly.</strong> The moment they arrive, deliver
              the treat and enthusiastic praise — “Yes! Good job!”
            </li>
            <li>
              <strong>Add a hand signal.</strong> Open arms or a thigh pat helps
              when sound gets lost outdoors.
            </li>
          </ol>

        </div>

        <p className="text-[#8B6A43] text-sm mt-4">
          💡 <strong>Trainer Tip:</strong> Pay “jackpot” (several treats in a row)
          for speedy recalls. Make coming to you the best game in town.
        </p>
      </section>

      {/* ===== PROGRESSION & PROOFING ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-[#fffaf5] border border-[#e6dccf] p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-3">🔁 Proofing the Recall</h4>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>
            <strong>Level 1:</strong> Quiet room → different rooms → backyard.
          </li>
          <li>
            <strong>Level 2:</strong> Low-distraction park on a long line (5–10 m).
          </li>
          <li>
            <strong>Level 3:</strong> Add mild distractions (a friend walking by),
            then gradually increase.
          </li>
          <li>
            <strong>Surprise drills:</strong> Random recall + big reward → release
            back to play. Coming to you shouldn’t always end the fun.
          </li>
        </ul>
        <p className="text-[#8B6A43] text-sm mt-3">
          🧠 <strong>Memory rule:</strong> Dogs repeat what is rewarding and easy.
          Keep cues cheerful, rewards excellent, and criteria fair.
        </p>
      </section>

      {/* ===== FINAL PUSH ===== */}
      <section className="max-w-3xl mx-auto mb-16 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-3">
          🎯 A Final Push Toward a Well-Trained Companion
        </h4>
        <p className="text-gray-700 leading-relaxed">
          Miss this window and future training gets harder. Nail recall now — in
          one month your puppy turns one, and you’ll celebrate a safer, more
          responsive best friend. Positive energy, clear cues, great rewards:
          you’ve got this!
        </p>
      </section>

      {/* ===== APP BANNER ===== */}
      <section className="text-center max-w-4xl mx-auto mb-20">
        <h4 className="font-semibold mb-3 text-[#111827]">
          Continue with PetGo’s Puppy Care Guide
        </h4>
        <p className="text-gray-700 mb-10">
          Use the PetGo App to schedule recall drills, track progress, and get
          step-by-step training plans tailored to your dog’s age and energy.
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
