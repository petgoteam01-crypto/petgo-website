// src/lib/firebase.ts
import { initializeApp, getApps, getApp } from "firebase/app";
import {
  getAuth,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// ✅ App을 SSR-safe하게 가져오기
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

// ✅ Auth 초기화
export const auth = getAuth(app);

// ✅ 로그인 세션을 모바일 포함 브라우저 전역에 유지
setPersistence(auth, browserLocalPersistence)
  .then(() => {
    console.log("✅ Firebase Auth persistence enabled (localStorage)");
  })
  .catch((err) => {
    console.error("❌ Auth persistence error:", err);
  });

// ✅ Firestore & Storage 초기화
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
