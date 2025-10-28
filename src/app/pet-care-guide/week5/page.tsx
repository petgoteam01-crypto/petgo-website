"use client";

import Image from "next/image";
import Link from "next/link";

export default function Week5Page() {
  return (
    <main className="min-h-screen bg-[#F9F6F1] text-[#111827] py-16 px-6">
      {/* ===== HEADER ===== */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-2">
          Puppy Care Guide
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-[#8B6A43]">
          Week 5 – Pre-Socialization and Independence
        </h2>
      </div>

      {/* ===== INTRO SECTION ===== */}
      <section className="text-center max-w-3xl mx-auto mb-12">
        <h3 className="text-xl font-semibold mb-3">
          Congratulations, the Puppies Are Now Five Weeks Old!
        </h3>
        <p className="text-gray-700 leading-relaxed">
          This is a pivotal time for preparing them for the crucial socialization<br />
          and training period just ahead.
        </p>
      </section>

      {/* ===== FEATURES OF WEEK 5 ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="text-lg font-semibold mb-4">Features of Week 5</h4>
        <p className="text-gray-700 leading-relaxed mb-6">
          While there aren't many entirely new physical developments this week,
          the major focus is on setting the stage for independence and broad
          exposure. Although there may not be significant new "features," their
          cuteness certainly persists, so remember to give them lots and lots of
          love and affection!
        </p>

        <div className="flex justify-center">
          <Image
            src="/week5-features.jpg"
            alt="Week 5 puppies features"
            width={600}
            height={400}
            className="rounded-2xl shadow-md object-cover"
          />
        </div>
      </section>

      {/* ===== KEY CARE TITLE ===== */}
      <section className="text-center max-w-3xl mx-auto mb-8">
        <h3 className="text-2xl font-semibold text-[#8B6A43]">
          Key Care and Socialization Tips for Week 5
        </h3>
      </section>

      {/* ===== 1. FOSTERING INDEPENDENCE ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold mb-4">
          1. Fostering Independence (Gradual Separation)
        </h4>
        <p className="text-gray-700 leading-relaxed mb-4">
          This is the week to gradually increase the time the mother dog spends
          separated from her puppies.
        </p>
        <ul className="list-disc list-inside space-y-3 text-gray-700">
          <li>
            <strong>Recommendation:</strong> We recommend separating the puppies
            and the mother for short, controlled periods to ensure the mother
            has time alone to rest and recover. This separation not only reduces
            the stress on the mother but also teaches the puppies early
            independence, reducing the risk of developing separation anxiety
            later. Start with just a few minutes and slowly increase the
            duration.
          </li>
        </ul>
      </section>

      {/* ===== 2. EARLY EXPOSURE ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold mb-4">2. Early Exposure and Contact</h4>
        <p className="text-gray-700 leading-relaxed mb-4">
          It is beneficial to give the puppies diverse exposure to objects,
          sounds, and surfaces during this period.
        </p>
        <ul className="list-disc list-inside space-y-3 text-gray-700">
          <li>
            <strong>Why it Matters:</strong> Puppies are still highly
            impressionable. If they are not exposed to various objects, surfaces,
            and gentle noises now, they may become fearful of unfamiliar things
            when they encounter them later in life. Introduce them to different
            flooring textures, gentle household sounds, and a variety of safe,
            chewable toys.
          </li>
        </ul>
      </section>

      {/* ===== 3. PREPARATION FOR MEDICAL MILESTONES ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold mb-4">
          3. Preparation for Medical Milestones (Vaccinations)
        </h4>
        <p className="text-gray-700 leading-relaxed mb-4">
          This week marks the beginning of their journey toward medical
          protection.
        </p>
        <ul className="list-disc list-inside space-y-3 text-gray-700 mb-6">
          <li>
            <strong>Vaccination Schedule:</strong> Puppies are now old enough to
            begin their official vaccination protocol. It is time to start
            planning their first vet visit.
          </li>
          <li>
            <strong>The First Vet Trip:</strong> We recommend scheduling a full
            health check-up and the first round of vaccinations to be given
            sometime between Week 6 and Week 8. Early deworming (Week 3) and
            first shots are vital for preventing disease.
          </li>
        </ul>

        <div className="flex justify-center">
          <Image
            src="/week5-vaccination.jpg"
            alt="Puppy vaccination preparation"
            width={600}
            height={400}
            className="rounded-2xl shadow-md object-cover"
          />
        </div>
      </section>

      {/* ===== 4. ENVIRONMENT AND TRAINING ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold mb-4">4. Environment and Training</h4>
        <ul className="list-disc list-inside space-y-3 text-gray-700">
          <li>
            <strong>Cleanliness is Key:</strong> Since the puppies have not yet
            received their vaccinations, it is best to maintain a clean
            environment and provide only clean, fresh water to prevent illness.
            Their immune systems are still immature.
          </li>
          <li>
            <strong>When to Start Training:</strong> The puppies are still too
            young for formal obedience training. We recommend starting
            structured training lessons around Week 7 to Week 8, after they've
            had more time to develop cognitively and are over the initial stress
            of their first vet visit.
          </li>
        </ul>
      </section>

      {/* ===== PETGO SHOP ===== */}
      <section className="max-w-4xl mx-auto mb-16">
        <h4 className="font-semibold mb-3 text-[#8B6A43]">
          PetGo Shop{" "}
          <span className="text-[#111827] font-medium">
            | Essentials to support your puppies during Week 5.
          </span>
        </h4>

        <div className="grid md:grid-cols-2 gap-8 mt-8">
          {/* Product 1 */}
          <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition flex flex-col p-6 h-full">
            <div className="w-full h-[260px] flex justify-center items-center mb-4">
              <Image
                src="/dog-collar.jpg"
                alt="MoTaity Dog Collar and Leash Set"
                width={380}
                height={260}
                className="object-contain max-h-[240px]"
              />
            </div>
            <div className="flex flex-col justify-between flex-grow text-left">
              <p className="text-gray-800 font-medium mb-1 min-h-[60px]">
                MoTaity — Dog Collar and Leash Set. Soft and Easy to Clean Vegan
                Leather with Rose Gold Metal Buckle for Small Medium Large Dogs
                (Pink, XS 8&quot;-12&quot;)
              </p>
              <p className="text-[#8B6A43] font-semibold mb-2">$30.99</p>
              <Link
                href="https://www.amazon.ca/MoTaity-Collar-Adjustable-Stylish-Buckle/dp/B0CJ2KYP58/ref=sr_1_29"
                className="text-[#8B6A43] hover:underline font-medium text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                Buy Now &gt;
              </Link>
            </div>
          </div>

          {/* Product 2 */}
          <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition flex flex-col p-6 h-full">
            <div className="w-full h-[260px] flex justify-center items-center mb-4">
              <Image
                src="/cat-carrier1.jpg"
                alt="BurgeonNest Cat Carrier"
                width={380}
                height={260}
                className="object-contain max-h-[240px]"
              />
            </div>
            <div className="flex flex-col justify-between flex-grow text-left">
              <p className="text-gray-800 font-medium mb-1 min-h-[60px]">
                BurgeonNest — Cat Carrier for Medium Cats Under 25 lbs with Side
                Bag, Top Load, Soft-Sided and Escape Proof with 4 Ventilated
                Windows
              </p>
              <p className="text-[#8B6A43] font-semibold mb-2">$39.99</p>
              <Link
                href="https://www.amazon.ca/BurgeonNest-Carrier-Soft-Sided-Storage-Ventilated/dp/B093H4ZDBV"
                className="text-[#8B6A43] hover:underline font-medium text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                Buy Now &gt;
              </Link>
            </div>
          </div>

          {/* Product 3 */}
          <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition flex flex-col p-6 h-full">
            <div className="w-full h-[260px] flex justify-center items-center mb-4">
              <Image
                src="/cat-carrier2.jpg"
                alt="Pecute Cat Carrier Purse"
                width={380}
                height={260}
                className="object-contain max-h-[240px]"
              />
            </div>
            <div className="flex flex-col justify-between flex-grow text-left">
              <p className="text-gray-800 font-medium mb-1 min-h-[60px]">
                Pecute Store — Cat Carrier Purse with Pockets, Soft-Sided Dog
                Carrier, Suitable for Outing and Travel (Khaki)
              </p>
              <p className="text-[#8B6A43] font-semibold mb-2">$32.29</p>
              <Link
                href="https://www.amazon.ca/Pecute-Carrier-Pockets-Soft-Sided-Lightweight/dp/B0DJQDP1TQ"
                className="text-[#8B6A43] hover:underline font-medium text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                Buy Now &gt;
              </Link>
            </div>
          </div>

          {/* Product 4 */}
          <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition flex flex-col p-6 h-full">
            <div className="w-full h-[260px] flex justify-center items-center mb-4">
              <Image
                src="/hard-carrier.jpg"
                alt="Amazon Basics Two-Door Hard-Sided Pet Travel Carrier"
                width={380}
                height={260}
                className="object-contain max-h-[240px]"
              />
            </div>
            <div className="flex flex-col justify-between flex-grow text-left">
              <p className="text-gray-800 font-medium mb-1 min-h-[60px]">
                Amazon Basics — Two-Door Top-Load Hard-Sided Pet Travel Carrier
                (58.4 cm)
              </p>
              <p className="text-[#8B6A43] font-semibold mb-2">$63.11</p>
              <Link
                href="https://www.amazon.ca/AmazonBasics-23-Inch-Two-Door-Top-Load-Kennel/dp/B00OP6SVJW"
                className="text-[#8B6A43] hover:underline font-medium text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                Buy Now &gt;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CONTINUE / APP PROMO ===== */}
      <section className="text-center max-w-4xl mx-auto mb-20">
        <h4 className="font-semibold mb-3 text-[#111827]">
          Continue with PetGo's Puppy Care Guide
        </h4>
        <p className="text-gray-700 mb-10">
          This is a precious and sensitive time that calls for warmth, patience,
          and attentive care. From pregnancy through caring for newborn puppies,
          PetGo will be by your side every step of the way.
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

          {/* Updated link to /mobile-app */}
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
