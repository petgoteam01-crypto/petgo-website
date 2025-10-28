"use client";

import Image from "next/image";
import Link from "next/link";

export default function Week52Page() {
  return (
    <main className="min-h-screen bg-[#F9F6F1] text-[#111827] py-16 px-6">
      {/* ===== HEADER ===== */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-2">
          Puppy Care Guide
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-[#8B6A43]">
          Week 52 – The End of the Battle, A New Beginning: <br />
          A Pet Parent Mental Care Guide
        </h2>
      </div>

      {/* ===== HERO IMAGE ===== */}
      <div className="flex justify-center mb-10">
        <Image
          src="/week52mainpic.jpg"
          alt="Happy dog and owner celebrating first birthday"
          width={600}
          height={400}
          className="rounded-2xl shadow-md object-cover"
        />
      </div>

      {/* ===== INTRO ===== */}
      <section className="text-center max-w-3xl mx-auto mb-12">
        <p className="text-gray-700 leading-relaxed">
          🎉 <strong>Happy First Birthday!</strong>  
          Your puppy is now 52 weeks old — a full year of growth, love, and
          unforgettable memories.  
          This final guide marks the end of our Puppy Care journey that began
          back at Week 7.  
          If the past 45 chapters were about caring for your puppy, this one is
          dedicated to <strong>you</strong> — the devoted pet parent.  
          Welcome to PetGo’s <em>Pet Parent Mental Care Guide.</em>
        </p>
      </section>

      {/* ===== 1. MID-STREET INCIDENT ===== */}
      <section className="max-w-3xl mx-auto mb-10 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">
          1️⃣ The Mid-Street Poop Incident
        </h4>
        <p className="text-gray-700 leading-relaxed mb-3">
          The #1 most “memorable” event (voted by the PetGo team): when your dog
          decides to go potty <em>right in the middle of a crosswalk.</em> 😳
        </p>
        <p className="text-gray-700 leading-relaxed">
          In that moment, your only mission is to clean up efficiently and move
          on. Feel the embarrassment, then let it go. You’ll likely never see
          those strangers again — and trust us, they’ll forget by tomorrow.
        </p>
      </section>

      {/* ===== 2. SICK MOMENT ===== */}
      <section className="max-w-3xl mx-auto mb-10 bg-[#fffaf5] border border-[#e6dccf] p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">
          2️⃣ When Your Healthy Pup Suddenly Gets Sick
        </h4>
        <p className="text-gray-700 leading-relaxed mb-3">
          One of the hardest moments for any pet parent is when your energetic
          dog suddenly becomes ill. We know the fear and sadness all too well.
        </p>
        <p className="text-gray-700 leading-relaxed mb-3">
          Remember: when your dog is sick, they need your <strong>strength</strong>,
          not your tears. Be calm, proactive, and informed. Ask detailed
          questions, seek a second opinion if necessary, and stay focused on
          solutions.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Services like <strong>PetGo Doctor</strong> can help by offering
          remote consultations — giving you expert clarity when emotions run
          high.
        </p>
      </section>

      {/* ===== 3. VANISH MOMENT ===== */}
      <section className="max-w-3xl mx-auto mb-10 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">
          3️⃣ When They Vanish from Sight
        </h4>
        <p className="text-gray-700 leading-relaxed mb-3">
          If your dog suddenly disappears from view, call them firmly but calmly
          with their recall word — “Come!” — and maintain confident energy.
        </p>
        <p className="text-gray-700 leading-relaxed">
          But prevention is everything. Keeping your dog leashed in unsecured
          areas is <strong>non-negotiable</strong>. Responsible guardianship
          protects your pup and gives you peace of mind.
        </p>
      </section>

      {/* ===== 4. CALM MOMENT ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-[#fffaf5] border border-[#e6dccf] p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">
          4️⃣ “Please, Just Be Calm!” Moments
        </h4>
        <p className="text-gray-700 leading-relaxed mb-3">
          When your normally composed pup suddenly barks, lunges, or gets into a
          scuffle, the best first step is to <strong>remove the trigger</strong>.
          If it’s safe, block their view and calmly redirect.
        </p>
        <p className="text-gray-700 leading-relaxed mb-3">
          Do not mirror their excitement or frustration. Dogs reflect our
          emotions — your calm energy teaches them emotional stability. If
          reactivity persists, it’s a sign that more training or behavioral
          support is needed.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Every reaction tells a story — fear, confusion, or lack of
          socialization. Understanding that story is the first step toward
          change.
        </p>
      </section>

      {/* ===== FINAL WORD ===== */}
      <section className="max-w-3xl mx-auto mb-16 bg-white p-8 rounded-2xl shadow-sm text-center">
        <h4 className="font-semibold text-[#8B6A43] mb-4">
          🌟 The Final Word: A New Chapter Begins
        </h4>
        <p className="text-gray-700 leading-relaxed mb-3">
          We called this guide “The End of the Battle,” but it’s really just the
          start of a new one — the beautiful adventure of adulthood.
        </p>
        <p className="text-gray-700 leading-relaxed mb-3">
          You’ve completed the <strong>Puppy Care Guide</strong> journey — 52
          weeks of love, learning, and laughter. You’re now equipped to handle
          every stage ahead with patience and confidence.
        </p>
        <p className="text-gray-700 leading-relaxed mb-3">
          PetGo would love to hear from you. Share your reflections and puppy
          graduation photos in the <strong>PetGo Community</strong> or send us
          your feedback directly — your story inspires others!
        </p>
        <p className="text-gray-700 leading-relaxed">
          Congratulations again on your puppy’s first birthday. 🎂  
          You’ve raised a happy, healthy dog — and you’ve grown alongside them.
          Here’s to many joyful, tail-wagging years ahead. 💛
        </p>
      </section>

      {/* ===== APP BANNER ===== */}
      <section className="text-center max-w-4xl mx-auto mb-20">
        <h4 className="font-semibold mb-3 text-[#111827]">
          Stay with PetGo Beyond Puppyhood
        </h4>
        <p className="text-gray-700 mb-10">
          The journey doesn’t end here — PetGo continues supporting you through
          every life stage with expert advice, health tools, and a thriving
          community of pet lovers.
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