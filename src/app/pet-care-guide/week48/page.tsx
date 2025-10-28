"use client";

import Image from "next/image";
import Link from "next/link";

export default function Week48Page() {
  return (
    <main className="min-h-screen bg-[#F9F6F1] text-[#111827] py-16 px-6">
      {/* ===== HEADER ===== */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-2">
          Puppy Care Guide
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-[#8B6A43]">
          Week 48 – The Meaning of Adulthood (Excluding Large Breeds)
        </h2>
      </div>

      {/* ===== SMARTIE IMAGE ===== */}
      <div className="flex justify-center mb-10">
        <Image
          src="/week48mainpic.jpg"
          alt="Happy dog celebrating first birthday"
          width={600}
          height={400}
          className="rounded-2xl shadow-md object-cover"
        />
      </div>

      {/* ===== INTRO ===== */}
      <section className="text-center max-w-3xl mx-auto mb-12">
        <p className="text-gray-700 leading-relaxed">
          Your puppy is already 48 weeks old — congratulations! 🎉  
          The little one who once tripped over their paws has now grown into a
          confident companion. For most small and medium breeds, the one-year
          mark signifies the end of rapid growth and the beginning of true
          adulthood.
        </p>
      </section>

      {/* ===== WHAT ADULT MEANS ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">
          🐾 What Does “Adult Dog” Really Mean?
        </h4>
        <p className="text-gray-700 leading-relaxed mb-3">
          From around one year onward, dogs are considered fully grown. Small
          breeds usually complete growth by this stage, while large or giant
          breeds can take up to two or even three years to mature.
        </p>
        <p className="text-gray-700 leading-relaxed">
          As your dog enters adulthood, their metabolism, appetite, and behavior
          begin to stabilize. This means it’s time to adjust routines that were
          once focused on puppy growth.
        </p>
      </section>

      {/* ===== 1. WEIGHT MONITORING ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-[#fffaf5] border border-[#e6dccf] p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4"> 1. Weight Monitoring</h4>
        <p className="text-gray-700 leading-relaxed mb-3">
          You no longer need to weigh your dog weekly — once a month is enough.
          Their body weight should remain fairly stable now. A sudden gain or
          loss may indicate a medical concern, so check with your vet if that
          happens.
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>
            <strong>Ideal:</strong> Ribs easily felt under a light fat layer.
          </li>
          <li>
            <strong>Overweight:</strong> Ribs only felt with firm pressure.
          </li>
          <li>
            <strong>Underweight:</strong> Ribs visible or sharp to the touch.
          </li>
        </ul>
      </section>

      {/* ===== 2. ADULT FOOD ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">
        2. Adult Dog Food & Feeding Schedule
        </h4>
        <p className="text-gray-700 leading-relaxed mb-3">
          Time to switch from 3–4 small meals a day to two balanced meals. Most
          adult dogs thrive on a morning and evening feeding routine.
        </p>
        <p className="text-gray-700 leading-relaxed mb-3">
          If your dog starts leaving food behind, it’s a sign their caloric
          needs have decreased. Follow the feeding guide on your adult dog food
          bag, adjusting based on activity and body condition.
        </p>
        <p className="text-gray-700 leading-relaxed">
          <strong>Note:</strong> Adult dog formulas differ from puppy food in
          caloric density and mineral content. Using the correct food helps
          maintain ideal weight and joint health.
        </p>
      </section>


                  {/* ===== PETGO SHOP ===== */}
      <section className="max-w-5xl mx-auto mb-20">
        <h4 className="font-semibold mb-3 text-[#8B6A43]">
          PetGo Shop{" "}
          <span className="text-[#111827] font-medium">
            | Advanced nutrition for your growing pup – Week 48.
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




      {/* ===== 3. SUPPLIES ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-[#fffaf5] border border-[#e6dccf] p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">
         3. Upgrading Supplies & Gear
        </h4>
        <p className="text-gray-700 leading-relaxed mb-3">
          It’s time to retire the tiny puppy bed! Upgrade to a full-sized bed or
          cushion that allows your adult dog to stretch comfortably. Likewise,
          check harnesses, collars, and leashes for fit and durability.
        </p>
        <p className="text-gray-700 leading-relaxed mb-3">
          An ill-fitting harness can cause rubbing or make walks stressful.
          Choose sturdy materials suitable for your dog’s new strength.
        </p>
        <p className="text-gray-700 leading-relaxed">
          <strong>Safety Tip:</strong> Most Canadian cities require leashes no
          longer than 2 m (about 6 ft) in public areas. Using the correct leash
          ensures control, safety, and legal compliance.
        </p>
      </section>

            {/* ===== PETGO SHOP ===== */}
      <section className="max-w-5xl mx-auto mb-20">
        <h4 className="font-semibold mb-3 text-[#8B6A43]">
          🦮 PetGo Shop{" "}
          <span className="text-[#111827] font-medium">
            | Train and walk your pup safely during Week 48.
          </span>
        </h4>

        <p className="text-gray-700 mb-8">
          💡 <strong>PetGo Training Tip:</strong> A well-fitted harness or slip lead makes walking
          sessions safer and more comfortable — preventing pulling and protecting your pup’s neck.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-8">
          {/* Product 1 */}
          <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition flex flex-col p-6 h-full">
            <div className="w-full h-[240px] flex justify-center items-center mb-4">
              <Image
                src="/week48-product1.jpg"
                alt="Fida Durable Slip Lead Heavy Duty Rope Leash Green"
                width={400}
                height={240}
                className="object-contain max-h-[220px]"
              />
            </div>
            <div className="flex-grow text-left">
              <h5 className="font-semibold text-[#111827] mb-1">
                Fida Durable Slip Lead (6 FT × 1/2”) – Heavy Duty Rope, Reflective Green
              </h5>
              <p className="text-sm text-gray-600 mb-2">Seller: Fida</p>
              <p className="text-[#8B6A43] font-semibold mb-3">$22.99</p>
            </div>
            <Link
              href="https://www.amazon.ca/Fida-Durable-Comfortable-Training-Reflective/dp/B08Y1SDD54/ref=sr_1_21_sspa"
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
                src="/week48-product2.jpg"
                alt="rabbitgoo No-Pull Dog Harness Adjustable Padded Vest"
                width={400}
                height={240}
                className="object-contain max-h-[220px]"
              />
            </div>
            <div className="flex-grow text-left">
              <h5 className="font-semibold text-[#111827] mb-1">
                rabbitgoo No-Pull Dog Harness, Adjustable Padded Vest with Handle (Large, Black)
              </h5>
              <p className="text-sm text-gray-600 mb-2">Seller: rabbitgoo</p>
              <p className="text-[#8B6A43] font-semibold mb-3">$29.99</p>
            </div>
            <Link
              href="https://www.amazon.ca/Rabbitgoo-Harness-Adjustable-Outdoor-Material/dp/B01M8JT6FT/ref=sr_1_5"
              target="_blank"
              className="inline-block mt-auto text-center bg-[#8B6A43] text-white py-2 px-4 rounded-full hover:bg-[#735739] transition"
            >
              View on Amazon →
            </Link>
          </div>
        </div>
      </section>



      {/* ===== CELEBRATION ===== */}
      <section className="max-w-3xl mx-auto mb-16 bg-white p-8 rounded-2xl shadow-sm text-center">
        <h4 className="font-semibold text-[#8B6A43] mb-4">
          🎉 A Final Word of Celebration
        </h4>
        <p className="text-gray-700 leading-relaxed">
          Every effort, every meal, every walk you’ve shared has shaped your
          dog’s journey to this moment. You’ve raised not only a pet but a true
          family member. Continue nurturing your bond through patience,
          affection, and shared adventures — the best years are just beginning!
        </p>
      </section>



      {/* ===== APP BANNER ===== */}
      <section className="text-center max-w-4xl mx-auto mb-20">
        <h4 className="font-semibold mb-3 text-[#111827]">
          Continue with PetGo’s Puppy Care Guide
        </h4>
        <p className="text-gray-700 mb-10">
          Use the PetGo App to track your dog’s adult milestones, manage
          feeding plans, and discover tips for the transition into a happy,
          healthy adulthood.
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
