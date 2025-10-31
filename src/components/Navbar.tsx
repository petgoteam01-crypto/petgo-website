"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { auth } from "@/lib/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push("/");
    } catch (err) {
      console.error("Logout failed:", err);
      alert("Something went wrong while logging out. Please try again.");
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-white z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 px-3 md:px-6 py-2.5 md:py-3">
          
          {/* ✅ 로고 - 고정 */}
          <Link href="/" className="flex items-center shrink-0">
            <Image src="/petgo-logo.png" alt="PetGo Logo" width={40} height={40} />
          </Link>

          {/* ✅ 메뉴 - 가로 스크롤 (좌우 패딩으로 짤림 방지) */}
          <nav className="flex-1 overflow-x-auto overflow-y-hidden no-scrollbar px-2">
            <div className="flex items-center gap-x-4 md:gap-x-6 text-[13px] sm:text-[14px] md:text-[15px] font-medium text-[#111827] whitespace-nowrap min-w-max">
              <Link href="/about" className="hover:text-[#8B6A43] transition">About Us</Link>
              <Link href="/mobile-app" className="hover:text-[#8B6A43] transition">Mobile App</Link>
              <Link href="/features" className="hover:text-[#8B6A43] transition">Features</Link>
              <Link href="/community" className="hover:text-[#8B6A43] transition">Community</Link>
              <Link href="/donation" className="hover:text-[#8B6A43] transition">Donation</Link>
            </div>
          </nav>

          {/* ✅ 로그인/회원가입 버튼 - 고정 */}
          <div className="flex items-center gap-1.5 md:gap-2 shrink-0">
            {loading ? (
              <span className="text-[13px] text-gray-400 whitespace-nowrap">Loading...</span>
            ) : user ? (
              <>
                <Link
                  href={`/profile/${user.uid}`}
                  className="flex items-center gap-1.5 text-[13px] sm:text-[14px] text-[#4A321E] hover:underline whitespace-nowrap font-medium"
                >
                  <svg 
                    className="w-5 h-5 sm:w-6 sm:h-6" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                  </svg>
                  {user.displayName?.split(' ')[0] || "Profile"}
                </Link>
                <button
                  onClick={handleLogout}
                  className="text-[13px] sm:text-[14px] bg-[#8B6A43] text-white px-3 md:px-4 py-1.5 md:py-2 rounded-full hover:bg-[#745536] transition whitespace-nowrap"
                >
                  Log Out
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="text-[13px] sm:text-[14px] text-[#4A321E] hover:underline whitespace-nowrap"
                >
                  Log In
                </Link>
                <Link
                  href="/signup"
                  className="text-[13px] sm:text-[14px] bg-[#8B6A43] text-white px-3 md:px-4 py-1.5 md:py-2 rounded-full hover:bg-[#745536] transition whitespace-nowrap"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </header>

      <style jsx>{`
        /* 가로 스크롤바 숨김 */
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </>
  );
}