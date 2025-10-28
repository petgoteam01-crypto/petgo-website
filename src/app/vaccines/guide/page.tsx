import Link from "next/link";

export default function VaccineGuidePage() {
  return (
    <main className="bg-white text-black">
      {/* Header */}
      <section className="px-6 md:px-12 py-10 border-b border-gray-200">
        <div className="max-w-5xl mx-auto leading-relaxed">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-6">
            Dog Vaccination Guidelines in Canada
          </h1>
          <p className="mb-4">
            Practical guidance for core vs. lifestyle vaccines, timing, and provincial considerations—written for pet parents in Canada.
          </p>
          <div className="mt-6">
            <Link href="/vaccines" className="text-sm underline">
              &lt; Back to Vaccines
            </Link>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="px-6 md:px-12 py-12">
        <div className="max-w-5xl mx-auto text-black leading-8">
          {/* 1. Overview and Principles */}
          <h2 className="text-2xl font-bold mt-10 mb-4">1. Overview and Principles</h2>
          <p className="mb-4">
            Vaccination is a critical part of preventive healthcare for dogs. The Canadian Veterinary Medical Association (CVMA)
            advises that vaccination plans should always be tailored to each individual pet. Factors such as a dog’s age, lifestyle,
            environment, travel habits, and overall health should guide which vaccines are administered and how often.
          </p>

          <p className="mb-4">Vaccines are generally divided into two categories:</p>
          <ul className="list-disc list-inside mb-6">
            <li>
              <strong>Core vaccines</strong> – Recommended for all dogs regardless of lifestyle, as they protect against common and serious diseases.
            </li>
            <li>
              <strong>Non-core (lifestyle) vaccines</strong> – Recommended based on specific exposure risks, such as travel, boarding, or contact with wildlife.
            </li>
          </ul>

          <p className="mb-4">
            In Canada, many core vaccines—such as those protecting against distemper, parvovirus, and adenovirus (hepatitis)—now provide immunity for up to three years.
            As a result, booster shots for these vaccines may not be required annually.
          </p>

          <p className="mb-6">
            <strong>Rabies vaccination</strong> is regulated by law in most provinces and territories. The timing of the first dose and the frequency of boosters
            (usually every 1–3 years) depend on local regulations. Regardless of vaccination schedules, veterinarians recommend at least one annual health examination
            for all dogs, with more frequent check-ups for senior pets.
          </p>

          {/* 2. Standard Vaccination Schedule */}
          <h2 className="text-2xl font-bold mt-10 mb-4">2. Standard Vaccination Schedule</h2>
          <p className="mb-6">
            The following is a typical vaccination timeline used in Canadian veterinary practice. Your veterinarian may adjust it based on your dog’s individual
            needs and local requirements.
          </p>

          <div className="overflow-x-auto mb-10">
            <table className="w-full text-sm border border-gray-200 leading-relaxed">
              <thead className="bg-gray-100">
                <tr className="text-left">
                  <th className="p-3 border-b">Age / Stage</th>
                  <th className="p-3 border-b">Vaccine(s)</th>
                  <th className="p-3 border-b">Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3 align-top">6–8 weeks</td>
                  <td className="p-3 align-top">
                    First core vaccine (DHPP/DAPP: Distemper, Hepatitis [Adenovirus], Parvovirus, Parainfluenza)
                  </td>
                  <td className="p-3 align-top">
                    Multiple doses are required because maternal antibodies can reduce early vaccine effectiveness.
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 align-top">10–12 weeks</td>
                  <td className="p-3 align-top">Second core vaccine dose</td>
                  <td className="p-3 align-top">Continue the vaccine series every 3–4 weeks.</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 align-top">14–16 to 18 weeks</td>
                  <td className="p-3 align-top">Third (or sometimes fourth) core dose + Rabies (if permitted at this age)</td>
                  <td className="p-3 align-top">Some provinces allow rabies vaccination as early as 12 weeks.</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 align-top">~1 year after completing puppy series</td>
                  <td className="p-3 align-top">Core booster + Rabies</td>
                  <td className="p-3 align-top">Establishes long-term immunity; most core vaccines are then given every 3 years.</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 align-top">Adult (after first booster)</td>
                  <td className="p-3 align-top">Core vaccine boosters (often every 3 years)</td>
                  <td className="p-3 align-top">Frequency depends on vaccine type, risk level, and veterinary assessment.</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 align-top">Non-core / Lifestyle vaccines</td>
                  <td className="p-3 align-top">Leptospirosis, Bordetella, Lyme disease, Canine influenza</td>
                  <td className="p-3 align-top">Recommended based on risk factors such as travel, boarding, exposure to ticks or wildlife.</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* 3. Common Vaccines and Their Purpose */}
          <h2 className="text-2xl font-bold mt-10 mb-4">3. Common Vaccines and Their Purpose</h2>
          <p className="mb-4">
            <strong>DHPP/DAPP (Core Combination Vaccine):</strong> Protects against several severe and potentially fatal diseases.
            Puppies receive multiple doses, followed by a booster at around one year of age, and then every three years thereafter.
          </p>
          <p className="mb-4">
            <strong>Rabies:</strong> A fatal viral disease that is transmissible to humans. The first dose is typically given between 12–16 weeks of age.
            A booster follows one year later, then every 1–3 years depending on local regulations.
          </p>
          <p className="mb-4">
            <strong>Leptospirosis:</strong> A bacterial disease that is becoming increasingly common in Canada. Because immunity is short-lived,
            this vaccine is typically administered annually.
          </p>
          <p className="mb-4">
            <strong>Bordetella (Kennel Cough):</strong> Recommended for dogs frequently exposed to other dogs, such as in boarding facilities,
            daycare, or dog parks. Usually given once a year.
          </p>
          <p className="mb-6">
            <strong>Lyme Disease, Canine Influenza, and Others:</strong> These vaccines are recommended based on regional risks, outdoor activity,
            and exposure to ticks or other dogs.
          </p>

          {/* 4. Special Considerations */}
          <h2 className="text-2xl font-bold mt-10 mb-4">4. Special Considerations</h2>
          <p className="mb-4">
            <strong>Unknown or Lapsed Vaccination History:</strong> If a dog’s vaccination history is uncertain, veterinarians may recommend a “catch-up”
            schedule, which typically involves two doses given 3–4 weeks apart.
          </p>
          <p className="mb-4">
            <strong>Antibody Titer Testing:</strong> Some veterinarians offer blood tests to measure immunity levels. These tests can help determine if a
            booster is necessary instead of vaccinating automatically.
          </p>
          <p className="mb-4">
            <strong>Shelter and High-Risk Environments:</strong> Dogs entering shelters or high-exposure situations may require immediate or accelerated
            vaccination schedules.
          </p>
          <p className="mb-6">
            <strong>Regional Differences:</strong> Vaccination protocols can vary slightly by province due to differences in rabies laws and veterinary guidelines.
          </p>

          {/* Final Note */}
          <h3 className="text-xl font-semibold mt-10 mb-4">🩺 Final Note</h3>
          <p className="mb-8">
            Routine vaccination is one of the most effective ways to protect your dog’s health and prevent the spread of serious diseases.
            Always consult your veterinarian to design a vaccination plan that suits your dog’s age, lifestyle, and environment.
          </p>

         
        </div>
      </section>
    </main>
  );
}
