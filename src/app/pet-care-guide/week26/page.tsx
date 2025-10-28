"use client";

import Image from "next/image";
import Link from "next/link";

export default function Week26Page() {
  return (
    <main className="min-h-screen bg-[#F9F6F1] text-[#111827] py-16 px-6">
      {/* ===== HEADER ===== */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-2">
          Puppy Care Guide
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-[#8B6A43]">
          Week 26 – Calming Signals (Emotions)
        </h2>
      </div>

      {/* ===== SMARTIE IMAGE ===== */}
      <div className="flex justify-center mb-10">
        <Image
          src="/week26mainpic.jpg"
          alt="Calm puppy showing emotional connection"
          width={600}
          height={400}
          className="rounded-2xl shadow-md object-cover"
        />
      </div>

      {/* ===== INTRO ===== */}
      <section className="text-center max-w-3xl mx-auto mb-12">
        <p className="text-gray-700 leading-relaxed">
          Six months old already — your puppy has grown so much!  
          As adolescence begins, emotional and psychological growth becomes just
          as important as nutrition or vaccines. This stage is about balance,
          bonding, and empathy.
        </p>
      </section>

      {/* ===== EMOTIONAL GROWTH ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">
          🌿 The Importance of Emotional Growth
        </h4>
        <p className="text-gray-700 leading-relaxed mb-4">
          Dogs can’t express feelings with words, but they experience joy, anxiety,
          curiosity, and even disappointment. Emotional maturity shapes how they
          interact with people and other animals.
        </p>
        <p className="text-gray-700 leading-relaxed">
          <strong>Tip for Guardians:</strong> Keep daily routines predictable and
          interactions gentle. Sudden noise or inconsistency can delay emotional
          stability.
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

      {/* ===== POSITIVE BOND ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">
          💞 Forming a Positive Bond with Your Dog
        </h4>
        <p className="text-gray-700 leading-relaxed mb-3">
          This phase focuses on strengthening trust through affection, clear
          communication, and calm leadership. Your tone, gestures, and habits
          all influence your puppy’s sense of safety.
        </p>
        <p className="text-gray-700 leading-relaxed">
          🐾 When dogs feel secure and loved, good behavior and self-control follow naturally.
        </p>
      </section>

      {/* ===== TRAINING WITH EMPATHY ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">🧠 Training with Empathy</h4>
        <p className="text-gray-700 leading-relaxed mb-3">
          Training is more than obedience — it’s emotional education.  
          Puppies at this age begin interpreting your expressions and tone as
          emotional cues. Patience and praise create lasting trust and eagerness to learn.
        </p>
        <p className="text-gray-700 leading-relaxed">
          🩺 <strong>Professional Tip:</strong> Continue this approach until 13–15 months
          for lasting emotional balance and confidence.
        </p>
      </section>

                  {/* ===== FIND DOG TRAINING SECTION ===== */}
<section className="max-w-3xl mx-auto mb-12 bg-[#fffaf5] border border-[#e6dccf] rounded-2xl shadow-sm p-8 text-center">
  <h4 className="font-semibold text-[#8B6A43] mb-4">
    🐾 Find Dog Training Programs
  </h4>
  <p className="text-gray-700 leading-relaxed mb-6">
    Want to take your puppy’s training to the next level? PetGo’s{" "}
    <span className="font-semibold text-[#4A321E]">Dog Training</span>{" "}
    section will feature step-by-step lessons, expert guidance,
    and personalized behavior insights to help your puppy grow with confidence.
  </p>
  <Link
    href="/exclusive-features/dog-training"
    className="inline-block bg-[#8B6A43] hover:bg-[#6E5332] text-white px-6 py-3 rounded-lg font-medium transition"
  >
    Explore Dog Training &gt;
  </Link>
</section>

      {/* ===== WALKS & EXPLORATION ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">
          🐕 During Walks and Outdoor Exploration
        </h4>
        <p className="text-gray-700 leading-relaxed mb-4">
          At 26 weeks, distractions abound — smells, textures, sounds.  
          Pulling, sniffing, or ignoring recall is normal exploration, not defiance.
          Guide with calm consistency so your dog learns to trust your tone.
        </p>
      </section>

      {/* ===== HELPING FOCUS OUTDOORS ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">
          🌳 Helping Your Dog Focus Outdoors
        </h4>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
          <li>Begin in quiet areas, then progress gradually.</li>
          <li>Reward eye contact immediately.</li>
          <li>Avoid harsh leash-pulling — it causes frustration.</li>
          <li>Use short, calm commands for clarity.</li>
        </ul>
        <p className="text-gray-700 leading-relaxed">
          Consistent, pleasant walks develop confidence and composure over time.
        </p>
      </section>

      {/* ===== TOILET & MANNERS CHECKLIST ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">
          🐾 Puppy Toilet & Manners Checklist (for Smart Dogs)
        </h4>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
          <li>Provide meals and water at consistent times.</li>
          <li>Keep the toilet area clean and predictable each morning.</li>
          <li>Walks at regular hours support healthy routines.</li>
          <li>Reinforce polite play and social manners.</li>
          <li>Avoid shouting or emotional punishment.</li>
        </ul>
        <p className="text-gray-700 leading-relaxed">
          Dogs learn through repetition and gentle correction — not fear.
          A calm guide earns lifelong trust.
        </p>
      </section>

      {/* ===== PETGO INSIGHT ===== */}
      <section className="max-w-3xl mx-auto mb-16 bg-[#fffaf5] border border-[#e6dccf] rounded-2xl p-8 shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-3">💡 PetGo Insight</h4>
        <p className="text-gray-700 leading-relaxed mb-3">
          The months from 6 to 12 are key to emotional resilience.  
          Positive experiences — calm handling, gentle socialization, and
          affectionate touch — build a balanced adult personality.
        </p>
        <p className="text-gray-700 leading-relaxed">
          A dog who feels understood and safe becomes not only obedient but deeply
          connected — a true lifelong companion. 🐾
        </p>
      </section>

      {/* ===== APP ADVERTISEMENT + COPYRIGHT ===== */}
      <section className="text-center max-w-4xl mx-auto mb-20">
        <h4 className="font-semibold mb-3 text-[#111827]">
          Continue with PetGo’s Puppy Care Guide
        </h4>
        <p className="text-gray-700 mb-10">
          PetGo helps nurture both body and mind — guiding emotional growth one walk at a time.
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