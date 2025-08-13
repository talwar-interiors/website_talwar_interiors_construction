"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Cinzel } from "next/font/google";

const cinzel = Cinzel({ subsets: ["latin"], weight: ["400", "700"] });

export default function Header() {
  const [open, setOpen] = useState(false);
  const GOLD = "#D4AF37";

  return (
    <header className="sticky top-0 z-50 border-b border-[#d4af37]/20 shadow-[0_4px_20px_rgba(0,0,0,0.08)] backdrop-blur-lg">
      {/* Gold gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#d4af37]/10 via-white/80 to-[#d4af37]/10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* 3-column grid ensures perfect symmetry with the logo truly centered */}
        <div
          className={`grid grid-cols-3 items-center h-20 ${cinzel.className}`}
        >
          {/* Left Links */}
          <nav
            aria-label="Primary left"
            className="hidden md:flex justify-center gap-10"
          >
            <NavLink href="/" label="Home" />
            <NavLink href="/portfolio" label="Portfolio" />
            <NavLink href="/gallery" label="Gallery" />
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-black/10 text-black/70 bg-white/60 backdrop-blur-sm"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                {open ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 6h18M3 12h18M3 18h18"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Center Logo */}
          <div className="flex items-center justify-center">
            <Link href="/" className="group inline-flex items-center">
              <span className="sr-only">Talwar Interiors — Home</span>
              <div
                className="relative"
                style={{ width: "80px", height: "80px" }}
              >
                <Image
                  src="/assets/talwar_nobg.png"
                  alt="Talwar Interiors Logo"
                  fill
                  className="object-contain"
                  priority
                  sizes="48px"
                />
              </div>
            </Link>
          </div>

          {/* Right Links + CTA */}
          <div className="hidden md:flex justify-center items-center gap-10">
            <NavLink href="/services" label="Services" />
            {/* Enhanced CTA */}
            <Link
              href="/book"
              className="relative rounded-full px-6 py-3 font-semibold transition-all duration-300 hover:scale-105 hover:shadow-md gold-pulse overflow-hidden"
              style={{
                color: GOLD,
                border: `2px solid ${GOLD}`,
                background:
                  "linear-gradient(135deg, transparent 0%, rgba(212, 175, 55, 0.1) 50%, transparent 100%)",
              }}
            >
              <span
                aria-hidden
                className="pointer-events-none shimmer-mask absolute inset-0 rounded-full"
              />
              <span className="relative z-10 font-bold tracking-wide">
                Book an Appointment
              </span>
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          id="mobile-nav"
          className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ${
            open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="mt-2 rounded-2xl border border-black/10 bg-white/90 backdrop-blur-md shadow-xl">
            <div className="px-3 py-2">
              <MobileLink
                href="/"
                label="Home"
                onClick={() => setOpen(false)}
              />
              <MobileLink
                href="/portfolio"
                label="Portfolio"
                onClick={() => setOpen(false)}
              />
              <MobileLink
                href="/gallery"
                label="Gallery"
                onClick={() => setOpen(false)}
              />
              <MobileLink
                href="/services"
                label="Services"
                onClick={() => setOpen(false)}
              />
              <div className="pt-2">
                <Link
                  href="/book"
                  onClick={() => setOpen(false)}
                  className="relative block w-full text-center rounded-full px-5 py-3 font-semibold transition-all duration-300 hover:scale-105 hover:shadow-md gold-pulse overflow-hidden"
                  style={{
                    color: GOLD,
                    border: `2px solid ${GOLD}`,
                    background:
                      "linear-gradient(135deg, transparent 0%, rgba(212, 175, 55, 0.1) 50%, transparent 100%)",
                  }}
                >
                  <span
                    aria-hidden
                    className="pointer-events-none shimmer-mask absolute inset-0 rounded-full"
                  />
                  <span className="relative z-10 font-bold tracking-wide">
                    Book an Appointment
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Styles */}
        <style jsx>{`
          /* Underline hover for links */
          .nav-link {
            position: relative;
          }
          .nav-link:after {
            content: "";
            position: absolute;
            left: 0;
            bottom: -4px;
            height: 2px;
            width: 100%;
            background: ${GOLD};
            transform: scaleX(0);
            transform-origin: left;
            transition: transform 300ms;
          }
          .nav-link:hover:after {
            transform: scaleX(1);
          }

          /* Shimmer effect */
          .shimmer-mask {
            background: linear-gradient(
              90deg,
              rgba(255, 255, 255, 0) 0%,
              rgba(255, 255, 255, 0.3) 50%,
              rgba(255, 255, 255, 0) 100%
            );
            transform: translateX(-100%);
            animation: shimmer 2.25s linear infinite;
          }

          /* Gold border pulse */
          .gold-pulse {
            box-shadow: 0 0 8px rgba(212, 175, 55, 0.35),
              inset 0 0 6px rgba(212, 175, 55, 0.25);
            animation: pulseGold 2.6s ease-in-out infinite;
          }

          @keyframes shimmer {
            0% {
              transform: translateX(-120%);
            }
            100% {
              transform: translateX(120%);
            }
          }
          @keyframes pulseGold {
            0%,
            100% {
              box-shadow: 0 0 8px rgba(212, 175, 55, 0.35),
                inset 0 0 6px rgba(212, 175, 55, 0.25);
              opacity: 0.9;
            }
            50% {
              box-shadow: 0 0 22px rgba(212, 175, 55, 0.75),
                inset 0 0 10px rgba(212, 175, 55, 0.35);
              opacity: 1;
            }
          }
        `}</style>
      </div>
    </header>
  );
}

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="relative inline-block px-4 py-2 rounded-full text-[17px] text-black/80 hover:text-[#D4AF37] transition-colors duration-300 group focus:outline-none"
      style={{
        border: "2px solid transparent",
        background:
          "linear-gradient(135deg, transparent 0%, rgba(212, 175, 55, 0.07) 50%, transparent 100%)",
      }}
    >
      <span className="relative z-10">{label}</span>
      {/* Animated gold underline with bounce */}
      <span
        className="pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-1 h-[3px] w-0 rounded-full bg-gradient-to-r from-[#d4af37] via-[#fffbe6] to-[#d4af37] shadow-[0_0_8px_2px_rgba(212,175,55,0.25)] transition-all duration-500 group-hover:w-4/5 group-hover:animate-underline-bounce"
        aria-hidden
      />
      <style jsx>{`
        @keyframes underline-bounce {
          0% {
            width: 0;
          }
          80% {
            width: 90%;
          }
          100% {
            width: 80%;
          }
        }
        .group-hover\\:animate-underline-bounce:hover > span[aria-hidden] {
          animation: underline-bounce 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55)
            forwards;
        }
      `}</style>
    </Link>
  );
}

function MobileLink({
  href,
  label,
  onClick,
}: {
  href: string;
  label: string;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block px-3 py-2 text-[17px] text-black/80 hover:text-[#D4AF37] transition-colors duration-300"
    >
      {label}
    </Link>
  );
}
