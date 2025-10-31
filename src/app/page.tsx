"use client";

import Image from "next/image";
import Link from "next/link";
import Newsletter from "./components/Newsletter";
import { PLACES } from "./data/places";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">


{/* ===== HERO SECTION (IMAGE VERSION) ===== */}
<section className="relative w-full h-[85vh] overflow-hidden flex items-center justify-center">
  {/* ✅ Background image */}
  <Image
    src="/hero-image.jpg" // replace with your actual image filename
    alt="Happy pet parents with their dog"
    fill
    priority
    className="object-cover"
  />

  {/* ✅ Subtle overlay */}
  <div className="absolute inset-0 bg-black/30" />

  {/* ✅ Centered text box */}
  <div className="relative z-10 bg-white/90 backdrop-blur-sm border border-gray-300 shadow-lg rounded-2xl p-8 text-center max-w-xl mx-auto">
    <h1
      className="font-serif text-4xl md:text-5xl font-semibold tracking-tight mb-4"
      style={{ color: "#4A321E" }}
    >
      Welcome to PetGo
    </h1>
    <p className="text-[#B58963] text-lg leading-relaxed mb-6">
      Trusted by pet parents— offering expert care,
      <br />
      community support, and services all in one place.
    </p>
    <Link
      href="/mobile-app"
      className="rounded-md border border-[#4A321E] text-[#4A321E] px-5 py-2 font-medium hover:bg-[#4A321E] hover:text-white transition"
    >
      PetGo Mobile App
    </Link>
  </div>
