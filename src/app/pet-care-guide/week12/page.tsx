"use client";

import Image from "next/image";
import Link from "next/link";

export default function Week12Page() {
  return (
    <main className="min-h-screen bg-[#F9F6F1] text-[#111827] py-16 px-6">
      {/* ===== HEADER ===== */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-2">
          Puppy Care Guide
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-[#8B6A43]">
          Week 12 – Vaccination &amp; Early Training
        </h2>
      </div>

      {/* ===== SMARTIE IMAGE ===== */}
      <div className="flex justify-center mb-10">
        <Image
          src="/week12mainpic.jpg"
          alt="Happy puppy during vaccination"
          width={600}
          height={400}
          className="rounded-2xl shadow-md object-cover"
        />
      </div>

      {/* ===== INTRO SECTION ===== */}
      <section className="text-center max-w-3xl mx-auto mb-12">
        <h3 className="text-xl font-semibold mb-3">
          “A Healthy Start Builds a Lifetime of Wellness”
        </h3>
        <p className="text-gray-700 leading-relaxed mb-3">
          Your puppy is now 12 weeks old — playful, curious, and bursting with energy!
          This stage marks the beginning of an important milestone in their health journey: vaccinations.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Just like human babies, young dogs need a series of vaccinations to help
          their immune systems learn how to fight off diseases safely.
        </p>
      </section>

      {/* ===== UNDERSTANDING VACCINATIONS ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">
          💉 Understanding Puppy Vaccinations in Canada
        </h4>
        <p className="text-gray-700 leading-relaxed mb-4">
          In Canada, veterinarians follow the vaccination schedule recommended by the
          Canadian Veterinary Medical Association (CVMA). Most puppies receive their
          first shots between <strong>6 to 8 weeks</strong> of age and continue every
          2–4 weeks until about 16 weeks old. This ensures full protection once the
          antibodies from their mother’s milk begin to fade.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Common core vaccines include:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
          <li>
            <strong>DHPP:</strong> Distemper, Hepatitis, Parvovirus, Parainfluenza
          </li>
          <li>
            <strong>Rabies:</strong> Legally required in most provinces and municipalities
          </li>
          <li>
            <strong>Bordetella (Kennel Cough):</strong> Often required for puppy classes
            or boarding facilities
          </li>
        </ul>
        <p className="text-gray-700 leading-relaxed">
          Annual boosters are usually recommended to maintain long-term immunity.
        </p>
      </section>

      {/* ===== PETGO TIP ===== */}
      <section className="text-center max-w-3xl mx-auto mb-16">
        <div className="bg-[#fffaf5] border border-[#e6dccf] rounded-2xl shadow-sm p-8">
          <h5 className="font-semibold text-[#8B6A43] mb-3">🩺 PetGo Tip</h5>
          <p className="text-gray-700 leading-relaxed">
            Puppies don’t retain lifelong immunity like humans do. Regular booster
            shots keep them healthy and protected year after year.
          </p>
        </div>
      </section>

      {/* ===== VACCINATION SCHEDULE TABLE ===== */}
      <section className="max-w-4xl mx-auto mb-16 bg-white p-8 rounded-2xl shadow-sm text-center">
        <h4 className="font-semibold mb-4 text-[#8B6A43]">
          Puppy Vaccination Schedule
        </h4>
        <p className="text-gray-700 leading-relaxed mb-8">
          It’s time to start protecting your puppies. Visit your veterinarian to begin
          the vaccination series according to this schedule:
        </p>

        {/* Table Image */}
        <div className="flex justify-center mb-10">
          <Image
            src="/week7-vaccination-table.png"
            alt="Puppy vaccination schedule table"
            width={900}
            height={500}
            className="rounded-2xl shadow-md object-contain"
          />
        </div>

        {/* Button → Vaccination Guide */}
        <Link
          href="/vaccines/guide"
          className="inline-block bg-[#8B6A43] hover:bg-[#6E5332] text-white px-8 py-3 rounded-lg font-medium transition"
        >
          View Full Vaccination Guide &gt;
        </Link>
      </section>

      {/* ===== BEFORE & AFTER VACCINATION ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">
          ⚠️ Before and After Vaccination
        </h4>

        <h5 className="font-medium mb-2">Before the appointment</h5>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
          <li>Schedule your visit in the morning when your puppy is rested.</li>
          <li>Avoid intense play or baths 2–3 days before the vaccine.</li>
          <li>If your puppy seems unwell, it’s best to reschedule the appointment.</li>
        </ul>

        <h5 className="font-medium mb-2 mt-6">After the appointment</h5>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Your puppy may feel tired or sore — let them rest quietly.</li>
          <li>Avoid walks, playdates, or baths for at least 24 hours.</li>
          <li>Mild sleepiness or soft stool is normal.</li>
          <li>
            If your puppy vomits, has diarrhea, or seems unusually weak, contact your
            veterinarian immediately.
          </li>
        </ul>
      </section>

      {/* ===== PETGO REMINDER ===== */}
      <section className="text-center max-w-3xl mx-auto mb-16">
        <div className="bg-[#fffaf5] border border-[#e6dccf] rounded-2xl shadow-sm p-8">
          <h5 className="font-semibold text-[#8B6A43] mb-3">🩷 PetGo Reminder</h5>
          <p className="text-gray-700 leading-relaxed">
            Observe your puppy closely for a day or two after each vaccination.
            Comfort them with calm affection — rest is part of recovery!
          </p>
        </div>
      </section>

      {/* ===== EARLY TRAINING & SOCIALIZATION ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4"> Early Training &amp; Socialization</h4>
        <p className="text-gray-700 leading-relaxed mb-4">
          At this age, puppies begin learning about the world — sights, sounds, people,
          and other pets. This is the perfect time to introduce gentle socialization.
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
          <li>Keep experiences positive and short.</li>
          <li>Teach simple cues like “sit” or “come” using small treats and praise.</li>
          <li>Avoid harsh correction — keep it fun and consistent.</li>
        </ul>
        <p className="text-gray-700 leading-relaxed">
          🐕 <strong>Tip:</strong> Hold a treat just above your puppy’s nose at a slight
          angle — they’ll naturally sit. Reward that calm posture right away!
        </p>
      </section>


      {/* ===== FIND DOG TRAINING SECTION ===== */}
<section className="max-w-3xl mx-auto mb-12 bg-[#fffaf5] border border-[#e6dccf] rounded-2xl shadow-sm p-8 text-center">
  <h4 className="font-semibold text-[#8B6A43] mb-4">
    🐾 Find Dog Training Programs
  </h4>
  <p className="text-gray-700 leading-relaxed mb-6">
    Want to take your puppy’s training to the next level? PetGo’s{" "}
    <span className="font-semibold text-[#4A321E]">Dog Training</span>{" "}
    section will feature step-by-step lessons, expert guidance,
    and personalized behavior insights to help your puppy grow with confidence.
  </p>
  <Link
    href="/exclusive-features/dog-training"
    className="inline-block bg-[#8B6A43] hover:bg-[#6E5332] text-white px-6 py-3 rounded-lg font-medium transition"
  >
    Explore Dog Training &gt;
  </Link>
</section>


      {/* ===== DEWORMING & PARASITE PREVENTION ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">
          🩺 Deworming &amp; Parasite Prevention
        </h4>
        <p className="text-gray-700 leading-relaxed mb-4">
          Most Canadian veterinarians recommend starting deworming at 4–6 weeks of age,
          with repeat treatments every few weeks until 16 weeks old, followed by monthly
          preventatives.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Parasite prevention (like heartworm or flea control) may begin around this
          stage, depending on your vet’s advice and your local climate.
        </p>
      </section>

      {/* ===== 12-WEEK TAKEAWAY ===== */}
      <section className="text-center max-w-3xl mx-auto mb-16">
        <h4 className="text-2xl font-semibold text-[#8B6A43] mb-3">
         The 12-Week Takeaway
        </h4>
        <ul className="list-disc list-inside text-gray-700 inline-block text-left space-y-2 mb-6">
          <li>Schedule your second or third round of vaccinations</li>
          <li>Begin light, positive training and social exposure</li>
          <li>Maintain consistent routines and rest time</li>
          <li>Continue parasite prevention and vet check-ins</li>
        </ul>
        <p className="text-gray-700 leading-relaxed">
          “Healthy habits start young — your care now builds the foundation for your
          puppy’s lifelong wellbeing.”
        </p>
      </section>

      {/* ===== CONTINUE / APP BANNER ===== */}
      <section className="text-center max-w-4xl mx-auto mb-20">
        <h4 className="font-semibold mb-3 text-[#111827]">
          Continue with PetGo’s Puppy Care Guide
        </h4>
        <p className="text-gray-700 mb-10">
          Vaccines, training, and consistent love — PetGo is here to help you build a
          strong foundation for a happy, healthy puppy life.
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
