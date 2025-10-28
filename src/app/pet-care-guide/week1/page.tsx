"use client";

import Image from "next/image";
import Link from "next/link";

export default function Week1Page() {
  return (
    <main className="min-h-screen bg-[#F9F6F1] text-[#111827] py-16 px-6">
      {/* ===== HEADER ===== */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-2">
          Puppy Care Guide
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-[#8B6A43]">
          Week 1 – A Wobbly Start
        </h2>
      </div>

      

      {/* ===== INTRO SECTION ===== */}
      <section className="text-center max-w-3xl mx-auto mb-12">
        <h3 className="text-xl font-semibold mb-3">
          Finally, the Puppies Have Been Born!
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          This first week is a critical period for the newborns as they adjust to the world.
        </p>
        
        {/* Image below intro */}
        <div className="flex justify-center">
          <Image
            src="/newborn-puppies.jpg"
            alt="Newborn puppies in their first week"
            width={600}
            height={400}
            className="rounded-2xl shadow-md object-cover"
          />
        </div>
      </section>

      {/* ===== FEATURES OF WEEK 1 ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="text-lg font-semibold mb-4">
          Features of Week 1
        </h4>
        <ol className="list-decimal list-inside space-y-3 text-gray-700">
          <li>
            <strong>Sight</strong> — Newborn puppies cannot open their eyes, so they can't see anything. Their eyelids will remain closed for the first 10 to 14 days.
          </li>
          <li>
            <strong>Smell and Nursing</strong> — Puppies rely solely on their sense of smell to locate their mother and find her teats for nursing.
          </li>
          <li>
            <strong>Hearing</strong> — Their hearing develops slowly. They are born unable to hear and will only begin to perceive sounds after approximately five days of age.
          </li>
          <li>
            <strong>Umbilical Cord</strong> — The umbilical cord, which connects the puppy to its mother, will typically fall off naturally around five days after birth.
          </li>
        </ol>
      </section>

      {/* ===== TEMPERATURE REGULATION INTRO ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-[#FFF9E6] border border-[#F5D97A] p-6 rounded-xl">
        <h4 className="font-semibold text-[#8B6A43] mb-2">
          Temperature Regulation and Elimination Methods
        </h4>
        <p className="text-gray-700 leading-relaxed">
          This is a crucial time because the puppies have a weak ability to regulate their body temperature and cannot do so on their own! In special circumstances, such as when the mother dog is absent or unable to provide care, the guardian (owner) must assist in regulating the puppies' body temperature.
        </p>
      </section>

      {/* ===== TEMPERATURE REGULATION ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold mb-4">Temperature Regulation</h4>
        <ul className="list-disc list-inside space-y-3 text-gray-700">
          <li>
            <strong>Environmental Temperature</strong> — For the first two weeks after birth, you must maintain the room temperature at approximately 27°C (81°F).
          </li>
          <li>
            <strong>Warming Safely</strong> — Be cautious when using items like heated mats or hot packs, as puppies can easily suffer burns from direct contact.
          </li>
          <li>
            <strong>A Gentle Warmth</strong> — You can provide frequent, gentle warmth by wrapping a towel soaked in warm or lukewarm water around the puppies' designated nesting area or placing a warm compress near them (making sure the puppies cannot lie directly on a heat source that is too hot).
          </li>
        </ul>
      </section>

      {/* ===== ASSISTANCE WITH ELIMINATION ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold mb-4">Assistance with Elimination (Bowel Movements and Urination)</h4>
        <ul className="list-disc list-inside space-y-3 text-gray-700">
          <li>
            Newborns can't eliminate on their own. In the wild, the mother dog instinctively licks the puppies' perineal area to stimulate urination and defecation.
          </li>
          <li>
            If the mother isn't doing this, you must gently rub the puppy's belly and genital/anal area with a soft, warm, and damp cloth or cotton ball after each feeding. This vital step stimulates elimination and prevents serious health issues.
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