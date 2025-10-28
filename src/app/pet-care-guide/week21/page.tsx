"use client";

import Image from "next/image";
import Link from "next/link";


export default function Week21Page() {
  return (
    <main className="min-h-screen bg-[#F9F6F1] text-[#111827] py-16 px-6">
      {/* ===== HEADER ===== */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-2">
          Puppy Care Guide
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-[#8B6A43]">
          Week 21 – Smooth Food Transition
        </h2>
      </div>

      {/* ===== SMARTIE IMAGE ===== */}
      <div className="flex justify-center mb-10">
        <Image
          src="/week21mainpic.jpg"
          alt="Puppy eating new food"
          width={600}
          height={400}
          className="rounded-2xl shadow-md object-cover"
        />
      </div>

      {/* ===== INTRO ===== */}
      <section className="text-center max-w-3xl mx-auto mb-12">
        <h3 className="text-xl font-semibold mb-3">
          “Changing Dog Food Without Any Trouble”
        </h3>
        <p className="text-gray-700 leading-relaxed">
          Around 5 months old, many pet parents notice curiosity or pickiness at mealtime.
          Transitioning food gradually protects digestion and keeps mealtime enjoyable and healthy.
        </p>
      </section>

      {/* ===== WHY GRADUAL CHANGE ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">🐾 Why Gradual Change Matters</h4>
        <p className="text-gray-700 leading-relaxed mb-4">
          Each recipe differs in protein, fat, and fiber levels. Sudden changes can cause vomiting,
          diarrhea, or loss of appetite. Gradual transition lets the gut microbiome adjust naturally.
        </p>
      </section>

      {/* ===== 5-DAY PLAN ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm overflow-x-auto">
        <h4 className="font-semibold text-[#8B6A43] mb-4">
         Step-by-Step Guide — 5-Day Transition (Normal Sensitivity)
        </h4>
        <table className="w-full border-collapse text-sm md:text-base">
          <thead>
            <tr className="bg-[#F9F6F1] text-[#8B6A43] border-b border-[#e6dccf]">
              <th className="p-3 text-left">Day</th>
              <th className="p-3 text-left">New Food</th>
              <th className="p-3 text-left">Current Food</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {[["1", "20%", "80%"],["2", "40%", "60%"],["3", "60%", "40%"],["4", "80%", "20%"],["5", "100%", "0%"]].map((r, i)=>(
              <tr key={i} className="border-b border-[#e6dccf]">
                <td className="p-3">{r[0]}</td><td className="p-3">{r[1]}</td><td className="p-3">{r[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* ===== 10-DAY PLAN ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm overflow-x-auto">
        <h4 className="font-semibold text-[#8B6A43] mb-4">
          For Puppies With Delicate Digestion — 10-Day Plan
        </h4>
        <table className="w-full border-collapse text-sm md:text-base">
          <thead>
            <tr className="bg-[#F9F6F1] text-[#8B6A43] border-b border-[#e6dccf]">
              <th className="p-3 text-left">Day</th>
              <th className="p-3 text-left">New Food</th>
              <th className="p-3 text-left">Current Food</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {Array.from({ length: 10 }).map((_, i) => {
              const day = i + 1;
              const newPct = day * 10;
              const oldPct = 100 - newPct;
              return (
                <tr key={day} className="border-b border-[#e6dccf]">
                  <td className="p-3">{day}</td>
                  <td className="p-3">{newPct}%</td>
                  <td className="p-3">{oldPct < 0 ? 0 : oldPct}%</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <p className="text-gray-700 mt-4">
          🩺 <strong>PetGo Tip:</strong> If your puppy experiences vomiting or loose stool, reduce
          the new-food ratio for a few days before increasing again.
        </p>
      </section>

      {/* ===== WHAT TO WATCH ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">💡 What to Watch For</h4>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
          <li>Appetite — finishing meals?</li>
          <li>Energy — normal or sluggish?</li>
          <li>Stool — firm, soft, or too frequent?</li>
        </ul>
        <p className="text-gray-700 leading-relaxed">
          If digestion stays stable, you may shorten the plan slightly. For diarrhea or vomiting,
          extend to 10–14 days and consult your vet.
        </p>
      </section>

      {/* ===== FOOD QUALITY ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">🐕 Understanding Dog Food Quality</h4>
        <p className="text-gray-700 leading-relaxed mb-4">
          High-quality kibble uses extrusion cooking to preserve nutrients, but ingredients differ widely.
          Look for:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Named meats (e.g., chicken, lamb, salmon) as the first ingredient</li>
          <li>No artificial preservatives or coloring</li>
          <li>Omega-3 and Omega-6 for coat and skin health</li>
          <li>AAFCO or CFIA “complete & balanced” certification</li>
        </ul>
      </section>

{/* ===== RECOMMENDED FOOD PRODUCTS (UPDATED) ===== */}
<section className="max-w-5xl mx-auto mb-16 bg-white p-8 rounded-2xl shadow-sm">
  <h4 className="font-semibold mb-4 text-[#8B6A43]">
    PetGo Shop | Recommended Puppy Food
  </h4>
  <p className="text-gray-700 mb-8">
    These trusted, vet-approved products are perfect for your puppy’s growth,
    offering premium nutrition and gentle digestion support:
  </p>

  <div className="grid md:grid-cols-3 gap-8">
    {/* Product 1 – Open Farm */}
    <div className="bg-[#F9F6F1] rounded-2xl shadow-sm hover:shadow-md transition flex flex-col p-6 text-center">
      <Image
        src="/openfarm-puppy.jpg"
        alt="Open Farm Ancient Grains Puppy Food"
        width={280}
        height={200}
        className="object-contain mb-4 rounded-xl"
      />
      <p className="text-gray-800 font-medium mb-1">
        Open Farm, Ancient Grains Dry Dog Food for Puppies
      </p>
      <p className="text-sm text-gray-600 mb-1">Seller: Open Farm</p>
      <p className="text-[#8B6A43] font-semibold mb-3">$31.99</p>
      <Link
        href="https://www.amazon.ca/Open-Farm-Wholesome-Artificial-Preservatives/dp/B088C3ZQ11/ref=sr_1_5?dib=eyJ2IjoiMSJ9.VSVZA7jB8lyL4Tg_QDEDBYqJQcaavoiF_PKdeGSghLDi90lMBokZfkXG1AH_czXv2nhWeSrF-WxtoNF2DzjMhRrhXTCo7MBtK26pVBJm_vWChWmwH2hvd0jCQM-ekgclAORniTW90I25R7JOX94wcwIkX-AS8AiXsvSeBmiFciPzlmg824r22CdVCWg9IlHskzAJnJ_82V6dfd2E4uFZ4Fodzs65vzgLfOPViFPJAy9MA8HKF33e12GPwF5wqnMalJ6Y1hJ5qQ9SH4g0YlHUMDHbeRJn-rkOUCWx3UzfM54.lqfCmVLW9RJzvCgTU-hxAx0QVNZZr_6I6BTXjxRXb-E&dib_tag=se&keywords=open%2Bfarm%2Bpuppy&qid=1761536124&sr=8-5&th=1"
        target="_blank"
        className="text-[#8B6A43] hover:underline font-medium text-sm"
      >
        View on Amazon &gt;
      </Link>
    </div>

    {/* Product 2 – Purina Pro Plan */}
    <div className="bg-[#F9F6F1] rounded-2xl shadow-sm hover:shadow-md transition flex flex-col p-6 text-center">
      <Image
        src="/purina-proplan-puppy.jpg"
        alt="Purina Pro Plan Dry Puppy Food"
        width={280}
        height={200}
        className="object-contain mb-4 rounded-xl"
      />
      <p className="text-gray-800 font-medium mb-1">
        Purina Pro Plan Dry Puppy Food, Shredded Chicken &amp; Rice
      </p>
      <p className="text-sm text-gray-600 mb-1">Seller: Pro Plan</p>
      <p className="text-[#8B6A43] font-semibold mb-3">$92.97</p>
      <Link
        href="https://www.amazon.ca/Purina-Shredded-Chicken-Formula-34-Pound/dp/B005F42UJA/ref=sr_1_6?dib=eyJ2IjoiMSJ9.W6tugPcOCFIJA9Xq0NqROUPfG8knIkJq972X5PhamH6zpiQ7ZVA0Gu-jTVcqYnASu0lP0OLroHCLon0XtFA4LqV-JAkCrfaCYjxb9GCcizsP2dRwM6oLnttFKNYsdpb4SLXwevSTTQB3A0TGRvAWYm3rN1X6wpDMF3ILBvPMJAXcXlKgdpn0hIbGyiZUIOUtonAfgwdLX1mQ8FLxS5UTX3WoVQZu9bx6OiG9J3ojiG0DeHGakAZ4RtG1qG_NmJGOtoYj4u5eolRGZT184lvrvkqI-dCeJxm0k175BgpS-oo.3xANhwZKrsuiOTVyXl3dJ3lPLccWuvLUM9p0PPbGXrI&dib_tag=se&keywords=purina%2Bpro%2Bpuppy&qid=1761536275&sr=8-6&th=1"
        target="_blank"
        className="text-[#8B6A43] hover:underline font-medium text-sm"
      >
        View on Amazon &gt;
      </Link>
    </div>

    {/* Product 3 – Royal Canin */}
    <div className="bg-[#F9F6F1] rounded-2xl shadow-sm hover:shadow-md transition flex flex-col p-6 text-center">
      <Image
        src="/royalcanin-puppy.jpg"
        alt="Royal Canin Puppy Food Small Breed"
        width={280}
        height={200}
        className="object-contain mb-4 rounded-xl"
      />
      <p className="text-gray-800 font-medium mb-1">
        Royal Canin Small Breed Dry Puppy Food
      </p>
      <p className="text-sm text-gray-600 mb-1">Seller: ROYAL CANIN</p>
      <p className="text-[#8B6A43] font-semibold mb-3">$79.99</p>
      <Link
        href="https://www.amazon.ca/Royal-Canin-Nutrition-Development-Digestive/dp/B0BZ2G12PJ/ref=sr_1_1_sspa?dib=eyJ2IjoiMSJ9.kOtiRUcFbvINFZW_kKAB3l5gH_J7YHyiXWiaflDKU57_wuYqrPZAwX67DNUoO_ELmVBagqO_ScEUsSq_BwZdiVVMxywm5RPspvyyd9ttBc_ZImQltNAJHLjvfnU7eeuZMea5p9FWKVpSpD9fzbEjAUsasYNN6nLIWS-Tl1SJxUOyJs6FqFr-saSB-e90xknmx1Jfh-amUSBjqQxCrGRj1j1REzjbSyKhuCZmRAX_snQh4Qy8qEvMlSdfCIxwXrEIcG4EjUm_oP8fPjOyxh_xKBdPf4Ug8C6E81EIQ0h8cJ4.vB2LlUdiSlJcHOT66Njg60s8S5dpl11fsnn8fGyKDHk&dib_tag=se&keywords=royal+canin+puppy+food&qid=1761536495&rdc=1&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1"
        target="_blank"
        className="text-[#8B6A43] hover:underline font-medium text-sm"
      >
        View on Amazon &gt;
      </Link>
    </div>
  </div>
</section>



      {/* ===== FRESH ADD-ONS ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm overflow-x-auto">
        <h4 className="font-semibold text-[#8B6A43] mb-4">🥕 Simple Fresh Add-Ons</h4>
        <p className="text-gray-700 leading-relaxed mb-4">
          Mixing small amounts of fresh food (≈ 10–15%) with kibble enhances flavor and nutrition.
          Always use cooked, unseasoned ingredients.
        </p>
        <table className="w-full border-collapse text-sm md:text-base">
          <thead>
            <tr className="bg-[#F9F6F1] text-[#8B6A43] border-b border-[#e6dccf]">
              <th className="p-3 text-left">Combination</th>
              <th className="p-3 text-left">Ingredients</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            <tr className="border-b border-[#e6dccf]">
              <td className="p-3">Option 1</td>
              <td className="p-3">Kibble 85% + Steamed Carrots 5% + Boiled Chicken 10%</td>
            </tr>
            <tr className="border-b border-[#e6dccf]">
              <td className="p-3">Option 2</td>
              <td className="p-3">Kibble 85% + Steamed Broccoli 5% + Turkey 10%</td>
            </tr>
            <tr>
              <td className="p-3">Option 3</td>
              <td className="p-3">Kibble 85% + Shredded Cabbage 5% + Salmon 10%</td>
            </tr>
          </tbody>
        </table>
        <p className="text-gray-700 mt-4">
          ⚠️ Never use raw onions, garlic, grapes, or salty sauces.
        </p>
      </section>

      {/* ===== PETGO KITCHEN INTRO ===== */}
<section className="max-w-5xl mx-auto mt-16 mb-20 bg-[#F9F6F1] p-10 rounded-2xl text-center shadow-sm">
  <div className="flex flex-col items-center">
    <div className="text-4xl mb-4">👩‍🍳</div>
    <h4 className="text-2xl font-semibold text-[#8B6A43] mb-3">
      PetGo Kitchen
    </h4>
    <p className="text-gray-700 max-w-2xl mx-auto leading-relaxed mb-8">
      Discover healthy, vet-reviewed recipes made from everyday human ingredients.  
      PetGo Kitchen helps you cook safe, balanced meals your dog will love — from  
      simple snacks to wholesome dinners using real, fresh food.
    </p>

    <Link
      href="/kitchen"
      className="inline-block bg-[#8B6A43] text-white font-medium px-8 py-3 rounded-xl hover:bg-[#745637] transition"
    >
      Explore Dog Recipes →
    </Link>
  </div>
</section>



      {/* ===== EXPERT TIP ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">🧠 PetGo Expert Tip</h4>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Warm food to ≈ 37 °C to enhance aroma and appetite.</li>
          <li>Add a spoon of unsalted bone broth for flavor and hydration.</li>
          <li>Rotate 2–3 trusted brands within the same nutritional standard every few months.</li>
        </ul>
      </section>

      {/* ===== TAKEAWAYS ===== */}
      <section className="text-center max-w-3xl mx-auto mb-16">
        <h4 className="text-2xl font-semibold text-[#8B6A43] mb-3">🐾 Key Takeaways</h4>
        <ul className="list-disc list-inside text-gray-700 text-left inline-block space-y-2 mb-4">
          <li>Transition gradually (5–10 days) based on tolerance.</li>
          <li>Observe stool, appetite, and energy throughout the process.</li>
          <li>Select formulas with high-quality proteins and minimal fillers.</li>
          <li>Add cooked veggies or lean meats for variety and enrichment.</li>
          <li>Keep fresh water available at all times.</li>
        </ul>
        <p className="text-gray-700 leading-relaxed">
          Food transition isn’t just about nutrition — it’s about building a resilient, healthy digestive system for life.
        </p>
      </section>

      {/* ===== APP ADVERTISEMENT + COPYRIGHT ===== */}
      <section className="text-center max-w-4xl mx-auto mb-20">
        <h4 className="font-semibold mb-3 text-[#111827]">
          Continue with PetGo’s Puppy Care Guide
        </h4>
        <p className="text-gray-700 mb-10">
          PetGo supports your puppy’s growth from bowl to bond — every meal, every stage.
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