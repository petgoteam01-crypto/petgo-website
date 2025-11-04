import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  fetchSignInMethodsForEmail,
  linkWithCredential,
  EmailAuthProvider,
} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "./firebase";

const auth = getAuth();
const provider = new GoogleAuthProvider();

/**
 * Google 로그인 + 기존 이메일 계정 자동 병합
 */
export const signInWithGoogle = async () => {
  try {
    // ✅ Google 로그인 시도
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    const credential = GoogleAuthProvider.credentialFromResult(result);

    if (!user.email) throw new Error("No email found in Google account.");

    console.log("✅ Google Sign-in:", user.email);

    // ✅ 이메일로 가입된 계정이 있는지 확인
    const methods = await fetchSignInMethodsForEmail(auth, user.email);
    if (methods.includes("password")) {
      console.log("⚠️ Email/password account exists. Linking...");

      // 🔐 사용자에게 기존 비밀번호 입력받기
      const password = prompt(
        "This email is already registered with password login. Please enter your password to link your Google account:"
      );
      if (!password) throw new Error("Password required for linking.");

      // ✅ 이메일 계정 로그인 (기존 계정 자격증명)
      const emailCred = EmailAuthProvider.credential(user.email, password);

      // ✅ 현재 Google 로그인 계정과 병합
      if (auth.currentUser) {
        await linkWithCredential(auth.currentUser, emailCred);
        console.log("✅ Google & Email accounts linked!");
      }
    }

    // ✅ Firestore users 문서 동기화
    const userRef = doc(db, "users", user.uid);
    const snap = await getDoc(userRef);

    if (!snap.exists()) {
      await setDoc(userRef, {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName || "",
        photoURL: user.photoURL || "",
        provider: "google.com",
        createdAt: new Date(),
      });
    }

    alert("✅ Google Login Successful!");
    return user;
  } catch (error: any) {
    console.error("❌ Google login error:", error.message);
    alert(error.message);
  }
};

/**
 * 이메일 로그인 (기존 계정)
 */
export const signInWithEmail = async (email: string, password: string) => {
  try {
    const result = await signInWithEmailAndPassword(auth, email, password);
    const user = result.user;

    const userRef = doc(db, "users", user.uid);
    const snap = await getDoc(userRef);

    if (!snap.exists()) {
      await setDoc(userRef, {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName || "",
        photoURL: user.photoURL || "",
        provider: "password",
        createdAt: new Date(),
      });
    }

    return user;
  } catch (error: any) {
    console.error("❌ Email login error:", error.message);
    alert(error.message);
  }
};
