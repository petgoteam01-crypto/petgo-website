"use client";

import Image from "next/image";
import Link from "next/link";

export default function Week33Page() {
  return (
    <main className="min-h-screen bg-[#F9F6F1] text-[#111827] py-16 px-6">
      {/* ===== HEADER ===== */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-2">
          Puppy Care Guide
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-[#8B6A43]">
          Week 33 – Heartworm & Parasite Prevention
        </h2>
      </div>

      {/* ===== SMARTIE IMAGE ===== */}
      <div className="flex justify-center mb-10">
        <Image
          src="/week33mainpic.jpg"
          alt="Healthy puppy protected from parasites"
          width={600}
          height={400}
          className="rounded-2xl shadow-md object-cover"
        />
      </div>

      {/* ===== INTRO ===== */}
      <section className="text-center max-w-3xl mx-auto mb-12">
        <h3 className="text-xl font-semibold mb-3 text-[#8B6A43]">
          “Protection from the inside out — prevention today ensures a healthy tomorrow.”
        </h3>
        <p className="text-gray-700 leading-relaxed">
          After completing vaccinations, it’s time to safeguard against internal and external parasites.
          Even healthy-looking puppies can carry organisms that quietly affect the heart, lungs, intestines, and skin.
          Let’s explore what they are and how to keep your dog protected year-round.
        </p>
      </section>

      {/* ===== HEARTWORM ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4"> What Is Heartworm Disease?</h4>
        <p className="text-gray-700 leading-relaxed mb-3">
          Heartworm disease is a mosquito-borne infection that targets a dog’s heart and lungs.
          Once bitten by an infected mosquito, larvae travel through the bloodstream and mature
          into long worms inside major vessels.
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-3">
          <li>Persistent dry cough</li>
          <li>Fatigue or exercise intolerance</li>
          <li>Loss of appetite or weight loss</li>
          <li>Difficulty breathing or general weakness</li>
        </ul>
        <p className="text-gray-700 text-sm">
          💡 <strong>PetGo Tip:</strong> Prevention is far safer and cheaper than treatment — once infected,
          dogs require months of rest and expensive therapy.
        </p>
      </section>

      {/* ===== INTERNAL / EXTERNAL PARASITES ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">🦠 Internal & External Parasites</h4>
        <p className="text-gray-700 leading-relaxed mb-3">
          Dogs can also be affected by roundworms, hookworms, tapeworms, fleas, ticks, and mites.
          These can cause itching, skin infections, anemia, or digestive issues — and some can infect humans too (zoonosis).
        </p>
        <p className="text-gray-700 leading-relaxed text-sm">
          🌱 <strong>Did You Know?</strong> Parasite eggs can survive in soil for months —
          prevention protects your pet, family, and community.
        </p>
      </section>

      {/* ===== WHEN TO START ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">🩺 When to Start Prevention</h4>
        <p className="text-gray-700 leading-relaxed mb-3">
          Prevention can start as early as 8 weeks old — and it’s never too late to begin.
          Heartworm risk peaks from April to November in most of Canada, but year-round coverage is best for outdoor dogs.
        </p>
        <p className="text-gray-700 leading-relaxed mb-3">
          Indoor pets aren’t exempt — parasites can enter through shoes or open windows.
        </p>
        <p className="text-gray-700 text-sm">
          💡 <strong>PetGo Tip:</strong> Use the PetGo Health Tracker to mark monthly prevention dates —
          consistency is the key to protection.
        </p>
      </section>

      {/* ===== COMMON MEDICATIONS ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm space-y-8">
        <h4 className="font-semibold text-[#8B6A43] mb-4">💊 Common Preventive Medications</h4>

        <div>
          <h5 className="font-medium text-[#8B6A43] mb-2">1️⃣ Heartgard® (Oral)</h5>
          <p className="text-gray-700 leading-relaxed mb-3">
            A chewable tablet that prevents heartworm and controls roundworms and hookworms. 
            Combine with a flea/tick treatment for full coverage.
          </p>
          <p className="text-gray-700 text-sm">
            💡 <strong>PetGo Tip:</strong> Perfect for dogs who prefer simple monthly chews.
          </p>
        </div>

        <div>
          <h5 className="font-medium text-[#8B6A43] mb-2">2️⃣ NexGard Spectra® (Oral)</h5>
          <p className="text-gray-700 leading-relaxed mb-3">
            An all-in-one monthly chew protecting against heartworm, fleas, ticks, and intestinal worms.
            Convenient and widely used across Canada.
          </p>
          <p className="text-gray-700 text-sm">
            🌟 Think of it as a complete shield in one tasty dose.
          </p>
        </div>

        <div>
          <h5 className="font-medium text-[#8B6A43] mb-2">3️⃣ Frontline® (Topical)</h5>
          <p className="text-gray-700 leading-relaxed mb-3">
            A spot-on solution applied to the skin to target fleas, ticks, and lice.
            Many owners pair Frontline with Heartgard for comprehensive coverage.
          </p>
          <p className="text-gray-700 text-sm">
            ⚠️ Avoid bathing or swimming for 48 hours after application and wash hands after use.
          </p>
        </div>
      </section>

      {/* ===== DOSING & SEASON ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4"> Choosing the Right Dose & Seasonal Plan</h4>
        <p className="text-gray-700 leading-relaxed mb-3">
          Each product comes in weight-based doses — too little won’t protect, too much may cause side effects.
          Confirm your dog’s current weight before every refill.
        </p>
        <p className="text-gray-700 leading-relaxed mb-3">
          During summer, full-spectrum prevention like NexGard Spectra is ideal; in winter, some owners use only Heartgard for heartworm focus. 
          Consistency is what matters most.
        </p>
        <p className="text-gray-700 text-sm">
          💛 <strong>PetGo Reminder:</strong> Re-check weight monthly — puppies grow fast and need updated doses.
        </p>
      </section>

      {/* ===== SAFETY NOTES ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-[#fffaf5] border border-[#e6dccf] p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">⚠️ Important Safety Notes</h4>
        <p className="text-gray-700 leading-relaxed mb-3">
          Mild side effects like temporary lethargy or appetite loss can occur. If vomiting or weakness persists, 
          stop the medication and contact your vet.
        </p>
        <p className="text-gray-700 leading-relaxed mb-3">
          Outdoor dogs are more exposed — perform tick checks after every walk, especially around ears, neck, and paws.
        </p>
        <p className="text-gray-700 text-sm">
          💡 <strong>PetGo Tip:</strong> Run your fingers through your dog’s coat after each outing to detect ticks early.
        </p>
      </section>

      {/* ===== PREVENTING BEFORE PROBLEMS ===== */}
      <section className="max-w-3xl mx-auto mb-16 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4"> Preventing Before Problems Start</h4>
        <p className="text-gray-700 leading-relaxed mb-3">
          Proactive care keeps your dog healthy and energized. Consistent heartworm and parasite prevention 
          means fewer vet visits and a longer, happier life.
        </p>
        <p className="text-gray-700 leading-relaxed">
          💛 <strong>PetGo Reminder:</strong> Prevention is not optional — it’s a lifelong promise of care and trust.
        </p>
      </section>

      {/* ===== APP BANNER + COPYRIGHT ===== */}
      <section className="text-center max-w-4xl mx-auto mb-20">
        <h4 className="font-semibold mb-3 text-[#111827]">
          Continue with PetGo’s Puppy Care Guide
        </h4>
        <p className="text-gray-700 mb-10">
          PetGo helps you track monthly parasite prevention and vet reminders so your puppy stays protected year-round.
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