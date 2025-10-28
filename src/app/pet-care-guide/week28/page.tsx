"use client";

import Image from "next/image";
import Link from "next/link";

export default function Week28Page() {
  return (
    <main className="min-h-screen bg-[#F9F6F1] text-[#111827] py-16 px-6">
      {/* ===== HEADER ===== */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-2">
          Puppy Care Guide
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-[#8B6A43]">
          Week 28 – Hygienic Grooming
        </h2>
      </div>

      {/* ===== SMARTIE IMAGE ===== */}
      <div className="flex justify-center mb-10">
        <Image
          src="/week28mainpic.jpg"
          alt="Puppy hygiene grooming"
          width={600}
          height={400}
          className="rounded-2xl shadow-md object-cover"
        />
      </div>

      {/* ===== INTRO ===== */}
      <section className="text-center max-w-3xl mx-auto mb-12">
        <p className="text-gray-700 leading-relaxed">
          Your puppy is now 28 weeks old — entering the stage where regular hygiene
          care becomes essential. At around seven months, grooming is more than just
          looking good — it’s about maintaining health, comfort, and trust during
          handling.
        </p>
      </section>

      {/* ===== WHAT IS HYGIENIC GROOMING ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">
          🧴 What Is Hygienic Grooming?
        </h4>
        <p className="text-gray-700 leading-relaxed mb-3">
          Hygienic grooming focuses on cleaning and trimming areas prone to moisture
          or dirt buildup — like ears, paws, paw pads, and the tail area. It can be
          done at home or at a professional salon.
        </p>
        <p className="text-gray-700 leading-relaxed mb-3">
          💰 At salons, hygiene grooming usually costs about $45 to $110+ for a basic bath and brush, $50 to $130+ for a bath and tidy, and $80 to $200+ for a full groom,
          depending on region and service scope.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Visiting a groomer once or twice helps you observe safe techniques before
          confidently handling these tasks at home.
        </p>
      </section>

      {/* ===== PETGO SHOP | GROOMING ESSENTIALS ===== */}
<section className="max-w-6xl mx-auto mb-16 bg-white p-8 rounded-2xl shadow-sm">
  <h4 className="font-semibold mb-4 text-[#8B6A43]">
    PetGo Shop | Grooming & Paw Care Essentials
  </h4>
  <p className="text-gray-700 mb-8">
    Keep your dog clean, healthy, and comfortable from head to paw. These
    vet-approved essentials make at-home grooming easier, safer, and more
    enjoyable for both you and your pup.
  </p>

  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
    {/* === Product 1 – Vetnique Ear Cleaner === */}
    <div className="bg-[#F9F6F1] rounded-2xl shadow-sm hover:shadow-md transition flex flex-col justify-between p-6 text-center">
      <div>
        <Image
          src="/vetnique-ear-cleaner.jpg"
          alt="Vetnique Oticbliss Dog Ear Cleaner"
          width={260}
          height={200}
          className="object-contain mb-4 rounded-xl max-h-[200px] mx-auto"
        />
        <p className="text-gray-800 font-medium mb-1">
          Vetnique Oticbliss Ear Cleaner (8 oz)
        </p>
        <p className="text-sm text-gray-600 mb-1">Seller: Vetnique</p>
        <p className="text-gray-700 text-sm leading-relaxed mb-6 min-h-[40px]">
          Soothing aloe-infused ear cleaner that removes wax and odor while
          keeping ears fresh and calm — perfect for weekly use.
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

    {/* === Product 2 – Musher’s Secret Paw Wax === */}
    <div className="bg-[#F9F6F1] rounded-2xl shadow-sm hover:shadow-md transition flex flex-col justify-between p-6 text-center">
      <div>
        <Image
          src="/mushers-paw-wax.jpg"
          alt="Musher's Secret Dog Paw Wax"
          width={260}
          height={200}
          className="object-contain mb-4 rounded-xl max-h-[200px] mx-auto"
        />
        <p className="text-gray-800 font-medium mb-1">
          Musher’s Secret Paw Protection Wax (2.1 oz)
        </p>
        <p className="text-sm text-gray-600 mb-1">Seller: Musher's Secret</p>
        <p className="text-gray-700 text-sm leading-relaxed mb-6 min-h-[40px]">
          All-season, all-natural wax that shields paws from heat, snow, and
          salt — loved by dog owners for outdoor adventures.
        </p>
      </div>
      <div>
        <p className="text-[#8B6A43] font-semibold mb-2">$24.90</p>
        <Link
          href="https://www.amazon.ca/Mushers-Secret-Pet-Protection-60-Gram/dp/B0002IJQDC/"
          target="_blank"
          className="text-[#8B6A43] hover:underline font-medium text-sm"
        >
          View on Amazon &gt;
        </Link>
      </div>
    </div>

    {/* === Product 3 – gonicc Nail Clippers === */}
    <div className="bg-[#F9F6F1] rounded-2xl shadow-sm hover:shadow-md transition flex flex-col justify-between p-6 text-center">
      <div>
        <Image
          src="/gonicc-nail-clippers.jpg"
          alt="gonicc Dog Nail Clippers and Trimmers"
          width={260}
          height={200}
          className="object-contain mb-4 rounded-xl max-h-[200px] mx-auto"
        />
        <p className="text-gray-800 font-medium mb-1">
          gonicc Dog Nail Clippers &amp; Trimmer
        </p>
        <p className="text-sm text-gray-600 mb-1">Seller: gonicc</p>
        <p className="text-gray-700 text-sm leading-relaxed mb-6 min-h-[40px]">
          Professional-grade stainless steel blades with a safety guard — ensures
          clean cuts and prevents over-trimming.
        </p>
      </div>
      <div>
        <p className="text-[#8B6A43] font-semibold mb-2">$13.95</p>
        <Link
          href="https://www.amazon.ca/gonicc-Dog-Nail-Clippers-Trimmer/dp/B075N83693/"
          target="_blank"
          className="text-[#8B6A43] hover:underline font-medium text-sm"
        >
          View on Amazon &gt;
        </Link>
      </div>
    </div>

    {/* === Product 4 – oneisall Grooming Clippers === */}
    <div className="bg-[#F9F6F1] rounded-2xl shadow-sm hover:shadow-md transition flex flex-col justify-between p-6 text-center">
      <div>
        <Image
          src="/oneisall-dog-clippers.jpg"
          alt="oneisall Cordless Pet Grooming Clippers"
          width={260}
          height={200}
          className="object-contain mb-4 rounded-xl max-h-[200px] mx-auto"
        />
        <p className="text-gray-800 font-medium mb-1">
          oneisall Cordless Pet Grooming Clippers
        </p>
        <p className="text-sm text-gray-600 mb-1">Seller: oneisall</p>
        <p className="text-gray-700 text-sm leading-relaxed mb-6 min-h-[40px]">
          Quiet, low-vibration trimmer with double blades — perfect for trimming
          around paws, eyes, and ears with zero stress.
        </p>
      </div>
      <div>
        <p className="text-[#8B6A43] font-semibold mb-2">$32.99</p>
        <Link
          href="https://www.amazon.ca/oneisall-Clippers-Cordless-Grooming-Trimming/dp/B089W594LC/"
          target="_blank"
          className="text-[#8B6A43] hover:underline font-medium text-sm"
        >
          View on Amazon &gt;
        </Link>
      </div>
    </div>
  </div>
</section>


      {/* ===== HYGIENE CHECKLIST ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm space-y-6">
        <h4 className="font-semibold text-[#8B6A43] mb-4">
          ✨ Hygiene Grooming Checklist
        </h4>

        {/* EARS */}
        <div>
          <h5 className="font-medium text-[#8B6A43] mb-2">🦻 Ears</h5>
          <p className="text-gray-700 leading-relaxed mb-3">
            A dog’s ears are delicate — avoid rubbing or inserting cotton swabs.  
            Use soft gauze or pet-safe wipes to gently clean the outer ear area.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-1 mb-3">
            <li>Check ears weekly for odor, redness, or wax.</li>
            <li>Use a pet ear cleaner for maintenance.</li>
            <li>
              For hairy ears, trim visible hairs gently — or let groomers handle deeper areas.
            </li>
            <li>
              ⚠️ Floppy-eared breeds (like Spaniels or Retrievers) need extra attention to prevent infection.
            </li>
          </ul>
          <p className="text-gray-700 text-sm">
            🧡 Talk softly during cleaning — it builds comfort and trust.
          </p>
        </div>

        {/* PAW PADS */}
        <div>
          <h5 className="font-medium text-[#8B6A43] mb-2">🐾 Paw Pads</h5>
          <p className="text-gray-700 leading-relaxed mb-3">
            The paw pads are highly sensitive and collect debris easily.  
            Trim hair between the pads to prevent moisture buildup and slipping.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-1 mb-3">
            <li>Keep pads dry and clean after walks.</li>
            <li>Apply natural paw balm (shea butter or coconut oil) if dry or cracked.</li>
            <li>
              Trim hair around “jelly pads” every few weeks to avoid fungal irritation.
            </li>
          </ul>
        </div>

        {/* NAILS */}
        <div>
          <h5 className="font-medium text-[#8B6A43] mb-2">🐕 Paw Claws (Nails)</h5>
          <p className="text-gray-700 leading-relaxed mb-3">
            Indoor dogs need regular nail trimming to prevent pain or posture issues.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-1 mb-3">
            <li>Trim only the transparent tip — avoid the quick.</li>
            <li>For dark nails, trim gradually and inspect carefully.</li>
            <li>Use pet nail clippers and keep styptic powder ready for bleeding.</li>
            <li>⚠️ Overcutting causes pain — always trim calmly and confidently.</li>
          </ul>
        </div>

        {/* FOOT TOPS */}
        <div>
          <h5 className="font-medium text-[#8B6A43] mb-2">🦶 Foot Tops (Paw Tops)</h5>
          <p className="text-gray-700 leading-relaxed mb-3">
            For small indoor breeds, trim the fur on top of the paws to prevent slipping
            and matting.  
            Follow fur growth direction and cut evenly.
          </p>
          <p className="text-gray-700 text-sm">
            ✂️ Trim conservatively if unsure — avoid deep cuts that may injure or irritate.
          </p>
        </div>

        {/* BETWEEN TOES */}
        <div>
          <h5 className="font-medium text-[#8B6A43] mb-2">🩹 Between the Toes</h5>
          <p className="text-gray-700 leading-relaxed mb-3">
            After walks, gently clean between the toes with a towel to remove dirt or
            small pebbles. Regular cleaning prevents cysts and irritation.
          </p>
        </div>

        {/* TAIL & ANUS */}
        <div>
          <h5 className="font-medium text-[#8B6A43] mb-2">🐕‍🦺 Tail & Anal Area</h5>
          <p className="text-gray-700 leading-relaxed mb-3">
            Trimming hair near the anus prevents fecal buildup and discomfort.
            Avoid shaving too short — it may irritate the skin or anal glands.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-1 mb-3">
            <li>Use gentle clippers or scissors at a safe distance.</li>
            <li>Apply mild pet-safe soothing cream if redness occurs.</li>
            <li>Wipe gently with fragrance-free wet wipes and dry fully.</li>
          </ul>
        </div>
      </section>

      {/* ===== ADDITIONAL NOTES ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">🐩 Additional Hygiene Care Notes</h4>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-3">
          <li>Brush daily to remove dust, loose fur, and prevent tangles.</li>
          <li>Bathe every 2–3 weeks using mild, pH-balanced puppy shampoo.</li>
          <li>Always dry completely after baths, especially in ears and paw pads.</li>
          <li>Reward your puppy after each grooming session for positive association.</li>
        </ul>
      </section>

      {/* ===== PETGO PROFESSIONAL INSIGHT ===== */}
      <section className="max-w-3xl mx-auto mb-16 bg-[#fffaf5] border border-[#e6dccf] p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-3">🐾 PetGo Professional Insight</h4>
        <p className="text-gray-700 leading-relaxed mb-3">
          Hygienic grooming supports comfort, confidence, and long-term health.
          It helps detect early issues like ticks, ear infections, or allergies
          before they worsen.
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mb-3">
          <li>Clean ears weekly.</li>
          <li>Trim paws and paw pads every 2–3 weeks.</li>
          <li>Check nails every 10–14 days.</li>
          <li>Clean anal area monthly or as needed.</li>
        </ul>
        <p className="text-gray-700 leading-relaxed">
          🧠 Healthy grooming habits form the foundation of a calm, confident companion.
        </p>
      </section>

      {/* ===== APP ADVERTISEMENT + COPYRIGHT ===== */}
      <section className="text-center max-w-4xl mx-auto mb-20">
        <h4 className="font-semibold mb-3 text-[#111827]">
          Continue with PetGo’s Puppy Care Guide
        </h4>
        <p className="text-gray-700 mb-10">
          PetGo helps you create positive grooming experiences — building comfort,
          trust, and joy in every routine.
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