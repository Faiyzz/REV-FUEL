// components/TSLSection.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function TSLSection() {
  return (
    <section className="relative text-white py-20 px-6 flex flex-col items-center overflow-hidden">
      {/* Background Image with fade-in */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0 -z-10"
      >
        <Image
          src="/images/pexels.jpg" // make sure this is inside /public/images/
          alt="Background"
          fill
          priority
          className="object-cover"
        />
        {/* Softer overlay for glass effect */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      </motion.div>

      {/* Video Embed */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-5xl aspect-video rounded-xl overflow-hidden shadow-2xl border border-white/10 backdrop-blur-md"
      >
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="Promotional Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mt-10 flex flex-col items-center gap-6 text-center"
      >
        <button className="bg-gradient-to-r from-[#3DAF84] to-[#9BE7C8] hover:from-[#34a072] hover:to-[#86d6b8] text-black font-bold text-lg md:text-xl px-10 py-4 rounded-lg shadow-lg transition">
          Start Your Coaching Journey
        </button>

        {/* Social proof */}
        <div className="flex items-center gap-3 text-gray-200">
          <div className="flex -space-x-3">
            <Image
              src="/images/person.jpg"
              alt="Student 1"
              width={60}
              height={20}
              className="rounded-full border-2 border-[#0B0C10]"
            />
            <Image
              src="/images/person2.jpg"
              alt="Student 2"
              width={60}
              height={20}
              className="rounded-full border-2 border-[#0B0C10]"
            />
            <Image
              src="/images/person4.webp"
              alt="Student 3"
              width={60}
              height={20}
              className="rounded-full border-2 border-[#0B0C10]"
            />
          </div>
          <p className="text-sm md:text-base">
            Join{" "}
            <span className="bg-gradient-to-r from-[#3DAF84] to-[#9BE7C8] bg-clip-text text-transparent">
              hundreds of business leaders
            </span>{" "}
            already working with ZSideo Coaching.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
