"use client";

import Image from "next/image";
import Link from "next/link";

export default function Week51Page() {
  return (
    <main className="min-h-screen bg-[#F9F6F1] text-[#111827] py-16 px-6">
      {/* ===== HEADER ===== */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-2">
          Puppy Care Guide
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-[#8B6A43]">
          Week 51 – Preparing for the First Birthday Paw-ty!
        </h2>
      </div>

      {/* ===== SMARTIE IMAGE ===== */}
      <div className="flex justify-center mb-10">
        <Image
          src="/week51mainpic.jpg"
          alt="Dog celebrating first birthday with cake"
          width={600}
          height={400}
          className="rounded-2xl shadow-md object-cover"
        />
      </div>

      {/* ===== INTRO ===== */}
      <section className="text-center max-w-3xl mx-auto mb-12">
        <p className="text-gray-700 leading-relaxed">
          Your puppy is already <strong>51 weeks old</strong> — the big ONE is
          just around the corner! 🎂  
          Get ready to celebrate a year of love, laughter, and unforgettable
          memories with your best friend. This week, PetGo brings you everything
          you need to plan the perfect first birthday paw-ty!
        </p>
      </section>

      {/* ===== MUST HAVES ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">
          🐾 PetGo’s Pick: Paw-ty Must-Haves
        </h4>
        <p className="text-gray-700 leading-relaxed mb-4">
          To throw an unforgettable celebration for your dog, here are some
          essentials to make it both adorable and safe:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>
            <strong>A Dog-Friendly Cake:</strong> Celebrate with a
            veterinarian-approved, dog-safe cake made from wholesome
            ingredients.
          </li>
          <li>
            <strong>Festive Garland:</strong> Hang a “Happy Birthday” banner or
            paw-print garland for instant cheer.
          </li>
          <li>
            <strong>Birthday Hat or Bandana:</strong> A must for your party
            photos — the “Birthday Pup” deserves to shine!
          </li>
          <li>
            <strong>Brilliant Balloons:</strong> Bright colors add instant fun —
            just supervise to avoid popping surprises.
          </li>
          <li>
            <strong>Special Treats:</strong> Stock up on high-value goodies to
            share with your pup and furry friends.
          </li>
          <li>
            <strong>Your Camera:</strong> Capture every tail wag, candle blow,
            and paw-fect grin.
          </li>
        </ul>
        <p className="text-gray-700 mt-4 italic">
          And the most important ingredient? Your dog — looking happy,
          healthy, and absolutely adorable.
        </p>
      </section>

            {/* ===== PETGO SHOP ===== */}
      <section className="max-w-5xl mx-auto mb-20">
        <h4 className="font-semibold mb-3 text-[#8B6A43]">
          🎂 PetGo Shop{" "}
          <span className="text-[#111827] font-medium">
            | Celebrate your pup’s special day in style – Week 51!
          </span>
        </h4>

        <p className="text-gray-700 mb-8">
          💡 <strong>PetGo Celebration Tip:</strong> Your puppy’s first birthday is a milestone worth celebrating! 
          Make it fun and memorable with festive decorations, cute outfits, and delicious birthday treats.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          {/* Product 1 */}
          <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition flex flex-col p-6 h-full">
            <div className="w-full h-[200px] flex justify-center items-center mb-4">
              <Image
                src="/week51-product1.jpg"
                alt="ASTARON Pet Dog Birthday Party Supplies"
                width={300}
                height={200}
                className="object-contain max-h-[180px]"
              />
            </div>
            <div className="flex-grow text-left">
              <h5 className="font-semibold text-[#111827] mb-1">
                ASTARON Pet Dog Birthday Party Supplies (Blue Set)
              </h5>
              <p className="text-sm text-gray-600 mb-2">Seller: ASTARON</p>
              <p className="text-[#8B6A43] font-semibold mb-3">$18.99</p>
            </div>
            <Link
              href="https://www.amazon.ca/ASTARON-Birthday-Supplies-Balloons-Decorations/dp/B09SZ6XM14/ref=sr_1_8"
              target="_blank"
              className="inline-block mt-auto text-center bg-[#8B6A43] text-white py-2 px-4 rounded-full hover:bg-[#735739] transition"
            >
              View on Amazon →
            </Link>
          </div>

          {/* Product 2 */}
          <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition flex flex-col p-6 h-full">
            <div className="w-full h-[200px] flex justify-center items-center mb-4">
              <Image
                src="/week51-product2.jpg"
                alt="homdat Pet Birthday Party Supplies"
                width={300}
                height={200}
                className="object-contain max-h-[180px]"
              />
            </div>
            <div className="flex-grow text-left">
              <h5 className="font-semibold text-[#111827] mb-1">
                homdat Pet Birthday Decor Set with Scarf, Hat, Balloons & Banner
              </h5>
              <p className="text-sm text-gray-600 mb-2">Seller: homdat</p>
              <p className="text-[#8B6A43] font-semibold mb-3">$22.99</p>
            </div>
            <Link
              href="https://www.amazon.ca/Birthday-Supplies-Banner-Balloons-Decorations/dp/B0D7LWL95P/ref=sr_1_17"
              target="_blank"
              className="inline-block mt-auto text-center bg-[#8B6A43] text-white py-2 px-4 rounded-full hover:bg-[#735739] transition"
            >
              View on Amazon →
            </Link>
          </div>

          {/* Product 3 */}
          <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition flex flex-col p-6 h-full">
            <div className="w-full h-[200px] flex justify-center items-center mb-4">
              <Image
                src="/week51-product3.jpg"
                alt="Thoughtfully Pets Dog Birthday Cookie Gift Set"
                width={300}
                height={200}
                className="object-contain max-h-[180px]"
              />
            </div>
            <div className="flex-grow text-left">
              <h5 className="font-semibold text-[#111827] mb-1">
                Thoughtfully Pets Dog Birthday Cookie Gift Set (8 Treats)
              </h5>
              <p className="text-sm text-gray-600 mb-2">Seller: Thoughtfully</p>
              <p className="text-[#8B6A43] font-semibold mb-3">$24.99</p>
            </div>
            <Link
              href="https://www.amazon.ca/Thoughtfully-Dog-Cookies-Girl/dp/B0898YGDFM/ref=sr_1_6"
              target="_blank"
              className="inline-block mt-auto text-center bg-[#8B6A43] text-white py-2 px-4 rounded-full hover:bg-[#735739] transition"
            >
              View on Amazon →
            </Link>
          </div>

          {/* Product 4 */}
          <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition flex flex-col p-6 h-full">
            <div className="w-full h-[200px] flex justify-center items-center mb-4">
              <Image
                src="/week51-product4.jpg"
                alt="Cookie PAL Organic Birthday Cake Vanilla Dog Treats"
                width={300}
                height={200}
                className="object-contain max-h-[180px]"
              />
            </div>
            <div className="flex-grow text-left">
              <h5 className="font-semibold text-[#111827] mb-1">
                Cookie PAL Organic Soft Baked Birthday Cake Treats (3-Pack)
              </h5>
              <p className="text-sm text-gray-600 mb-2">Seller: CookiePal</p>
              <p className="text-[#8B6A43] font-semibold mb-3">$29.99</p>
            </div>
            <Link
              href="https://www.amazon.ca/Organic-Birthday-Vanilla-Biscuits-Training/dp/B0F3H57K4L/ref=sr_1_8"
              target="_blank"
              className="inline-block mt-auto text-center bg-[#8B6A43] text-white py-2 px-4 rounded-full hover:bg-[#735739] transition"
            >
              View on Amazon →
            </Link>
          </div>
        </div>
      </section>


      {/* ===== GOLDEN RULES ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-[#fffaf5] border border-[#e6dccf] p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">
          ✨ The Golden Rules for Paw-ty Planning
        </h4>
        <ol className="list-decimal list-inside text-gray-700 space-y-4 leading-relaxed">
          <li>
            <strong>Go All Out with Décor:</strong> Don’t hold back — this is a
            celebration of growth, joy, and love! Make the space festive and
            full of personality.
          </li>
          <li>
            <strong>Pile on the Pup-Safe Goodies:</strong> Treat tables are
            welcome, but make sure every food item is made specifically for
            dogs. Safety first!
          </li>
          <li>
            <strong>Embrace the “Too Much”:</strong> Think you’re going
            overboard? Perfect. It’s your dog’s first birthday — a once-in-a-
            lifetime milestone worth celebrating in style.
          </li>
        </ol>
      </section>

      {/* ===== FINAL NOTE ===== */}
      <section className="max-w-3xl mx-auto mb-16 bg-white p-8 rounded-2xl shadow-sm text-center">
        <h4 className="font-semibold text-[#8B6A43] mb-4">🎉 A Final Note</h4>
        <p className="text-gray-700 leading-relaxed mb-4">
          Next week, we’ll celebrate your dog’s <strong>first birthday</strong>
          — and the conclusion of the PetGo Puppy Care Guide!  
          Don’t forget to share your celebration moments on the PetGo Community.
        </p>
        <p className="text-gray-700 leading-relaxed">
          To every amazing pet parent who’s followed this journey: you’ve done
          something truly special. Thank you for your dedication, patience, and
          love — you’ve given your puppy the happiest first year possible. 💛
        </p>
      </section>

      {/* ===== APP BANNER ===== */}
      <section className="text-center max-w-4xl mx-auto mb-20">
        <h4 className="font-semibold mb-3 text-[#111827]">
          Continue with PetGo’s Puppy Care Guide
        </h4>
        <p className="text-gray-700 mb-10">
          Discover more tips, share birthday photos, and connect with the PetGo
          family inside the app. Celebrate milestones and memories that last a
          lifetime.
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
