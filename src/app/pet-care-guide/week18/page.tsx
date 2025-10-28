"use client";

import Image from "next/image";
import Link from "next/link";

export default function Week18Page() {
  return (
    <main className="min-h-screen bg-[#F9F6F1] text-[#111827] py-16 px-6">
      {/* ===== HEADER ===== */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-2">
          Puppy Care Guide
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-[#8B6A43]">
          Week 18 – Teething & Chew Training
        </h2>
      </div>

      {/* ===== SMARTIE IMAGE ===== */}
      <div className="flex justify-center mb-10">
        <Image
          src="/week10mainpic.jpg"
          alt="Puppy teething and chew training"
          width={600}
          height={400}
          className="rounded-2xl shadow-md object-cover"
        />
      </div>

      {/* ===== INTRO ===== */}
      <section className="text-center max-w-3xl mx-auto mb-12">
        <h3 className="text-xl font-semibold mb-3">
          “It’s the stage where those tiny teeth finally start to change — and bite everything in sight!”
        </h3>
        <p className="text-gray-700 leading-relaxed">
          Around 4–5 months, puppies enter the active teething phase — and everything becomes a chew toy.
          With patience and the right guidance, this period helps your puppy learn good chewing habits
          that last for life.
        </p>
      </section>

      {/* ===== WHAT’S HAPPENING ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">🐶 What’s Happening This Week</h4>
        <p className="text-gray-700 leading-relaxed mb-4">
          During teething, your once-gentle puppy may suddenly chew shoes, furniture, and even hands.
          This is normal — chewing relieves gum pressure and itching from erupting adult teeth.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Managed properly, this stage teaches boundaries and strengthens your bond with your puppy.
        </p>
      </section>

      {/* ===== WHY PUPPIES CHEW ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">💬 Why Puppies Chew</h4>
        <p className="text-gray-700 leading-relaxed mb-4">
          As baby teeth fall out and permanent teeth emerge, puppies feel gum irritation and instinctively
          chew to relieve discomfort. This isn’t aggression — it’s part of growth.
        </p>
        <p className="text-gray-700 leading-relaxed">
          The teething process lasts about 1–2 months. Safe teething toys and proper redirection help
          them learn what’s appropriate to chew.
        </p>
      </section>

      {/* ===== COMMON TEETHING SYMPTOMS ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">🪥 Common Teething Symptoms</h4>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>
            <strong>Minor Bleeding:</strong> Temporary gum bleeding as teeth loosen — stops quickly.
          </li>
          <li>
            <strong>Slight Odor:</strong> Mild metallic smell; clean gently with dental wipes or soft cloth.
          </li>
          <li>
            <strong>Loss of Appetite:</strong> Gum soreness may reduce appetite; offer soft or soaked food.
          </li>
          <li>
            <strong>Swallowing Teeth:</strong> Harmless and passes naturally.
          </li>
          <li>
            <strong>Retained Baby Teeth:</strong> If adult teeth grow beside baby teeth, see your vet.
          </li>
        </ul>
        <p className="text-gray-700 mt-4">
          Regular checks ensure proper alignment and healthy adult teeth development.
        </p>
      </section>

      {/* ===== TOYS TABLE ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm overflow-x-auto">
        <h4 className="font-semibold text-[#8B6A43] mb-4">🧸 Teething Toys vs. Regular Toys</h4>
        <p className="text-gray-700 leading-relaxed mb-6">
          Regular toys and teething toys have different functions — choosing the right ones helps your
          puppy learn healthy chewing behavior.
        </p>

        <table className="w-full border-collapse text-sm md:text-base">
          <thead>
            <tr className="bg-[#F9F6F1] text-[#8B6A43] border-b border-[#e6dccf]">
              <th className="p-3 text-left">Type</th>
              <th className="p-3 text-left">Purpose</th>
              <th className="p-3 text-left">Material</th>
              <th className="p-3 text-left">Recommended Use</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            <tr className="border-b border-[#e6dccf]">
              <td className="p-3 font-medium">Regular Toys</td>
              <td className="p-3">Stimulate curiosity and play</td>
              <td className="p-3">Soft plush, squeaky</td>
              <td className="p-3">Playtime and bonding</td>
            </tr>
            <tr>
              <td className="p-3 font-medium">Teething Toys</td>
              <td className="p-3">
                Relieve gum irritation and support dental growth
              </td>
              <td className="p-3">Natural rubber, rope, nylon, safe wood</td>
              <td className="p-3">Chewing and soothing</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* ===== SAFE CHEWING MATERIALS ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">🪵 Safe Chewing Materials</h4>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Natural rubber and rope toys — durable yet gentle on gums.</li>
          <li>Soft wood chews (coffee tree or olive wood) help massage gums.</li>
          <li>Avoid toys with small parts, squeakers, or stuffing that can be swallowed.</li>
          <li>Replace toys that fray, splinter, or break.</li>
          <li>Refrigerate teething toys (not freeze) for soothing cold relief.</li>
        </ul>
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

    {/* === Product 3 – Mammoth Pet Products === */}
    <div className="bg-[#F9F6F1] rounded-2xl shadow-sm hover:shadow-md transition flex flex-col justify-between p-6 text-center h-full">
      <div>
        <Image
          src="/mammoth-flossy-chews.jpg"
          alt="Mammoth Flossy Chews 100% Cotton Rope Tug"
          width={280}
          height={200}
          className="object-contain mb-4 rounded-xl max-h-[220px] mx-auto"
        />
        <p className="text-gray-800 font-medium mb-1">
          Flossy Chews 100% Cotton 3-Knot Rope Tug (25-Inch)
        </p>
        <p className="text-sm text-gray-600 mb-1">
          Seller: Mammoth Pet Products
        </p>
        <p className="text-gray-700 text-sm leading-relaxed mb-6 min-h-[40px]">
          Durable rope toy made from 100% cotton — great for tugging, tossing, and dental health.
        </p>
      </div>
      <div>
        <p className="text-[#8B6A43] font-semibold mb-2">$16.36</p>
        <Link
          href="https://www.amazon.ca/MAMMOTH-Flossy-100-Percent-Cotton-25-Inch/dp/B000634LKQ/ref=sr_1_12?crid=MK5SY3N5HNT9&dib=eyJ2IjoiMSJ9.-rPY8l-cIrqEr6oDXlii7Vwd8sG7SaeYiX8NyXl8a9AmmfN6Ku5WW4ZPW12PYeHZcEP00KVLp-SFy-ONhbPF8_zXKJNvaxmHFF4Rjj1b49le9P_Rai4sBNff4FDlQ7MJu9SZvNmHfkJ0wGb-_MF0owTrpe04Wm5kQbneF37o-vH8fccIjkQDxROXy2X0GF59moB8yp0gIopxpxwd2y-sPP1bOxmc_Qq79txGdxPMpG3kyoAba_O1RbioWnY0EPWUPi_THtogqKeDmhJZfGliao6dlQjXlUpwIgDav2itF6w.SSAV5jBRh4Fu0wK5hpjlFJKhufkhqwHPM4a6qgqeRW8&dib_tag=se&keywords=dog%2Brope%2Btoy&qid=1761541706&sprefix=dog%2Brope%2Btoy%2Caps%2C114&sr=8-12&th=1"
          target="_blank"
          className="text-[#8B6A43] hover:underline font-medium text-sm"
        >
          View on Amazon &gt;
        </Link>
      </div>
    </div>
  </div>
</section>


      {/* ===== PETGO TIPS ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">💡 PetGo Tips for Smooth Teething</h4>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Rotate 2–3 toy textures to keep your puppy engaged.</li>
          <li>Supervise chewing to prevent fraying or swallowing small pieces.</li>
          <li>Redirect inappropriate chewing gently — replace with a toy, not scolding.</li>
          <li>Start dental care early with gentle gum wipes or brushing.</li>
          <li>Offer soft, balanced meals to support gum comfort and tooth growth.</li>
        </ul>
      </section>

      {/* ===== WHAT TO EXPECT ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">🐾 What You Can Expect</h4>
        <p className="text-gray-700 leading-relaxed mb-3">
          Teething helps strengthen your puppy’s jaw, improve gum health, and teach self-control.
          Consistent redirection and safe chew options foster trust and proper behavior.
        </p>
        <p className="text-gray-700 leading-relaxed">
          With patience and structure, this stage becomes one of the most valuable parts of your puppy’s
          development.
        </p>
      </section>

      {/* ===== FINAL NOTE ===== */}
      <section className="text-center max-w-3xl mx-auto mb-16">
        <h4 className="text-2xl font-semibold text-[#8B6A43] mb-3">❤️ Final Note</h4>
        <p className="text-gray-700 leading-relaxed mb-3">
          Every puppy’s teething journey is unique — some breeze through it, while others need more
          comfort. Gentle guidance today prevents bad habits tomorrow.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Stay patient, consistent, and keep those chew toys handy — soon your puppy will flash a
          bright, healthy smile. 🐕✨
        </p>
      </section>

      {/* ===== APP ADVERTISEMENT + COPYRIGHT ===== */}
      <section className="text-center max-w-4xl mx-auto mb-20">
        <h4 className="font-semibold mb-3 text-[#111827]">
          Continue with PetGo’s Puppy Care Guide
        </h4>
        <p className="text-gray-700 mb-10">
          PetGo helps you through every stage — from teething to training and beyond.
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