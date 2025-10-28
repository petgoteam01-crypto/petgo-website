"use client";

import Image from "next/image";
import Link from "next/link";

export default function Week23Page() {
  return (
    <main className="min-h-screen bg-[#F9F6F1] text-[#111827] py-16 px-6">
      {/* ===== HEADER ===== */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-2">
          Puppy Care Guide
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-[#8B6A43]">
          Week 23 – Understanding the Adolescent Phase
        </h2>
      </div>

      {/* ===== SMARTIE IMAGE ===== */}
      <div className="flex justify-center mb-10">
        <Image
          src="/week23mainpic.jpg"
          alt="Adolescent puppy behavior and training"
          width={600}
          height={400}
          className="rounded-2xl shadow-md object-cover"
        />
      </div>

      {/* ===== INTRO ===== */}
      <section className="text-center max-w-3xl mx-auto mb-12">
        <p className="text-gray-700 leading-relaxed">
          Around 23 weeks of age, your puppy enters adolescence — a stage much like
          a teenager’s puberty. Hormonal and emotional changes may temporarily
          affect obedience and mood, but with patience, it becomes a key growth milestone.
        </p>
      </section>

      {/* ===== WHAT IS ADOLESCENCE ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">
          🧠 What Is the “Adolescent Stage” in Dogs?
        </h4>
        <p className="text-gray-700 leading-relaxed mb-4">
          Between 5 and 6 months, puppies begin testing limits and exploring independence.
          Even well-trained dogs may temporarily ignore commands or regress in house-training —
          not defiance, just development.
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Ignoring known cues like “sit” or “wait”</li>
          <li>Stubborn or selective listening</li>
          <li>Minor house-training setbacks</li>
        </ul>
      </section>

      {/* ===== TYPICAL BEHAVIORS ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">
          🐶 Typical Behaviors During Adolescence
        </h4>
        <ul className="list-disc list-inside text-gray-700 space-y-3">
          <li>
            <strong>Stops Following Commands —</strong> Stay calm and consistent; patience beats strictness.
          </li>
          <li>
            <strong>Pretends Not to Hear Their Name —</strong> Keep sessions short and rewarding to maintain focus.
          </li>
          <li>
            <strong>Loses Appetite or Becomes Picky —</strong> Offer smaller, frequent meals or slightly warm food.
          </li>
          <li>
            <strong>Becomes Sensitive or Irritable —</strong> More vocal or restless; reassure gently.
          </li>
          <li>
            <strong>Shows Interest in Opposite Sex —</strong> Supervise walks and avoid off-leash encounters.
          </li>
        </ul>
      </section>

      {/* ===== WHY CHALLENGING ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">
          ⚠️ Why This Stage Feels Challenging
        </h4>
        <p className="text-gray-700 leading-relaxed mb-4">
          Teething, curiosity, and boundary-testing combine here — chewing, ignoring recall,
          or rebellious play. Many families misread this as “bad behavior,” but it’s a normal
          learning phase. With guidance and empathy, your puppy will mature into a balanced companion.
        </p>
      </section>

      {/* ===== HOW TO SUPPORT ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm space-y-6">
        <h4 className="font-semibold text-[#8B6A43] mb-4">
        How to Support Your Puppy Through Adolescence
        </h4>

        <div>
          <h5 className="font-medium text-[#8B6A43] mb-2">
            1️⃣ Channel Excess Energy Productively
          </h5>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Daily walks with varied routes</li>
            <li>Short obedience or fetch games</li>
            <li>Puzzle toys and nose-work for mental exercise</li>
          </ul>
        </div>

        <div>
          <h5 className="font-medium text-[#8B6A43] mb-2">
            2️⃣ Address Sensitivity and Aggression
          </h5>
          <p className="text-gray-700 leading-relaxed mb-2">
            Hormonal changes can make puppies defensive or reactive.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Avoid scolding or forced contact.</li>
            <li>Redirect with praise for calm behavior.</li>
            <li>Keep routines predictable for security.</li>
          </ul>
        </div>

        <div>
          <h5 className="font-medium text-[#8B6A43] mb-2">
            3️⃣ Establish Household Rules and Consistency
          </h5>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>All family members must enforce the same rules and commands.</li>
            <li>Reward desired behavior immediately.</li>
            <li>Use calm redirection, not yelling.</li>
          </ul>
        </div>

        <div>
          <h5 className="font-medium text-[#8B6A43] mb-2">
            4️⃣ Keep Training Short and Encouraging
          </h5>
          <p className="text-gray-700 leading-relaxed">
            5–10 minute sessions reinforce focus without frustration.
            When tired or distracted, pause and resume later — consistency wins.
          </p>
        </div>

        <div>
          <h5 className="font-medium text-[#8B6A43] mb-2">
            5️⃣ Maintain Emotional Connection
          </h5>
          <p className="text-gray-700 leading-relaxed">
            Beneath the attitude, your puppy is still your loving friend.
            Gentle affection and trust will shape a confident, loyal adult dog.
          </p>
        </div>
      </section>

      {/* ===== PROFESSIONAL TIPS ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">
          ❤️ Additional Professional Tips
        </h4>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Consult your vet about spaying or neutering to manage hormones.</li>
          <li>Encourage short, positive socialization with calm dogs.</li>
          <li>Try enrichment like sniffing games or training classes.</li>
          <li>Avoid harsh corrections or overexcitement.</li>
          <li>Ensure 14–16 hours of sleep daily for hormone regulation.</li>
        </ul>
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

      {/* ===== PETGO REMINDER ===== */}
      <section className="max-w-3xl mx-auto mb-16 bg-[#fffaf5] border border-[#e6dccf] rounded-2xl p-8 shadow-sm text-center">
        <h4 className="font-semibold text-[#8B6A43] mb-3">🐾 PetGo Reminder</h4>
        <p className="text-gray-700 leading-relaxed">
          Every puppy experiences adolescence differently — some sail through, others test your patience.
          Stay calm, be consistent, and remember: this phase is temporary. Your steady love will guide them
          into adulthood with confidence and trust.
        </p>
      </section>

      {/* ===== APP ADVERTISEMENT + COPYRIGHT ===== */}
      <section className="text-center max-w-4xl mx-auto mb-20">
        <h4 className="font-semibold mb-3 text-[#111827]">
          Continue with PetGo’s Puppy Care Guide
        </h4>
        <p className="text-gray-700 mb-10">
          Training and patience build lifelong trust — PetGo is here for every step of growing together.
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