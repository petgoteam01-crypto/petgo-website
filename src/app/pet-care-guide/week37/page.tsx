"use client";

import Image from "next/image";
import Link from "next/link";

export default function Week37Page() {
  return (
    <main className="min-h-screen bg-[#F9F6F1] text-[#111827] py-16 px-6">
      {/* ===== HEADER ===== */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-2">
          Puppy Care Guide
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-[#8B6A43]">
          Week 37 – Understanding and Managing Marking Behaviour
        </h2>
      </div>

      {/* ===== SMARTIE IMAGE ===== */}
      <div className="flex justify-center mb-10">
        <Image
          src="/week37mainpic.jpg"
          alt="Puppy showing marking behaviour"
          width={600}
          height={400}
          className="rounded-2xl shadow-md object-cover"
        />
      </div>

      {/* ===== INTRO ===== */}
      <section className="text-center max-w-3xl mx-auto mb-12">
        <p className="text-gray-700 leading-relaxed">
          As your puppy enters adolescence, you may notice them lifting a leg or urinating
          in unusual places — even after being potty-trained. This natural behaviour, known
          as <strong>marking</strong>, is a form of communication, not mischief. Understanding
          and guiding this instinct is key to a calm, confident home.
        </p>
      </section>

      {/* ===== AVOID PUNISHMENT ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">🚫 Avoid Harsh Punishment</h4>
        <p className="text-gray-700 leading-relaxed mb-3">
          Scolding or punishment can make marking worse by increasing fear and anxiety.
          Dogs mark to express stress or claim security, not to disobey.
          Stay calm and redirect their behaviour instead.
        </p>
        <p className="text-gray-700 text-sm">
          💡 <strong>PetGo Tip:</strong> Calm, consistent redirection and patience are far
          more effective than raised voices.
        </p>
      </section>

      {/* ===== WHY DOGS MARK ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">💬 Why Dogs Mark</h4>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mb-3">
          <li>Territorial behaviour — claiming a space or object.</li>
          <li>Anxiety or environmental stress.</li>
          <li>Separation anxiety or changes in guardian routine.</li>
          <li>New smells, pets, or visitors.</li>
          <li>Social signaling — communicating maturity or status.</li>
        </ul>
        <p className="text-gray-700 text-sm">
          🧠 Puppies often mark due to uncertainty or excitement rather than dominance.
        </p>
      </section>

      {/* ===== ROOT CAUSE ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-[#fffaf5] border border-[#e6dccf] p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">🧠 Understand the Root Cause</h4>
        <p className="text-gray-700 leading-relaxed mb-3">
          Marking spikes when something changes — a move, visitors, or new furniture.
          These shifts can make your dog insecure, and marking reassures them of their space.
        </p>
        <ul className="list-disc list-inside text-gray-700">
          <li>Have routines changed recently?</li>
          <li>New pets, furniture, or visitors?</li>
          <li>Less play or outdoor time?</li>
        </ul>
      </section>

      {/* ===== REDUCING STRESS ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">🌿 Reducing Stress & Anxiety</h4>
        <ul className="list-disc list-inside text-gray-700 mb-3 space-y-1">
          <li>Take regular walks so marking happens outdoors naturally.</li>
          <li>Provide mental enrichment — puzzle toys or nosework.</li>
          <li>Keep feeding and sleeping schedules consistent.</li>
          <li>Reward calm behaviour and proper bathroom habits.</li>
        </ul>
        <p className="text-gray-700 text-sm">
          💡 <strong>PetGo Tip:</strong> Physical exercise + mental stimulation =
          calmer dogs who mark less.
        </p>
      </section>

      {/* ===== CLEANUP ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-[#fffaf5] border border-[#e6dccf] p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">🧴 Clean Thoroughly & Remove Odours</h4>
        <p className="text-gray-700 leading-relaxed mb-3">
          Clean urine immediately using an enzymatic cleaner — regular products only mask
          scent for humans, not dogs.
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-3">
          <li>Blot moisture first, then apply enzyme cleaner.</li>
          <li>Avoid ammonia-based products — they mimic urine smell.</li>
          <li>Block access until the area dries completely.</li>
        </ul>
        <p className="text-gray-700 text-sm">
          💡 <strong>PetGo Tip:</strong> Place food or bedding in previously marked areas —
          dogs rarely mark where they eat or sleep.
        </p>
      </section>

            {/* ===== PETGO SHOP ===== */}
      <section className="max-w-5xl mx-auto mb-20">
        <h4 className="font-semibold mb-3 text-[#8B6A43]">
          🧼 PetGo Shop{" "}
          <span className="text-[#111827] font-medium">
            | Keep your home fresh and odor-free during Week 37.
          </span>
        </h4>

        <div className="grid md:grid-cols-2 gap-8 mt-8">
          {/* Product 1 */}
          <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition flex flex-col p-6 h-full">
            <div className="w-full h-[240px] flex justify-center items-center mb-4">
              <Image
                src="/week37-product1.jpg"
                alt="ez-clean Advanced Odor Remover"
                width={400}
                height={240}
                className="object-contain max-h-[220px]"
              />
            </div>
            <div className="flex-grow text-left">
              <h5 className="font-semibold text-[#111827] mb-1">
                ez-clean Advanced Odor Remover – Highly Concentrated Bio Enzyme Pet Odor Eliminator (1 L)
              </h5>
              <p className="text-sm text-gray-600 mb-2">Seller: ez-clean</p>
              <p className="text-[#8B6A43] font-semibold mb-3">$19.95</p>
            </div>
            <Link
              href="https://www.amazon.ca/ez-clean-Advanced-Remover-Concentrated-Eliminator/dp/B07BMKDXHB/ref=sr_1_1_sspa"
              target="_blank"
              className="inline-block mt-auto text-center bg-[#8B6A43] text-white py-2 px-4 rounded-full hover:bg-[#735739] transition"
            >
              View on Amazon →
            </Link>
          </div>

          {/* Product 2 */}
          <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition flex flex-col p-6 h-full">
            <div className="w-full h-[240px] flex justify-center items-center mb-4">
              <Image
                src="/week37-product2.jpg"
                alt="Nature’s Miracle Urine Destroyer Plus Dog"
                width={400}
                height={240}
                className="object-contain max-h-[220px]"
              />
            </div>
            <div className="flex-grow text-left">
              <h5 className="font-semibold text-[#111827] mb-1">
                Nature’s Miracle Urine Destroyer Plus Dog (32 oz) – Enzymatic Formula
              </h5>
              <p className="text-sm text-gray-600 mb-2">Seller: Nature’s Miracle</p>
              <p className="text-[#8B6A43] font-semibold mb-3">$23.31</p>
            </div>
            <Link
              href="https://www.amazon.ca/Natures-Miracle-Urine-Destroyer-Plus/dp/B09KQVCC67/ref=sr_1_9"
              target="_blank"
              className="inline-block mt-auto text-center bg-[#8B6A43] text-white py-2 px-4 rounded-full hover:bg-[#735739] transition"
            >
              View on Amazon →
            </Link>
          </div>
        </div>
      </section>


      {/* ===== MANAGEMENT ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">
          🐕‍🦺 Behavioural Management & Training
        </h4>
        <ul className="list-disc list-inside text-gray-700 mb-3">
          <li>Limit space until consistent potty behaviour returns.</li>
          <li>Praise every correct bathroom action.</li>
          <li>Consider neutering if marking seems hormone-driven.</li>
          <li>Never yell or punish — it worsens anxiety.</li>
        </ul>
        <p className="text-gray-700 text-sm">
          💡 <strong>PetGo Tip:</strong> If marking persists, rule out medical issues
          like infections or stones with your vet.
        </p>
      </section>

      {/* ===== VET HELP ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-[#fffaf5] border border-[#e6dccf] p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">💡 When to Seek Veterinary Help</h4>
        <p className="text-gray-700 leading-relaxed mb-3">
          Marking can mimic urinary illness. Visit your vet if your dog:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-3 space-y-1">
          <li>Urinates frequently in small amounts.</li>
          <li>Cries or strains while urinating.</li>
          <li>Has blood in urine.</li>
          <li>Suddenly breaks house-training routines.</li>
        </ul>
        <p className="text-gray-700 text-sm">
          🩺 <strong>PetGo Reminder:</strong> Always rule out medical issues before addressing behaviour.
        </p>
      </section>

      {/* ===== TRUST BUILDING ===== */}
      <section className="max-w-3xl mx-auto mb-16 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-3">💞 Building Trust Through Understanding</h4>
        <p className="text-gray-700 leading-relaxed mb-3">
          Marking fades as your puppy gains confidence and emotional security.
          Replace frustration with calm consistency — your dog learns best through trust, not tension.
        </p>
        <p className="text-gray-700 text-sm">
          💛 <strong>PetGo Reminder:</strong> Understanding first — correction second. A calm
          guardian builds a confident companion.
        </p>
      </section>

      {/* ===== QUICK SUMMARY ===== */}
      <section className="max-w-3xl mx-auto mb-16 bg-[#fffaf5] border border-[#e6dccf] p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-3">🌟 Quick Summary</h4>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Avoid punishment — focus on calm correction.</li>
          <li>Reduce stress with routine, exercise, and play.</li>
          <li>Eliminate odours completely to prevent remarking.</li>
          <li>Consult a vet to rule out medical issues.</li>
          <li>Celebrate small improvements — progress builds confidence.</li>
        </ul>
      </section>

      {/* ===== APP ADVERTISEMENT + COPYRIGHT ===== */}
      <section className="text-center max-w-4xl mx-auto mb-20">
        <h4 className="font-semibold mb-3 text-[#111827]">
          Continue with PetGo’s Puppy Care Guide
        </h4>
        <p className="text-gray-700 mb-10">
          Track potty habits, training routines, and behavioural milestones easily with
          the PetGo App — your puppy’s progress companion.
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
