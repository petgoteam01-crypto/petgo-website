"use client";

import { useState } from "react";
import Link from "next/link";

export default function PetCareGuidePage() {
  const [activePet, setActivePet] = useState("dog");

  return (
    <main className="min-h-screen bg-[#F9F6F1] text-center py-20 px-6">
      {/* ===== TITLE ===== */}
      <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#111827] mb-4">
        Pet Care Guide
      </h1>

      {/* ===== SHORT DESCRIPTION ===== */}
      <p className="text-gray-700 text-base md:text-lg mb-12 max-w-2xl mx-auto">
        Smart care starts here — guide your pet's health with confidence.
      </p>

      {/* ===== PET SELECTOR ===== */}
      <div className="flex justify-center gap-4 mb-14">
        <button
          onClick={() => setActivePet("dog")}
          className={`px-8 py-3 rounded-full border text-base font-medium transition-all ${
            activePet === "dog"
              ? "bg-[#8B6A43] text-white border-[#8B6A43]"
              : "text-[#8B6A43] border-[#8B6A43] hover:bg-[#8B6A43]/10"
          }`}
        >
          Dog
        </button>

        <button
          onClick={() => setActivePet("cat")}
          className={`px-8 py-3 rounded-full border text-base font-medium transition-all ${
            activePet === "cat"
              ? "bg-[#8B6A43] text-white border-[#8B6A43]"
              : "text-[#8B6A43] border-[#8B6A43] hover:bg-[#8B6A43]/10"
          }`}
        >
          Cat
        </button>
      </div>

      {/* ===== CONDITIONAL CONTENT ===== */}
      {activePet === "dog" ? (
  <section className="max-w-4xl mx-auto flex justify-center mb-14">
    <img
      src="/smartie-card.jpg"
      alt="Smartie the puppy care guide hero card"
      className="rounded-2xl shadow-md w-full max-w-3xl object-cover"
    />
  </section>
) : (

        <section className="flex flex-col items-center justify-center mt-10">
          <div className="relative bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg p-10 max-w-md mx-auto">
            <h2 className="text-3xl font-serif font-bold text-[#4B3A2E] mb-4">
              Coming Soon
            </h2>
            <p className="text-gray-700 mb-6">
              Our Cat Care Guide is under development — designed to bring you
              expert insights, tips, and personalized care for your feline
              friend. Stay tuned!
            </p>
            <div className="inline-block rounded-full border border-[#8B6A43] px-6 py-2 text-[#8B6A43] font-medium hover:bg-[#8B6A43] hover:text-white transition">
              Notify Me When Available
            </div>
          </div>
        </section>
      )}

      {/* ===== PET CARE TIMELINE SECTION ===== */}
      <section className="mt-24 max-w-4xl mx-auto text-left">
        <h2 className="text-3xl font-serif font-bold text-[#111827] mb-10 text-center">
          Puppy Care Roadmap
        </h2>

        <div className="space-y-14">
          {/* === 1. Birth of New Life === */}
          <div>
            <h3 className="text-lg font-semibold text-[#8B6A43] mb-4">
              The Beginning of New Life
            </h3>

            <div className="bg-white rounded-2xl shadow-sm divide-y">
              {[
                {
                  week: "Week 1–3 of Pregnancy",
                  desc: "A precious new life is on its way — the journey of love begins.",
                  href: "/pet-care-guide/early-pregnancy/week1-3",
                },
                {
                  week: "Week 4–6 of Pregnancy",
                  desc: "Your little one is growing stronger each day, nurtured by your care and warmth.",
                  href: "/pet-care-guide/early-pregnancy/week4-6",
                },
                {
                  week: "Week 7–9 of Pregnancy",
                  desc: "The special day is getting closer — soon, you'll welcome a new member into your family.",
                  href: "/pet-care-guide/early-pregnancy/week7-9",
                },
              ].map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href}
                  className="flex justify-between items-center p-5 hover:bg-[#F9F6F1]/80 transition cursor-pointer"
                >
                  <div>
                    <p className="text-gray-800 font-medium">{item.week}</p>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                  <span className="text-[#8B6A43] text-lg font-bold">{">"}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* === 2. Hello Little One === */}
          <div>
            <h3 className="text-lg font-semibold text-[#8B6A43] mb-4">
              Hello, Little One!
            </h3>
            <div className="bg-white rounded-2xl shadow-sm divide-y">
              {[
                {
                  week: "Week 1",
                  desc: "A precious new life is on its way — the journey of love begins.",
                  href: "/pet-care-guide/week1",
                },
                {
                  week: "Week 2",
                  desc: "Your little one is growing stronger each day, nurtured by your care and warmth.",
                  href: "/pet-care-guide/week2",
                },
                {
                  week: "Week 3",
                  desc: "The special day is getting closer — soon, you'll welcome a new member into your family.",
                  href: "/pet-care-guide/week3",
                },
                {
                  week: "Week 4",
                  desc: "The special day is getting closer — soon, you'll welcome a new member into your family.",
                  href: "/pet-care-guide/week4",
                },
              ].map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href}
                  className="flex justify-between items-center p-5 hover:bg-[#F9F6F1]/80 transition cursor-pointer rounded-xl"
                >
                  <div>
                    <p className="text-gray-800 font-medium">{item.week}</p>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                  <span className="text-[#8B6A43] text-lg font-bold">{">"}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* === 3. Step by Step === */}
          <div>
            <h3 className="text-lg font-semibold text-[#8B6A43] mb-4">
              Growing Step by Step
            </h3>
            <div className="bg-white rounded-2xl shadow-sm divide-y">
              {[
                { week: "Week 5", desc: "Your little one is getting ready to explore the world and start learning about social connections.", href: "/pet-care-guide/week5" },
                { week: "Week 6", desc: "Here's a guide to all the essential items your puppy will need during this stage.", href: "/pet-care-guide/week6"},
                { week: "Week 7", desc: "Let's go over the basic care tips that are especially important right now.", href: "/pet-care-guide/week7" },
                { week: "Week 8", desc: "It's the perfect time to begin gentle potty training — we'll show you how.", href: "/pet-care-guide/week8" },
              ].map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href || "#"}
                  className="flex justify-between items-center p-5 hover:bg-[#F9F6F1]/80 transition cursor-pointer"
                >
                  <div>
                    <p className="text-gray-800 font-medium">{item.week}</p>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                  <span className="text-[#8B6A43] text-lg font-bold">{">"}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* === 4. Potty Training Begins === */}
