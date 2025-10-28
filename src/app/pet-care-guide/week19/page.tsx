"use client";

import Image from "next/image";
import Link from "next/link";

export default function Week19Page() {
  return (
    <main className="min-h-screen bg-[#F9F6F1] text-[#111827] py-16 px-6">
      {/* ===== HEADER ===== */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-2">
          Puppy Care Guide
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-[#8B6A43]">
          Week 19 – Understanding Heat & Puberty
        </h2>
      </div>

      {/* ===== SMARTIE IMAGE ===== */}
      <div className="flex justify-center mb-10">
        <Image
          src="/week19mainpic.jpg"
          alt="Puppy entering puberty and first heat cycle"
          width={600}
          height={400}
          className="rounded-2xl shadow-md object-cover"
        />
      </div>

      {/* ===== INTRO ===== */}
      <section className="text-center max-w-3xl mx-auto mb-12">
        <h3 className="text-xl font-semibold mb-3">
          “Your puppy is growing up — let’s talk about her first heat cycle and hormonal changes.”
        </h3>
        <p className="text-gray-700 leading-relaxed">
          Around 5 months of age, your puppy enters adolescence — a stage marked by hormonal and behavioral
          changes. Understanding puberty ensures your pet stays healthy, comfortable, and emotionally secure
          during this transition.
        </p>
      </section>

      {/* ===== WHAT TO EXPECT ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">🐾 What to Expect Around 5 Months</h4>
        <p className="text-gray-700 leading-relaxed mb-4">
          As your puppy matures, you might notice mood changes, new behaviors, or appetite shifts.
          Puberty affects physical growth, teething, and reproductive readiness. Awareness and preparation
          help maintain your puppy’s well-being during this important phase.
        </p>
      </section>

      {/* ===== FIRST HEAT CYCLE ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4"> Understanding the First Heat Cycle</h4>
        <p className="text-gray-700 leading-relaxed mb-4">
          Unspayed female dogs may experience their first heat between 6–20 months of age, depending on breed,
          size, and health. Smaller breeds tend to mature earlier, while larger breeds develop more slowly.
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
          <li><strong>Frequency:</strong> Every 6–8 months</li>
          <li><strong>Duration:</strong> Lasts about 2–3 weeks</li>
          <li><strong>Signs:</strong> Mild swelling, light bleeding, appetite or mood changes</li>
        </ul>
        <p className="text-gray-700 leading-relaxed">
          Some females show subtle symptoms, so pet parents may not realize their dog is in heat at first.
        </p>
      </section>

      {/* ===== HUMAN VS DOG CYCLE ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">🧬 How a Dog’s Heat Differs from a Human Period</h4>
        <p className="text-gray-700 leading-relaxed mb-4">
          A dog’s heat is not menstruation — it’s a fertility cycle preparing for breeding. Female dogs become
          fertile about a week after spotting begins and remain so for 7–10 days.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Dogs don’t experience menopause, but cycles may become less regular with age. On average, fertility
          lasts about three weeks per cycle.
        </p>
      </section>

      {/* ===== BEHAVIORAL & PHYSICAL CHANGES ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">🩺 Typical Behavioural & Physical Changes</h4>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
          <li>May appear tired or irritable</li>
          <li>Loss of appetite or increased affection</li>
          <li>Licking for self-grooming</li>
          <li>Attracting nearby male dogs</li>
          <li>Mild abdominal discomfort</li>
        </ul>
        <p className="text-gray-700 leading-relaxed">
          💡 <strong>PetGo Tip:</strong> Avoid daycare or off-leash park visits to prevent unwanted mating
          and reduce stress.
        </p>
      </section>

      {/* ===== HYGIENE ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">🧼 Hygiene & Home Care</h4>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
          <li>Use dog diapers or sanitary pads and change frequently to prevent odor or infection.</li>
          <li>Avoid deep cleaning near the genital area; stick to gentle wipes or quick rinses.</li>
          <li>Ensure complete drying after cleaning to maintain hygiene.</li>
        </ul>
      </section>

      {/* ===== PETGO SHOP: HYGIENE & HOME CARE ESSENTIALS ===== */}
<section className="max-w-5xl mx-auto mb-16 bg-white p-8 rounded-2xl shadow-sm">
  <h4 className="font-semibold mb-4 text-[#8B6A43]">
    PetGo Shop | Hygiene & Home Care Essentials
  </h4>
  <p className="text-gray-700 mb-8">
    Keep your puppy fresh, clean, and comfortable with these trusted hygiene products designed for
    sensitive skin and daily convenience.
  </p>

  <div className="grid md:grid-cols-3 gap-8">
    {/* === Product 1 – Amazon Basics === */}
    <div className="bg-[#F9F6F1] rounded-2xl shadow-sm hover:shadow-md transition flex flex-col justify-between p-6 text-center h-full">
      <div>
        <Image
          src="/amazon-basics-dog-diapers.jpg"
          alt="Amazon Basics Male Dog Diapers"
          width={280}
          height={200}
          className="object-contain mb-4 rounded-xl max-h-[220px] mx-auto"
        />
        <p className="text-gray-800 font-medium mb-1">
          Amazon Basics Male Dog Diapers (30 Count)
        </p>
        <p className="text-sm text-gray-600 mb-1">Seller: Amazon Basics</p>
        <p className="text-gray-700 text-sm leading-relaxed mb-6 min-h-[40px]">
          Ultra-absorbent, leakproof wraps that keep your home clean and your pup comfy during
          training or incontinence.
        </p>
      </div>
      <div>
        <p className="text-[#8B6A43] font-semibold mb-2">$31.38</p>
        <Link
          href="https://www.amazon.ca/Amazon-Basics-Male-Disposable-Diapers/dp/B071HPBSHV/ref=sr_1_1_ffob_sspa?crid=190478ZZ0R3V6&dib=eyJ2IjoiMSJ9.bJFDDVR6XHEjC1w23VHYNE9B5bKBOLjyaTRgaFcF6nEVR2J7l1hLW6h2rL4z_yW5D-iGMPCJDxBeIHU_GF02wHWDs0D9-k0uJgfLPVw3ZbLwZkDaeKC0ikhawMqOJKQilhbR0EKiCM8en2_40JHIX9Riw-WDsmkgPSg-hM0EFjCYRJHFwk5QRQTgtFlFkDK4km6VUbpv2y_es3902Yykqx9bl3MQjYTEpt7RF9DIMZ_R7jO7aXiVKQknPRveZQye-6jhG59DvKfyDO85Dxt4yzazbQMWU2q-Uc7Oxuywrn0.OkR3ZoB-kqK2RvHad-0Arv7f2QbOZnAMxVKYCxAHMwg&dib_tag=se&keywords=dog%2Bdiapers&qid=1761542461&sprefix=dog%2Bdiaper%2Caps%2C100&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1"
          target="_blank"
          className="text-[#8B6A43] hover:underline font-medium text-sm"
        >
          View on Amazon &gt;
        </Link>
      </div>
    </div>

    {/* === Product 2 – Paw Inspired === */}
    <div className="bg-[#F9F6F1] rounded-2xl shadow-sm hover:shadow-md transition flex flex-col justify-between p-6 text-center h-full">
      <div>
        <Image
          src="/paw-inspired-dog-diapers.jpg"
          alt="Paw Inspired Disposable Dog Diapers"
          width={280}
          height={200}
          className="object-contain mb-4 rounded-xl max-h-[220px] mx-auto"
        />
        <p className="text-gray-800 font-medium mb-1">
          Paw Inspired Disposable Dog Diapers (32 Count)
        </p>
        <p className="text-sm text-gray-600 mb-1">Seller: PAW INSPIRED</p>
        <p className="text-gray-700 text-sm leading-relaxed mb-6 min-h-[40px]">
          Premium leak-proof diapers designed for females in heat or dealing with incontinence —
          ultra-protection with comfort fit.
        </p>
      </div>
      <div>
        <p className="text-[#8B6A43] font-semibold mb-2">$39.50</p>
        <Link
          href="https://www.amazon.ca/Inspired-Protection-Disposable-Diapers-Female/dp/B073NYN74F/ref=sr_1_2_sspa?crid=190478ZZ0R3V6&dib=eyJ2IjoiMSJ9.bJFDDVR6XHEjC1w23VHYNE9B5bKBOLjyaTRgaFcF6nEVR2J7l1hLW6h2rL4z_yW5D-iGMPCJDxBeIHU_GF02wHWDs0D9-k0uJgfLPVw3ZbLwZkDaeKC0ikhawMqOJKQilhbR0EKiCM8en2_40JHIX9Riw-WDsmkgPSg-hM0EFjCYRJHFwk5QRQTgtFlFkDK4km6VUbpv2y_es3902Yykqx9bl3MQjYTEpt7RF9DIMZ_R7jO7aXiVKQknPRveZQye-6jhG59DvKfyDO85Dxt4yzazbQMWU2q-Uc7Oxuywrn0.OkR3ZoB-kqK2RvHad-0Arv7f2QbOZnAMxVKYCxAHMwg&dib_tag=se&keywords=dog%2Bdiapers&qid=1761542461&sprefix=dog%2Bdiaper%2Caps%2C100&sr=8-2-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1"
          target="_blank"
          className="text-[#8B6A43] hover:underline font-medium text-sm"
        >
          View on Amazon &gt;
        </Link>
      </div>
    </div>

    {/* === Product 3 – Teamoy === */}
    <div className="bg-[#F9F6F1] rounded-2xl shadow-sm hover:shadow-md transition flex flex-col justify-between p-6 text-center h-full">
      <div>
        <Image
          src="/teamoy-reusable-dog-diapers.jpg"
          alt="Teamoy Reusable Washable Dog Diapers"
          width={280}
          height={200}
          className="object-contain mb-4 rounded-xl max-h-[220px] mx-auto"
        />
        <p className="text-gray-800 font-medium mb-1">
          Teamoy 4-Pack Reusable Washable Dog Diapers (M)
        </p>
        <p className="text-sm text-gray-600 mb-1">Seller: Teamoy</p>
        <p className="text-gray-700 text-sm leading-relaxed mb-6 min-h-[40px]">
          Eco-friendly washable diapers with soft lining and cute designs — stylish, comfy, and
          super absorbent for daily hygiene.
        </p>
      </div>
      <div>
        <p className="text-[#8B6A43] font-semibold mb-2">$26.99</p>
        <Link
          href="https://www.amazon.ca/Teamoy-Reusable-Physiological-Super-Absorbent-Comfortable/dp/B071XSMRKG/ref=sr_1_6?dib=eyJ2IjoiMSJ9.XgBypjiZON5Pbc_3ZXvn4ldr5Orn_KxwohEVCqqcfLEgJLgNRwZFD_Ff_ld2b5ht4SpGK1leIMVRiHe7vHQ1mGn474XtR7F7RFg8FVsd2VkYZNmF1Gr5MIqNAj7_4rDD0RzxJpG2lHOLRS4hc_BOAcCK9UaN_sJOu4MYnMm-00A2lqoCQNGsP_V1JamV0A29IuFZkzty2e7cEKVmOuZ4_avIpSJGQPR_xhNpaWAOirGCVGRtt1lA3U-K3DF6X_W3dBXRO6Uwuol8yUAN6LJ8PJRG2jQmM5er0c-J2RMp_tw.iKSuNm9PxD_9n7jSaLdPxmRyDXWoFe4Vvz8CeplJ5JU&dib_tag=se&keywords=dog%2Bdiapers&qid=1761542615&sr=8-6&th=1"
          target="_blank"
          className="text-[#8B6A43] hover:underline font-medium text-sm"
        >
          View on Amazon &gt;
        </Link>
      </div>
    </div>
  </div>
</section>


      {/* ===== EXERCISE & PRECAUTIONS ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">🚶‍♀️ Exercise & Outdoor Precautions</h4>
        <p className="text-gray-700 leading-relaxed mb-4">
          During the 7th–8th day of heat, fertility peaks. If walking outdoors:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Always use a secure leash and sanitary diaper.</li>
          <li>Stay alert — male dogs can detect pheromones from far away.</li>
          <li>Supervise all outdoor activities to avoid accidental mating.</li>
        </ul>
      </section>

      {/* ===== MALE BEHAVIOR ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">💡 Understanding Male Dog Behaviour</h4>
        <p className="text-gray-700 leading-relaxed mb-4">
          Unneutered males reach sexual maturity between 5–12 months. Hormonal changes can cause mounting
          behavior — not dominance, but natural instinct or excitement. Gentle redirection helps manage this.
        </p>
        <p className="text-gray-700 leading-relaxed">
          If overexcitement persists, provide structured playtime and positive reinforcement for calm behavior.
        </p>
      </section>

      {/* ===== MANAGING INSTINCTS ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">🧠 Managing Natural Instincts</h4>
        <p className="text-gray-700 leading-relaxed mb-4">
          These behaviors are natural, not “bad.” However, responsible pet parenting involves guiding them safely
          and setting limits.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          If managing a dog in heat or intact male becomes stressful, spaying or neutering remains the most
          humane long-term solution. Many Canadian vets recommend this between 5–9 months.
        </p>
      </section>

      {/* ===== ALTERNATIVES ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">🩹 Alternatives for Unspayed or Unneutered Dogs</h4>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Use diapers or belly bands for hygiene control.</li>
          <li>Provide calm environments to reduce hormonal stress.</li>
          <li>Supervise interactions with other dogs carefully.</li>
          <li>Offer mentally stimulating play to redirect energy.</li>
        </ul>
        <p className="text-gray-700 mt-4">
          Consistent structure helps prevent accidents and promotes balanced behavior during puberty.
        </p>
      </section>

      {/* ===== WHEN SPAYING/NEUTERING IS BEST ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">❤️ When Spaying or Neutering May Be Best</h4>
        <p className="text-gray-700 leading-relaxed mb-4">
          If managing behavioral or hygiene challenges becomes difficult, sterilization may be the best choice.
          It prevents unwanted pregnancies and offers several health benefits:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
          <li>Reduces risk of mammary or testicular cancer and uterine infections.</li>
          <li>Improves behavioral balance and reduces stress-driven habits.</li>
          <li>Makes hygiene care simpler and cleaner.</li>
        </ul>
        <p className="text-gray-700 leading-relaxed">
          Always consult your vet — they’ll advise based on your dog’s breed, size, and current health.
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


      {/* ===== FINAL NOTE ===== */}
      <section className="text-center max-w-3xl mx-auto mb-16">
        <h4 className="text-2xl font-semibold text-[#8B6A43] mb-3">🐶 Final Note</h4>
        <p className="text-gray-700 leading-relaxed mb-3">
          Puberty is more than a biological phase — it’s a time for understanding, patience, and care.
          Each puppy matures differently, and your guidance ensures they grow into a confident, balanced dog.
        </p>
        <p className="text-gray-700 leading-relaxed">
          With empathy and knowledge, this stage becomes another rewarding milestone in your shared journey.
        </p>
      </section>

      {/* ===== APP ADVERTISEMENT + COPYRIGHT ===== */}
      <section className="text-center max-w-4xl mx-auto mb-20">
        <h4 className="font-semibold mb-3 text-[#111827]">
          Continue with PetGo’s Puppy Care Guide
        </h4>
        <p className="text-gray-700 mb-10">
          PetGo supports you through every growth milestone — from teething to training and beyond.
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