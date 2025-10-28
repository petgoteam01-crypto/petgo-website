"use client";

import Image from "next/image";
import Link from "next/link";

export default function Week42Page() {
  return (
    <main className="min-h-screen bg-[#F9F6F1] text-[#111827] py-16 px-6">
      {/* ===== HEADER ===== */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-2">
          Puppy Care Guide
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-[#8B6A43]">
          Week 42 – Navigating Pet Services: Daycare, Boarding & Pet Rides
        </h2>
      </div>

      {/* ===== SMARTIE IMAGE ===== */}
      <div className="flex justify-center mb-10">
        <Image
          src="/week42mainpic.jpg"
          alt="Happy puppy at daycare"
          width={600}
          height={400}
          className="rounded-2xl shadow-md object-cover"
        />
      </div>

      {/* ===== INTRO ===== */}
      <section className="text-center max-w-3xl mx-auto mb-12">
        <p className="text-gray-700 leading-relaxed">
          Your puppy is now 42 weeks old — fully vaccinated, confident, and
          ready to explore the wider world. It’s the perfect time to learn about
          reliable pet services such as daycare, boarding, and ride options
          designed for your furry companion.
        </p>
      </section>

      {/* ===== DAYCARE & BOARDING ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">
          🏠 1. Doggy Daycare & Boarding Facilities
        </h4>
        <p className="text-gray-700 leading-relaxed mb-3">
          When you’re away or unable to bring your dog along, daycare and
          boarding centers provide professional care, play, and rest. The key
          is choosing a facility that fits your dog’s personality and health
          needs.
        </p>

        <h5 className="font-semibold text-[#8B6A43] mt-4 mb-2">
          ✅ Daycare & Boarding Checklist
        </h5>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>
            <strong>Hygiene & Environment:</strong> Inspect play areas, sleeping
            spaces, and cleanliness. A calm atmosphere = lower stress.
          </li>
          <li>
            <strong>Staff Expertise:</strong> Ask about training, first-aid
            knowledge, and canine-behaviour experience.
          </li>
          <li>
            <strong>Facility & Activities:</strong> Ensure safe separation of
            small and large dogs, adequate rest zones, and supervised play.
          </li>
          <li>
            <strong>Location & Convenience:</strong> Pick a nearby facility if
            using daycare frequently.
          </li>
          <li>
            <strong>Trial Visit:</strong> Start with a short half-day to help
            your dog acclimate and reduce anxiety.
          </li>
          <li>
            <strong>Clear Communication:</strong> Provide allergy, medication,
            and temperament details so staff can care safely.
          </li>
          <li>
            <strong>Comfort from Home:</strong> Bring a favourite toy or blanket
            to provide familiar scents and reassurance.
          </li>
        </ul>
      </section>

      {/* ===== PET RIDE SERVICES ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-[#fffaf5] border border-[#e6dccf] p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">
          🚗 2. Pet-Friendly Ride Services (Uber Pet, Hopp Pet etc.)
        </h4>
        <p className="text-gray-700 leading-relaxed mb-3">
          Need transport but no car? Pet-friendly ride apps make travel easier
          for guardians and pets alike. Services, fees, and rules differ by
          region, so always review the details before you need them.
        </p>

        <h5 className="font-semibold text-[#8B6A43] mt-4 mb-2">
          🐾 What to Check Before Riding
        </h5>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>
            <strong>Pet Policy:</strong> Read app-specific requirements such as
            crate or harness rules and potential fees.
          </li>
          <li>
            <strong>Driver Preparedness:</strong> Bring your own seat cover,
            wipes, and pee pads — never rely on the driver’s supplies.
          </li>
          <li>
            <strong>Driver Confirmation:</strong> Send a brief courtesy message
            after booking to confirm you’ll have a pet onboard.
          </li>
        </ul>
        <p className="text-[#8B6A43] text-sm mt-3">
          💡 <strong>PetPro Tip:</strong> A travel harness or crate keeps your
          dog secure and prevents motion anxiety.
        </p>
      </section>

      {/* ===== FINAL NOTE ===== */}
      <section className="max-w-3xl mx-auto mb-16 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-3">
          💬 A Final Note for Pet Parents
        </h4>
        <p className="text-gray-700 leading-relaxed mb-3">
          Pet services can greatly enrich your dog’s lifestyle — but quality and
          fit matter most. Do thorough research, read reviews, and consult your
          vet or trusted local owners for honest feedback.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Together, we can build a responsible, inclusive pet community where
          every service prioritizes safety, kindness, and professional care.
        </p>
      </section>

      {/* ===== QUICK SUMMARY ===== */}
      <section className="max-w-3xl mx-auto mb-16 bg-[#fffaf5] border border-[#e6dccf] p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-3">🌟 Quick Summary</h4>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>
             Research daycare / boarding facilities carefully — never choose
            by price alone.
          </li>
          <li> Schedule a trial visit before long stays.</li>
          <li>
             Communicate medical and behaviour details clearly to staff.
          </li>
          <li>
             Learn ride-service rules (Uber Pet, Hopp Pet) ahead of time.
          </li>
          <li>
             Bring your own safety gear and cleaning supplies for transport.
          </li>
          <li>
             Use community recommendations for the most trusted providers.
          </li>
        </ul>
      </section>

      {/* ===== APP BANNER ===== */}
      <section className="text-center max-w-4xl mx-auto mb-20">
        <h4 className="font-semibold mb-3 text-[#111827]">
          Continue with PetGo’s Puppy Care Guide
        </h4>
        <p className="text-gray-700 mb-10">
          Explore PetGo Places and verified service partners to discover
          trustworthy daycares, groomers, and ride options near you.
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
