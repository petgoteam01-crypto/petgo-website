"use client";

import Image from "next/image";
import Link from "next/link";

export default function Week36Page() {
  return (
    <main className="min-h-screen bg-[#F9F6F1] text-[#111827] py-16 px-6">
      {/* ===== HEADER ===== */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-2">
          Puppy Care Guide
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-[#8B6A43]">
          Week 36 – Preventing Patellar Luxation in Puppies
        </h2>
      </div>

      {/* ===== SMARTIE IMAGE ===== */}
      <div className="flex justify-center mb-10">
        <Image
          src="/week36mainpic.jpg"
          alt="Puppy joint health and knee care"
          width={600}
          height={400}
          className="rounded-2xl shadow-md object-cover"
        />
      </div>

      {/* ===== INTRO ===== */}
      <section className="text-center max-w-3xl mx-auto mb-12">
        <p className="text-gray-700 leading-relaxed">
          As your puppy nears nine months, their joints are rapidly developing.
          This week’s guide explains what patellar luxation is, how to spot early
          warning signs, and what you can do to keep those little knees strong and healthy.
        </p>
      </section>

            {/* ===== WHAT IS ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">
          🦴 Understanding Patellar Luxation
        </h4>
        <p className="text-gray-700 leading-relaxed mb-6">
          Patellar luxation occurs when the kneecap slips out of its normal groove in
          the thigh bone. It’s common in small breeds like Pomeranians, Maltese, and
          Toy Poodles, though any dog can be affected. Genetics play a major role,
          and early signs may appear even in young puppies.
        </p>

        {/* IMAGE BELOW TEXT */}
        <div className="flex justify-center">
          <Image
            src="/patellar-luxation-diagram.jpg"
            alt="Diagram of patellar luxation in dogs"
            width={600}
            height={400}
            className="rounded-2xl shadow-md object-cover"
          />
        </div>
      </section>


      {/* ===== SYMPTOMS ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">
          🐾 Recognizing the Symptoms
        </h4>
        <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
          <li>Skipping or limping on one hind leg.</li>
          <li>Difficulty climbing stairs or jumping.</li>
          <li>Clicking sound or leg shaking during movement.</li>
          <li>Reluctance to run, play, or bear weight.</li>
          <li>Knee appearing off-center or sliding inward.</li>
        </ul>
        <p className="text-gray-700 leading-relaxed mb-2">
          Vets grade luxation from 1 to 4 — mild cases slip occasionally, severe ones stay dislocated and can deform joints over time.
        </p>
      </section>

      {/* ===== WHY DETECTION ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-[#fffaf5] border border-[#e6dccf] p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">
           Why Early Detection Matters
        </h4>
        <p className="text-gray-700 leading-relaxed mb-3">
          Untreated luxation weakens ligaments and cartilage, leading to arthritis or
          chronic pain. Catching it early allows for non-surgical care like muscle
          strengthening, supplements, and weight control.
        </p>
        <p className="text-gray-700 text-sm">
          💡 <strong>PetGo Tip:</strong> Schedule annual orthopedic checks for small breeds — early
          intervention prevents long-term damage.
        </p>
      </section>

      {/* ===== SELF CHECK ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">
          ✅ PetGo Self-Check for Patellar Health
        </h4>
        <ul className="list-disc list-inside text-gray-700 mb-3 space-y-1">
          <li>Limping or hesitation on stairs.</li>
          <li>One leg lifted or “skipping” gait.</li>
          <li>Clicking or popping in knees.</li>
          <li>Difficulty standing after rest.</li>
          <li>Reduced interest in active play.</li>
        </ul>
        <p className="text-gray-700 text-sm">
          🩺 If any of these appear, book a veterinary exam promptly — waiting may
          increase the need for surgery later.
        </p>
      </section>

      {/* ===== PREVENTION ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">
           Prevention Tips for Canadian Pet Parents
        </h4>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>
            <strong>Create Non-Slip Spaces:</strong> Use rugs or mats to protect growing joints.
          </li>
          <li>
            <strong>Limit Jumping:</strong> Avoid bed or couch leaps; add ramps or steps.
          </li>
          <li>
            <strong>Maintain Healthy Weight:</strong> You should feel ribs easily without pressing hard.
          </li>
          <li>
            <strong>Discourage Standing on Two Legs:</strong> Encourage calm four-paw posture.
          </li>
          <li>
            <strong>Low-Impact Exercise:</strong> Gentle walks or swimming strengthen knees safely.
          </li>
          <li>
            <strong>Joint-Supporting Nutrition:</strong> Diets with omega-3, glucosamine, and chondroitin keep cartilage strong.
          </li>
        </ul>
      </section>

      {/* ===== VET CARE ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-[#fffaf5] border border-[#e6dccf] p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">
          🏥 Veterinary Care & Treatment Options
        </h4>
        <p className="text-gray-700 leading-relaxed mb-3">
          Mild (Grade 1–2) cases often improve with exercise control, supplements,
          and weight management. Severe (Grade 3–4) cases may need surgery to
          realign or deepen the patellar groove, followed by physiotherapy.
        </p>
        <p className="text-gray-700 text-sm">
          💡 <strong>PetGo Tip:</strong> Post-surgery recovery depends on consistent rehab and
          lifestyle care — prevention doesn’t stop at the clinic.
        </p>
      </section>

      {/* ===== CLOSING REMINDER ===== */}
      <section className="max-w-3xl mx-auto mb-16 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-3">💛 PetGo Reminder</h4>
        <p className="text-gray-700 leading-relaxed mb-3">
          Strong, pain-free joints are the key to your puppy’s confidence and joy.
          If gait or posture changes, act early — prevention today means freedom of
          movement tomorrow.
        </p>
        <p className="text-gray-700">
           <strong>Early action, lifelong comfort.</strong>
        </p>
      </section>

      {/* ===== APP ADVERTISEMENT + COPYRIGHT ===== */}
      <section className="text-center max-w-4xl mx-auto mb-20">
        <h4 className="font-semibold mb-3 text-[#111827]">
          Continue with PetGo’s Puppy Care Guide
        </h4>
        <p className="text-gray-700 mb-10">
          Track your puppy’s joint health, weight, and vet visits easily in the PetGo App — your partner in lifelong wellness.
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