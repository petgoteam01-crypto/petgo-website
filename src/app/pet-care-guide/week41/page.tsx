"use client";

import Image from "next/image";
import Link from "next/link";

export default function Week41Page() {
  return (
    <main className="min-h-screen bg-[#F9F6F1] text-[#111827] py-16 px-6">
      {/* ===== HEADER ===== */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-2">
          Puppy Care Guide
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-[#8B6A43]">
          Week 41 – Navigating the Adolescent Phase (“Puppy Puberty”)
        </h2>
      </div>

      {/* ===== SMARTIE IMAGE ===== */}
      <div className="flex justify-center mb-10">
        <Image
          src="/week41mainpic.jpg"
          alt="Adolescent puppy exploring"
          width={600}
          height={400}
          className="rounded-2xl shadow-md object-cover"
        />
      </div>

      {/* ===== INTRO ===== */}
      <section className="text-center max-w-3xl mx-auto mb-12">
        <p className="text-gray-700 leading-relaxed">
          Your pup is now around 10 months old — the canine equivalent of a
          teenager! This period brings curiosity, independence, and plenty of
          energy. With patience, structure, and affection, you’ll both navigate
          this lively phase together.
        </p>
      </section>

      {/* ===== TEENAGE PHASE ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">
           The “Teenage” Phase Explained
        </h4>
        <p className="text-gray-700 leading-relaxed mb-3">
          During adolescence, even the best-trained puppy may suddenly ignore
          commands, test limits, or chew on things they shouldn’t. This is a
          natural step toward independence — your dog is learning confidence
          while still needing gentle guidance.
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Ignoring known commands</li>
          <li>Testing boundaries and chewing</li>
          <li>Sudden bursts of energy or defiance</li>
        </ul>
      </section>

      {/* ===== COMMON SIGNS ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-[#fffaf5] border border-[#e6dccf] p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">
           Common Signs of Puppy Puberty
        </h4>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mb-3">
          <li>Chewing or destruction (shoes, paper, furniture)</li>
          <li>“Selective hearing” toward basic commands</li>
          <li>Excessive zoomies, jumping, or seeking attention</li>
          <li>Marking or frequent urination indoors</li>
          <li>Mild guarding or mood changes from hormones</li>
        </ul>
        <p className="text-[#8B6A43] text-sm">
          💡 <strong>PetPro Tip:</strong> Deep breaths — this phase is
          temporary! Consistency and calm leadership matter most.
        </p>
      </section>

      {/* ===== DON’T SCOLD ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4"> Don’t Scold — Guide</h4>
        <p className="text-gray-700 leading-relaxed mb-3">
          Avoid yelling or overreacting — it can create fear or confusion.
          Instead, redirect unwanted behavior and reward the right choices.
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Redirect to toys or approved chew items.</li>
          <li>Reward good behavior immediately.</li>
          <li>Keep training sessions short, upbeat, and frequent.</li>
        </ul>
        <p className="text-gray-700 text-sm mt-3">
          Over time, calm consistency will replace frustration with trust.
        </p>
      </section>

      {/* ===== CHEWING SOLUTIONS ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-[#fffaf5] border border-[#e6dccf] p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">
          🧘 Stress Relief & Chewing Solutions
        </h4>
        <p className="text-gray-700 leading-relaxed mb-3">
          Chewing releases endorphins and reduces stress. Offer safe, natural
          chews that keep your dog busy and relaxed:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mb-3">
          <li>Bully sticks or beef tendons</li>
          <li>Dental chews and natural ears</li>
          <li>Pig or cow hide twists</li>
        </ul>
        <p className="text-[#8B6A43] text-sm">
          ⚠️ <strong>PetGo Tip:</strong> Choose Canadian-approved, single-ingredient
          chews — avoid low-quality imports with fillers or chemicals.
        </p>
      </section>

            {/* ===== PETGO SHOP ===== */}
      <section className="max-w-5xl mx-auto mb-20">
        <h4 className="font-semibold mb-3 text-[#8B6A43]">
          🦷 PetGo Shop{" "}
          <span className="text-[#111827] font-medium">
            | Strengthen your pup’s teeth and keep breath fresh during Week 41.
          </span>
        </h4>

        <p className="text-gray-700 mb-8">
          💡 <strong>PetGo Dental Tip:</strong> Chewing natural treats like bully sticks or dental chews helps clean teeth,
          reduce tartar buildup, and satisfy your pup’s natural chewing instinct.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-8">
          {/* Product 1 */}
          <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition flex flex-col p-6 h-full">
            <div className="w-full h-[240px] flex justify-center items-center mb-4">
              <Image
                src="/week41-product1.jpg"
                alt="Bully Bunches Premium Odour-Free Bully Sticks"
                width={400}
                height={240}
                className="object-contain max-h-[220px]"
              />
            </div>
            <div className="flex-grow text-left">
              <h5 className="font-semibold text-[#111827] mb-1">
                Bully Bunches Premium 6” Odour-Free Bully Sticks (5 Pack)
              </h5>
              <p className="text-sm text-gray-600 mb-2">Seller: Bully Bunches</p>
              <p className="text-[#8B6A43] font-semibold mb-3">$21.97</p>
            </div>
            <Link
              href="https://www.amazon.ca/Bully-Bunches-Standard-Odour-Free-Puppies/dp/B073W9KBNY/ref=sr_1_5"
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
                src="/week41-product2.jpg"
                alt="Crumps' Naturals Bacon Dental Dog Treats"
                width={400}
                height={240}
                className="object-contain max-h-[220px]"
              />
            </div>
            <div className="flex-grow text-left">
              <h5 className="font-semibold text-[#111827] mb-1">
                Crumps' Naturals PBB-3.5” Bacon Dental Dog Treats (18 Pack)
              </h5>
              <p className="text-sm text-gray-600 mb-2">Seller: Crumps' Naturals</p>
              <p className="text-[#8B6A43] font-semibold mb-3">$11.99</p>
            </div>
            <Link
              href="https://www.amazon.ca/Crumps-Naturals-PBB-4-5-8pk-Busters/dp/B07GBVL3NG/ref=sr_1_4_sspa"
              target="_blank"
              className="inline-block mt-auto text-center bg-[#8B6A43] text-white py-2 px-4 rounded-full hover:bg-[#735739] transition"
            >
              View on Amazon →
            </Link>
          </div>
        </div>
      </section>



      {/* ===== DENTAL CARE ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">
          🦷 Dental & Overall Health Care
        </h4>
        <p className="text-gray-700 leading-relaxed">
          Introduce brushing or dental rinses now to prevent plaque buildup.
          A nutrient-rich diet with balanced calcium and phosphorus supports
          teeth and bone strength as your dog reaches adult size.
        </p>
      </section>

      {/* ===== OUTLETS ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-[#fffaf5] border border-[#e6dccf] p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">
           Managing Restlessness: Mental & Physical Outlets
        </h4>
        <p className="text-gray-700 leading-relaxed mb-3">
          Structured activities channel your dog’s curiosity and energy
          productively:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Daily walks and socialization with calm dogs</li>
          <li>Interactive play (fetch, tug, puzzle feeders)</li>
          <li>Short obedience refreshers and recall practice</li>
          <li>Scent games or hide-and-seek for mental engagement</li>
        </ul>
      </section>

      {/* ===== FOUR GOLDEN RULES ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">
          💡 Four Golden Rules for This Stage
        </h4>
        <ol className="list-decimal list-inside text-gray-700 space-y-1 mb-3">
          <li>Avoid harsh punishment — it damages trust.</li>
          <li>Train consistently with firm but friendly tone.</li>
          <li>Provide ample exercise before expecting calmness.</li>
          <li>Be patient and communicative — lead calmly.</li>
        </ol>
        <p className="text-gray-700 text-sm">
          💛 If overwhelmed, seek vet-approved aids (sprays, training tools)
          that correct behavior safely — never those causing pain or fear.
        </p>
      </section>

      {/* ===== HORMONAL CHANGES ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-[#fffaf5] border border-[#e6dccf] p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">
          💬 Understanding Hormonal Changes
        </h4>
        <p className="text-gray-700 leading-relaxed">
          At this stage, hormones fluctuate, influencing focus and mood.
          Neutering or spaying (when advised by your vet) can reduce marking and
          roaming. Balanced nutrition, regular exercise, and adequate rest also
          promote emotional stability.
        </p>
      </section>

      {/* ===== CLOSING ===== */}
      <section className="max-w-3xl mx-auto mb-16 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-3">
          Remember: This Too Shall Pass
        </h4>
        <p className="text-gray-700 leading-relaxed mb-3">
          The adolescent stage may be chaotic, but it’s also full of growth and
          discovery. The love and patience you show now shape a lifetime of
          trust and calm companionship.
        </p>
        <p className="text-[#8B6A43] text-sm">
          🐾 <strong>PetGo Reminder:</strong> Adolescence lasts only months —
          but the lessons you teach now will last forever.
        </p>
      </section>

      {/* ===== APP BANNER ===== */}
      <section className="text-center max-w-4xl mx-auto mb-20">
        <h4 className="font-semibold mb-3 text-[#111827]">
          Continue with PetGo’s Puppy Care Guide
        </h4>
        <p className="text-gray-700 mb-10">
          Track your puppy’s growth, training, and emotional milestones with
          the PetGo App — your trusted companion for every stage.
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
