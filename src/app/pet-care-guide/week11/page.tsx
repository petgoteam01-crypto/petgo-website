"use client";

import Image from "next/image";
import Link from "next/link";

export default function Week11Page() {
  return (
    <main className="min-h-screen bg-[#F9F6F1] text-[#111827] py-16 px-6">
      {/* ===== HEADER ===== */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-2">
          Puppy Care Guide
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-[#8B6A43]">
          Week 11 – Pet Registration &amp; Microchipping
        </h2>
      </div>

      {/* ===== INTRO SECTION ===== */}
      <section className="text-center max-w-3xl mx-auto mb-12">
        <h3 className="text-xl font-semibold mb-3">
          “A Responsible Pet Parent Starts with Identification”
        </h3>
        <p className="text-gray-700 leading-relaxed">
          By week 11, your puppy is growing fast, exploring confidently, and becoming
          a true family member. This is also the perfect time to ensure they’re
          properly identified and registered — a small step that can make all the
          difference if your pet ever gets lost.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          In Canada, identification rules depend on where you live. Most cities strongly recommend — or require —
          a visible ID tag and a microchip for safety and proof of ownership.
        </p>
      </section>

      {/* ===== REGISTRATION IN CANADA ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">
          🇨🇦 Understanding Pet Registration in Canada
        </h4>
        <p className="text-gray-700 leading-relaxed mb-4">
          There’s no federal law requiring pet registration in Canada, but nearly all
          municipalities have their own regulations. Here’s how it typically works
          across major cities:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
          <li>
            <strong>Toronto, ON:</strong> Dogs and cats must be licensed annually. You’ll
            receive a numbered tag for your pet’s collar.
          </li>
          <li>
            <strong>Vancouver, BC:</strong> Dogs over 3 months old must be licensed.
          </li>
          <li>
            <strong>Calgary, AB:</strong> Both dogs and cats need licenses — over 90% of
            licensed pets that go missing are successfully returned.
          </li>
          <li>
            <strong>Montreal, QC:</strong> Dogs must be registered and wear their ID tag
            at all times.
          </li>
        </ul>
        <p className="text-gray-700 leading-relaxed">
          Even if your city doesn’t legally require it, licensing your pet is one of
          the best ways to protect them and prove ownership.
        </p>
      </section>

      {/* ===== MICROCHIPPING ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">💉 What Is Microchipping?</h4>
        <p className="text-gray-700 leading-relaxed mb-4">
          A microchip is a tiny electronic identifier, about the size of a grain of
          rice, safely implanted under your puppy’s skin — usually between the shoulder
          blades. It contains a unique ID number that connects to your contact
          information in a secure national database such as:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
          <li>24Petwatch</li>
          <li>EIDAP</li>
          <li>Canadian Kennel Club registry</li>
        </ul>
        <p className="text-gray-700 leading-relaxed mb-4">
          Veterinarians and animal shelters can scan this chip to instantly identify
          your pet and contact you if they ever go missing.
        </p>

        <ul className="text-gray-700 leading-relaxed space-y-1">
          <li>💰 <strong>Cost:</strong> about CAD $60–$100 (one-time)</li>
          <li>🕒 <strong>Best age:</strong> around 8–12 weeks</li>
          <li>📍 <strong>Done by:</strong> your veterinarian or an authorized clinic</li>
        </ul>

        <div className="flex justify-center mt-6">
          <Image
            src="/microchip-canada.jpg"
            alt="Microchipping a puppy in Canada"
            width={600}
            height={400}
            className="rounded-2xl shadow-md object-cover"
          />
        </div>
      </section>

      {/* ===== WHY IT’S IMPORTANT ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">Why It’s So Important</h4>
        <p className="text-gray-700 leading-relaxed mb-4">
          Even the most careful pet owners experience escapes — an open gate, a
          startled puppy, or a loose leash. A collar tag can fall off, but a
          microchip stays with your pet for life.
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
          <li>Permanent identification linked directly to you</li>
          <li>Faster recovery if your pet is lost</li>
          <li>Peace of mind knowing your puppy can always find the way home</li>
        </ul>
        <p className="text-gray-700 leading-relaxed">
          Many Canadian shelters and rescues scan every incoming pet for a chip before
          adoption — reuniting families separated for months or even years.
        </p>
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

      {/* ===== HOW TO REGISTER ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">🪪 How to Register Your Pet in Canada</h4>
        <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-4">
          <li>Check your city’s website (e.g., Toronto Animal Services, Calgary Animal Services)</li>
          <li>Apply for a pet license — typically $25–$40 per year</li>
          <li>Attach the tag to your puppy’s collar</li>
          <li>Microchip your pet during a regular vet visit</li>
          <li>Update your contact info whenever you move or change numbers</li>
        </ol>
        <p className="text-gray-700 leading-relaxed">
          Together, these steps create a layered safety system — visible ID +
          permanent microchip = lifelong protection.
        </p>
      </section>

      {/* ===== AFTER MICROCHIPPING ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">🩺 After Microchipping</h4>
        <p className="text-gray-700 leading-relaxed mb-4">
          After the chip is implanted, your puppy may feel a small pinch, similar to a
          vaccination. Avoid bathing for about 24–48 hours to allow the skin to settle.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Some sensitive puppies may feel sleepy or mildly sore — that’s completely
          normal. Let them rest comfortably and offer gentle reassurance.
        </p>
      </section>

      {/* ===== PETGO TIP ===== */}
      <section className="text-center max-w-3xl mx-auto mb-16">
        <div className="bg-[#fffaf5] border border-[#e6dccf] rounded-2xl shadow-sm p-8">
          <h5 className="font-semibold text-[#8B6A43] mb-3">PetGo Tip</h5>
          <p className="text-gray-700 leading-relaxed mb-4">
            In Canada, registration isn’t just about city rules — it’s an act of love
            and responsibility. By ensuring your puppy has both a visible ID tag and a
            microchip, you’re giving them the best chance of returning home safely.
          </p>
          <ul className="list-disc list-inside text-gray-700 text-left inline-block mb-4 space-y-1">
            <li>Visit your local animal services website today</li>
            <li>Ask your veterinarian about microchip registration partners</li>
            <li>Keep your puppy’s tag on their collar at all times</li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            A quick visit now can protect your pet for a lifetime. 🐶💕
          </p>
        </div>
      </section>

      {/* ===== CONTINUE / APP BANNER ===== */}
      <section className="text-center max-w-4xl mx-auto mb-20">
        <h4 className="font-semibold mb-3 text-[#111827]">
          Continue with PetGo’s Puppy Care Guide
        </h4>
        <p className="text-gray-700 mb-10">
          Responsible care starts with love, guidance, and protection. PetGo will
          continue to guide you every step of the way — with trusted insights,
          community stories, and helpful tools for your pet’s growth.
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
