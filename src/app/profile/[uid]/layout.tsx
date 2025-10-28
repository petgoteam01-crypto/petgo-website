"use client";

import React, { ReactNode } from "react";
import Sidebar from "./Sidebar";

export default function ProfileLayout({ children }: { children: ReactNode }) {
  return (
    <main className="flex min-h-screen bg-[#F9F6F1]">
      {/* Sidebar (공용) */}
      <Sidebar />
      {/* 오른쪽 콘텐츠 */}
      <div className="flex-1 p-8">{children}</div>
    </main>
  );
}
