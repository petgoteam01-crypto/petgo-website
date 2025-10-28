"use client";

import Image from "next/image";
import Link from "next/link";

export default function Week4Page() {
  return (
    <main className="min-h-screen bg-[#F9F6F1] text-[#111827] py-16 px-6">
      {/* ===== HEADER ===== */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-2">
          Puppy Care Guide
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-[#8B6A43]">
          Week 4 – The Great Escape and Weaning Begins
        </h2>
      </div>

      {/* ===== HERO IMAGE ===== */}
      <div className="flex justify-center mb-10">
        <Image
          src="/week4-pic.jpg"
          alt="Four week old puppies"
          width={600}
          height={400}
          className="rounded-2xl shadow-md object-cover"
        />
      </div>

      {/* ===== INTRO SECTION ===== */}
      <section className="text-center max-w-3xl mx-auto mb-12">
        <h3 className="text-xl font-semibold mb-3">
          Your Puppies Are Now Four Weeks Old!
        </h3>
        <p className="text-gray-700 leading-relaxed">
          This is a pivotal time as they explore their environment and begin the transition<br />
          from mother's milk to solid food.
        </p>
      </section>

      {/* ===== FEATURES OF WEEK 4 ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="text-lg font-semibold mb-4">
          Features of Week 4
        </h4>
        <ol className="list-decimal list-inside space-y-4 text-gray-700">
          <li>
            <strong>Teething and Weaning</strong> — Around three weeks of age, the puppies' milk teeth (deciduous teeth) start to erupt. By about one month (four weeks), the mother dog's milk production naturally begins to slow down, and she will start to dislike nursing because the growing, sharp teeth can be painful to her.
            <ul className="list-disc list-inside ml-6 mt-2 space-y-1 text-gray-600">
              <li><strong>The Transition:</strong> This stage signals that it's time to gradually introduce transitional food (weaning food) alongside continued nursing.</li>
            </ul>
          </li>
          <li>
            <strong>Increased Mobility and Escape Artists</strong> — With enhanced vision, hearing, and stronger legs, the puppies will become much more mobile and adventurous. Ensure their confined area is secure, as they will attempt to "escape" their whelping box to explore the surrounding world.
          </li>
          <li>
            <strong>Interest in Adult Food</strong> — As they approach four weeks, the puppies will show interest in the mother dog's kibble and may attempt to eat it.
          </li>
        </ol>
      </section>

      {/* ===== NUTRITION INTRO ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-[#FFF9E6] border border-[#F5D97A] p-6 rounded-xl">
        <h4 className="font-semibold text-[#8B6A43] mb-2">
          Nutrition and Weaning Management (1 Month Old)
        </h4>
        <p className="text-gray-700 leading-relaxed">
          This is the time to start feeding them solid food! Remember, their digestive abilities are still developing, so the transition must be gentle.
        </p>
      </section>

      {/* ===== INTRODUCING TRANSITIONAL FOOD ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold mb-4">Introducing Transitional Food (Weaning Food)</h4>
        <ul className="list-disc list-inside space-y-3 text-gray-700">
          <li>
            <strong>Necessity of Weaning Food</strong> — Due to their still-developing digestive system, puppies must be given specially prepared weaning food.
          </li>
          <li>
            <strong>Feeding Schedule</strong> — You should feed the transitional food every 4 to 5 hours.
          </li>
          <li>
            <strong>Adjusting Amounts</strong> — Gradually increase the amount of weaning food based on the puppies' growth rate and appetite.
          </li>
        </ul>
      </section>

      {/* ===== TYPES OF WEANING FOOD ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold mb-4">Types of Weaning Food</h4>
        <ol className="list-decimal list-inside space-y-3 text-gray-700">
          <li>
            <strong>Commercially Available Puppy Weaning Formula</strong> — These are often powdered formulas designed to be mixed with water to a porridge-like consistency.
          </li>
          <li>
            <strong>Soaked Puppy Kibble</strong> — This involves soaking high-quality puppy kibble in puppy milk replacer or warm water until it is very soft.
          </li>
        </ol>
        <div className="mt-4 p-4 bg-[#FFF9E6] border border-[#F5D97A] rounded-xl">
          <p className="text-gray-700">
            <strong className="text-[#8B6A43]">TIP for Preparation:</strong> The soaked kibble should be mashed or blended before serving to ensure it is easily digestible. Always use lukewarm (not hot!) milk replacer or water for soaking.
          </p>
        </div>
      </section>

{/* ===== PETGO SHOP ===== */}
<section className="max-w-4xl mx-auto mb-16">
  <h4 className="font-semibold mb-3 text-[#8B6A43]">
    PetGo Shop{" "}
    <span className="text-[#111827] font-medium">
      | Essentials to support your puppies during weaning.
    </span>
  </h4>

  <div className="grid md:grid-cols-2 gap-8 mt-8">
    {/* Product 1 */}
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition flex flex-col p-6 h-full">
      <div className="w-full h-[260px] flex justify-center items-center mb-4">
        <Image
          src="/puppy-weaning-food.jpg"
          alt="2nd Step Puppy Weaning Food 14 Ounce"
          width={380}
          height={260}
          className="object-contain max-h-[240px]"
        />
      </div>
      <div className="flex flex-col justify-between flex-grow text-left">
        <p className="text-gray-800 font-medium mb-1 min-h-[48px]">
          2nd Step Puppy Weaning Food 14 Ounce
        </p>
        <p className="text-sm text-gray-500 mb-1">Generic</p>
        <p className="text-[#8B6A43] font-semibold mb-2">$29.99</p>
        <a
          href="https://www.amazon.ca/Step-Puppy-Weaning-Food-Ounce/dp/B0DNY2K83P/ref=asc_df_B0DNY2K83P?mcid=66a45c99c43a3930bb7f37699725e4f1&tag=googleshopc0c-20&linkCode=df0&hvadid=706745946916&hvpos=&hvnetw=g&hvrand=6242562579859875641&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9197976&hvtargid=pla-2398019539818&psc=1&hvocijid=6242562579859875641-B0DNY2K83P-&hvexpln=0&gad_source=1"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#8B6A43] hover:underline font-medium text-sm"
        >
          Buy Now &gt;
        </a>
      </div>
    </div>

    {/* Product 2 */}
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition flex flex-col p-6 h-full">
      <div className="w-full h-[260px] flex justify-center items-center mb-4">
        <Image
          src="/legend-sandy-puppy-toys.jpg"
          alt="Dog Squeaky Toys for Small Dogs, 12 Pack Puppy Toys"
          width={380}
          height={260}
          className="object-contain max-h-[240px]"
        />
      </div>
      <div className="flex flex-col justify-between flex-grow text-left">
        <p className="text-gray-800 font-medium mb-1 min-h-[48px]">
          Dog Squeaky Toys for Small Dogs, 12 Pack Puppy Toys for Teething — Plush & Rope Bundle
        </p>
        <p className="text-sm text-gray-500 mb-1">LEGEND SANDY</p>
        <p className="text-[#8B6A43] font-semibold mb-2">$29.99</p>
        <a
          href="https://www.amazon.ca/Squeaky-Teething-Stuffed-Natural-Puppies/dp/B092J2PC5L/ref=sr_1_2_sspa?crid=1HR9DTGJCXQQJ&dib=eyJ2IjoiMSJ9.pVvoTpwzOql8yrkK2kE1QoRDFFby4JtaB5MLthzfXOvbhp4dV5TjKOH7Mb_RGiFYpqnFLXjO012-xPt8uMuVzmhvyuQ-PlbjBCLpU6_N8ggHRFbpFNvF3OXT8FqJ9-ALEfx1Byw95NKSY_lhBPdixnDHB32nCZ4iREvEFJgQmYRoxnIgxc0ClX5EWZ2_HXN-PkEF_Wx1E1lT51Sv3E-U7TzLhqWpZaCxx-EsbmQueC2sKDZJjzJY9nKl5qLC18winrviCloAe0mZoykn6vUxqZ9lLNz_Ac01pVY3nPGCcFY.fhZCS-ABxegCmHTIY_NcjeFfn2KjA5F8amzTKAIrT-E&dib_tag=se&keywords=small%2Bpuppy%2Btoys&qid=1760681107&s=pet-supplies&sprefix=small%2Bpuppy%2Btoys%2Cpets%2C82&sr=1-2-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#8B6A43] hover:underline font-medium text-sm"
        >
          Buy Now &gt;
        </a>
      </div>
    </div>
  </div>
</section>


      

      {/* ===== MANAGING MEALTIMES ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold mb-4">Managing Mealtimes</h4>
        <ul className="list-disc list-inside space-y-3 text-gray-700">
          <li>
            <strong>Separate Mother's Meals</strong> — When the mother dog eats her meal, she should be separated from the puppies. This prevents the puppies from trying to eat her food (which is too hard and large for them) and ensures the mother can eat without distraction or stress.
          </li>
        </ul>
      </section>

    

{/* ===== CONTINUE ===== */}
<section className="text-center max-w-4xl mx-auto mb-20">
  <h4 className="font-semibold mb-3 text-[#111827]">
    Continue with PetGo's Puppy Care Guide
  </h4>
  <p className="text-gray-700 mb-10">
    This is a precious and sensitive time that calls for warmth, patience,
    and attentive care. From pregnancy through caring for newborn puppies,
    PetGo will be by your side every step of the way.
  </p>

  {/* Banner with transparent top-right button */}
  <div className="relative rounded-3xl overflow-hidden shadow-lg">
    <Image
      src="/petgoapp-banner.jpg"
      alt="PetGo mobile app banner"
      width={1200}
      height={600}
      className="object-cover w-full h-auto"
      priority
    />

    {/* Transparent outline button */}
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