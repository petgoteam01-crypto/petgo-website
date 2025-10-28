"use client";

import Image from "next/image";
import Link from "next/link";

export default function Week22Page() {
  return (
    <main className="min-h-screen bg-[#F9F6F1] text-[#111827] py-16 px-6">
      {/* ===== HEADER ===== */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-2">
          Puppy Care Guide
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-[#8B6A43]">
          Week 22 – Ear Health & Hygiene
        </h2>
      </div>

      {/* ===== SMARTIE IMAGE ===== */}
      <div className="flex justify-center mb-10">
        <Image
          src="/week22mainpic.jpg"
          alt="Puppy ear cleaning and hygiene"
          width={600}
          height={400}
          className="rounded-2xl shadow-md object-cover"
        />
      </div>

      {/* ===== INTRO ===== */}
      <section className="text-center max-w-3xl mx-auto mb-12">
        <p className="text-gray-700 leading-relaxed">
          Around 5–6 months of age, your puppy’s growing curiosity — combined with seasonal
          and hormonal changes — can make their ears more sensitive. Establishing gentle
          cleaning habits now prevents infections and allergies later in life.
        </p>
      </section>

      {/* ===== EAR STRUCTURE ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">👂 Understanding a Dog’s Ear Structure</h4>
        <p className="text-gray-700 leading-relaxed mb-4">
          A dog’s ear canal forms an “L” shape, trapping moisture and debris — a perfect
          environment for bacteria, yeast, and mites. Understanding ear anatomy helps you
          prevent buildup before problems start.
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>
            <strong>Floppy ears (Cocker Spaniels):</strong> Less airflow → higher infection risk.
          </li>
          <li>
            <strong>Erect ears (Huskies / Shiba Inus):</strong> Easier upkeep but still prone to pollen
            irritation.
          </li>
        </ul>
      </section>

      {/* ===== HOW TO CLEAN ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">🧴 How to Clean Your Dog’s Ears Safely</h4>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
          <li>Inspect for redness, swelling, or odor.</li>
          <li>Use vet-approved ear cleaner — never cotton swabs or dry tissues.</li>
          <li>Fill canal gently, massage 20–30 seconds, then let your dog shake.</li>
          <li>Wipe the outer ear with soft gauze or pet wipes afterward.</li>
        </ul>
        <p className="text-gray-700 leading-relaxed mb-2">
          ⚠️ <strong>Do not</strong> use cotton swabs (Q-tips) — they can push debris deeper or injure
          the canal.
        </p>
        <p className="text-gray-700 leading-relaxed">
          🩺 <strong>Veterinarian Tip:</strong> Clean every 2–3 weeks, or more often if your dog swims,
          bathes frequently, or has floppy ears.
        </p>
      </section>

      {/* ===== PETGO SHOP: EAR CLEANER ESSENTIALS ===== */}
<section className="max-w-5xl mx-auto mb-16 bg-white p-8 rounded-2xl shadow-sm">
  <h4 className="font-semibold mb-4 text-[#8B6A43]">
    PetGo Shop | Ear Cleaning Essentials
  </h4>
  <p className="text-gray-700 mb-8">
    Keep your dog’s ears clean, fresh, and infection-free with these vet-approved cleaning
    solutions and gentle wipes — perfect for regular maintenance or after outdoor play.
  </p>

  <div className="grid md:grid-cols-3 gap-8">
    {/* === Product 1 – Vetnique === */}
    <div className="bg-[#F9F6F1] rounded-2xl shadow-sm hover:shadow-md transition flex flex-col justify-between p-6 text-center h-full">
      <div>
        <Image
          src="/vetnique-ear-cleaner.jpg"
          alt="Vetnique Oticbliss Dog Ear Cleaner"
          width={280}
          height={200}
          className="object-contain mb-4 rounded-xl max-h-[220px] mx-auto"
        />
        <p className="text-gray-800 font-medium mb-1">
          Vetnique Oticbliss Ear Cleaner (8 oz)
        </p>
        <p className="text-sm text-gray-600 mb-1">Seller: Vetnique</p>
        <p className="text-gray-700 text-sm leading-relaxed mb-6 min-h-[40px]">
          Advanced odor-control ear flush with soothing aloe — removes wax and dirt while
          keeping ears calm and fresh.
        </p>
      </div>
      <div>
        <p className="text-[#8B6A43] font-semibold mb-2">$26.99</p>
        <Link
          href="https://www.amazon.ca/Oticbliss-Advanced-Cleaning-Control-Nourishing/dp/B08NTV3F72/"
          target="_blank"
          className="text-[#8B6A43] hover:underline font-medium text-sm"
        >
          View on Amazon &gt;
        </Link>
      </div>
    </div>

    {/* === Product 2 – Earth Rated === */}
    <div className="bg-[#F9F6F1] rounded-2xl shadow-sm hover:shadow-md transition flex flex-col justify-between p-6 text-center h-full">
      <div>
        <Image
          src="/earth-rated-ear-wipes.jpg"
          alt="Earth Rated Pet Ear Wipes"
          width={280}
          height={200}
          className="object-contain mb-4 rounded-xl max-h-[220px] mx-auto"
        />
        <p className="text-gray-800 font-medium mb-1">
          Earth Rated Pet Ear Wipes (70 Count)
        </p>
        <p className="text-sm text-gray-600 mb-1">Seller: Earth Rated</p>
        <p className="text-gray-700 text-sm leading-relaxed mb-6 min-h-[40px]">
          Vet-developed, hypoallergenic wipes with wild oat scent — gently remove dirt and
          wax buildup for clean, healthy ears.
        </p>
      </div>
      <div>
        <p className="text-[#8B6A43] font-semibold mb-2">$16.99</p>
        <Link
          href="https://www.amazon.ca/Earth-Rated-Hypoallergenic-Remove-Oatmeal/dp/B0CCBHFLVP/"
          target="_blank"
          className="text-[#8B6A43] hover:underline font-medium text-sm"
        >
          View on Amazon &gt;
        </Link>
      </div>
    </div>

    {/* === Product 3 – Virbac === */}
    <div className="bg-[#F9F6F1] rounded-2xl shadow-sm hover:shadow-md transition flex flex-col justify-between p-6 text-center h-full">
      <div>
        <Image
          src="/virbac-epiotic-ear-cleaner.jpg"
          alt="Virbac Epi-Otic Advanced Ear Cleaner"
          width={280}
          height={200}
          className="object-contain mb-4 rounded-xl max-h-[220px] mx-auto"
        />
        <p className="text-gray-800 font-medium mb-1">
          Virbac Epi-Otic Advanced Ear Cleaner (4 oz)
        </p>
        <p className="text-sm text-gray-600 mb-1">Seller: Virbac</p>
        <p className="text-gray-700 text-sm leading-relaxed mb-6 min-h-[40px]">
          Trusted vet formula that removes debris and dries moisture — ideal for preventing
          odor, itching, and bacterial growth.
        </p>
      </div>
      <div>
        <p className="text-[#8B6A43] font-semibold mb-2">$26.29</p>
        <Link
          href="https://www.amazon.ca/Virbac-Epi-Otic-Advanced-Ear-Cleaner/dp/B0056EAKUA/"
          target="_blank"
          className="text-[#8B6A43] hover:underline font-medium text-sm"
        >
          View on Amazon &gt;
        </Link>
      </div>
    </div>
  </div>
</section>


      {/* ===== SIGNS OF PROBLEMS ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">🧠 Signs of Ear Problems to Watch For</h4>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
          <li>Head shaking or tilting</li>
          <li>Scratching or rubbing ears</li>
          <li>Unusual odor or discharge</li>
          <li>Whining when touched near ear</li>
        </ul>
        <p className="text-gray-700 leading-relaxed">
          Persistent symptoms may indicate infection, allergy, or mites — consult your vet
          for cleaning or medication if they last more than a few days.
        </p>
      </section>

      {/* ===== ALLERGIES ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">🌿 Allergies & Skin Sensitivity</h4>
        <p className="text-gray-700 leading-relaxed mb-4">
          Food or environmental allergies often show first in the ears. Look for redness,
          swelling, or excess wax. Switch to a hypoallergenic diet if reactions occur after certain treats. 
          Omega-3 supplements help reduce inflammation.
        </p>
      </section>

      {/* ===== TAILORED CARE ===== */}
<section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
  <h4 className="font-semibold text-[#8B6A43] mb-4">
    🐾 Tailored Care for Different Ear Types
  </h4>
  <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
    <li>
      <strong>Floppy Ears:</strong> Check daily and keep dry after baths or rainy walks.
    </li>
    <li>
      <strong>Semi-Floppy Ears:</strong> Clean weekly during humid seasons to prevent yeast growth.
    </li>
    <li>
      <strong>Erect Ears:</strong> Wipe outer surfaces after outdoor play to remove dust or pollen.
    </li>
  </ul>

  {/* === EAR TYPE IMAGES === */}
  <div className="grid md:grid-cols-3 gap-6 mt-6">
    {/* Floppy Ears */}
    <div className="bg-[#F9F6F1] rounded-2xl shadow-sm p-4 text-center">
      <Image
        src="/floppy-ear-dog.jpg"
        alt="Floppy ear dog example"
        width={250}
        height={180}
        className="rounded-xl object-cover mx-auto mb-3 h-[180px]"
      />
      <p className="font-medium text-[#8B6A43]">Floppy Ears</p>
      <p className="text-gray-600 text-sm">Example: Cocker Spaniel, Golden Retriever</p>
    </div>

    {/* Semi-Floppy Ears */}
    <div className="bg-[#F9F6F1] rounded-2xl shadow-sm p-4 text-center">
      <Image
        src="/semi-floppy-ear-dog.jpg"
        alt="Semi-floppy ear dog example"
        width={250}
        height={180}
        className="rounded-xl object-cover mx-auto mb-3 h-[180px]"
      />
      <p className="font-medium text-[#8B6A43]">Semi-Floppy Ears</p>
      <p className="text-gray-600 text-sm">Example: Border Collie, Beagle</p>
    </div>

    {/* Erect Ears */}
    <div className="bg-[#F9F6F1] rounded-2xl shadow-sm p-4 text-center">
      <Image
        src="/erect-ear-dog.jpg"
        alt="Erect ear dog example"
        width={250}
        height={180}
        className="rounded-xl object-cover mx-auto mb-3 h-[180px]"
      />
      <p className="font-medium text-[#8B6A43]">Erect Ears</p>
      <p className="text-gray-600 text-sm">Example: Shiba Inu, German Shepherd</p>
    </div>
  </div>
</section>


      {/* ===== GENTLE HANDLING ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">⚠️ Never Force Ear Handling</h4>
        <p className="text-gray-700 leading-relaxed mb-4">
          If your puppy resists cleaning, never grab or twist the ear. Painful handling causes
          fear and future avoidance. Pause and try again gently later.
        </p>
        <p className="text-gray-700 leading-relaxed mb-2">
          💬 <strong>PetGo Reminder:</strong> Once ear care hurts, dogs associate it with fear.
          Patience and soft reassurance build trust.
        </p>
      </section>

      {/* ===== TODAY’S TIP ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-[#fffaf5] border border-[#e6dccf] rounded-2xl p-8 shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-3">💡 Today’s Tip</h4>
        <p className="text-gray-700 leading-relaxed">
           Avoid over-handling your dog’s ears — they’re extremely sensitive. Take your time,
          speak calmly, and reward your puppy after each cleaning session to create positive association.
        </p>
      </section>

      {/* ===== WHEN TO SEEK HELP ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">🩺 When to Seek Veterinary Help</h4>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
          <li>Persistent head shaking or scratching</li>
          <li>Redness or swelling deep in ear</li>
          <li>Strong odor or dark discharge</li>
          <li>Scabs or hair loss around ear</li>
          <li>Balance issues or head tilting</li>
        </ul>
        <p className="text-gray-700 leading-relaxed">
          These can indicate outer ear infection (otitis externa) or mites that require prescription treatment.
        </p>
      </section>

      {/* ===== LONG TERM CARE ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">🌸 Maintaining Long-Term Ear Health</h4>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Dry ears thoroughly after baths or swims.</li>
          <li>Use a soft towel or pet-safe dryer to remove moisture.</li>
          <li>Trim excess hair inside the ear canal (ask your groomer or vet).</li>
          <li>Maintain diet rich in omega fatty acids for skin and ear health.</li>
          <li>Avoid human ear drops or alcohol solutions.</li>
        </ul>
        <p className="text-gray-700 mt-4">
          Healthy ears should be clean, smooth, and light pink — never red or flaky.
        </p>
      </section>

      {/* ===== SUMMARY ===== */}
      <section className="text-center max-w-3xl mx-auto mb-16">
        <h4 className="text-2xl font-semibold text-[#8B6A43] mb-3">🐕 Summary</h4>
        <p className="text-gray-700 leading-relaxed mb-3">
          Around 22 weeks, your puppy is exploring the world through sound. Gentle, regular ear care now
          ensures comfort and prevents future issues.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Caring for your dog’s ears is an act of love and trust — laying the foundation for a lifetime of
          happiness and health. 🐾
        </p>
      </section>

      {/* ===== APP ADVERTISEMENT + COPYRIGHT ===== */}
      <section className="text-center max-w-4xl mx-auto mb-20">
        <h4 className="font-semibold mb-3 text-[#111827]">
          Continue with PetGo’s Puppy Care Guide
        </h4>
        <p className="text-gray-700 mb-10">
          PetGo helps you track grooming and health care for every stage of your puppy’s journey.
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