import Image from "next/image";
import React from "react";

type Img = { src: string; alt: string; width: number; height: number };

const BRAND = "#3354A5";
const BG = "#0B0B12";

const DEFAULT_IMAGES: Img[] = [
  {
    src: "/images/about-story.jpg",
    alt: "Stratos team planning content",
    width: 1920,
    height: 1080,
  },
  {
    src: "/images/about-mission.jpg",
    alt: "Studio gear and workstation",
    width: 1920,
    height: 1080,
  },
  {
    src: "/images/about-promise.jpg",
    alt: "Storyboard and shot notes",
    width: 1920,
    height: 1080,
  },
];

export default function AboutSimpleSection({
  images = DEFAULT_IMAGES,
}: {
  images?: Img[];
}) {
  const [hero] = images;

  return (
    <section
      className="w-full px-4 sm:px-6 lg:px-10 py-16 sm:py-20"
      style={{
        backgroundColor: BG,
        color: "white",
        ["--brand" as string]: BRAND,
      }}
    >
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage: `linear-gradient(90deg, ${BRAND}, #7C9BFF)`,
            }}
          >
            About Stratos
          </span>
        </h2>

        {/* One-liner */}
        <p className="mt-4 text-white/80 text-lg">
          We plan, clone, edit, and publish short-form video that’s clean,
          consistent, and on-brand.
        </p>

        {/* Two-column: text + hero image */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-6">
            <div className="space-y-4 text-white/85 leading-relaxed">
              <p>
                <strong>What we do:</strong> Stratos provides{" "}
                <em>
                  content strategy, cloning, video editing, and publishing
                </em>{" "}
                services. We map your offers, build a repeatable content engine,
                and keep delivery on schedule.
              </p>
              <p>
                <strong>How we work:</strong> Simple scopes, clear timelines,
                and a calm, reliable process. You’ll always know what’s next and
                when it ships.
              </p>
              <p>
                <strong>Ownership:</strong> All creative materials are{" "}
                <u>owned by you</u>. We deliver source files, exports, and any
                agreed documentation.
              </p>
              <p>
                <strong>Expectations:</strong> We guarantee delivery of the{" "}
                <em>agreed content</em>. Outcomes such as audience growth,
                engagement, or revenue are not guaranteed.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6">
            {hero && (
              <div className="relative overflow-hidden rounded-2xl ring-1 ring-white/10 bg-black/30 shadow-[0_20px_80px_rgba(0,0,0,0.45)]">
                <Image
                  src={hero.src}
                  alt={hero.alt}
                  width={hero.width}
                  height={hero.height}
                  className="w-full h-auto object-cover"
                  priority={false}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
