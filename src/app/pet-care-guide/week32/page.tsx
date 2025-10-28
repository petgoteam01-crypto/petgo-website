"use client";

import Image from "next/image";
import Link from "next/link";

export default function Week32Page() {
  return (
    <main className="min-h-screen bg-[#F9F6F1] text-[#111827] py-16 px-6">
      {/* ===== HEADER ===== */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-2">
          Puppy Care Guide
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-[#8B6A43]">
          Week 32 – Understanding Your Puppy’s Personality
        </h2>
      </div>

      {/* ===== SMARTIE IMAGE ===== */}
      <div className="flex justify-center mb-10">
        <Image
          src="/week32mainpic.jpg"
          alt="Puppy showing personality traits"
          width={600}
          height={400}
          className="rounded-2xl shadow-md object-cover"
        />
      </div>

      {/* ===== INTRO ===== */}
      <section className="text-center max-w-3xl mx-auto mb-12">
        <h3 className="text-xl font-semibold mb-3 text-[#8B6A43]">
          “Every puppy has a unique temperament — learning it early helps you raise with empathy and confidence.”
        </h3>
        <p className="text-gray-700 leading-relaxed">
          Just like people, every dog has their own personality. Some are bold and
          outgoing, others shy or observant, and many fall in between. Understanding
          your puppy’s temperament helps you create the right environment — one that
          nurtures their confidence and emotional stability.
        </p>
      </section>

      {/* ===== PETGO INSIGHT ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-[#fffaf5] border border-[#e6dccf] p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-3">💡 PetGo Insight</h4>
        <p className="text-gray-700 leading-relaxed">
          Just as humans have personality frameworks like MBTI, dogs express individuality
          through a mix of genetics (<em>nature</em>) and environment (<em>nurture</em>).
          Early experiences and calm guidance shape how your puppy’s personality blossoms.
        </p>
      </section>

      {/* ===== TEMPERAMENT AND LEARNING ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">🌱 Temperament and Learning</h4>
        <p className="text-gray-700 leading-relaxed mb-3">
          During the 7–8 month period, your puppy’s temperament becomes clearer. If
          they’re shy, hesitant, or easily startled, too much stimulation can cause
          stress and fear-based behaviors like barking, hiding, or chewing.
        </p>
        <p className="text-gray-700 leading-relaxed mb-3">
          Introduce one new experience at a time and praise small signs of courage.
          Patience and calm routines help your puppy see the world — and you — as safe.
        </p>
        <p className="text-gray-700 leading-relaxed text-sm">
          💛 <strong>PetGo Tip:</strong> Personality isn’t fixed. With gentle consistency,
          even timid dogs grow brave and confident learners.
        </p>
      </section>

      {/* ===== FOUR TEMPERAMENTS ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm space-y-10">
        <h4 className="font-semibold text-[#8B6A43] mb-4">
           Four Common Puppy Temperaments
        </h4>

        {/* INTROVERTED */}
        <div>
          <h5 className="font-medium text-[#8B6A43] mb-2">1️⃣ The Introverted Pup</h5>
          <p className="text-gray-700 leading-relaxed mb-3">
            Shy dogs prefer quiet spaces and take time to adjust to new people or
            settings. They thrive with reassurance, soft voices, and patient socialization.
          </p>
          <p className="text-gray-700 leading-relaxed mb-3">
            Encourage small victories — sniffing a new toy, greeting calmly, or
            exploring nearby areas. Never rush interactions; allow them to move
            at their own pace.
          </p>
          <p className="text-gray-700 text-sm">
            💡 <strong>PetGo Tip:</strong> Spend quiet time together like gentle brushing or
            hand-feeding. Consistency builds trust and confidence.
          </p>
        </div>

        {/* EXTROVERTED */}
        <div>
          <h5 className="font-medium text-[#8B6A43] mb-2">2️⃣ The Extroverted Pup</h5>
          <p className="text-gray-700 leading-relaxed mb-3">
            Outgoing and energetic, these pups crave attention and exploration. Their
            enthusiasm is delightful but can turn into overexcitement without structure.
          </p>
          <p className="text-gray-700 leading-relaxed mb-3">
            Positive recall and cooperative games teach focus. Avoid harsh corrections
            that can make them defiant — reward calm engagement instead.
          </p>
          <p className="text-gray-700 text-sm">
            💡 <strong>PetGo Tip:</strong> Use cheerful praise and play. Confidence thrives
            under gentle, enthusiastic direction.
          </p>
        </div>

        {/* INDEPENDENT */}
        <div>
          <h5 className="font-medium text-[#8B6A43] mb-2">3️⃣ The Independent Pup</h5>
          <p className="text-gray-700 leading-relaxed mb-3">
            Intelligent and self-reliant, these pups often prefer to explore alone or rest
            away from the group. They’re loyal yet strong-willed — and dislike being forced.
          </p>
          <p className="text-gray-700 leading-relaxed mb-3">
            Reward-based training works best. Use problem-solving games, agility, or
            scent-work to engage their mind. Share walks and playtime evenly among
            family members to balance bonding.
          </p>
          <p className="text-gray-700 text-sm">
            💡 <strong>PetGo Tip:</strong> “Earned rewards” systems (Nothing in Life Is Free)
            promote respect without conflict.
          </p>
        </div>

        {/* FRIENDLY */}
        <div>
          <h5 className="font-medium text-[#8B6A43] mb-2">4️⃣ The Friendly Pup</h5>
          <p className="text-gray-700 leading-relaxed mb-3">
            Easygoing, social, and eager to please — these dogs adapt quickly to people
            and other pets. They make ideal family companions when given consistent
            structure and affection.
          </p>
          <p className="text-gray-700 leading-relaxed mb-3">
            Keep training stimulating with puzzles, interactive toys, and varying walking
            routes to prevent boredom.
          </p>
          <p className="text-gray-700 text-sm">
            💡 <strong>PetGo Tip:</strong> Reward calm behavior to maintain balance between
            friendliness and overexcitement.
          </p>
        </div>
      </section>

      {/* ===== FINAL THOUGHTS ===== */}
      <section className="max-w-3xl mx-auto mb-16 bg-[#fffaf5] border border-[#e6dccf] p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-3">💬 Final Thoughts</h4>
        <p className="text-gray-700 leading-relaxed mb-3">
          There’s no “good” or “bad” personality — only different strengths. Raising a
          puppy means understanding and adapting to their individual needs. Patience and
          empathy transform challenges into trust.
        </p>
        <p className="text-gray-700 leading-relaxed">
          💛 <strong>PetGo Reminder:</strong> Temperament may be partly inherited, but the
          environment you build — full of calm, care, and connection — shapes who your
          dog becomes for life.
        </p>
      </section>

      {/* ===== APP ADVERTISEMENT + COPYRIGHT ===== */}
      <section className="text-center max-w-4xl mx-auto mb-20">
        <h4 className="font-semibold mb-3 text-[#111827]">
          Continue with PetGo’s Puppy Care Guide
        </h4>
        <p className="text-gray-700 mb-10">
          PetGo helps you understand your puppy’s unique personality — fostering harmony,
          trust, and lifelong connection.
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