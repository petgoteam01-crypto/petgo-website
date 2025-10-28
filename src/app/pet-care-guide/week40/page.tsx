"use client";

import Image from "next/image";
import Link from "next/link";

export default function Week40Page() {
  return (
    <main className="min-h-screen bg-[#F9F6F1] text-[#111827] py-16 px-6">
      {/* ===== HEADER ===== */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-2">
          Puppy Care Guide
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-[#8B6A43]">
          Week 40 – Understanding Your Puppy’s Sleep Patterns
        </h2>
      </div>

      {/* ===== SMARTIE IMAGE ===== */}
      <div className="flex justify-center mb-10">
        <Image
          src="/week40mainpic.jpg"
          alt="Sleeping puppy peacefully"
          width={600}
          height={400}
          className="rounded-2xl shadow-md object-cover"
        />
      </div>

      {/* ===== INTRO ===== */}
      <section className="text-center max-w-3xl mx-auto mb-12">
        <p className="text-gray-700 leading-relaxed">
          Your puppy is now ten months old — almost ready to graduate from the
          “puppy” stage! Long naps and deep sleeps are still a big part of
          healthy growth. Let’s understand how much rest is normal and when
          extra sleep might signal something more.
        </p>
      </section>

      {/* ===== SLEEP DURATION ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">
          💤 Appropriate Sleep Duration
        </h4>
        <p className="text-gray-700 leading-relaxed mb-3">
          Puppies under 12 months typically sleep <strong>16–20 hours per day</strong>.
          This high sleep requirement supports recovery and growth. As they
          approach adulthood (12–13 months), total rest time usually settles
          around 12–14 hours daily.
        </p>
        <p className="text-gray-700 text-sm">
          💡 <strong>PetPro Tip:</strong> Long sleep hours aren’t laziness — they’re vital
          for development.
        </p>
      </section>

      {/* ===== SCIENCE BEHIND SLEEP ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-[#fffaf5] border border-[#e6dccf] p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">
          🧠 The Science Behind the Snooze
        </h4>
        <p className="text-gray-700 leading-relaxed mb-3">
          Puppies burn enormous energy learning, exploring, and growing.
          During sleep, the body restores muscle tissue, the nervous system
          matures, and memories consolidate. This is why extended rest is not
          only normal — it’s essential.
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Sleep supports immune strength and muscle repair.</li>
          <li>Dreaming aids emotional regulation and learning.</li>
          <li>Consistent naps prevent overstimulation and stress.</li>
        </ul>
      </section>

      {/* ===== BOREDOM FACTOR ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">
          🐶 Beyond Growth: The Role of Boredom
        </h4>
        <p className="text-gray-700 leading-relaxed mb-3">
          Sometimes long sleep stems from a lack of stimulation, especially for
          dogs left alone for long periods. Sleep becomes their way to pass the
          time.
        </p>
        <p className="text-gray-700 text-sm">
          💡 <strong>PetPro Tip:</strong> Provide enrichment toys or gentle background
          music to keep your dog mentally engaged during alone time.
        </p>
      </section>

      {/* ===== WHEN TO WORRY ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-[#fffaf5] border border-[#e6dccf] p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">
          ⚠️ When to Be Concerned
        </h4>
        <p className="text-gray-700 leading-relaxed mb-3">
          Excessive sleep paired with other symptoms could signal illness.
          Contact your veterinarian if you notice:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Loss of appetite or refusal to eat.</li>
          <li>Lethargy or weakness when awake.</li>
          <li>Vomiting or diarrhea.</li>
          <li>Whining, pain, or discomfort on movement.</li>
        </ul>
        <p className="text-gray-700 text-sm mt-3">
          A healthy puppy wakes easily and is bright once active; lethargy or
          disinterest is a red flag.
        </p>
      </section>

      {/* ===== CHERISH MOMENTS ===== */}
      <section className="max-w-3xl mx-auto mb-16 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-3">
          💤 Cherishing the Quiet Moments
        </h4>
        <p className="text-gray-700 leading-relaxed mb-3">
          Few sights are sweeter than a peacefully sleeping pup. Those twitching
          paws and soft snores mark growth and comfort. Create a dedicated
          sleeping spot — a supportive bed in a quiet, draft-free corner.
        </p>
        <p className="text-gray-700 text-sm">
          💛 <strong>PetPro Tip:</strong> Good rest = better mood and learning.
          A cozy bed supports deep, restorative sleep.
        </p>
      </section>

            {/* ===== PETGO SHOP ===== */}
      <section className="max-w-5xl mx-auto mb-20">
        <h4 className="font-semibold mb-3 text-[#8B6A43]">
          PetGo Shop{" "}
          <span className="text-[#111827] font-medium">
            | Create a cozy sleep space for your pup during Week 40.
          </span>
        </h4>

        <p className="text-gray-700 mb-8">
          💡 <strong>PetGo Comfort Tip:</strong> A supportive bed and soft blanket help improve joint
          health, reduce anxiety, and promote deeper sleep — especially as your puppy grows rapidly.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-8">
          {/* Product 1 */}
          <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition flex flex-col p-6 h-full">
            <div className="w-full h-[240px] flex justify-center items-center mb-4">
              <Image
                src="/week40-product1.jpg"
                alt="EHEYCIGA Memory Foam Orthopedic Large Dog Bed"
                width={380}
                height={240}
                className="object-contain max-h-[220px]"
              />
            </div>
            <div className="flex-grow text-left">
              <h5 className="font-semibold text-[#111827] mb-1">
                EHEYCIGA Memory Foam Orthopedic Large Dog Bed with Sides, Waterproof Liner
              </h5>
              <p className="text-sm text-gray-600 mb-2">Seller: EHEYCIGA</p>
              <p className="text-[#8B6A43] font-semibold mb-3">$52.99</p>
            </div>
            <Link
              href="https://www.amazon.ca/EHEYCIGA-Orthopedic-Non-Slip-Waterproof-Removable/dp/B0BMLP2Y3M/ref=sr_1_2_sspa"
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
                src="/week40-product2.jpg"
                alt="Bedsure Small Dog Bed Washable - Fluffy Donut Cuddler"
                width={380}
                height={240}
                className="object-contain max-h-[220px]"
              />
            </div>
            <div className="flex-grow text-left">
              <h5 className="font-semibold text-[#111827] mb-1">
                Bedsure Small Dog Bed Washable – Self-Calming Fluffy Donut Cuddler (23 inches)
              </h5>
              <p className="text-sm text-gray-600 mb-2">Seller: Bedsure</p>
              <p className="text-[#8B6A43] font-semibold mb-3">$39.99</p>
            </div>
            <Link
              href="https://www.amazon.ca/Bedsure-Small-Dog-Bed-Washable/dp/B08CXRHYXT/ref=sr_1_3_sspa"
              target="_blank"
              className="inline-block mt-auto text-center bg-[#8B6A43] text-white py-2 px-4 rounded-full hover:bg-[#735739] transition"
            >
              View on Amazon →
            </Link>
          </div>

          {/* Product 3 */}
          <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition flex flex-col p-6 h-full">
            <div className="w-full h-[240px] flex justify-center items-center mb-4">
              <Image
                src="/week40-product3.jpg"
                alt="LINENLUX Soft Dog Blanket Washable Warm Fleece"
                width={380}
                height={240}
                className="object-contain max-h-[220px]"
              />
            </div>
            <div className="flex-grow text-left">
              <h5 className="font-semibold text-[#111827] mb-1">
                LINENLUX 3-Pack Soft Dog Blankets – Washable Warm Fleece, Flannel Beige (Large)
              </h5>
              <p className="text-sm text-gray-600 mb-2">Seller: LINENLUX</p>
              <p className="text-[#8B6A43] font-semibold mb-3">$31.99</p>
            </div>
            <Link
              href="https://www.amazon.ca/LINENLUX-Blanket-Washable-Blankets-Calming/dp/B0DSZR68K4/ref=sr_1_60_sspa"
              target="_blank"
              className="inline-block mt-auto text-center bg-[#8B6A43] text-white py-2 px-4 rounded-full hover:bg-[#735739] transition"
            >
              View on Amazon →
            </Link>
          </div>
        </div>
      </section>



      {/* ===== QUICK SUMMARY ===== */}
      <section className="max-w-3xl mx-auto mb-16 bg-[#fffaf5] border border-[#e6dccf] p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-3">🌟 Quick Summary</h4>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li> 16–20 hours of sleep per day is normal for puppies under 12 months.</li>
          <li> Rest fuels growth, brain development, and recovery.</li>
          <li> Boredom naps may signal a need for more enrichment.</li>
          <li> Watch for illness signs like vomiting, lethargy, or poor appetite.</li>
          <li> Provide a warm, comfortable, quiet sleeping area.</li>
          <li> Enjoy this fleeting stage — the calm won’t last forever!</li>
        </ul>
      </section>

      {/* ===== APP BANNER ===== */}
      <section className="text-center max-w-4xl mx-auto mb-20">
        <h4 className="font-semibold mb-3 text-[#111827]">
          Continue with PetGo’s Puppy Care Guide
        </h4>
        <p className="text-gray-700 mb-10">
          Track your puppy’s sleep, activity, and wellness with the PetGo App —
          your digital companion for balanced care.
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
