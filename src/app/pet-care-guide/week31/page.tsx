"use client";

import Image from "next/image";
import Link from "next/link";

export default function Week31Page() {
  return (
    <main className="min-h-screen bg-[#F9F6F1] text-[#111827] py-16 px-6">
      {/* ===== HEADER ===== */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-2">
          Puppy Care Guide
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-[#8B6A43]">
          Week 31 – Walking Level Check: Building Focus, Confidence & Good Manners on Leash
        </h2>
      </div>

      {/* ===== SMARTIE IMAGE ===== */}
      <div className="flex justify-center mb-10">
        <Image
          src="/week31mainpic.jpg"
          alt="Puppy walking confidently on leash"
          width={600}
          height={400}
          className="rounded-2xl shadow-md object-cover"
        />
      </div>

      {/* ===== INTRO ===== */}
      <section className="text-center max-w-3xl mx-auto mb-12">
        <h3 className="text-xl font-semibold mb-3 text-[#8B6A43]">
          “A great walk isn’t just exercise — it’s communication.”
        </h3>
        <p className="text-gray-700 leading-relaxed">
          At around seven to eight months, your puppy’s curiosity and energy peak.
          Walks become more than bathroom breaks — they’re opportunities to strengthen trust,
          teach boundaries, and build confidence in the world.
        </p>
      </section>

      {/* ===== 1. LEASH & GEAR ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">
          1️⃣ Start with the Right Leash and Gear
        </h4>
        <p className="text-gray-700 leading-relaxed mb-3">
          Before heading out, check your walking essentials. Choose a sturdy
          4–6 ft (1.5–2 m) leash that allows movement while maintaining control.
          Avoid retractable leashes — they reduce responsiveness and can cause injury.
        </p>
        <p className="text-gray-700 leading-relaxed mb-3">
          A padded handle and chest-distributing harness protect growing joints and
          the trachea. For strong pullers, try a front-clip harness for gentle redirection.
        </p>
        <p className="text-gray-700 leading-relaxed text-sm">
          💡 <strong>PetGo Tip:</strong> Keep a short backup leash in your car or bag for emergencies.
          Inspect clips and stitching regularly for safety.
        </p>
      </section>

      {/* ===== 2. STAY WITHIN REACH ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">2️⃣ Stay Within Your Reach</h4>
        <p className="text-gray-700 leading-relaxed mb-3">
          Even the most affectionate puppies can bolt toward distractions.
          Your goal is to teach your dog that staying near you is safest.
          Begin indoors with short recall and focus sessions:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mb-3">
          <li>Say your dog’s name once.</li>
          <li>When they look at you, reward instantly with praise or a treat.</li>
          <li>Repeat several short sessions daily, then practice outside with distractions.</li>
        </ul>
        <p className="text-gray-700 leading-relaxed text-sm">
          💡 <strong>PetGo Tip:</strong> Never shout your dog’s name in frustration — it should
          always mean something positive and safe.
        </p>
      </section>

      {/* ===== 3. WALK TOGETHER ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">3️⃣ Walk Together — Same Direction, Same Pace</h4>
        <p className="text-gray-700 leading-relaxed mb-3">
          A great walk means moving together in harmony. If your puppy stiffens,
          barks, or hides when passing others, calmly move aside and reward relaxed
          behavior. Teach your dog to walk beside you — not pull or drag.
        </p>
        <p className="text-gray-700 leading-relaxed mb-3">
          Use light leash tension as gentle feedback, never punishment. Short, regular
          walks are better than occasional long ones for building calm focus.
        </p>
        <p className="text-gray-700 leading-relaxed text-sm">
          💡 <strong>PetGo Tip:</strong> Aim for two 10–20 minute structured walks daily, including
          relaxed sniffing breaks to let your dog decompress.
        </p>
      </section>

      {/* ===== 4. DAILY ROUTINE ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">4️⃣ Make Walks a Daily Routine</h4>
        <p className="text-gray-700 leading-relaxed mb-3">
          Consistency builds confidence. Walks at regular times teach your dog when
          to expect activity and reduce anxiety. Begin in quiet areas, then gradually
          introduce new sounds, surfaces, and people.
        </p>
        <p className="text-gray-700 leading-relaxed mb-3">
          Keep training upbeat — mix treats, toys, and praise. End with calm standing
          time so your puppy learns that walks conclude with peaceful moments.
        </p>
        <p className="text-gray-700 leading-relaxed text-sm">
          💡 <strong>PetGo Tip:</strong> In cold Canadian winters, protect paws with balm or boots,
          and shorten walks when sidewalks are icy or salted.
        </p>
      </section>

      {/* ===== SUMMARY ===== */}
      <section className="max-w-3xl mx-auto mb-16 bg-[#fffaf5] border border-[#e6dccf] p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">
          🌿 Summary: The Path to Confident Walks
        </h4>
        <p className="text-gray-700 leading-relaxed mb-3">
          A calm, responsive walker isn’t born — they’re made through trust,
          repetition, and clear communication. When your dog walks near you,
          glances up for reassurance, and moves with ease, you’ve built a bond
          based on mutual respect.
        </p>
        <p className="text-gray-700 leading-relaxed">
          💛 <strong>PetGo Reminder:</strong> Every walk teaches your dog that the world is
          safe and people are kind. Lead with patience, reward curiosity, and
          celebrate progress one step at a time.
        </p>
      </section>

      {/* ===== APP ADVERTISEMENT + COPYRIGHT ===== */}
      <section className="text-center max-w-4xl mx-auto mb-20">
        <h4 className="font-semibold mb-3 text-[#111827]">
          Continue with PetGo’s Puppy Care Guide
        </h4>
        <p className="text-gray-700 mb-10">
          PetGo helps every pet parent turn daily walks into meaningful moments of trust
          and connection.
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