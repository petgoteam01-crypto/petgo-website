"use client";

import Image from "next/image";
import Link from "next/link";

export default function Week35Page() {
  return (
    <main className="min-h-screen bg-[#F9F6F1] text-[#111827] py-16 px-6">
      {/* ===== HEADER ===== */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-2">
          Puppy Care Guide
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-[#8B6A43]">
          Week 35 – Feeding Treats & Supplements the Right Way
        </h2>
      </div>

      {/* ===== SMARTIE IMAGE ===== */}
      <div className="flex justify-center mb-10">
        <Image
          src="/week35mainpic.jpg"
          alt="Healthy puppy enjoying balanced treats"
          width={600}
          height={400}
          className="rounded-2xl shadow-md object-cover"
        />
      </div>

      {/* ===== INTRO ===== */}
      <section className="text-center max-w-3xl mx-auto mb-12">
        <h3 className="text-xl font-semibold mb-3 text-[#8B6A43]">
          “Healthy habits start with balance — give with love, but always with care.”
        </h3>
        <p className="text-gray-700 leading-relaxed">
          At around 9 months, your puppy is energetic and expressive. It’s the perfect
          moment to review how you manage treats and supplements — ensuring every reward
          supports growth without harming health.
        </p>
      </section>

      {/* ===== UNDERSTANDING TREATS ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4"> Understanding Treats & Their Role</h4>
        <p className="text-gray-700 leading-relaxed mb-3">
          Treats build bonding and reinforce good behaviour, but too many can lead to
          weight gain or digestive imbalance. Moderation keeps training positive and healthy.
        </p>
        <p className="text-gray-700 text-sm">
          💡 <strong>PetGo Tip:</strong> Treats should stay under 10% of daily calories — the
          remaining 90% comes from a complete diet.
        </p>
      </section>

      {/* ===== HARD TREATS ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4"> 1. Introducing Hard Treats – Wait Until One Year</h4>
        <p className="text-gray-700 leading-relaxed mb-3">
          Even after baby teeth fall out, hard chews like bones or antlers can splinter or
          strain digestion. Wait until after 12 months before offering them.
        </p>
        <p className="text-gray-700 text-sm">
          💡 <strong>PetGo Tip:</strong> Choose puppy-labeled soft chews made from salmon, duck,
          or sweet potato — safer before the first birthday.
        </p>
      </section>

            {/* ===== PETGO SHOP ===== */}
      <section className="max-w-5xl mx-auto mb-20">
        <h4 className="font-semibold mb-3 text-[#8B6A43]">
           PetGo Shop{" "}
          <span className="text-[#111827] font-medium">
            | Healthy treats your pup will love during Week 35.
          </span>
        </h4>

        <div className="grid md:grid-cols-3 gap-8 mt-8">
          {/* Product 1 */}
          <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition flex flex-col p-6 h-full">
            <div className="w-full h-[240px] flex justify-center items-center mb-4">
              <Image
                src="/week35-product1.jpg"
                alt="Crumps' Naturals Semi Moist Chicken Mini Trainers"
                width={380}
                height={240}
                className="object-contain max-h-[220px]"
              />
            </div>
            <div className="flex-grow text-left">
              <h5 className="font-semibold text-[#111827] mb-1">
                Crumps' Naturals Semi Moist Chicken Mini Trainers 4.7 oz / 132 g
              </h5>
              <p className="text-sm text-gray-600 mb-2">Seller: Crumps' Naturals</p>
              <p className="text-[#8B6A43] font-semibold mb-3">$8.99</p>
            </div>
            <Link
              href="https://www.amazon.ca/Crumps-Naturals-Trainers-Chicken-semi-Moist/dp/B01MQU2HS6/ref=sr_1_2_sspa"
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
                src="/week35-product2.jpg"
                alt="Hill's Science Diet Soft Savory Dog Treats"
                width={380}
                height={240}
                className="object-contain max-h-[220px]"
              />
            </div>
            <div className="flex-grow text-left">
              <h5 className="font-semibold text-[#111827] mb-1">
                Hill’s Science Diet Soft Savory Dog Treats with Peanut Butter & Banana (8 oz)
              </h5>
              <p className="text-sm text-gray-600 mb-2">Seller: Hill’s Science Diet</p>
              <p className="text-[#8B6A43] font-semibold mb-3">$11.90</p>
            </div>
            <Link
              href="https://www.amazon.ca/Hills-Science-Treats-Savories-Healthy/dp/B00NMMSRJE/ref=sr_1_4_sspa"
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
                src="/week35-product3.jpg"
                alt="Crumps' Naturals Sweet Potato Fries 280 g / 9.9 oz"
                width={380}
                height={240}
                className="object-contain max-h-[220px]"
              />
            </div>
            <div className="flex-grow text-left">
              <h5 className="font-semibold text-[#111827] mb-1">
                Crumps' Naturals Sweet Potato Fries 280 g / 9.9 oz
              </h5>
              <p className="text-sm text-gray-600 mb-2">Seller: Crumps' Naturals</p>
              <p className="text-[#8B6A43] font-semibold mb-3">$16.99</p>
            </div>
            <Link
              href="https://www.amazon.ca/Crumps-Naturals-Sweet-Potato-Fries/dp/B01LZZ1N13/ref=sr_1_6"
              target="_blank"
              className="inline-block mt-auto text-center bg-[#8B6A43] text-white py-2 px-4 rounded-full hover:bg-[#735739] transition"
            >
              View on Amazon →
            </Link>
          </div>
        </div>
      </section>


      {/* ===== PORTION CONTROL ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4"> 2. Portion Control Matters</h4>
        <p className="text-gray-700 leading-relaxed mb-3">
          Extra love shouldn’t mean extra calories. Treats are dense in fat, and overfeeding
          easily leads to obesity. Follow package directions or your vet’s plan, adjusting for
          weight and activity.
        </p>
        <ul className="list-disc list-inside text-gray-700 text-sm">
          <li>Use small training treats instead of large biscuits.</li>
          <li>Break pieces to reduce calories while keeping motivation.</li>
        </ul>
      </section>

      {/* ===== SUPPLEMENTS INTRO ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-[#fffaf5] border border-[#e6dccf] p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4"> 3. Moderation With Supplements</h4>
        <p className="text-gray-700 leading-relaxed mb-3">
          Supplements can support joints, skin, and digestion — but excess causes nutrient
          imbalance or organ stress. Always consult your vet before adding anything new.
        </p>
        <p className="text-gray-700 text-sm">
          💛 <strong>PetGo Reminder:</strong> If your dog eats fortified food, extra vitamins
          may be unnecessary.
        </p>
      </section>

      {/* ===== SAFE SUPPLEMENT PRACTICES ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">💊 Safe Supplement Practices</h4>
        <ul className="list-disc list-inside text-gray-700 mb-3">
          <li>Follow dosage carefully — too much can cause vomiting or diarrhea.</li>
          <li>Stop if stools become loose and consult your vet.</li>
          <li>Store in a cool, dry place and avoid mixing multiple brands.</li>
        </ul>
        <p className="text-gray-700 text-sm">
          💡 <strong>PetGo Tip:</strong> Consider joint or skin supplements only after the first year,
          unless prescribed.
        </p>
      </section>

      {/* ===== WHEN TO START ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">💡 When to Start Supplements</h4>
        <p className="text-gray-700 leading-relaxed mb-3">
          Most healthy puppies don’t need supplements until after 12 months. Large or active
          breeds may benefit later from:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-3">
          <li><strong>Glucosamine & Chondroitin</strong> – joint and cartilage health</li>
          <li><strong>Omega-3 Fish Oil</strong> – skin and cardiovascular support</li>
          <li><strong>Probiotics</strong> – digestion and immune balance</li>
        </ul>
        <p className="text-gray-700 text-sm">
          💡 <strong>PetGo Tip:</strong> Introduce one supplement at a time and observe stool changes.
        </p>
      </section>

      {/* ===== OVERNUTRITION ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-[#fffaf5] border border-[#e6dccf] p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">🚫 Be Cautious of Overnutrition</h4>
        <p className="text-gray-700 leading-relaxed mb-3">
          Combining multiple supplements for different purposes can overload nutrients and strain the kidneys.
          Keep your vet involved in every addition.
        </p>
        <p className="text-gray-700">
          💛 <strong>PetGo Reminder:</strong> Supplements complement nutrition — they don’t replace it.
        </p>
      </section>

      {/* ===== BALANCE ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">🧡 The Power of Balance</h4>
        <p className="text-gray-700 leading-relaxed mb-3">
          Feeding wisely is love in action. Balanced treats and responsible supplements
          ensure long-term vitality. If you see weight or stool changes, adjust early and ask your vet.
        </p>
        <p className="text-gray-700 text-sm">
          💡 <strong>PetGo Reminder:</strong> There’s only one of your beloved dog — protect them with balance and care.
        </p>
      </section>

      {/* ===== FINAL THOUGHTS ===== */}
      <section className="max-w-3xl mx-auto mb-16 bg-[#fffaf5] border border-[#e6dccf] p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-3">🌿 Final Thoughts</h4>
        <p className="text-gray-700 leading-relaxed mb-3">
          Raising a puppy isn’t about giving more — it’s about giving right.
          Portion control and thoughtful feeding build a foundation for lifelong health.
        </p>
        <p className="text-gray-700">
          💡 <strong>PetGo Tip:</strong> Healthy habits today prevent health problems tomorrow.
          Feed wisely, love deeply, and nurture patiently.
        </p>
      </section>

      {/* ===== APP ADVERTISEMENT + COPYRIGHT ===== */}
      <section className="text-center max-w-4xl mx-auto mb-20">
        <h4 className="font-semibold mb-3 text-[#111827]">
          Continue with PetGo’s Puppy Care Guide
        </h4>
        <p className="text-gray-700 mb-10">
          PetGo helps you track diet balance, portion sizes, and supplements — keeping your puppy healthy and happy every day.
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