"use client";

import Image from "next/image";
import Link from "next/link";

export default function Week14Page() {
  return (
    <main className="min-h-screen bg-[#F9F6F1] text-[#111827] py-16 px-6">
      {/* ===== HEADER ===== */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-2">
          Puppy Care Guide
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-[#8B6A43]">
          Week 14 – The Socialization Stage
        </h2>
      </div>

      {/* ===== SMARTIE IMAGE ===== */}
      <div className="flex justify-center mb-10">
        <Image
          src="/week14mainpic.jpg"
          alt="Puppy exploring outdoors"
          width={600}
          height={400}
          className="rounded-2xl shadow-md object-cover"
        />
      </div>

      {/* ===== INTRO ===== */}
      <section className="text-center max-w-3xl mx-auto mb-12">
        <h3 className="text-xl font-semibold mb-3">
          “Every confident step your puppy takes today becomes the foundation of a calm, happy adult dog.”
        </h3>
        <p className="text-gray-700 leading-relaxed">
          At this exciting stage, your puppy is nearly done with core vaccinations — meaning it’s time to
          explore the world safely and confidently. This week focuses on building trust, confidence, and
          calmness during early walks and social encounters.
        </p>
      </section>

      {/* ===== SOCIALIZATION PERIOD ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">🐾 The Socialization Period</h4>
        <p className="text-gray-700 leading-relaxed mb-4">
          Begin with gentle indoor socialization — let your puppy meet family members, hear everyday sounds,
          and explore safe spaces. Then, gradually move to short outdoor walks or neighborhood strolls.
          Remember, while you might imagine a movie-like walk in harmony, leash training often takes patience.
        </p>
      </section>

      {/* ===== LEASH TROUBLE ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">
          Q. My puppy refuses to walk or keeps pulling on the leash. What should I do?
        </h4>
        <p className="text-gray-700 leading-relaxed mb-4">
          Many puppies struggle with early walks. Some freeze or resist moving, while others pull or chase
          every leaf and bug in sight. It’s completely normal — walking on a leash is a new skill that takes
          time to learn.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Your job is to help your puppy view the leash as something comfortable and safe, not restrictive.
        </p>

        <div className="bg-[#fffaf5] border border-[#e6dccf] rounded-xl p-5 mt-6">
          <h5 className="font-semibold text-[#8B6A43] mb-2">💡 Tip: Start Indoors First</h5>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Let your puppy wear their collar or harness indoors to get used to the feel.</li>
            <li>Walk around familiar areas like the living room or hallway.</li>
            <li>Reward calm walking and gentle leash behavior with treats or praise.</li>
            <li>Help them associate the leash with fun, not frustration.</li>
          </ul>
        </div>
      </section>

      {/* ===== COLLAR VS HARNESS ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">🦮 Collar or Harness — Which is Better?</h4>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
          <li>
            <strong>Collar:</strong> Great for small, calm puppies who already walk well. Ensure you can slip
            two fingers underneath comfortably.
          </li>
          <li>
            <strong>Harness:</strong> Better for energetic or pulling puppies — it distributes pressure safely
            across the chest instead of the neck.
          </li>
        </ul>
        <p className="text-gray-700 leading-relaxed">
          Avoid retractable leashes during early training — they reduce communication and make it harder for
          your puppy to sense your direction and pace.
        </p>

        <div className="bg-[#fffaf5] border border-[#e6dccf] rounded-xl p-5 mt-6">
          <h5 className="font-semibold text-[#8B6A43] mb-2">⚠️ Note</h5>
          <p className="text-gray-700 leading-relaxed">
            Each puppy learns at their own pace. Never force movement — it can cause fear and resistance. Like
            teaching a child to ride a bike, gentle encouragement works better than pressure.
          </p>
        </div>
      </section>

      {/* ===== WALKING CALMLY ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">
          Q. How can I train my puppy to walk calmly beside me?
        </h4>
        <p className="text-gray-700 leading-relaxed mb-4">
          Begin indoors, then transition outside once they feel confident. Keep sessions short — 5–10 minutes
          a few times daily. Reward your puppy for walking near you and responding to your pace.
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
          <li>Hold treats or a toy near your leg to guide them.</li>
          <li>Stop walking when they pull or lag behind — resume only when they return beside you.</li>
          <li>Introduce mild distractions gradually — new sounds, people, or light traffic.</li>
          <li>Start in quiet areas before moving to busier ones.</li>
        </ul>

        <div className="bg-[#fffaf5] border border-[#e6dccf] rounded-xl p-5 mt-6">
          <h5 className="font-semibold text-[#8B6A43] mb-2">💗 Helpful Reminder</h5>
          <p className="text-gray-700 leading-relaxed">
            Walking together should feel like teamwork, not control. Speak softly, praise often, and let your
            puppy learn your rhythm naturally.
          </p>
        </div>
      </section>

      {/* ===== FEAR OF NOISES ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">
          🐕 Q. My puppy gets scared of people or noises outside. How do I help them adjust?
        </h4>
        <p className="text-gray-700 leading-relaxed mb-4">
          This is a natural part of socialization. Between 12–16 weeks, puppies are developing emotional
          stability — so new sights or sounds can be overwhelming. Take things slow.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Sit calmly with your puppy in a quiet park or near a calm street. Let them watch, sniff, and listen.
          Praise calm behavior to help them associate the world with safety.
        </p>

        <div className="bg-[#fffaf5] border border-[#e6dccf] rounded-xl p-5 mt-6">
          <h5 className="font-semibold text-[#8B6A43] mb-2">💡 Extra Tip: Build Comfort Gradually</h5>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Observe the world from a distance first.</li>
            <li>Gradually shorten that distance day by day.</li>
            <li>Encourage curiosity, not avoidance.</li>
            <li>Never drag or scold; crouch and call them gently instead.</li>
          </ul>
        </div>
      </section>

      {/* ===== TRAINING FOR WALKS ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">🌿 Training for Walks</h4>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
          <li>Start in quiet spaces like your backyard or a calm park corner.</li>
          <li>Let them sniff and explore before structured walking.</li>
          <li>Use a soft tone for direction and praise focus.</li>
          <li>Walk between a wall and yourself to help them feel secure.</li>
          <li>Start with 15 minutes, then extend gradually.</li>
        </ul>
        <p className="text-gray-700 leading-relaxed">
          Patience and routine build confidence — consistency is what transforms shy puppies into calm walkers.
        </p>
      </section>

      {/* ===== BEHAVIOR INSIGHT ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">🧠 Behavior Insight</h4>
        <p className="text-gray-700 leading-relaxed">
          Puppies pay attention to whatever captures their focus most strongly. Use your voice and consistent
          tone to guide them — over time, they’ll learn that your words matter more than distractions.
        </p>
      </section>

      {/* ===== TODAY'S TIP ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">🐾 Today’s Tip</h4>
        <p className="text-gray-700 leading-relaxed mb-4">
          Every dog learns at their own pace. Instead of frustration, focus on patience and praise.
          Encouragement builds trust — and a trusting puppy becomes a confident, loving adult.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Curious about which gear suits your pup? Stay tuned for PetGo’s upcoming
          <strong> Training Essentials Guide</strong> for collars, harnesses, and more.
        </p>
      </section>

{/* ===== PETGO SHOP | TRAINING ESSENTIALS ===== */}
<section className="max-w-5xl mx-auto mb-16 bg-white p-8 rounded-2xl shadow-sm">
  <h4 className="font-semibold mb-4 text-[#8B6A43]">
  PetGo Shop | Training Essentials
  </h4>
  <p className="text-gray-700 mb-8">
    Build confidence with the right tools. These handpicked essentials make
    daily walks safer, training smoother, and your puppy’s adventures even more fun.
  </p>

  <div className="grid md:grid-cols-3 gap-8 items-stretch">
    {[
      {
        img: "/wolfone-harness.jpg",
        title: "Wolfone No Pull Dog Harness",
        desc: "Adjustable, soft-padded vest with a sturdy control handle — ideal for safe, comfortable daily walks.",
        price: "$18.99",
        link: "https://www.amazon.ca/Wolfone-Harness-Adjustable-Adorable-Dogs%EF%BC%88Spun/dp/B0BXWVTTZS/ref=sr_1_7?crid=1W117O90AI4BQ&dib=eyJ2IjoiMSJ9.mgmfMbmwtO5BtrXvGh0K4FCthvrcLfiUuSegGvn_NkLax9PIrT407HK78z-yAbFNDfhIiLwb6CIIE1VL8DX5sl6pJdRCQVQzirFCWe9e-Jh8MZHht2CENeKqvu3NI_qsoQD8aEVKg6LD4qlsUd-Fm2OlK_gYnyT7EmICbmwYQgesAmpjagKdtYg29dgRHoiB1vfkQs9w4dwXTyunVQxj2arLYSlyfxWqB6x6m_VjDN_5XFFozp4WZY8R4AVqQevOCzaraxw1oLNEPLpvMWKyIQISlIOVY541K7GZkMSR9Ts.Br6G1LO59PPbdRKjsqrrsqD0DBwhTWqx0Iyv04qqOlc&dib_tag=se&keywords=dog%2Bharness&qid=1761539759&sprefix=dog%2Bharnes%2Caps%2C142&sr=8-7&th=1",
      },
      {
        img: "/maca-bates-collar.jpg",
        title: "Maca Bates Yellow Duck Collar",
        desc: "Soft, durable, and irresistibly cute — a perfect mix of comfort and style for everyday wear.",
        price: "$14.98",
        link: "https://www.amazon.ca/Collars-Durable-Comfortable-Adjustable-Birthday/dp/B0D9262MR7/ref=sr_1_7?crid=258K0XTKM1K5G&dib=eyJ2IjoiMSJ9.KQZh0jG_0-i1dZSxKspisegSoS62ezcuQ8YWzZXuwJrMm4YNa2deoEudbsU-beHNHFhiVZhquNrOdN9rEG_1vpHBtz0LnvZdEGlZA5cJ5UKFYaFt-zIFYP1YSWuHHvAAyeXbrIBuIhJRcMwe-D2dpL1-382rNK5ikCxgZwtZckBYtHdMQJW1rq6tyTN6r2-dzF6xBW7y1UxLvLLQp1YN6gEJ8cR237ZTHCxtbMgv6qKoC0sK2Bze5VXwbIaAqOSnpBkWZRGllBLdRJ-PkZN-pmQdRMjsEfJk9Tl2P3uwILU._UbUrWrRRWpWQvQ0Xv0N2c2lwwBwQnMBoKX5pjft9nY&dib_tag=se&keywords=dog%2Bcollar&qid=1761539803&sprefix=dog%2Bcolla%2Caps%2C119&sr=8-7&th=1",
      },
      {
        img: "/petescort-leash.jpg",
        title: "PETESCORT Heavy Duty Dog Leash",
        desc: "Strong, reflective, and soft-handled for maximum control — ideal for both training and outdoor adventures.",
        price: "$15.47",
        link: "https://www.amazon.ca/PETESCORT-Leashes-Comfortable-Reflective-Threads/dp/B09WY3GHHL/ref=sr_1_7?crid=ZO10DHUF8U75&dib=eyJ2IjoiMSJ9.uuEObuwPy5nfPQATuONYgm13sUsJ49XYjpQTCRu35atxyyd_0_YhFHwr_MdqWV-IKXUOxRpv2sUChkjDgGvaBSoRfmlsf0pTZXRmQjUbN8MTkj3akt5HsFVgAG9Rix7d0nc2Dpvs2BI--Qs6ulP9n9YVPDfWhxkkQeSnyCYXEdY_GvsQP3W9TeXNDI-Xjr9lDpnk2XrY9hrTIHF92NV4G4AMJapv_MPfXwbVxv-AqYZAqBWgJBpJLqg5zu8Hb44kpav5ipYIh0vlvlR4KwIjiKJeLyIvnYU-jrSd-uk_rlc.R4x6fUgxduUrhbppzlMchLw1k0oVLNWowAF3yYyR3Yo&dib_tag=se&keywords=dog%2Bleash&qid=1761539910&sprefix=dog%2Bleash%2Caps%2C132&sr=8-7&th=1",
      },
    ].map(({ img, title, desc, price, link }) => (
      <div
        key={title}
        className="bg-[#F9F6F1] rounded-2xl shadow-sm hover:shadow-md transition flex flex-col p-6 text-center justify-between"
      >
        {/* Image */}
        <div className="w-full h-[220px] flex justify-center items-center mb-4">
          <Image
            src={img}
            alt={title}
            width={300}
            height={220}
            className="object-contain max-h-[200px]"
          />
        </div>

        {/* Content */}
        <div className="flex-grow flex flex-col justify-between">
          <div>
            <h5 className="font-semibold text-[#4A321E] mb-2">{title}</h5>
            <p className="text-gray-700 text-sm mb-3">{desc}</p>
          </div>
          <div>
            <p className="font-semibold text-[#8B6A43] mb-4">{price}</p>
            <Link
              href={link}
              target="_blank"
              className="inline-block bg-[#8B6A43] hover:bg-[#6E5332] text-white px-6 py-2 rounded-lg transition"
            >
              Buy on Amazon
            </Link>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>



      {/* ===== FINAL NOTE ===== */}
      <section className="text-center max-w-3xl mx-auto mb-16">
        <h4 className="text-2xl font-semibold text-[#8B6A43] mb-3">💬 Final Note</h4>
        <p className="text-gray-700 leading-relaxed mb-3">
          Walking together is more than exercise — it’s communication, trust, and joy shared between
          you and your dog. Each step teaches understanding and strengthens your bond.
        </p>
        <p className="text-gray-700 leading-relaxed">
          So take a deep breath, bring a few treats, and enjoy the walk — one step at a time. 🌷
        </p>
      </section>

      {/* ===== APP ADVERTISEMENT + COPYRIGHT ===== */}
      <section className="text-center max-w-4xl mx-auto mb-20">
        <h4 className="font-semibold mb-3 text-[#111827]">
          Continue with PetGo’s Puppy Care Guide
        </h4>
        <p className="text-gray-700 mb-10">
          Training, confidence, and care — PetGo is here to walk with you every step of the way.
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
