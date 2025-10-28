"use client";

import Image from "next/image";
import Link from "next/link";

export default function PumpkinOatCookiesPage() {
  return (
    <main className="min-h-screen bg-[#F9F6F1] text-[#111827] pb-20">
      {/* ===== HEADER ===== */}
      <section className="text-center pt-16 pb-10">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-3 text-[#4A321E]">
          Pumpkin Oat Cookies
        </h1>
        <p className="text-lg md:text-xl text-[#8B6A43]">
          A simple, three-ingredient recipe that’s crunchy, wholesome, and tail-waggingly good.
        </p>
      </section>

      {/* ===== IMAGE ===== */}
      <div className="relative max-w-4xl mx-auto h-80 md:h-[420px] rounded-2xl overflow-hidden shadow-sm mb-10">
        <Image
          src="/kitchen/pumpkin-oat.jpg"
          alt="Homemade Pumpkin Oat Dog Treats"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* ===== CONTENT ===== */}
      <section className="max-w-4xl mx-auto px-6 space-y-12 leading-relaxed text-gray-700 text-base md:text-lg">
        {/* Intro */}
        <div>
          <p>
            These pumpkin oat cookies are the easiest (and healthiest) way to spoil your pup — 
            made with just <strong>three natural ingredients</strong>: pumpkin purée, rolled oats, and eggs. 
            They’re crunchy on the outside, soft in the middle, and packed with fiber and gentle flavor.
          </p>
          <p className="mt-4">
            This recipe actually started as a “welcome home” treat for a rescue pup, 
            and it’s stayed a favorite for countless pet parents ever since. 
            It’s quick to make, smells amazing while baking, and keeps dogs happy without any additives or fillers.
          </p>
          <p className="mt-4 italic">
            No rising agents, no complicated steps — just real, pet-safe goodness baked from the heart.
          </p>
        </div>

        {/* Why it’s great */}
        <div>
          <h2 className="text-2xl font-serif font-semibold text-[#4A321E] mb-2">
            Why You’ll Love This Recipe
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Only 3 ingredients — simple, affordable, and safe for dogs.</li>
            <li>Full of fiber and gentle on sensitive stomachs.</li>
            <li>Can be shaped into bones, rounds, or bite-sized pieces.</li>
            <li>Smells delicious while baking (your dog will know!).</li>
          </ul>
        </div>

        {/* Ingredients */}
        <div>
          <h2 className="text-2xl font-serif font-semibold text-[#4A321E] mb-3">
            🗒 Ingredients
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li>3 cups old-fashioned rolled oats (not quick oats)</li>
            <li>1 cup pumpkin purée (unsweetened, 100% pumpkin)</li>
            <li>2 large eggs</li>
          </ul>

          <p className="mt-4">
            <strong>Optional add-ins:</strong> a tablespoon of natural peanut butter (no xylitol), 
            a sprinkle of cinnamon, or a few chopped bacon bits for extra flavor.
          </p>
        </div>

        {/* Instructions */}
        <div>
          <h2 className="text-2xl font-serif font-semibold text-[#4A321E] mb-3">
            🍪 How to Make Pumpkin Oat Cookies
          </h2>
          <ol className="list-decimal list-inside space-y-3">
            <li>
              <strong>Preheat</strong> your oven to 350°F (175°C) and line a baking sheet with parchment paper.
            </li>
            <li>
              In a food processor, pulse oats for about 2 minutes until they resemble coarse flour.
              Add pumpkin purée and eggs, then blend again until a thick dough forms.
            </li>
            <li>
              <strong>Shape your treats:</strong> roll out the dough to about ¼-inch thick and cut with a cookie cutter, 
              or simply scoop with a tablespoon and flatten with a fork for round cookies.
            </li>
            <li>
              <strong>Bake</strong> for 20–30 minutes until firm and dry to the touch. 
              They won’t rise much, but they’ll crisp up as they cool.
            </li>
            <li>
              <strong>Cool completely</strong> before serving — your pup will smell them from across the house!
            </li>
          </ol>
        </div>

        {/* Tips & Variations */}
        <div>
          <h2 className="text-2xl font-serif font-semibold text-[#4A321E] mb-3">
            🐾 Tips & Variations
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>No eggs?</strong> Replace with 1 cup of mashed banana or unsweetened applesauce.
            </li>
            <li>
              <strong>Peanut butter lover?</strong> Swap ¼ cup of pumpkin for natural peanut butter.
            </li>
            <li>
              <strong>Extra crunch:</strong> Bake at 200°F (95°C) for an additional 30 minutes to dry out completely.
            </li>
            <li>
              <strong>Shapes:</strong> Use bone cutters, small hearts, or simply hand-roll them — 
              the dough holds shape beautifully.
            </li>
          </ul>
        </div>

        {/* Storage */}
        <div>
          <h2 className="text-2xl font-serif font-semibold text-[#4A321E] mb-3">
            🧊 Storage
          </h2>
          <p>
            Store the cookies in an airtight container in the fridge for up to 
            <strong> 5 days</strong>, or freeze for up to <strong>1 month</strong>. 
            Thaw naturally or warm slightly before serving.
          </p>
        </div>

        {/* PetGo Tip */}
        <div className="bg-white border border-[#E7E2DD] rounded-2xl shadow-sm p-6 md:p-8">
          <h3 className="font-serif text-2xl font-semibold text-[#4A321E] mb-2">
            🩺 PetGo Tip
          </h3>
          <p>
            Pumpkin is a natural digestive aid — great for both upset stomachs and regular days. 
            When introducing new treats, start small and observe your dog’s response. 
            Every pup’s tummy is unique!
          </p>
        </div>

        {/* Back Button */}
        <div className="text-center pt-8">
          <Link
            href="/kitchen"
            className="border border-[#8B6A43] text-[#8B6A43] rounded-full px-5 py-2 text-sm md:text-base hover:bg-[#8B6A43] hover:text-white transition"
          >
            ← Back to PetGo Kitchen
          </Link>
        </div>
      </section>
    </main>
  );
}
