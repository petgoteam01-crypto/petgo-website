"use client";

import Image from "next/image";
import Link from "next/link";

export default function Week7Page() {
  return (
    <main className="min-h-screen bg-[#F9F6F1] text-[#111827] py-16 px-6">
      {/* ===== HEADER ===== */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-2">
          Puppy Care Guide
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-[#8B6A43]">
          Week 7 – Weaning and Vaccination Schedule
        </h2>
      </div>

      {/* ===== SMARTIE IMAGE ===== */}
      <div className="flex justify-center mb-10">
        <Image
          src="/week7mainpic.jpg"
          alt="PetGo mascot Smartie"
          width={600}
          height={400}
          className="rounded-2xl shadow-md object-cover"
        />
      </div>

      {/* ===== INTRO ===== */}
      <section className="text-center max-w-3xl mx-auto mb-12">
        <h3 className="text-xl font-semibold mb-3">
          Your Puppies Are Now Seven Weeks Old!
        </h3>
        <p className="text-gray-700 leading-relaxed">
          This is a critical period for independence, continued weaning, and the start of essential health protection.
        </p>
      </section>

      {/* ===== WEANING ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold mb-4">Weaning Begins!</h4>
        <p className="text-gray-700 leading-relaxed mb-4">
          Begin the transitional feeding process now! Puppies should stay with their mother at least eight weeks for proper nursing and socialization. If you’re caring for seven-week-old puppies, be prepared for extra hands-on attention.
        </p>
        <p className="text-gray-700 leading-relaxed">
          <strong>Note on Adoption:</strong> Many regions require puppies to remain with their mothers until eight weeks old or longer for ethical and health reasons. Follow this standard to ensure the best outcomes.
        </p>
      </section>

      {/* ===== 5–6 WEEK ROUTINE ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold mb-4">5–6 Week Puppy Routine</h4>
        <p className="text-gray-700 leading-relaxed mb-4">
          Puppies cycle through sleeping, eating, eliminating, brief play, and more sleep. Balance nutrition and warmth are key.
        </p>
        <ul className="list-disc list-inside space-y-3 text-gray-700">
          <li><strong>Priorities:</strong> Stable temperature and nutritional support.</li>
          <li><strong>Hydration:</strong> Provide fresh clean water at all times.</li>
          <li><strong>Rest is Sacred:</strong> Avoid sudden touching or lifting while they sleep — rest drives development.</li>
        </ul>
      </section>

      {/* ===== FEEDING GUIDELINES ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold mb-4">Nutrition – 2-Month Feeding Guidelines</h4>
        <p className="text-gray-700 leading-relaxed mb-4">
          Their digestive systems are still developing, so always soften food before feeding.
        </p>
        <ul className="list-disc list-inside space-y-3 text-gray-700">
          <li><strong>Preparation:</strong> Soak kibble in lukewarm water or puppy milk replacer.</li>
          <li><strong>Frequency:</strong> Feed 4 – 5 times per day based on energy and appetite.</li>
          <li><strong>Monitor Intake:</strong> Ensure each puppy eats enough and add more if they’re still hungry.</li>
        </ul>
      </section>

      {/* ===== WEANING TIPS ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold mb-4">Puppy Weaning Tips!</h4>
        <ul className="list-disc list-inside space-y-3 text-gray-700">
          <li><strong>Avoid Cow’s Milk:</strong> Lactose can cause digestive upset. Use puppy formula only.</li>
          <li><strong>Soaking Temperature:</strong> Hot water destroys nutrients — use lukewarm water.</li>
          <li><strong>Adjust Frequency:</strong> Feed 4 – 5 times a day or more based on energy.</li>
          <li><strong>Bathroom Habits:</strong> 3–4 bowel movements and frequent urination per day is normal.</li>
        </ul>
      </section>

      {/* ===== VACCINATION SCHEDULE ===== */}
      <section className="max-w-4xl mx-auto mb-16 bg-white p-8 rounded-2xl shadow-sm text-center">
        <h4 className="font-semibold mb-4 text-[#8B6A43]">
          Puppy Vaccination Schedule
        </h4>
        <p className="text-gray-700 leading-relaxed mb-8">
          It’s time to start protecting your puppies. Visit your veterinarian to begin the vaccination series according to this schedule:
        </p>

        <div className="flex justify-center mb-10">
          <Image
            src="/week7-vaccination-table.png"
            alt="Puppy vaccination schedule table"
            width={900}
            height={500}
            className="rounded-2xl shadow-md object-contain"
          />
        </div>

        <Link
          href="/vaccines/guide"
          className="inline-block bg-[#8B6A43] hover:bg-[#6E5332] text-white px-8 py-3 rounded-lg font-medium transition"
        >
          View Full Vaccination Guide &gt;
        </Link>
      </section>

      {/* ===== 🩺 VETERINARY CARE BANNER ===== */}
      <section className="relative max-w-5xl mx-auto mb-20 rounded-3xl overflow-hidden shadow-lg">
        <Image
          src="/veterinary-banner.jpg"
          alt="Veterinary care banner"
          width={1600}
          height={700}
          className="object-cover w-full h-[360px]"
        />

        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center px-6">
          <h3 className="text-3xl md:text-4xl font-semibold text-white mb-4 drop-shadow">
            Need Professional Veterinary Care?
          </h3>
          <p className="text-white/90 max-w-2xl mb-6 leading-relaxed">
            Access trusted clinics, remote consultations, and wellness support — all through PetGo’s Veterinary Care service.
          </p>
          <Link
            href="/veterinary"
            className="border border-white text-white hover:bg-white hover:text-[#8B6A43] px-8 py-3 rounded-lg font-medium shadow-sm transition"
          >
            Visit Veterinary Care &gt;
          </Link>
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