<div>
  <h3 className="text-lg font-semibold text-[#8B6A43] mb-4">
    Potty Training Made Easy
  </h3>
  <p className="text-gray-600 text-sm mb-6 max-w-2xl">
    PetGo recommends these high-quality training pads — delivered straight to your
    door with next-day convenience.
  </p>

  {/* Product Recommendation Card */}
  <div className="bg-white rounded-2xl shadow-sm p-5 flex items-center gap-5 mb-6">
    <img
      src="/amazonbasics-training-pads.jpg"
      alt="Amazon Basics Dog and Puppy Pads"
      className="w-20 h-20 rounded-xl object-cover"
    />
    <div className="flex-1">
      <p className="text-sm text-gray-500 mb-1">Amazon Basics</p>
      <p className="font-medium text-gray-800 text-sm">
        Amazon Basics Dog and Puppy Pads, Leak-Proof 5-Layer Pee Pads with Quick-Dry Surface
        for Potty Training, Regular (22 x 22 Inches) – Pack of 100
      </p>
      <a
        href="https://www.amazon.ca/Amazon-Basics-Leak-proof-Quick-dry-Training/dp/B00MW8G62E/ref=sr_1_1_ffob_sspa?crid=1R4E8FVPBE1P9&dib=eyJ2IjoiMSJ9.5foB-fqEph-B95VhBfqTAXZXIl8JHN3AWFzy1Ut3x7Yaej5Bte7f1o7vTxTeNglI7BOGPvzDM7JBORNp_vIS8ImSqPLLkRu2yM7jNqRwjSI4kw_wwlrgSO5M_kNDoZc3mMDBGxIAddG-EyLjBv22BQZdxLxFOdulb9Za0XUmbF6vU4vc7_etdyyggqxnnY8blcrOeYrFl6mYV3JkTRfbMzm4EzRfq1HxoyWXF_gwcyOZybmcHeqkwhFZlVXQA6bUG1Cwy7o4NNbIcflOwUwJcW6eppPdjt6D5UnuHwp9_R4.MUQCABgDdrjhL54I-WzHP5Ds8RWPgOcblVTzY7UT6nQ&dib_tag=se&keywords=dog%2Btraining%2Bpads&qid=1760676561&sprefix=dog%2Btraining%2Bpads%2Caps%2C108&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#8B6A43] text-sm mt-1 font-medium hover:underline"
      >
        Buy Now &gt;
      </a>
    </div>
  </div>
</div>


          {/* === 5. Growing Strong === */}
<div>
  <h3 className="text-lg font-semibold text-[#8B6A43] mb-4">
    Growing Stronger Every Day
  </h3>
  <div className="bg-white rounded-2xl shadow-sm divide-y">
    {[
      {
        week: "Week 9",
        desc: "It's time to transition to regular food — your puppy is ready for the next step!",
        href: "/pet-care-guide/week9",
      },
      {
        week: "Week 10",
        desc: "Puppy biting is common — here's what you can do about it.",
        href: "/pet-care-guide/week10",
      },
      {
        week: "Week 11",
        desc: "Time to register your furry friend as a companion pet — it's an important milestone.",
        href: "/pet-care-guide/week11",
      },
      {
        week: "Week 12",
        desc: "Here's everything you need to know before and after vaccines.",
        href: "/pet-care-guide/week12",
      },
    ].map((item, idx) => (
      <Link
        key={idx}
        href={item.href}
        className="flex justify-between items-center p-5 hover:bg-[#F9F6F1]/80 transition cursor-pointer"
      >
        <div>
          <p className="text-gray-800 font-medium">{item.week}</p>
          <p className="text-gray-600 text-sm">{item.desc}</p>
        </div>
        <span className="text-[#8B6A43] text-lg font-bold">{">"}</span>
      </Link>
    ))}
  </div>
</div>


