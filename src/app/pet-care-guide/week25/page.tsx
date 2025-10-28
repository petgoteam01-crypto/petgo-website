"use client";

import Image from "next/image";
import Link from "next/link";

export default function Week25Page() {
  return (
    <main className="min-h-screen bg-[#F9F6F1] text-[#111827] py-16 px-6">
      {/* ===== HEADER ===== */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-2">
          Puppy Care Guide
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-[#8B6A43]">
          Week 25 – Understanding Calming Signals
        </h2>
      </div>

      {/* ===== SMARTIE IMAGE ===== */}
      <div className="flex justify-center mb-10">
        <Image
          src="/week25mainpic.jpg"
          alt="Puppy showing calming signals"
          width={600}
          height={400}
          className="rounded-2xl shadow-md object-cover"
        />
      </div>

      {/* ===== INTRO ===== */}
      <section className="text-center max-w-3xl mx-auto mb-12">
        <p className="text-gray-700 leading-relaxed">
          By week 25, your puppy’s emotional communication becomes more refined.
          Dogs use subtle “calming signals” — body language that expresses comfort,
          curiosity, or stress. Learning to read these signs deepens trust and harmony.
        </p>
      </section>

      {/* ===== WHAT ARE CALMING SIGNALS ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">🐕 What Are Calming Signals?</h4>
        <p className="text-gray-700 leading-relaxed mb-4">
          Calming signals are non-verbal cues dogs use to express emotion or
          ease tension. Through posture, eyes, and movement, they communicate:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
          <li>“I’m happy.”</li>
          <li>“I’m nervous.”</li>
          <li>“Please notice me.”</li>
          <li>“Let’s stay calm.”</li>
        </ul>
        <p className="text-gray-700 leading-relaxed">
          Recognizing them early allows you to respond with empathy and build safer,
          deeper interaction.
        </p>
      </section>

      {/* ===== NEW IMAGE SECTION (inserted here) ===== */}
      <div className="flex justify-center mb-12">
        <Image
          src="/week25calmingsignals.jpg"
          alt="Dog showing calming body language example"
          width={700}
          height={450}
          className="rounded-2xl shadow-md object-cover"
        />
      </div>

      {/* ===== COMMON SIGNALS ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm space-y-6">
        <h4 className="font-semibold text-[#8B6A43] mb-4">
          💬 Common Calming Signals and What They Mean
        </h4>

        <div>
          <h5 className="font-medium text-[#8B6A43] mb-2">
            A. Raised Hips & Lowered Shoulders — Play Bow
          </h5>
          <p className="text-gray-700 leading-relaxed mb-2">
            A cheerful “Let’s play!” gesture. Appears when your dog feels safe and social.
            Encourage light play and avoid ending sessions abruptly to maintain balance.
          </p>
          <p className="text-gray-700 text-sm">
            💡 Tip: Transition calmly from play to rest to prevent frustration.
          </p>
        </div>

        <div>
          <h5 className="font-medium text-[#8B6A43] mb-2">
            B. Jumping Up When You Leave
          </h5>
          <p className="text-gray-700 leading-relaxed mb-2">
            “Please don’t go!” — a sign of attachment and mild separation anxiety.
            Offer calm reassurance before leaving and practice short absences.
          </p>
          <p className="text-gray-700 text-sm">
            🩺 Professional Advice: Quiet exits + low-key returns teach that departures are safe.
          </p>
        </div>

        <div>
          <h5 className="font-medium text-[#8B6A43] mb-2">
            C. Paw Tapping or Touching You
          </h5>
          <p className="text-gray-700 leading-relaxed mb-2">
            “Notice me!” — a gentle request for interaction. Respond kindly but set
            soft boundaries to teach patience.
          </p>
          <p className="text-gray-700 text-sm">
            🐾 Training Tip: Reward calm waiting as much as attention-seeking.
          </p>
        </div>

        <div>
          <h5 className="font-medium text-[#8B6A43] mb-2">
            D. Pacing Back and Forth
          </h5>
          <p className="text-gray-700 leading-relaxed mb-2">
            Indicates anxiety or restlessness — check environment, noise, or
            bathroom needs. Offer a quiet, secure space.
          </p>
          <p className="text-gray-700 text-sm">
            🧠 Insight: Persistent pacing may reflect stress — increase routine and enrichment.
          </p>
        </div>
      </section>

      {/* ===== WHY RECOGNIZING MATTERS ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">
          🧠 Why Recognizing Calming Signals Matters
        </h4>
        <p className="text-gray-700 leading-relaxed mb-4">
          Puppies can’t explain feelings with words — their gestures are their voice.
          Yawning, licking, or turning away often mean “I want peace.” Reading these
          cues early prevents conflict and deepens mutual understanding.
        </p>
      </section>

      {/* ===== EXAMPLE: LICKING ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">🐶 Example — Licking or Slurping</h4>
        <p className="text-gray-700 leading-relaxed mb-3">
          Lip-licking or gulping isn’t always thirst — it often means “I’m uneasy.”
          Respond calmly instead of scolding to preserve trust.
        </p>
        <p className="text-gray-700 leading-relaxed">
          💡 Tip: Dogs mirror our emotions. Your calm energy teaches emotional stability.
        </p>
      </section>

      {/* ===== COMMUNICATE BACK ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">🧍‍♀️ How to Communicate Back</h4>
        <p className="text-gray-700 leading-relaxed mb-4">
          Use short, consistent words — “Sit,” “Stay,” “Good.” Avoid long phrases;
          dogs read tone, not grammar. Observe triggers and emotions before reacting.
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Check what happened right before the signal.</li>
          <li>Note sounds, smells, or movements that caused it.</li>
          <li>Guide calmly — not by force but by clarity.</li>
        </ul>
      </section>

      {/* ===== CORE EMPATHY ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">
          🧩 The Core of Calming Signals — Shared Empathy
        </h4>
        <p className="text-gray-700 leading-relaxed mb-2">
          True communication rests on mutual trust. When your dog feels seen and safe,
          their signals soften — and understanding grows.
        </p>
        <p className="text-gray-700 italic">
          “The more we observe, the better we understand — and the stronger the bond becomes.”
        </p>
      </section>

      {/* ===== PETGO TIP ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-[#fffaf5] border border-[#e6dccf] rounded-2xl p-8 shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-3">❤️ PetGo’s Gentle Care Tip</h4>
        <p className="text-gray-700 leading-relaxed">
          Frequent calming signals (pacing, licking, whining) show your dog self-soothing.
          Support them with consistent routines, quiet rest spaces, and balanced playtime.
          A calm dog isn’t silent — it’s one who feels safe, understood, and loved.
        </p>
      </section>

      {/* ===== REFLECTIVE MOMENT ===== */}
      <section className="text-center max-w-3xl mx-auto mb-16">
        <h4 className="text-2xl font-semibold text-[#8B6A43] mb-3">🐾 Reflective Moment</h4>
        <p className="text-gray-700 leading-relaxed mb-3">
          When you call your dog’s name and they turn with bright eyes and a wagging tail —
          that’s connection in its purest form.
        </p>
        <p className="text-gray-700 leading-relaxed">
          PetGo celebrates every bond like this — helping you raise a confident, emotionally
          balanced, and joyful companion. 💛
        </p>
      </section>

      {/* ===== APP ADVERTISEMENT + COPYRIGHT ===== */}
      <section className="text-center max-w-4xl mx-auto mb-20">
        <h4 className="font-semibold mb-3 text-[#111827]">
          Continue with PetGo’s Puppy Care Guide
        </h4>
        <p className="text-gray-700 mb-10">
          PetGo helps you understand your puppy’s body language and emotions — one wag at a time.
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