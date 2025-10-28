"use client";

import Image from "next/image";
import Link from "next/link";

export default function Week47Page() {
  return (
    <main className="min-h-screen bg-[#F9F6F1] text-[#111827] py-16 px-6">
      {/* ===== HEADER ===== */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-2">
          Puppy Care Guide
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-[#8B6A43]">
          Week 47 – The Transition to Adult Dog Food
        </h2>
      </div>

      {/* ===== SMARTIE IMAGE ===== */}
      <div className="flex justify-center mb-10">
        <Image
          src="/week47mainpic.jpg"
          alt="Dog eating healthy adult food"
          width={600}
          height={400}
          className="rounded-2xl shadow-md object-cover"
        />
      </div>

      {/* ===== INTRO ===== */}
      <section className="text-center max-w-3xl mx-auto mb-12">
        <p className="text-gray-700 leading-relaxed">
          Your puppy is already 47 weeks old — the final month before their first
          birthday! You’ve guided your dog through every phase of growth, and
          now it’s time for the next milestone: transitioning from puppy food to
          adult maintenance food.
        </p>
      </section>

      {/* ===== RIGHT TIME ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">
          🕒 The Right Time for a Food Change
        </h4>
        <p className="text-gray-700 leading-relaxed mb-3">
          We first mentioned this transition back in <strong>Week 21</strong>,
          but now at 47 weeks old, most dogs are ready to begin switching to
          adult food.
        </p>
        <p className="text-gray-700 leading-relaxed">
          <strong>Important for large breeds:</strong> Large or giant dogs
          should remain on puppy formulas until 18 – 24 months, unless your vet
          advises otherwise. Their growth period is longer and requires extended
          nutritional support.
        </p>
      </section>

      {/* ===== WHY CHANGE ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-[#fffaf5] border border-[#e6dccf] p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">
           Why the Change Is Necessary
        </h4>
        <p className="text-gray-700 leading-relaxed mb-3">
          Puppy formulas are designed with extra protein, fat, and calories to
          fuel rapid growth. Once growth slows, continuing these high levels can
          cause excess weight gain and metabolic stress.
        </p>
        <p className="text-gray-700 leading-relaxed mb-3">
          Adult food offers a balanced ratio of nutrients and minerals suited to
          maintenance rather than growth. For instance, calcium is lower to
          prevent potential joint strain once growth plates close.
        </p>
        <p className="text-gray-700 leading-relaxed">
          <strong>In short:</strong> puppies need puppy food — adults need adult
          food.
        </p>
      </section>

      {/* ===== CHECKLIST ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">
           Is Your Dog Ready? The Growth Checklist
        </h4>
        <p className="text-gray-700 leading-relaxed mb-4">
          Check these signs to see if your dog is ready for adult nutrition:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Weight has stabilized over the past few weeks.</li>
          <li>They often leave a bit of food behind instead of finishing all.</li>
          <li>Harnesses or sweaters from months ago still fit properly.</li>
          <li>Skin elasticity is firm — it snaps back quickly when lifted.</li>
          <li>Body shape and size have remained consistent recently.</li>
        </ul>
        <p className="text-[#8B6A43] text-sm mt-3">
          🐾 <strong>PetGo Tip:</strong> Small and medium breeds finish growth by
          12 months. Large breeds → continue puppy food longer.
        </p>
      </section>

      {/* ===== SWITCH SUCCESSFULLY ===== */}
      <section className="max-w-3xl mx-auto mb-16 bg-[#fffaf5] border border-[#e6dccf] p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">
           Making the Switch Successfully
        </h4>
        <p className="text-gray-700 leading-relaxed mb-3">
          Switching isn’t just pouring a new kibble into the bowl — it’s a
          gradual process. Follow the feeding guide on your new bag carefully,
          since adult food has a different caloric density.
        </p>
        <p className="text-gray-700 leading-relaxed mb-3">
          Choose a formula that fits your dog’s lifestyle: <em>active,
          sensitive stomach, or weight-control</em>. This is also a great moment
          to explore high-quality brands with better protein sources and natural
          ingredients.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Need help choosing? PetGo’s “Food Finder” tool can help match your
          dog’s breed, age, and activity level with the perfect adult formula.
        </p>
      </section>

            {/* ===== PETGO SHOP ===== */}
      <section className="max-w-5xl mx-auto mb-20">
        <h4 className="font-semibold mb-3 text-[#8B6A43]">
          PetGo Shop{" "}
          <span className="text-[#111827] font-medium">
            | Advanced nutrition for your growing pup – Week 47.
          </span>
        </h4>

        <p className="text-gray-700 mb-8">
          💡 <strong>PetGo Nutrition Tip:</strong> Transition your puppy gradually to adult food by mixing
          25% new formula with 75% puppy food for the first few days — this helps digestion adjust
          smoothly while maintaining balanced nutrition.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-8">
          {/* Product 1 */}
          <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition flex flex-col p-6 h-full">
            <div className="w-full h-[240px] flex justify-center items-center mb-4">
              <Image
                src="/week47-product1.jpg"
                alt="Open Farm Epic Blend High Protein Dry Dog Food"
                width={380}
                height={240}
                className="object-contain max-h-[220px]"
              />
            </div>
            <div className="flex-grow text-left">
              <h5 className="font-semibold text-[#111827] mb-1">
                Open Farm Epic Blend High Protein Dry Dog Food, Chicken & Superfood Recipe (3.5 lb)
              </h5>
              <p className="text-sm text-gray-600 mb-2">Seller: Open Farm</p>
              <p className="text-[#8B6A43] font-semibold mb-3">$44.99</p>
            </div>
            <Link
              href="https://www.amazon.ca/Open-Farm-Probiotic-Minimally-Processed/dp/B0F4RP2DS2/ref=sr_1_2_sspa"
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
                src="/week47-product2.jpg"
                alt="Purina ONE Dry Dog Food Lamb & Rice"
                width={380}
                height={240}
                className="object-contain max-h-[220px]"
              />
            </div>
            <div className="flex-grow text-left">
              <h5 className="font-semibold text-[#111827] mb-1">
                Purina ONE Dry Dog Food, Lamb & Rice (14 kg)
              </h5>
              <p className="text-sm text-gray-600 mb-2">Seller: Purina ONE</p>
              <p className="text-[#8B6A43] font-semibold mb-3">$49.98</p>
            </div>
            <Link
              href="https://www.amazon.ca/Purina-ONE%C2%AE-SmartBlend-Dry-Food/dp/B00KACLOAS/ref=sr_1_6"
              target="_blank"
              className="inline-block mt-auto text-center bg-[#8B6A43] text-white py-2 px-4 rounded-full hover:bg-[#735739] transition"
            >
              View on Amazon →
            </Link>
          </div>

          {/* Product 3 */}
          <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition flex flex-col p-6 h-full">
            <div className="w-full h-[240px] flex justify-center items-center mb-4">
              <Image
                src="/week47-product3.jpg"
                alt="Orijen Grain Free Regional Red Dry Dog Food"
                width={380}
                height={240}
                className="object-contain max-h-[220px]"
              />
            </div>
            <div className="flex-grow text-left">
              <h5 className="font-semibold text-[#111827] mb-1">
                Orijen Grain Free High Protein Dry Dog Food, Regional Red Recipe (13 lb)
              </h5>
              <p className="text-sm text-gray-600 mb-2">Seller: Orijen</p>
              <p className="text-[#8B6A43] font-semibold mb-3">$124.99</p>
            </div>
            <Link
              href="https://www.amazon.ca/ORIJEN-REGIONAL-Grain-Poultry-Ingredients/dp/B01MQKC7D4/ref=sr_1_5"
              target="_blank"
              className="inline-block mt-auto text-center bg-[#8B6A43] text-white py-2 px-4 rounded-full hover:bg-[#735739] transition"
            >
              View on Amazon →
            </Link>
          </div>
        </div>
      </section>




      {/* ===== APP BANNER ===== */}
      <section className="text-center max-w-4xl mx-auto mb-20">
        <h4 className="font-semibold mb-3 text-[#111827]">
          Continue with PetGo’s Puppy Care Guide
        </h4>
        <p className="text-gray-700 mb-10">
          Use the PetGo App to log meals, compare ingredients, and get reminders
          for diet transitions. Track weight changes and nutrition progress as
          your dog enters adulthood.
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
