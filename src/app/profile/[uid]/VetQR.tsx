"use client";

import { QRCodeCanvas } from "qrcode.react";
import Image from "next/image";

export default function VetQR({ uid }: { uid: string }) {
  if (!uid) return null;

  const qrValue = `https://petgoglobal.com/record-view/${uid}`;


  return (
    <main className="bg-[#F7F4EF] min-h-screen flex flex-col items-center justify-center px-4">
      {/* ===== Top Text ===== */}
      <div className="text-center mb-8">
        <h1 className="text-lg font-semibold text-[#8B6A43] mb-2 flex items-center justify-center gap-2">
          🐾 PetGo Vet QR Code
        </h1>
        <p className="text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
          Show this QR code to your veterinary clinic.
        </p>
      </div>

      {/* ===== QR Card ===== */}
      <div className="bg-white border border-[#E0D7CC] shadow-lg rounded-2xl p-8 w-full max-w-md text-center">
        {/* ===== Logo ===== */}
        <div className="flex justify-center mb-5">
          <Image
            src="/petgo-logo.png" // ✅ 실제 로고 파일
            alt="PetGo Logo"
            width={90}
            height={90}
            className="object-contain opacity-95"
          />
        </div>

        {/* ===== Title ===== */}
        <h2 className="text-[20px] font-semibold text-[#8B6A43] mb-3">
          PetGo Health Record Access
        </h2>
        <p className="text-sm text-gray-600 mb-6 leading-relaxed">
          Scan this QR code to view or upload your pet’s health records.
        </p>

        {/* ===== QR Code ===== */}
        <div className="bg-[#F9F6F1] p-4 rounded-xl inline-block shadow-sm mb-6">
          <QRCodeCanvas
            value={qrValue}
            size={200}
            bgColor="#F9F6F1"
            fgColor="#111827"
            includeMargin={true}
          />
        </div>

        {/* ===== Link & Copy ===== */}
        <div className="mt-4">
          <p className="text-xs text-gray-500 mb-3 break-all">{qrValue}</p>
          <button
            onClick={() => {
              navigator.clipboard.writeText(qrValue);
              alert("✅ QR link copied to clipboard!");
            }}
            className="px-5 py-2 text-sm font-medium rounded-full bg-[#8B6A43] text-white hover:bg-[#B58963] transition"
          >
            Copy Link
          </button>
        </div>

        {/* ===== Footer ===== */}
        <p className="text-[11px] text-gray-400 mt-8">
          Powered by{" "}
          <span className="text-[#8B6A43] font-semibold">PetGo</span>
        </p>
      </div>
    </main>
  );
}