{/* === 6. Puppy Food Recommendation === */}
<div>
  <h3 className="text-lg font-semibold text-[#8B6A43] mb-4">
    Our Puppy Food Picks
  </h3>

  <div className="bg-white rounded-2xl shadow-sm p-5 flex items-center gap-5">
    <img
      src="/openfarm-puppy-food.jpg"
      alt="Open Farm Grain-Free Puppy Food"
      className="w-20 h-20 rounded-xl object-cover"
    />
    <div className="flex-1">
      <p className="text-sm text-gray-500 mb-1">Open Farm</p>
      <p className="font-medium text-gray-800 text-sm">
        Open Farm, Grain-Free Dry Dog Food for Puppies, Protein-Packed Kibble, Sustainably & Ethically Sourced Ingredients, Non-GMO Veggies & Superfoods, Chicken & Salmon Puppy Recipe, 4lb Bag
      </p>
      <a
        href="https://www.amazon.ca/Open-Farm-Grain-Free-Superfoods-Preservatives/dp/B0BJ36WGT1/ref=sr_1_6?crid=3MP1JPZESOVW3&dib=eyJ2IjoiMSJ9.VSVZA7jB8lyL4Tg_QDEDBbt0bJ-xya0PNNu8AdGw8F3i90lMBokZfkXG1AH_czXv6oK92x4htS1UNCMRNz9Y3_n_JzJBVucaiOwpoG3TBXyxjz3DEJf7P30qbo3lNAAfZlnnPFpQ3eDz4ILHax2X86EMqbkxWyXfQUyiXI_EWwJQD7KbOw7MHyypcs_4TAb8IowlOnPhApyIHp0UB8RNCQ6RH65H1vYyt28h_RX-YyDynb064p9DsiwfhkjTgbFEVZwZBlpKDw9RQlHT2t2zP_rU0bibEoUFrQ5DyWHy6Zw.O10mnfYdw8sKBcs4R9d91_CQnHcJHES7PJIiY3fTxgE&dib_tag=se&keywords=open%2Bfarm%2Bpuppy%2Bfood&qid=1760676822&sprefix=open%2Bfarm%2Bpuppy%2Bfoo%2Caps%2C106&sr=8-6&th=1"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#8B6A43] text-sm mt-1 font-medium hover:underline"
      >
        Buy Now &gt;
      </a>
    </div>
  </div>
</div>



          {/* === 7. Welcome to Puppyhood! === */}
<div>
  <h3 className="text-lg font-semibold text-[#8B6A43] mb-4">
    Welcome to Puppyhood!
  </h3>
  <div className="bg-white rounded-2xl shadow-sm divide-y">
    {[
      {
        week: "Week 13",
        desc: "Everything you need to know about potty training",
        href: "/pet-care-guide/week13",
      },
      {
        week: "Week 14",
        desc: "It's walk time — here's how to train your puppy for outdoor walks!",
        href: "/pet-care-guide/week14",
      },
      {
        week: "Week 15",
        desc: "Teething & oral care tips for healthy little teeth",
        href: "/pet-care-guide/week15",
      },
      {
        week: "Week 16",
        desc: "Check your puppy's vaccination and antibody test schedule!",
        href: "/pet-care-guide/week16",
      },
    ].map((item, idx) => (
      <Link
        key={idx}
        href={item.href}
        className="flex justify-between items-center p-5 hover:bg-[#F9F6F1]/80 transition cursor-pointer"
      >
        <div>
          <p className="text-gray-800 font-medium">{item.week}</p>
          <p className="text-gray-600 text-sm">{item.desc}</p>
        </div>
        <span className="text-[#8B6A43] text-lg font-bold">{">"}</span>
      </Link>
    ))}
  </div>
</div>


          {/* === 8. Potty Training Pads === */}
          <div>
            <h3 className="text-lg font-semibold text-[#8B6A43] mb-4">
              If potty training is going well, it's time to switch to a training pads!
            </h3>

            {/* Product Recommendation Card */}
  <div className="bg-white rounded-2xl shadow-sm p-5 flex items-center gap-5 mb-6">
    <img
      src="/amazonbasics-training-pads.jpg"
      alt="Amazon Basics Dog and Puppy Pads"
      className="w-20 h-20 rounded-xl object-cover"
    />
    <div className="flex-1">
      <p className="text-sm text-gray-500 mb-1">Amazon Basics</p>
      <p className="font-medium text-gray-800 text-sm">
        Amazon Basics Dog and Puppy Pads, Leak-Proof 5-Layer Pee Pads with Quick-Dry Surface
        for Potty Training, Regular (22 x 22 Inches) – Pack of 100
      </p>
      <a
        href="https://www.amazon.ca/Amazon-Basics-Leak-proof-Quick-dry-Training/dp/B00MW8G62E/ref=sr_1_1_ffob_sspa?crid=1R4E8FVPBE1P9&dib=eyJ2IjoiMSJ9.5foB-fqEph-B95VhBfqTAXZXIl8JHN3AWFzy1Ut3x7Yaej5Bte7f1o7vTxTeNglI7BOGPvzDM7JBORNp_vIS8ImSqPLLkRu2yM7jNqRwjSI4kw_wwlrgSO5M_kNDoZc3mMDBGxIAddG-EyLjBv22BQZdxLxFOdulb9Za0XUmbF6vU4vc7_etdyyggqxnnY8blcrOeYrFl6mYV3JkTRfbMzm4EzRfq1HxoyWXF_gwcyOZybmcHeqkwhFZlVXQA6bUG1Cwy7o4NNbIcflOwUwJcW6eppPdjt6D5UnuHwp9_R4.MUQCABgDdrjhL54I-WzHP5Ds8RWPgOcblVTzY7UT6nQ&dib_tag=se&keywords=dog%2Btraining%2Bpads&qid=1760676561&sprefix=dog%2Btraining%2Bpads%2Caps%2C108&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#8B6A43] text-sm mt-1 font-medium hover:underline"
      >
        Buy Now &gt;
      </a>
    </div>
  </div>
