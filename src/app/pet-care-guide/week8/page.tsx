"use client";

import Image from "next/image";
import Link from "next/link";

export default function Week8Page() {
  return (
    <main className="min-h-screen bg-[#F9F6F1] text-[#111827] py-16 px-6">
      {/* ===== HEADER ===== */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-2">
          Puppy Care Guide
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-[#8B6A43]">
          Week 8 – Teething and Early Training
        </h2>
      </div>

      

      {/* ===== INTRO ===== */}
      <section className="text-center max-w-3xl mx-auto mb-12">
        <h3 className="text-xl font-semibold mb-3">
          “Nibble nibble, teething time!”
        </h3>
        <p className="text-gray-700 leading-relaxed">
          Have you noticed your adorable puppy starting to bite or chew more often?
          It may look cute at first, but as those tiny teeth grow sharper, their playful
          nips can quickly become painful. Let’s explore what’s happening and how to
          guide your puppy safely through this important stage.
        </p>
      </section>

      {/* ===== UNDERSTANDING TEETHING ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold mb-4">🦷 Understanding Puppy Teething</h4>
        <p className="text-gray-700 leading-relaxed mb-4">
          Puppies begin teething around three weeks of age. Their baby teeth—also called
          milk or deciduous teeth—appear in sequence: incisors, canines, and premolars.
          By eight weeks old, most have about 28 small, sharp teeth.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          These baby teeth will naturally fall out as adult teeth emerge around four months.
          If some don’t fall out properly, consult your veterinarian—manual extraction may be
          needed to prevent misalignment or discomfort.
        </p>

        {/* ===== IMAGE BELOW TEETHING SECTION ===== */}
        <div className="flex justify-center">
          <Image
            src="/week8-teething.jpg"
            alt="Puppy teething illustration"
            width={400}
            height={300}
            className="rounded-2xl shadow-md object-cover"
          />
        </div>
      </section>

      {/* ===== WHY PUPPIES BITE ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold mb-4">🐶 Why Puppies Bite</h4>
        <p className="text-gray-700 leading-relaxed mb-4">
          Chewing and biting are how puppies explore the world. They learn about textures,
          tastes, and emotions through their mouths. Biting is rarely aggressive—it's part
          of communication and curiosity.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Between 7–9 weeks, mother dogs teach bite inhibition by yelping or withdrawing
          when bitten too hard. Once your puppy joins your home, you’ll continue this gentle
          teaching process.
        </p>
      </section>

      {/* ===== CORRECTING BITING ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold mb-4">💡 How to Correct Biting Behavior Kindly</h4>
        <ul className="list-disc list-inside space-y-3 text-gray-700">
          <li>
            Respond immediately with a calm but firm <strong>“No!”</strong> or
            <strong> “Ouch!”</strong> to signal discomfort.
          </li>
          <li>
            Avoid shouting or physical scolding—it can confuse or even excite your puppy.
          </li>
          <li>
            Pause play briefly when biting happens to teach that rough play ends the fun.
          </li>
          <li>
            Keep responses consistent among all family members—mixed messages delay learning.
          </li>
          <li>
            Redirect with soft chew toys or teething rings. Show your puppy toys are for
            chewing—not hands.
          </li>
        </ul>
      </section>

      {/* ===== POTTY TRAINING ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold mb-4">🚽 Potty Training Begins</h4>
        <p className="text-gray-700 leading-relaxed mb-4">
          At this stage, toilet training becomes essential. You might notice sniffing or
          circling—these are cues your puppy is looking for a spot to go.
        </p>
        <ul className="list-disc list-inside space-y-3 text-gray-700 mb-4">
          <li>
            Create a designated potty area using pads or turf. If you have a larger home,
            use multiple pads (about four) to reduce mistakes.
          </li>
          <li>
            Never scold for accidents—clean thoroughly with enzyme-based sprays to eliminate
            lingering odors.
          </li>
        </ul>
        <p className="text-gray-700 leading-relaxed">
          Positive reinforcement builds habits faster. Praise or reward your puppy each
          time they use the right spot.
        </p>
      </section>

{/* ===== RECOMMENDED ESSENTIALS ===== */}
<section className="max-w-5xl mx-auto mb-16 bg-white p-8 rounded-2xl shadow-sm">
  <h4 className="font-semibold mb-4 text-[#8B6A43]">
    PetGo Shop | Recommended Essentials
  </h4>
  <p className="text-gray-700 mb-8">
    Support your puppy’s teething, hygiene, and playtime with these vet-approved picks:
  </p>

  <div className="grid md:grid-cols-3 gap-8">
    {/* Product 1 – Ez-Clean Odor Remover */}
    <div className="bg-[#F9F6F1] rounded-2xl shadow-sm hover:shadow-md transition flex flex-col p-6 text-center h-full">
      <div className="w-full h-[220px] flex justify-center items-center mb-4">
        <Image
          src="/ez-clean-odor-remover.jpg"
          alt="Ez-Clean Advanced Odor Remover"
          width={200}
          height={200}
          className="object-contain max-h-[200px] rounded-xl"
        />
      </div>
      <div className="flex flex-col flex-grow justify-between">
        <div>
          <p className="text-gray-800 font-medium mb-1">
            Advanced Odor Remover – Highly Concentrated Bio Enzyme Pet Odor Eliminator (1 L)
          </p>
          <p className="text-sm text-gray-500 mb-2">by Ez-Clean</p>
        </div>
        <div>
          <p className="text-[#8B6A43] font-semibold mb-2">$19.95</p>
          <Link
            href="https://www.amazon.ca/ez-clean-Advanced-Remover-Concentrated-Eliminator/dp/B07BMKDXHB"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8B6A43] hover:underline font-medium text-sm"
          >
            View on Amazon &gt;
          </Link>
        </div>
      </div>
    </div>

    {/* Product 2 – Benebone Puppy Chew Toys */}
    <div className="bg-[#F9F6F1] rounded-2xl shadow-sm hover:shadow-md transition flex flex-col p-6 text-center h-full">
      <div className="w-full h-[220px] flex justify-center items-center mb-4">
        <Image
          src="/benebone-puppy-pack.jpg"
          alt="Benebone Puppy 2-Pack Maplestick/Zaggler Chew Toys"
          width={200}
          height={200}
          className="object-contain max-h-[200px] rounded-xl"
        />
      </div>
      <div className="flex flex-col flex-grow justify-between">
        <div>
          <p className="text-gray-800 font-medium mb-1">
            Benebone Puppy 2-Pack Maplestick/Zaggler Durable Dog Chew Toys – Real Bacon &amp; Maplewood
          </p>
          <p className="text-sm text-gray-500 mb-2">by Benebone</p>
        </div>
        <div>
          <p className="text-[#8B6A43] font-semibold mb-2">$16.45</p>
          <Link
            href="https://www.amazon.ca/Benebone-Puppy-Maplestick-Zaggler-Flavor/dp/B07YM3SFH6"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8B6A43] hover:underline font-medium text-sm"
          >
            View on Amazon &gt;
          </Link>
        </div>
      </div>
    </div>

    {/* Product 3 – Carllg Dog Chew Toy */}
    <div className="bg-[#F9F6F1] rounded-2xl shadow-sm hover:shadow-md transition flex flex-col p-6 text-center h-full">
      <div className="w-full h-[220px] flex justify-center items-center mb-4">
        <Image
          src="/carllg-corn-chew-toy.jpg"
          alt="Carllg Dog Chew Toy for Aggressive Chewers"
          width={200}
          height={200}
          className="object-contain max-h-[200px] rounded-xl"
        />
      </div>
      <div className="flex flex-col flex-grow justify-between">
        <div>
          <p className="text-gray-800 font-medium mb-1">
            Carllg Tough Squeaky Corn Stick Toy – Durable Interactive Chew for Small to Large Dogs
          </p>
          <p className="text-sm text-gray-500 mb-2">by Carllg</p>
        </div>
        <div>
          <p className="text-[#8B6A43] font-semibold mb-2">$16.99</p>
          <Link
            href="https://www.amazon.ca/Toothbrush-Interactive-Squeaky-Aggressive-Chewers/dp/B08NJJQ1KW"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8B6A43] hover:underline font-medium text-sm"
          >
            View on Amazon &gt;
          </Link>
        </div>
      </div>
    </div>
  </div>
</section>




      {/* ===== BUILDING TRUST ===== */}
      <section className="max-w-3xl mx-auto mb-16 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold mb-4">💕 Building Trust and Confidence</h4>
        <p className="text-gray-700 leading-relaxed mb-4">
          This week, your puppy is learning fast—not only about potty or chewing habits,
          but also about trust. With just one to two months of consistent care, your puppy
          will form lifelong habits and bond deeply with you.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Every gentle correction, every kind word, and every patient moment becomes part
          of that lifelong relationship.
        </p>
      </section>

      {/* ===== PETGO TIP ===== */}
      <section className="text-center max-w-3xl mx-auto mb-16">
        <div className="bg-[#fffaf5] border border-[#e6dccf] rounded-2xl shadow-sm p-8">
          <h5 className="font-semibold text-[#8B6A43] mb-3">🐾 PetGo Tip</h5>
          <p className="text-gray-700 leading-relaxed">
            Healthy routines built early—like teething care, gentle correction, and
            structured potty training—help your puppy grow into a confident, calm, and
            happy companion.
          </p>
        </div>
      </section>

      {/* ===== CONTINUE / APP PROMOTION ===== */}
      <section className="text-center max-w-4xl mx-auto mb-20">
        <h4 className="font-semibold mb-3 text-[#111827]">
          Continue with PetGo's Puppy Care Guide
        </h4>
        <p className="text-gray-700 mb-10">
          From their first health check-up to socialization milestones, every week
          matters in your puppy’s growth journey. PetGo is here to help every step of the way.
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
              className="inline-block border border-[#ffffff] text-[#ffffff] hover:bg-[#ffffff] hover:text-[#8B6A43] px-6 py-3 rounded-lg font-medium shadow-sm transition"
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
