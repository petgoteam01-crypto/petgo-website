// src/app/api/vet-clinics/route.ts
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("query");

  if (!query) {
    return NextResponse.json({ error: "Missing query" }, { status: 400 });
  }

  // ✅ fallback so it works in both web and Expo environments
  const apiKey =
    process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ||
    process.env.NEXT_PUBLIC_GOOGLE_PLACES_KEY ||
    process.env.EXPO_PUBLIC_GOOGLE_PLACES_KEY;

  // 👇 Add this line here
  console.log("🔍 Using Google Places API key:", apiKey);

  if (!apiKey) {
    console.error("❌ Google Places API key missing!");
    return NextResponse.json(
      { error: "Google API key missing" },
      { status: 500 }
    );
  }

  const url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=veterinary+clinic+in+${encodeURIComponent(
    query
  )}&key=${apiKey}`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    console.log("🔎 Google API status:", data.status);

    if (data.status !== "OK") {
      console.error("Google API Error:", data.error_message || data.status);
      return NextResponse.json(
        { error: "Google API error", details: data },
        { status: 500 }
      );
    }

    const results = data.results.map((place: any) => ({
      place_id: place.place_id,
      name: place.name,
      formatted_address: place.formatted_address,
      rating: place.rating,
      user_ratings_total: place.user_ratings_total,
      open_now: place.opening_hours?.open_now ?? null,
      maps_url: `https://www.google.com/maps/place/?q=place_id:${place.place_id}`,
      geometry: place.geometry, // 지도 마커용 좌표 추가
    }));

    return NextResponse.json({ results });
  } catch (error) {
    console.error("Server error:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}