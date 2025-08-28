"use client";

import Image from "next/image";
import Link from "next/link";
import { Cinzel } from "next/font/google";
import { useMemo } from "react";

const cinzel = Cinzel({ subsets: ["latin"], weight: ["400", "700"] });

export default function Footer() {
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <footer
      className={`relative overflow-hidden border-t border-[#d4af37]/30 bg-white ${cinzel.className}`}
      aria-labelledby="footer-heading"
    >
      {/* Subtle gold wash background (no canvas) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(160% 100% at 0% 0%, rgba(212,175,55,0.06), transparent 55%), radial-gradient(180% 120% at 100% 100%, rgba(212,175,55,0.06), transparent 60%)",
        }}
      />

      {/* Light, simple, low-cost gold blobs */}
      <div className="absolute inset-0 z-[1]" aria-hidden="true">
        <span className="gold-blob gold-blob-a" />
        <span className="gold-blob gold-blob-b" />
        <span className="gold-blob gold-blob-c" />
      </div>

      {/* Soft sheen sweep */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[2] mix-blend-screen simple-sheen"
      />

      {/* Hairline */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 z-[2] h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(212,175,55,.7), transparent)",
        }}
      />

      {/* CONTENT */}
      <div className="relative z-[3] mx-auto max-w-7xl px-6 py-14">
        <h2 id="footer-heading" className="sr-only">
          Site footer
        </h2>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          {/* Brand + blurb + CTA */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-12">
                <Image
                  src="/assets/talwar_nobg.png"
                  alt="Talwar Interiors logo"
                  fill
                  className="object-contain"
                  sizes="48px"
                  priority
                />
              </div>
              <p className="text-2xl font-bold tracking-wide bg-gradient-to-r from-[#b8892b] via-[#D4AF37] to-[#b8892b] bg-clip-text text-transparent">
                Talwar Interiors
              </p>
            </div>

            <p className="mt-5 max-w-md leading-relaxed text-black/80">
              Thoughtful design. Precise execution. We craft warm, functional,
              and timeless spaces for homes and workplaces.
            </p>

            <div className="mt-5 flex items-center gap-4">
              <Link
                href="https://www.instagram.com/talwarinteriors"
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-full p-2 text-black/70 transition hover:bg-[#d4af37]/10 hover:text-[#D4AF37] focus-visible:outline-2 focus-visible:outline-[#d4af37] focus-visible:outline-offset-2"
                aria-label="Instagram"
                title="Instagram"
              >
                <svg
                  className="h-5 w-5 transition group-hover:rotate-[8deg]"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.25.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                </svg>
              </Link>
            </div>

            <div className="mt-6">
              <Link
                href="/book"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-2xl border border-[#D4AF37] bg-transparent px-6 py-3 text-sm font-semibold text-[#D4AF37] ring-1 ring-[#D4AF37]/40 transition hover:bg-[#D4AF37]/10 active:scale-95"
                aria-label="Book a Consultation"
              >
                <span className="pointer-events-none absolute inset-0 opacity-40 bg-[radial-gradient(60%_120%_at_50%_0%,rgba(212,175,55,0.25),transparent)]" />
                <span className="relative z-10">Book a Consultation</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <nav className="md:col-span-3" aria-label="Quick links">
            <h3 className="text-lg font-semibold text-[#D4AF37]">
              Quick Links
            </h3>
            <div
              className="mt-2 h-px w-28 bg-gradient-to-r from-[#d4af37] to-transparent"
              aria-hidden="true"
            />
            <ul className="mt-5 space-y-3 text-[15px]">
              {[
                { label: "Home", href: "/" },
                { label: "Services", href: "/services" },
                { label: "Gallery", href: "/gallery" },
                { label: "Book Appointment", href: "/book" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-2 text-black/80 hover:text-[#D4AF37] focus-visible:outline-2 focus-visible:outline-[#d4af37] focus-visible:outline-offset-2"
                  >
                    <span className="relative">
                      {item.label}
                      <span className="pointer-events-none absolute -bottom-0.5 left-0 h-[2px] w-0 bg-gradient-to-r from-[#fff0c2] via-[#d4af37] to-[#b8892b] transition-all duration-300 group-hover:w-full" />
                    </span>
                    <svg
                      className="h-3.5 w-3.5 opacity-0 transition group-hover:opacity-100"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M5 12h14M13 5l7 7-7 7" />
                    </svg>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <nav className="md:col-span-4" aria-label="Services">
            <h3 className="text-lg font-semibold text-[#D4AF37]">Services</h3>
            <div
              className="mt-2 h-px w-40 bg-gradient-to-r from-[#d4af37] to-transparent"
              aria-hidden="true"
            />
            <ul className="mt-5 columns-1 sm:columns-2 gap-x-10 [column-fill:_balance] text-[15px]">
              {[
                { label: "Interior Designs", id: "interior-exterior-design" },
                {
                  label: "Furniture, Fabric & Accessories",
                  id: "furniture-fabric-accessories",
                },
                {
                  label: "Lighting & False Ceiling Solutions",
                  id: "lighting-false-ceiling-solutions",
                },
                {
                  label: "Space Planning & Optimization",
                  id: "space-planning-optimization",
                },
                { label: "Fabrication", id: "fabrication" },
                {
                  label: "Residential & Commercial Construction",
                  id: "residential-commercial-construction",
                },
                {
                  label: "Property Development & Civil Contracting",
                  id: "property-development-civil-contracting",
                },
                { label: "Job Works", id: "job-works" },
              ].map((s) => (
                <li key={s.id} className="mb-3 break-inside-avoid leading-snug">
                  <Link
                    href={`/services#${s.id}`}
                    className="group inline-flex items-start gap-2 text-black/80 hover:text-[#D4AF37] focus-visible:outline-2 focus-visible:outline-[#d4af37] focus-visible:outline-offset-2"
                  >
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#D4AF37]/80 transition group-hover:scale-110" />
                    <span className="relative">
                      {s.label}
                      <span className="pointer-events-none absolute -bottom-0.5 left-0 h-[2px] w-0 bg-gradient-to-r from-[#fff0c2] via-[#d4af37] to-[#b8892b] transition-all duration-300 group-hover:w-full" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative z-[3] border-t border-[#d4af37]/25">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 md:flex-row md:items-center md:justify-between px-6 py-6 text-sm text-black/80">
          <p>©{year} Talwar Interiors · Developed by Osman</p>
          <div className="flex items-center gap-6">
            <Link
              href="/terms-conditions"
              className="hover:text-[#D4AF37] focus-visible:outline-2 focus-visible:outline-[#d4af37] focus-visible:outline-offset-2"
            >
              Terms & Conditions
            </Link>
            <Link
              href="/privacy-policy"
              className="hover:text-[#D4AF37] focus-visible:outline-2 focus-visible:outline-[#d4af37] focus-visible:outline-offset-2"
            >
              Privacy Policy
            </Link>
            <Link
              href="#top"
              className="inline-flex items-center gap-1 rounded-full border border-[#d4af37]/50 px-3 py-1.5 text-xs text-[#8b6b1f] transition hover:border-[#d4af37] hover:bg-[#fff9e6] focus-visible:outline-2 focus-visible:outline-[#d4af37] focus-visible:outline-offset-2"
              aria-label="Back to top"
            >
              ↑ Top
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Simple blobs */
        .gold-blob {
          position: absolute;
          border-radius: 9999px;
          filter: blur(30px);
          opacity: 0.18;
          background: radial-gradient(
            circle at 30% 30%,
            rgba(255, 240, 200, 0.8),
            rgba(212, 175, 55, 0.5),
            rgba(212, 175, 55, 0) 70%
          );
          transform: translate3d(0, 0, 0);
        }
        .gold-blob-a {
          width: 240px;
          height: 240px;
          left: -60px;
          top: 20%;
          animation: floatA 18s ease-in-out infinite;
        }
        .gold-blob-b {
          width: 200px;
          height: 200px;
          right: -50px;
          top: 55%;
          animation: floatB 22s ease-in-out infinite;
        }
        .gold-blob-c {
          width: 180px;
          height: 180px;
          left: 35%;
          bottom: -60px;
          animation: floatC 20s ease-in-out infinite;
        }

        @keyframes floatA {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-12px) translateX(10px);
          }
        }
        @keyframes floatB {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(10px) translateX(-12px);
          }
        }
        @keyframes floatC {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-8px) translateX(8px);
          }
        }

        /* Soft sheen */
        .simple-sheen {
          background: linear-gradient(
            115deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.28) 8%,
            rgba(255, 255, 255, 0) 16%
          );
          background-size: 240% 240%;
          animation: sheen 9s cubic-bezier(0.2, 0.8, 0.2, 1) infinite;
        }
        @keyframes sheen {
          0% {
            background-position: 120% -10%;
            opacity: 0;
          }
          10% {
            opacity: 0.8;
          }
          45%,
          100% {
            background-position: -20% 120%;
            opacity: 0;
          }
        }

        /* Respect reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .gold-blob,
          .simple-sheen {
            animation: none !important;
          }
        }
      `}</style>
    </footer>
  );
}
