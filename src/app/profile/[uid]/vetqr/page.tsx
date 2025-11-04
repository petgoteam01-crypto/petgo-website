"use client";

import VetQR from "@/app/profile/[uid]/VetQR";

export default function VetQRPage({ params }: { params: { uid: string } }) {
  const { uid } = params;

  return (
    <main className="min-h-screen bg-[#F7F4EF] flex items-center justify-center">
      <VetQR uid={uid} />
    </main>
  );
}
