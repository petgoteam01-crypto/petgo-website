"use client";

import Image from "next/image";
import Link from "next/link";

export default function Week43Page() {
  return (
    <main className="min-h-screen bg-[#F9F6F1] text-[#111827] py-16 px-6">
      {/* ===== HEADER ===== */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-2">
          Puppy Care Guide
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-[#8B6A43]">
          Week 43 – Understanding Common Issues: Food Regurgitation &amp; Diarrhea
        </h2>
      </div>

      {/* ===== SMARTIE IMAGE ===== */}
      <div className="flex justify-center mb-10">
        <Image
          src="/week43mainpic.jpg"
          alt="Puppy resting after meal"
          width={600}
          height={400}
          className="rounded-2xl shadow-md object-cover"
        />
      </div>

      {/* ===== INTRO ===== */}
      <section className="text-center max-w-3xl mx-auto mb-12">
        <p className="text-gray-700 leading-relaxed">
          At 10 months old, many puppies have a big appetite and love trying new
          foods. That enthusiasm is great — but it also means you might see
          common tummy troubles. Here’s how to recognize what’s happening and
          respond calmly and effectively.
        </p>
      </section>

      {/* ===== REGURGITATION ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">
           Undigested Food Regurgitation (“Food Vomiting”)
        </h4>
        <p className="text-gray-700 leading-relaxed mb-3">
          Seeing whole, undigested food come back up soon after eating is
          often <em>regurgitation</em> — usually mechanical or habit-based,
          not illness.
        </p>

        <h5 className="font-semibold text-[#8B6A43] mb-2">Common Causes:</h5>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
          <li>
            <strong>Improper bowl height:</strong> Neck craned down can increase air
            intake and hinder smooth passage to the stomach.
          </li>
          <li>
            <strong>Rapid eating:</strong> Long gaps between meals or small portions
            can trigger gulping without proper chewing.
          </li>
        </ul>

        <h5 className="font-semibold text-[#8B6A43] mb-2">How to Help:</h5>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>
            <strong>Elevate the bowl</strong> to chest level with a stable feeder.
          </li>
          <li>
            <strong>Smaller, more frequent meals</strong> (3–4/day) to reduce gulping.
          </li>
          <li>
            <strong>Slow-feeder bowl</strong> to pace intake and improve digestion.
          </li>
        </ul>
      </section>

            {/* ===== PETGO SHOP ===== */}
      <section className="max-w-5xl mx-auto mb-20">
        <h4 className="font-semibold mb-3 text-[#8B6A43]">
          🍽️ PetGo Shop{" "}
          <span className="text-[#111827] font-medium">
            | Support better digestion and comfort during Week 42.
          </span>
        </h4>

        <p className="text-gray-700 mb-8">
          💡 <strong>PetGo Feeding Tip:</strong> Elevated bowls reduce neck strain and improve posture
          — especially for growing dogs. Slow-feeder designs also help prevent bloating and gulping.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-8">
          {/* Product 1 */}
          <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition flex flex-col p-6 h-full">
            <div className="w-full h-[240px] flex justify-center items-center mb-4">
              <Image
                src="/week42-product1.jpg"
                alt="Petace Elevated Dog Bowls Adjustable Raised Dog Bowl"
                width={400}
                height={240}
                className="object-contain max-h-[220px]"
              />
            </div>
            <div className="flex-grow text-left">
              <h5 className="font-semibold text-[#111827] mb-1">
                Petace Elevated Dog Bowls with 2 Stainless Bowls + 1 Slow Feeder (5 Heights Adjustable)
              </h5>
              <p className="text-sm text-gray-600 mb-2">Seller: Petace</p>
              <p className="text-[#8B6A43] font-semibold mb-3">$32.99</p>
            </div>
            <Link
              href="https://www.amazon.ca/Petace-Elevated-Stainless-Heights-Adjustable/dp/B0CFFKYB3P/ref=sr_1_5"
              target="_blank"
              className="inline-block mt-auto text-center bg-[#8B6A43] text-white py-2 px-4 rounded-full hover:bg-[#735739] transition"
            >
              View on Amazon →
            </Link>
          </div>

          {/* Product 2 */}
          <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition flex flex-col p-6 h-full">
            <div className="w-full h-[240px] flex justify-center items-center mb-4">
              <Image
                src="/week42-product2.jpg"
                alt="ikuso 2-in-1 Elevated Slow Feeder Dog Bowls Adjustable Stand"
                width={400}
                height={240}
                className="object-contain max-h-[220px]"
              />
            </div>
            <div className="flex-grow text-left">
              <h5 className="font-semibold text-[#111827] mb-1">
                ikuso 2-in-1 Elevated Slow Feeder Dog Bowls (4-Height Adjustable, No-Spill Design)
              </h5>
              <p className="text-sm text-gray-600 mb-2">Seller: ikuso</p>
              <p className="text-[#8B6A43] font-semibold mb-3">$40.99</p>
            </div>
            <Link
              href="https://www.amazon.ca/dp/B0BRRJJJH4/ref=sspa_dk_detail_4"
              target="_blank"
              className="inline-block mt-auto text-center bg-[#8B6A43] text-white py-2 px-4 rounded-full hover:bg-[#735739] transition"
            >
              View on Amazon →
            </Link>
          </div>
        </div>
      </section>


      {/* ===== MUCUS DIARRHEA ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-[#fffaf5] border border-[#e6dccf] p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4"> Mucousy Diarrhea</h4>
        <p className="text-gray-700 leading-relaxed mb-3">
          Very soft stools with jelly-like mucus signal intestinal irritation.
          At this age, these are the most common triggers:
        </p>

        <h5 className="font-semibold text-[#8B6A43] mb-2">Primary Causes:</h5>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
          <li>
            <strong>Dietary indiscretion:</strong> Overeating, scavenging, or sudden food changes.
          </li>
          <li>
            <strong>Viral infection:</strong> Parvo/Corona (medical emergencies — vaccination matters).
          </li>
          <li>
            <strong>Stress/environment change:</strong> Routine shifts, loud events, moving.
          </li>
        </ul>

        <h5 className="font-semibold text-[#8B6A43] mb-2">Action Plan:</h5>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>
            <strong>Immediate diet tweak:</strong> If otherwise bright and hydrated,
            slightly reduce food for 12–24h; offer a bland diet (boiled, skinless
            chicken + white rice).
          </li>
          <li>
            <strong>Monitor 2–3 days:</strong> Track energy, appetite, stool frequency/texture.
          </li>
          <li>
            <strong>See your vet</strong> if mucus persists &gt;48–72h, blood appears, or your dog is
            lethargic, refuses food, or vomits repeatedly.
          </li>
        </ul>
      </section>

      {/* ===== COMMUNICATION NOTE ===== */}
      <section className="max-w-3xl mx-auto mb-16 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-3">A Note on Canine Communication</h4>
        <p className="text-gray-700 leading-relaxed">
          Dogs show discomfort through physical signs — stool changes and
          vomiting are common signals. These symptoms are often manageable and
          short-lived. Take a breath, follow the steps above, and seek your vet’s
          help when red flags appear.
        </p>
      </section>

      {/* ===== QUICK SUMMARY ===== */}
      <section className="max-w-3xl mx-auto mb-16 bg-[#fffaf5] border border-[#e6dccf] p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-3">🌟 Quick Summary</h4>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li> Whole food soon after eating = likely regurgitation, not true vomiting.</li>
          <li> Elevate bowls and pace meals with slow-feeders.</li>
          <li> Smaller, more frequent portions reduce gulping.</li>
          <li> Mucousy diarrhea: think diet change, infection, or stress.</li>
          <li> Home care: short bland-diet window + hydration, then reassess.</li>
          <li> Vet if symptoms last &gt;2–3 days, worsen, or include blood/lethargy/vomiting.</li>
          <li> Stay calm and observant — your steady response helps most.</li>
        </ul>
      </section>

      {/* ===== APP BANNER ===== */}
      <section className="text-center max-w-4xl mx-auto mb-20">
        <h4 className="font-semibold mb-3 text-[#111827]">
          Continue with PetGo’s Puppy Care Guide
        </h4>
        <p className="text-gray-700 mb-10">
          Track meals, stools, and symptoms with the PetGo App — get gentle
          reminders and keep a health log for faster vet visits.
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