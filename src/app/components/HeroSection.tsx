"use client";

import Image from "next/image";
import Link from "next/link";
import StepsPills from "./StepsPills";
import CTAButton from "./CTAButton";
import { motion } from "framer-motion";
import { Briefcase, TrendingUp, Users, Pause, Play } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

/* -------- Red Theme Tokens -------- */
const BRAND_RED = "#EF4444";
const BRAND_RED_DARK = "#7F1D1D";
const BRAND_RED_GLOW = "#FF1A1A";
/* ---------------------------------- */

/* Small rotating text line under the H1 */
function RotatingLine() {
  const messages = useMemo(
    () => [
      "Landing pages, VSLs, email, CRM & funnels — all handled.",
      "You focus on clients. We run the growth machine.",
      "Acquisition → Nurture → Conversion → Ascension.",
    ],
    []
  );
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % messages.length), 2600);
    return () => clearInterval(t);
  }, [messages.length]);

  return (
    <motion.p
      key={idx}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="mt-3 text-center text-sm sm:text-base md:text-lg text-white/80 italic"
    >
      {messages[idx]}
    </motion.p>
  );
}

/* A subtle shimmer span for highlights */
function Shimmer({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative inline-block">
      <span
        className="bg-clip-text text-transparent"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(255,255,255,0.6) 0%, " +
            `${BRAND_RED} 45%, rgba(255,255,255,0.9) 100%)`,
          backgroundSize: "200% 100%",
          animation: "shimmerX 2.2s linear infinite",
        }}
      >
        {children}
      </span>
      <style jsx>{`
        @keyframes shimmerX {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: 0% 0;
          }
        }
      `}</style>
    </span>
  );
}

/* ------- Inline VSL with gradient border + center play/pause ------- */
function InlineVSL() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setIsPlaying(true);
    } else {
      v.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="relative mx-auto w-full max-w-4xl">
      {/* Gradient border frame */}
      <div className="p-[1.5px] rounded-2xl md:rounded-3xl bg-gradient-to-r from-red-500/70 via-rose-400/80 to-red-600/70 shadow-[0_10px_60px_rgba(0,0,0,0.6)]">
        <div className="relative overflow-hidden rounded-[15px] md:rounded-[20px] border border-white/10 bg-black/40 backdrop-blur-md">
          {/* top and bottom accent bars */}
          <div
            className="pointer-events-none absolute left-1/2 top-0 h-[4px] md:h-[6px] w-[88%] md:w-[80%] -translate-x-1/2"
            style={{
              background: `linear-gradient(90deg, #000 0%, ${BRAND_RED} 50%, #000 100%)`,
            }}
          />
          <div
            className="pointer-events-none absolute left-1/2 bottom-0 h-[4px] md:h-[6px] w-[88%] md:w-[80%] -translate-x-1/2"
            style={{
              background: `linear-gradient(90deg, #000 0%, ${BRAND_RED_DARK} 50%, #000 100%)`,
            }}
          />

          {/* Video */}
          <div className="relative aspect-video">
            <video
              ref={videoRef}
              className="absolute inset-0 h-full w-full object-cover"
              src="/images/caoch.mp4" // your local file
              playsInline
              preload="metadata"
              // do not autoplay here; let the button control it
            />

            {/* Center Play/Pause button */}
            <button
              onClick={togglePlay}
              aria-label={isPlaying ? "Pause video" : "Play video"}
              className="group absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 inline-flex items-center justify-center rounded-full border border-white/20 bg-black/60 backdrop-blur-sm px-5 py-5 md:px-6 md:py-6 transition
                         hover:bg-black/70 hover:scale-105 active:scale-95"
            >
              {isPlaying ? (
                <Pause className="h-6 w-6 md:h-7 md:w-7 text-white" />
              ) : (
                <Play className="h-6 w-6 md:h-7 md:w-7 text-white translate-x-[2px]" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen md:min-h-[140vh] w-full overflow-hidden text-white bg-black"
    >
      {/* --- VIDEO BACKGROUND ----------------------------------------- */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/images/bg video.mp4"
          autoPlay
          muted
          loop
          playsInline
          poster="/images/bg video.mp4"
        />
      </div>

      {/* Extra red gradients (subtle glow) */}
      <div
        className="pointer-events-none absolute left-[-10%] top-[-15%] h-[60vmin] w-[60vmin] rounded-full blur-[120px] opacity-25"
        style={{
          background: `radial-gradient(40% 40% at 50% 50%, ${BRAND_RED_GLOW}, transparent 70%)`,
        }}
      />
      <div
        className="pointer-events-none absolute right-[-8%] top-[10%] h-[55vmin] w-[55vmin] rounded-full blur-[130px] opacity-20"
        style={{
          background: `radial-gradient(45% 45% at 50% 50%, ${BRAND_RED}, transparent 72%)`,
        }}
      />
      <div
        className="pointer-events-none absolute left-1/2 top-[35%] -translate-x-1/2 h-[90vmin] w-[90vmin] blur-[140px] opacity-15"
        style={{
          background: `conic-gradient(from 210deg at 50% 50%, ${BRAND_RED_DARK}, transparent 40%, ${BRAND_RED} 70%, transparent 85%, ${BRAND_RED_DARK})`,
          borderRadius: "50%",
        }}
      />

      {/* --- CONTENT ---------------------------------------------------- */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-4 sm:px-6 pt-20 md:pt-28">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          // Smaller sizes + tighter leading + italics sprinkled
          className="text-center font-bold tracking-tight mt-16
                     text-[clamp(26px,6vw,56px)] leading-[1.08]"
        >
          We build & operate your{" "}
          <em className="not-italic md:italic">Sales + Marketing</em> engine to
          scale your coaching offer to{" "}
          <span className="font-semibold" style={{ color: BRAND_RED }}>
            <Shimmer>$100k/Mo</Shimmer>
          </span>
        </motion.h1>

        <RotatingLine />

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="relative mt-8 md:mt-10 w-full"
        >
          <InlineVSL />

          <Link href="#cta">
            <div className="flex justify-center my-8 md:my-12 px-2">
              <CTAButton />
            </div>
          </Link>

          <div className="my-6 md:my-10 px-2">
            <StepsPills
              steps={[
                {
                  id: 1,
                  label: "Content Engine",
                  title: "Done-For-You Creation",
                  icon: <Briefcase className="h-5 w-5" />,
                },
                {
                  id: 2,
                  label: "Premium Service",
                  title: "High-Touch Execution",
                  icon: <TrendingUp className="h-5 w-5" />,
                },
                {
                  id: 3,
                  label: "Brand Growth",
                  title: "Scale With Authority",
                  icon: <Users className="h-5 w-5" />,
                },
              ]}
              iconColorFrom="from-red-500"
              iconColorTo="to-rose-900"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
