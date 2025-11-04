"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { useRouter } from "next/navigation";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  fetchSignInMethodsForEmail,
  EmailAuthProvider,
  linkWithCredential,
  onAuthStateChanged,
} from "firebase/auth";
import { auth, db } from "@/lib/firebase";
import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";

export default function LoginPage() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // ✅ 로그인 상태 감지 + Firestore 동기화
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        await createOrUpdateUser(user);
        router.push("/");
      }
    });
    return () => unsubscribe();
  }, [router]);

  // ✅ Firestore user 문서 자동 생성 / 업데이트 함수
  const createOrUpdateUser = async (user: any) => {
    try {
      const userRef = doc(db, "users", user.uid);
      const userSnap = await getDoc(userRef);

      const data = {
        uid: user.uid,
        email: user.email,
        name: user.displayName || "",
        username:
          user.email?.split("@")[0].toLowerCase().replace(/[^a-z0-9]/g, "") || "",
        provider: user.providerData?.[0]?.providerId || "email",
        linkedAccounts: [user.providerData?.[0]?.providerId || "email"],
        photoURL: user.photoURL || "",
        lastLogin: serverTimestamp(),
      };

      if (!userSnap.exists()) {
        await setDoc(userRef, {
          ...data,
          joinedAt: serverTimestamp(),
        });
      } else {
        await setDoc(userRef, data, { merge: true });
      }
    } catch (err) {
      console.error("❌ Failed to sync Firestore user:", err);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // ✅ 이메일 로그인
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!form.email || !form.password) {
      setError("Please enter both email and password.");
      return;
    }

    try {
      setLoading(true);
      const res = await signInWithEmailAndPassword(auth, form.email, form.password);
      await createOrUpdateUser(res.user);
      router.push("/");
    } catch (err: any) {
      let message = "Please enter a valid email address. Try again.";
      if (err.code === "auth/invalid-email") {
        message = "Please enter a valid email address.";
      } else if (err.code === "auth/user-not-found") {
        message = "No account found with this email. Please sign up first.";
      } else if (err.code === "auth/wrong-password") {
        message = "Incorrect password. Please try again.";
      } else if (err.code === "auth/too-many-requests") {
        message = "Too many attempts. Please wait a moment and try again.";
      } else if (err.code === "auth/network-request-failed") {
        message = "Network error. Please check your connection.";
      }
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  // ✅ 구글 로그인 + 이메일 계정 병합 + Firestore 동기화
  const handleGoogleLogin = async () => {
    try {
      setLoading(true);
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      await createOrUpdateUser(result.user);
      router.push("/");
    } catch (err: any) {
      // 🧩 동일 이메일 중복 (이메일로 이미 가입한 경우)
      if (err.code === "auth/account-exists-with-different-credential") {
        const pendingCred = GoogleAuthProvider.credentialFromError(err);
        const email = err.customData?.email;
        const methods = await fetchSignInMethodsForEmail(auth, email);

        if (methods.includes("password")) {
          const password = prompt(
            "This email is already registered with a password. Enter it to link with Google:"
          );
          if (password && pendingCred) {
            const emailCred = EmailAuthProvider.credential(email, password);
            const userCred = await signInWithEmailAndPassword(auth, email, password);
            await linkWithCredential(userCred.user, pendingCred);
            await createOrUpdateUser(userCred.user);
            alert("✅ Google account linked successfully!");
            router.push("/");
          } else {
            alert("Linking cancelled or invalid credential.");
          }
        }
      } else {
        console.error("❌ Google login failed:", err);
        setError("Google login failed. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-end overflow-hidden">
      {/* ✅ Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/login-bg.jpg"
          alt="Family with dog"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* ✅ Login Box */}
      <div className="w-full max-w-md bg-white/95 backdrop-blur-sm shadow-xl rounded-2xl p-10 mr-16 md:mr-24">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-900">
          Welcome Back <span className="text-[#8B6A43]"></span>
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-full p-2 px-4 focus:outline-none"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-full p-2 px-4 focus:outline-none"
          />

          {error && <p className="text-sm text-red-600 mt-2">{error}</p>}

          <div className="flex justify-between text-sm text-gray-700 mt-2">
            <Link href="/forgot-username" className="hover:underline">
              Forgot your username?
            </Link>
            <Link href="/forgot-password" className="hover:underline">
              Forgot your password?
            </Link>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#2C1E0F] text-white py-2 mt-4 rounded-full hover:bg-[#4B3A28] transition font-semibold"
          >
            {loading ? "Logging in..." : "LOGIN"}
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center justify-center my-6">
          <span className="h-px bg-gray-300 w-20"></span>
          <span className="px-3 text-gray-500 text-sm">OR</span>
          <span className="h-px bg-gray-300 w-20"></span>
        </div>

        {/* ✅ Social Login Buttons */}
        <div className="flex justify-center gap-4">
          <button
            onClick={handleGoogleLogin}
            className="flex items-center justify-center w-14 h-14 rounded-full bg-gray-100 shadow hover:bg-gray-200 transition"
          >
            <FcGoogle size={26} />
          </button>

          <button
            disabled
            className="flex items-center justify-center w-14 h-14 rounded-full bg-gray-100 shadow opacity-60 cursor-not-allowed"
            title="Coming soon"
          >
            <FaApple size={28} color="#111827" />
          </button>
        </div>

        <p className="text-center mt-8 text-sm text-gray-700">
          Don’t have an account?{" "}
          <Link
            href="/signup"
            className="font-semibold text-[#8B6A43] hover:underline"
          >
            Join PetGo Now
          </Link>
        </p>
      </div>
    </div>
  );
}