</section>


      {/* ===== PET CARE GUIDE + KITCHEN + COMMUNITY + REVIEW SECTION ===== */}
      <section className="w-full border-t bg-white">
        <div className="mx-auto max-w-7xl px-4 md:px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-stretch">
            {/* COLUMN 1 — Pet Care Guide */}
            <div className="flex flex-col justify-between rounded-2xl border border-[#E7E2DD] bg-white p-6 shadow-sm">
              <div>
                <div className="relative w-full overflow-hidden rounded-xl mb-5">
                  <Image
                    src="/petcare-column.jpg"
                    alt="Pet Care Guide"
                    width={600}
                    height={400}
                    className="w-full h-44 object-cover"
                  />
                </div>
                <h2
                  className="font-serif text-3xl md:text-4xl font-semibold tracking-tight mb-3"
                  style={{ color: "#4A321E" }}
                >
                  Pet Care Guide
                </h2>
                <p className="text-gray-800 text-base md:text-lg leading-7">
                  Explore expert insights, wellness tips, and practical advice designed to keep your pet healthy, happy, and thriving.
                </p>
              </div>
              <div className="mt-6">
                <Link
                  href="/pet-care-guide"
                  className="inline-block rounded-md border px-4 py-2 text-sm font-medium hover:bg-gray-50 transition"
                  style={{ borderColor: "#4A321E", color: "#4A321E" }}
                >
                  View Full Pet Care Guide
                </Link>
              </div>
            </div>

            {/* COLUMN 2 — PetGo Kitchen */}
            <div className="flex flex-col justify-between rounded-2xl border border-[#E7E2DD] bg-white p-6 shadow-sm">
              <div>
                <div className="relative w-full overflow-hidden rounded-xl mb-5">
                  <Image
                    src="/petgo-kitchen.jpg"
                    alt="PetGo Kitchen"
                    width={600}
                    height={400}
                    className="w-full h-44 object-cover"
                  />
                </div>
                <h2
                  className="font-serif text-3xl md:text-4xl font-semibold tracking-tight mb-3"
                  style={{ color: "#4A321E" }}
                >
                  PetGo Kitchen
                </h2>
                <p className="text-gray-800 text-base md:text-lg leading-7">
                  Pet-safe recipes for shared joy. Wholesome treats, balanced meals, and creative ideas made with love for furry friends.
                </p>
              </div>
              <div className="mt-6">
                <Link
                  href="/kitchen"
                  className="inline-block rounded-md border px-4 py-2 text-sm font-medium hover:bg-gray-50 transition"
                  style={{ borderColor: "#4A321E", color: "#4A321E" }}
                >
                  View Recipes
                </Link>
              </div>
            </div>

            {/* COLUMN 3 — Community Group */}
            <div className="flex flex-col justify-between rounded-2xl border border-[#E7E2DD] bg-white p-6 shadow-sm">
              <div>
                <div className="relative w-full overflow-hidden rounded-xl mb-5">
                  <Image
                    src="/community-left.jpg"
                    alt="Pet community group"
                    width={600}
                    height={400}
                    className="w-full h-44 object-cover"
                  />
                </div>
                <h2
                  className="font-serif text-3xl md:text-4xl font-semibold tracking-tight mb-3"
                  style={{ color: "#4A321E" }}
                >
                  Community
                </h2>
                <p className="text-gray-800 text-base md:text-lg leading-7">
                  Connect with devoted pet parents, share meaningful stories, and belong to a warm, expert-guided community.
                </p>
              </div>
              <div className="mt-6">
                <Link
                  href="/community"
                  className="inline-block rounded-md border px-4 py-2 text-sm font-medium hover:bg-gray-50 transition"
                  style={{ borderColor: "#4A321E", color: "#4A321E" }}
                >
                  Join the Discussion
                </Link>
              </div>
            </div>

            {/* COLUMN 4 — Review */}
            <div className="flex flex-col justify-between rounded-2xl border border-[#E7E2DD] bg-white p-6 shadow-sm">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src="/pet-parent.jpg"
                    alt="Happy PetGo customer"
                    width={72}
                    height={72}
                    className="h-16 w-16 rounded-full object-cover ring-2 ring-[#B58963]"
                  />
                  <div>
                    <h3 className="font-semibold text-[#111827]">Jason Brown</h3>
                    <p className="text-sm text-gray-500">Toronto • Dog Dad</p>
                    <div className="flex mt-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="h-4 w-4" viewBox="0 0 20 20" fill="#8B6A43">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.09 3.355a1 1 0 00.95.69h3.528c.967 0 1.371 1.24.588 1.81l-2.854 2.073a1 1 0 00-.364 1.118l1.09 3.356c.3.921-.755 1.688-1.54 1.118l-2.854-2.073a1 1 0 00-1.176 0l-2.854 2.073c-.785.57-1.84-.197-1.54-1.118l1.09-3.356a1 1 0 00-.364-1.118L2.793 8.782c-.783-.57-.379-1.81.588-1.81h3.528a1 1 0 00.95-.69l1.09-3.355z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-800 text-base leading-7">
                  PetGo has completely changed how I care for my dog. From finding trusted vets and groomers to discovering pet-friendly places, everything is effortless, fast, and reliable.
                  <br />
                  What truly touched me is PetGo’s heart. Knowing that 5% of what I spend goes to supporting animal shelters makes every purchase feel meaningful.
                </p>
              </div>
              <div className="mt-6">
                <span className="inline-flex items-center rounded-full bg-[#4A321E] px-3 py-1 text-xs font-medium text-white">
                  Premium Member
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================= */}
      {/* Section: PetGo Places */}
      {/* ============================= */}
      <section className="py-16 bg-[#FAF9F7]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-serif text-[#8B6A43] text-center mb-6">
            Want to try this spot with PetGo?
          </h2>
          <p className="text-gray-700 mb-10 max-w-3xl mx-auto text-center">
            Discover pet-friendly parks, cafés, patios, and scenic trails where
            you and your furry friend are always welcome. We curate the best
            spots so you can explore with ease.
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {PLACES.slice(0, 4).map((place) => (
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
                  priority={false}
                />
                <div className="p-5">
                  <p className="text-sm text-gray-500 mb-1">{place.category}</p>
                  <h3 className="text-lg font-semibold mb-2">{place.title}</h3>
                  <p className="text-gray-700 text-sm">{place.blurb}</p>
                </div>
              </Link>
            ))}
          </div>

          {/* Centered "View More >" button */}
          <div className="mt-10 flex justify-center">
            <Link
              href="/places"
              className="inline-block px-7 py-2 rounded-lg border border-[#EADDCA] text-[#C4A484] font-medium text-lg"
            >
              View More &gt;
            </Link>
          </div>
        </div>
      </section>

      {/* ===== FIND YOUR PERFECT COMPANION ===== */}
      <section
        className="relative w-full bg-center bg-cover py-28 md:py-32 text-center"
        style={{ backgroundImage: "url(/adoption-banner.jpg)" }}
        aria-label="Find Your Perfect Companion"
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative max-w-4xl mx-auto px-6 z-10">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            Find Your Perfect Companion
          </h2>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-10">
            Because every pet deserves love — and a forever home.{" "}
            <br className="hidden md:block" />
            PetGo connects families with their perfect companions through a trusted adoption experience.
            By completing a quick survey, you can discover the right pet match, explore verified information,
            and welcome a new member into your family with confidence.
          </p>

          <Link
            href="/survey"
            className="inline-block rounded-xl border border-white text-white px-8 py-3 text-lg font-semibold hover:bg-white/20 transition"
          >
            Discover Your Pawfect Match &gt;
          </Link>
        </div>
      </section>

      {/* ============================= */}
      {/* Section: What You Can Expect */}
      {/* ============================= */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-[#4A3520]">
            What You Can Expect
          </h2>
          <p className="mt-5 text-lg text-[#4B5563] max-w-3xl mx-auto font-normal">
            At PetGo, we bring together expert care, supportive community, and
            smart tools—so you and your pet always feel confident and connected.
          </p>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Veterinary", href: "/veterinary", img: "/expect-veterinary.jpg" },
              { title: "Grooming", href: "/grooming", img: "/expect-grooming.jpg" },
              { title: "Shop", href: "/shop", img: "/expect-shop.jpg" },
              { title: "Adoption", href: "/adoption", img: "/expect-adoption.jpg" },
              { title: "Dog Walking", href: "/dog-walking", img: "/expect-dog-walking.jpg" },
              { title: "Daycare", href: "/daycare", img: "/expect-daycare.jpg" },
            ].map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="group flex flex-col items-center rounded-2xl border border-neutral-200 bg-white p-5 md:p-6 text-center hover:shadow-lg transition"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-40 h-28 object-cover rounded-md mx-auto"
                />
                <h3 className="mt-6 text-2xl font-serif font-semibold text-[#000000] group-hover:opacity-90">
                  {item.title}
                </h3>
              </a>
            ))}
          </div>

          <p className="mt-12 text-lg text-[#4B5563] font-normal">
            This is only the beginning —
            <br />
            uncover a world of curated care, privileges, and experiences reserved
            exclusively for our members.
          </p>

          <div className="mt-12">
            <Link
              href="/exclusive-features"
              className="inline-block px-7 py-2 rounded-lg border border-[#4A3520] text-[#4A3520] font-medium text-lg"
            >
              Explore More &gt;
            </Link>
          </div>
        </div>
      </section>

      {/* ============================= */}
      {/* Section: PetGo Magazines */}
      {/* ============================= */}
      <section className="py-20 bg-[#F9F6F1]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-[#4A321E] mb-6">
            PetGo Magazines
          </h2>
          <p className="text-gray-700 text-lg md:text-xl mb-12 max-w-3xl mx-auto">
            Dive into exclusive pet stories, wellness tips, and expert insights from
            veterinarians, trainers, and real pet parents.  
            <br className="hidden md:block" />
            Every edition is designed to inspire your journey as a caring pet owner.
          </p>

          <div className="grid gap-10 md:grid-cols-3">
            {/* Magazine 1 */}
            <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition">
              <div className="relative w-full h-64 overflow-hidden">
                <Image
                  src="/magazine-health.jpg"
                  alt="Healthy Living Issue"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-6 text-left">
                <h3 className="text-2xl font-serif font-semibold text-[#4A321E] mb-2">
                  Healthy Living Issue
                </h3>
                <p className="text-gray-700 mb-4">
                  Explore holistic wellness for your pet — from nutrition and fitness to
                  mental stimulation and seasonal care routines.
                </p>
                <Link
                  href="/magazines/healthy-living"
                  className="inline-block text-[#8B6A43] font-medium hover:underline"
                >
                  Read More &gt;
                </Link>
              </div>
            </div>

            {/* Magazine 2 */}
            <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition">
              <div className="relative w-full h-64 overflow-hidden">
                <Image
                  src="/magazine-lifestyle.jpg"
                  alt="Pet Lifestyle & Travel"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-6 text-left">
                <h3 className="text-2xl font-serif font-semibold text-[#4A321E] mb-2">
                  Lifestyle & Travel
                </h3>
                <p className="text-gray-700 mb-4">
                  Discover pet-friendly cafés, scenic trails, and travel hacks that make
                  every adventure more joyful — wherever you go together.
                </p>
                <Link
                  href="/magazines/lifestyle-travel"
                  className="inline-block text-[#8B6A43] font-medium hover:underline"
                >
                  Read More &gt;
                </Link>
              </div>
            </div>

            {/* Magazine 3 */}
            <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition">
              <div className="relative w-full h-64 overflow-hidden">
                <Image
                  src="/magazine-training.jpg"
                  alt="Training & Behavior"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-6 text-left">
                <h3 className="text-2xl font-serif font-semibold text-[#4A321E] mb-2">
                  Training & Behavior
                </h3>
                <p className="text-gray-700 mb-4">
                  Learn positive reinforcement techniques, socialization strategies, and
                  behavioral insights to strengthen your bond with your pet.
                </p>
                <Link
                  href="/magazines/training-behavior"
                  className="inline-block text-[#8B6A43] font-medium hover:underline"
                >
                  Read More &gt;
                </Link>
              </div>
            </div>
          </div>

          {/* Centered CTA Button */}
          <div className="mt-14">
            <Link
              href="/magazines"
              className="inline-block px-7 py-3 rounded-lg border border-[#8B6A43] text-[#8B6A43] font-medium text-lg hover:bg-[#8B6A43] hover:text-white transition"
            >
              View All &gt;
            </Link>
          </div>
        </div>
      </section>

      {/* ===== APP PROMO ===== */}
      <section className="w-full">
        <div
          className="relative bg-center bg-cover min-h-[420px] md:min-h-[520px]"
          style={{ backgroundImage: "url(/app-promo.jpg)" }}
          aria-label="PetGo App Promo"
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Content */}
          <div className="relative mx-auto max-w-7xl px-4 md:px-6 py-20 md:py-28 z-10">
            <div className="max-w-2xl">
              <h2 className="font-serif text-4xl md:text-5xl font-semibold tracking-tight text-white">
                All-in-One Care, Right in Your Pocket
              </h2>
              <p className="mt-4 text-base md:text-lg leading-7 text-white/90">
                PetGo is your all-in-one companion for pet care — compare vet services,
                access instant health tools, find pet-friendly spots, track wellness,
                and unlock exclusive rewards — all in one seamless app.
              </p>

              {/* Transparent button */}
              <div className="mt-8">
                <Link
                  href="/mobile-app"
                  className="inline-block rectangle-full border-1 border-white text-white px-7 py-3 text-base font-semibold transition duration-300 hover:bg-white/15 hover:backdrop-blur-sm hover:shadow-[0_0_12px_rgba(255,255,255,0.4)]"
                >
                  Explore PetGo Mobile App &gt;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== NEWSLETTER SECTION ===== */}
      <Newsletter />
    </main>
  );
}
