"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-white">
      {/* Top content */}
      <div className="mx-auto max-w-7xl px-4 md:px-8 pt-14 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Brand + About (title directly under logo) */}
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

            {/* Title sits right under the logo */}
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

          {/* Middle: Quick Links (4 columns, no wrapping labels) */}
          <div className="md:col-span-6">
            <h3 className="text-3xl font-semibold text-[#111827]">Quick Links</h3>

            <div className="mt-7 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-10 gap-y-5 text-[17px] text-[#111827]">
              <FooterLink href="/journal" text="My Pet Journal" />
              <FooterLink href="/dog-walking" text="Dog Walking" />
              <FooterLink href="/magazines" text="Magazines" />
              <FooterLink href="/donation" text="Donation" />

              <FooterLink href="/veterinary" text="Veterinary" />
              <FooterLink href="/daycare" text="Daycare" />
              <FooterLink href="/places" text="Places" />
              <FooterLink href="/guides" text="Guides" />

              <FooterLink href="/shop" text="Shop" />
              <FooterLink href="/tools" text="Smart Tools" />
              <FooterLink href="/adoption" text="Adoption" />
              <FooterLink href="/app" text="Mobile App" className="text-[#5b46b2]" />

              <FooterLink href="/grooming" text="Grooming" />
              <FooterLink href="/community" text="Community" />
              <FooterLink href="/travel" text="Travel" />
            </div>
          </div>

          {/* Right: Contact & Social */}
          <div className="md:col-span-2">
            <h3 className="text-3xl font-semibold text-[#111827]">Contact & Connect</h3>

            <div className="mt-7 space-y-5 text-[17px]">
              <a href="mailto:support@petgo.com" className="block hover:opacity-80 text-[#111827]">
                support@petgo.com
              </a>

              <Link href="/help" className="block hover:opacity-80 text-[#111827]">
                Help Center
              </Link>

              {/* Socials (clean SVGs) */}
              <div className="pt-2 flex items-center gap-5">
                <SocialIcon
                  label="Instagram"
                  href="https://instagram.com/"
                >
                  {/* Instagram glyph */}
                  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" fill="white" />
                    <circle cx="17.25" cy="6.75" r="1.25" fill="white" />
                  </svg>
                </SocialIcon>

                <SocialIcon
                  label="YouTube"
                  href="https://youtube.com/"
                >
                  {/* YouTube glyph */}
                  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                    <path d="M22 12c0 4.5-.5 6-6 6H8c-5.5 0-6-1.5-6-6s.5-6 6-6h8c5.5 0 6 1.5 6 6z" />
                    <polygon points="10,9 16,12 10,15" fill="white" />
                  </svg>
                </SocialIcon>

                <SocialIcon
                  label="TikTok"
                  href="https://tiktok.com/"
                >
                  {/* TikTok glyph (simplified) */}
                  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                    <path d="M13 3v3.3c1 .9 2.3 1.5 3.7 1.5V11c-1.7 0-3.2-.6-4.5-1.6V15a4 4 0 1 1-4-4c.3 0 .7.1 1 .2v2.5c-.3-.1-.6-.2-1-.2a1.5 1.5 0 1 0 1.5 1.5V3h3z" />
                  </svg>
                </SocialIcon>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t">
        <div className="mx-auto max-w-7xl px-4 md:px-8 py-6 text-center text-[14px] text-[#111827]">
          © {new Date().getFullYear()} PetGo. All Rights Reserved.{" "}
          <Link href="/privacy" className="underline underline-offset-4 hover:opacity-80">
            Privacy Policy
          </Link>{" "}
          |{" "}
          <Link href="/terms" className="underline underline-offset-4 hover:opacity-80">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}

/* helpers */
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
      // whitespace-nowrap keeps single-line labels like “Pet-Friendly Places”
    >
      {text}
    </Link>
  );
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noreferrer"
      className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-black text-white hover:opacity-90"
    >
      {children}
    </a>
  );
}