</div>

          {/* === 9. Welcome to Puppyhood! === */}
<div>
  <h3 className="text-lg font-semibold text-[#8B6A43] mb-4">
    Welcome to Puppyhood!
  </h3>
  <div className="bg-white rounded-2xl shadow-sm divide-y">
    {[
      {
        week: "Week 17",
        desc: "Worried about adolescence? We're here to help!",
        href: "/pet-care-guide/week17",
      },
      {
        week: "Week 18",
        desc: "Teething toys your puppy needs — how to prepare them properly",
        href: "/pet-care-guide/week18",
      },
      {
        week: "Week 19",
        desc: "Second growth stage — see how your pup is changing!",
        href: "/pet-care-guide/week19",
      },
      {
        week: "Week 20",
        desc: "First bath time — follow these steps to make it easy and stress-free!",
        href: "/pet-care-guide/week20",
      },
    ].map((item, idx) => (
      <Link
        key={idx}
        href={item.href}
        className="flex justify-between items-center p-5 hover:bg-[#F9F6F1]/80 transition cursor-pointer"
      >
        <div>
          <p className="text-gray-800 font-medium">{item.week}</p>
          <p className="text-gray-600 text-sm">{item.desc}</p>
        </div>
        <span className="text-[#8B6A43] text-lg font-bold">{">"}</span>
      </Link>
    ))}
  </div>
</div>


{/* === 10. Neck Collar === */}
<div>
  <h3 className="text-lg font-semibold text-[#8B6A43] mb-4">
    Prepare a neck collar in advance — it's essential before neutering.
  </h3>

  {/* Product Recommendation Card */}
  <div className="bg-white rounded-2xl shadow-sm p-5 flex items-center gap-5 mb-6">
    <img
      src="/supet-dog-cone.jpg"
      alt="Supet Dog Cone Collar"
      className="w-20 h-20 rounded-xl object-cover"
    />
    <div className="flex-1">
      <p className="text-sm text-gray-500 mb-1">Supet</p>
      <p className="font-medium text-gray-800 text-sm">
        Supet Dog Cone Collar to Stop Licking, Adjustable Recovery Elizabeth Head Collar
        After Surgery for Large Medium Small Dogs (S)
      </p>
      <a
        href="https://www.amazon.ca/Supet-Adjustable-Comfortable-Anti-Bite-Practical/dp/B0CMH234NR/ref=sr_1_17?crid=1CKDGJDWZC2FH&dib=eyJ2IjoiMSJ9.fzOVuVP1A52m5WZb4Ys7-jWqRg-gz8FlzzalMG0U6Z3Hth8zHNrO3BKMsVzz6qm_CXWjoE5VPM1miSbqEQsU0-qUzKqg2G2XMJ7KPZdlOnK1IBrm4I4kmfTmw65nm_HrE5zqRC-sx37VH1GnrpSBvPynHAnEt-5j0l87yqA7j_ua948HZb2kKyVaw7sjs-bqKZDQmeM6RaWdm16sVTbxKjbEocfp4eGBf19z3xCmOWhMNtBaTcGg53jZp9z1MMwaQM4rt9_WqTuGFI-U591e7gyd-owfpEtcs6SKZo4QXok.jguJ8_ad6HWeJo0BRVKyZPtW3UssvwuDogRnClZPp1o&dib_tag=se&keywords=neck%2Bcollar%2Bfor%2Bdogs&qid=1760677078&sprefix=neck%2Bcollar%2Caps%2C143&sr=8-17&th=1"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#8B6A43] text-sm mt-1 font-medium hover:underline"
      >
        Buy Now &gt;
      </a>
    </div>
  </div>
</div>


          {/* === 11. Time for Consistent Training === */}
<div>
  <h3 className="text-lg font-semibold text-[#8B6A43] mb-4">
    Time for Consistent Training
  </h3>
  <div className="bg-white rounded-2xl shadow-sm divide-y">
    {[
      {
        week: "Week 21",
        desc: "Is it time to switch your puppy's food?",
        href: "/pet-care-guide/week21",
      },
      {
        week: "Week 22",
        desc: "If your puppy is shedding a lot, take care of their skin and coat.",
        href: "/pet-care-guide/week22",
      },
      {
        week: "Week 23",
        desc: "Adolescence has officially begun!",
        href: "/pet-care-guide/week23",
      },
      {
        week: "Week 24",
        desc: "How should you approach all aspects of puppy training?",
        href: "/pet-care-guide/week24",
      },
    ].map((item, idx) => (
      <Link
        key={idx}
        href={item.href}
        className="flex justify-between items-center p-5 hover:bg-[#F9F6F1]/80 transition cursor-pointer"
      >
        <div>
          <p className="text-gray-800 font-medium">{item.week}</p>
          <p className="text-gray-600 text-sm">{item.desc}</p>
        </div>
        <span className="text-[#8B6A43] text-lg font-bold">{">"}</span>
      </Link>
    ))}
  </div>
</div>



          {/* === 12. Rambunctious Life with Your Puppy === */}
