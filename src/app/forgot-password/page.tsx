"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      alert("Please enter your email address.");
      return;
    }
    alert("📩 Password reset link sent to your email!");
  };

  return (
    <div className="relative min-h-screen flex items-center justify-end overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/signup-bg.jpg"
          alt="Family with dog"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Forgot Password Card */}
      <div className="w-full max-w-md bg-white/95 backdrop-blur-sm shadow-xl rounded-2xl p-10 mr-16 md:mr-24">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-900">
          Forgot <span className="text-[#8B6A43]">Password?</span>
        </h1>
        <p className="text-center text-gray-700 mb-8 text-sm">
          Enter the email associated with your account and we’ll send you
          instructions to reset your password.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded-full p-2 px-4 focus:outline-none"
          />
          <button
            type="submit"
            className="w-full bg-[#8B6A43] text-white py-2 rounded-full hover:bg-[#B58963] transition font-semibold"
          >
            Send Reset Link
          </button>
        </form>

        <p className="text-center mt-6 text-sm text-gray-700">
          Remembered your password?{" "}
          <Link
            href="/login"
            className="font-semibold text-[#8B6A43] hover:underline"
          >
            Back to Login
          </Link>
        </p>
      </div>
    </div>
  );
}
