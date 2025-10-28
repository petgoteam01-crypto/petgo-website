import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-4 py-6">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
  src="/petgo-logo.png"
  alt="PetGo"
  width={100}
  height={100}
  priority
  unoptimized
  className="w-24 h-24 object-contain"
/>
          <span className="font-serif text-xl font-bold" style={{ color: "#4A321E" }}>
            PetGo
          </span>
        </Link>

        {/* Nav links */}
        <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <Link href="/about">About Us</Link>
         <Link href="/mobile-app">PetGo App</Link>
          <Link href="/exclusive-features">Features</Link>
          <Link href="/community">Community</Link>
          <Link href="/donation">Donation</Link>
          <Link href="/more">More</Link>
        </nav>
      </div>
    </header>
  );
}