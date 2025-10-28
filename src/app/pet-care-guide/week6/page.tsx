"use client";

import Image from "next/image";
import Link from "next/link";

export default function Week6Page() {
  return (
    <main className="min-h-screen bg-[#F9F6F1] text-[#111827] py-16 px-6">
      {/* ===== HEADER ===== */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-2">
          Puppy Care Guide
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-[#8B6A43]">
          Week 6 – Essential Supplies and Preparation
        </h2>
      </div>

      {/* ===== INTRO SECTION ===== */}
      <section className="text-center max-w-3xl mx-auto mb-12">
        <h3 className="text-xl font-semibold mb-3">
          Your Puppies Are Now Six Weeks Old!
        </h3>
        <p className="text-gray-700 leading-relaxed">
          This is a milestone week for both health and training — marking the time
          to prepare for their first veterinary check-up and initial vaccinations.
        </p>
      </section>

      {/* ===== HERO IMAGE ===== */}
      <div className="flex justify-center mb-10">
        <Image
          src="/week6-hero.jpg"
          alt="Six week old puppies preparing for first vet visit"
          width={600}
          height={400}
          className="rounded-2xl shadow-md object-cover"
        />
      </div>

      {/* ===== ESSENTIAL SUPPLIES ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="text-lg font-semibold mb-4">
          Essential Puppy Supplies (Week 6)
        </h4>
        <p className="text-gray-700 leading-relaxed">
          This phase requires stocking up on crucial items for feeding, hygiene,
          and upcoming outdoor socialization.
        </p>
      </section>

      {/* ===== 1. LEASHES AND HARNESSES ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold mb-4">1. Leashes and Harnesses</h4>
        <p className="text-gray-700 leading-relaxed mb-4">
          This period marks the start of vaccinations — meaning the puppies will soon
          be ready to venture outdoors! To prepare them for walks, which are crucial for
          building socialization skills, you’ll need a leash and a comfortable collar or harness.
        </p>
        <ul className="list-disc list-inside space-y-3 text-gray-700">
          <li>
            <strong>Tip for Outdoor Manners:</strong> Always carry poop bags for walks —
            they are essential for maintaining pet etiquette in public. Getting your
            puppies used to a harness early makes outdoor training much smoother.
          </li>
        </ul>
      </section>

      {/* ===== 2. FEEDING SUPPLIES ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold mb-4">2. Feeding Supplies (Water and Food Bowls)</h4>
        <p className="text-gray-700 leading-relaxed mb-4">
          Until now, the puppies have relied on transitional food and mother’s milk,
          but they are now ready to eat soaked or dry kibble independently.
        </p>
        <ul className="list-disc list-inside space-y-3 text-gray-700">
          <li>
            <strong>The Right Tools:</strong> Prepare suitable-sized bowls for both food and water.
          </li>
          <li>
            <strong>Tip for Growth:</strong> As your puppy grows, adjust the bowl height accordingly.
            Elevated bowls can aid digestion and reduce neck strain, especially for large breeds.
          </li>
        </ul>
      </section>

      {/* ===== 3. ELIMINATION TRAYS AND PADS ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold mb-4">3. Elimination Trays and Pads</h4>
        <p className="text-gray-700 leading-relaxed mb-4">
          Potty training should begin now to prevent unwanted accidents around the home.
        </p>
        <ul className="list-disc list-inside space-y-3 text-gray-700">
          <li>
            <strong>How Puppies Learn:</strong> Dogs rely on smell and touch to identify their
            designated potty area. Keep the pads in one consistent location and guide them
            there after meals or naps.
          </li>
          <li>
            <strong>The Goal:</strong> Encourage positive reinforcement with gentle praise
            whenever they use the right spot — consistency builds habits quickly.
          </li>
        </ul>
      </section>

      {/* ===== 4. OTHER RECOMMENDED ITEMS ===== */}
      <section className="max-w-3xl mx-auto mb-16 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold mb-4">4. Other Recommended Items</h4>
        <ul className="list-disc list-inside space-y-3 text-gray-700">
          <li>
            <strong>Safe Puppy Toys:</strong> Toys provide mental stimulation, teething relief,
            and help puppies learn bite inhibition. Choose sturdy, age-appropriate options.
          </li>
          <li>
            <strong>Puppy Crates or Playpens (Optional):</strong> A crate can assist with
            training, while a playpen ensures safety and a contained environment for playtime.
          </li>
        </ul>
      </section>

      {/* ===== PETGO SHOP ===== */}
      <section className="max-w-5xl mx-auto mb-16">
        <h4 className="font-semibold mb-3 text-[#8B6A43]">
          PetGo Shop{" "}
          <span className="text-[#111827] font-medium">
            | Essentials to support your puppies during Week 6.
          </span>
        </h4>

        <div className="grid md:grid-cols-3 gap-8 mt-8">
          {/* Product 1 */}
          <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition flex flex-col p-6 h-full">
            <div className="w-full h-[240px] flex justify-center items-center mb-4">
              <Image
                src="/tug-leash.jpg"
                alt="TUG 360° Tangle-Free Retractable Dog Leash"
                width={360}
                height={240}
                className="object-contain max-h-[220px]"
              />
            </div>
            <p className="text-gray-800 font-medium mb-1">
              TUG — 360° Tangle-Free Retractable Dog Leash for Up to 50 kg Dogs (Large, White)
            </p>
            <p className="text-sm text-gray-500 mb-1">Seller: TUG</p>
            <p className="text-[#8B6A43] font-semibold mb-2">$27.99</p>
            <Link
              href="https://www.amazon.ca/TUG-Patented-Tangle-Free-Retractable-One-Handed/dp/B078SLM45M"
              className="text-[#8B6A43] hover:underline font-medium text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              Buy Now &gt;
            </Link>
          </div>

          {/* Product 2 */}
          <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition flex flex-col p-6 h-full">
            <div className="w-full h-[240px] flex justify-center items-center mb-4">
              <Image
                src="/airtag-collar.jpg"
                alt="Airtag Reflective Dog Collar by CollarDirect"
                width={360}
                height={240}
                className="object-contain max-h-[220px]"
              />
            </div>
            <p className="text-gray-800 font-medium mb-1">
              Airtag Dog Collar – Reflective, for Large, Medium, and Small Dogs (Green, S)
            </p>
            <p className="text-sm text-gray-500 mb-1">Seller: CollarDirect</p>
            <p className="text-[#8B6A43] font-semibold mb-2">$20.99</p>
            <Link
              href="https://www.amazon.ca/Airtag-Collar-CollarDirect-Reflective-Medium/dp/B0B9SM9C8S"
              className="text-[#8B6A43] hover:underline font-medium text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              Buy Now &gt;
            </Link>
          </div>

          {/* Product 3 */}
          <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition flex flex-col p-6 h-full">
            <div className="w-full h-[240px] flex justify-center items-center mb-4">
              <Image
                src="/earth-rated-bags.jpg"
                alt="Earth Rated Dog Poop Bags"
                width={360}
                height={240}
                className="object-contain max-h-[220px]"
              />
            </div>
            <p className="text-gray-800 font-medium mb-1">
              Earth Rated Dog Poop Bags – 600 Count, Leak-Proof &amp; Extra Thick (Unscented)
            </p>
            <p className="text-sm text-gray-500 mb-1">Seller: Earth Rated (Canada)</p>
            <p className="text-[#8B6A43] font-semibold mb-2">$29.99</p>
            <Link
              href="https://www.amazon.ca/Earth-Rated-Dog-Poop-Bags/dp/B0CS8GCYS1"
              className="text-[#8B6A43] hover:underline font-medium text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              Buy Now &gt;
            </Link>
          </div>

          {/* Product 4 */}
          <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition flex flex-col p-6 h-full">
            <div className="w-full h-[240px] flex justify-center items-center mb-4">
              <Image
                src="/els-bowl.jpg"
                alt="ELS Pet Adjustable Elevated Dog Bowls"
                width={360}
                height={240}
                className="object-contain max-h-[220px]"
              />
            </div>
            <p className="text-gray-800 font-medium mb-1">
              ELS Pet Adjustable Elevated Dog Bowls with Slow Feeder &amp; No-Spill Water Bowl
            </p>
            <p className="text-sm text-gray-500 mb-1">Seller: ELS Pet</p>
            <p className="text-[#8B6A43] font-semibold mb-2">$47.99</p>
            <Link
              href="https://www.amazon.ca/ELS-PET-Adjustable-Elevated-Non-Skid/dp/B0BPRXS499"
              className="text-[#8B6A43] hover:underline font-medium text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              Buy Now &gt;
            </Link>
          </div>

          {/* Product 5 */}
          <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition flex flex-col p-6 h-full">
            <div className="w-full h-[240px] flex justify-center items-center mb-4">
              <Image
                src="/vitscan-toy.jpg"
                alt="Vitscan Indestructible Dog Toy"
                width={360}
                height={240}
                className="object-contain max-h-[220px]"
              />
            </div>
            <p className="text-gray-800 font-medium mb-1">
              Vitscan Upgraded Goose Indestructible Dog Toy – Plush Crinkle Squeaky
            </p>
            <p className="text-sm text-gray-500 mb-1">Seller: Vitscan</p>
            <p className="text-[#8B6A43] font-semibold mb-2">$15.99</p>
            <Link
              href="https://www.amazon.ca/Vitscan-Upgraded-Indestructible-Aggressive-Interactive/dp/B0BG8Q8R1Y"
              className="text-[#8B6A43] hover:underline font-medium text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              Buy Now &gt;
            </Link>
          </div>

          {/* Product 6 */}
          <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition flex flex-col p-6 h-full">
            <div className="w-full h-[240px] flex justify-center items-center mb-4">
              <Image
                src="/rabbitgoo-harness.jpg"
                alt="Rabbitgoo No-Pull Dog Harness"
                width={360}
                height={240}
                className="object-contain max-h-[220px]"
              />
            </div>
            <p className="text-gray-800 font-medium mb-1">
              Rabbitgoo No-Pull Dog Harness – Adjustable Soft Padded Vest (Small, Black)
            </p>
            <p className="text-sm text-gray-500 mb-1">Seller: rabbitgoo</p>
            <p className="text-[#8B6A43] font-semibold mb-2">$31.99</p>
            <Link
              href="https://www.amazon.ca/Rabbitgoo-Harness-Adjustable-Outdoor-Material/dp/B01MA58881"
              className="text-[#8B6A43] hover:underline font-medium text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              Buy Now &gt;
            </Link>
          </div>
        </div>
      </section>

      {/* ===== CONTINUE / APP PROMOTION ===== */}
      <section className="text-center max-w-4xl mx-auto mb-20">
        <h4 className="font-semibold mb-3 text-[#111827]">
          Continue with PetGo's Puppy Care Guide
        </h4>
        <p className="text-gray-700 mb-10">
          From their first health check-up to socialization milestones, every week
          matters in your puppy’s growth journey. PetGo is here to help every step of the way.
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

          {/* ✅ Linked to /mobile-app */}
          <div className="absolute top-6 right-6 text-right">
            <Link
              href="/mobile-app"
              className="inline-block border border-[#ffffff] text-[#ffffff] hover:bg-[#ffffff] hover:text-[#8B6A43] px-6 py-3 rounded-lg font-medium shadow-sm transition"
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
