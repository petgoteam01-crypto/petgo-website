"use client";

import { useRouter } from "next/navigation";
import { AKC_BREEDS } from "@/app/data/breeds"; // ✅ 이미 있는 breeds.ts를 그대로 사용

export default function BreedsPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-[#F9F6F1] p-6">
      <h1 className="text-2xl font-semibold text-[#8B6A43] mb-6 text-center">
        🐾 Choose Your Pet’s Breed
      </h1>

      <div className="max-w-3xl mx-auto bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
        <ul className="grid sm:grid-cols-2 gap-3">
          {AKC_BREEDS.map((breed) => (
            <li
              key={breed}
              onClick={() => {
                // ✅ 선택된 품종을 로컬스토리지에 저장하고 이전 페이지로 복귀
                localStorage.setItem("selectedBreed", breed);
                router.back();
              }}
              className="cursor-pointer border border-gray-200 hover:border-[#8B6A43] hover:bg-[#8B6A43]/10 transition rounded-lg p-3 text-sm text-[#111827]"
            >
              {breed}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
