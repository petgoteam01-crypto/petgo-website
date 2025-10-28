"use client";

import { motion } from "framer-motion";
import { Clock } from "lucide-react";

export default function GroomingPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#F9F6F1] px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white rounded-2xl shadow-md p-10 max-w-md text-center"
      >
        <Clock className="mx-auto mb-4 text-[#8B6A43]" size={48} strokeWidth={1.5} />
        <h1 className="text-3xl font-bold text-[#4A321E] mb-4 font-serif">
          Coming Soon
        </h1>
        <p className="text-gray-700 leading-relaxed">
          The PetGo team is perfecting the <strong>Grooming</strong> experience — 
          so your pets can enjoy premium care and style with trusted groomers.
        </p>
      </motion.div>
    </main>
  );
}
