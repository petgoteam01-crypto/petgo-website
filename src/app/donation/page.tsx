"use client";

import Image from "next/image";

export default function DonationPage() {
  return (
    <main className="w-full bg-[#F9F6F1] min-h-screen text-[#4A321E]">
      {/* ===== HERO ===== */}
      <section className="relative w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#4A321E] to-[#7A5C38]" />
        <div className="relative z-10 text-center py-24 px-6">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            Help Us Help More Paws 
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-white/90 leading-relaxed">
            At PetGo, we donate <strong>1% of all revenue</strong> to support pets in need. 
            With your generous help, we can go even further—saving furry friends who 
            have lost their homes and ensuring they receive the care and love they deserve.
          </p>
        </div>

        {/* Subtle background pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "url('https://www.transparenttextures.com/patterns/paper-fibers.png')",
          }}
        />
      </section>

      {/* ===== DONATION FORM ===== */}
      <section className="relative max-w-7xl mx-auto px-4 md:px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Image */}
        <div className="relative rounded-2xl overflow-hidden shadow-lg order-2 md:order-1">
          <Image
            src="/donation-dog.jpg"
            alt="Volunteer helping dog"
            width={800}
            height={600}
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>

        {/* Right: Form */}
        <div className="order-1 md:order-2 bg-white/80 backdrop-blur-lg border border-[#E8DFD2] shadow-xl rounded-2xl p-8">
          <h2 className="font-serif text-3xl font-semibold mb-4 text-[#4A321E]">
            Make a Donation
          </h2>
          <p className="text-[#6B5137] mb-6 text-base leading-relaxed">
            Every donation makes a difference — help us protect, heal, and rehome pets in need.
          </p>

          {/* Frequency */}
          <div className="flex gap-3 mb-6">
            {["One-time", "Monthly"].map((option, i) => (
              <button
                key={option}
                className={`flex-1 py-2 rounded-full font-medium border transition ${
                  i === 0
                    ? "border-[#B58963] text-[#4A321E] bg-[#F5EFE8] hover:bg-[#E7D9C7]"
                    : "border-[#4A321E] text-white bg-[#4A321E] hover:bg-[#6B5137]"
                }`}
              >
                {option}
              </button>
            ))}
          </div>

          {/* Amount */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            {[
              { amount: "$10", desc: "Feed and care for a rescued pet for one day." },
              { amount: "$50", desc: "Provide a vet check-up or vaccination." },
              { amount: "$100", desc: "Fund medical treatment and essentials." },
              { amount: "$200", desc: "Support adoption, food & vet care for a month." },
            ].map(({ amount, desc }) => (
              <button
                key={amount}
                className="p-4 border border-[#E8DFD2] rounded-xl bg-white hover:bg-[#FAF5EE] transition text-left"
              >
                <div className="text-lg font-bold text-[#4A321E] mb-1">
                  {amount}
                </div>
                <p className="text-sm text-[#6B5137]">{desc}</p>
              </button>
            ))}
          </div>

          {/* Custom Input */}
          <input
            type="number"
            placeholder="Enter custom amount"
            className="w-full border border-[#E8DFD2] rounded-md px-4 py-2 text-[#4A321E] placeholder-[#A18B6F] mb-4 focus:ring-2 focus:ring-[#B58963] outline-none"
          />

          {/* Message */}
          <textarea
            rows={3}
            placeholder="Add a message (optional)"
            className="w-full border border-[#E8DFD2] rounded-md px-4 py-2 text-[#4A321E] placeholder-[#A18B6F] mb-6 focus:ring-2 focus:ring-[#B58963] outline-none"
          />

          {/* Button */}
          <button className="w-full py-3 rounded-full font-semibold text-white bg-gradient-to-r from-[#8B6A43] to-[#B58963] hover:opacity-90 transition">
            Donate Now 
          </button>

          <p className="mt-4 text-xs text-center text-[#8B6A43]/70">
            ※ Currently, this site does not process live payments. Please upgrade to enable payment integration.
          </p>
        </div>
      </section>

      {/* ===== IMPACT STORIES ===== */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-20">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="font-serif text-4xl font-semibold mb-4 text-[#4A321E]">
            Small Gifts, Big Impact
          </h2>
          <p className="text-[#6B5137] text-lg leading-relaxed">
            Even the tiniest donation creates ripples of change — 
            together, small acts of kindness build a world where every paw is safe and loved.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {[
            {
              img: "/donation-story1.jpg",
              name: "Jennifer Dupuis",
              subtitle: "Toronto Humane Society",
              desc: "A $10 meal brings hope and comfort to a rescued pet — every bite matters.",
            },
            {
              img: "/donation-story2.jpg",
              name: "Kathy Brown",
              subtitle: "PetRadar Volunteer",
              desc: "Spreading joy and safety—each furry friend awaits a forever family.",
            },
            {
              img: "/donation-story3.jpg",
              name: "Natalie Rivera",
              subtitle: "Mississauga Animal Services",
              desc: "Healing through compassion — every donation helps save lives.",
            },
            {
              img: "/donation-story4.jpg",
              name: "Lucas Nguyen",
              subtitle: "Ontario SPCA",
              desc: "Caring for dignity and comfort — every act of love counts.",
            },
          ].map(({ img, name, subtitle, desc }) => (
            <div
              key={name}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition overflow-hidden flex flex-col"
            >
              <Image
                src={img}
                alt={name}
                width={400}
                height={260}
                className="object-cover w-full h-48"
              />
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-semibold text-lg mb-1 text-[#4A321E]">
                  {name}
                </h3>
                <p className="text-sm text-[#8B6A43] mb-3">{subtitle}</p>
                <p className="text-sm text-[#4A321E]/80 flex-1">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== THANK YOU BANNER ===== */}
      <section className="bg-gradient-to-r from-[#4A321E] to-[#8B6A43] text-white py-16 text-center">
        <h3 className="font-serif text-3xl md:text-4xl font-semibold mb-4">
          Thank You for Making a Difference 
        </h3>
        <p className="max-w-2xl mx-auto text-white/90 text-lg">
          Every dollar, every action, and every kind heart brings us closer to a world 
          where all pets are safe, healthy, and loved.
        </p>
      </section>
    </main>
  );
}
