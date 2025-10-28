// src/app/places/page.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PLACES } from "../data/places";

// Filter chips shown at the top
const CATEGORIES = ["All", "Parks", "Restaurants", "Cafes", "Trails", "Vacation"] as const;
type Canonical = (typeof CATEGORIES)[number];

// Accent/case-insensitive normalizer
const norm = (s: string) =>
  s
    ?.normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase()
    .trim();

// Map raw place.category -> canonical bucket
function toCanonicalCategory(raw?: string): Canonical | "Other" {
  const n = norm(raw ?? "");
  if (!n) return "Other";
  if (n.includes("park")) return "Parks";
  if (n.includes("trail")) return "Trails";
  if (n.includes("cafe") || n.includes("cafes")) return "Cafes";
  if (n.includes("restaurant") || n.includes("dining") || n.includes("patio"))
    return "Restaurants";
  if (n.includes("vacation") || n.includes("hotel") || n.includes("resort") || n.includes("stay"))
    return "Vacation";
  return "Other";
}

export default function PlacesListPage() {
  const [selected, setSelected] = useState<Canonical>("All");

  const filtered =
    selected === "All"
      ? PLACES
      : PLACES.filter((p) => toCanonicalCategory(p.category) === selected);

  return (
    <div className="bg-white">
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          {/* Header */}
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#8B6A43] mb-2">
            PetGo Places
          </h1>
          <p className="text-gray-700 mb-10 max-w-2xl">
            Discover pet-friendly cafés, brunch spots, parks, and scenic trails around Toronto.
            Every location is curated for pet lovers who enjoy exploring the city with their
            furry companions.
          </p>

          {/* Category chips */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {CATEGORIES.map((cat) => {
              const active = selected === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelected(cat)}
                  className={`px-6 py-2 rounded-full border transition-all ${
                    active
                      ? "bg-[#4A3520] text-white border-[#4A3520]"
                      : "text-[#4A3520] border-[#4A3520] hover:bg-[#4A3520]/10"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Grid of places */}
          {filtered.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((place) => (
                <Link
                  key={place.slug}
                  href={`/places/${place.slug}`}
                  className="block rounded-2xl bg-white shadow-sm hover:shadow-md transition border border-gray-100 overflow-hidden"
                >
                  <Image
                    src={place.image}
                    alt={place.title}
                    width={1200}
                    height={800}
                    className="h-56 w-full object-cover"
                  />
                  <div className="p-5">
                    <p className="text-sm text-gray-500 mb-1">{place.category}</p>
                    <h3 className="text-lg font-semibold mb-2 text-[#111827]">
                      {place.title}
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {place.blurb}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500 mt-10">
              No places found for this category.
            </p>
          )}

          {/* Footer / blog-style ending line */}
          <div className="text-center mt-16 border-t border-gray-200 pt-10">
            <p className="text-gray-700 text-base max-w-xl mx-auto leading-relaxed">
              Spend your weekend exploring Toronto’s cozy cafés, vibrant patios, and lush trails — 
              with a latte in one hand and your furry friend by your side. 🐾
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
