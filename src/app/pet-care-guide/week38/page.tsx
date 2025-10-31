"use client";

import Image from "next/image";
import Link from "next/link";

export default function Week38Page() {
  return (
    <main className="min-h-screen bg-[#F9F6F1] text-[#111827] py-16 px-6">
      {/* ===== HEADER ===== */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-2">
          Puppy Care Guide
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-[#8B6A43]">
          Week 38 – The Socialization Checkpoint
        </h2>
      </div>

      {/* ===== SMARTIE IMAGE ===== */}
      <div className="flex justify-center mb-10">
        <Image
          src="/week38mainpic.jpg"
          alt="Puppy socializing happily outdoors"
          width={600}
          height={400}
          className="rounded-2xl shadow-md object-cover"
        />
      </div>

      {/* ===== INTRO ===== */}
      <section className="text-center max-w-3xl mx-auto mb-12">
        <p className="text-gray-700 leading-relaxed">
          At 38 weeks old, your puppy’s adolescent behaviours are solidifying.
          This week marks a second socialization window — habits built now will
          influence your dog for life. Let’s evaluate progress and nurture
          confidence through positive exposure.
        </p>
        <p className="text-[#8B6A43] font-medium mt-3">
          💡 PetPro Tip: Missing this checkpoint makes future training harder.
          Proactive, calm guidance today shapes lifelong confidence.
        </p>
      </section>

      {/* ===== SELF ASSESSMENT ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">
          🚦 The Socialization Self-Assessment
        </h4>
        <p className="text-gray-700 mb-4">
          Use this quick checklist to gauge comfort levels — it’s not a test, but
          a roadmap for growth.
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Socializing with Other Dogs</li>
          <li>Positive Interactions with People</li>
          <li>Reactions to Sounds & New Places</li>
          <li>Comfort in Different Environments</li>
          <li>Tolerance of Handling Body Parts</li>
        </ul>
      </section>

      {/* ===== SOCIALIZING WITH DOGS ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">🐕 Socializing with Other Dogs</h4>
        <p className="text-gray-700 leading-relaxed mb-3">
          A well-socialized dog can be near others calmly without fear or
          aggression. Lack of exposure can cause reactivity or anxiety in
          dog-dense settings.
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-3">
          <li>
            <strong>Structured Playdates:</strong> Meet one or two gentle, known dogs.
          </li>
          <li>
            <strong>Observe Body Language:</strong> Reward loose, playful movement and
            “play bows”; note tension or tucked tails.
          </li>
          <li>
            <strong>Positive Associations:</strong> Treat calmly when another dog is seen
            from afar to link presence → reward.
          </li>
        </ul>
      </section>

      {/* ===== POSITIVE WITH PEOPLE ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-[#fffaf5] border border-[#e6dccf] p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">
          👥 Positive Interactions with People
        </h4>
        <p className="text-gray-700 leading-relaxed mb-3">
          Comfort around varied people prevents fear reactions and supports easier
          grooming & vet visits.
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-3">
          <li>
            <strong>Treat & Greet:</strong> Ask strangers to toss treats instead of direct
            touching at first.
          </li>
          <li>
            <strong>Guide Children:</strong> Teach gentle petting on back or chest — no
            over-head reaching.
          </li>
          <li>
            <strong>Build Variety:</strong> Expose to people with hats, bikes, umbrellas,
            mobility aids.
          </li>
        </ul>
      </section>

      {/* ===== REACTIONS ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">
          👂 Reactions to Sounds, Places & Handling
        </h4>
        <p className="text-gray-700 leading-relaxed mb-3">
          Confidence grows from controlled, positive exposure — never by force.
          Desensitize gently and reward curiosity.
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-3">
          <li>
            <strong>Choice Matters:</strong> Let your dog approach new sounds or objects
            voluntarily.
          </li>
          <li>
            <strong>Sound Training:</strong> Play thunder/fireworks softly during meals;
            raise volume slowly.
          </li>
          <li>
            <strong>Co-operative Care:</strong> Touch a paw → treat → repeat, teaching that
            handling = good things.
          </li>
        </ul>
        <p className="text-gray-700 text-sm">
          💡 <strong>PetPro Tip:</strong> Socialization means <em>positive</em> exposure —
          not forced tolerance.
        </p>
      </section>

                  {/* ===== PETGO SHOP ===== */}
      <section className="max-w-5xl mx-auto mb-20">
        <h4 className="font-semibold mb-3 text-[#8B6A43]">
           PetGo Shop{" "}
          <span className="text-[#111827] font-medium">
            | Healthy treats your pup will love during Week 35.
          </span>
        </h4>

        <div className="grid md:grid-cols-3 gap-8 mt-8">
          {/* Product 1 */}
          <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition flex flex-col p-6 h-full">
            <div className="w-full h-[240px] flex justify-center items-center mb-4">
              <Image
                src="/week35-product1.jpg"
                alt="Crumps' Naturals Semi Moist Chicken Mini Trainers"
                width={380}
                height={240}
                className="object-contain max-h-[220px]"
              />
            </div>
            <div className="flex-grow text-left">
              <h5 className="font-semibold text-[#111827] mb-1">
                Crumps' Naturals Semi Moist Chicken Mini Trainers 4.7 oz / 132 g
              </h5>
              <p className="text-sm text-gray-600 mb-2">Seller: Crumps' Naturals</p>
              <p className="text-[#8B6A43] font-semibold mb-3">$8.99</p>
            </div>
            <Link
              href="https://www.amazon.ca/Crumps-Naturals-Trainers-Chicken-semi-Moist/dp/B01MQU2HS6/ref=sr_1_2_sspa"
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
                src="/week35-product2.jpg"
                alt="Hill's Science Diet Soft Savory Dog Treats"
                width={380}
                height={240}
                className="object-contain max-h-[220px]"
              />
            </div>
            <div className="flex-grow text-left">
              <h5 className="font-semibold text-[#111827] mb-1">
                Hill’s Science Diet Soft Savory Dog Treats with Peanut Butter & Banana (8 oz)
              </h5>
              <p className="text-sm text-gray-600 mb-2">Seller: Hill’s Science Diet</p>
              <p className="text-[#8B6A43] font-semibold mb-3">$11.90</p>
            </div>
            <Link
              href="https://www.amazon.ca/Hills-Science-Treats-Savories-Healthy/dp/B00NMMSRJE/ref=sr_1_4_sspa"
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
                src="/week35-product3.jpg"
                alt="Crumps' Naturals Sweet Potato Fries 280 g / 9.9 oz"
                width={380}
                height={240}
                className="object-contain max-h-[220px]"
              />
            </div>
            <div className="flex-grow text-left">
              <h5 className="font-semibold text-[#111827] mb-1">
                Crumps' Naturals Sweet Potato Fries 280 g / 9.9 oz
              </h5>
              <p className="text-sm text-gray-600 mb-2">Seller: Crumps' Naturals</p>
              <p className="text-[#8B6A43] font-semibold mb-3">$16.99</p>
            </div>
            <Link
              href="https://www.amazon.ca/Crumps-Naturals-Sweet-Potato-Fries/dp/B01LZZ1N13/ref=sr_1_6"
              target="_blank"
              className="inline-block mt-auto text-center bg-[#8B6A43] text-white py-2 px-4 rounded-full hover:bg-[#735739] transition"
            >
              View on Amazon →
            </Link>
          </div>
        </div>
      </section>

      

      {/* ===== CORE PRINCIPLES ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-[#fffaf5] border border-[#e6dccf] p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">
          🧠 Core Principles of Effective Socialization
        </h4>
        <ol className="list-decimal list-inside text-gray-700 space-y-1">
          <li><strong>Patience is non-negotiable.</strong> Never rush or push past comfort.</li>
          <li><strong>Let curiosity lead.</strong> Reward voluntary exploration.</li>
          <li><strong>Mark and reward bravery.</strong> Calm interest → treat = confidence.</li>
          <li><strong>Manage the environment.</strong> Distance prevents overwhelm; end on success.</li>
        </ol>
      </section>

      {/* ===== PROFESSIONAL HELP ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">
          💡 When to Seek Professional Guidance
        </h4>
        <p className="text-gray-700 leading-relaxed mb-3">
          If your dog trembles, hides, refuses treats, or shows aggression (growling,
          snapping, lunging), contact a certified trainer or veterinary behaviourist for
          a tailored plan.
        </p>
      </section>

      {/* ===== BUILDING CONFIDENCE ===== */}
      <section className="max-w-3xl mx-auto mb-16 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-3">
          💞 Building a Confident Companion
        </h4>
        <p className="text-gray-700 leading-relaxed mb-3">
          Socialization is lifelong. Each calm, positive experience adds to your dog’s
          emotional stability. By guiding patiently, you’re building trust and ensuring a
          relaxed adult dog who feels safe in every setting.
        </p>
        <p className="text-gray-700 text-sm">
          💛 <strong>PetPro Reminder:</strong> A calm guardian builds a calm dog —
          confidence flows both ways.
        </p>
      </section>

      {/* ===== QUICK SUMMARY ===== */}
      <section className="max-w-3xl mx-auto mb-16 bg-[#fffaf5] border border-[#e6dccf] p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-3">🌟 Quick Summary</h4>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>✅ Assess honestly — find growth areas.</li>
          <li>✅ Quality over quantity — keep sessions short and positive.</li>
          <li>✅ Empower your dog to approach voluntarily.</li>
          <li>✅ Patience first — never force contact or “flood” fears.</li>
          <li>✅ Seek professional help if fear or aggression emerges.</li>
        </ul>
      </section>

      {/* ===== APP BANNER + COPYRIGHT ===== */}
      <section className="text-center max-w-4xl mx-auto mb-20">
        <h4 className="font-semibold mb-3 text-[#111827]">
          Continue with PetGo’s Puppy Care Guide
        </h4>
        <p className="text-gray-700 mb-10">
          Track socialization goals, daily walks, and training milestones easily with
          the PetGo App — your guide to confident companionship.
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
