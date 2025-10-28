"use client";

import { useState } from "react";
import {
  EmailAuthProvider,
  reauthenticateWithCredential,
  updatePassword,
  signOut,
  deleteUser,
} from "firebase/auth";
import { auth } from "@/lib/firebase";

export default function AccountManagementPage() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [updating, setUpdating] = useState(false);
  const [feedback, setFeedback] = useState("");

  // === ✅ 비밀번호 변경 ===
  const handleUpdatePassword = async () => {
    const user = auth.currentUser;
    if (!user) {
      alert("⚠️ Please log in first.");
      return;
    }

    if (newPassword !== confirmPassword) {
      alert("❌ Passwords do not match.");
      return;
    }

    try {
      setUpdating(true);

      if (user.providerData[0].providerId !== "password") {
        alert("⚠️ This account uses Google/Apple login. Password cannot be changed here.");
        setUpdating(false);
        return;
      }

      const credential = EmailAuthProvider.credential(user.email!, currentPassword);
      await reauthenticateWithCredential(user, credential);
      await updatePassword(user, newPassword);

      alert("✅ Password updated successfully!");
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } catch (error: any) {
      console.error(error);
      if (error.code === "auth/invalid-credential") {
        alert("❌ Current password is incorrect.");
      } else if (error.code === "auth/requires-recent-login") {
        alert("⚠️ Please log in again before changing your password.");
      } else {
        alert(`❌ Failed to update password: ${error.message}`);
      }
    } finally {
      setUpdating(false);
    }
  };

  // === ✅ 로그아웃 ===
  const handleLogout = async () => {
    await signOut(auth);
    alert("✅ Logged out successfully!");
    window.location.href = "/";
  };

  // === ✅ 계정 삭제 ===
  const handleDeleteAccount = async () => {
    if (!auth.currentUser) return;
    if (!confirm("⚠️ Are you sure you want to permanently delete your account? This action cannot be undone.")) return;

    try {
      await deleteUser(auth.currentUser);
      alert("✅ Your account has been permanently deleted.");
      window.location.href = "/";
    } catch (err: any) {
      alert(`❌ Failed to delete account: ${err.message}`);
    }
  };

  return (
    <main className="min-h-screen bg-[#F9F6F1] text-[#111827] p-8">
      <div className="max-w-4xl mx-auto space-y-10">

        {/* ===== HEADER ===== */}
        <div>
          <h1 className="text-3xl font-bold text-[#4A321E] mb-1">
            Account Management
          </h1>
          <p className="text-sm text-gray-600">
            Manage your password, log out, and permanently delete your account.
          </p>
        </div>

        {/* ===== ACCOUNT SECURITY ===== */}
        <section className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-[#8B6A43] mb-4">
            Account Security
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Left Column */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Current Password</label>
                <input
                  type="password"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  placeholder="Enter current password"
                  className="w-full border border-gray-300 rounded-lg p-2 text-[#111827]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Confirm Password</label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm new password"
                  className="w-full border border-gray-300 rounded-lg p-2 text-[#111827]"
                />
              </div>
            </div>

            {/* Right Column */}
            <div>
              <label className="block text-sm font-medium mb-1">New Password</label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Enter new password"
                className="w-full border border-gray-300 rounded-lg p-2 text-[#111827]"
              />
            </div>
          </div>

          <button
            onClick={handleUpdatePassword}
            disabled={updating}
            className="px-6 py-2 rounded-full bg-[#8B6A43] text-white hover:bg-[#B58963] transition disabled:opacity-60"
          >
            {updating ? "Updating..." : "Update Password"}
          </button>

          <ul className="text-sm text-gray-600 mt-4 list-disc ml-5">
            <li>At least 6 characters</li>
            <li>Include upper & lowercase letters</li>
            <li>Include at least one number</li>
            <li>No special characters (@!#%$)</li>
          </ul>
        </section>

        {/* ===== ACCOUNT ACTIONS ===== */}
        <section className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm space-y-6">
          {/* Logout */}
          <div>
            <h3 className="text-lg font-semibold text-[#8B6A43] mb-1">Log Out</h3>
            <p className="text-sm text-[#111827] mb-3">
              You can log out from your account at any time to ensure your information stays secure.
            </p>
            <button
              onClick={handleLogout}
              className="px-5 py-2 rounded-full border border-[#8B6A43] text-[#8B6A43] hover:bg-[#8B6A43] hover:text-white transition"
            >
              Log Out
            </button>
          </div>

          {/* Delete Account */}
          <div>
            <h3 className="text-lg font-semibold text-red-600 mb-2">Delete Account</h3>
            <p className="text-sm text-red-600 mb-3">
              Deleting your account will permanently remove your data, pet profiles, and consultation history. <br />
              This action cannot be undone.
            </p>

            <label className="block text-sm font-medium text-[#111827] mb-1">
              Reason for leaving (optional)
            </label>
            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Your feedback helps us improve PetGo..."
              className="w-full border border-gray-300 rounded-lg p-2 h-24 text-[#111827]"
            />

            <button
              onClick={handleDeleteAccount}
              className="mt-3 text-red-600 hover:underline text-sm font-medium"
            >
              [Permanently Delete Account]
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}
