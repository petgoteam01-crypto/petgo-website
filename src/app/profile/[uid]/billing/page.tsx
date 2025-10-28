"use client";

export default function BillingPage() {
  return (
    <div className="space-y-8">
      {/* ===== HEADER ===== */}
      <header>
        <h1 className="text-3xl font-bold text-[#4A321E]">
          Billing & Subscription
        </h1>
        <p className="text-sm text-gray-600">
          Manage your membership, payments, and invoices.
        </p>
      </header>

      {/* ===== MEMBERSHIP SECTION ===== */}
      <section className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
        <h2 className="text-lg font-semibold text-[#8B6A43] mb-2">
          Your Membership
        </h2>
        <div className="p-4 bg-[#F9F6F1] rounded-lg text-gray-600 text-sm">
          Coming Soon
        </div>
      </section>

      {/* ===== PAYMENT & BILLING ===== */}
      <section className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
        <h2 className="text-lg font-semibold text-[#8B6A43] mb-2">
          Payment & Billing
        </h2>
        <div className="p-4 bg-[#F9F6F1] rounded-lg text-gray-600 text-sm">
          Coming Soon
        </div>
      </section>

      {/* ===== INVOICE HISTORY ===== */}
      <section className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
        <h2 className="text-lg font-semibold text-[#8B6A43] mb-2">
          Invoice History
        </h2>
        <div className="p-4 bg-[#F9F6F1] rounded-lg text-gray-600 text-sm">
          Coming Soon
        </div>
      </section>
    </div>
  );
}
