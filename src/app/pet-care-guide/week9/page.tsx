"use client";

import Image from "next/image";
import Link from "next/link";

export default function Week9Page() {
  return (
    <main className="min-h-screen bg-[#F9F6F1] text-[#111827] py-16 px-6">
      {/* ===== HEADER ===== */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-2">
          Puppy Care Guide
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-[#8B6A43]">
          Week 9 – Beginning Dry Food
        </h2>
      </div>

      {/* ===== SMARTIE IMAGE ===== */}
      <div className="flex justify-center mb-10">
        <Image
          src="/week9mainpic.jpg"
          alt="PetGo mascot Smartie"
          width={600}
          height={400}
          className="rounded-2xl shadow-md object-cover"
        />
      </div>

      {/* ===== INTRO ===== */}
      <section className="text-center max-w-3xl mx-auto mb-12">
        <h3 className="text-xl font-semibold mb-3">
          “A Growing Appetite, A New Stage!”
        </h3>
        <p className="text-gray-700 leading-relaxed">
          Your little one is growing quickly — and as they reach nine weeks of age,
          it’s time to begin transitioning from soft weaning food to dry kibble.
          This stage marks an exciting milestone: your puppy is learning to eat
          more independently and building the foundation for healthy eating habits.
        </p>
      </section>

      {/* ===== DIARRHEA WARNING ===== */}
<section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl  border-[#8B6A43]">
  <h4 className="font-semibold mb-3 text-[#8B6A43]">
    🚨 If Your Puppy Has Diarrhea, Act Quickly
  </h4>
  <p className="text-gray-700 leading-relaxed mb-4">
    Diarrhea in young puppies can be dangerous because they can lose fluids
    very rapidly, leading to dehydration. If your puppy’s stool is watery,
    contains blood, or persists for more than a day, visit a veterinarian
    immediately for proper diagnosis and treatment.
  </p>
  <p className="text-gray-700 mb-6">
    Never wait it out — early intervention prevents complications and supports
    a faster recovery.
  </p>

  {/* ===== REMOTE SCREENING BUTTON ===== */}
  <div className="text-center">
    <Link
  href="/exclusive-features/remote-screening"
  className="inline-block bg-[#8B6A43] hover:bg-[#6E5332] text-white px-6 py-3 rounded-lg font-medium shadow-sm transition"
>
  Start Remote Health Screening &gt;
</Link>

  </div>
</section>


      {/* ===== TODAY'S TIP ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-[#fffaf5] p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold mb-4">Today’s Tip</h4>
        <p className="text-gray-700 leading-relaxed mb-4">
          Continue making playtime fun and engaging for your puppy. Pay close
          attention to their teeth and appetite — teething discomfort may cause
          more chewing or less eating.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Our little companions are growing every day. Let’s support them so tomorrow
          brings even more healthy growth and joyful moments!
        </p>
      </section>

      {/* ===== CHOOSING FOOD ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold mb-4">🍽️ Choosing the Right Puppy Food</h4>
        <p className="text-gray-700 leading-relaxed mb-4">
          For your puppy’s development, selecting the right food is essential.
          At PetGo, our experts carefully review ingredients to recommend balanced,
          organic puppy food made with gentle, digestible proteins and allergy-reducing
          formulas.
        </p>
        <ul className="list-disc list-inside space-y-3 text-gray-700">
          <li>Build strong bones and teeth</li>
          <li>Support immune system development</li>
          <li>Maintain a healthy digestive balance</li>
        </ul>
        <p className="text-gray-700 leading-relaxed mt-4">
          We highly recommend trying trusted brands like{" "}
          <span className="font-semibold text-[#8B6A43]">
            Open Farm Products
          </span>
          , known for excellent taste and safe, hypoallergenic ingredients.
        </p>
      </section>

      {/* ===== FEEDING GUIDELINES ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold mb-4"> Feeding Guidelines</h4>
        <p className="text-gray-700 leading-relaxed mb-4">
          Every puppy is unique — their metabolism and activity levels vary.
          Instead of strictly following charts, observe your puppy’s daily energy
          and appetite.
        </p>
        <p className="text-gray-700 mb-4">
          <strong>💡 Key guideline:</strong> Adjust feeding portion and frequency
          based on activity level. After dietary changes, monitor stool consistency
          to ensure proper digestion.
        </p>
        <p className="text-gray-700">
          You can also use tools like the{" "}
          <span className="font-semibold text-[#8B6A43]">PetGo Health Tracker</span>{" "}
          to record meals and stool patterns for better insight.
        </p>
      </section>

      {/* ===== CARE TIP ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-[#fffaf5] p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-3">🩺 Care Tip: When to Adjust Feeding</h4>
        <p className="text-gray-700 leading-relaxed mb-4">
          Even with high-quality food, mild digestive upset or vomiting may occur
          when switching diets. This usually means your puppy is adjusting to new
          nutrients or textures.
        </p>
        <ul className="list-disc list-inside space-y-3 text-gray-700">
          <li>Pause new food temporarily</li>
          <li>Offer smaller, more frequent meals</li>
          <li>Avoid force-feeding — let their appetite return naturally</li>
          <li>Reintroduce the food gradually over several days</li>
        </ul>
        <p className="text-gray-700 mt-4">
          If symptoms persist, consult your veterinarian to rule out allergies or infections.
        </p>
      </section>

      {/* ===== TRANSITIONING TO DRY FOOD ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold mb-4"> Transitioning to Dry Food</h4>
        <p className="text-gray-700 leading-relaxed mb-4">
          By this stage, your puppy can start chewing softened kibble. Soak kibble
          in warm water for a few minutes, then reduce soaking time gradually
          until they’re comfortable eating dry food.
        </p>
        <ul className="list-disc list-inside space-y-3 text-gray-700 mb-4">
          <li><strong>Feeding Frequency (3–6 months):</strong> Offer 4 meals daily at consistent intervals.</li>
          <li>Keep fresh water available at all times for hydration.</li>
          <li>Observe appetite — if they finish meals eagerly, you’re doing great!</li>
        </ul>
      </section>

      {/* ===== HYDRATION REMINDER ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold mb-4">💧 Hydration Reminder</h4>
        <p className="text-gray-700 leading-relaxed">
          When switching to dry food, water intake naturally increases. Ensure clean,
          accessible water throughout the day. Dehydration can cause fatigue or
          constipation, so consistent hydration is essential.
        </p>
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


      {/* ===== GROWING TOGETHER ===== */}
      <section className="max-w-3xl mx-auto mb-16 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold mb-4">💕 Growing Together</h4>
        <p className="text-gray-700 leading-relaxed mb-4">
          Each week brings visible growth — stronger legs, brighter eyes, and endless curiosity.
          This is the perfect time to build feeding routines and gentle discipline, creating
          trust that lasts a lifetime.
        </p>
        <p className="text-gray-700 leading-relaxed">
          With your love and patience, your puppy will continue thriving — happy, healthy,
          and full of playful energy.
        </p>
      </section>

      {/* ===== PETGO TIP ===== */}
      <section className="text-center max-w-3xl mx-auto mb-16">
        <div className="bg-[#fffaf5] border border-[#e6dccf] rounded-2xl shadow-sm p-8">
          <h5 className="font-semibold text-[#8B6A43] mb-3">🐾 PetGo Tip</h5>
          <p className="text-gray-700 leading-relaxed">
            At this stage, consistency matters more than perfection. Feed with patience,
            observe with care, and celebrate every small milestone in your puppy’s journey.
          </p>
        </div>
      </section>

      {/* ===== CONTINUE / APP BANNER ===== */}
      <section className="text-center max-w-4xl mx-auto mb-20">
        <h4 className="font-semibold mb-3 text-[#111827]">
          Continue with PetGo’s Puppy Care Guide
        </h4>
        <p className="text-gray-700 mb-10">
          PetGo is here to support your puppy’s healthy transition from weaning to independence.
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

        <p className="text-gray-500 text-xs mt-4">© 2025 PetGo. All Rights Reserved</p>
      </section>
    </main>
  );
}
