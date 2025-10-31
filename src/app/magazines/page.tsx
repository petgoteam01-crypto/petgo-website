export default function MagazinesPage() {
  return (
    <div className="min-h-screen bg-[#FAF9F7] flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-lg p-12 max-w-2xl w-full text-center">
        {/* Clock Icon */}
        <div className="flex justify-center mb-6">
          <svg 
            className="w-16 h-16 text-[#8B6A43]" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="10" strokeWidth="2"/>
            <path strokeWidth="2" strokeLinecap="round" d="M12 6v6l4 2"/>
          </svg>
        </div>

        {/* Coming Soon Text */}
        <h1 className="text-4xl md:text-5xl font-serif font-semibold text-[#4A321E] mb-6">
          Coming Soon
        </h1>

        {/* Description */}
        <p className="text-gray-700 text-lg leading-relaxed">
          The PetGo team is perfecting the{" "}
          <span className="font-semibold text-[#4A321E]">Magazines</span>
          <br />
          experience — so your pets can enjoy exclusive stories,
          <br />
          wellness tips, and expert insights all in one place.
        </p>
      </div>
    </div>
  );
}