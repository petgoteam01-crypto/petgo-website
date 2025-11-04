"use client";

import dynamic from "next/dynamic";
import { useParams } from "next/navigation";

const RecordViewInner = dynamic(
  () => import("@/app/profile/[uid]/record-view/page"),
  { ssr: false }
);

export default function RecordViewExternal() {
  const { uid } = useParams();

  if (!uid) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-[#F9F6F1] text-[#8B6A43] text-lg">
        Invalid link — missing user ID.
      </main>
    );
  }

  return <RecordViewInner />;
}
