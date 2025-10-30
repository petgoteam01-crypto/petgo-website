"use client";

import Image from "next/image";
import Link from "next/link";

export default function PeanutButterBiscuitsPage() {
  return (
    <main className="min-h-screen bg-[#F9F6F1] text-[#111827] pb-20">
      {/* ===== HEADER ===== */}
      <section className="text-center pt-16 pb-10">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-3 text-[#4A321E]">
          Peanut Butter Biscuits
        </h1>
        <p className="text-lg md:text-xl text-[#8B6A43]">
          Crunchy, peanut-buttery treats baked with love — the perfect reward for every good dog.
        </p>
      </section>

{/* ===== IMAGE ===== */}
<div className="relative max-w-4xl mx-auto h-80 md:h-[420px] rounded-2xl overflow-hidden shadow-sm mb-10">
  <Image
    src="/dog-peanut-biscuits.jpg"
    alt="Homemade Peanut Butter Dog Biscuits"
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
            Nothing says “good dog” like a batch of warm, peanut butter biscuits fresh from the oven. 
            These homemade treats are wholesome, crunchy, and delightfully aromatic — 
            made with simple pantry ingredients and no preservatives. 
          </p>
          <p className="mt-4">
            The dough is soft and easy to work with, and the finished biscuits are firm enough to store 
            yet tender enough for smaller dogs to enjoy. 
            A drizzle of natural peanut butter frosting makes them extra irresistible!
          </p>
          <p className="mt-4">
            Before you begin, always check your peanut butter label to ensure it’s free of xylitol, 
            which is toxic to dogs. For first-timers, start with a small piece to make sure your furry friend 
            tolerates all the ingredients well.
          </p>
        </div>

        {/* Why it’s great */}
        <div>
          <h2 className="text-2xl font-serif font-semibold text-[#4A321E] mb-2">
             Why You’ll Love These Treats
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Made from just a few clean, natural ingredients.</li>
            <li>Simple to roll, cut, and bake — fun for kids to help with.</li>
            <li>Perfect for training rewards or a weekly snack.</li>
            <li>Customizable for sensitive tummies (see tips below).</li>
          </ul>
        </div>

        {/* Ingredients */}
        <div>
          <h2 className="text-2xl font-serif font-semibold text-[#4A321E] mb-3">
            🗒 Ingredients
          </h2>
          <h3 className="font-semibold text-[#4A321E]">For the Biscuits</h3>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>2½ cups whole wheat flour (or rice/coconut flour for wheat-free)</li>
            <li>1 large egg</li>
            <li>1 cup unsalted natural peanut butter</li>
            <li>1 cup water</li>
            <li>2 tablespoons honey (optional, for flavor)</li>
          </ul>

          <h3 className="font-semibold text-[#4A321E] mt-6">For the Frosting (Optional)</h3>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>2 tablespoons peanut butter</li>
            <li>1 tablespoon honey</li>
            <li>⅓ cup cornstarch or arrowroot powder</li>
            <li>3–4 tablespoons hot water (adjust for consistency)</li>
          </ul>
        </div>

        {/* Instructions */}
        <div>
          <h2 className="text-2xl font-serif font-semibold text-[#4A321E] mb-3">
            🍪 How to Make
          </h2>
          <ol className="list-decimal list-inside space-y-3">
            <li>
              Preheat your oven to <strong>350°F (175°C)</strong> and line a baking sheet with parchment paper.
            </li>
            <li>
              In a large bowl, whisk together the flour and egg. Add peanut butter, water, and honey. 
              Mix until a firm dough forms. You may need to knead it by hand or use a mixer with a paddle attachment.
            </li>
            <li>
              Lightly flour a clean surface. Roll the dough out to about ½-inch thick and cut into shapes with a cookie cutter. 
              The biscuits won’t expand much, so make them the size you prefer.
            </li>
            <li>
              Bake for <strong>18–20 minutes</strong> (a little less for small treats) until golden brown. 
              Cool completely before adding frosting.
            </li>
            <li>
              To make the frosting, gently warm peanut butter and honey in the microwave (10–15 seconds at a time). 
              Stir in cornstarch, then slowly add hot water until smooth. 
              Use a spoon or piping bag to drizzle patterns over cooled biscuits.
            </li>
          </ol>
        </div>

        {/* Baking Tips */}
        <div>
          <h2 className="text-2xl font-serif font-semibold text-[#4A321E] mb-3">
         PetGo Baking Tips
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Allergy-Friendly Options:</strong> 
              Swap whole wheat flour for oat or coconut flour if your dog is sensitive to grains.
            </li>
            <li>
              <strong>Peanut Butter Safety:</strong> 
              Use natural, xylitol-free peanut butter only. You can substitute with pumpkin purée or mashed banana.
            </li>
            <li>
              <strong>Crunch Level:</strong> 
              For a crisper texture, bake at <strong>200°F</strong> for 45–60 minutes to dry them out completely.
            </li>
            <li>
              <strong>Honey Caution:</strong> 
              Avoid honey for puppies under one year or dogs with immune issues.
            </li>
          </ul>
        </div>

        {/* Storage */}
        <div>
          <h2 className="text-2xl font-serif font-semibold text-[#4A321E] mb-3">
            🧊 Storage
          </h2>
          <p>
            Store your homemade biscuits in an airtight container in the refrigerator for up to <strong>2 months</strong>, 
            or freeze for up to <strong>8 months</strong>. 
            Let them thaw at room temperature or warm slightly before serving.
          </p>
        </div>

        {/* PetGo Tip */}
        <div className="bg-white border border-[#E7E2DD] rounded-2xl shadow-sm p-6 md:p-8">
          <h3 className="font-serif text-2xl font-semibold text-[#4A321E] mb-2">
            🩺 PetGo Tip
          </h3>
          <p>
            To make treats extra nutritious, sprinkle a pinch of ground flaxseed or chia seeds before baking. 
            These add omega-3s for a shiny coat and healthy digestion. 
            Remember — treats should make up no more than 10% of your dog’s daily diet.
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
