"use client";

import Image from "next/image";
import Link from "next/link";

export default function Week34Page() {
  return (
    <main className="min-h-screen bg-[#F9F6F1] text-[#111827] py-16 px-6">
      {/* ===== HEADER ===== */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-2">
          Puppy Care Guide
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-[#8B6A43]">
          Week 34 – Understanding the Challenging Stage of Puppyhood
        </h2>
      </div>

      {/* ===== SMARTIE IMAGE ===== */}
      <div className="flex justify-center mb-10">
        <Image
          src="/week34mainpic.jpg"
          alt="Playful puppy during adolescence stage"
          width={600}
          height={400}
          className="rounded-2xl shadow-md object-cover"
        />
      </div>

      {/* ===== INTRO ===== */}
      <section className="text-center max-w-3xl mx-auto mb-12">
        <h3 className="text-xl font-semibold mb-3 text-[#8B6A43]">
          “Patience, consistency, and empathy — your puppy’s teenage months are where trust and training truly grow.”
        </h3>
        <p className="text-gray-700 leading-relaxed">
          Around eight months old, your puppy enters the “teenage” stage — full of energy,
          curiosity, and emotional changes. This period may test your patience but also deepens
          your bond when handled with understanding and care.
        </p>
      </section>

      {/* ===== BEHAVIOR UNDERSTANDING ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">🧠 Understanding Your Puppy’s Behaviour</h4>
        <p className="text-gray-700 leading-relaxed mb-3">
          At this age, puppies test independence — not to be defiant, but to learn about their
          environment. Chewing, barking, or ignoring commands are natural curiosity-driven behaviors.
        </p>
        <p className="text-gray-700 text-sm">
          💡 <strong>PetGo Tip:</strong> Observe before reacting. Track patterns — when, where, and why
          behaviors happen — and guide calmly rather than scolding.
        </p>
      </section>

      {/* ===== PUPPY ADOLESCENCE ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4"> The 8-Month Stage: Puppy Adolescence</h4>
        <p className="text-gray-700 leading-relaxed mb-3">
          Think of an 8-month-old puppy as a human teenager — energetic, emotional, and easily distracted.
          Ignoring commands or “testing limits” is not regression, but a sign of confidence and independence
          developing naturally.
        </p>
        <p className="text-gray-700">
          Celebrate progress, and stay consistent — your calm leadership helps them transition into maturity smoothly.
        </p>
      </section>

      {/* ===== CHALLENGING PERIOD ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-[#fffaf5] border border-[#e6dccf] p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4"> The “Tough Stage” for Many Pet Parents</h4>
        <p className="text-gray-700 leading-relaxed mb-3">
          Studies show over 60% of owners find the 8–9 month phase the hardest — sometimes even considering re-homing.
          But this is simply the “teenage” phase of growth, not failure.
        </p>
        <p className="text-gray-700">
          💡 <strong>PetGo Insight:</strong> Like parenting teenagers, raising a young dog requires patience
          and consistency — not perfection.
        </p>
      </section>

            {/* ===== DISCOVER PLACES ===== */}
      <section className="max-w-5xl mx-auto mb-20 bg-white p-10 rounded-3xl shadow-sm text-center">
        <h4 className="text-2xl font-semibold text-[#8B6A43] mb-4">
         Discover Pet-Friendly Places Near You
        </h4>
        <p className="text-gray-700 mb-8">
          Ready for a change of scenery?  
          Explore cafés, parks, and patios where your pup can play, relax, and make new friends.
        </p>

        {/* Mini preview cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="rounded-2xl overflow-hidden shadow hover:shadow-md transition">
            <Image
              src="/places/rouge-forest-trail.jpg"
              alt="Dog park preview"
              width={400}
              height={260}
              className="object-cover w-full h-[180px]"
            />
            <div className="p-4 text-left">
              <h5 className="font-semibold text-[#111827]">Rouge National Urban Park</h5>
              <p className="text-gray-600 text-sm">Autumn forest trail at Rouge National Urban Park</p>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow hover:shadow-md transition">
            <Image
              src="/places/cafe23-interior.jpg"
              alt="Pet-friendly café"
              width={400}
              height={260}
              className="object-cover w-full h-[180px]"
            />
            <div className="p-4 text-left">
              <h5 className="font-semibold text-[#111827]">Cafe 23</h5>
              <p className="text-gray-600 text-sm">Sip a latte & treat your pup to a pup cup.</p>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow hover:shadow-md transition">
            <Image
              src="/places/mildreds-patio.jpg"
              alt="Pet-friendly restaurant patio"
              width={400}
              height={260}
              className="object-cover w-full h-[180px]"
            />
            <div className="p-4 text-left">
              <h5 className="font-semibold text-[#111827]">Mildred’s Temple Kitchen</h5>
              <p className="text-gray-600 text-sm">Brunch & blueberry pancakes with your pup.</p>
            </div>
          </div>
        </div>

        <Link
          href="/places"
          className="inline-block bg-[#8B6A43] text-white px-8 py-3 rounded-full font-medium hover:bg-[#735739] transition"
        >
          Explore PetGo Places →
        </Link>
      </section>


      {/* ===== REWARDS ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4"> The Rewards Are Worth It</h4>
        <p className="text-gray-700 leading-relaxed mb-3">
          Once you navigate this stage, your puppy matures into a loyal, emotionally balanced companion.
          Every calm, understanding response now strengthens lifelong trust.
        </p>
        <p className="text-gray-700">
          Think of it as an investment — your patience today creates lasting love tomorrow.
        </p>
      </section>

      {/* ===== MISBEHAVIOUR SECTION ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">🚫 Misbehaviour ≠ Bad Puppy</h4>
        <p className="text-gray-700 leading-relaxed mb-3">
          Chewing, barking, or wild play are normal learning signs — not defiance.
          Replace punishment with redirection and give safe outlets for energy.
        </p>
        <p className="text-gray-700 text-sm">
          💡 <strong>PetGo Tip:</strong> Use chew toys, puzzle feeders, and structured play instead of scolding.
        </p>
      </section>

      {/* ===== ENERGY HANDLING ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4"> Handling Energy & Training</h4>
        <p className="text-gray-700 leading-relaxed mb-3">
          High energy means a healthy dog. Manage it with two 30-minute walks daily, including sniffing and short
          obedience exercises. Outdoor exploration reduces stress and channels energy productively.
        </p>
        <p className="text-gray-700 text-sm">
          🦮 Consistency and exercise together keep both mind and body balanced.
        </p>
      </section>

      {/* ===== COMMUNICATION ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-[#fffaf5] border border-[#e6dccf] p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">🗣 Gentle, Consistent Communication</h4>
        <p className="text-gray-700 leading-relaxed mb-3">
          Replace yelling with calm cues like “No,” “Stop,” or “Leave it.” Repeat consistently in similar contexts.
          Dogs understand tone and emotion more than volume.
        </p>
        <p className="text-gray-700 text-sm">
          💡 <strong>PetGo Tip:</strong> Eye contact and gentle tone teach far more than shouting ever will.
        </p>
      </section>

      {/* ===== AVOID NEGATIVE MEMORIES ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">⚠️ Avoid Creating Negative Memories</h4>
        <p className="text-gray-700 leading-relaxed mb-3">
          Harsh treatment can cause long-term fear or anxiety. Instead, build positive associations through praise
          and gentle reinforcement — “Positive memories grow positive habits.”
        </p>
      </section>

      {/* ===== HAPPY MEMORIES ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4"> Build Happy Memories Together</h4>
        <p className="text-gray-700 leading-relaxed mb-3">
          Every calm play, brush, or walk adds to your dog’s confidence. Puppies remember emotional warmth
          more deeply than correction.
        </p>
        <p className="text-gray-700 text-sm">
          💛 <strong>PetGo Reminder:</strong> Your patience today becomes their lifelong trust tomorrow.
        </p>
      </section>

      {/* ===== FINAL THOUGHTS ===== */}
      <section className="max-w-3xl mx-auto mb-16 bg-[#fffaf5] border border-[#e6dccf] p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-3"> Final Thoughts</h4>
        <p className="text-gray-700 leading-relaxed mb-3">
          This stage may challenge your patience, but it also strengthens your bond. Even when it’s hard,
          your puppy isn’t defying you — they’re growing. Stay steady, kind, and compassionate.
        </p>
        <p className="text-gray-700">
          💡 <strong>PetGo Tip:</strong> Stay consistent, stay kind, and remember — you’re shaping a best friend for life.
        </p>
      </section>

      {/* ===== APP ADVERTISEMENT + COPYRIGHT ===== */}
      <section className="text-center max-w-4xl mx-auto mb-20">
        <h4 className="font-semibold mb-3 text-[#111827]">
          Continue with PetGo’s Puppy Care Guide
        </h4>
        <p className="text-gray-700 mb-10">
          PetGo helps you navigate every puppy stage — from playful chaos to calm maturity — with care and expert advice.
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