<div>
  <h3 className="text-lg font-semibold text-[#8B6A43] mb-4">
    Rambunctious Life with Your Puppy
  </h3>
  <div className="bg-white rounded-2xl shadow-sm divide-y">
    {[
      {
        week: "Week 25",
        desc: "Your puppy speaks through actions! – Part 1",
        href: "/pet-care-guide/week25",
      },
      {
        week: "Week 26",
        desc: "Your puppy speaks through actions! – Part 2",
        href: "/pet-care-guide/week26",
      },
      {
        week: "Week 27",
        desc: "Check your puppy's feeding amount during this growth stage.",
        href: "/pet-care-guide/week27",
      },
      {
        week: "Week 28",
        desc: "Time to tidy up — grooming and paw care are essential!",
        href: "/pet-care-guide/week28",
      },
    ].map((item, idx) => (
      <Link
        key={idx}
        href={item.href}
        className="flex justify-between items-center p-5 hover:bg-[#F9F6F1]/80 transition cursor-pointer"
      >
        <div>
          <p className="text-gray-800 font-medium">{item.week}</p>
          <p className="text-gray-600 text-sm">{item.desc}</p>
        </div>
        <span className="text-[#8B6A43] text-lg font-bold">{">"}</span>
      </Link>
    ))}
  </div>
</div>



{/* === 13. Brush Product === */}
<div>
  <h3 className="text-lg font-semibold text-[#8B6A43] mb-4">
    Keep your puppy's shine for life with just a few gentle brushes!
  </h3>

  {/* Product Recommendation Card */}
  <div className="bg-white rounded-2xl shadow-sm p-5 flex items-center gap-5 mb-6">
    <img
      src="/ace2ace-dog-brush.jpg"
      alt="ACE2ACE Dog Brush for Shedding"
      className="w-20 h-20 rounded-xl object-cover"
    />
    <div className="flex-1">
      <p className="text-sm text-gray-500 mb-1">ACE2ACE</p>
      <p className="font-medium text-gray-800 text-sm">
        ACE2ACE Dog Brush, Cat Brush for Shedding Long and Short Haired, Self-Cleaning Dog Slicker Brush,
        Removes Loose Fur for Puppy, Cockapoo, Labrador, Golden Retriever, Pomeranian, Poodle, Rabbits, Blue
      </p>
      <a
        href="https://www.amazon.ca/ACE2ACE-Grooming-Cleaning-Shedding-Undercoat/dp/B08881PMQB/ref=sr_1_2_sspa?crid=E9ZUPKOMCZW0&dib=eyJ2IjoiMSJ9.3XhMPZUj6XsGPYFV21ftVMDIvB7MPp1vgxsXWeL8Gm-8Gdj6QYJcw7PoAShh256nd3QptJUyD27GrYWrcJ8EDb4PWN0lrK2Ms2f5s9ifbN15MnWGX-SAJhZ_qfpCrajVfyb7u8EopfOJnCrOd3FDUDA8uQJ55JyxJnVGlKh2OjbfADwGOcYY5IYjHZkeUSdvw5L72Up18JM7GfV-mIuz4DE-V9ia9wUQZuzHckMWlVRzcGDKWVnH1DWilbURn6fyCyOmupCBc5KA43lETUNegmEtPHuaBPHAG4o5-ZBUuhQ.3KnoDRnDNzqd4GFBpHV21W68RZJro1bd9cn_uipAOhw&dib_tag=se&keywords=dog%2Bshedding%2Bbrush&qid=1760677249&sprefix=dog%2Bshedding%2Bbrush%2Caps%2C107&sr=8-2-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#8B6A43] text-sm mt-1 font-medium hover:underline"
      >
        Buy Now &gt;
      </a>
    </div>
  </div>
</div>


          {/* === 14. Growing Day by Day! === */}
<div>
  <h3 className="text-lg font-semibold text-[#8B6A43] mb-4">
    Growing Day by Day!
  </h3>
  <div className="bg-white rounded-2xl shadow-sm divide-y">
    {[
      {
        week: "Week 29",
        desc: "Check for any retained baby teeth!",
        href: "/pet-care-guide/week29",
      },
      {
        week: "Week 30",
        desc: "We'll show you how to prevent tear stains early on",
        href: "/pet-care-guide/week30",
      },
      {
        week: "Week 31",
        desc: "How's your puppy's walking going? Let's review walk training.",
        href: "/pet-care-guide/week31",
      },
      {
        week: "Week 32",
        desc: "Curious about your puppy's personality? Discover their MBTI!",
        href: "/pet-care-guide/week32",
      },
    ].map((item, idx) => (
      <Link
        key={idx}
        href={item.href}
        className="flex justify-between items-center p-5 hover:bg-[#F9F6F1]/80 transition cursor-pointer"
      >
        <div>
          <p className="text-gray-800 font-medium">{item.week}</p>
          <p className="text-gray-600 text-sm">{item.desc}</p>
        </div>
        <span className="text-[#8B6A43] text-lg font-bold">{">"}</span>
      </Link>
    ))}
  </div>
</div>


