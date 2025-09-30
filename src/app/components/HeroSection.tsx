"use client";

import Image from "next/image";
import Link from "next/link";
import StepsPills from "./StepsPills";
import CTAButton from "./CTAButton";
import { motion } from "framer-motion";
import { Clock, Briefcase, TrendingUp, Users } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="hero"
      // Mobile gets normal screen height; desktop keeps your original 140vh.
      className="relative min-h-screen md:min-h-[140vh] w-full overflow-hidden bg-black text-white"
    >
      {/* Full-screen texture ABOVE section bg, BELOW other layers */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <Image
          src="/images/bgtexture.jpg"
          alt="Full BG"
          fill
          priority
          className="object-cover"
        />
        <div
          className="
            absolute inset-0 z-10 bg-black/94
            [mask-image:radial-gradient(60%_50%_at_50%_45%,transparent 0%,transparent 55%,black 56%),
                         radial-gradient(40%_28%_at_50%_6%,transparent 0%,transparent 50%,black 51%)]
            [mask-composite:exclude] [-webkit-mask-composite:xor]
          "
        />
      </div>

      {/* BG IMAGE (NEON) — HIDDEN ON MOBILE */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 hidden md:flex justify-center">
        <Image
          src="/images/NEON 3.png"
          alt="Background"
          width={1920}
          height={800}
          priority
          className="object-contain object-bottom"
        />
      </div>
      {/* If you have another BG like 'NEON 2.png' elsewhere, apply the same 'hidden md:flex' to it. */}

      {/* === GRADIENT GLOWS ===
          Keep subtle on mobile, full on desktop */}
      <div className="pointer-events-none absolute left-1/2 -top-24 h-40 w-40 -translate-x-[80px] rounded-full bg-white/20 blur-[80px] md:h-[420px] md:w-[420px] md:-top-90 md:bg-white/35 md:blur-[180px]" />
      <div className="pointer-events-none absolute -left-10 bottom-0 hidden md:block h-[520px] w-[520px] rounded-full bg-[#3154A5]/30 blur-[220px] translate-y-[-100px]" />
      <div className="pointer-events-none absolute -right-10 bottom-0 hidden md:block h-[520px] w-[520px] rounded-full bg-[#3154A5]/30 blur-[220px] translate-y-[-100px]" />

      {/* CONTENT */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-4 sm:px-6 pt-20 md:pt-28">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center text-[32px] leading-[1.15] sm:text-[36px] md:text-[84px] font-bold tracking-tight"
        >
          <span className="text-[#3154A5]">Business</span>{" "}
          <span className="text-white">Growth Is a Choice.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05, duration: 0.7 }}
          className="mt-4 flex items-center gap-2 text-center text-[13px] sm:text-sm text-gray-300 md:text-base px-2"
        >
          <Clock className="h-4 w-4 opacity-80 shrink-0" />
          <span className="max-w-[52ch]">
            The market never sleeps, competitors never stop, and the only
            difference is how prepared you are.
          </span>
        </motion.p>

        {/* VSL CARD */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="relative mt-8 md:mt-10 w-full"
        >
          <div className="relative mx-auto w-full max-w-4xl overflow-hidden rounded-2xl md:rounded-3xl border border-white/10 bg-black/40 shadow-[0_10px_60px_rgba(0,0,0,0.6)] backdrop-blur-md">
            <div className="pointer-events-none absolute left-1/2 top-0 h-[4px] md:h-[6px] w-[88%] md:w-[80%] -translate-x-1/2 bg-gradient-to-r from-[#000000] via-[#461186] to-[#000000]" />
            <div className="pointer-events-none absolute left-1/2 bottom-0 h-[4px] md:h-[6px] w-[88%] md:w-[80%] -translate-x-1/2 bg-gradient-to-r from-[#000000] via-[#2e075e] to-[#000000]" />

            <div className="relative aspect-video">
              <Image
                src="/images/vslcover.jpg"
                alt="VSL Poster"
                fill
                className="object-cover opacity-90"
              />
              <button
                aria-label="Play video"
                className="absolute left-1/2 top-1/2 grid h-14 w-14 md:h-16 md:w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-black shadow-xl transition hover:scale-105"
              >
                <svg viewBox="0 0 24 24" className="h-7 w-7 md:h-8 md:w-8">
                  <path fill="currentColor" d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
          </div>

          <Link href="#cta">
            <div className="flex justify-center my-10 md:my-18 px-2">
              <CTAButton />
            </div>
          </Link>

          {/* Steps — keep tight on mobile */}
          <div className="my-8 md:my-12 px-2">
            <StepsPills
              steps={[
                {
                  id: 1,
                  label: "WORLD-CLASS",
                  title: "Strategy",
                  icon: <Briefcase className="h-5 w-5" />,
                },
                {
                  id: 2,
                  label: "SCALE PREDICTABLY",
                  title: "To $10k/Mo",
                  icon: <TrendingUp className="h-5 w-5" />,
                },
                {
                  id: 3,
                  label: "1-ON-1 COACHING",
                  title: "From Experts",
                  icon: <Users className="h-5 w-5" />,
                },
              ]}
              iconColorFrom="from-[#3154A5]"
              iconColorTo="to-[#1f346b]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
