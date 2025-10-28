"use client";

import Image from "next/image";
import Link from "next/link";

export default function Week50Page() {
  return (
    <main className="min-h-screen bg-[#F9F6F1] text-[#111827] py-16 px-6">
      {/* ===== HEADER ===== */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-2">
          Puppy Care Guide
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-[#8B6A43]">
          Week 50 – The Pre-Adult Health Check
        </h2>
      </div>

      {/* ===== SMARTIE IMAGE ===== */}
      <div className="flex justify-center mb-10">
        <Image
          src="/week50mainpic.jpg"
          alt="Veterinarian examining a young dog"
          width={600}
          height={400}
          className="rounded-2xl shadow-md object-cover"
        />
      </div>

      {/* ===== INTRO ===== */}
      <section className="text-center max-w-3xl mx-auto mb-12">
        <p className="text-gray-700 leading-relaxed">
          Your puppy is already 50 weeks old — almost a full year!  
          It feels like just yesterday you were bringing them home for the first
          time, and now they’re standing on the doorstep of adulthood.  
          Before stepping into their adult stage, it’s time for one last
          milestone: a comprehensive pre-adult health check.
        </p>
      </section>

      {/* ===== WHY CHECK ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">
          🩺 Why a Health Check Is Crucial Now
        </h4>
        <p className="text-gray-700 leading-relaxed mb-3">
          Even after vaccinations and basic puppy exams, annual check-ups remain
          one of the most powerful ways to maintain lifelong health. Regular
          wellness exams allow veterinarians to detect and prevent potential
          problems early — before they become serious.
        </p>
        <p className="text-gray-700 leading-relaxed">
          For dogs under senior age (below 6–7 years), a yearly check-up is
          recommended. Think of it as your dog’s “annual physical” — a way to
          ensure their first steps into adulthood are healthy and strong.
        </p>
      </section>

      {/* ===== ESSENTIAL CHECKS ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-[#fffaf5] border border-[#e6dccf] p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">
          ✅ The 4 Essential Checks for This Stage
        </h4>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <div>
            <strong>1️⃣ Dental Check – Are all adult teeth in place?</strong>
            <p>
              Your vet will confirm that all baby teeth have fallen out and that
              adult teeth are properly aligned. They’ll check for plaque buildup
              or gum irritation to prevent early dental disease.
            </p>
          </div>

          <div>
            <strong>2️⃣ Weight & Body Condition Score (BCS)</strong>
            <p>
              Ensuring your dog is at a healthy weight now prevents joint stress
              and future metabolic issues. Your vet will use a standardized BCS
              chart to assess if your dog is underweight, overweight, or ideal.
            </p>
          </div>

          <div>
            <strong>3️⃣ Patellar Luxation Screening</strong>
            <p>
              A common orthopedic issue in dogs, this condition occurs when the
              kneecap slips out of position. Your vet can often detect it
              through a simple physical palpation — no costly imaging needed.
            </p>
          </div>

          <div>
            <strong>4️⃣ Heartworm Test</strong>
            <p>
              A small blood test that can save your dog’s life. Even if you use
              monthly prevention, annual screening is crucial — especially in
              mosquito-prone areas. Heartworm is preventable, but once
              contracted, it’s dangerous and difficult to treat.
            </p>
          </div>
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


      {/* ===== DIAGNOSTICS ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">
          🔎 Understanding Veterinary Diagnostics
        </h4>
        <p className="text-gray-700 leading-relaxed mb-3">
          Many of these checks — like patella exams — can be performed quickly
          and affordably during a regular consultation. However, if your vet
          recommends bloodwork or more detailed testing, don’t be alarmed.
          Early detection saves both worry and cost down the road.
        </p>
        <p className="text-gray-700 leading-relaxed mb-3">
          We know that reading veterinary test results can be confusing. Terms
          like ALT, ALP, or BUN can leave many pet parents uncertain about what
          they mean. That’s why PetGo’s <strong>Remote Veterinary Consultation</strong> service is here to help.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Simply upload your dog’s bloodwork, and our licensed veterinarians
          will review and interpret the results for you — in clear, friendly
          language you can actually understand.
        </p>
      </section>

      
      {/* ===== APP BANNER ===== */}
      <section className="text-center max-w-4xl mx-auto mb-20">
        <h4 className="font-semibold mb-3 text-[#111827]">
          Continue with PetGo’s Puppy Care Guide
        </h4>
        <p className="text-gray-700 mb-10">
          Use the PetGo App to schedule checkups, store vet records, and monitor
          your dog’s growth data — ensuring a healthy transition into adulthood.
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
