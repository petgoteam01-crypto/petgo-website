"use client";

import Image from "next/image";
import Link from "next/link";

export default function Week16Page() {
  return (
    <main className="min-h-screen bg-[#F9F6F1] text-[#111827] py-16 px-6">
      {/* ===== HEADER ===== */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-2">
          Puppy Care Guide
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-[#8B6A43]">
          Week 16 – Finishing Vaccinations & Understanding Antibody Tests
        </h2>
      </div>

      {/* ===== SMARTIE IMAGE ===== */}
      <div className="flex justify-center mb-10">
        <Image
          src="/week16mainpic.jpg"
          alt="Puppy vaccination and antibody testing"
          width={600}
          height={400}
          className="rounded-2xl shadow-md object-cover"
        />
      </div>

      {/* ===== INTRO ===== */}
      <section className="text-center max-w-3xl mx-auto mb-12">
        <h3 className="text-xl font-semibold mb-3">
          “Vaccination is complete — now it’s time to confirm your puppy’s true protection.”
        </h3>
        <p className="text-gray-700 leading-relaxed">
          After weeks of careful vaccinations, your puppy is nearly fully protected. But how can you
          be sure their immune system responded correctly? This week, we’ll explore antibody testing
          — the final step to confirm lasting immunity.
        </p>
      </section>

      {/* ===== WRAPPING UP VACCINATIONS ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">🩺 Wrapping Up the Vaccination Series</h4>
        <p className="text-gray-700 leading-relaxed mb-4">
          If your puppy has received vaccines consistently every two weeks since 6 weeks of age —
          congratulations! The core vaccination cycle is almost complete.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          At this point, many pet parents wonder:{" "}
          <span className="italic">“Did my puppy actually build enough immunity?”</span> While the
          vaccines were administered correctly, only an antibody test can confirm if protective
          immunity has developed.
        </p>
      </section>

      {/* ===== WHAT IS AN ANTIBODY TEST ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">💉 What Is an Antibody Test?</h4>
        <p className="text-gray-700 leading-relaxed mb-4">
          An antibody test measures immune proteins in the blood to see if your puppy’s body has
          responded to vaccinations. It verifies protection against core infectious diseases:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
          <li>Canine Distemper Virus</li>
          <li>Parvovirus</li>
          <li>Adenovirus (Type 2)</li>
          <li>Rabies (for travel or legal requirements)</li>
        </ul>
        <p className="text-gray-700 leading-relaxed">
          Testing is generally recommended 2–3 weeks after the final vaccine dose.
        </p>
      </section>

      {/* ===== TYPES OF TESTS ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">🧫 Types of Antibody Tests</h4>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>
            <strong>Basic Screening Test:</strong> Quick and simple; confirms the presence of
            antibodies.
          </li>
          <li>
            <strong>Comprehensive Panel:</strong> Provides detailed antibody titers for multiple
            diseases.
          </li>
          <li>
            <strong>International Certificate Test:</strong> Required for overseas travel; performed
            in government-approved labs.
          </li>
        </ul>
      </section>

      {/* ===== WHEN & WHERE TO TEST ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">🕓 When and Where to Test</h4>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
          <li>
            <strong>Timing:</strong> 2–3 weeks after the final vaccination.
          </li>
          <li>
            <strong>At Your Vet:</strong> Some clinics offer same-day results with in-house kits.
          </li>
          <li>
            <strong>External Labs:</strong> Send samples for detailed analysis (3–5 days).
          </li>
        </ul>



        <p className="text-gray-600 text-sm mt-3">
          *Costs vary depending on clinic, region, and test complexity.
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

      

      {/* ===== WHY TESTING MATTERS ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">⚠️ Why Testing Matters</h4>
        <p className="text-gray-700 leading-relaxed mb-4">
          Even after full vaccinations, some puppies may show low or no antibody response due to:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
          <li>Maternal antibodies blocking vaccine absorption.</li>
          <li>Weak immune response from health conditions.</li>
          <li>Improper storage or handling of vaccines.</li>
        </ul>
        <p className="text-gray-700 leading-relaxed">
          If results show low titers, your vet will recommend a booster to reinforce immunity — a key
          step for puppies in high-risk or travel situations.
        </p>
      </section>

      {/* ===== TODAY'S TIP ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">💡 Today’s Tip</h4>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Testing costs vary by clinic — always request an estimate first.</li>
          <li>If antibody levels are low, a booster shot restores protection.</li>
          <li>
            For international travel, ensure your vet uses an approved laboratory and provides
            documentation.
          </li>
          <li>
            Discuss testing scope and interpretation with your veterinarian beforehand to avoid
            confusion later.
          </li>
        </ul>
      </section>

      {/* ===== EXTRA INSIGHT ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">🧠 Extra Insight for PetGo Parents</h4>
        <p className="text-gray-700 leading-relaxed mb-4">
          Antibody testing isn’t mandatory but is the best confirmation of immunity — especially for
          puppies with uncertain vaccination records or those adopted from shelters.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Keep a digital vaccination record in your <strong>PetGo profile</strong> to easily track
          boosters and test results for future vet visits or travel.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Regular checkups and blood work let your vet monitor overall wellness — strong immunity
          starts with balanced nutrition, hydration, and low stress.
        </p>
      </section>

      {/* ===== CLOSING NOTE ===== */}
      <section className="text-center max-w-3xl mx-auto mb-16">
        <h4 className="text-2xl font-semibold text-[#8B6A43] mb-3">❤️ Closing Note</h4>
        <p className="text-gray-700 leading-relaxed mb-3">
          Completing your puppy’s vaccination series is a major milestone — but confirming that
          protection is just as important. With a quick antibody test and your vet’s guidance, you
          can ensure lifelong safety.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Because in pet care, peace of mind is the best immunity of all. 💛
        </p>
      </section>

      {/* ===== APP ADVERTISEMENT + COPYRIGHT ===== */}
      <section className="text-center max-w-4xl mx-auto mb-20">
        <h4 className="font-semibold mb-3 text-[#111827]">
          Continue with PetGo’s Puppy Care Guide
        </h4>
        <p className="text-gray-700 mb-10">
          Vaccines complete — but PetGo continues to support your puppy’s health journey every step
          of the way.
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