// components/ShowreelSlider.tsx
"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ShowreelSlider() {
  /** Local data (shorts) */
  const items = [
    {
      src: "/reels/work1.mp4",
      poster: "/images/work1.jpg",
      label: "Product Montage • 15s",
    },
    {
      src: "/reels/work2.mp4",
      poster: "/images/work2.jpg",
      label: "Founder Hook • 12s",
    },
    {
      src: "/reels/work3.mp4",
      poster: "/images/work3.jpg",
      label: "Before/After • 10s",
    },
    {
      src: "/reels/work4.mp4",
      poster: "/images/work4.jpg",
      label: "UGC Cut • 14s",
    },
    {
      src: "/reels/work5.mp4",
      poster: "/images/work5.jpg",
      label: "Ad Hook • 9s",
    },
    {
      src: "/reels/work6.mp4",
      poster: "/images/work6.jpg",
      label: "Event Recap • 13s",
    },
  ];

  /** Config */
  const cardW = 480; // wider cards (tweak here)
  const cardH = Math.round(cardW * (16 / 9)); // 9:16 shorts (tall)
  const gap = 24;

  /** Infinite track via cloning */
  const tripled = useMemo(() => [...items, ...items, ...items], [items]);
  const base = items.length; // start from middle band to allow both directions

  /** State */
  const [idx, setIdx] = useState(base);
  const [animating, setAnimating] = useState(false); // no animation on first paint
  const [dragging, setDragging] = useState(false);
  const dragStartX = useRef<number | null>(null);
  const dragDelta = useRef(0);

  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);
  useEffect(() => {
    videoRefs.current = Array(tripled.length).fill(null);
  }, [tripled.length]);

  /** Ensure cards are visible immediately on load (no first-frame slide) */
  useEffect(() => {
    // enable animation AFTER first paint
    const id = requestAnimationFrame(() => setAnimating(true));
    return () => cancelAnimationFrame(id);
  }, []);

  /** Play center; pause others */
  useEffect(() => {
    videoRefs.current.forEach((v, i) => {
      if (!v) return;
      if (i === idx) {
        v.currentTime = 0;
        v.play().catch(() => {});
      } else {
        v.pause();
        v.currentTime = 0;
      }
    });
  }, [idx]);

  /** Recenter when crossing band edges (keeps it infinite without visual jump) */
  const onUpdateAfterAnim = () => {
    if (!animating) return; // during first paint, skip
    if (idx >= base + items.length) {
      setAnimating(false);
      setIdx((i) => i - items.length);
      requestAnimationFrame(() => setAnimating(true));
    } else if (idx < base) {
      setAnimating(false);
      setIdx((i) => i + items.length);
      requestAnimationFrame(() => setAnimating(true));
    }
  };

  /** Manual swipe/drag */
  const onPointerDown = (e: React.PointerEvent) => {
    dragStartX.current = e.clientX;
    dragDelta.current = 0;
    setDragging(true);
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (dragStartX.current == null) return;
    dragDelta.current = e.clientX - dragStartX.current;
  };
  const onPointerUp = () => {
    if (dragStartX.current == null) return;
    const dx = dragDelta.current;
    dragStartX.current = null;
    dragDelta.current = 0;
    setDragging(false);

    if (Math.abs(dx) > cardW * 0.25) {
      setIdx((i) => i + (dx < 0 ? 1 : -1));
    }
  };

  /** Click a side card to center it */
  const goTo = (i: number) => setIdx(i);

  /** Layout math */
  const slideW = cardW + gap;
  const x = useMemo(() => {
    // center current index; no initial animation because animating=false on first paint
    const offset = -idx * slideW;
    return offset + (tripled.length * slideW) / 2 - slideW / 2;
  }, [idx, slideW, tripled.length]);

  return (
    <section className="relative py-24 overflow-hidden">
      {/* VIBRANT BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        {/* deep base */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0b1a] via-[#0b1029] to-[#0a0b1a]" />
        {/* top-center purple→cyan glow */}
        <div
          className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1200px] h-[900px] rounded-full blur-3xl opacity-70 pointer-events-none
                        bg-[radial-gradient(60%_55%_at_50%_50%,rgba(138,92,255,0.45),rgba(58,196,236,0.25)_60%,transparent_70%)]"
        />
        {/* bottom-right magenta→amber beam */}
        <div
          className="absolute bottom-[-30%] right-[-10%] w-[900px] h-[900px] rounded-full blur-3xl opacity-50 pointer-events-none
                        bg-[radial-gradient(55%_55%_at_50%_50%,rgba(255,80,145,0.35),rgba(255,196,86,0.25)_60%,transparent_70%)]"
        />
        {/* subtle diagonal sheen */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.07]
                        bg-[linear-gradient(120deg,transparent_0%,rgba(255,255,255,0.6)_50%,transparent_100%)]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-3xl md:text-5xl font-bold text-white">
          Recent <span className="text-zsideo-gradient">Shorts</span>
        </h2>
        <p className="mt-3 text-center text-white/70">
          Manual slider • wider cards • center video plays automatically.
        </p>

        <div className="relative mt-12">
          {/* viewport (shows ~2.5 cards on large screens) */}
          <div
            className="mx-auto w-full overflow-hidden"
            style={{ maxWidth: `${slideW * 2.6}px` }}
          >
            {/* TRACK */}
            <motion.div
              className="flex items-center"
              style={{ gap }}
              animate={{ x }}
              transition={
                animating
                  ? { type: "tween", ease: "easeInOut", duration: 0.55 }
                  : { duration: 0 }
              }
              onUpdate={onUpdateAfterAnim}
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={onPointerUp}
              onPointerCancel={onPointerUp}
            >
              {tripled.map((item, i) => {
                const d = i - idx;
                const abs = Math.abs(d);
                const isCenter = d === 0;

                // scale/opacity for focus (no 3D tilt)
                const scale = isCenter ? 1 : abs === 1 ? 0.95 : 0.9;
                const opacity = isCenter ? 1 : abs === 1 ? 0.95 : 0.8;

                return (
                  <motion.div
                    key={`${item.src}-${i}`}
                    className="relative p-[2px] rounded-2xl"
                    style={{ width: cardW, height: cardH, flex: "0 0 auto" }}
                    animate={{ scale, opacity }}
                    transition={{ type: "tween", duration: 0.3 }}
                    onClick={() => goTo(i)}
                  >
                    {/* gradient border */}
                    <div className="absolute inset-0 -z-10 rounded-2xl bg-[conic-gradient(from_180deg,rgba(138,92,255,0.9),rgba(177,140,255,0.9),rgba(58,196,236,0.9),rgba(138,92,255,0.9))] opacity-60 blur-[2px]" />
                    <div className="absolute inset-0 -z-20 rounded-2xl bg-black/30 blur-xl" />

                    <div className="relative w-full h-full rounded-2xl overflow-hidden bg-black">
                      {/* poster sits below video (in case autoplay blocked) */}
                      <Image
                        src={item.poster}
                        alt={item.label ?? "Showreel"}
                        fill
                        className="object-cover"
                        priority={i === idx}
                      />

                      <video
                        ref={(el) => (videoRefs.current[i] = el)}
                        className="absolute inset-0 w-full h-full object-cover"
                        src={item.src}
                        poster={item.poster}
                        muted
                        loop
                        playsInline
                        preload="metadata"
                      />

                      {/* soft bottom gradient + label */}
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
                      {item.label ? (
                        <div className="absolute bottom-3 left-4 right-4 text-white/90 text-sm">
                          {item.label}
                        </div>
                      ) : null}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
