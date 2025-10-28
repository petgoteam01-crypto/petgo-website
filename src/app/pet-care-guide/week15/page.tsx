"use client";

import Image from "next/image";
import Link from "next/link";

export default function Week15Page() {
  return (
    <main className="min-h-screen bg-[#F9F6F1] text-[#111827] py-16 px-6">
      {/* ===== HEADER ===== */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-2">
          Puppy Care Guide
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-[#8B6A43]">
          Week 15 – Teething and Oral Health
        </h2>
      </div>

      {/* ===== SMARTIE IMAGE ===== */}
      <div className="flex justify-center mb-10">
        <Image
          src="/week15mainpic.jpg"
          alt="Puppy teething and oral care"
          width={600}
          height={400}
          className="rounded-2xl shadow-md object-cover"
        />
      </div>

      {/* ===== INTRO ===== */}
      <section className="text-center max-w-3xl mx-auto mb-12">
        <h3 className="text-xl font-semibold mb-3">
          “Your puppy’s teething stage — a small milestone toward a healthy adult smile.”
        </h3>
        <p className="text-gray-700 leading-relaxed">
          Around 3 – 4 months old, puppies begin teething — a stage that brings chewing, nibbling, and
          lots of curiosity. This week helps you support your puppy’s oral comfort and form healthy
          habits that last a lifetime.
        </p>
      </section>

      {/* ===== WHEN TEETHING STARTS ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">🐶 When Puppies Start Teething</h4>
        <p className="text-gray-700 leading-relaxed mb-4">
          At around 3 to 4 months of age, your puppy may start biting, chewing, and gnawing on
          everything. Don’t worry — this is completely normal! Chewing helps relieve the pressure and
          itchiness caused by erupting adult teeth.
        </p>
        <p className="text-gray-700 leading-relaxed">
          This marks the beginning of the teething stage — an important milestone in your puppy’s
          growth journey.
        </p>
      </section>

      {/* ===== TOOTH DEVELOPMENT ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">🦷 How Puppy Teeth Develop</h4>
        <p className="text-gray-700 leading-relaxed mb-4">
          Puppies are born without visible teeth. Around 3 weeks old, 28 baby teeth begin to emerge,
          which later fall out as 42 adult teeth take their place between 4 and 6 months.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          The general order of appearance is:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
          <li>Incisors (front teeth)</li>
          <li>Canines (fangs)</li>
          <li>Premolars (behind the canines)</li>
          <li>Molars (back chewing teeth)</li>
        </ul>
        <p className="text-gray-700 leading-relaxed">
          It’s fascinating — and sometimes uncomfortable — as your puppy’s mouth transforms for
          adulthood.
        </p>
      </section>

      {/* ===== ORAL CARE STEPS ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">🪥 Oral Care During the Teething Phase</h4>
        <p className="text-gray-700 leading-relaxed mb-4">
          Teething can cause sore gums, mild inflammation, or drooling. Your puppy may chew more or
          lose appetite briefly — that’s okay! Here’s how to ease discomfort and start great habits:
        </p>

        <h5 className="font-semibold mb-2 text-[#8B6A43]">Step 1. Gently Clean With Gauze or Soft Cloth</h5>
        <p className="text-gray-700 leading-relaxed mb-4">
          Get your puppy used to oral touch early (2–3 months). Use soft gauze or a gentle rubber
          brush to wipe teeth and gums. Keep it short and calm; praise afterward. The goal is comfort,
          not perfection.
        </p>

        <h5 className="font-semibold mb-2 text-[#8B6A43]">Step 2. Transition to Puppy Toothbrush and Toothpaste</h5>
        <p className="text-gray-700 leading-relaxed mb-4">
          Once comfortable, switch to a dog toothbrush and dog-safe toothpaste (never human paste).
          Brush 1–2 times a week at first, increasing frequency over time. Early brushing prevents
          plaque, gum disease, and bad breath.
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


      {/* ===== TODAY'S TIP ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">💡 Today’s Tip</h4>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>
            Mild misalignment (underbite / overbite) is usually harmless; consult your vet only if
            advised.
          </li>
          <li>
            If a baby tooth doesn’t fall out, your vet may need to remove it to avoid infection or
            crowding.
          </li>
          <li>
            Offer safe teething toys or dental chews — they loosen baby teeth and strengthen gums.
          </li>
          <li>Swallowing a loose tooth is harmless and passes naturally.</li>
          <li>
            Mild gum bleeding is normal; if it lasts beyond 2–3 days, see your vet.
          </li>
        </ul>
      </section>

      {/* ===== EXTRA PETGO TIPS ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">🪄 Extra PetGo Tips</h4>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
          <li>Keep multiple chew toys to redirect biting from furniture or hands.</li>
          <li>Use chilled wet cloths or puppy teething toys to soothe gums.</li>
          <li>Avoid hard bones or sticks — they can damage baby teeth.</li>
          <li>Brush gently after meals and reward calm cooperation.</li>
          <li>
            Watch for redness, odor, or tartar — early signs of dental issues that need attention.
          </li>
        </ul>
      </section>

      {/* ===== GENTLE ENCOURAGEMENT ===== */}
      <section className="max-w-3xl mx-auto mb-16 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">❤️ Gentle Encouragement</h4>
        <p className="text-gray-700 leading-relaxed mb-3">
          Teething can make puppies cranky or overly mouthy — just like toddlers cutting teeth. Stay
          calm, redirect gently, and praise effort.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Every soothing touch and moment of patience builds trust. With consistency, your puppy will
          grow into a cheerful adult with strong, healthy teeth and a bright smile. 🦷✨
        </p>
      </section>

      {/* ===== APP ADVERTISEMENT + COPYRIGHT ===== */}
      <section className="text-center max-w-4xl mx-auto mb-20">
        <h4 className="font-semibold mb-3 text-[#111827]">
          Continue with PetGo’s Puppy Care Guide
        </h4>
        <p className="text-gray-700 mb-10">
          Keep your puppy’s smile shining — PetGo helps you every step of the way.
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

