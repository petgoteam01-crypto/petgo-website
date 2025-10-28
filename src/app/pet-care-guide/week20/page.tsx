"use client";

import Image from "next/image";
import Link from "next/link";

export default function Week20Page() {
  return (
    <main className="min-h-screen bg-[#F9F6F1] text-[#111827] py-16 px-6">
      {/* ===== HEADER ===== */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-2">
          Puppy Care Guide
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-[#8B6A43]">
          Week 20 – The First Bath
        </h2>
      </div>

      {/* ===== SMARTIE IMAGE ===== */}
      <div className="flex justify-center mb-10">
        <Image
          src="/week28mainpic.jpg"
          alt="Puppy’s first bath"
          width={600}
          height={400}
          className="rounded-2xl shadow-md object-cover"
        />
      </div>

      {/* ===== INTRO ===== */}
      <section className="text-center max-w-3xl mx-auto mb-12">
        <p className="text-gray-700 leading-relaxed">
          Your puppy has reached the 20-week mark — an exciting milestone! With vaccines complete and
          confidence building, it’s time for the first proper bath. Bathing isn’t just hygiene — it’s
          trust-building between you and your pup.
        </p>
      </section>

      {/* ===== WHEN TO START ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">🐶 When Should You Start Bathing?</h4>
        <p className="text-gray-700 leading-relaxed mb-4">
          It’s safe to begin full baths once your puppy is about 18–20 weeks old and the immune system
          is stronger. Before then, stick to warm-water wipe-downs for paws, muzzle, and bottom.
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
          <li>
            <strong>Winter:</strong> every 5–6 weeks
          </li>
          <li>
            <strong>Summer:</strong> every 3–4 weeks
          </li>
          <li>
            Sensitive skin? Use a damp towel between full baths.
          </li>
        </ul>
        <p className="text-gray-700 leading-relaxed">
          🩺 <strong>Tip:</strong> Over-bathing dries skin and removes protective oils. Adjust based on
          breed, coat type, and activity level.
        </p>
      </section>

      {/* ===== WHERE TO BATHE ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">🏡 Where Should the First Bath Take Place?</h4>
        <p className="text-gray-700 leading-relaxed mb-4">
          Begin at home in a quiet, calm area. Grooming salons can be stressful for first-timers.
          A home bath allows patience and reassurance — helping your puppy form positive memories.
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Pet-safe shampoo & conditioner (never human products)</li>
          <li>Soft towels + non-slip mat</li>
          <li>Lukewarm water ≈ 37 °C / 98 °F</li>
          <li>Treats for praise & calm behavior</li>
        </ul>
      </section>

{/* ===== PETGO SHOP: FIRST BATH ESSENTIALS ===== */}
<section className="max-w-5xl mx-auto mb-16 bg-white p-8 rounded-2xl shadow-sm">
  <h4 className="font-semibold mb-4 text-[#8B6A43]">
    PetGo Shop | First Bath Essentials
  </h4>
  <p className="text-gray-700 mb-8">
    Make your puppy’s first bath gentle and stress-free with these vet-recommended care items —
    safe, soothing, and perfect for building positive grooming habits.
  </p>

  <div className="grid md:grid-cols-3 gap-8">
    {/* === Product 1 – Burt's Bees === */}
    <div className="bg-[#F9F6F1] rounded-2xl shadow-sm hover:shadow-md transition flex flex-col justify-between p-6 text-center h-full">
      <div>
        <Image
          src="/burts-bees-puppy-shampoo.jpg"
          alt="Burt's Bees for Puppies Natural Tearless 2-in-1 Shampoo"
          width={280}
          height={200}
          className="object-contain mb-4 rounded-xl max-h-[220px] mx-auto"
        />
        <p className="text-gray-800 font-medium mb-1">
          Burt's Bees Tearless 2-in-1 Shampoo & Conditioner
        </p>
        <p className="text-sm text-gray-600 mb-1">Seller: BURT'S BEES FOR PETS</p>
        <p className="text-gray-700 text-sm leading-relaxed mb-6 min-h-[40px]">
          Natural buttermilk and linseed oil formula — gently cleans and softens your puppy’s
          coat without irritation.
        </p>
      </div>
      <div>
        <p className="text-[#8B6A43] font-semibold mb-2">$9.99</p>
        <Link
          href="https://www.amazon.ca/Puppies-Natural-Tearless-Conditioner-Buttermilk/dp/B00CVTRO48/ref=sr_1_7?crid=KN24ISU30FV2"
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
          src="/earth-rated-shampoo.jpg"
          alt="Earth Rated 3-in-1 Soothing Dog Shampoo"
          width={280}
          height={200}
          className="object-contain mb-4 rounded-xl max-h-[220px] mx-auto"
        />
        <p className="text-gray-800 font-medium mb-1">
          Earth Rated 3-in-1 Soothing Shampoo & Conditioner
        </p>
        <p className="text-sm text-gray-600 mb-1">Seller: Earth Rated (Canada)</p>
        <p className="text-gray-700 text-sm leading-relaxed mb-6 min-h-[40px]">
          Gentle oatmeal blend with white tea & basil scent — cleans, moisturizes, and
          deodorizes even the smelliest coats.
        </p>
      </div>
      <div>
        <p className="text-[#8B6A43] font-semibold mb-2">$19.99</p>
        <Link
          href="https://www.amazon.ca/Earth-Rated-Coat-Specific-Short-Haired-Conditioner/dp/B0D4CF8MBW/"
          target="_blank"
          className="text-[#8B6A43] hover:underline font-medium text-sm"
        >
          View on Amazon &gt;
        </Link>
      </div>
    </div>

    {/* === Product 3 – Bubble Hands === */}
    <div className="bg-[#F9F6F1] rounded-2xl shadow-sm hover:shadow-md transition flex flex-col justify-between p-6 text-center h-full">
      <div>
        <Image
          src="/bubble-hands-gloves.jpg"
          alt="Bubble Hands Dog Shampoo Gloves"
          width={280}
          height={200}
          className="object-contain mb-4 rounded-xl max-h-[220px] mx-auto"
        />
        <p className="text-gray-800 font-medium mb-1">
          Bubble Hands Dog Shampoo Gloves
        </p>
        <p className="text-sm text-gray-600 mb-1">Seller: Bubble Hands</p>
        <p className="text-gray-700 text-sm leading-relaxed mb-6 min-h-[40px]">
          Silicone scrubbing gloves with built-in bristles — massage, clean, and remove loose hair
          effortlessly during bath time.
        </p>
      </div>
      <div>
        <p className="text-[#8B6A43] font-semibold mb-2">$17.99</p>
        <Link
          href="https://www.amazon.ca/Bubble-Hands-Gloves-Scrubbers-Massaging/dp/B0CP18D7XX/"
          target="_blank"
          className="text-[#8B6A43] hover:underline font-medium text-sm"
        >
          View on Amazon &gt;
        </Link>
      </div>
    </div>

    {/* === Product 4 – Veterinary Formula === */}
    <div className="bg-[#F9F6F1] rounded-2xl shadow-sm hover:shadow-md transition flex flex-col justify-between p-6 text-center h-full">
      <div>
        <Image
          src="/veterinary-formula-detangler.jpg"
          alt="Veterinary Formula Gloss & Glide Detangler Spray"
          width={280}
          height={200}
          className="object-contain mb-4 rounded-xl max-h-[220px] mx-auto"
        />
        <p className="text-gray-800 font-medium mb-1">
          Veterinary Formula Gloss & Glide Detangler Spray
        </p>
        <p className="text-sm text-gray-600 mb-1">Seller: Veterinary Formula</p>
        <p className="text-gray-700 text-sm leading-relaxed mb-6 min-h-[40px]">
          Silk-protein shine builder detangles matted hair instantly — adds smoothness and
          healthy gloss after drying.
        </p>
      </div>
      <div>
        <p className="text-[#8B6A43] font-semibold mb-2">$14.19</p>
        <Link
          href="https://www.amazon.ca/Veterinary-Formula-Solutions-Detangler-Conditioner/dp/B000FP0JOM/"
          target="_blank"
          className="text-[#8B6A43] hover:underline font-medium text-sm"
        >
          View on Amazon &gt;
        </Link>
      </div>
    </div>

    {/* === Product 5 – Bone Dry === */}
    <div className="bg-[#F9F6F1] rounded-2xl shadow-sm hover:shadow-md transition flex flex-col justify-between p-6 text-center h-full">
      <div>
        <Image
          src="/bone-dry-dog-towel.jpg"
          alt="Bone Dry Microfiber Dog Bath Towel"
          width={280}
          height={200}
          className="object-contain mb-4 rounded-xl max-h-[220px] mx-auto"
        />
        <p className="text-gray-800 font-medium mb-1">
          Bone Dry Microfiber Dog Bath Towel (44×27.5″)
        </p>
        <p className="text-sm text-gray-600 mb-1">Seller: Bone Dry</p>
        <p className="text-gray-700 text-sm leading-relaxed mb-6 min-h-[40px]">
          Quick-dry microfiber towel with cute paw print embroidery — absorbs water fast and keeps
          pups warm post-bath.
        </p>
      </div>
      <div>
        <p className="text-[#8B6A43] font-semibold mb-2">$16.85</p>
        <Link
          href="https://www.amazon.ca/DII-Microfiber-Towel-Embroidered-Print/dp/B00T7W30IG/"
          target="_blank"
          className="text-[#8B6A43] hover:underline font-medium text-sm"
        >
          View on Amazon &gt;
        </Link>
      </div>
    </div>

    {/* === CTA BUTTON (in empty sixth grid slot) === */}
    <div className="flex items-center justify-center">
      <Link
        href="/shop/bath-essentials"
        className="inline-block bg-[#8B6A43] text-white font-medium px-8 py-4 rounded-full hover:bg-[#745637] transition text-center w-full md:w-auto"
      >
        Discover Full Essential Items for Bath
      </Link>
    </div>
  </div>
</section>



      {/* ===== STEP 1 ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">🧴 Step 1 – Preparation</h4>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
          <li>Brush out loose fur and tangles first.</li>
          <li>Ensure water is lukewarm, never hot.</li>
          <li>Wet gradually from paws upward; finish with the head last.</li>
          <li>Use a washcloth for the face — never pour water directly.</li>
        </ul>
        <p className="text-gray-700 leading-relaxed">
          ⚠️ Avoid spraying water into ears or eyes; wipe gently with a damp cloth instead.
        </p>
      </section>

      {/* ===== STEP 2 ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">🫧 Step 2 – Lathering & Washing</h4>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
          <li>Use a bath brush or silicone glove to massage shampoo into the coat.</li>
          <li>Short-coated pups can be washed gently by hand in circular motions.</li>
          <li>Rinse thoroughly — residue causes itching.</li>
          <li>Keep your tone calm; your voice sets the puppy’s mood.</li>
        </ul>
        <p className="text-gray-700 leading-relaxed">
          🐾 <strong>Extra Tip:</strong> Keep water pleasantly warm throughout the bath to avoid chills.
        </p>
      </section>

      {/* ===== STEP 3 ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">🧼 Step 3 – Special Areas to Clean</h4>
        <ol className="list-decimal list-inside text-gray-700 space-y-2 mb-4">
          <li>
            <strong>Ears:</strong> Block water with your hand or cotton pads; wipe flaps afterward with
            pet ear cleanser.
          </li>
          <li>
            <strong>Paws & Pads:</strong> Dry carefully and apply paw balm if cracked or dry.
          </li>
          <li>
            <strong>Anal Glands:</strong> Normally self-expressed; ask a vet or groomer for safe
            cleaning if odor or swelling appears.
          </li>
        </ol>
      </section>

      {/* ===== STEP 4 ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">🧴 Step 4 – Rinsing & Finishing Touches</h4>
        <p className="text-gray-700 leading-relaxed mb-3">
          Rinse once more to remove all product. For extra shine, you can mix a few drops of
          pet-safe coat oil in warm water for the final rinse.
        </p>
        <p className="text-gray-700 leading-relaxed">
          💡 <strong>Pro Tip:</strong> Use pet conditioner after shampooing to lock in moisture —
          especially for Poodles, Retrievers, or Shih Tzus.
        </p>
      </section>

      {/* ===== STEP 5 ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">🧺 Step 5 – Drying & Aftercare</h4>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
          <li>Pat dry with a towel — avoid vigorous rubbing.</li>
          <li>Use a low-heat dryer ≥ 20 cm (8 in) away while combing gently.</li>
          <li>Reward calmness with treats after drying.</li>
        </ul>
        <p className="text-gray-700 leading-relaxed">
          ⚠️ Ensure no water remains in the ears — moisture can trigger infections, especially in
          floppy-eared breeds.
        </p>
      </section>

      {/* ===== BATH FREQUENCY ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">
          🌤️ Bath Frequency & Seasonal Adjustments
        </h4>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
          <li>
            <strong>Winter:</strong> Every 5–6 weeks using moisturizing formulas.
          </li>
          <li>
            <strong>Summer:</strong> Every 3–4 weeks or after muddy play.
          </li>
          <li>
            Rinse with clean water after swimming even if skipping shampoo.
          </li>
          <li>
            Use a humidifier indoors during dry Canadian winters to prevent static and dry skin.
          </li>
        </ul>
      </section>

      {/* ===== SUMMARY ===== */}
      <section className="text-center max-w-3xl mx-auto mb-16">
        <h4 className="text-2xl font-semibold text-[#8B6A43] mb-3">
          🐾 Summary — Make Bath Time a Positive Routine
        </h4>
        <p className="text-gray-700 leading-relaxed mb-3">
          Your puppy’s first bath should be calm and enjoyable. Move slowly, speak softly, and let
          them explore. Bath time becomes a bonding ritual that strengthens trust and care.
        </p>
        <p className="text-gray-700 leading-relaxed">
          With patience and repetition, your pup will look forward to clean-coat days as happy
          moments with you. 🫧✨
        </p>
      </section>

      {/* ===== APP ADVERTISEMENT + COPYRIGHT ===== */}
      <section className="text-center max-w-4xl mx-auto mb-20">
        <h4 className="font-semibold mb-3 text-[#111827]">
          Continue with PetGo’s Puppy Care Guide
        </h4>
        <p className="text-gray-700 mb-10">
          Grooming, bathing, and bonding — PetGo guides you every splash of the way.
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