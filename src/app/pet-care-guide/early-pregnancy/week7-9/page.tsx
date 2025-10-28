"use client";

import Image from "next/image";
import Link from "next/link";

export default function Week79Page() {
  return (
    <main className="min-h-screen bg-[#F9F6F1] text-[#111827] py-16 px-6">
      {/* ===== HEADER ===== */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-2">
          Puppy Care Guide
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-[#8B6A43]">
          Late Pregnancy (Weeks 7–9)
        </h2>
      </div>

      {/* ===== HERO IMAGE ===== */}
      <div className="flex justify-center mb-10">
        <Image
          src="/smartie-card.jpg"
          alt="Pregnant dog late pregnancy"
          width={600}
          height={400}
          className="rounded-2xl shadow-md object-cover"
        />
      </div>

      {/* ===== INTRO SECTION ===== */}
      <section className="text-center max-w-3xl mx-auto mb-12">
        <h3 className="text-xl font-semibold mb-3">
          The Time Is Drawing Near!
        </h3>
        <p className="text-gray-700 leading-relaxed">
          The time for your puppies to enter the world is drawing near! This guide will help owners prepare in advance for a smooth delivery.
        </p>
      </section>

      {/* ===== FEATURES AND CARE ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="text-lg font-semibold mb-4">
          Features and Care for Weeks 7–9 of Pregnancy
        </h4>
        <p className="text-gray-700 leading-relaxed">
          Let's explore the characteristics and necessary care for the mother dog during her final weeks of pregnancy, right before the puppies are born.
        </p>
      </section>

      {/* ===== CHARACTERISTICS ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold mb-4">Characteristics of Pregnancy Weeks 7–9</h4>
        <ol className="list-decimal list-inside space-y-3 text-gray-700">
          <li>
            <strong>Mammary Gland Development</strong> — The mother dog's teats will become firm and swollen, and colostrum (first milk) may start to appear as she nears the time of delivery.
          </li>
          <li>
            <strong>Fetal Bone Development</strong> — Around 7-8 weeks, the puppies' bones begin to form. Through X-ray examination, you can check the size of the puppies' heads. This also allows for comparison with the mother's pelvic size to predict the potential for difficult birth (dystocia) and to confirm the number of fetuses.
          </li>
          <li>
            <strong>Fetal Movement</strong> — If you place your hand on the mother's abdomen, you will be able to feel the puppies moving.
          </li>
          <li>
            <strong>Nesting Behavior</strong> — During this period, mother dogs will often exhibit nesting behavior, such as pawing or digging at the ground.
          </li>
        </ol>
      </section>

      {/* ===== MOTHER DOG CARE ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold mb-4">Mother Dog Care Methods</h4>
        <ul className="list-disc list-inside space-y-3 text-gray-700">
          <li>
            <strong>Adjusting Food Intake</strong> — In the latter stages of pregnancy, increase her food intake by about one-quarter (25%). This provides the necessary calories and nutrients for the rapidly growing puppies.
          </li>
          <li>
            <strong>Creating a Safe Whelping Space</strong> — As the delivery date approaches, it's best to prepare a cozy place where the mother dog can be alone, like a crate or a sectioned-off area using a curtain or blanket. This space should allow her to feel safe and secure and is where she will instinctively want to give birth.
          </li>
          <li>
            <strong>Responding to Nesting</strong> — When she engages in the pawing or digging behavior, do not scold her. This is a natural sign that birth is imminent. Simply observe her from a distance to watch for other signs of labor as the delivery date gets closer.
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
          src="/purina-one-trueinstinct.jpg"
          alt="Purina ONE True Instinct High Protein Dry Dog Food Beef & Salmon"
          width={380}
          height={260}
          className="object-contain max-h-[240px]"
        />
      </div>
      <div className="flex flex-col justify-between flex-grow text-left">
        <p className="text-gray-800 font-medium mb-1 min-h-[48px]">
          Purina ONE True Instinct High Protein Dry Dog Food, Beef & Salmon – 12.4 kg Bag
        </p>
        <p className="text-[#8B6A43] font-semibold mb-2">$47.90</p>
        <a
          href="https://www.amazon.ca/Purina-ONE-Smartblend-Instinct-Natural/dp/B0832M7S4Q/ref=sr_1_8?dib=eyJ2IjoiMSJ9.tArOR05GYIwAm5kp85FhRCu4Bow0Rr_RAKK3oslxgXpshyfRyXiX1y13wqHzIv99dWg2-LJzo15e8lYWZpt7IwIlPwnq8pxEl2y5USKXA1Dz9FPWiN5n0uXlGs3Nz-GU0rKa67AcEkI6ckzD-7N2CCVqaDpkCBdf4vU-teptY0zj8j3XRHDtaqpznF1qc54S8pyGLDmqs09auApUgCHXpEFLBpDQl3GPMkdU5nCA7BByD_UU41eu7pD8Tn9GEe6DHKni4PZq3-VOrC32bBLqGcSIBRhzHHoJqvbBU8bVbho.ZGANhj2S--aG715AC9240Vh0hkRVmm_QXYVUni9a_AY&dib_tag=se&keywords=Purina%2BONE%2BTrue%2BInstinct&qid=1760675479&sr=8-8&th=1"
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
          src="/orijen-sixfish.jpg"
          alt="ORIJEN Grain Free Poultry Free High Protein Dry Dog Food Six Fish Recipe"
          width={380}
          height={260}
          className="object-contain max-h-[240px]"
        />
      </div>
      <div className="flex flex-col justify-between flex-grow text-left">
        <p className="text-gray-800 font-medium mb-1 min-h-[48px]">
          ORIJEN Grain Free Poultry Free High Protein Dry Dog Food Six Fish Recipe (4.5 lb Bag)
        </p>
        <p className="text-[#8B6A43] font-semibold mb-2">$54.99</p>
        <a
          href="https://www.amazon.ca/ORIJEN-Recipe-High-Protein-Grain-Free-Packaging/dp/B01MXMJCP2/ref=sr_1_5?crid=B3GIZ8NTOXLB&dib=eyJ2IjoiMSJ9.mn0hUYeE7ytGibmuvlNIzWYBsbTVSUevgEu7wv1lSu9_44kUd8ueO42TiEGAqP_fL-WWsI5urzbCTGOKV_kLJnk0L1DAh1KMXLQrqngN_0qZsJ3pnP4d8BNBQK69SNuYepH1dTtxm6jJqjueKgrf44xMs7pEVkbp1bkNiYZfZ1YPsoXskcmi1xffxqvKfY4fdRhvOhkgFSv1TvMoiWEfjLY8YwQ3OE_2pQzaW9uKfUVdxzDZe5ON4cFJ4m-8ZInkET76H5PRCpeFm89kfLU8r6Qq5tbBwi3t1ayFyLiBmcU.GExbvdTs1HrmBscBQDVLzQUYybK2TQBWLaTC04RyKZs&dib_tag=se&keywords=orijen%2Bhigh%2Bprotein%2Bdog%2Bfood&qid=1760675547&sprefix=orijen%2Bhigh%2Bprotein%2Bdog%2Bfoo%2Caps%2C94&sr=8-5&th=1"
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


      {/* ===== PRE-BIRTH CHECKLIST ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold mb-4">Puppy Care Guide: Pre-Birth Checklist</h4>
        <p className="text-gray-700 leading-relaxed mb-4">
          Here is an essential checklist to ensure you are fully prepared for the upcoming birth:
        </p>
        <ul className="space-y-2 text-gray-700">
          <li>✓ Locate a 24-hour Animal Hospital: Know the location and contact information for the nearest emergency veterinary clinic.</li>
          <li>✓ Confirm the Number of Puppies: Be aware of how many puppies you are expecting.</li>
          <li>✓ Prepare Whelping Supplies: Set out all necessary birthing supplies, such as disinfectants (like iodine) and clean towels.</li>
          <li>✓ Finalize the Whelping Location: Prepare the designated delivery area where the mother dog feels most comfortable and secure.</li>
        </ul>
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

    {/* Active link to /mobile-app */}
    <div className="absolute top-6 right-6 text-right">
      <Link
        href="/mobile-app"
        className="inline-block border border-[#ffffff] text-[#ffffff] hover:bg-[#ffffff]/10 hover:backdrop-blur-sm px-6 py-3 rounded-lg font-medium shadow-sm transition"
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