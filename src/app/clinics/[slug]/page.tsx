// app/clinics/[slug]/page.tsx
import Link from "next/link";
import { notFound } from "next/navigation";

// --------- Demo data (expand as needed) ---------
type VaccineItem = {
  name: string;
  purpose: string;
  price: string;
  sourceLabel?: string;
  sourceHref?: string;
};

type Clinic = {
  slug: string;
  name: string;
  subtitle?: string;
  address?: string;
  phone?: string;
  mapUrl?: string;
  vaccines: VaccineItem[];
};

const CLINICS: Clinic[] = [
  {
    slug: "broadview-vet-clinic",
    name: "Broadview Vet Clinic",
    subtitle:
      "The prices shown are exclusive to PetGo Care+ Premium Members and may differ for non-member visits.",
    address: "880 Broadview Ave, Toronto, ON M4K 2R1",
    phone: "(416) 462-9877",
    mapUrl: "https://www.google.com/maps/place/880+Broadview+Ave,+Toronto,+ON+M4K+2R1",
    vaccines: [
      {
        name: "Core – Basic Package (DHPP / DAPP)",
        purpose:
          "Protects against Distemper, Hepatitis (Adenovirus), Parvovirus, and Parainfluenza.",
        price: "$35",
      },
      {
        name: "Rabies (1-year)",
        purpose: "Legally required; protects against fatal zoonotic disease.",
        price: "$25–$40",
        sourceLabel: "Simcoe Muskoka Health Unit ↗",
        sourceHref: "https://www.simcoemuskokahealth.org/"
      },
      {
        name: "Rabies (3-year) Booster",
        purpose:
          "Extended protection for eligible dogs, subject to provincial/municipal regulation.",
        price: "$35–$50",
        sourceLabel: "Simcoe Muskoka Health Unit ↗",
        sourceHref: "https://www.simcoemuskokahealth.org/"
      },
      {
        name: "DA2PP + 4L (Core + Leptospirosis)",
        purpose: "Combines core vaccine with protection against leptospira bacteria.",
        price: "$30",
        sourceLabel: "Ontario Spay & Neuter Clinic ↗",
        sourceHref: "https://ontariospayneuter.ca/"
      },
      {
        name: "Leptospirosis (standalone / annual)",
        purpose: "Protects against bacterial infection from contaminated water or wildlife.",
        price: "≈ $30",
        sourceLabel: "Ontario SPCA ↗",
        sourceHref: "https://ontariospca.ca/"
      },
      {
        name: "Bordetella (Kennel Cough)",
        purpose:
          "Recommended for dogs frequently in kennels, daycare, boarding, grooming, or training facilities.",
        price: "$35",
        sourceLabel: "Ontario Spay & Neuter Clinic ↗",
        sourceHref: "https://ontariospayneuter.ca/"
      },
      {
        name: "Lyme Vaccine",
        purpose:
          "Protects against Lyme disease transmitted by ticks; consider for outdoor or tick-dense areas.",
        price: "$38–$42",
        sourceLabel: "Ontario Spay & Neuter Clinic ↗",
        sourceHref: "https://ontariospayneuter.ca/"
      },
      {
        name: "Canine Influenza",
        purpose:
          "Provides protection against contagious canine flu viruses; recommended for high-contact dogs.",
        price: "$45",
        sourceLabel: "Ontario Spay & Neuter Clinic ↗",
        sourceHref: "https://ontariospayneuter.ca/"
      },
      {
        name: "Canine Coronavirus (CECoV) (optional)",
        purpose: "Targets mild gastrointestinal illness; rarely used today.",
        price: "$30–$40",
        sourceLabel: "Ontario Spay & Neuter Clinic ↗",
        sourceHref: "https://ontariospayneuter.ca/"
      },
      {
        name: "Rattlesnake Vaccine (regional)",
        purpose:
          "For dogs in areas with venomous snakes (not typically needed in Ontario).",
        price: "~$35",
        sourceLabel: "Ontario Spay & Neuter Clinic ↗",
        sourceHref: "https://ontariospayneuter.ca/"
      }
    ]
  }
];

// Optional: pre-generate static paths
export async function generateStaticParams() {
  return CLINICS.map((c) => ({ slug: c.slug }));
}

// ------------- Page -------------
export default function ClinicDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const clinic = CLINICS.find((c) => c.slug === params.slug);
  if (!clinic) return notFound();

  return (
    <main className="bg-white text-black">
      {/* Header */}
      <section className="px-6 md:px-12 py-10 border-b border-gray-200">
        <div className="max-w-6xl mx-auto leading-relaxed">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-2">
            {clinic.name}
          </h1>
          {clinic.subtitle && (
            <p className="mb-4 font-semibold text-red-600">{clinic.subtitle}</p>
          )}
          {(clinic.address || clinic.phone) && (
            <p className="text-sm mb-4">
              {clinic.address ? clinic.address : null}
              {clinic.address && clinic.phone ? " · " : ""}
              {clinic.phone ? clinic.phone : null}
            </p>
          )}
          <div className="flex items-center gap-4 mt-6">
            <Link href="/vaccines" className="text-sm underline">
              &lt; Back to Vaccines
            </Link>
            {clinic.mapUrl && (
              <a
                href={clinic.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 rounded-full border border-black text-black hover:bg-black hover:text-white transition text-sm"
              >
                Open in Google Map
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Vaccine table */}
      <section className="px-6 md:px-12 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200">
              <thead className="bg-gray-100">
                <tr className="text-left">
                  <th className="p-3 border-b">Vaccine / Service</th>
                  <th className="p-3 border-b">Purpose / Notes</th>
                  <th className="p-3 border-b">Approximate Price (CAD)</th>
                </tr>
              </thead>
              <tbody>
                {clinic.vaccines.map((v, i) => (
                  <tr key={i} className="border-t align-top">
                    <td className="p-3 font-semibold">{v.name}</td>
                    <td className="p-3">{v.purpose}</td>
                    <td className="p-3 whitespace-nowrap">
                      <div>{v.price}</div>
                      {v.sourceHref && v.sourceLabel && (
                        <Link
                          href={v.sourceHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs underline inline-block mt-1"
                        >
                          {v.sourceLabel}
                        </Link>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Call-to-action */}
          <div className="mt-10">
            <Link
              href="/veterinary/clinics"
              className="inline-block px-5 py-2 rounded-full border border-black text-black hover:bg-black hover:text-white transition"
            >
              Book at this Clinic
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
