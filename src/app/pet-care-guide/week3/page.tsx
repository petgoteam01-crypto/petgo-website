"use client";

import Image from "next/image";
import Link from "next/link";

export default function Week3Page() {
  return (
    <main className="min-h-screen bg-[#F9F6F1] text-[#111827] py-16 px-6">
      {/* ===== HEADER ===== */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-2">
          Puppy Care Guide
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-[#8B6A43]">
          Week 3 – The Growth Spurt
        </h2>
      </div>

      
      {/* ===== INTRO SECTION ===== */}
      <section className="text-center max-w-3xl mx-auto mb-12">
        <h3 className="text-xl font-semibold mb-3">
          It Has Been Three Weeks Since the Puppies Were Born!
        </h3>
        <p className="text-gray-700 leading-relaxed">
          The days of the puppies just lying still are coming to an end. Rapid growth and significant developmental changes are starting right now! Let's continue this rearing journey together.
        </p>
      </section>

      {/* ===== FEATURES OF WEEK 3 ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="text-lg font-semibold mb-4">
          Features of Week 3
        </h4>
        <ol className="list-decimal list-inside space-y-3 text-gray-700">
          <li>
            <strong>Senses and Mobility</strong> — The puppies' sight and hearing are rapidly developing, and they are beginning to take their first wobbly steps. At this stage, they are starting to track moving objects and can judge the relative distance of objects around them. They are moving from crawling to walking!
          </li>
          <li>
            <strong>Independent Elimination</strong> — Puppies are now at the stage where they can eliminate (urinate and defecate) on their own. This is a major developmental milestone, as they no longer rely completely on the mother's stimulation.
          </li>
          <li>
            <strong>Worming/Deworming</strong> — Because the puppies may have become infected with parasites from the mother dog before or shortly after birth, it is essential to administer a dewormer during this period. Consult your veterinarian for the appropriate type and dose of deworming medication.
          </li>
        </ol>
        
        {/* Image below Features of Week 3 */}
        <div className="flex justify-center mt-6">
          <Image
            src="/week3-puppies.jpg"
            alt="Week 3 puppies development"
            width={600}
            height={400}
            className="rounded-2xl shadow-md object-cover"
          />
        </div>
      </section>

      {/* ===== ESSENTIAL CARE ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold mb-4">Essential Care for Week 3</h4>
        <ul className="list-disc list-inside space-y-3 text-gray-700">
          <li>
            <strong>Claw Care for Nursing Safety</strong> — If a puppy's claws are sharp, they can injure the mother dog's teats while nursing, potentially causing mastitis or preventing the mother from letting them feed.
          </li>
          <li>
            <strong>Gentle Nail Trimming</strong> — To prevent this, if the puppies' claws are sharp, gently trim only the very tips of their nails. Use specialized puppy nail clippers or human nail clippers, and be extremely careful to avoid the quick (the pink part of the nail) to prevent pain and bleeding. It is often safest to just blunt the sharp tips rather than attempt a full trim.
          </li>
        </ul>
      </section>

      {/* ===== CONTINUING CARE AND SOCIALIZATION ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-[#FFF9E6] border border-[#F5D97A] p-6 rounded-xl">
        <h4 className="font-semibold text-[#8B6A43] mb-3">
          Continuing Care and Socialization
        </h4>
        <p className="text-gray-700 leading-relaxed mb-4">
          As the puppies begin to walk and their senses awaken, they are also entering the crucial window for early socialization. While they are still primarily focused on their mother and littermates, gentle human interaction is important.
        </p>
        <ul className="list-disc list-inside space-y-3 text-gray-700">
          <li>
            <strong>Handling</strong> — Continue to handle the puppies gently and frequently. This helps them become comfortable with human contact, making them well-adjusted pets in the future.
          </li>
          <li>
            <strong>Whelping Box Prep</strong> — Ensure the whelping box is large enough to allow the puppies to move around and explore their newfound walking abilities safely. Keeping it clean is vital, as they are now eliminating more independently.
          </li>
        </ul>
      </section>

      {/* ===== PETGO SHOP (4 ITEMS) ===== */}
      <section className="max-w-6xl mx-auto mb-16">
        <h4 className="font-semibold mb-3 text-[#8B6A43]">
          PetGo Shop{" "}
          <span className="text-[#111827] font-medium">
            | Essentials to support your dog's strength and comfort during pregnancy.
          </span>
        </h4>
      
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {/* Product 1 */}
          <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition flex flex-col p-6 h-full">
            <div className="w-full h-[260px] flex justify-center items-center mb-4">
              <Image
                src="/dog-playpen.jpg"
                alt="New World Dog Exercise Pen and Playpen Without a Door"
                width={380}
                height={260}
                className="object-contain max-h-[240px]"
              />
            </div>
            <div className="flex flex-col justify-between flex-grow text-left">
              <p className="text-gray-800 font-medium mb-1 min-h-[48px]">
                New World Dog Exercise Pen and Playpen Without a Door, Includes Grounding Stakes — 4.7 m Play Space
              </p>
              <p className="text-[#8B6A43] font-semibold mb-2">$52.02</p>
              <a
                href="https://www.amazon.ca/New-World-Pet-Products-B550-24/dp/B079P9FDNN/ref=sr_1_5?crid=2603B01GE2WNX&dib=eyJ2IjoiMSJ9.OQYr2Dcb_OHtoGTfEiH5bO2fs4cInzapkBn1iV5FDlmMWBQbIay4YUOp3eQug1x5xYOI2v9DweB2ancNFLVJ7PTHsPqYpAziurqynOyrYJCdZVQ0RpSeXG_7hzgdmx0_28_mpsCMq_JvizfRpvoYE58K45onD8Oasr3HMO7NEpAGGFOJz6u7gtn5OMj_yLuiAgZ8X_efyJPubqXfeLFOuLKcD_a9VGxu0phywHXj_nrhbLhZ9VobQ0pb4Njmbk4YIIj1CABZt-4ZUS54NlCJ2gkOpQzKrRVv6kM7oPXdm-g.BSlQD3ldAlRgoZiZHZ_5qBdlBSMMMGxdL8vUdZUs_vI&dib_tag=se&keywords=dog+playpen&qid=1760675978&sprefix=dog+play%2Caps%2C109&sr=8-5"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#8B6A43] hover:underline font-medium text-sm"
              >
                Buy Now &gt;
              </a>
            </div>
          </div>
      
          {/* Product 2 */}
          <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition flex flex-col p-6 h-full">
            <div className="w-full h-[260px] flex justify-center items-center mb-4">
              <Image
                src="/bvagss-dog-blankets.jpg"
                alt="BVAGSS 6 Pack Small Dog Blanket"
                width={380}
                height={260}
                className="object-contain max-h-[240px]"
              />
            </div>
            <div className="flex flex-col justify-between flex-grow text-left">
              <p className="text-gray-800 font-medium mb-1 min-h-[48px]">
                BVAGSS 6 Pack Small Dog Blanket, Super Soft Warm Pet Cover Blankets (Multi-Colored Flannel)
              </p>
              <p className="text-[#8B6A43] font-semibold mb-2">$22.99</p>
              <a
                href="https://www.amazon.ca/BVAGSS-Blanket-Blankets-Flannel-Multi-Colored/dp/B0B6GZTWFT/ref=sr_1_6?dib=eyJ2IjoiMSJ9.0QoEdGl3Woxh4dKqXQag-mHwE2wubz-0hnREtRhz871wF7YJO94weQBa1122oMld3WLBi66Jw1fyKGq5GuQXsd37rl_CgDVwZaryCnXR2U7Jyiz6EXjgPV2P_6_oD5rl48Bjf6VYiDeeUxYIXqb9_69iRuSlamJXFBssAfvXM0btRXZY85c75SQT99I_wHyEQ3xawGW4jcz46GTLO3LincGgeUHOguaMo9pclhHxbm8B692KlNc3kmKMmKj2XpQG95KCtfFpuqlnnwX5BW92LV1JL1V9OFgRTH8TCccZYN4.vTrt3k45nFy-cY5n3eWoECpfmNgy_syyK_NHw9dRKiI&dib_tag=se&keywords=dog%2Bblankets&qid=1760675370&sr=8-6&th=1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#8B6A43] hover:underline font-medium text-sm"
              >
                Buy Now &gt;
              </a>
            </div>
          </div>
      
{/* Product 3 */}
<div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition flex flex-col p-6 h-full">
  <div className="w-full h-[260px] flex justify-center items-center mb-4">
    <Image
      src="/victhy-nail-clippers.jpg"
      alt="VICTHY Pet Nail Clippers for Small Animals"
      width={380}
      height={260}
      className="object-contain max-h-[240px]"
    />
  </div>
  <div className="flex flex-col justify-between flex-grow text-left">
    <p className="text-gray-800 font-medium mb-1 min-h-[48px]">
      Pet Nail Clippers for Small Animals, Dog/Cat Nail Clippers Claw Toenail Trimmer
    </p>
    <p className="text-[#8B6A43] font-semibold mb-2">$8.99</p>
    <a
      href="https://www.amazon.ca/Clippers-Animals-VICTHY-Professional-Grooming/dp/B07Q6YGHJJ/ref=sr_1_6?dib=eyJ2IjoiMSJ9.ni-eZu5ai1D7lzV9nTPwUYberoZaq248pRG8RU5_22n1VczHVKxtGnevkhsAWcpQhnXrFOMU63yUdY112aozl2P8KcjcIb21MzCIHje_0YG5lcIgaLyWmquSW3ox7ysq0xT3qYzNiRlEUzWmApio6HC3X-4FKES27PiDgUHt5LMDc30wTcfZ4JnjzcNo2iI9kbJnya2PE2GfOU_luIwdRczV2hHit4lWKE8lpESEOMXODin0E9Bvr8epJIY5OylDNy2Oszz9PrLwyrzL9Mg4rpNKi9VrWd6vIXSFT-fascI.DmcFeNGSYlv8q-pBKVy77QPFAYKLca7vDlpqcHm-cBU&dib_tag=se&keywords=puppy+nail+clippers&qid=1760679622&sr=8-6"
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#8B6A43] hover:underline font-medium text-sm"
    >
      Buy Now &gt;
    </a>
  </div>
</div>

      
{/* Product 4 */}
<div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition flex flex-col p-6 h-full">
  <div className="w-full h-[260px] flex justify-center items-center mb-4">
    <Image
      src="/royalcanin-puppy-milk.jpg"
      alt="Royal Canin Baby Dog Powdered Milk 400 g"
      width={380}
      height={260}
      className="object-contain max-h-[240px]"
    />
  </div>
  <div className="flex flex-col justify-between flex-grow text-left">
    <p className="text-gray-800 font-medium mb-1 min-h-[48px]">
      Royal Canin Baby Dog Powdered Milk 400 g
    </p>
    <p className="text-[#8B6A43] font-semibold mb-2">$69.99</p>
    <a
      href="https://www.amazon.ca/Royal-Canin-Baby-Powdered-Milk/dp/B00197UQ3O/ref=sr_1_4_sspa?crid=2H08JDKGDHZVF&dib=eyJ2IjoiMSJ9.YjuO446EuS2mgZEw3MXs5sTTYtpZycE58du_pnyTB_ah8yrMrHXH7eMvKjX1RTlOE7Z7rZUXAoNEqKKRool-0EFG_ilQyPE8d-Z-eIEUlfMrDCSo8HPsqQ2CtR_VE-6gXDrHzxwSh_37KYQGFY6j1J8nVaTecI10swTtxWQdrlspejO-T4yeP1O9_poPjcwbXlY-5Lxk6iZIGKo463ELZ_xuapd8VLDCkiVDQOQauXknXaOpZ97lKnPXyijDBeWd7XbdqFcJFRtvbckjdeuEWqusyvqJ3sZLJ2EQWdpxLwQ.BE_SbVUb-ujmOnJRwBon7JfIlrv_7HpN1d5ZBnSPf3E&dib_tag=se&keywords=puppy+milk&qid=1760680041&sprefix=puppy+milk%2Caps%2C98&sr=8-4-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1"
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#8B6A43] hover:underline font-medium text-sm"
    >
      Buy Now &gt;
    </a>
  </div>
</div>
        </div>
      </section>


{/* ===== CONTINUE ===== */}
<section className="text-center max-w-4xl mx-auto mb-20">
  <h4 className="font-semibold mb-3 text-[#111827]">
    Continue with PetGo's Puppy Care Guide
  </h4>
  <p className="text-gray-700 mb-10">
    This is a precious and sensitive time that calls for warmth, patience,
    and attentive care. From pregnancy through caring for newborn puppies,
    PetGo will be by your side every step of the way.
  </p>

  {/* Banner with transparent top-right button */}
  <div className="relative rounded-3xl overflow-hidden shadow-lg">
    <Image
      src="/petgoapp-banner.jpg"
      alt="PetGo mobile app banner"
      width={1200}
      height={600}
      className="object-cover w-full h-auto"
      priority
    />

    {/* Transparent outline button */}
    <div className="absolute top-6 right-6 text-right">
      <Link
        href="/mobile-app"
        className="inline-block border border-[#ffffff] text-[#ffffff] hover:bg-[#ffffff] hover:text-[#8B6A43] px-6 py-3 rounded-lg font-medium shadow-sm transition"
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