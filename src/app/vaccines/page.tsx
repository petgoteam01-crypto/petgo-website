"use client";
import Image from "next/image";
import Link from "next/link";

export default function VaccinesPage() {
  return (
    <div className="bg-white">
      {/* ============================= */}
      {/* Section 1: Hero Banner */}
      {/* ============================= */}
      <div
        className="relative w-full h-[450px] bg-cover bg-center bg-no-repeat flex items-center justify-center px-6"
        style={{ backgroundImage: "url('/vaccines-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative max-w-3xl text-center text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
            Vaccines
          </h1>
          <h2 className="text-xl md:text-2xl mb-3 text-[#E6D3B3]">
            PetGo Premium Members Benefit
          </h2>
          <p className="text-base md:text-lg leading-relaxed mb-6">
            With Pet Care+, Premium members receive exclusive discounted rates
            on some of the most essential and widely recommended veterinary
            services — including core vaccinations.
          </p>

          <Link
            href="/premium"
            className="inline-block px-6 py-3 bg-[#E6D3B3] text-[#4A321E] font-semibold rounded-full shadow hover:bg-[#d4c09f] transition"
            aria-label="Become a PetGo Premium Member"
          >
            Become PetGo Premium Member &gt;
          </Link>
        </div>
      </div>

      {/* ============================= */}
      {/* Section 2: Clinics + Guide Dashboard */}
      {/* ============================= */}
      <div className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* LEFT SIDE (Clinics) */}
          <div className="md:col-span-2">
            {/* Toronto */}
            <div className="mb-12">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-[#4A321E]">Toronto</h2>
                <Link href="/clinics/toronto" className="text-sm text-[#4A321E] underline">
                  View All &gt;
                </Link>
              </div>
              <div className="flex space-x-6 overflow-x-auto pb-6">
                {[
                  { name: "Broadview Vet Clinic", price: "$35.00", img: "clinic-toronto1.jpg" },
                  { name: "VCA Toronto", price: "$35.00", img: "clinic-toronto2.jpg" },
                  { name: "Juno Veterinary", price: "$35.00", img: "clinic-toronto3.jpg" },
                  { name: "East York Veterinary", price: "$35.00", img: "clinic-toronto4.jpg" },
                ].map((clinic, idx) => (
                  <div
                    key={`to-${idx}`}
                    className="min-w-[260px] bg-white rounded-lg shadow-md overflow-hidden"
                  >
                    <Image
                      src={`/${clinic.img}`}
                      alt={clinic.name}
                      width={400}
                      height={250}
                      className="w-full h-40 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="font-semibold text-[#4A321E]">{clinic.name}</h3>
                      <p className="text-sm text-gray-600">{clinic.price}</p>
                      <p className="text-sm text-red-600 font-medium">PetGo Premium Member Price</p>
                      <Link
                        href={`/clinics/${encodeURIComponent(clinic.name.toLowerCase().replace(/\s+/g, "-"))}`}
                        className="mt-2 block text-sm text-right text-gray-700 hover:underline"
                      >
                        Explore More &gt;
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* North York */}
            <div className="mb-12">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-[#4A321E]">North York</h2>
                <Link href="/clinics/north-york" className="text-sm text-[#4A321E] underline">
                  View All &gt;
                </Link>
              </div>
              <div className="flex space-x-6 overflow-x-auto pb-6">
                {[
                  { name: "House Calling Vet", price: "$35.00", img: "clinic-northyork1.jpg" },
                  { name: "Doncaster Animal Clinic", price: "$38.99", img: "clinic-northyork2.jpg" },
                  { name: "Juno Veterinary", price: "$48.99", img: "clinic-toronto3.jpg" },
                  { name: "Lawrence Park Animal Clinic", price: "$49.99", img: "clinic-northyork4.jpg" },
                ].map((clinic, idx) => (
                  <div
                    key={`ny-${idx}`}
                    className="min-w-[260px] bg-white rounded-lg shadow-md overflow-hidden"
                  >
                    <Image
                      src={`/${clinic.img}`}
                      alt={clinic.name}
                      width={400}
                      height={250}
                      className="w-full h-40 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="font-semibold text-[#4A321E]">{clinic.name}</h3>
                      <p className="text-sm text-gray-600">{clinic.price}</p>
                      <p className="text-sm text-red-600 font-medium">PetGo Premium Member Price</p>
                      <Link
                        href={`/clinics/${encodeURIComponent(clinic.name.toLowerCase().replace(/\s+/g, "-"))}`}
                        className="mt-2 block text-sm text-right text-gray-700 hover:underline"
                      >
                        Explore More &gt;
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Etobicoke */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-[#4A321E]">Etobicoke</h2>
                <Link href="/clinics/etobicoke" className="text-sm text-[#4A321E] underline">
                  View All &gt;
                </Link>
              </div>
              <div className="flex space-x-6 overflow-x-auto pb-6">
                {[
                  { name: "Islington Village Clinic", price: "$35.00", img: "clinic-etobicoke1.jpg" },
                  { name: "Cloverdale Vet Clinic", price: "$38.99", img: "clinic-etobicoke2.jpg" },
                  { name: "Renforth Veterinary Clinic", price: "$48.99", img: "clinic-etobicoke3.jpg" },
                  { name: "Royal York Animal Clinic", price: "$49.99", img: "clinic-etobicoke4.jpg" },
                ].map((clinic, idx) => (
                  <div
                    key={`et-${idx}`}
                    className="min-w-[260px] bg-white rounded-lg shadow-md overflow-hidden"
                  >
                    <Image
                      src={`/${clinic.img}`}
                      alt={clinic.name}
                      width={400}
                      height={250}
                      className="w-full h-40 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="font-semibold text-[#4A321E]">{clinic.name}</h3>
                      <p className="text-sm text-gray-600">{clinic.price}</p>
                      <p className="text-sm text-red-600 font-medium">PetGo Premium Member Price</p>
                      <Link
                        href={`/clinics/${encodeURIComponent(clinic.name.toLowerCase().replace(/\s+/g, "-"))}`}
                        className="mt-2 block text-sm text-right text-gray-700 hover:underline"
                      >
                        Explore More &gt;
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE (Guide Dashboard with Table & Notes) */}
          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 h-fit flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-[#4A321E] mb-4">
                Vaccination Guide
              </h3>

              {/* Core Vaccines */}
              <h4 className="text-lg font-semibold text-[#4A321E] mb-2">
                Core Vaccines (Recommended for All Dogs)
              </h4>
              <table className="w-full mb-6 text-sm border border-gray-300 text-black">
                <thead className="bg-gray-100 text-[#4A321E]">
                  <tr>
                    <th className="p-2 text-left">Vaccine</th>
                    <th className="p-2 text-left">First Dose</th>
                    <th className="p-2 text-left">Booster</th>
                    <th className="p-2 text-left">Ongoing</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="p-2 font-medium">
                      DHPP / DAPP <br />
                      <span className="italic text-black">
                        (Distemper, Hepatitis, Parvovirus, Parainfluenza)
                      </span>
                    </td>
                    <td className="p-2">6–8 weeks, then every 3–4 weeks until 16 weeks</td>
                    <td className="p-2">~1 year later</td>
                    <td className="p-2 font-semibold">Every 3 years</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-2 font-medium">
                      Rabies <br />
                      <span className="italic text-black">
                        (Required by law in many provinces)
                      </span>
                    </td>
                    <td className="p-2">12–16 weeks (varies by province)</td>
                    <td className="p-2">~1 year later</td>
                    <td className="p-2 font-semibold">Every 1–3 years</td>
                  </tr>
                </tbody>
              </table>

              {/* Lifestyle / Non-Core */}
              <h4 className="text-lg font-semibold text-[#4A321E] mb-2">
                Lifestyle / Non-Core Vaccines (Based on Risk)
              </h4>
              <table className="w-full mb-6 text-sm border border-gray-300 text-black">
                <thead className="bg-gray-100 text-[#4A321E]">
                  <tr>
                    <th className="p-2 text-left">Vaccine</th>
                    <th className="p-2 text-left">Use Case</th>
                    <th className="p-2 text-left">Schedule</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="p-2 font-medium">Leptospirosis</td>
                    <td className="p-2">Common in Canada, wildlife exposure</td>
                    <td className="p-2">Annual</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-2 font-medium">
                      Bordetella <br />
                      <span className="italic text-black">(Kennel Cough)</span>
                    </td>
                    <td className="p-2">Boarding, daycare, dog parks</td>
                    <td className="p-2">Annual</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-2 font-medium">Lyme Disease</td>
                    <td className="p-2">Tick-heavy areas, outdoor dogs</td>
                    <td className="p-2">Annual</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-2 font-medium">Canine Influenza</td>
                    <td className="p-2">High-contact environments</td>
                    <td className="p-2">Annual</td>
                  </tr>
                </tbody>
              </table>

              {/* General Schedule */}
              <h4 className="text-lg font-semibold text-[#4A321E] mb-2">
                General Schedule Overview
              </h4>
              <ul className="list-disc list-inside text-sm text-black mb-6">
                <li>
                  <span className="font-semibold">Puppies:</span> DHPP at 6–8 weeks → boost every 3–4 weeks until 16 weeks
                </li>
                <li>Rabies at 12–16 weeks</li>
                <li>
                  <span className="font-semibold">Adult dogs:</span> Booster ~1 year after puppy series
                </li>
                <li>
                  Then <span className="font-semibold">core vaccines every 3 years</span>, lifestyle vaccines{" "}
                  <span className="font-semibold">annually</span>
                </li>
              </ul>

              {/* Important Notes */}
              <h4 className="text-lg font-semibold text-[#4A321E] mb-2">📌 Important Notes</h4>
              <ul className="list-disc list-inside text-sm text-black">
                <li>Rabies is legally required in most provinces.</li>
                <li>Annual vet check-ups are recommended even if vaccines are not due.</li>
                <li>Vaccine schedules may vary slightly by province and individual health.</li>
                <li>Titers (antibody tests) can sometimes replace routine boosters.</li>
              </ul>
            </div>

            {/* Read More Button */}
            <div className="mt-6 text-right">
              <Link
                href="/vaccines/guide"
                className="text-sm font-medium text-[#4A321E] underline hover:text-[#B58963] transition"
                aria-label="Read More about Vaccination Guide"
              >
                Read More &gt;
              </Link>
            </div>
          </div>
          {/* /RIGHT SIDE */}
        </div>
      </div>
    </div>
  );
}
