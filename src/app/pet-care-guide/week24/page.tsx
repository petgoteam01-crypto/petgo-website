"use client";

import Image from "next/image";
import Link from "next/link";

export default function Week24Page() {
  return (
    <main className="min-h-screen bg-[#F9F6F1] text-[#111827] py-16 px-6">
      {/* ===== HEADER ===== */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-2">
          Puppy Care Guide
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-[#8B6A43]">
          Week 24 – Training Through the Adolescent Stage
        </h2>
      </div>

      {/* ===== SMARTIE IMAGE ===== */}
      <div className="flex justify-center mb-10">
        <Image
          src="/week24mainpic.jpg"
          alt="Puppy training during adolescence"
          width={600}
          height={400}
          className="rounded-2xl shadow-md object-cover"
        />
      </div>

      {/* ===== INTRO ===== */}
      <section className="text-center max-w-3xl mx-auto mb-12">
        <p className="text-gray-700 leading-relaxed">
          Around six months old, your puppy is full of curiosity, energy, and emotion.  
          Like human teenagers, this stage brings challenges in focus and mood — but with guidance,
          it becomes a bridge from playful puppyhood to confident adulthood.
        </p>
      </section>

      {/* ===== GROWTH SECTION ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">
          🌱 Not Every Puppy Struggles — but All Must Grow
        </h4>
        <p className="text-gray-700 leading-relaxed mb-4">
          Some puppies pass through adolescence calmly, but most experience mild confusion or rebellion.
          This is independence forming — boundary-testing and curiosity in motion.
        </p>
        <p className="text-gray-700 leading-relaxed">
          ⚠️ <strong>Keep in mind:</strong> This stage overlaps with the highest shelter surrender rates.
          It’s not a “bad” phase — it’s growth. With patience and love, your puppy becomes stronger,
          smarter, and more deeply bonded with you.
        </p>
      </section>

      {/* ===== REMINDER SECTION ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-[#fffaf5] border border-[#e6dccf] rounded-2xl p-8 shadow-sm text-center">
        <h4 className="font-semibold text-[#8B6A43] mb-3">💡 A Reminder for Pet Parents</h4>
        <p className="text-gray-700 leading-relaxed">
          “Adolescence doesn’t last forever — it’s simply the process of becoming an even more amazing dog.”
          By understanding what your puppy feels, you’ll find it easier to stay calm, patient, and supportive.
        </p>
      </section>

      {/* ===== WHY BEHAVIOR CHANGES ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">
          🩺 Why Behavior Changes at This Stage
        </h4>
        <p className="text-gray-700 leading-relaxed mb-4">
          As permanent teeth grow and hormones rise, your puppy’s brain reorganizes —
          shaping emotional control and learning patterns. Temporary resistance or restlessness is part of this process.
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Restless or easily distracted</li>
          <li>Momentary loss of obedience or focus</li>
          <li>Chewing or barking more frequently</li>
          <li>Increased sensitivity to sounds or touch</li>
        </ul>
      </section>

      {/* ===== TRAINING TIPS ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm space-y-6">
        <h4 className="font-semibold text-[#8B6A43] mb-4">
          🎓 Training Tips for the Adolescent Puppy
        </h4>

        {/* 1️⃣ Keep Education Positive */}
        <div>
          <h5 className="font-medium text-[#8B6A43] mb-2">1️⃣ Keep Education Positive and Enjoyable</h5>
          <p className="text-gray-700 leading-relaxed mb-2">
            Teach key commands — Sit, Stay, Come, Eat, No, and Good Job — but keep sessions short and fun.
            Mix brief play breaks with treats and praise to build motivation.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Training should feel like a game — not a test. Joyful learning builds lasting obedience.
          </p>
        </div>

        {/* 2️⃣ Consistency */}
        <div>
          <h5 className="font-medium text-[#8B6A43] mb-2">2️⃣ Stay Consistent and Brief</h5>
          <ul className="list-disc list-inside text-gray-700 space-y-1 mb-2">
            <li>Keep commands short, clear, and consistent.</li>
            <li>Reward immediately for good behavior.</li>
            <li>Ensure the whole family uses the same cues and tone.</li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            🐾 <strong>Professional Tip:</strong> Puppies remember your emotional tone better than your words.
            Calm, confident energy earns respect faster than repetition.
          </p>
        </div>

        {/* 3️⃣ Emotional Needs */}
        <div>
          <h5 className="font-medium text-[#8B6A43] mb-2">3️⃣ Understand Emotional Needs</h5>
          <p className="text-gray-700 leading-relaxed">
            Your puppy isn’t a robot — they feel joy, sadness, and pride. When they miss you, they whimper.
            When they succeed, they beam with tail wags. Empathy nurtures trust and connection.
          </p>
        </div>

        {/* 4️⃣ Reinforce with Love */}
        <div>
          <h5 className="font-medium text-[#8B6A43] mb-2">4️⃣ Reinforce with Love, Not Frustration</h5>
          <p className="text-gray-700 leading-relaxed mb-2">
            If your puppy misbehaves, breathe and redirect calmly.  
            Replace punishment with guidance — show what’s right instead of scolding what’s wrong.
          </p>
          <p className="text-gray-700 leading-relaxed">
            🩺 <strong>Vet Insight:</strong> Harsh correction can create anxiety and slow development.
            Positive redirection forms stronger emotional memory and prevents fear-based reactions.
          </p>
        </div>
      </section>

      {/* ===== ROLE OF PARENTS ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-sm">
        <h4 className="font-semibold text-[#8B6A43] mb-4">💬 Why Pet Parents’ Role Is Essential</h4>
        <p className="text-gray-700 leading-relaxed mb-3">
          Your puppy studies your tone, posture, and emotions daily.  
          Consistent affection and calm leadership help them feel safe and understood.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Training should feel like a <strong>conversation</strong>, not a command.  
          Speak softly, celebrate effort, and treat every success — big or small — as a shared victory.
        </p>
      </section>

      {/* ===== PETGO TEST ===== */}
      <section className="max-w-3xl mx-auto mb-12 bg-[#fffaf5] border border-[#e6dccf] rounded-2xl p-8 shadow-sm text-center">
        <h4 className="font-semibold text-[#8B6A43] mb-3">🧠 Is Your Dog in Adolescence?</h4>
        <p className="text-gray-700 leading-relaxed mb-3">
          Many pet parents don’t realize dogs go through a puberty-like stage too.
          Try PetGo’s “Adolescent Behavior Test” to identify your puppy’s emotional cues.
        </p>
        <p className="text-gray-700 leading-relaxed">
          👉 Understanding your dog’s phase helps tailor care, training, and empathy for smoother growth.
        </p>
      </section>

      {/* ===== SUMMARY ===== */}
      <section className="text-center max-w-3xl mx-auto mb-16">
        <h4 className="text-2xl font-semibold text-[#8B6A43] mb-3">🐕 Training Summary</h4>
        <ul className="list-disc list-inside text-left inline-block text-gray-700 space-y-2 mb-4">
          <li>Keep sessions short, fun, and consistent.</li>
          <li>Establish clear household rules and routines.</li>
          <li>Focus on positive reinforcement and calm leadership.</li>
          <li>Provide exercise and mental enrichment daily.</li>
          <li>Celebrate emotional growth — not just obedience.</li>
        </ul>
      </section>

            {/* ===== FIND DOG TRAINING SECTION ===== */}
<section className="max-w-3xl mx-auto mb-12 bg-[#fffaf5] border border-[#e6dccf] rounded-2xl shadow-sm p-8 text-center">
  <h4 className="font-semibold text-[#8B6A43] mb-4">
    🐾 Find Dog Training Programs
  </h4>
  <p className="text-gray-700 leading-relaxed mb-6">
    Want to take your puppy’s training to the next level? PetGo’s{" "}
    <span className="font-semibold text-[#4A321E]">Dog Training</span>{" "}
    section will feature step-by-step lessons, expert guidance,
    and personalized behavior insights to help your puppy grow with confidence.
  </p>
  <Link
    href="/exclusive-features/dog-training"
    className="inline-block bg-[#8B6A43] hover:bg-[#6E5332] text-white px-6 py-3 rounded-lg font-medium transition"
  >
    Explore Dog Training &gt;
  </Link>
</section>

      {/* ===== FINAL THOUGHT ===== */}
      <section className="max-w-3xl mx-auto mb-16 bg-white p-8 rounded-2xl shadow-sm text-center">
        <h4 className="font-semibold text-[#8B6A43] mb-3">💖 A Final Thought</h4>
        <p className="text-gray-700 leading-relaxed mb-3">
          Recognizing your dog’s adolescent stage transforms frustration into understanding.
          Every challenge becomes a chance to build trust and connection.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Capture these moments — they’re part of your puppy’s beautiful journey to adulthood.  
          Share your story with other PetGo parents on the <strong>PetGo Feed</strong> and celebrate every step forward.
        </p>
      </section>

      {/* ===== APP ADVERTISEMENT + COPYRIGHT ===== */}
      <section className="text-center max-w-4xl mx-auto mb-20">
        <h4 className="font-semibold mb-3 text-[#111827]">
          Continue with PetGo’s Puppy Care Guide
        </h4>
        <p className="text-gray-700 mb-10">
          PetGo supports your training journey — from first commands to lifelong companionship.
        </p>

        <div className="relative rounded-3xl overflow-hidden shadow-lg">
          <Image
            src="/petgoapp-banner.jpg"
            alt="PetGo mobile app banner"
            width={1200}
            height={600}
            className="object-cover w-full h-auto"
            priority
          />
          <div className="absolute top-6 right-6 text-right">
            <Link
              href="/mobile-app"
              className="inline-block border border-white text-white hover:bg-white hover:text-[#8B6A43] px-6 py-3 rounded-lg font-medium shadow-sm transition"
            >
              Explore PetGo Mobile App &gt;
            </Link>
          </div>
        </div>

        <p className="text-gray-500 text-xs mt-4">
          © 2025 PetGo. All Rights Reserved
        </p>
      </section>
    </main>
  );
}