import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar"; // ✅ Header 대신 Navbar import
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "PetGo",
  description: "Pet care made simple with PetGo",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}
      >
        {/* ✅ Navbar (Header 대신) */}
        <Navbar />

        {/* ✅ Page Content */}
        <main className="pt-20">{children}</main>
        {/* pt-20 = fixed Navbar 가리지 않게 여백 */}

        {/* ✅ Global Footer */}
        <Footer />
      </body>
    </html>
  );
}
