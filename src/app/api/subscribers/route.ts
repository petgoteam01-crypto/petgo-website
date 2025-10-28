// app/api/subscribers/route.ts
import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/firebase";
import { collection, getDocs, orderBy, query } from "firebase/firestore";

export async function GET(request: NextRequest) {
  try {
    // ⚠️ 프로덕션에서는 관리자 인증 필요
    const newsletterRef = collection(db, "newsletter_subscribers");
    const q = query(newsletterRef, orderBy("subscribedAt", "desc"));
    const querySnapshot = await getDocs(q);

    const subscribers = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return NextResponse.json({ subscribers, count: subscribers.length });
  } catch (error) {
    console.error("Error fetching subscribers:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}