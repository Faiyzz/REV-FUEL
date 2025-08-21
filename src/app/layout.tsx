// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


export const metadata: Metadata = {
  title: "ZSIDEO",
  description: "Portal-grade design, glass UI, and smooth UX.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
      
        {children}
        <Footer
          brand={{ name: "ZSIDEO", tagline: "We build outcomes.", logo: "/logo.svg" }}
          legal={{
            copyrightName: "ZSIDEO",
            links: [
              { label: "Privacy", href: "/privacy" },
              { label: "Terms", href: "/terms" },
              { label: "Cookies", href: "/cookies" },
            ],
            badgeNote: "Secured • ISO 27001",
          }}
        />
      </body>
    </html>
  );
}