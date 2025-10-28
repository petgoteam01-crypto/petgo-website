"use client";

import Image from "next/image";
import Link from "next/link";

export default function Week30Page() {
  return (
    <main className="min-h-screen bg-[#F9F6F1] text-[#111827] py-16 px-6">
      {/* ===== HEADER ===== */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-2">
          Puppy Care Guide
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-[#8B6A43]">
          Week 30 – Understanding and Managing Tear Stains (Epiphora)
        </h2>
      </div>

      {/* ===== SMARTIE IMAGE ===== */}
      <div className="flex justify-center mb-10">
        <Image
          src="/week30mainpic.jpg"
          alt="Puppy with clean eyes"
          width={600}
          height={400}
          className="rounded-2xl shadow-md object-cover"
        />
      </div>

      {/* ===== INTRO ===== */}
      <section className="text-center max-w-3xl mx-auto mb-12">
        <p className="text-gray-700 leading-relaxed">
          Many pet parents notice brown or reddish stains forming around their puppy’s
          eyes. These tear stains, known as <strong>epiphora</strong>, result from excessive
          tearing and oxidation of compounds called <em>porphyrins</em>. Understanding
          the cause is key to keeping your puppy’s face fresh and healthy.
        </p>
      </section>

      {/* ===== 1. WHY TEAR STAINS OCCUR ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">1️⃣ Why Tear Stains Occur</h4>
        <p className="text-gray-700 leading-relaxed mb-3">
          Tear stains appear when excess tears overflow from the eye. These tears contain
          <strong> porphyrin</strong>, a compound rich in iron that turns reddish-brown
          upon exposure to air and light — most visible on light-colored fur.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Occasional tearing is normal, but chronic staining often signals an underlying
          cause that should be identified and managed early.
        </p>
      </section>

      {/* ===== 2. FIND THE CAUSE ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">
          2️⃣ Don’t Just Wipe the Tears — Find the Cause
        </h4>
        <p className="text-gray-700 leading-relaxed mb-3">
          Removing the stains alone won’t stop them from coming back. The key is to
          identify what’s causing the excessive tearing. Below are four of the most
          common reasons:
        </p>

        {/* ==== CAUSE 1 ==== */}
        <div className="mb-6">
          <h5 className="font-medium text-[#8B6A43] mb-2">
            Cause 1. Food Allergies
          </h5>
          <p className="text-gray-700 leading-relaxed mb-3">
            Food allergies are a frequent cause of persistent tearing. If your puppy’s
            eyes are watery with no signs of infection, try switching to a new protein
            source (for example, from chicken to salmon or duck).
          </p>
          <p className="text-gray-700 leading-relaxed mb-3">
            Improvement after diet change suggests an allergy-related issue. Vets can
            confirm this through a blood test (between $70 and $250).
          </p>
          <p className="text-gray-700 leading-relaxed text-sm">
            💡 <strong>PetGo Tip:</strong> Treat ingredients can also cause allergic tearing.
            Avoid dairy, wheat, or chicken-based snacks for sensitive dogs.
          </p>
        </div>

        {/* ==== CAUSE 2 ==== */}
        <div className="mb-6">
          <h5 className="font-medium text-[#8B6A43] mb-2">
            Cause 2. Hair Irritation Around the Eyes
          </h5>
          <p className="text-gray-700 leading-relaxed mb-3">
            Overgrown facial hair can irritate the eyes, leading to excess tears. Use
            rounded-tip grooming scissors or visit a professional groomer to trim fur
            and prevent contact with the eyes.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Trimming regularly improves comfort, reduces tearing, and prevents infection.
          </p>
        </div>

        {/* ==== CAUSE 3 ==== */}
        <div className="mb-6">
          <h5 className="font-medium text-[#8B6A43] mb-2">
            Cause 3. Underlying Infections or Conditions
          </h5>
          <p className="text-gray-700 leading-relaxed mb-3">
            Eye discharge can also stem from <strong>bacterial infections</strong>,
            <strong> conjunctivitis</strong>, <strong>glaucoma</strong>, or even dental
            issues near the eyes.
          </p>
          <p className="text-gray-700 leading-relaxed">
            If you notice redness, swelling, odor, or excessive tearing, consult your
            veterinarian for an eye check during your next visit.
          </p>
        </div>

        {/* ==== CAUSE 4 ==== */}
        <div>
          <h5 className="font-medium text-[#8B6A43] mb-2">
            Cause 4. Nasolacrimal Duct Obstruction (Blocked Tear Ducts)
          </h5>
          <p className="text-gray-700 leading-relaxed mb-3">
            Some breeds — especially <strong>Maltese, Poodles,</strong> and{" "}
            <strong>Shih Tzus</strong> — are prone to blocked tear ducts that prevent
            normal drainage. In severe cases, minor flushing or surgery under light
            anesthesia may be required.
          </p>
          <p className="text-gray-700 leading-relaxed">
            👉 Discuss all options thoroughly with your vet before proceeding.
          </p>
        </div>
      </section>

      {/* ===== 3. WHEN TO SEEK HELP ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">
          3️⃣ When to Seek Veterinary Help
        </h4>
        <p className="text-gray-700 leading-relaxed mb-3">
          While mild tear stains can often be managed at home, worsening or persistent
          tearing should be examined by a vet. If untreated, chronic moisture may lead
          to irritation or corneal ulcers.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Quick diagnosis ensures long-term comfort and prevents serious eye conditions.
        </p>
      </section>

      {/* ===== PETGO PROFESSIONAL CARE TIPS ===== */}
      <section className="max-w-3xl mx-auto mb-16 bg-[#fffaf5] border border-[#e6dccf] p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">
          🩺 PetGo Professional Care Tips
        </h4>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-3">
          <li>Clean the eye area daily with a soft, damp cotton pad or pet wipes.</li>
          <li>Avoid human cosmetic wipes — they irritate sensitive skin.</li>
          <li>Keep fur dry to prevent bacterial growth.</li>
          <li>
            Provide a diet rich in omega-3 fatty acids and limited fillers for
            healthier eyes.
          </li>
          <li>
            Watch for signs like rubbing, pawing, or squinting — these indicate
            irritation or discomfort.
          </li>
        </ul>
      </section>

      {/* ===== PETGO SHOP | EYE CARE ESSENTIALS ===== */}
<section className="max-w-5xl mx-auto mb-16 bg-white p-8 rounded-2xl shadow-sm">
  <h4 className="font-semibold mb-4 text-[#8B6A43]">
    PetGo Shop | Eye Care Essentials
  </h4>
  <p className="text-gray-700 mb-8">
    Keep your pup’s eyes clean, bright, and irritation-free. These gentle,
    vet-approved wipes help remove tear stains, dirt, and discharge — ideal for
    daily care and sensitive pets.
  </p>

  <div className="grid md:grid-cols-2 gap-8">
    {/* === Product 1 – Earth Rated Eye Wipes === */}
    <div className="bg-[#F9F6F1] rounded-2xl shadow-sm hover:shadow-md transition flex flex-col justify-between p-6 text-center">
      <div>
        <Image
          src="/earth-rated-eye-wipes.jpg"
          alt="Earth Rated Pet Eye Wipes"
          width={300}
          height={220}
          className="object-contain mb-4 rounded-xl max-h-[220px] mx-auto"
        />
        <p className="text-gray-800 font-medium mb-1">
          Earth Rated Pet Eye Wipes (70 Count)
        </p>
        <p className="text-sm text-gray-600 mb-1">Seller: Earth Rated</p>
        <p className="text-gray-700 text-sm leading-relaxed mb-6 min-h-[40px]">
          Fragrance-free, hypoallergenic wipes designed to gently remove dirt
          and discharge — keeping your dog’s eyes clean and clear.
        </p>
      </div>
      <div>
        <p className="text-[#8B6A43] font-semibold mb-2">$16.99</p>
        <Link
          href="https://www.amazon.ca/Earth-Rated-Plant-Based-USDA-Certified-Hypoallergenic/dp/B0CCBK2QY1/"
          target="_blank"
          className="text-[#8B6A43] hover:underline font-medium text-sm"
        >
          View on Amazon &gt;
        </Link>
      </div>
    </div>

    {/* === Product 2 – OPULA Eye Wipes === */}
    <div className="bg-[#F9F6F1] rounded-2xl shadow-sm hover:shadow-md transition flex flex-col justify-between p-6 text-center">
      <div>
        <Image
          src="/opula-eye-wipes.jpg"
          alt="OPULA Dog Eye Wipes Tear Stain Remover"
          width={300}
          height={220}
          className="object-contain mb-4 rounded-xl max-h-[220px] mx-auto"
        />
        <p className="text-gray-800 font-medium mb-1">
          OPULA Tear Stain Remover Eye Wipes (300 Count)
        </p>
        <p className="text-sm text-gray-600 mb-1">Seller: OPULA</p>
        <p className="text-gray-700 text-sm leading-relaxed mb-6 min-h-[40px]">
          Extra-large, presoaked cotton pads that gently lift away buildup and
          tear stains — perfect for routine grooming of dogs and cats.
        </p>
      </div>
      <div>
        <p className="text-[#8B6A43] font-semibold mb-2">$23.99</p>
        <Link
          href="https://www.amazon.ca/Remover-Cleaner-Presoaked-Discharge-Non-Irritation/dp/B08T6NG9Y2/"
          target="_blank"
          className="text-[#8B6A43] hover:underline font-medium text-sm"
        >
          View on Amazon &gt;
        </Link>
      </div>
    </div>
  </div>
</section>


      

      {/* ===== SUMMARY ===== */}
      <section className="max-w-3xl mx-auto mb-16 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-3">💡 In Summary</h4>
        <p className="text-gray-700 leading-relaxed">
          Tear stains aren’t just a cosmetic issue — they often reflect deeper causes
          like allergies, irritation, or duct blockage. Early care and consistent
          cleaning will keep your puppy bright-eyed, comfortable, and healthy.
        </p>
      </section>

      {/* ===== APP ADVERTISEMENT + COPYRIGHT ===== */}
      <section className="text-center max-w-4xl mx-auto mb-20">
        <h4 className="font-semibold mb-3 text-[#111827]">
          Continue with PetGo’s Puppy Care Guide
        </h4>
        <p className="text-gray-700 mb-10">
          PetGo helps you track your puppy’s wellness — from tear stains to happy,
          shining eyes.
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