"use client";

import Image from "next/image";
import Link from "next/link";

export default function Week39Page() {
  return (
    <main className="min-h-screen bg-[#F9F6F1] text-[#111827] py-16 px-6">
      {/* ===== HEADER ===== */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-2">
          Puppy Care Guide
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-[#8B6A43]">
          Week 39 – Post-Neutering / Spaying Dietary Management
        </h2>
      </div>

      {/* ===== SMARTIE IMAGE ===== */}
      <div className="flex justify-center mb-10">
        <Image
          src="/week39mainpic.jpg"
          alt="Healthy puppy eating balanced diet"
          width={600}
          height={400}
          className="rounded-2xl shadow-md object-cover"
        />
      </div>

      {/* ===== INTRO ===== */}
      <section className="text-center max-w-3xl mx-auto mb-12">
        <p className="text-gray-700 leading-relaxed">
          Your puppy has reached the 9-month milestone — congratulations!
          Around this age, many dogs undergo neutering or spaying. This marks
          an important turning point for nutrition and weight management.
        </p>
      </section>

      {/* ===== PORTION CONTROL ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">
          🍽 Post-Neutering / Spaying Food Portion Control
        </h4>
        <p className="text-gray-700 leading-relaxed mb-3">
          After surgery, many guardians forget to adjust food portions — yet
          hormonal shifts lower your dog’s metabolism, meaning fewer calories
          are required. Without change, excess calories lead to weight gain.
        </p>
        <p className="text-[#8B6A43] text-sm">
          💡 <strong>PetGo Tip:</strong> A 10 % portion reduction is a smart
          starting point. Observe weight and adjust gradually with your vet’s guidance.
        </p>
      </section>

      {/* ===== HORMONAL CHANGES ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-[#fffaf5] border border-[#e6dccf] p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">
           Hormonal Changes After the Procedure
        </h4>
        <p className="text-gray-700 leading-relaxed">
          Once sex hormones decrease, the basal metabolic rate (BMR) drops.
          Your dog now burns fewer calories at rest, so maintaining previous
          feeding levels often results in unwanted fat gain.
        </p>
      </section>

      {/* ===== WEIGHT GAIN CONSEQUENCES ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">
          🐕 The Direct Consequence: Weight Gain
        </h4>
        <p className="text-gray-700 leading-relaxed mb-3">
          Continuing pre-surgery feeding portions after metabolism slows can
          quickly cause obesity. Excess fat contributes to arthritis,
          diabetes, heart disease, and a shortened lifespan.
        </p>
      </section>

      {/* ===== SOLUTION ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-[#fffaf5] border border-[#e6dccf] p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">
          🩺 The Solution: Adjusting Food Portions
        </h4>
        <p className="text-gray-700 leading-relaxed mb-3">
          Start by feeding roughly 10 % less than before the surgery, then
          tailor further with your vet based on breed, age, and activity level.
          Monitor your dog’s body shape — ribs should be felt easily beneath a
          thin layer of fat.
        </p>
      </section>

      {/* ===== CHOOSING FOOD ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">
          🥩 Choosing the Right Food Matters
        </h4>
        <p className="text-gray-700 leading-relaxed mb-4">
          Post-surgery diets should focus on lean muscle preservation and
          metabolic support. Choose foods rich in quality proteins and natural
          antioxidants.
        </p>
        <ol className="list-decimal list-inside text-gray-700 space-y-2">
          <li>
            <strong>High-Quality Protein Diet:</strong> Meat-first recipes help
            maintain muscle and fullness while reducing carbohydrate load.
            Avoid fillers like potato or tapioca in excess.
          </li>
          <li>
            <strong>Include Berry Fruits:</strong> Blueberries and raspberries
            supply antioxidants that aid metabolism and may support hormonal
            balance post-surgery.
          </li>
        </ol>
      </section>

            {/* ===== PETGO SHOP ===== */}
      <section className="max-w-5xl mx-auto mb-20">
        <h4 className="font-semibold mb-3 text-[#8B6A43]">
           PetGo Shop{" "}
          <span className="text-[#111827] font-medium">
            | Premium puppy meals to support strong growth during Week 39.
          </span>
        </h4>

        <p className="text-gray-700 mb-8">
          💡 <strong>PetGo Nutrition Tip:</strong> Mix high-quality dry food with a small amount of raw meat
          (like beef or salmon) to naturally boost protein and flavor in your puppy’s meal.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-8">
          {/* Product 1 */}
          <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition flex flex-col p-6 h-full">
            <div className="w-full h-[240px] flex justify-center items-center mb-4">
              <Image
                src="/week39-product1.jpg"
                alt="Open Farm Ancient Grains Dry Dog Food for Puppies"
                width={380}
                height={240}
                className="object-contain max-h-[220px]"
              />
            </div>
            <div className="flex-grow text-left">
              <h5 className="font-semibold text-[#111827] mb-1">
                Open Farm Ancient Grains Dry Dog Food for Puppies (4 lb)
              </h5>
              <p className="text-sm text-gray-600 mb-2">Seller: Open Farm</p>
              <p className="text-[#8B6A43] font-semibold mb-3">$31.99</p>
            </div>
            <Link
              href="https://www.amazon.ca/Open-Farm-Wholesome-Artificial-Preservatives/dp/B088C3ZQ11/ref=sr_1_5"
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
                src="/week39-product2.jpg"
                alt="Purina Pro Plan Dry Puppy Food, Lamb & Rice"
                width={380}
                height={240}
                className="object-contain max-h-[220px]"
              />
            </div>
            <div className="flex-grow text-left">
              <h5 className="font-semibold text-[#111827] mb-1">
                Purina Pro Plan Dry Puppy Food, Development Lamb & Rice (15.4 kg)
              </h5>
              <p className="text-sm text-gray-600 mb-2">Seller: Pro Plan</p>
              <p className="text-[#8B6A43] font-semibold mb-3">$92.97</p>
            </div>
            <Link
              href="https://www.amazon.ca/Purina-Focus-Puppy-Formula-34-Pound/dp/B003M674QC/ref=sr_1_2_sspa"
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
                src="/week39-product3.jpg"
                alt="Big Country Raw Pure Beef Carton Dog Food"
                width={380}
                height={240}
                className="object-contain max-h-[220px]"
              />
            </div>
            <div className="flex-grow text-left">
              <h5 className="font-semibold text-[#111827] mb-1">
                Big Country Raw Pure Beef Carton Dog Food
              </h5>
              <p className="text-sm text-gray-600 mb-2">Seller: Big Country Raw</p>
              <p className="text-[#8B6A43] font-semibold mb-3">$25.99</p>
            </div>
            <Link
              href="https://www.petvalu.ca/product/big-country-raw-pure-beef-carton-dog-food/FCM06159"
              target="_blank"
              className="inline-block mt-auto text-center bg-[#8B6A43] text-white py-2 px-4 rounded-full hover:bg-[#735739] transition"
            >
              View on Pet Valu →
            </Link>
          </div>
        </div>
      </section>




      {/* ===== KEY TAKEAWAYS ===== */}
      <section className="max-w-3xl mx-auto mb-16 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-3">
           Key Takeaways for Post-Neutering Care
        </h4>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li> Metabolic shift: energy needs drop post-surgery.</li>
          <li> Start with ~10 % less food; monitor weight monthly.</li>
          <li> Prioritize high-protein, low-glycemic diets.</li>
          <li> Add antioxidants like berries for metabolic support.</li>
          <li> Confirm all adjustments with your veterinarian.</li>
          <li> Prevention of obesity ensures longer, healthier life.</li>
        </ul>
      </section>

      {/* ===== APP BANNER ===== */}
      <section className="text-center max-w-4xl mx-auto mb-20">
        <h4 className="font-semibold mb-3 text-[#111827]">
          Continue with PetGo’s Puppy Care Guide
        </h4>
        <p className="text-gray-700 mb-10">
          Discover PetGo’s Feeding Calculator and Food Filter to design a
          personalized meal plan for your dog’s new stage of life.
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
