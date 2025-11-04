"use client";

import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile, signOut } from "firebase/auth";
import { auth, db } from "@/lib/firebase";
import { doc, setDoc, getDocs, collection, query, where, serverTimestamp } from "firebase/firestore";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ✅ Firestore user 문서 생성 함수
  const createUserDoc = async (user: any) => {
    const userRef = doc(db, "users", user.uid);
    await setDoc(userRef, {
      uid: user.uid,
      email: user.email,
      name: `${form.firstName} ${form.lastName}`.trim(),
      username: form.username,
      provider: "email",
      linkedAccounts: ["email"],
      photoURL: user.photoURL || "",
      joinedAt: serverTimestamp(),
      lastLogin: serverTimestamp(),
    });
  };

  // ✅ 유저네임 중복 체크
  const checkUsernameDuplicate = async (username: string) => {
    const q = query(collection(db, "users"), where("username", "==", username));
    const snap = await getDocs(q);
    return !snap.empty;
  };

  // ✅ 회원가입
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // 유효성 검사
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (form.username.length < 4 || /[^a-zA-Z0-9]/.test(form.username)) {
      setError("Username must be at least 4 characters and contain only letters or numbers.");
      return;
    }

    try {
      setLoading(true);

      // ✅ 유저네임 중복 방지
      const duplicate = await checkUsernameDuplicate(form.username);
      if (duplicate) {
        setError("This username is already taken. Please choose another one.");
        setLoading(false);
        return;
      }

      // ✅ Firebase Auth에 계정 생성
      const userCredential = await createUserWithEmailAndPassword(auth, form.email, form.password);
      await updateProfile(userCredential.user, {
        displayName: `${form.firstName} ${form.lastName}`,
      });

      // ✅ Firestore user 문서 생성
      await createUserDoc(userCredential.user);

      // ✅ 회원가입 후 자동 로그아웃
      await signOut(auth);

      alert("🎉 Account created successfully! Please sign in to continue.");
      router.push("/login");
    } catch (err: any) {
      console.error(err);
      let message = "Something went wrong. Please try again.";

      if (err.code === "auth/email-already-in-use") {
        message = "This email is already registered. Please sign in instead.";
      } else if (err.code === "auth/invalid-email") {
        message = "Please enter a valid email address.";
      } else if (err.code === "auth/weak-password") {
        message = "Password must be at least 6 characters.";
      } else if (err.code === "auth/network-request-failed") {
        message = "Network error. Please check your internet connection.";
      }

      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="relative min-h-screen flex items-center justify-center bg-[#F9F6F1]">
      {/* ✅ Background Image */}
      <Image
        src="/signup-bg.jpg"
        alt="Pets background"
        fill
        className="object-cover object-center opacity-90 -z-10"
        priority
      />

      {/* ✅ Signup Card */}
      <div className="bg-white/90 backdrop-blur-sm shadow-md border border-gray-300 rounded-xl p-10 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-[#111827] mb-6">Welcome to PetGo</h1>

        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <div className="flex gap-3">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={form.firstName}
              onChange={handleChange}
              required
              className="w-1/2 border-b border-gray-400 bg-transparent focus:outline-none p-2"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={form.lastName}
              onChange={handleChange}
              required
              className="w-1/2 border-b border-gray-400 bg-transparent focus:outline-none p-2"
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full border-b border-gray-400 bg-transparent focus:outline-none p-2"
          />

          <input
            type="text"
            name="username"
            placeholder="Username"
            value={form.username}
            onChange={handleChange}
            required
            className="w-full border-b border-gray-400 bg-transparent focus:outline-none p-2"
          />
          <p className="text-xs text-gray-600">
            *Username must be at least 4 characters (letters or numbers only)
          </p>

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
            className="w-full border-b border-gray-400 bg-transparent focus:outline-none p-2"
          />
          <p className="text-xs text-gray-600">*Password must be at least 6 characters.</p>

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={form.confirmPassword}
            onChange={handleChange}
            required
            className="w-full border-b border-gray-400 bg-transparent focus:outline-none p-2"
          />

          {/* ✅ 에러 메시지 */}
          {error && <p className="text-sm text-red-600 mt-2">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#8B6A43] text-white font-semibold py-3 rounded-full mt-4 hover:bg-[#745536] transition-all"
          >
            {loading ? "Creating..." : "Sign Up"}
          </button>
        </form>

        <p className="mt-4 text-sm text-gray-700">
          Already have an account?{" "}
          <Link href="/login" className="text-[#8B6A43] font-medium hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </main>
  );
}
