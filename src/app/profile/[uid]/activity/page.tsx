"use client";

import React from "react";

export default function ActivityPage() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-bold text-[#4A321E]">
          Activity & History
        </h1>
        <p className="text-sm text-gray-600">
          View your orders, bookings, and consultation records.
        </p>
      </header>

      {/* Coming Soon 레이아웃 */}
      <section className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
        <h2 className="text-lg font-semibold text-[#8B6A43] mb-2">
          My Orders & Receipts
        </h2>
        <div className="p-4 bg-[#F9F6F1] rounded-lg text-gray-600 text-sm">
          Coming Soon
        </div>
      </section>

      <section className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
        <h2 className="text-lg font-semibold text-[#8B6A43] mb-2">
          Manage My Bookings
        </h2>
        <div className="p-4 bg-[#F9F6F1] rounded-lg text-gray-600 text-sm">
          Coming Soon
        </div>
      </section>

      <section className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
        <h2 className="text-lg font-semibold text-[#8B6A43] mb-2">
          Consultation History
        </h2>
        <div className="p-4 bg-[#F9F6F1] rounded-lg text-gray-600 text-sm">
          Coming Soon
        </div>
      </section>
    </div>
  );
}
