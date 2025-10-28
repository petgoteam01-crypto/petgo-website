"use client";

import Image from "next/image";
import Link from "next/link";

export default function Week10Page() {
  return (
    <main className="min-h-screen bg-[#F9F6F1] text-[#111827] py-16 px-6">
      {/* ===== HEADER ===== */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-2">
          Puppy Care Guide
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-[#8B6A43]">
          Week 10 – Teething &amp; Bite Inhibition Training
        </h2>
      </div>

      {/* ===== SMARTIE IMAGE ===== */}
      <div className="flex justify-center mb-10">
        <Image
          src="/week10mainpic.jpg"
          alt="PetGo mascot Smartie"
          width={600}
          height={400}
          className="rounded-2xl shadow-md object-cover"
        />
      </div>

      {/* ===== INTRO ===== */}
      <section className="text-center max-w-3xl mx-auto mb-12">
        <h3 className="text-xl font-semibold mb-3">
          “At 10 Weeks: Adorable, Curious, and Full of Tiny Teeth!”
        </h3>
        <p className="text-gray-700 leading-relaxed">
          By the tenth week, your puppy’s baby teeth are fully developed—sharp, shiny,
          and perfectly suited for exploring the world. This stage is both charming
          and challenging: puppies are irresistibly cute, but as their little teeth
          strengthen, they often express excitement and curiosity by biting or
          mouthing during play.
        </p>
      </section>

      {/* ===== WHY PUPPIES BITE ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold mb-4">🦷 Why Puppies Bite</h4>
        <p className="text-gray-700 leading-relaxed mb-4">
          It’s natural for puppies to want to chew and nibble. They explore their
          surroundings using their mouths—touching, tasting, and feeling sensations
          as part of their learning process.
        </p>
        <p className="text-gray-700 leading-relaxed">
          When they nip your hand playfully, they’re not being aggressive; they’re
          simply trying to interact. But these playful bites can hurt—so bite
          inhibition training becomes essential now.
        </p>
      </section>

      {/* ===== TEACHING BITE INHIBITION ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold mb-4">💡 Teaching Bite Inhibition</h4>
        <p className="text-gray-700 leading-relaxed mb-4">
          If your puppy bites too hard, respond with a calm but firm <strong>“No!”</strong> or <strong>“Ouch!”</strong>
          Avoid shouting or quick movements—your reaction should be steady and consistent.
        </p>
        <ul className="list-disc list-inside space-y-3 text-gray-700 mb-4">
          <li>Keep still and withdraw attention for a few seconds.</li>
          <li>Resume play only when your puppy is calm.</li>
          <li>Offer a soft chew toy to redirect their energy.</li>
        </ul>
        <p className="text-gray-700 leading-relaxed">
          <strong>Consistency is key:</strong> everyone in the family must react the same way.
          Mixed signals—laughing or ignoring bites—delay learning.
        </p>
      </section>

      {/* ===== USE TOYS NOT HANDS ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold mb-4">🧸 Use Toys, Not Hands</h4>
        <p className="text-gray-700 leading-relaxed mb-4">
          No matter how cute your puppy is, avoid playing directly with your hands.
          Use chew toys or teething rings to create safe, healthy play routines.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Encourage tug-of-war or fetch with toys, never fingers. When bitten,
          stay still and say calmly <strong>“No biting.”</strong> or <strong>“Ah-ah, gentle.”</strong>
          This teaches boundaries without fear or aggression.
        </p>
      </section>

{/* ===== PETGO SHOP: PREMIUM PUPPY TEETHING TOYS (ALIGNED FINAL) ===== */}
<section className="max-w-5xl mx-auto mb-16 bg-white p-8 rounded-2xl shadow-sm">
  <h4 className="font-semibold mb-4 text-[#8B6A43]">
    PetGo Shop | Premium Puppy Teething Toys
  </h4>
  <p className="text-gray-700 mb-8">
    Carefully chosen to support healthy teething and safe chewing — these toys help your puppy
    develop strong teeth, reduce discomfort, and enjoy playful growth every day.
  </p>

  <div className="grid md:grid-cols-3 gap-8">
    {/* === Product 1 – Benebone === */}
    <div className="bg-[#F9F6F1] rounded-2xl shadow-sm hover:shadow-md transition flex flex-col justify-between p-6 text-center h-full">
      <div>
        <Image
          src="/benebone-dental-toy.jpg"
          alt="Benebone Dental Dog Chew Toy"
          width={280}
          height={200}
          className="object-contain mb-4 rounded-xl max-h-[220px] mx-auto"
        />
        <p className="text-gray-800 font-medium mb-1">
          Benebone Dental Dog Chew Toy
        </p>
        <p className="text-sm text-gray-600 mb-1">Seller: Benebone</p>
        <p className="text-gray-700 text-sm leading-relaxed mb-6 min-h-[40px]">
          Long-lasting peanut-flavored chew toy made in USA for strong chewers.
        </p>
      </div>
      <div>
        <p className="text-[#8B6A43] font-semibold mb-2">$23.99</p>
        <Link
          href="https://www.amazon.ca/Benebone-Dental-Aggressive-Chewers-Lasting/dp/B01FK3EB5Q/ref=sr_1_4_sspa?crid=1P0IMWOUHUSZO&dib=eyJ2IjoiMSJ9.y1aUpwaWkjD6Sqr7a65_cYJjcUrtNnQRpFQhOq0EKOHJkRBZIOxogbPDmaD5751StNv3dTVny4XpURooNL6hQUtCty02-PGun2leLY1im_fhlh_Z1gaRFawObnw4gfJhir9B25SLEh9qe6CLVMceFrtQYDu0chmh4usq-52pFUwsiu1Ad1MBPOwATLNecD1vv1FmwraGRXJdQzXacl2SOKQ79GzTVrT0w4dveb9kuYhm8OugTvEDmeVvKWE1vpp-SN7bc1E1ZjC22mRVQ43C22LcOMu0DHlk4q6PTDgVjdA.owdjzPFptH72I2jKHmfraImOKYjgkkgThUQMHwbAEmw&dib_tag=se&keywords=dog%2Bteething%2Btoys&qid=1761536890&sprefix=dog%2Bteething%2Btoy%2Caps%2C117&sr=8-4-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1"
          target="_blank"
          className="text-[#8B6A43] hover:underline font-medium text-sm"
        >
          View on Amazon &gt;
        </Link>
      </div>
    </div>

    {/* === Product 2 – SPOFLY === */}
    <div className="bg-[#F9F6F1] rounded-2xl shadow-sm hover:shadow-md transition flex flex-col justify-between p-6 text-center h-full">
      <div>
        <Image
          src="/spofly-teething-toys.jpg"
          alt="SPOFLY Teething Puppy Chew Toys"
          width={280}
          height={200}
          className="object-contain mb-4 rounded-xl max-h-[220px] mx-auto"
        />
        <p className="text-gray-800 font-medium mb-1">
          SPOFLY Teething Puppy Chew Toys (2-Pack)
        </p>
        <p className="text-sm text-gray-600 mb-1">Seller: SPOFLY</p>
        <p className="text-gray-700 text-sm leading-relaxed mb-6 min-h-[40px]">
          Freezable natural-rubber toys that soothe gums and clean teeth.
        </p>
      </div>
      <div>
        <p className="text-[#8B6A43] font-semibold mb-2">$16.99</p>
        <Link
          href="https://www.amazon.ca/Teething-Puppies-Cleaning-Protects-Suitable/dp/B09SWJGJ4G/ref=sr_1_9?crid=1P0IMWOUHUSZO&dib=eyJ2IjoiMSJ9.y1aUpwaWkjD6Sqr7a65_cYJjcUrtNnQRpFQhOq0EKOHJkRBZIOxogbPDmaD5751StNv3dTVny4XpURooNL6hQUtCty02-PGun2leLY1im_fhlh_Z1gaRFawObnw4gfJhir9B25SLEh9qe6CLVMceFrtQYDu0chmh4usq-52pFUwsiu1Ad1MBPOwATLNecD1vv1FmwraGRXJdQzXacl2SOKQ79GzTVrT0w4dveb9kuYhm8OugTvEDmeVvKWE1vpp-SN7bc1E1ZjC22mRVQ43C22LcOMu0DHlk4q6PTDgVjdA.owdjzPFptH72I2jKHmfraImOKYjgkkgThUQMHwbAEmw&dib_tag=se&keywords=dog+teething+toys&qid=1761536890&sprefix=dog+teething+toy%2Caps%2C117&sr=8-9"
          target="_blank"
          className="text-[#8B6A43] hover:underline font-medium text-sm"
        >
          View on Amazon &gt;
        </Link>
      </div>
    </div>

    {/* === Product 3 – CGBD === */}
    <div className="bg-[#F9F6F1] rounded-2xl shadow-sm hover:shadow-md transition flex flex-col justify-between p-6 text-center h-full">
      <div>
        <Image
          src="/cgbd-chew-pack.jpg"
          alt="CGBD 6 Pack Dog Chew Toys"
          width={280}
          height={200}
          className="object-contain mb-4 rounded-xl max-h-[220px] mx-auto"
        />
        <p className="text-gray-800 font-medium mb-1">
          CGBD 6 Pack Dog Chew Toys
        </p>
        <p className="text-sm text-gray-600 mb-1">Seller: CGBD</p>
        <p className="text-gray-700 text-sm leading-relaxed mb-6 min-h-[40px]">
          Durable, soft, interactive toys for teething puppies. Perfect starter set.
        </p>
      </div>
      <div>
        <p className="text-[#8B6A43] font-semibold mb-2">$19.99</p>
        <Link
          href="https://www.amazon.ca/Teething-Puppies-Squeaky-Cleaning-Protect/dp/B0CKXD7ZG9/ref=sr_1_6?crid=33FPDYQT6S7XO&dib=eyJ2IjoiMSJ9.cwoBJq8qqSwbykwiWi0qcMLFIYKG5ryHWC0eUoEQCBLJ3AZBfdoSSttO9fEVfTCqGRA-iMnO3MLDSuaiM3OnwYW70VAdWroPZ-fPJ8JOb12fe1-5s8GMdnqpse4FXjRz03Sx4MjD1TfANzqIdUiIyAmfVxFdKr6qIO9N4a7NqLQNkTydBPbtQoBXEg8CKDwjaxvHvK6U-dMuBKnbPDTLNP3w_K3SzsRtiN05neBZu-aZm8_1OicjSf8OFXoBRb8dNkCJQ9Y8baXlndUiSF5v4qUIfrgChrAMr7bFOkNN73U.dfCgUUBzestMG63dcT9TsIhKec704qdsY6-ceC9KVkU&dib_tag=se&keywords=dog%2Bteething%2Btoys%2Bfor%2Bpuppies&qid=1761537058&sprefix=dog%2Bteething%2Caps%2C120&sr=8-6&th=1"
          target="_blank"
          className="text-[#8B6A43] hover:underline font-medium text-sm"
        >
          View on Amazon &gt;
        </Link>
      </div>
    </div>
  </div>
</section>



      {/* ===== SOOTHING TEETHING ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold mb-4">🦴 Soothing Teething Discomfort</h4>
        <p className="text-gray-700 leading-relaxed mb-4">
          Around this time, your puppy’s gums may feel sore or itchy as permanent teeth
          begin emerging. Providing teething-friendly toys helps ease discomfort and
          prevents destructive chewing.
        </p>
        <ul className="list-disc list-inside space-y-3 text-gray-700 mb-6">
          <li>Soft rubber or rope chew toys</li>
          <li>Frozen teething rings</li>
          <li>Puppy-safe cold cloths for gum relief</li>
        </ul>
        <p className="text-gray-700 leading-relaxed mb-6">
          Gentle chewing massages gums, loosens baby teeth naturally, and supports
          healthy adult teeth growth.
        </p>

        {/* Image below soothing section */}
        <div className="flex justify-center">
          <Image
            src="/week10-teething.jpg"
            alt="Puppy teething with toy"
            width={600}
            height={400}
            className="rounded-2xl shadow-md object-cover"
          />
        </div>
      </section>

      {/* ===== GENTLE CORRECTION ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold mb-4">💬 Gentle Correction and Praise</h4>
        <p className="text-gray-700 leading-relaxed mb-4">
          When your puppy follows instructions or stops biting, praise them warmly.
          A soft “Good job!” or a small treat reinforces good behavior. Puppies thrive
          on affection and positive reinforcement.
        </p>
        <p className="text-gray-700">
          Avoid scolding or physical punishment—the goal isn’t fear, but trust and
          understanding.
        </p>
      </section>

      {/* ===== UNDERSTANDING TEETHING PROCESS ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold mb-4">🧠 Understanding the Teething Process</h4>
        <p className="text-gray-700 leading-relaxed mb-4">
          Puppy teeth, also known as deciduous teeth, begin appearing around three
          weeks after birth. They emerge in sequence—front incisors first, then
          canines and premolars.
        </p>
        <p className="text-gray-700 leading-relaxed">
          By the fourth month, baby teeth naturally fall out as permanent teeth
          replace them. If any remain, your vet may suggest removal to prevent
          misalignment.
        </p>
      </section>

      {/* ===== PLAY & GROWTH ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold mb-4">🧩 Play, Patience &amp; Growth</h4>
        <p className="text-gray-700 leading-relaxed mb-4">
          Encouraging gentle play supports emotional and physical growth. Chew toys
          stimulate jaw muscles and provide comfort during the teething transition.
        </p>
        <p className="text-gray-700">
          Playtime teaches social skills, builds confidence, and strengthens the bond
          between you and your puppy.
        </p>
      </section>

      {/* ===== LOVE & CONSISTENCY ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold mb-4">❤️ Love, Praise &amp; Consistency</h4>
        <p className="text-gray-700 leading-relaxed mb-4">
          Puppies grow through love, guidance, and repetition. Praise them often,
          stay patient, and use consistency to build security and trust.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Your calm teaching today shapes their lifelong manners and confidence.
        </p>
      </section>

      {/* ===== PETGO TIP ===== */}
      <section className="text-center max-w-3xl mx-auto mb-16">
        <div className="bg-[#fffaf5] border border-[#e6dccf] rounded-2xl shadow-sm p-8">
          <h5 className="font-semibold text-[#8B6A43] mb-3">🐶 PetGo Tip</h5>
          <p className="text-gray-700 leading-relaxed mb-4">
            💬 “Patience is part of love.” Chewing, biting, and mouthing are all
            natural growth steps. Through gentle correction, consistent training,
            and the right toys, you’ll guide your puppy toward safe, happy habits.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 text-left inline-block mb-4">
            <li>Soft rope or plush chew toys</li>
            <li>Cold teething rings for gum comfort</li>
            <li>Natural puppy dental chews for healthy tooth growth</li>
          </ul>
          <p className="text-gray-700">
            Your gentle care today creates the foundation for lifelong trust &amp;
            happiness. 🐾
          </p>
        </div>
      </section>

      {/* ===== CONTINUE / APP BANNER ===== */}
      <section className="text-center max-w-4xl mx-auto mb-20">
        <h4 className="font-semibold mb-3 text-[#111827]">
          Continue with PetGo’s Puppy Care Guide
        </h4>
        <p className="text-gray-700 mb-10">
          PetGo continues to support you and your growing puppy every step of the way —
          with training guidance, health tips, and care tools designed to help your
          best friend thrive.
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