{/* === 15. Wet Food for Puppy === */}
<div>
  <h3 className="text-lg font-semibold text-[#8B6A43] mb-4">
    How about a customized wet food menu for your fast-growing puppy?
  </h3>

  {/* Product Recommendation Card */}
  <div className="bg-white rounded-2xl shadow-sm p-5 flex items-center gap-5 mb-6">
    <img
      src="/purinaone-wet-puppyfood.jpg"
      alt="Purina ONE +Plus Classic Ground Wet Puppy Food"
      className="w-20 h-20 rounded-xl object-cover"
    />
    <div className="flex-1">
      <p className="text-sm text-gray-500 mb-1">Purina ONE</p>
      <p className="font-medium text-gray-800 text-sm">
        Purina ONE +Plus Classic Ground Wet Puppy Food, Lamb & Long Grain Rice Entree – 368 g Can (12 Pack)
      </p>
      <a
        href="https://www.amazon.ca/Purina-ONE-Healthy-Classic-Ground/dp/B0C6V18Z1D/ref=sr_1_5?crid=2GSAZ93JBGKOD&dib=eyJ2IjoiMSJ9.Mh28z_LxhtBN8EY26Z9oxla7jInS1KAkCzP1rNIDdkRPdQCN7ylDhZpQIxz_w_RWb3YPCgK3tWZik58TOpz6VW8ERLIObE6OJ-QwkcBjp5s14-oBLnmSONhqh4boqOLzcUvFpJeK2keFYIpG1yoGq4If_8tDQW113946ECo59m0WnPsiCobMQk1GrVSZTrAj10UIIvKgaHxNaqA92sbPTA6THqHYO7xaf3dCTUP_cJ5N1aMMDnlNS30te8hNRDck6iW4c8AliewKqLkMbg_d3Q2pzwQSgYdk-ojABwbGdWA.58DOXlt2dgiRaq_h-AAwmQFoPEI7cLCFzzXijNwOhdE&dib_tag=se&keywords=wet+puppy+food&qid=1760677476&rdc=1&sprefix=wet+puppy+foo%2Caps%2C101&sr=8-5"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#8B6A43] text-sm mt-1 font-medium hover:underline"
      >
        Buy Now &gt;
      </a>
    </div>
  </div>
</div>


          {/* === 16. The Most Challenging Stage === */}
<div>
  <h3 className="text-lg font-semibold text-[#8B6A43] mb-4">
    The Most Challenging Stage of Puppy Care — You've Got This!
  </h3>
  <div className="bg-white rounded-2xl shadow-sm divide-y">
    {[
      {
        week: "Week 33",
        desc: "What's the difference between internal parasites and heartworms?",
        href: "/pet-care-guide/week33",
      },
      {
        week: "Week 34",
        desc: "You're in one of the toughest stages of puppy care right now.",
        href: "/pet-care-guide/week34",
      },
      {
        week: "Week 35",
        desc: "How to feed treats and supplements the right way!",
        href: "/pet-care-guide/week35",
      },
      {
        week: "Week 36",
        desc: "Check your puppy's shoulder blades — let's do a self-check together!",
        href: "/pet-care-guide/week36",
      },
    ].map((item, idx) => (
      <Link
        key={idx}
        href={item.href}
        className="flex justify-between items-center p-5 hover:bg-[#F9F6F1]/80 transition cursor-pointer"
      >
        <div>
          <p className="text-gray-800 font-medium">{item.week}</p>
          <p className="text-gray-600 text-sm">{item.desc}</p>
        </div>
        <span className="text-[#8B6A43] text-lg font-bold">{">"}</span>
      </Link>
    ))}
  </div>
</div>


          {/* === 17. Understand Your Puppy Better === */}
<div>
  <h3 className="text-lg font-semibold text-[#8B6A43] mb-4">
    Understand Your Puppy Better
  </h3>
  <div className="bg-white rounded-2xl shadow-sm divide-y">
    {[
      {
        week: "Week 37",
        desc: "Why does my puppy lift their leg when they rest?",
        href: "/pet-care-guide/week37",
      },
      {
        week: "Week 38",
        desc: "How's social training going? Let's do a quick progress check!",
        href: "/pet-care-guide/week38",
      },
      {
        week: "Week 39",
        desc: "If your puppy has been neutered, here's what to check afterward!",
        href: "/pet-care-guide/week39",
      },
      {
        week: "Week 40",
        desc: "Why does my puppy sleep almost all day?",
        href: "/pet-care-guide/week40",
      },
    ].map((item, idx) => (
      <Link
        key={idx}
        href={item.href}
        className="flex justify-between items-center p-5 hover:bg-[#F9F6F1]/80 transition cursor-pointer"
      >
        <div>
          <p className="text-gray-800 font-medium">{item.week}</p>
          <p className="text-gray-600 text-sm">{item.desc}</p>
        </div>
        <span className="text-[#8B6A43] text-lg font-bold">{">"}</span>
      </Link>
    ))}
  </div>
</div>



