"use client";

import Image from "next/image";
import Link from "next/link";

export default function Week13Page() {
  return (
    <main className="min-h-screen bg-[#F9F6F1] text-[#111827] py-16 px-6">
      {/* ===== HEADER ===== */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-2">
          Puppy Care Guide
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-[#8B6A43]">
          Week 13 – Understanding Toilet Training & Common Habits
        </h2>
      </div>

      {/* ===== SMARTIE IMAGE ===== */}
      <div className="flex justify-center mb-10">
        <Image
          src="/week13mainpic.jpg"
          alt="Puppy learning toilet training"
          width={600}
          height={400}
          className="rounded-2xl shadow-md object-cover"
        />
      </div>

      {/* ===== INTRO ===== */}
      <section className="text-center max-w-3xl mx-auto mb-12">
        <h3 className="text-xl font-semibold mb-3">
          “Every puppy learns at their own pace — with your patience and love, they’ll thrive.”
        </h3>
        <p className="text-gray-700 leading-relaxed mb-3">
          Toilet training can be one of the trickiest parts of puppyhood. At 13 weeks old, your
          puppy is still learning how and where to go — and it’s totally normal for accidents to
          happen. With calm consistency, your puppy will soon develop lifelong good habits.
        </p>
      </section>

      {/* ===== WHY PUPPIES EAT POOP ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">
          Q. My puppy eats poop! What should I do?
        </h4>
        <p className="text-gray-700 leading-relaxed mb-4">
          There are several reasons behind this behavior — called <strong>coprophagia</strong>.
          Some puppies learn it from other dogs or pick it up in stressful or confined environments
          where food and cleanliness were inconsistent. Others may do it out of boredom, hunger, or
          fear of being scolded for accidents.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Stay calm and consistent. Harsh reactions can make the problem worse by creating anxiety.
        </p>

        <div className="bg-[#fffaf5] border border-[#e6dccf] rounded-xl p-5 mt-6">
          <h5 className="font-semibold text-[#8B6A43] mb-2">💡 Helpful Tip</h5>
          <p className="text-gray-700 leading-relaxed">
            Identify any stress triggers — such as loud noises or being left alone — and try to
            reduce them. Use positive reinforcement to guide your puppy toward better habits.
          </p>
        </div>
      </section>

      {/* ===== HOW TO START TOILET TRAINING ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">
          Q. How should I start toilet training?
        </h4>
        <p className="text-gray-700 leading-relaxed mb-4">
          One golden rule: <strong>Never interrupt</strong> or move your puppy while they’re
          eliminating. Avoid scolding — it can cause confusion or fear and delay learning.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Even if your puppy regresses after progress, that’s normal! At this age, their control and
          understanding are still developing.
        </p>

        <div className="bg-[#fffaf5] border border-[#e6dccf] rounded-xl p-5 mt-6">
          <h5 className="font-semibold text-[#8B6A43] mb-2">📍 Key Point</h5>
          <p className="text-gray-700 leading-relaxed">
            A three-month-old puppy is still a baby. They’ll make mistakes — but those mistakes are
            how they learn. Stay patient and consistent.
          </p>
        </div>
      </section>

      {/* ===== FIXING INDOOR ACCIDENTS ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">
          Q. My puppy goes to the bathroom everywhere — how can I fix this?
        </h4>
        <p className="text-gray-700 leading-relaxed mb-4">
          Limit their roaming area until they understand where the pad is. Place 2–3 pee pads in
          common play zones and guide your puppy there whenever they sniff or circle. Praise and
          reward immediately after success.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Gradually reduce pads over 2–3 weeks to one consistent spot. Keep the area clean — dogs
          prefer tidy spaces and will avoid soiled spots.
        </p>
      </section>

      {/* ===== PEE VS POOP DIFFERENCE ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">
          Q. My puppy pees on the pad but poops anywhere!
        </h4>
        <p className="text-gray-700 leading-relaxed mb-4">
          This usually means the pad feels too small or dirty for defecation. Widen the pad area,
          refresh it frequently, and keep it odor-free. Dogs want a clean, private space to do their
          business.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Remember, when dogs defecate outdoors they often circle to find a suitable spot — it’s
          instinct. Give your puppy time to do the same indoors.
        </p>
      </section>

      {/* ===== CLEANUP & GENTLE GUIDANCE ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">
          Q. What if my puppy keeps eating poop even after cleaning?
        </h4>
        <p className="text-gray-700 leading-relaxed mb-4">
          Clean up immediately after they finish so there’s no chance to experiment. Redirect calmly
          and offer a treat right after they go — this builds a positive association with the act.
        </p>

        <div className="bg-[#fffaf5] border border-[#e6dccf] rounded-xl p-5 mt-6">
          <h5 className="font-semibold text-[#8B6A43] mb-2">💗 Gentle Guidance Matters</h5>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Stay calm and positive — praise more, scold less.</li>
            <li>
              Replace <strong>“No!”</strong> with{" "}
              <span className="italic">“Let’s go potty here instead.”</span>
            </li>
            <li>Reward immediately after doing it correctly.</li>
            <li>Remember — dogs want to please you. They just need to understand how.</li>
          </ul>
        </div>
      </section>

      

      {/* ===== FINAL REFLECTION ===== */}
      <section className="text-center max-w-3xl mx-auto mb-16">
        <h4 className="text-2xl font-semibold text-[#8B6A43] mb-3">🌷 Final Reflection</h4>
        <p className="text-gray-700 leading-relaxed mb-3">
          Toilet training, eating habits, or quirks — they’re all part of your puppy’s growth
          journey. What matters most is your understanding, love, and consistency.
        </p>
        <p className="text-gray-700 leading-relaxed">
          A puppy raised with patience doesn’t just learn where to go — they learn that home is a
          safe place.
        </p>
      </section>

      {/* ===== CONTINUE / APP BANNER ===== */}
      <section className="text-center max-w-4xl mx-auto mb-20">
        <h4 className="font-semibold mb-3 text-[#111827]">
          Continue with PetGo’s Puppy Care Guide
        </h4>
        <p className="text-gray-700 mb-10">
          Gentle training builds confident dogs — PetGo is here to support your puppy every step of
          the way.
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
