import Image from "next/image";
import Link from "next/link";

export default function ExclusiveFeaturesPage() {
  return (
    <main className="w-full bg-white min-h-screen">
      {/* Section 1 - Intro */}
      <section className="mx-auto max-w-7xl px-4 md:px-6 py-16 text-center">
        <h1
          className="font-serif text-4xl md:text-5xl font-semibold tracking-tight mb-6"
          style={{ color: "#4A321E" }}
        >
          Everything Your Pet Needs
        </h1>
        <p className="text-[#6B5A49] text-lg md:text-xl max-w-3xl mx-auto">
          PetGo offers a full spectrum of services designed to support your
          pet’s health, happiness, and daily life. From veterinary consultations
          and grooming to adoption support, daycare, and pet-friendly
          recommendations, every service is thoughtfully curated to meet the
          unique needs of modern pet families.
        </p>
      </section>

      {/* Section 2 - Two Column Layout */}
      <section className="mx-auto max-w-7xl px-4 md:px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        {/* Left - Image */}
        <div className="relative w-full h-[450px]">
          {/* Replace "exclusive-1.jpg" with your own file name in /public */}
          <Image
            src="/exclusive-1.jpg"
            alt="PetGo App Preview"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Right - Text */}
        <div>
          <h2
            className="font-serif text-3xl md:text-4xl font-semibold tracking-tight mb-4"
            style={{ color: "#4A321E" }}
          >
          </h2>
          <p className="text-[#6B5A49] leading-relaxed mb-6">
            Keep every detail of your pet’s health safe and accessible. With
            PetGo’s Pet Journal, members can upload physical health records into
            a secure digital format—so you’ll never have to worry about
            misplaced papers or lost files again. All records are organized and
            stored in your pocket, ready whenever you need them.
          </p>
          <p className="text-[#6B5A49] leading-relaxed mb-6">
            Whether you’re visiting your regular vet or switching to a new
            clinic, your pet’s full history is always at hand—saving time,
            avoiding unnecessary checkups, and ensuring your pet receives the
            best care without interruption.
          </p>
          <Link
            href="/journal"
            className="font-semibold hover:underline underline-offset-4"
            style={{ color: "#4A321E" }}
          >
            Access Your Pet Journal &gt;
          </Link>
        </div>
      </section>

{/* ===== Essentials Section ===== */}
<section className="mx-auto max-w-7xl px-4 md:px-6 py-16">
  <h2
    className="font-serif text-3xl md:text-4xl font-semibold tracking-tight text-center mb-12"
    style={{ color: "#4A321E" }}
  >
    Essentials
  </h2>

  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
    {[
      {
        label: "Veterinary Care",
        desc: "Trusted medical support to keep your pets healthy and happy.",
        href: "/veterinary",
        img: "/essentials-veterinary.jpg",
        comingSoon: false,
      },
      {
        label: "Grooming",
        desc: "Gentle care to keep every furry friend clean, fresh, and comfortable.",
        href: "/grooming",
        img: "/essentials-grooming.jpg",
        comingSoon: false,
      },
      {
        label: "Dog Walking",
        desc: "Keep your dog happy, healthy, and active with trusted walking services.",
        href: "/dog-walking",
        img: "/essentials-dog-walking.jpg",
        comingSoon: true,
      },
      {
        label: "Pet Daycare",
        desc: "A caring space for pets to play, rest, and socialize while you're away.",
        href: "/daycare",
        img: "/essentials-daycare.jpg",
        comingSoon: false,
      },
      {
        label: "Pet Shop",
        desc: "Find trusted products for every stage of your pet’s life—all in one convenient shop.",
        href: "/shop",
        img: "/essentials-shop.jpg",
        comingSoon: true,
      },
      {
        label: "Adoption",
        desc: "Safely match with trusted breeders or adoptions by completing a survey for lasting homes.",
        href: "/adoption",
        img: "/essentials-adoption.jpg",
        comingSoon: true,
      },
      {
        label: "Pet-Friendly Places",
        desc: "Discover parks, cafés, and destinations where pets are always welcome.",
        href: "/places",
        img: "/essentials-places.jpg",
        comingSoon: false,
      },
      {
        label: "Community",
        desc: "Connect, share, and learn with fellow pet parents in a supportive space built just for you.",
        href: "/community",
        img: "/essentials-community.jpg",
        comingSoon: false,
      },
    ].map(({ label, desc, href, img, comingSoon }) => (
      <div
        key={label}
        className="relative group border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition bg-white"
      >
        {/* Image */}
        <div className="relative w-full h-56">
          <Image src={img} alt={label} fill className="object-cover" sizes="100%" />
          {comingSoon && (
            <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center text-center px-4">
              <h3 className="text-2xl font-bold text-white mb-2">COMING SOON</h3>
              <p className="text-sm text-white/90 max-w-xs leading-relaxed">
                The PetGo Team is excited and working hard to open these features for our members.
              </p>
            </div>
          )}
        </div>

        {/* Content */}
        <div className={`p-4 text-center ${comingSoon ? "opacity-40 pointer-events-none" : ""}`}>
          <h3 className="text-lg font-semibold" style={{ color: "#4A321E" }}>
            {label}
          </h3>
          <p className="text-sm text-[#6B5A49] mt-2 mb-4">{desc}</p>
          <Link
            href={href}
            className="inline-block border px-4 py-2 text-sm font-medium transition group-hover:bg-gray-50"
            style={{ borderColor: "#4A321E", color: "#4A321E" }}
          >
            Explore More &gt;
          </Link>
        </div>
      </div>
    ))}
  </div>
</section>



{/* ===== Travel Section ===== */}
<section className="mx-auto max-w-7xl px-4 md:px-6 py-16">
  <div className="grid md:grid-cols-3 gap-8 items-center">
    {/* Left image */}
    <div className="relative w-full h-72 md:h-full">
      <Image
        src="/travel-left.jpg"
        alt="Dog exploring mountains"
        fill
        className="object-cover rounded-lg"
      />
    </div>

    {/* Text block */}
    <div className="text-center md:text-left px-2">
      <h2
        className="font-serif text-3xl md:text-4xl font-semibold tracking-tight mb-4"
        style={{ color: "#4A321E" }}
      >
        Travel Together, Anywhere
      </h2>
      <p className="text-[#6B5A49] leading-relaxed mb-6">
        Traveling abroad with your pet can feel overwhelming—paperwork,
        regulations, health checks, and countless details. With PetGo Travel,
        we simplify the process by guiding you step by step, making sure nothing
        is missed. From documentation to vet approvals, even flight requirements,
        we’ve curated it all into a clear, worry-free journey.
      </p>
      <p className="text-[#6B5A49] leading-relaxed mb-6">
        For those who want the easiest path, our exclusive travel package
        handles the details for you—so all you need to do is prepare for new
        adventures together.
      </p>
      <Link
        href="/travel"
        className="inline-block px-6 py-3 font-semibold rounded-sm"
        style={{ backgroundColor: "#271c12ff", color: "white" }}
      >
        Explore Pet Travel &gt;
      </Link>
    </div>

    {/* Right image */}
    <div className="relative w-full h-72 md:h-full">
      <Image
        src="/travel-right.jpg"
        alt="Dog looking out airplane window"
        fill
        className="object-cover rounded-lg"
      />
    </div>
  </div>
</section>

{/* ===== Smart Tools Section ===== */}
<section className="mx-auto max-w-7xl px-4 md:px-6 py-16">
  <h2
    className="font-serif text-3xl md:text-4xl font-semibold tracking-tight text-center mb-12"
    style={{ color: "#4A321E" }}
  >
    Smart Tools
  </h2>

  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
    {[
      {
        label: "Health Encyclopedia",
        desc: "Essential info on nutrition, safe foods, diseases, ingredients, tests, and symptoms — all together.",
        href: "/exclusive-features/health-encyclopedia",
        img: "/tool-encyclopedia.jpg",
      },
      {
        label: "Medical Note Translator",
        desc: "Easily understand your vet's notes. Upload or paste medical terms and get a simple translation.",
        href: "/translator",
        img: "/tool-translator1.jpg",
      },
      {
        label: "Remote Screening",
        desc: "Quickly check your pet’s symptoms from home with our expert-designed questionnaire.",
        href: "/exclusive-features/remote-screening",
        img: "/tool-translator2.jpg",
      },
      {
        label: "Dog Training",
        desc: "Train smarter, not harder — get personalized training tips, behavior insights, and progress tracking.",
        href:  "/exclusive-features/dog-training",
        img: "/tool-dog-training.jpg",
      },
    ].map(({ label, desc, href, img }) => (
      <div
        key={label}
        className="relative group block border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition bg-white"
      >
        {/* Image */}
        <div className="relative w-full h-56">
          <Image
            src={img}
            alt={label}
            fill
            className="object-cover"
            sizes="100%"
          />
        </div>

        {/* Content */}
        <div className="p-4 text-center">
          <h3 className="text-lg font-semibold" style={{ color: "#4A321E" }}>
            {label}
          </h3>
          <p className="text-sm text-[#6B5A49] mt-2 mb-4">{desc}</p>
          <Link href={href}>
            <span
              className="inline-block border px-4 py-2 text-sm font-medium transition
                         group-hover:bg-gray-50"
              style={{ borderColor: "#4A321E", color: "#4A321E" }}
            >
              Explore More &gt;
            </span>
          </Link>
        </div>
      </div>
    ))}
  </div>
</section>



{/* ===== Review Section ===== */}
<section className="mx-auto max-w-4xl px-4 md:px-6 py-16">
  <div className="flex items-center space-x-6">
    {/* Reviewer Image */}
    <div className="flex-shrink-0">
      <div className="relative w-28 h-28 rounded-full overflow-hidden border border-gray-300">
        <Image
          src="/review-alexa.jpg" // put your reviewer's image in /public
          alt="Alexa Young"
          fill
          className="object-cover"
        />
      </div>
    </div>

    {/* Review Content */}
    <div>
      <h3 className="text-lg font-semibold text-black">
        Alexa Young, CA
      </h3>
      <p className="mt-2 text-base text-black leading-relaxed">
        Pet Care+ made all the difference! I could easily compare veterinary
        service prices across multiple clinics, and the exclusive member rates
        saved my wallet while giving my two dogs the best care. Truly a
        must-have for pet families!
      </p>
    </div>
  </div>
</section>

    </main>
  );
}
