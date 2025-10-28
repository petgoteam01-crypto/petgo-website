"use client";

import Image from "next/image";
import Link from "next/link";

export default function Week46Page() {
  return (
    <main className="min-h-screen bg-[#F9F6F1] text-[#111827] py-16 px-6">
      {/* ===== HEADER ===== */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-2">
          Puppy Care Guide
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-[#8B6A43]">
          Mid-Pregnancy (Weeks 4–6)
        </h2>
      </div>

      {/* ===== HERO IMAGE ===== */}
      <div className="flex justify-center mb-10">
        <Image
          src="/pregnantw4-6.jpg"
          alt="Pregnant dog mid-pregnancy"
          width={600}
          height={400}
          className="rounded-2xl shadow-md object-cover"
        />
      </div>

      {/* ===== UNDERSTANDING MID-PREGNANCY ===== */}
      <section className="text-center max-w-3xl mx-auto mb-12">
        <h3 className="text-xl font-semibold mb-3">
          Understanding the Mid-Pregnancy Stage
        </h3>
        <p className="text-gray-700 leading-relaxed">
          As your dog’s pregnancy progresses, her body undergoes several hormonal and
          physical adjustments to nurture her developing puppies. Here’s what to expect
          and how to care for her during this important stage.
        </p>
      </section>

      {/* ===== HORMONAL & PHYSICAL CHANGES ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="text-lg font-semibold mb-4">
          Hormonal and Physical Changes
        </h4>
        <p className="text-gray-700 leading-relaxed mb-4">
          During a dog’s heat cycle, the vulva and reproductive organs naturally swell
          and then return to normal once the cycle ends. However, when pregnancy occurs,
          this swelling continues as the body maintains a supportive environment for
          fetal development. You may also notice a light whitish discharge — a normal
          sign of pregnancy progress.
        </p>
        <p className="text-gray-700 leading-relaxed">
          As her body adjusts to internal changes, your dog may become less active and
          prefer resting quietly. This is natural and allows her to conserve strength
          while supporting her growing puppies.
        </p>
      </section>

      {/* ===== ULTRASOUND CONFIRMATION ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-[#FFF9E6] border border-[#F5D97A] p-6 rounded-xl">
        <h4 className="font-semibold text-[#8B6A43] mb-2">
          Ultrasound Confirmation
        </h4>
        <p className="text-gray-700 leading-relaxed">
          Around 25 days after mating, an ultrasound can confirm pregnancy. This
          examination helps veterinarians monitor the number of developing puppies
          and their heartbeats.
        </p>
      </section>

      {/* ===== PHYSICAL CHANGES TO EXPECT ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold mb-4">Physical Changes to Expect</h4>
        <ul className="list-disc list-inside space-y-3 text-gray-700">
          <li>
            <strong>Belly Growth and Weight Gain</strong> — Gradual abdominal swelling
            and steady weight gain are typical at this stage. Your dog may feel mild
            tightness or tension around her belly as the pregnancy progresses.
          </li>
          <li>
            <strong>Frequent Urination and Digestive Changes</strong> — As the abdomen
            expands, pressure on the bladder may lead to more frequent urination,
            along with occasional digestive changes.
          </li>
          <li>
            <strong>Stabilization Period</strong> — By the fifth week, pregnancy becomes
            more stable. Gentle baths are safe now, provided your dog is kept warm and
            dried thoroughly.
          </li>
        </ul>
      </section>

      {/* ===== HOW TO CARE ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold mb-4">How to Care During This Stage</h4>
        <ol className="list-decimal list-inside space-y-4 text-gray-700">
          <li>
            <strong>Moderate Exercise</strong> — Light activity is beneficial for
            maintaining muscle tone and circulation. If your dog seems tired, let her
            rest. Prioritize comfort and a calm environment.
          </li>
          <li>
            <strong>Balanced Nutrition</strong> — Around week six, you can introduce a
            high-calorie diet or calcium-rich foods. Avoid over-supplementation, as
            excessive calcium can disrupt hormonal balance.
          </li>
          <li>
            <strong>Adequate Protein Intake</strong> — Protein supports strength and
            puppy growth. Maintain regular portions while adding protein-rich foods to
            your dog’s diet.
          </li>
        </ol>
      </section>

{/* ===== PETGO SHOP (4 ITEMS) ===== */}
<section className="max-w-6xl mx-auto mb-16">
  <h4 className="font-semibold mb-3 text-[#8B6A43]">
    PetGo Shop{" "}
    <span className="text-[#111827] font-medium">
      | Essentials to support your dog’s strength and comfort during pregnancy.
    </span>
  </h4>

  <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 mt-8">
    {/* Product 1 */}
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition flex flex-col p-6 h-full">
      <div className="w-full h-[260px] flex justify-center items-center mb-4">
        <Image
          src="/purina-sport-dry.jpg"
          alt="Purina Pro Plan Dry Dog Food, Sport Performance 30/20 Chicken & Rice"
          width={380}
          height={260}
          className="object-contain max-h-[240px]"
        />
      </div>
      <div className="flex flex-col justify-between flex-grow text-left">
        <p className="text-gray-800 font-medium mb-1 min-h-[48px]">
          Purina Pro Plan Dry Dog Food, Sport Performance 30/20 Chicken & Rice – 17 kg Bag
        </p>
        <p className="text-[#8B6A43] font-semibold mb-2">$92.97</p>
        <a
          href="https://www.amazon.ca/Purina-Sport-Performance-Formula-37-5-Pound/dp/B000633ONQ/ref=sr_1_6?crid=1VHAC9IUT04WU&dib=eyJ2IjoiMSJ9.xZb7ZpWC-bzJERpztLjaQL7EqQ2qFn1CQ2yK51gPMfNFSo0yusI0gRKivDPStz2QGH-LxRYZzR0Rv3EsK5fOKOgQdX0oT7FY2NQZaiR1Quwg9hrztTgxQUAKfQahyFZSc4IEN1Q9lzfxhVTcJDFnaceNMj1JUKj0mU7eUcDaEZrjU1nSOTEz2jXQqJ1EGNpaWJ435E2a3iqZOxK4vn8wqBUWbUmH4ei2yMfcsGm3UZhorO405CEQgTTKRMYFfiC74iCGaAGp_vQCw3L5BQ-j5ZWoAtNt12NrW8Gj_-nVjlI.OzB0E7EqpJ4tOTkU65LwrYlqG1ohtDAR2hmOPi-r1zI&dib_tag=se&keywords=Purina+Pro+Plan+Sport&qid=1760673975&rdc=1&sprefix=purina+pro+plan+sport+%2Caps%2C144&sr=8-6"
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
          src="/purina-wet-variety.jpg"
          alt="Purina Pro Plan Complete Essentials Wet Dog Food Variety Pack"
          width={380}
          height={260}
          className="object-contain max-h-[240px]"
        />
      </div>
      <div className="flex flex-col justify-between flex-grow text-left">
        <p className="text-gray-800 font-medium mb-1 min-h-[48px]">
          Purina Pro Plan Complete Essentials Wet Dog Food, in Gravy Variety Pack (12 Pack)
        </p>
        <p className="text-[#8B6A43] font-semibold mb-2">$44.99</p>
        <a
          href="https://www.amazon.ca/Pro-Plan-Complete-Essentials-Variety/dp/B0C6RKRZLP/ref=sxin_16_pa_sp_search_thematic_sspa?content-id=amzn1.sym.46621be6-fabe-4126-8501-d32c96c42a24%3Aamzn1.sym.46621be6-fabe-4126-8501-d32c96c42a24&crid=20WW0K2C9ASPF&cv_ct_cx=high+protein+wet+dog+food&keywords=high+protein+wet+dog+food&pd_rd_i=B0C6RKRZLP&pd_rd_r=d896d8e6-c0de-40db-a7e1-eb608a505246&pd_rd_w=frfZL&pd_rd_wg=ZfMk9&pf_rd_p=46621be6-fabe-4126-8501-d32c96c42a24&pf_rd_r=F5J9NWE2A7GZAWA73APR&qid=1760674163&rdc=1&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=high-protein+wet+foods%2Caps%2C135&sr=1-3-acb80629-ce74-4cc5-9423-11e8801573fb-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9zZWFyY2hfdGhlbWF0aWM&psc=1"
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
          src="/eheyciga-xxl-bed.jpg"
          alt="EHEYCIGA XXL Orthopedic Dog Bed for Jumbo Dogs"
          width={380}
          height={260}
          className="object-contain max-h-[240px]"
        />
      </div>
      <div className="flex flex-col justify-between flex-grow text-left">
        <p className="text-gray-800 font-medium mb-1 min-h-[48px]">
          EHEYCIGA XXL Dog Bed, Orthopedic Crate Bed for Jumbo Dogs, Washable & Non-Slip Bottom
        </p>
        <p className="text-[#8B6A43] font-semibold mb-2">$70.99</p>
        <a
          href="https://www.amazon.ca/EHEYCIGA-Washable-Removable-Durable-Pillow/dp/B0DDCD1FTC/ref=sr_1_19?dib=eyJ2IjoiMSJ9.B8nEobRE1CxxAjnYU4XOdp71pOmIKAgQ9bX8ZRjg4QLX8DM7M5ThYEMAmx_StlWaLtZX5rSNk1hp6gYdt6RCNEkDaw4r_qsOnp5nb4EN5x0YTzBJ8xGbiHMiOPzhVrMEHEtir0gDFmxEbexUWlPaZyQXqhqcfBOKuR3GrIR1VXE8K8-Z-7agq8UILlcOJoJdVakNtl_KoVublz6EDYmndo3g73MOX9ZkmBXgwsE5RViSxpj-H2mI6vQyivKWxn8vDtwu136psffCl3vUNEuhBtl5bZfC-ljj9Q0d51cmsns.nG5YvcKWAXq-aXnooUlNjytL3YV_NkKleXPF9egC9p0&dib_tag=se&keywords=dog%2Bbed&qid=1760674235&sr=8-19&th=1"
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
          src="/puppy-blanket-set.jpg"
          alt="1 Pack 3 Puppy Blankets for Large Dogs Super Soft Warm Sleep Mat"
          width={380}
          height={260}
          className="object-contain max-h-[240px]"
        />
      </div>
      <div className="flex flex-col justify-between flex-grow text-left">
        <p className="text-gray-800 font-medium mb-1 min-h-[48px]">
          1 Pack 3 Puppy Blankets for Large Dogs – Super Soft Fleece Sleep Mat (40&quot;x30&quot;)
        </p>
        <p className="text-[#8B6A43] font-semibold mb-2">$34.99</p>
        <a
          href="https://www.amazon.ca/Blankets-Blanket-Fluffy-Flannel-Love-Large/dp/B092986QDT/ref=sr_1_11?crid=1H824GVQFQJCH&dib=eyJ2IjoiMSJ9.U9eFPlK-anL0RJII3mdLulnhfZ-aLSi8Gp-_P2W1dq7vaYmXwH1or5LWb2wSYubcUFtpFZeQgDTze03GGyTOKdJnUrnJ87p9zfj_vAfaEpscUPqBe4_zYSvqQkqK8_OzO3a2qAXeQ85wJbCsHXONINIRxPTm33-qlvaSdKeSn0EEWjBeflJMH88iwyhPrpa-aybZKaXwA8x32mOWvf9hH0J3hufERqZgNC7ABUx6mNpPTNNtFbBFD7YbCFH46p0IedvcG02rHa3MF-W85PBFsOWam8q57s8qNlOkTKABwvA.rXbcPxbO5dO4sksixgcZB1g-SkusjR-Xh9yMPlBVMj4&dib_tag=se&keywords=large%2Bblanket%2Bfor%2Bdog&qid=1760674358&sprefix=large%2Bblanket%2Bfor%2Bdog%2Caps%2C104&sr=8-11&th=1"
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


{/* ===== GENTLE REMINDER ===== */}
<section className="max-w-3xl mx-auto mb-12 bg-[#FFF9E6] border border-[#F5D97A] p-6 rounded-xl">
  <h4 className="font-semibold text-[#8B6A43] mb-2">Gentle Reminder</h4>
  <p className="text-gray-700 leading-relaxed">
    You’ve now reached the two-month mark — an important milestone in your dog’s
    pregnancy journey. The delivery date is approaching, and your care plays a
    vital role in ensuring both the mother’s well-being and her puppies’ healthy
    start. With PetGo’s Puppy Care Guide, you can navigate every stage of
    pregnancy and beyond with confidence, compassion, and expert guidance.
  </p>
</section>

{/* ===== CONTINUE ===== */}
<section className="text-center max-w-4xl mx-auto mb-20">
  <h4 className="font-semibold mb-3 text-[#111827]">
    Continue with PetGo’s Puppy Care Guide
  </h4>
  <p className="text-gray-700 mb-10">
    PetGo helps you care for your dog every step of the way — from pregnancy
    through puppyhood — with practical guidance, trusted information, and
    professional insight.
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

    {/* Active button linking to mobile app page */}
    <div className="absolute top-6 right-6 text-right">
      <Link
        href="/mobile-app"
        className="inline-block border border-white text-white hover:bg-white/10 hover:backdrop-blur-sm px-6 py-3 rounded-lg font-medium shadow-sm transition"
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
