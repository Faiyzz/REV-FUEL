// components/Footer.tsx
import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";

type NavLink = { label: string; href: string };
type FooterProps = {
  brand: { name: string; tagline: string; logo: string };
  legal: {
    copyrightName: string;
    links: { label: string; href: string }[];
    badgeNote: string;
  };
};

export default function Footer({ brand, legal }: FooterProps) {
  const addressLines = [""];
  const email = "";
  const phone = "+92 300 0000000";

  const socials = [
    { label: "Instagram", href: "https://instagram.com/" },
    { label: "LinkedIn", href: "https://linkedin.com/company/" },
    { label: "YouTube", href: "https://youtube.com/" },
    { label: "X (Twitter)", href: "https://x.com/" },
  ];

  const primaryNav: NavLink[] = [
    { label: "Programs", href: "/programs" },
    { label: "Client Results", href: "/results" },
    { label: "Client Stories", href: "/testimonials" },
    { label: "Resources", href: "/resources" },
    { label: "About", href: "/about" },
  ];

  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: brand.name,
    url: "https://",
    logo: brand.logo,
    serviceType: "Video Editing & Content Creation",
    sameAs: socials.map((s) => s.href),
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        email,
        telephone: phone,
        areaServed: "",
        availableLanguage: ["en"],
      },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: addressLines[0],
      addressLocality: "",
      addressCountry: "",
    },
  };

  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-black text-gray-300">
      {/* Animated hairline accent */}
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-x-0 -top-px h-px ${styles.hairline}`}
      />

      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="relative rounded-2xl border border-white/10 bg-white/[0.04] p-8 md:p-10 backdrop-blur-lg shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_20px_60px_rgba(0,0,0,0.5)]">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="relative h-10 w-10 overflow-hidden rounded-full ring-1 ring-white/15">
                 
                </div>
                <span className="text-lg font-semibold text-white">
                 Stratos
                </span>
              </div>

              <p className="text-sm leading-relaxed text-gray-400">
                {brand.tagline}
              </p>

              {/* Animated brand CTA */}
              <Link
                href="/book-call"
                className={`relative inline-flex h-10 items-center justify-center rounded-full px-4 text-sm font-semibold text-white ${styles.btnAnimated}`}
              >
                <span className="relative z-10">Book a Strategy Call</span>
              </Link>

              <p className="text-xs text-gray-500">{legal.badgeNote}</p>
            </div>

            {/* Programs */}
            <nav aria-label="Programs">
              <h3 className="mb-3 text-sm font-semibold text-white/90">
                Programs
              </h3>
              <ul className="space-y-2">
                {primaryNav.map((item) => (
                  <li key={item.href} className="flex items-start gap-2">
                    <span
                      className={`mt-2 inline-block h-1.5 w-1.5 rounded-full ${styles.brandDot}`}
                    />
                    <Link
                      href={item.href}
                      className="text-sm text-gray-300 transition hover:text-white"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Explore */}
            <nav aria-label="Explore">
              <h3 className="mb-3 text-sm font-semibold text-white/90">
                Explore
              </h3>
              <ul className="space-y-2">
                {legal.links.map((item) => (
                  <li key={item.href} className="flex items-start gap-2">
                    <span
                      className={`mt-2 inline-block h-1.5 w-1.5 rounded-full ${styles.brandDot}`}
                    />
                    <Link
                      href={item.href}
                      className="text-sm text-gray-300 transition hover:text-white"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Contact + Socials */}
            <div>
              <h3 className="mb-3 text-sm font-semibold text-white/90">
                Contact
              </h3>

              <address className="not-italic text-sm text-gray-300">
                {addressLines.map((line) => (
                  <div key={line}>{line}</div>
                ))}
                <div className="mt-2">
                  <a
                    href={`tel:${phone.replace(/[^+\d]/g, "")}`}
                    className="transition hover:text-white"
                  >
                    {phone}
                  </a>
                </div>
                <div>
                  <a
                    href={`mailto:${email}`}
                    className="transition hover:text-white"
                  >
                    {email}
                  </a>
                </div>
              </address>

              <h4 className="mt-5 mb-2 text-xs font-semibold text-white/90">
                Follow
              </h4>
              <ul className="flex flex-wrap gap-4">
                {socials.map((s) => (
                  <li key={s.href}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-300 transition hover:text-white"
                      aria-label={s.label}
                      title={s.label}
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="my-8 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <div className="flex flex-col items-start justify-between gap-4 text-xs text-gray-400 md:flex-row md:items-center">
            <p>
              © {year} Stratos. All rights reserved.
            </p>
          </div>

          <script
            type="application/ld+json"
            suppressHydrationWarning
            dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
          />
        </div>
      </div>
    </footer>
  );
}
