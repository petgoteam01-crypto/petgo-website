"use client";

import Image from "next/image";
import Link from "next/link";

export default function LifestyleTravelMagazine() {
  // ===== ARTICLES LIST =====
  const articles = [
    {
      id: 3,
      title: "Do Dogs Exist That Don’t Like Walks?",
      date: "October 31, 2025",
      description:
        "Some dogs seem to dislike walks — but why? Discover the reasons behind their hesitation and how to help them enjoy outdoor adventures again.",
      image: "/canada-trails-main.jpg",
      link: "/magazines/lifestyle-travel/canada-trails",
    },
    {
      id: 2,
      title: "Top Pet-Friendly Hotels for a Weekend Getaway",
      date: "October 18, 2025",
      description:
        "From boutique stays to lakeside resorts — here are the best destinations that welcome pets with open paws.",
      image: "/magazines/pet-hotels.jpg",
      link: "/magazines/lifestyle-travel/pet-hotels",
    },
    {
      id: 1,
      title: "Travel Essentials for Your Pet",
      date: "October 10, 2025",
      description:
        "Pack smarter and travel better with these must-have pet travel kits, carriers, and calming accessories for stress-free adventures.",
      image: "/magazines/travel-essentials.jpg",
      link: "/magazines/lifestyle-travel/travel-essentials",
    },
  ];

  return (
    <main className="min-h-screen bg-[#FAF9F7] py-16 px-6">
      {/* ===== HEADER ===== */}
      <div className="text-center mb-14">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#4A321E] mb-3">
          Lifestyle & Travel
        </h1>
        
      </div>

      {/* ===== ARTICLE LIST ===== */}
      <div className="max-w-5xl mx-auto grid gap-10 md:gap-12">
        {articles.map((article) => (
          <Link
            key={article.id}
            href={article.link}
            className="flex flex-col md:flex-row bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-shadow"
          >
            <div className="relative w-full md:w-2/5 h-56 md:h-auto">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1 p-6 flex flex-col justify-center">
              <h2 className="text-2xl font-semibold text-[#4A321E] mb-2">
                {article.title}
              </h2>
              <p className="text-sm text-gray-500 mb-3">{article.date}</p>
              <p className="text-gray-700 leading-relaxed mb-4">
                {article.description}
              </p>
              <span className="text-[#8B6A43] font-medium hover:underline">
                Read More &gt;
              </span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
