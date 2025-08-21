// components/HeroSection.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-start min-h-[160vh] bg-black text-center text-white px-6"
    >
      {/* Background image */}
      <Image
        src="/images/herobg.png"
        alt="Hero background"
        fill
        priority
        className="absolute inset-0 object-cover opacity-30"
      />

      {/* Content container */}
      <div className="relative z-10 max-w-4xl mx-auto mt-30">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="uppercase text-sm tracking-wide text-gray-400 mb-4"
        >
          NHB Platform is Coming
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold leading-tight"
        >
          Business Growth,<br />
          <span className="text-gray-300">Powered by Strategy</span> <br />
          with <span className="text-white">ZSideo Coaching</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-6 text-lg text-gray-300"
        >
          We guide entrepreneurs and businesses to scale sustainably with
          proven strategies, systems, and real-world execution.
        </motion.p>

        {/* Email signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-8 flex w-full max-w-md mx-auto rounded-lg overflow-hidden border border-gray-700 bg-black/60 backdrop-blur"
        >
          <input
            type="email"
            placeholder="example@gmail.com"
            className="flex-1 px-4 py-3 text-white outline-none bg-transparent"
          />
          <button className="px-6 bg-blue-600 hover:bg-blue-700 text-white font-medium transition">
            Sign Up
          </button>
        </motion.div>
      </div>

    
    </section>
  );
}
