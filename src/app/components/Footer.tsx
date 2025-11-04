"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-4 md:px-8 pt-14 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="md:col-span-4">
            <div className="flex items-center gap-3">
              <Image
                src="/petgo-logo.png"
                alt="PetGo"
                width={220}
                height={62}
                className="h-20 w-auto object-contain"
                priority
              />
            </div>
            <h3 className="mt-4 text-3xl font-semibold text-[#111827]">
              About PetGo
            </h3>
            <p className="mt-4 text-[16px] leading-7" style={{ color: "#B58963" }}>
              Blending innovation and compassion to redefine pet care.
            </p>
            <div className="mt-7">
              <Link
                href="/about"
                className="inline-block text-[17px] font-medium hover:opacity-80 text-[#111827]"
              >
                About Us
              </Link>
            </div>
          </div>

          <div className="md:col-span-6">
            <h3 className="text-3xl font-semibold text-[#111827]">Quick Links</h3>
            <div className="mt-7 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-10 gap-y-5 text-[17px] text-[#111827]">
              <FooterLink href="/dog-walking" text="Dog Walking" />
              <FooterLink href="/magazines" text="Magazines" />
              <FooterLink href="/donation" text="Donation" />
              <FooterLink href="/veterinary" text="Veterinary" />
              <FooterLink href="/daycare" text="Daycare" />
              <FooterLink href="/places" text="Places" />
              <FooterLink href="/pet-care-guide" text="Guides" />
              <FooterLink href="/shop" text="Shop" />
              <FooterLink href="/features#smart-tools" text="Smart Tools" />
              <FooterLink href="/adoption" text="Adoption" />
              <FooterLink href="/mobile-app" text="Mobile App" className="text-[#5b46b2]" />
              <FooterLink href="/grooming" text="Grooming" />
              <FooterLink href="/community" text="Community" />
              <FooterLink href="/travel" text="Travel" />
            </div>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-3xl font-semibold text-[#111827]">Contact & Connect</h3>
            <div className="mt-7 space-y-5 text-[17px]">
              <a href="mailto:support@petgoglobal.com" className="block hover:opacity-80 text-[#111827]">
                support@petgoglobal.com
              </a>
              <div className="pt-2 flex items-center gap-5">
                <a
                  href="https://instagram.com/petgoglobal"
                  aria-label="Instagram"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white hover:opacity-90"
                >
                  <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a
                  href="https://tiktok.com/@petgo.global"
                  aria-label="TikTok"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-black text-white hover:opacity-90"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t">
        <div className="mx-auto max-w-7xl px-4 md:px-8 py-6 text-center text-[14px] text-[#111827]">
          © {new Date().getFullYear()} PetGo. All Rights Reserved.{" "}
          <Link href="/privacy" className="underline underline-offset-4 hover:opacity-80">
            Privacy Policy
          </Link>
          {" | "}
          <Link href="/terms" className="underline underline-offset-4 hover:opacity-80">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({
  href,
  text,
  className = "",
}: {
  href: string;
  text: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`hover:opacity-80 whitespace-nowrap ${className}`}
    >
      {text}
    </Link>
  );
}