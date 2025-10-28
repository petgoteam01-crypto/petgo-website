export default function AboutPage() {
  return (
    <main className="w-full bg-white min-h-screen">
      <section className="w-full bg-white pt-24 pb-0 px-6 md:px-16">
  {/* Text Content */}
  <div className="max-w-5xl mx-auto text-center">
    {/* Title */}
    <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#5B3A2E] mb-4">
      The Heart of PetGo
    </h1>

    {/* Subtitle */}
    <p className="text-xl text-[#D4A97A] mb-6 font-medium">
      Blending Innovation and Compassion to Redefine Pet Care.
    </p>

    {/* Body */}
    <p className="text-gray-700 text-lg leading-relaxed">
      PetGo combines expert care, advanced tools, and community connection to create a seamless experience
      for pet families. Whether it’s monitoring health, accessing veterinary support, exploring pet-friendly
      places, or unlocking member-exclusive rewards, every detail is crafted to make life with your pet simpler,
      safer, and more fulfilling.
    </p>
  </div>

  {/* Image with height control */}
  <div className="mt-12 w-full overflow-hidden">
    <img
      src="/signup-bg.jpg"
      alt="The Heart of PetGo"
      className="w-full object-cover"
      style={{ maxHeight: '300px' }} // Adjust height as needed
    />
  </div>
</section>

{/* ===== Our Story Section ===== */}
<section className="mx-auto max-w-4xl px-4 md:px-6 py-16 text-center">
  <h2
    className="font-serif text-3xl md:text-4xl font-semibold mb-4"
    style={{ color: "#4A321E" }}
  >
    Our Story
  </h2>
  <div className="w-16 h-0.5 bg-[#B58963] mx-auto mb-8"></div>

  <div className="space-y-6 text-[#6B5A49] leading-relaxed text-lg">
    <p>
      PetGo was born from a simple truth: we are pet parents too. As a dog mom
      and dog dad, we understand the joys, challenges, and responsibilities that
      come with giving our pets the best life possible. That’s why we created
      PetGo — a platform where expert care, smart tools, and a supportive
      community come together to make pet care easier, more reliable, and more
      compassionate.
    </p>

    <p>
      We know that many of our members are first-time pet owners, and that
      journey can feel overwhelming at times. PetGo is here to guide you every
      step of the way — offering trusted veterinary support, practical tips, and
      a community that shares your questions, experiences, and love for pets.
    </p>

    <p>
      But our mission doesn’t stop there. We believe in giving back to the
      larger pet community, which is why 1% of all revenue is donated directly
      to dog shelters. For us, every feature you use, every service you access,
      is also helping another pet find safety, love, and a forever home.
    </p>

    <p>
      PetGo isn’t just a platform — it’s a community, a lifestyle, and a promise
      to every pet family. Together, we are building a future where pets live
      healthier, happier lives, and families feel the joy of knowing they are
      never alone in the journey.
    </p>
  </div>
</section>

{/* ===== Trusted Collaborations Section ===== */}
<section className="mx-auto max-w-7xl px-4 md:px-6 py-16 text-center">
  <h2
    className="font-serif text-3xl md:text-4xl font-semibold mb-4"
    style={{ color: "#4A321E" }}
  >
    Trusted Collaborations
  </h2>
  <div className="w-16 h-0.5 bg-[#B58963] mx-auto mb-12"></div>

  {/* Logos Grid */}
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center justify-items-center">
    {[
      { src: "/orijen.png", alt: "Orijen" },
      { src: "/openfarm.png", alt: "Open Farm" },
      { src: "/broadview.png", alt: "Broadview Veterinary Hospital" },
      { src: "/vca.png", alt: "VCA Animal Hospitals" },
      { src: "/acana.png", alt: "Acana" },
      { src: "/juno.png", alt: "Juno Veterinary" },
      { src: "/crumps.png", alt: "Crumps Naturals" },
    ].map(({ src, alt }) => (
      <div key={alt} className="relative w-32 h-16 flex items-center justify-center">
        <img
          src={src}
          alt={alt}
          className="max-h-16 object-contain"
        />
      </div>
    ))}
  </div>

  {/* View All Link */}
  <div className="mt-8">
    <a
      href="/partners"
      className="text-sm font-medium underline underline-offset-4"
      style={{ color: "#4A321E" }}
    >
      View All Partners
    </a>
  </div>
</section>



    </main>
  );
}
