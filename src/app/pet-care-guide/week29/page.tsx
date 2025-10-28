"use client";

import Image from "next/image";
import Link from "next/link";

export default function Week29Page() {
  return (
    <main className="min-h-screen bg-[#F9F6F1] text-[#111827] py-16 px-6">
      {/* ===== HEADER ===== */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-2">
          Puppy Care Guide
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-[#8B6A43]">
          Week 29 – Checking for Retained Baby Teeth
        </h2>
      </div>

      {/* ===== SMARTIE IMAGE ===== */}
      <div className="flex justify-center mb-10">
        <Image
          src="/week29mainpic.jpg"
          alt="Puppy dental check"
          width={600}
          height={400}
          className="rounded-2xl shadow-md object-cover"
        />
      </div>

      {/* ===== INTRO ===== */}
      <section className="text-center max-w-3xl mx-auto mb-12">
        <p className="text-gray-700 leading-relaxed">
          At seven months, your puppy is nearing the end of the teething stage.
          This is the time to pay special attention to their dental health —
          ensuring baby teeth fall out properly as adult teeth take their place.
        </p>
      </section>

      {/* ===== 1. UNDERSTANDING TEETHING ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">
          1️⃣ Understanding the Teething Stage
        </h4>
        <p className="text-gray-700 leading-relaxed mb-3">
          Just like human infants, puppies go through a teething period.
          Most begin losing baby teeth around <strong>5–6 months</strong> as permanent teeth start
          to erupt. Proper oral care during this time sets the foundation for
          lifelong dental health.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Each breed and puppy is different — growth and timing can vary slightly,
          but gentle attention now makes all the difference later.
        </p>
      </section>

      {/* ===== 2. WHAT ARE RETAINED TEETH ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">
          2️⃣ What Are “Retained Baby Teeth”?
        </h4>
        <p className="text-gray-700 leading-relaxed mb-3">
          When an adult tooth erupts but the baby tooth remains in place, it’s
          called a <strong>retained deciduous tooth</strong>. These teeth can cause crowding,
          misalignment, or gum inflammation if not removed.
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-3">
          <li>Misalignment or abnormal bite (malocclusion)</li>
          <li>Food and tartar buildup in tight spaces</li>
          <li>Gum irritation and early dental disease</li>
        </ul>
        <p className="text-gray-700 leading-relaxed">
          Check your puppy’s mouth regularly — especially during months 6–8.
          Early detection prevents long-term dental issues.
        </p>
      </section>

      {/* ===== 3. HOW TO CHECK ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">
          3️⃣ How to Check for Retained Teeth
        </h4>
        <p className="text-gray-700 leading-relaxed mb-3">
          Puppies may not cooperate during checks, and small teeth can be hard to spot.
          Ask your vet to examine your puppy’s mouth during routine visits.
        </p>
        <p className="text-gray-700 leading-relaxed mb-3">
          If a retained tooth is found, your vet might recommend extraction —
          often during another procedure like spaying or neutering to reduce stress.
        </p>
        <p className="text-gray-700 leading-relaxed">
          👉 Always discuss timing, anesthesia, and aftercare options with your veterinarian.
        </p>
      </section>

      {/* ===== 4. DENTAL CARE TIPS ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">
          4️⃣ Dental Care Tips for Growing Puppies
        </h4>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
          <li>Start brushing early using a puppy toothbrush or finger brush.</li>
          <li>Use enzymatic pet toothpaste — never human toothpaste.</li>
          <li>Keep brushing sessions short, positive, and consistent.</li>
          <li>Offer dental chews and toys to reduce plaque and teething stress.</li>
          <li>Regular brushing prevents resistance and dental anxiety later.</li>
        </ul>
        <p className="text-gray-700 leading-relaxed">
          A clean mouth equals a happy pup — and smoother vet visits down the road.
        </p>
      </section>

      {/* ===== 5. WHEN TO SEEK HELP ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">
          5️⃣ When to Seek Professional Help
        </h4>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
          <li>A baby tooth remains even after the adult tooth emerges.</li>
          <li>Bad breath, swollen gums, or drooling.</li>
          <li>Difficulty chewing or avoiding food.</li>
        </ul>
        <p className="text-gray-700 leading-relaxed mb-3">
          Small-breed and short-muzzle dogs are more prone to retained baby teeth.
          Schedule an oral exam if symptoms persist.
        </p>
      </section>

      {/* ===== PETGO TIP ===== */}
      <section className="max-w-3xl mx-auto mb-16 bg-[#fffaf5] border border-[#e6dccf] p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-3">🩺 PetGo Tip</h4>
        <p className="text-gray-700 leading-relaxed mb-3">
          Dental care is a crucial part of your puppy’s overall health.
          Healthy teeth support better nutrition, prevent pain, and protect
          organs like the heart and kidneys later in life.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Start now — make brushing a calm daily ritual. Your future self (and your
          puppy’s smile) will thank you!
        </p>
      </section>

            {/* ===== PETGO SHOP | ORAL CARE ESSENTIALS ===== */}
<section className="max-w-5xl mx-auto mb-16 bg-white p-8 rounded-2xl shadow-sm">
  <h4 className="font-semibold mb-4 text-[#8B6A43]">
    PetGo Shop | Oral Care Essentials
  </h4>
  <p className="text-gray-700 mb-8">
    Keep your puppy’s smile healthy and their breath fresh with these vet-approved oral care kits. 
    Start early to build habits that prevent plaque, gum disease, and bad breath.
  </p>

  <div className="grid md:grid-cols-2 gap-8 items-stretch">
    {/* Product 1 – Arm & Hammer Dental Kit */}
    <div className="bg-[#F9F6F1] rounded-2xl shadow-sm hover:shadow-md transition flex flex-col p-6 text-center justify-between">
      <div className="w-full h-[220px] flex justify-center items-center mb-4">
        <Image
          src="/arm-hammer-dental-kit.jpg"
          alt="Arm & Hammer Dog Dental Care Fresh Breath Kit for Dogs"
          width={300}
          height={220}
          className="object-contain max-h-[200px]"
        />
      </div>
      <div className="flex-grow flex flex-col justify-between">
        <div>
          <h5 className="font-semibold text-[#4A321E] mb-2">
            Arm & Hammer Dog Dental Care Kit
          </h5>
          <p className="text-gray-700 text-sm mb-3">
            Complete 3-piece set with toothpaste, toothbrush, and finger brush — perfect for 
            freshening breath and reducing plaque safely for puppies.
          </p>
        </div>
        <div>
          <p className="font-semibold text-[#8B6A43] mb-4">$19.99</p>
          <Link
            href="https://www.amazon.ca/Arm-Hammer-Toothpaste-Toothbrush-Fingerbrush/dp/B01KD7Q8VO/ref=sr_1_6?crid=18P0UWR6UORKN&dib=eyJ2IjoiMSJ9.gT9fByCkCiqnY3Yeyx4JpSEKLcTG_ynpQGZ2o2HmEhQDJMCVDV42_Dnxyb7oVfQgc-FK0O5zlMJ2U1dLmBzIv2rLTK3zJ-sh_Ob2q69DP2XG0lXifGMUvbYR9HtAXimsbIrG2yIRC5OtoQKuPs-V1X2n_dX1CKP2-wLE0WDbU9ekMJFzRtyNg3fKY_0jLx6hzOC-IMfIog1acgjK01TeQVDn6z7YBvm4ka44mz-kAp3LtQnyNHmpsnx5RqtCQr3dTP6aumSWI04S-8oWmvOWxbIUNmVIROdn3l2KczAsEcc.B2WrfvzGSylHlnyHiBgR5c2CrfcWK9OLfcKSujhWe7w&dib_tag=se&keywords=puppy%2Btoothpaste%2Band%2Bbrush&qid=1761540633&sprefix=puppy%2Btoothpaste%2Band%2Bbrush%2Caps%2C102&sr=8-6&th=1"
            target="_blank"
            className="inline-block bg-[#8B6A43] hover:bg-[#6E5332] text-white px-6 py-2 rounded-lg transition"
          >
            Buy on Amazon
          </Link>
        </div>
      </div>
    </div>

    {/* Product 2 – Vet’s Best Dental Set */}
    <div className="bg-[#F9F6F1] rounded-2xl shadow-sm hover:shadow-md transition flex flex-col p-6 text-center justify-between">
      <div className="w-full h-[220px] flex justify-center items-center mb-4">
        <Image
          src="/vets-best-dental-set.jpg"
          alt="Vet’s Best Dog Toothbrush and Enzymatic Toothpaste Set"
          width={300}
          height={220}
          className="object-contain max-h-[200px]"
        />
      </div>
      <div className="flex-grow flex flex-col justify-between">
        <div>
          <h5 className="font-semibold text-[#4A321E] mb-2">
            Vet’s Best Toothbrush & Enzymatic Paste
          </h5>
          <p className="text-gray-700 text-sm mb-3">
            Vet-formulated enzymatic toothpaste and triple-headed brush make cleaning faster, 
            easier, and more effective — gentle enough for puppy gums.
          </p>
        </div>
        <div>
          <p className="font-semibold text-[#8B6A43] mb-4">$24.99</p>
          <Link
            href="https://www.amazon.ca/Vets-Best-Dogs-Triple-Headed-Toothbrush-3165810528/dp/B06XKJNFXX/ref=sr_1_9?crid=RFTVM6ZA2JYK&dib=eyJ2IjoiMSJ9.gT9fByCkCiqnY3Yeyx4JpSEKLcTG_ynpQGZ2o2HmEhQDJMCVDV42_Dnxyb7oVfQgc-FK0O5zlMJ2U1dLmBzIv2rLTK3zJ-sh_Ob2q69DP2XG0lXifGMUvbYR9HtAXimsbIrG2yIRC5OtoQKuPs-V1X2n_dX1CKP2-wLE0WDbU9ekMJFzRtyNg3fKY_0jLx6hzOC-IMfIog1acgjK01TeQVDn6z7YBvm4ka44mz-kAp3LtQnyNHmpsnx5RqtCQr3dTP6aumSWI04S-8oWmvOWxbIUNmVIROdn3l2KczAsEcc.B2WrfvzGSylHlnyHiBgR5c2CrfcWK9OLfcKSujhWe7w&dib_tag=se&keywords=puppy%2Btoothpaste%2Band%2Bbrush&qid=1761540706&sprefix=puppy%2Btoothpaste%2Band%2Bbrush%2Caps%2C100&sr=8-9&th=1"
            target="_blank"
            className="inline-block bg-[#8B6A43] hover:bg-[#6E5332] text-white px-6 py-2 rounded-lg transition"
          >
            Buy on Amazon
          </Link>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* ===== APP ADVERTISEMENT + COPYRIGHT ===== */}
      <section className="text-center max-w-4xl mx-auto mb-20">
        <h4 className="font-semibold mb-3 text-[#111827]">
          Continue with PetGo’s Puppy Care Guide
        </h4>
        <p className="text-gray-700 mb-10">
          PetGo helps you track health milestones — from dental checks to full-grown smiles.
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