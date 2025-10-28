import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("query");

  if (!query) {
    return NextResponse.json({ results: [] });
  }

  try {
    const res = await fetch(
      `https://maps.googleapis.com/maps/api/place/textsearch/json?query=vet+clinics+in+${encodeURIComponent(
        query
      )}&key=${process.env.NEXT_PUBLIC_GOOGLE_PLACES_KEY}`
    );

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch from Google API" }, { status: 500 });
  }
}
