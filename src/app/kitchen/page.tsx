"use client";

import Image from "next/image";
import { useState } from "react";

export default function KitchenPage() {
  const [activeTab, setActiveTab] = useState<"dog" | "cat">("dog");

  // ===== DOG RECIPES =====
  const dogRecipes = [
    {
      title: "Chicken & Rice Bowl",
      desc: "A balanced homemade meal packed with lean protein and gentle grains.",
      img: "/kitchen/chicken-ricebowl.jpg",
      link: "/kitchen/dog/chicken-ricebowl",
    },
    {
      title: "Peanut Butter Biscuits",
      desc: "Crunchy, pet-safe treats baked with all-natural ingredients.",
      img: "/kitchen/dog-peanut-biscuits.jpg",
      link: "/kitchen/dog/peanut-butter-biscuits",
    },
    {
      title: "Pumpkin Oat Cookies",
      desc: "Soft and healthy bites rich in fiber for sensitive tummies.",
      img: "/kitchen/pumpkin-oat.jpg",
      link: "/kitchen/dog/pumpkin-oat",
    },
  ];

  const recipes = dogRecipes;

  return (
    <main className="min-h-screen bg-[#F9F6F1] text-[#111827] pb-20">
      {/* ===== HEADER ===== */}
      <section className="text-center pt-16 pb-10">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-3 text-[#4A321E]">
          PetGo Kitchen
        </h1>
        <p className="text-lg md:text-xl text-[#8B6A43] mb-8">
          Wholesome, pet-safe recipes made for shared joy.
        </p>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-10">
          <button
            onClick={() => setActiveTab("dog")}
            className={`rounded-full px-6 py-2 font-medium border transition ${
              activeTab === "dog"
                ? "bg-[#D8B693] text-[#4A321E] border-[#D8B693] shadow-md"
                : "border-[#D8B693] text-[#4A321E] hover:bg-[#D8B693]/30"
            }`}
          >
            Dog
          </button>
          <button
            onClick={() => setActiveTab("cat")}
            className={`rounded-full px-6 py-2 font-medium border transition ${
              activeTab === "cat"
                ? "bg-[#D8B693] text-[#4A321E] border-[#D8B693] shadow-md"
                : "border-[#D8B693] text-[#4A321E] hover:bg-[#D8B693]/30"
            }`}
          >
            Cat
          </button>
        </div>
      </section>

      {/* ===== RECIPE OR COMING SOON ===== */}
      {activeTab === "dog" ? (
        <section className="max-w-6xl mx-auto px-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {recipes.map((recipe, index) => (
            <a
              key={index}
              href={recipe.link}
              className="group rounded-2xl bg-white shadow-sm hover:shadow-md transition border border-[#E7E2DD] overflow-hidden flex flex-col"
            >
              <div className="relative w-full h-56 overflow-hidden">
                <Image
                  src={recipe.img}
                  alt={recipe.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              <div className="p-5 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-xl font-serif font-semibold text-[#4A321E] mb-2">
                    {recipe.title}
                  </h3>
                  <p className="text-gray-700 text-base leading-relaxed">
                    {recipe.desc}
                  </p>
                </div>
                <div className="mt-4">
                  <span className="text-[#8B6A43] font-medium group-hover:underline">
                    View Recipe &gt;
                  </span>
                </div>
              </div>
            </a>
          ))}
        </section>
      ) : (
        <section className="flex flex-col items-center justify-center text-center px-6 mt-10">
          <div className="bg-white border border-[#E7E2DD] rounded-2xl shadow-sm p-10 max-w-md">
            <div className="flex justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#D8B693"
                className="w-14 h-14 animate-bounce"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-serif font-semibold text-[#4A321E] mb-2">
              Coming Soon
            </h3>
            <p className="text-gray-700 text-base leading-relaxed mb-4">
              Our feline recipes are still baking in the kitchen!  
              We’re working on delicious, vet-approved meals  
              just for your purring companions.
            </p>
          </div>
        </section>
      )}
    </main>
  );
}
