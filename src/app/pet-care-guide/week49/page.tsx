"use client";

import Image from "next/image";
import Link from "next/link";

export default function Week49Page() {
  return (
    <main className="min-h-screen bg-[#F9F6F1] text-[#111827] py-16 px-6">
      {/* ===== HEADER ===== */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-2">
          Puppy Care Guide
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-[#8B6A43]">
          Week 49 – The Surprising Intelligence of Your Dog
        </h2>
      </div>

      {/* ===== SMARTIE IMAGE ===== */}
      <div className="flex justify-center mb-10">
        <Image
          src="/week49mainpic.jpg"
          alt="Smart puppy tilting head with curiosity"
          width={600}
          height={400}
          className="rounded-2xl shadow-md object-cover"
        />
      </div>

      {/* ===== INTRO ===== */}
      <section className="text-center max-w-3xl mx-auto mb-12">
        <p className="text-gray-700 leading-relaxed">
          Your puppy is already 49 weeks old! 🧠  
          Just one week shy of turning one, your furry companion has already
          proven themselves to be remarkably observant, expressive, and
          intelligent. Let’s explore just how smart dogs really are — and what
          that means for your bond.
        </p>
      </section>

      {/* ===== HOW SMART ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">
          🐕 How Smart Is Your Dog?
        </h4>
        <p className="text-gray-700 leading-relaxed mb-3">
          You haven’t said a word, but your dog is already standing by the door
          with the leash, ready for a walk. Or perhaps they appear the moment
          they hear the rustle of the treat bag. Are they telepathic? Not quite
          — but they are astonishingly perceptive.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Dogs learn to associate sights, sounds, and routines with specific
          outcomes. Their intelligence allows them to predict what comes next
          simply by observing your actions and expressions — a skill that’s part
          instinct, part memory, and part deep emotional connection.
        </p>
      </section>

      {/* ===== SCIENCE ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-[#fffaf5] border border-[#e6dccf] p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">
          🔬 The Science Behind the Smarts
        </h4>
        <p className="text-gray-700 leading-relaxed mb-3">
          Studies have shown that the average dog’s intelligence is comparable
          to that of a 2–3-year-old child. Some exceptional dogs have even
          mastered over <strong>1,000 words</strong> — understanding not just
          commands, but context and tone.
        </p>
        <p className="text-gray-700 leading-relaxed mb-3">
          Research also shows that dogs interpret human emotion by observing the{" "}
          <strong>right side of our faces</strong>, which reveals our genuine
          feelings more clearly. They are, quite literally, reading us.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Over time, dogs memorize our daily patterns and respond accordingly —
          proving that their intelligence is both emotional and practical.
        </p>
      </section>

      {/* ===== LEARNING ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">
          🎓 A Remarkable Capacity for Learning
        </h4>
        <p className="text-gray-700 leading-relaxed mb-3">
          Dogs don’t just memorize — they connect ideas. When you say “Let’s
          play!”, your dog may fetch their favorite ball, demonstrating both
          comprehension and reasoning.
        </p>
        <p className="text-gray-700 leading-relaxed mb-3">
          Studies by the <em>American Psychological Association</em> found that
          dogs process positive words differently — their brains “light up”
          stronger when they hear praise or loving tones. This means your kind
          words are more powerful than you might think.
        </p>
        <p className="text-gray-700 leading-relaxed">
          So keep communicating with warmth and encouragement — your dog
          understands more than you realize, and your tone of love strengthens
          that invisible bridge between you.
        </p>
      </section>

      

      {/* ===== APP BANNER ===== */}
      <section className="text-center max-w-4xl mx-auto mb-20">
        <h4 className="font-semibold mb-3 text-[#111827]">
          Continue with PetGo’s Puppy Care Guide
        </h4>
        <p className="text-gray-700 mb-10">
          Use the PetGo App to track your dog’s learning milestones, save
          training notes, and access research-backed tips to enrich your bond.
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
