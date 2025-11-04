"use client";

import Link from "next/link";
import { usePathname, useParams } from "next/navigation";


export default function Sidebar() {
  const pathname = usePathname();
  const { uid } = useParams();

  const tabs = [
    { id: "", name: "Profile & Account" },
    // ✅ 두 번째에 추가된 Vet QR Code
    { id: "vetqr", name: "Vet QR Code" },
    { id: "activity", name: "Activity & History" },
    { id: "billing", name: "Billing & Subscription" },
    { id: "support", name: "Support & Help" },
    { id: "account", name: "Account Management" },
  ];

  return (
    <aside className="w-64 bg-white border-r border-gray-200 p-6 hidden md:block">
      <nav className="space-y-4 text-sm font-medium">
        {tabs.map((tab) => {
          const href = tab.id
            ? `/profile/${uid}/${tab.id}`
            : `/profile/${uid}`;
          const active =
            pathname === href ||
            (pathname === `/profile/${uid}` && tab.id === "");

          return (
            <Link
              key={tab.id}
              href={href}
              className={`block w-full text-left px-3 py-2 rounded-md transition ${
                active
                  ? "bg-[#8B6A43]/10 text-[#8B6A43] font-semibold"
                  : "hover:bg-gray-100 text-gray-700"
              }`}
            >
              {tab.name}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