{/* === 18. Natural Snack === */}
<div>
  <h3 className="text-lg font-semibold text-[#8B6A43] mb-4">
    A Natural Snack They Can Enjoy on Their Own!
  </h3>

  {/* Product Recommendation Card */}
  <div className="bg-white rounded-2xl shadow-sm p-5 flex items-center gap-5 mb-6">
    <img
      src="/crumps-naturals-beef-liver.jpg"
      alt="Crumps' Naturals Beef Liver Bites for Pets"
      className="w-20 h-20 rounded-xl object-cover"
    />
    <div className="flex-1">
      <p className="text-sm text-gray-500 mb-1">Crumps' Naturals</p>
      <p className="font-medium text-gray-800 text-sm">
        Crumps' Naturals Beef Liver Bites for Pets, 4.7-Ounce
      </p>
      <a
        href="https://www.amazon.ca/Crumps-Naturals-Liver-Bites-4-7-Ounce/dp/B00B2F4R4C/ref=sr_1_1_sspa?crid=3VMH91AC0ODID&dib=eyJ2IjoiMSJ9.gfwB3eNXAlRN4FfMvkFS8F7t7Z-pfs6ZJQfV8_t0z-TnQGmqapy3fpW0gN1RWfYecfVtKdE6_oPjUxUyzkQ7nIhGRpjxFOTcVFJXsmsyAtvew2edjKMXXXNEM0S6Fp_WOEgQxnndnLCi-j_If-a2D-YI-ur5GHhg0qUM3ZSRGFRppJfTs5NaBBypQQYxtJnjsVuMwYssuywzgTNm40pn2yX6QxKatq4iR8zyqPx3yu-HGfBvEvXzRH0gCmIjyrdJJ-qHTjHV36850zaQC9znkzGMm8XJhBIcO-QRrZvsFMk.kJHCBi3XsfA3AGcRU_diTfpE9HvKrLRfCNaiUcU5MEo&dib_tag=se&keywords=crumps%2Bbeef&qid=1760677590&sprefix=crumps%2Bbeef%2Caps%2C107&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#8B6A43] text-sm mt-1 font-medium hover:underline"
      >
        Buy Now &gt;
      </a>
    </div>
  </div>
</div>


          {/* === 19. So Adorable === */}
<div>
  <h3 className="text-lg font-semibold text-[#8B6A43] mb-4">
    So Adorable, No Matter What
  </h3>
  <div className="bg-white rounded-2xl shadow-sm divide-y">
    {[
      {
        week: "Week 41",
        desc: "Adolescence isn't over just yet!",
        href: "/pet-care-guide/week41",
      },
      {
        week: "Week 42",
        desc: "Vaccinations complete! Here's what pet services you can use next.",
        href: "/pet-care-guide/week42",
      },
      {
        week: "Week 43",
        desc: "Common symptoms you might notice around this time.",
        href: "/pet-care-guide/week43",
      },
      {
        week: "Week 44",
        desc: "How to perfectly brush your puppy's teeth and keep their breath fresh.",
        href: "/pet-care-guide/week44",
      },
    ].map((item, idx) => (
      <Link
        key={idx}
        href={item.href}
        className="flex justify-between items-center p-5 hover:bg-[#F9F6F1]/80 transition cursor-pointer"
      >
        <div>
          <p className="text-gray-800 font-medium">{item.week}</p>
          <p className="text-gray-600 text-sm">{item.desc}</p>
        </div>
        <span className="text-[#8B6A43] text-lg font-bold">{">"}</span>
      </Link>
    ))}
  </div>
</div>



         {/* === 20. Almost Fully Grown! === */}
<div>
  <h3 className="text-lg font-semibold text-[#8B6A43] mb-4">
    Almost Fully Grown!
  </h3>
  <div className="bg-white rounded-2xl shadow-sm divide-y">
    {[
      {
        week: "Week 45",
        desc: "Don't skip 'recall training' - here's why it's so important!",
        href: "/pet-care-guide/week45",
      },
      {
        week: "Week 46",
        desc: "This stage calls for more exercise and energy release.",
        href: "/pet-care-guide/week46",
      },
      {
        week: "Week 47",
        desc: "It's time to switch to adult food",
        href: "/pet-care-guide/week47",
      },
      {
        week: "Week 48",
        desc: "Congratulations - your puppy has reached adulthood!",
        href: "/pet-care-guide/week48",
      },
    ].map((item, idx) => (
      <Link
        key={idx}
        href={item.href}
        className="flex justify-between items-center p-5 hover:bg-[#F9F6F1]/80 transition cursor-pointer"
      >
        <div>
          <p className="text-gray-800 font-medium">{item.week}</p>
          <p className="text-gray-600 text-sm">{item.desc}</p>
        </div>
        <span className="text-[#8B6A43] text-lg font-bold">{">"}</span>
      </Link>
    ))}
  </div>
</div>


         {/* === 21. Time to Switch Foods === */}
<div>
  <h3 className="text-lg font-semibold text-[#8B6A43] mb-4">
    Time to Switch Foods
  </h3>

  {/* Product Recommendation Card */}
  <div className="bg-white rounded-2xl shadow-sm p-5 flex items-center gap-5 mb-6">
    <img
      src="/acana-puppy-junior.jpg"
      alt="ACANA Heritage Puppy & Junior Dry Dog Food"
      className="w-20 h-20 rounded-xl object-cover"
    />
    <div className="flex-1">
      <p className="text-sm text-gray-500 mb-1">ACANA</p>
      <p className="font-medium text-gray-800 text-sm">
        ACANA Heritage Puppy & Junior Dry Dog Food, 4.5 LB Bag with Fresh Free-Run Turkey, Chicken,
        Wild-Caught Fish & NEST-Laid Eggs
      </p>
      <a
        href="https://www.amazon.ca/Heritage-Free-Run-Chicken-Wild-Caught-NEST-Laid/dp/B07NQM4J43/ref=sr_1_14?crid=1YN7GJSZNFRDK&dib=eyJ2IjoiMSJ9.cnYX5-fXZFvMRfSr0hEDeV5pHWKEzP1zi-vogjMqHDqgaj0UjkS-E5sCn9OrosfuS3B1trdGrhQgqyupF2rfumhVWYzkBHnr-PLDWlNrLpzbK23m50V_mA9N7ELrtXj3ibVokAq4QEOHqWVBE2C-Fl3h52VoNFChW7R5JjS4eNRDyyKH2EIyBrde0p2s-s-nMexbjRzSlI5MXIEqdLWjg7Q1UmqAiLNBXRMMU3L9TE6lz_4JUNTDyf7DMC5UkiU4_LF4YX2FUsuTOHVy7dMykyLHVYz1M8SQ05echk1rtvQMY.WQSOtlqisMaQIsSxzJ0O_hOhhROjEDNV1-QmeyUXxIQ&dib_tag=se&keywords=puppy+Organic+Food%3F&qid=1760677790&sprefix=puppy+organic+food+%2Caps%2C107&sr=8-14"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#8B6A43] text-sm mt-1 font-medium hover:underline"
      >
        Buy Now &gt;
      </a>
    </div>
  </div>
