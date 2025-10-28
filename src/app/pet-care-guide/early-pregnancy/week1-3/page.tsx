"use client";

import Image from "next/image";
import Link from "next/link";

export default function Week13Page() {
  return (
    <main className="min-h-screen bg-[#F9F6F1] text-[#111827] py-16 px-6">
      {/* ===== HEADER ===== */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-2">
          Puppy Care Guide
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-[#8B6A43]">
          Early Pregnancy (Weeks 1–3)
        </h2>
      </div>

      {/* ===== HERO IMAGE ===== */}
      <div className="flex justify-center mb-10">
        <Image
          src="/earlypregnancyw13.jpg"
          alt="Pregnant dog resting on blanket"
          width={600}
          height={400}
          className="rounded-2xl shadow-md object-cover"
        />
      </div>

      {/* ===== CONGRATS SECTION ===== */}
      <section className="text-center max-w-3xl mx-auto mb-12">
        <h3 className="text-xl font-semibold mb-3">Congratulations!</h3>
        <p className="text-gray-700 leading-relaxed">
          Your beloved dog has just entered motherhood. This is an exciting yet
          delicate time, and PetGo is here to help you care for her with
          confidence and compassion.
        </p>
      </section>

      {/* ===== EARLY PREGNANCY SIGNS ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="text-lg font-semibold mb-4">
          Early Pregnancy Signs (Weeks 1–3)
        </h4>
        <ol className="list-decimal list-inside space-y-3 text-gray-700">
          <li>
            <strong>Changes in Appetite & Mild Morning Sickness</strong> – Some
            dogs may begin eating more than usual, while others may eat less or
            occasionally vomit. These are common early pregnancy signs and
            usually resolve on their own.
          </li>
          <li>
            <strong>Fatigue or Lower Energy Levels</strong> – It’s natural for
            your dog to seem sleepier or less active. Encourage gentle rest and
            comfort to help her body adjust.
          </li>
          <li>
            <strong>Longer Sleep Duration</strong> – Increased rest is part of a
            healthy pregnancy. Make sure she has a cozy, quiet space to sleep
            without interruption.
          </li>
          <li>
            <strong>Heightened Sensitivity or Clinginess</strong> – Even
            typically calm dogs may become more emotionally sensitive. Offer
            reassurance through a peaceful environment and gentle affection.
          </li>
        </ol>
      </section>

      {/* ===== HELPFUL TIP ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-[#FFF9E6] border border-[#F5D97A] p-6 rounded-xl">
        <h4 className="font-semibold text-[#8B6A43] mb-2">Helpful Tip</h4>
        <p className="text-gray-700 leading-relaxed">
          If your dog loses interest in food, don’t force her to eat. Allow her
          to eat small amounts of food she enjoys, whenever she feels ready.
        </p>
      </section>

      {/* ===== GENTLE CARE ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold mb-4">Gentle Care for the Early Weeks</h4>
        <p className="text-gray-700 mb-4">
          The first few weeks of pregnancy are{" "}
          <strong>especially delicate</strong> — the fertilized egg is still
          implanting in the uterus. During this time, both emotional and
          physical stability are essential.
        </p>

        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>
            Create a <strong>comfortable, quiet resting space</strong> where she
            can relax undisturbed.
          </li>
          <li>
            <strong>Avoid strenuous activity</strong> such as running, jumping,
            or climbing stairs. Light walks are fine, but avoid overexertion.
          </li>
          <li>
            <strong>Refrain from full baths</strong> for now; instead, use a
            soft damp towel or mild pet wipes to gently keep her clean and
            comfortable.
          </li>
        </ul>
      </section>

      {/* ===== PETGO SHOP (Perfectly Aligned Layout) ===== */}
<section className="max-w-4xl mx-auto mb-16">
  <h4 className="font-semibold mb-3 text-[#8B6A43]">
    PetGo Shop{" "}
    <span className="text-[#111827] font-medium">
      | Nurture your dog’s well-being with soft blankets and peaceful bed made for quiet, cozy moments.
    </span>
  </h4>

  <div className="grid md:grid-cols-2 gap-8 mt-8">
    {/* Product 1 */}
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition flex flex-col p-6 h-full">
      <div className="w-full h-[260px] flex justify-center items-center mb-4">
        <Image
          src="/dog-bed.jpg"
          alt="EHEYCIGA Memory Foam Orthopedic Dog Bed"
          width={380}
          height={260}
          className="object-contain max-h-[240px]"
        />
      </div>
      <div className="flex flex-col justify-between flex-grow text-left">
        <p className="text-gray-800 font-medium mb-1 min-h-[48px]">
          EHEYCIGA Memory Foam Orthopedic Dog Bed XL with Sides, Waterproof...
        </p>
        <p className="text-[#8B6A43] font-semibold mb-2">$67.49</p>
        <a
          href="https://www.amazon.ca/EHEYCIGA-Orthopedic-Waterproof-Egg-Crate-Removable/dp/B0BML8FZJ5/ref=sr_1_6?dib=eyJ2IjoiMSJ9.B8nEobRE1CxxAjnYU4XOdp71pOmIKAgQ9bX8ZRjg4QLX8DM7M5ThYEMAmx_StlWaLtZX5rSNk1hp6gYdt6RCNEkDaw4r_qsOnp5nb4EN5x0YTzBJ8xGbiHMiOPzhVrMEHEtir0gDFmxEbexUWlPaZyQXqhqcfBOKuR3GrIR1VXE8K8-Z-7agq8UILlcOJoJdVakNtl_KoVublz6EDYmndo3g73MOX9ZkmBXgwsE5RViSxpj-H2mI6vQyivKWxn8vDtwu136psffCl3vUNEuhBtl5bZfC-ljj9Q0d51cmsns.nG5YvcKWAXq-aXnooUlNjytL3YV_NkKleXPF9egC9p0&dib_tag=se&keywords=dog%2Bbed&qid=1760673281&sr=8-6&th=1"
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
          src="/dog-blanket.jpg"
          alt="Stuffed Premium Soft Dog Blanket"
          width={380}
          height={260}
          className="object-contain max-h-[240px]"
        />
      </div>
      <div className="flex flex-col justify-between flex-grow text-left">
        <p className="text-gray-800 font-medium mb-1 min-h-[48px]">
          Stuffed® Premium Soft Dog Blanket Washable, 40&quot;x32&quot; Dog Gifts (Grey)
        </p>
        <p className="text-[#8B6A43] font-semibold mb-2">$14.20</p>
        <a
          href="https://www.amazon.ca/Fleece-Blanket-Throw-Print-Medium/dp/B086PJ7YM3/ref=sr_1_5_mod_primary_new?crid=1Y1RCDNTIELIA&dib=eyJ2IjoiMSJ9.y1nawQmYsbXrBZFhEsK-MfPUJoFMpNViWuHpX6golz5XIyUTqYBGDl0VRS-TtK79dPfYuRvLYtjGO6Hxg8gPapZfjF0_MpF_nekmLfxIbyw4FE50Obl2IrSnNgM_fhXq-z0ZIZj62YP4JHtMnU5Omv_DGVZOqSAgmobj-Kk9UtW_35D3Dt4eP7B6unRGSBB5_kHaZtLQG1IPdugXi0jARKJepr663EX-dZ0-cVVjgM8raNWrOcEbkTM8nYxpSQNgEpqPlmT76BhpK0l_UmRHPsFyzpyCzBFd988whNg5hbc.KdaeFQ64QwJ4Sab_b8knuVmbQesG1W6J354TliS2lFs&dib_tag=se&keywords=dog%2Bblanket&qid=1760673313&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=dog%2Bblacnket%2Caps%2C111&sr=8-5&th=1"
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


      {/* ===== CHECKLIST ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold mb-4">Early Pregnancy Checklist</h4>
        <ul className="space-y-2 text-gray-700">
          <li>✔️ Noticeable change in appetite (increase or decrease)</li>
          <li>✔️ Reduced activity or increased sleep</li>
          <li>✔️ Appears more tired than usual</li>
          <li>✔️ Mild nausea or occasional vomiting</li>
          <li>✔️ More emotionally sensitive or clingy behavior</li>
        </ul>
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
