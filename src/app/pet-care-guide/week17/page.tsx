"use client";

import Image from "next/image";
import Link from "next/link";

export default function Week17Page() {
  return (
    <main className="min-h-screen bg-[#F9F6F1] text-[#111827] py-16 px-6">
      {/* ===== HEADER ===== */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-2">
          Puppy Care Guide
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-[#8B6A43]">
          Week 17 – Considering Neutering or Spaying
        </h2>
      </div>

      {/* ===== SMARTIE IMAGE ===== */}
      <div className="flex justify-center mb-10">
        <Image
          src="/week17mainpic.jpg"
          alt="Puppy at veterinary clinic"
          width={600}
          height={400}
          className="rounded-2xl shadow-md object-cover"
        />
      </div>

      {/* ===== INTRO ===== */}
      <section className="text-center max-w-3xl mx-auto mb-12">
        <h3 className="text-xl font-semibold mb-3">
          “It’s time to think about your puppy’s next important health decision.”
        </h3>
        <p className="text-gray-700 leading-relaxed">
          Around 4 months of age, many pet parents begin asking whether to have their puppy
          neutered or spayed. This week explains what the procedure means, when it’s best done, and
          how to care for your puppy before and after surgery.
        </p>
      </section>

      {/* ===== UNDERSTANDING NEUTERING ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">💬 Understanding Neutering</h4>
        <p className="text-gray-700 leading-relaxed mb-4">
          Neutering (males) and spaying (females) remove reproductive organs to prevent unwanted
          pregnancies and reduce hormone-driven behaviors. Beyond population control, these
          procedures can lower the risk of reproductive diseases and certain tumors later in life.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Opinions differ globally, so consult your vet to make an informed decision based on your
          puppy’s breed, size, and health.
        </p>
      </section>

      {/* ===== RIGHT TIME ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">🕒 When Is the Right Time?</h4>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
          <li>
            <strong>Males:</strong> between 4 – 6 months old
          </li>
          <li>
            <strong>Females:</strong> between 6 – 8 months old
          </li>
        </ul>
        <p className="text-gray-700 leading-relaxed">
          Timing varies by breed and maturity level. The goal is to schedule surgery before mating
          instincts develop but after sufficient growth. Your vet will determine the safest window.
        </p>
      </section>

      {/* ===== CHOOSING CLINIC ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">🏥 Choosing the Right Clinic</h4>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
          <li>Find a vet experienced in sterilization procedures.</li>
          <li>Ensure the clinic is clean and properly managed.</li>
          <li>Ask about post-operative monitoring and recovery spaces.</li>
          <li>Visit beforehand to meet the team and discuss questions.</li>
        </ul>
        <div className="bg-[#fffaf5] border border-[#e6dccf] rounded-xl p-5 mt-4">
          <p className="text-gray-700 leading-relaxed">
            🩺 Tip: A calm, clean clinic and attentive care can greatly improve your puppy’s recovery.
          </p>
        </div>
      </section>

      {/* ===== NEW: FIND NEARBY VET CLINICS ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-[#fffaf5] border border-[#e6dccf] p-8 rounded-2xl shadow-sm text-center">
        <h4 className="font-semibold text-[#8B6A43] mb-4">
          🏥 Find Nearby Veterinary Clinics
        </h4>
        <p className="text-gray-700 leading-relaxed mb-6">
          Need help with microchipping or licensing? Visit a trusted veterinary clinic near you.
          PetGo’s <strong>Veterinary Care</strong> section lets you easily locate local clinics,
          read reviews, and even book appointments online.
        </p>
        {/* FIXED LINK: App Router route for src/app/veterinary/page.tsx */}
        <Link
          href="/veterinary"
          className="inline-block bg-[#8B6A43] hover:bg-[#6E5332] text-white px-6 py-3 rounded-lg font-medium shadow-sm transition"
        >
          Find Clinics Near You &gt;
        </Link>
      </section>

      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
  <h4 className="font-semibold text-[#8B6A43] mb-4"> 💰 Surgery Costs (Canada)</h4>
  <p className="text-gray-700 leading-relaxed mb-4">
    The cost of spaying or neutering your dog in Canada varies based on size, age, breed, clinic region and whether additional treatments are needed.
  </p>
  <table className="w-full text-gray-700 mb-4">
    <thead className="bg-[#f9f6f1]">
      <tr>
        <th className="py-2 text-left">Service</th>
        <th className="py-2 text-left">Typical Cost (CAD)</th>
        <th className="py-2 text-left">Notes</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="py-2">Neuter (male dog)</td>
        <td className="py-2">~ $200 – $500+</td>
        <td>Lower end for small dogs, higher for large breeds or complex cases</td>
      </tr>
      <tr>
        <td className="py-2">Spay (female dog)</td>
        <td className="py-2">~ $300 – $650+</td>
        <td>More invasive surgery; cost increases with size/age</td>
      </tr>
      <tr>
        <td className="py-2">Subsidised/low-income clinics</td>
        <td className="py-2">$250 – $450 (depending on region)</td>
        <td>Rates offered via shelters or non-profits</td>
      </tr>
    </tbody>
  </table>
  <p className="text-gray-700 leading-relaxed text-sm">
    *Always ask your veterinarian for a detailed estimate that includes pre-op exams, anesthesia, pain medication and after-care.
  </p>
</section>


      {/* ===== PRE-SURGERY PRECAUTIONS ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">⚠️ Pre-Surgery Precautions</h4>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>No baths 2–3 days before surgery to reduce infection risk.</li>
          <li>Only light walks the day before the procedure.</li>
          <li>Withhold food after midnight before surgery (unless told otherwise by your vet).</li>
          <li>Prepare antiseptic, soft bandages, and a recovery cone (Elizabeth collar).</li>
          <li>Confirm fasting instructions for small breeds or young puppies.</li>
        </ul>
      </section>

      {/* ===== POST-SURGERY CARE ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">❤️ Post-Surgery Care</h4>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
          <li>Provide a warm, quiet rest space and limit movement.</li>
          <li>Avoid stairs, jumping, and rough play for at least a week.</li>
          <li>
            Monitor for trembling, redness, swelling, or loss of appetite – contact your vet if noticed.
          </li>
          <li>Use a recovery collar to prevent licking the incision site.</li>
        </ul>
        <p className="text-gray-700 leading-relaxed">
          Clean the wound gently and disinfect regularly. Males recover faster than females but still
          need supervision and restricted activity until stitches dissolve or are removed.
        </p>
      </section>

      {/* ===== AFTER NEUTERING ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">🧠 After Neutering – What to Expect</h4>
        <h5 className="font-medium text-[#8B6A43] mb-2">Behavioral Changes</h5>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
          <li>Reduced marking, mounting, and roaming in males.</li>
          <li>Females no longer go into heat or experience mood swings.</li>
        </ul>

        <h5 className="font-medium text-[#8B6A43] mb-2">Appetite & Weight</h5>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
          <li>Appetite may increase post-surgery – control portions to prevent weight gain.</li>
          <li>Maintain daily walks to support metabolism and healthy weight.</li>
        </ul>

        <h5 className="font-medium text-[#8B6A43] mb-2">Health Benefits</h5>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Prevents uterine infections and mammary tumors in females.</li>
          <li>Reduces testicular and prostate disease in males.</li>
          <li>Minimizes roaming, aggression, and stress behaviors.</li>
        </ul>
      </section>

      {/* ===== PETGO TIP ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">💡 Today’s PetGo Tip</h4>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Schedule surgery when your puppy is healthy and not under vaccine stress.</li>
          <li>Ask if pain management and antibiotics are included in the package.</li>
          <li>Track recovery in your PetGo Health Records (appetite, energy, and wound condition).</li>
          <li>
            Gentle affection and reassurance help your puppy heal faster physically and emotionally.
          </li>
        </ul>
      </section>

      {/* ===== FINAL NOTE ===== */}
      <section className="text-center max-w-3xl mx-auto mb-16">
        <h4 className="text-2xl font-semibold text-[#8B6A43] mb-3">🌿 Final Note</h4>
        <p className="text-gray-700 leading-relaxed mb-3">
          Neutering is a responsible decision that supports your puppy’s long-term health and well-being.
          With proper timing, skilled veterinary care, and loving recovery support, you’re giving your
          companion a healthier, calmer life.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Responsible choices today create a happier, healthier tomorrow — for both you and your best friend. 💛
        </p>
      </section>

      {/* ===== APP ADVERTISEMENT + COPYRIGHT ===== */}
      <section className="text-center max-w-4xl mx-auto mb-20">
        <h4 className="font-semibold mb-3 text-[#111827]">
          Continue with PetGo’s Puppy Care Guide
        </h4>
        <p className="text-gray-700 mb-10">
          PetGo is here to support every milestone — from first vaccines to post-surgery care and beyond.
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