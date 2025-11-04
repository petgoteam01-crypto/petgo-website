"use client";

import Link from "next/link";

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-[#F9F6F1] text-[#111827] p-8">
      <div className="max-w-4xl mx-auto">
        {/* ===== PAGE HEADER ===== */}
        <h1 className="text-3xl font-bold text-[#4A321E] mb-1">Support & Help</h1>
        <p className="text-sm text-gray-600 mb-8">
          Find answers, contact support, and review our policies.
        </p>

        {/* ===== HELP CENTER ===== */}
        <section className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm mb-10">
          <h2 className="text-lg font-semibold text-[#8B6A43] mb-2">
            Help Center <Link href="#" className="text-[#8B6A43] underline ml-2">FAQ</Link>
          </h2>

          <div className="mt-4">
            <h3 className="font-medium text-[#111827] mb-1">Contact Support</h3>
            <p className="text-sm text-[#111827]">
              <a
                href="mailto:support@petgoglobal.com"
                className="text-[#8B6A43] underline"
              >
                support@petgoglobal.com
              </a>
            </p>
            <p className="text-sm text-red-600 mt-1">
              Please include your username and a brief description of your concern
              in the email subject. <br />
              Our team will reply within 48 hours.
            </p>
          </div>
        </section>

        {/* ===== POLICIES & TERMS ===== */}
        <section className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <h3 className="font-medium text-[#8B6A43] mb-3">Policies & Terms</h3>
          <ul className="space-y-2 text-sm">
  <li>
    <Link
      href="/legal/terms.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#111827] hover:underline"
    >
      Terms & Conditions
    </Link>
  </li>
</ul>

        </section>
      </div>
    </main>
  );
}
