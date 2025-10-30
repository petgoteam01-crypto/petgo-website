"use client";

import Image from "next/image";
import Link from "next/link";

export default function ChickenRiceBowlPage() {
  return (
    <main className="min-h-screen bg-[#F9F6F1] text-[#111827] pb-20">
      {/* ===== HEADER ===== */}
      <section className="text-center pt-16 pb-10">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-3 text-[#4A321E]">
          Chicken & Rice Bowl
        </h1>
        <p className="text-lg md:text-xl text-[#8B6A43]">
          A simple, comforting meal for dogs — made with wholesome chicken, rice,
          and veggies for happy tummies and wagging tails.
        </p>
      </section>

      {/* ===== IMAGE ===== */}
      <div className="relative max-w-4xl mx-auto h-80 md:h-[420px] rounded-2xl overflow-hidden shadow-sm mb-10">
        <Image
  src="/chicken-ricebowl.jpg"
  alt="Homemade Chicken and Rice Bowl for Dogs"
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
            Chicken and rice is one of the easiest and most reliable meals you
            can prepare for your dog. It’s gentle on the stomach, naturally
            flavorful, and filled with clean protein and energy-giving grains.
            Even healthy dogs enjoy it as a “comfort food” on special occasions.
          </p>
          <p className="mt-4">
            At PetGo Kitchen, we love this recipe because it’s flexible and
            forgiving — you can adjust the ingredients based on your dog’s
            size, taste, and diet. Think of it as a blank canvas for wholesome
            home-cooked meals.
          </p>
          <p className="mt-4">
            As always, speak with your veterinarian before adding new foods to
            your pet’s diet, especially if your pup has allergies or digestion
            concerns.
          </p>
        </div>

        {/* Benefits */}
        <div>
          <h2 className="text-2xl font-serif font-semibold text-[#4A321E] mb-2">
         Why It’s Great
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Easy to digest and gentle for sensitive stomachs.</li>
            <li>Rich in lean protein for healthy muscles.</li>
            <li>Simple ingredients you already have in your kitchen.</li>
            <li>Perfect for a cozy dinner or recovery meal after illness.</li>
          </ul>
        </div>

        {/* Rice Type */}
        <div>
          <h2 className="text-2xl font-serif font-semibold text-[#4A321E] mb-2">
            🍚 White or Brown Rice?
          </h2>
          <p>
            Both are perfectly safe for dogs. Brown rice offers extra fiber and
            nutrients for healthy pups, while white rice is softer and easier
            to digest — ideal when your dog’s stomach needs a little rest.
          </p>
          <p className="mt-3">
            For regular meals, brown rice adds a boost of minerals and keeps
            your dog full longer. When your pup isn’t feeling well, switch to
            plain white rice for a few days until they recover.
          </p>
        </div>

        {/* Ingredients */}
        <div>
          <h2 className="text-2xl font-serif font-semibold text-[#4A321E] mb-3">
            🗒 Ingredients
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>1 teaspoon olive oil or coconut oil</li>
            <li>1 cup boneless, skinless chicken breast, cut into small cubes</li>
            <li>1/2 cup white or brown rice</li>
            <li>1 cup unsalted chicken broth or water</li>
            <li>1 tablespoon chopped fresh parsley</li>
            <li>1/4 cup shredded carrots</li>
            <li>1/4 cup green peas (optional)</li>
          </ul>
          <p className="mt-3 italic text-[#8B6A43]">
            🐾 Always make sure your broth is onion- and garlic-free.
          </p>
        </div>

        {/* Instructions */}
        <div>
          <h2 className="text-2xl font-serif font-semibold text-[#4A321E] mb-3">
             How to Cook
          </h2>
          <ol className="list-decimal list-inside space-y-3">
            <li>Warm olive oil in a skillet over medium heat.</li>
            <li>Add chicken and cook for about 6–8 minutes, stirring often, until no longer pink.</li>
            <li>Pour in chicken broth and rice. Stir and bring to a gentle boil.</li>
            <li>Reduce heat to low, cover, and simmer 15–20 minutes until the rice is soft.</li>
            <li>Stir in peas, carrots, and parsley. Cook another 2–3 minutes, then let cool.</li>
          </ol>
          <p className="mt-4">
            Serve at room temperature. For a 20-pound dog, about one cup is
            plenty for a meal or treat portion.
          </p>
        </div>

        {/* Sick Dog Variation */}
        <div>
          <h2 className="text-2xl font-serif font-semibold text-[#4A321E] mb-3">
            ⚠️ For Dogs with Sensitive Stomachs
          </h2>
          <p>
            When your dog isn’t feeling well, keep it extra mild: skip the oil
            and veggies, and simply boil chicken and white rice. It helps
            settle the stomach and provides light nutrition without irritation.
          </p>
          <p className="mt-3">
            To boil: place chicken breasts in a pot of water or broth and cook
            for 12–15 minutes. Shred the meat, mix it with cooked white rice
            (2 parts liquid to 1 part rice), cool, and serve.
          </p>
        </div>

        {/* Everyday Feeding */}
        <div>
          <h2 className="text-2xl font-serif font-semibold text-[#4A321E] mb-3">
         Is It an Everyday Meal?
          </h2>
          <p>
            Chicken and rice is best served as a temporary or occasional meal.
            Dogs need a wide range of nutrients that this recipe alone doesn’t
            fully provide. If you want to move toward a home-cooked diet, ask
            your vet about supplements or balanced meal plans.
          </p>
        </div>

        {/* Storage */}
        <div>
          <h2 className="text-2xl font-serif font-semibold text-[#4A321E] mb-3">
            🧊 Storage Tips
          </h2>
          <p>
            Refrigerate leftovers for up to 3 days, or freeze in single-meal
            portions for up to 3 months. Defrost overnight in the fridge and
            warm slightly before serving.
          </p>
        </div>

        {/* PetGo Tip */}
        <div className="bg-white border border-[#E7E2DD] rounded-2xl shadow-sm p-6 md:p-8">
          <h3 className="font-serif text-2xl font-semibold text-[#4A321E] mb-2">
            🩺 PetGo Tip
          </h3>
          <p>
            Keep your dog’s meals seasoning-free — no salt, butter, or herbs
            like onion or garlic. For extra nutrients, drizzle a little
            omega-3 oil or sprinkle chia seeds once the food cools. Your pup
            will get a shiny coat and a happy belly!
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
