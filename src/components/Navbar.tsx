"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { auth } from "@/lib/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

export default function Navbar() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert("👋 You've been logged out successfully.");
      window.location.href = "/";
    } catch (err) {
      console.error("Logout failed:", err);
      alert("Something went wrong while logging out. Please try again.");
    }
  };

  return (
    <header className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-8 py-3">
        {/* ✅ Left Section: Logo (줄어든 크기) */}
        <Link href="/" className="flex items-center">
          <Image
            src="/petgo-logo.png"
            alt="PetGo Logo"
            width={1000000}
            height={100}
            className="h-16 w-auto object-contain"
            priority
          />
        </Link>

        {/* ✅ Middle Menu */}
        <div className="hidden md:flex gap-6 text-gray-800 font-medium text-sm">
          <Link href="/about" className="hover:text-[#8B6A43]">
            About Us
          </Link>
          <Link href="/mobile-app" className="hover:text-[#8B6A43]">
            Mobile App
          </Link>
          <Link href="/features" className="hover:text-[#8B6A43]">
            Features
          </Link>
          <Link href="/community" className="hover:text-[#8B6A43]">
            Community
          </Link>
          <Link href="/donation" className="hover:text-[#8B6A43]">
            Donation
          </Link>
        </div>

        {/* ✅ Right Section: Auth Buttons */}
        <div className="flex items-center gap-3">
          {user ? (
            <>
              <Link
                href={`/profile/${user.uid}`}
                className="text-[#8B6A43] font-semibold capitalize hover:underline text-sm"
              >
                {user.displayName || "My Profile"}
              </Link>

              <button
                onClick={handleLogout}
                className="text-sm bg-[#8B6A43] text-white px-4 py-1.5 rounded-full hover:bg-[#B58963] transition font-medium"
              >
                Log Out
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="text-sm font-medium text-gray-700 hover:text-[#8B6A43]"
              >
                Log In
              </Link>
              <Link
                href="/signup"
                className="text-sm bg-[#8B6A43] text-white px-4 py-1.5 rounded-full hover:bg-[#B58963] transition font-medium"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}