</div>


          {/* === 22. Final Weeks === */}
<div>
  <h3 className="text-lg font-semibold text-[#8B6A43] mb-4">
    The Final Milestone
  </h3>
  <div className="bg-white rounded-2xl shadow-sm divide-y">
    {[
      {
        week: "Week 49",
        desc: "Curious about your puppy's intelligence? Try an IQ test!",
        href: "/pet-care-guide/week49",
      },
      {
        week: "Week 50",
        desc: "As your puppy's first birthday approaches, don't forget a health check-up!",
        href: "/pet-care-guide/week50",
      },
      {
        week: "Week 51",
        desc: "Shall we start preparing for the first birthday celebration?",
        href: "/pet-care-guide/week51",
      },
      {
        week: "Week 52",
        desc: "A special edition of the Pet Care Guide for pet parents!",
        href: "/pet-care-guide/week52",
      },
    ].map((item, idx) => (
      <Link
        key={idx}
        href={item.href}
        className="flex justify-between items-center p-5 hover:bg-[#F9F6F1]/80 transition cursor-pointer"
      >
        <div>
          <p className="text-gray-800 font-medium">{item.week}</p>
          <p className="text-gray-600 text-sm">{item.desc}</p>
        </div>
        <span className="text-[#8B6A43] text-lg font-bold">{">"}</span>
      </Link>
    ))}
  </div>
</div>


{/* === 23. First Supplement === */}
<div>
  <h3 className="text-lg font-semibold text-[#8B6A43] mb-4">
    Your Puppy's First Supplement — Delicious and Easy to Digest!
  </h3>

  {/* Product Recommendation Card */}
  <div className="bg-white rounded-2xl shadow-sm p-5 flex items-center gap-5 mb-6">
    <img
      src="/petlab-probiotics.jpg"
      alt="PetLab Co. Probiotics for Dogs"
      className="w-20 h-20 rounded-xl object-cover"
    />
    <div className="flex-1">
      <p className="text-sm text-gray-500 mb-1">PetLab Co.</p>
      <p className="font-medium text-gray-800 text-sm">
        PetLab Co. Probiotics for Dogs — Support Gut Health, Itchy Skin, Seasonal Allergies, 
        and Yeast with Each Tasty Chew — Dog Probiotics — Safe for Small, Medium, and Large Dogs
      </p>
      <a
        href="https://www.amazon.ca/PetLab-Co-Probiotics-Dogs-Allergies/dp/B089XVJHFK/ref=sr_1_12?crid=1IGJLEXPARWVI&dib=eyJ2IjoiMSJ9.YvJrSS_N051IZm3x-BEsjvDShpHGGyXAAIielfSJips-XBHIKYe2Nl32BhYDxb7_HQmkUWmsnFGhOifPqdUd_1qd3vGB0NCiFgr4w2w73thdAtWEgS4VrnHWqPYqet3njP2QCHsVH5Yuke7uXzsIdHO9MkJ3c3xhD9ca4x5ON3EozkVz6IZvvVm3d10nLNnMyibHduIbgtR24dmD-TkKaGlkikGOD7rAFkyNa9vpsOGXAjEW-_UEwEu9QcXeh4nF_C8fFALnBvpnufZB_WxZ6SeGwi-_NBwkD0ibTPQcKmc.08YbQqJJ4hzpxOgwQxxmCmxwm7FizDhG4QVI92NU9-8&dib_tag=se&keywords=probiotic+supplement+for+dog&qid=1760678013&rdc=1&sprefix=probiotic+supplement+for+dog%2Caps%2C101&sr=8-12"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#8B6A43] text-sm mt-1 font-medium hover:underline"
      >
        Buy Now &gt;
      </a>
    </div>
  </div>
</div>


          {/* ===== FINAL SECTION: Magazine CTA ===== */}
          <section className="mt-20 mb-24 flex flex-col items-center justify-center text-center bg-[#F9F6F1]">
            <div className="bg-white rounded-2xl shadow-sm p-10 max-w-2xl mx-auto">
              <div className="flex flex-col items-center space-y-4">
                {/* Headline */}
                <h3 className="text-lg md:text-xl font-medium text-gray-800">
                  Did you enjoy <span className="text-[#8B6A43] font-semibold">PetCare Guide</span>?
                </h3>

                <p className="text-gray-600 text-sm md:text-base max-w-md">
                  View our <span className="text-[#8B6A43] font-medium">Magazines</span> as well for fun and useful tips - 
                  discover everyday pet hacks, stories, and expert insights!
                </p>

                {/* Button */}
                <button className="mt-4 bg-[#8B6A43] hover:bg-[#6E5435] text-white px-8 py-3 rounded-full text-sm font-medium transition">
                  View Magazines
                </button>
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}