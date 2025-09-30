// app/components/ServicesSection.tsx
"use client";

import * as React from "react";

type ServiceSection = {
  heading: string;
  text?: string;
  images?: string[];
};

type Service = {
  title: string;
  summary: string;
  sections: ServiceSection[];
};

const BRAND = "#3354A5";
const BG = "#0B0B12";

// Keep your existing SERVICES array as-is
const SERVICES: Service[] = [
  {
    title: "Content Strategy",
    summary:
      "End-to-end content planning engineered for your audience, offers, and platforms.",
    sections: [
      {
        heading: "Discovery & Research",
        text: "We map your audience, offers, and platforms, then define pillars and hooks.",
      },
      {
        heading: "Calendar & Scripting",
        text: "We build a 30–90 day calendar with scripts, CTAs, and distribution notes.",
      },
    ],
  },
  {
    title: "AI Cloning",
    summary:
      "Voice/face cloning pipelines to scale your short-form presence while staying on-brand.",
    sections: [
      {
        heading: "Capture & Training",
        text: "We capture samples and train safe, private models.",
      },
      {
        heading: "Review & Deployment",
        text: "Approval loops, safety tests, and rollout.",
      },
    ],
  },
  {
    title: "Video Editing",
    summary:
      "High-velocity edits tailored for Reels, TikTok, and Shorts with hooks, pacing, and captions.",
    sections: [
      {
        heading: "Edit Pipeline",
        text: "Hook-first sequences, jump cuts, kinetic captions, and brand kit alignment.",
      },
      {
        heading: "QC & Revisions",
        text: "Two-pass QC, versioning, and rapid revision rounds.",
      },
    ],
  },
  {
    title: "Publishing",
    summary:
      "Platform-native scheduling, metadata, and distribution to maximize reach and consistency.",
    sections: [
      {
        heading: "Schedule & Metadata",
        text: "Thumbnails, titles, tags, and optimal posting windows.",
      },
      {
        heading: "Cross-Platform",
        text: "Auto-formatting and tracking across channels.",
      },
    ],
  },
];

export default function ServicesSection() {
  // Simple palette for the circle icons (matches the feel of your reference)
  const ICONS = ["#21C55D", "#F43F5E", "#6366F1", "#A855F7"]; // green, rose, indigo, purple

  return (
    <section
      aria-label="Services"
      className="w-full px-4 sm:px-6 lg:px-10 py-16 sm:py-20 lg:py-24"
      style={{
        backgroundColor: BG,
        color: "white",
        ["--brand" as string]: BRAND,
      }}
    >
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Our Services
          </h2>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">
            Tailored solutions to plan, clone, edit, and publish short-form
            video—clean, consistent, on-brand.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map((svc, i) => {
            const color = ICONS[i % ICONS.length];
            return (
              <article
                key={svc.title}
                className="
                  rounded-2xl bg-white text-[#0B0B12]
                  shadow-[0_10px_30px_rgba(0,0,0,0.15)]
                  ring-1 ring-black/5
                  p-6
                  transition-transform
                  hover:-translate-y-1
                "
              >
                {/* Icon circle */}
                <div className="mb-4">
                  <span
                    aria-hidden
                    className="inline-grid place-items-center w-10 h-10 rounded-full text-white font-bold"
                    style={{ backgroundColor: color }}
                  >
                    {svc.title.charAt(0)}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold">{svc.title}</h3>

                {/* Summary (short and clean) */}
                <p className="mt-2 text-sm text-black/70">{svc.summary}</p>

                {/* CTA (stub) */}
                <div className="mt-5">
                  <button
                    type="button"
                    className="
                      inline-flex items-center justify-center
                      rounded-md border border-black/10
                      px-3 py-2 text-sm font-medium
                      text-[#0B0B12] bg-white
                      hover:bg-black/5
                      focus:outline-none focus:ring-2 focus:ring-black/20
                    "
                    // onClick={() => router.push('/services/[slug]')} // wire up later
                  >
                    View more
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
