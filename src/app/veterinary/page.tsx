"use client";
import { useState } from "react";
import Link from "next/link";

interface Clinic {
  place_id: string;
  name: string;
  formatted_address: string;
  rating?: number;
  user_ratings_total?: number;
  geometry?: {
    location: {
      lat: number;
      lng: number;
    };
  };
}

export default function VeterinaryPage() {
  const [query, setQuery] = useState("");
  const [clinics, setClinics] = useState<Clinic[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showMap, setShowMap] = useState(true);
  const [mapQuery, setMapQuery] = useState("Toronto veterinary clinics");
  const [showResults, setShowResults] = useState(true);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setError("");
    setClinics([]);

    try {
      const res = await fetch(
        `/api/vet-clinics?query=${encodeURIComponent(query)}`
      );
      
      if (!res.ok) {
        throw new Error('Failed to fetch clinics');
      }

      const data = await res.json();
      
      if (data.results && data.results.length > 0) {
        setClinics(data.results);
        setMapQuery(`${query} veterinary clinics`);
      } else {
        setError("No clinics found. Try another location.");
      }
    } catch (err) {
      console.error("Error fetching vet clinics:", err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white pt-32">
      {/* ============================= */}
      {/* Section 1: Main Title */}
      {/* ============================= */}
      <div className="text-center py-10">
        <h1 className="text-4xl md:text-5xl font-bold text-[#4A321E]">
          Veterinary Care
        </h1>
      </div>

      {/* ============================= */}
{/* Section 2: Banner with Video (Coming Soon Overlay) */}
{/* ============================= */}
<div className="relative w-full h-[500px] max-w-7xl mx-auto rounded-lg overflow-hidden">
  {/* Background Video */}
  <video
    src="/vet-consult.mp4"
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Original Content (still faintly visible) */}
  <div className="absolute left-6 bottom-6 bg-[#E6D3B3] bg-opacity-95 p-8 rounded-lg max-w-md shadow-lg">
    <h2 className="text-2xl md:text-3xl font-bold text-[#4A321E]">
      Quick Vet Advice, Anytime
    </h2>
    <p className="mt-4 text-gray-800 leading-relaxed">
      Worried about your pet but not sure if it's serious?  
      Get instant 1:1 chat or video consultation with a trusted vet during 
      hospital business hours. Save unnecessary costs while gaining peace of mind.
    </p>
    <button
      disabled
      className="mt-6 px-6 py-3 bg-[#4A321E]/60 text-white rounded cursor-not-allowed"
    >
      Talk to a Vet Now &gt;
    </button>
  </div>

  {/* Dark Overlay + Coming Soon Text */}
  <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px] flex flex-col items-center justify-center text-center text-white">
    <h2 className="text-5xl md:text-6xl font-extrabold tracking-wide drop-shadow-lg">
      COMING SOON
    </h2>
    <p className="text-lg md:text-xl text-white/80 mt-3 max-w-lg">
      Our 1:1 Remote Vet Consultation is on the way — bringing expert care straight to your screen. Stay tuned for updates!
    </p>
  </div>
</div>


     {/* ============================= */}
{/* Section 3A: Find Nearby Clinics */}
{/* ============================= */}
<div className="bg-white py-16 px-6 md:px-12">
  <div className="max-w-7xl mx-auto">
    {/* Title */}
    <div className="text-center mb-7">
      <h2 className="text-3xl font-bold text-[#4A321E]">
        Find Veterinary Clinics Near You
      </h2>
      <p className="mt-2 text-gray-600">Search by City or Postal Code</p>
    </div>

    {/* Search Box */}
    <form
      onSubmit={handleSearch}
      className="flex mb-10 max-w-xl mx-auto"
    >
      <input
        type="text"
        placeholder="Enter city or postal code..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="flex-1 px-4 py-3 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-[#4A321E]"
      />
      <button
        type="submit"
        disabled={loading}
        className="px-6 py-3 bg-[#4A321E] text-white rounded-r-lg hover:bg-[#3a2715] transition disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        {loading ? "Searching..." : "Search"}
      </button>
    </form>

    {/* Results */}
    <div>
      {loading && (
        <p className="text-center text-gray-500">Searching for clinics...</p>
      )}

      {error && !loading && (
        <p className="text-center text-red-600">{error}</p>
      )}

      {/* Google Map with iframe */}
      {clinics.length > 0 && !loading && showMap && (
        <div className="mb-6 relative">
          <button
            onClick={() => setShowMap(false)}
            className="absolute top-2 right-2 z-10 bg-white px-3 py-1 rounded shadow hover:bg-gray-100 text-sm font-medium"
          >
            Close Map
          </button>
          <iframe
            width="100%"
            height="400"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps/embed/v1/search?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=${encodeURIComponent(mapQuery)}&language=en`}
          />
        </div>
      )}

      {clinics.length > 0 && !loading && !showMap && (
        <button
          onClick={() => setShowMap(true)}
          className="mb-6 px-4 py-2 bg-[#4A321E] text-white rounded hover:bg-[#3a2715] transition"
        >
          Show Map
        </button>
      )}

      {clinics.length > 0 && !loading && (
        <div>
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm text-gray-600">
              Found {clinics.length} clinic{clinics.length !== 1 ? "s" : ""}
            </p>
            <button
              onClick={() => setShowResults(!showResults)}
              className="text-sm text-[#4A321E] font-medium hover:underline"
            >
              {showResults ? "Hide Results" : "Show Results"}
            </button>
          </div>

          {showResults && (
            <div className="flex flex-wrap gap-4 justify-start">
              {clinics.map((clinic) => (
                <div
                  key={clinic.place_id}
                  className="p-4 border rounded-lg shadow-sm hover:shadow-md transition cursor-pointer w-[220px]"
                  onClick={() => {
                    setMapQuery(clinic.formatted_address);
                    setShowMap(true);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  <h3 className="text-lg font-semibold text-[#4A321E]">
                    {clinic.name}
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">
                    {clinic.formatted_address}
                  </p>
                  {clinic.rating && (
                    <p className="text-yellow-600 mt-2 text-sm">
                      ⭐ {clinic.rating} ({clinic.user_ratings_total} reviews)
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  </div>
</div>




{/* ============================= */}
{/* Section 4: Hospital Products - COMING SOON Overlay */}
{/* ============================= */}
<section className="relative w-full py-20 bg-white overflow-hidden">
  {/* Background (the existing section dimmed) */}
  <div className="opacity-30">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-[#4A321E]">
        Hospital Products
      </h2>
      <p className="mt-3 text-lg text-[#B58963]">Popular Medical Services</p>
      <p className="mt-2 text-sm text-gray-600">
        Enjoy privileged access to discounted services at our partner vet clinics — exclusively for Premium Members.
      </p>
    </div>

    <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6">
      {["Vaccines", "Spay / Neuter", "Exams", "Dental", "Surgery", "Therapy"].map((item) => (
        <div
          key={item}
          className="flex items-center justify-center border border-[#4A321E] rounded-md py-8 text-lg font-medium text-[#4A321E]"
        >
          {item}
        </div>
      ))}
    </div>
  </div>

  {/* Dark overlay + Coming Soon message */}
  <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center text-center px-6">
    <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-wide drop-shadow-lg">
      COMING SOON
    </h2>
    <p className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed">
      This feature is designed for <span className="font-semibold text-white">PetGo Premium Members</span> — 
      offering exclusive discounts  on the most popular veterinary services.
    </p>
  </div>
</section>



      {/* ============================= */}
{/* Section 3B: Customer Review (Transparent Background) */}
{/* ============================= */}
<div className="py-20 px-6 md:px-12 bg-transparent">
  <div className="max-w-3xl mx-auto text-center rounded-2xl p-10">
    <img
      src="/vetcarereviewer.jpg"
      alt="Reviewer"
      className="w-20 h-20 rounded-full mb-4 mx-auto border-2 border-[#4A321E]"
    />
    <h4 className="text-[#4A321E] font-semibold text-lg mb-3">
      Daniel Peterson
    </h4>
    <p className="text-gray-800 text-base leading-relaxed">
      "My doggo Lily just got a surgery at Broadview Vet Clinic, and I absolutely
      love the Pet Care+ feature. As someone with multiple dogs, it's been a huge
      help — not only does it offer exclusive discounts on popular veterinary
      services, but it also connects me directly with trusted partner clinics.
      It's convenient, cost-effective, and truly designed with pet parents like
      me in mind!"
    </p>
  </div>
</div>



      {/* ============================= */}
      {/* Section 5: Remote Screening Advertisement */}
      {/* ============================= */}
      <div
        className="relative w-full py-20 px-6 text-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/remote-screening-bg.jpg')" }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 drop-shadow-md">
            Noticing Unusual Signs in Your Pet?
          </h2>
          <p className="text-lg md:text-xl text-white leading-relaxed mb-8">
            Before rushing to the clinic, try the{" "}
            <span className="font-bold text-[#B58963]">
              PetGo Remote Screening Smart Tool
            </span>
            . It helps you identify possible issues, learn what's normal (and what's not),  
            and prepare for a more informed conversation with your vet.
          </p>
          <Link
  href="/exclusive-features/remote-screening"
  className="inline-block px-8 py-4 bg-white text-[#4A321E] rounded-full font-semibold shadow-lg hover:bg-gray-100 transition"
>
  Start Remote Checkup
</Link>

        </div>
      </div>
    </div>
  );
}