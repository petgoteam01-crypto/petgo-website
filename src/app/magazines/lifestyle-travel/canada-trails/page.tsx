"use client";

import Image from "next/image";

export default function CanadaTrailsArticle() {
  return (
    <main className="min-h-screen bg-[#FAF9F7] py-16 px-6">
      <article className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md p-8 md:p-12">
        {/* ===== HEADER IMAGE ===== */}
        <div className="relative w-full h-80 md:h-[460px] rounded-2xl overflow-hidden mb-10">
          <Image
            src="/canada-trails-main.jpg"
            alt="Dog walking on a scenic trail"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        {/* ===== TITLE ===== */}
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#4A321E] mb-4">
          Do Dogs Exist That Don’t Like Walks?
        </h1>
        <p className="text-gray-500 mb-8 text-lg">October 31, 2025 • Lifestyle & Travel</p>

        {/* ===== CONTENT ===== */}
        <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed">
          <p>
            Walks are often called the miracle cure for dogs, something most pet owners already know.
            But have you ever wondered if some dogs actually dislike going for walks? Let’s take a closer look today!
          </p>

          {/* ===== REASON 1 ===== */}
          <h2 className="text-2xl font-semibold text-[#8B6A43] mt-12 mb-4">
            Reason 1: Anxiety and Fear
          </h2>
          <div className="relative w-full h-80 md:h-[400px] rounded-2xl overflow-hidden mb-6">
            <Image
              src="/walk-anxiety.jpg"
              alt="Anxious dog outdoors"
              fill
              className="object-cover object-center"
            />
          </div>
          <p>
            Bad experiences outdoors can leave a lasting impression. Loud traffic, sudden noises, or even a scary encounter 
            with another animal may cause dogs to associate walks with stress. If fear is the issue, forcing a dog outside can 
            increase anxiety. A better approach is to start small—walk them in quiet, familiar spaces first, then gradually 
            expand the territory while offering treats and praise. Building positive associations is key.
          </p>

          {/* ===== REASON 2 ===== */}
          <h2 className="text-2xl font-semibold text-[#8B6A43] mt-12 mb-4">
            Reason 2: Lack of Early Training
          </h2>
          <div className="relative w-full h-80 md:h-[400px] rounded-2xl overflow-hidden mb-6">
            <Image
              src="/puppy-training.jpg"
              alt="Puppy training on a leash"
              fill
              className="object-cover object-center"
            />
          </div>
          <p>
            The socialization period (around 2–6 months old) is when puppies learn to adjust to the world. Without proper exposure 
            during this time, they might not understand what to do on a walk. It’s common to see young dogs freeze up or refuse to move. 
            Instead of pulling them, guide them gently and use rewards to encourage step-by-step progress. With patience, they can learn 
            to enjoy walks.
          </p>

          {/* ===== REASON 3 ===== */}
          <h2 className="text-2xl font-semibold text-[#8B6A43] mt-12 mb-4">
            Reason 3: Health Concerns
          </h2>
          <div className="relative w-full h-80 md:h-[400px] rounded-2xl overflow-hidden mb-6">
            <Image
              src="/health-check.jpg"
              alt="Dog at a veterinary checkup"
              fill
              className="object-cover object-center"
            />
          </div>
          <p>
            If a normally active dog suddenly avoids walking, it could be due to medical problems. Diseases like distemper, parvovirus, 
            diabetes, or heart issues can cause lethargy. Joint pain, such as arthritis or knee problems, can also make walking uncomfortable. 
            In these cases, the safest option is to schedule a vet check-up rather than assuming it’s just stubborn behavior.
          </p>

          <p className="mt-8">
            Whether your dog avoids walks due to fear, lack of experience, or a health issue, the important thing is to recognize the signs 
            and respond with care. With patience, training, or medical help, even hesitant pups can regain their love for daily walks.
          </p>
        </div>
      </article>
    </main>
  );
}
