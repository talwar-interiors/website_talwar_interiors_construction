"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Cinzel } from "next/font/google";

const cinzel = Cinzel({ subsets: ["latin"], weight: ["400", "700"] });

// services (exactly as you listed)
const SERVICES = [
  "Property Development & Civil Contracting",
  "Residential & Commercial Construction",
  "Fabrication",
  "Interior & Exterior Design",
  "Furniture, Fabric & Accessories",
  "Lighting & False Ceiling Solutions",
  "Space Planning & Optimization",
];

export default function Header() {
  const [open, setOpen] = useState(false); // mobile drawer
  const [servicesOpen, setServicesOpen] = useState(false); // mobile expand
  const [megaOpen, setMegaOpen] = useState(false); // desktop mega menu
  const openTimer = useRef<NodeJS.Timeout | null>(null);
  const closeTimer = useRef<NodeJS.Timeout | null>(null);
  const GOLD = "#D4AF37";

  // helpers to prevent flicker + give space to move cursor
  const scheduleOpen = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    if (megaOpen) return;
    openTimer.current = setTimeout(() => setMegaOpen(true), 120);
  };
  const scheduleClose = () => {
    if (openTimer.current) clearTimeout(openTimer.current);
    closeTimer.current = setTimeout(() => setMegaOpen(false), 180);
  };

  // close on ESC for a11y
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMegaOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-[#d4af37]/20 shadow-[0_4px_20px_rgba(0,0,0,0.08)] backdrop-blur-lg">
      {/* Gold gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#d4af37]/10 via-white/80 to-[#d4af37]/10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* 3-column layout preserved */}
        <div className={`grid grid-cols-3 items-center h-20 ${cinzel.className}`}>
          {/* Left links (unchanged) */}
          <nav aria-label="Primary left" className="hidden md:flex justify-center gap-10">
            <NavLink href="/" label="Home" />
            <NavLink href="/portfolio" label="Portfolio" />
            <NavLink href="/gallery" label="Gallery" />
          </nav>

          {/* Mobile menu button (unchanged) */}
          <div className="md:hidden">
            <button
              onClick={() => setOpen(v => !v)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-black/10 text-black/70 bg-white/60 backdrop-blur-sm"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 6h18M3 12h18M3 18h18" />
                )}
              </svg>
            </button>
          </div>

          {/* Center logo (unchanged) */}
          <div className="flex items-center justify-center">
            <Link href="/" className="group inline-flex items-center">
              <span className="sr-only">Talwar Interiors — Home</span>
              <div className="relative" style={{ width: "80px", height: "80px" }}>
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

          {/* Right: Services + CTA (same placement) */}
          <div className="hidden md:flex justify-center items-center gap-10">
            {/* SERVICES trigger + mega panel */}
            <div
              className="relative"
              onMouseEnter={scheduleOpen}
              onMouseLeave={scheduleClose}
            >
              <button
                type="button"
                aria-haspopup="menu"
                aria-expanded={megaOpen}
                onClick={() => setMegaOpen(v => !v)}
                className="relative inline-flex items-center gap-1 px-4 py-2 rounded-full text-[17px] text-black/80 hover:text-[#D4AF37] transition-colors duration-300 focus:outline-none"
              >
                Services
                <svg
                  width="14" height="14" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  className={`transition-transform duration-200 ${megaOpen ? "rotate-180" : ""}`}
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>

              {/* hover buffer to prevent flicker when moving down */}
              <div className={`${megaOpen ? "block" : "hidden"} absolute left-0 right-0 h-3`} />

              {/* MEGA PANEL — makes space, easy to explore */}
              <div
                role="menu"
                className={`absolute right-0 mt-3 w-[600px] rounded-2xl bg-white/95 backdrop-blur-md border border-[#d4af37]/25 shadow-[0_20px_40px_rgba(0,0,0,0.12)] ring-1 ring-black/5
                  transition-all duration-200 ${megaOpen ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 translate-y-2"}`}
              >
                {/* decorative top line */}
                <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#d4af37]/60 to-transparent rounded-t-2xl" />

                <div className="p-4 grid grid-cols-2 gap-2">
                  {SERVICES.map((service) => {
                    const slug = service.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
                    return (
                      <Link
                        key={slug}
                        href={`/services#${slug}`}
                        className="group flex items-start gap-3 rounded-xl px-3 py-3 hover:bg-[#fff8e1] transition-colors"
                        onClick={() => setMegaOpen(false)}
                      >
                        <span className="mt-1 h-2 w-2 rounded-full bg-[#D4AF37] opacity-80 group-hover:opacity-100" />
                        <div className="leading-snug">
                          <div className="text-[15px] font-semibold text-gray-900 group-hover:text-[#D4AF37]">
                            {service}
                          </div>
                          <div className="text-[12px] text-gray-500">
                            Explore details →
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>

                {/* footer row */}
                <div className="flex items-center justify-between px-4 py-3 border-t border-black/5">
                  <Link
                    href="/services"
                    className="text-[13px] font-medium text-[#D4AF37] hover:underline"
                    onClick={() => setMegaOpen(false)}
                  >
                    View all services
                  </Link>
                  <span className="text-[12px] text-gray-500"></span>
                </div>
              </div>
            </div>

            {/* CTA */}
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
              <span aria-hidden className="pointer-events-none shimmer-mask absolute inset-0 rounded-full" />
              <span className="relative z-10 font-bold tracking-wide">Book Appointment</span>
            </Link>
          </div>
        </div>

        {/* MOBILE drawer (unchanged layout, adds expandable Services) */}
        <div
          id="mobile-nav"
          className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
        >
          <div className="mt-2 rounded-2xl border border-black/10 bg-white/90 backdrop-blur-md shadow-xl">
            <div className="px-3 py-2">
              <MobileLink href="/" label="Home" onClick={() => setOpen(false)} />
              <MobileLink href="/portfolio" label="Portfolio" onClick={() => setOpen(false)} />
              <MobileLink href="/gallery" label="Gallery" onClick={() => setOpen(false)} />

              {/* Services expand */}
              <button
                onClick={() => setServicesOpen(v => !v)}
                aria-expanded={servicesOpen}
                className="w-full text-left block px-3 py-2 text-[17px] text-black/80 hover:text-[#D4AF37] transition-colors duration-300"
              >
                Services {servicesOpen ? "▲" : "▼"}
              </button>
              {servicesOpen && (
                <div className="pl-4">
                  {SERVICES.map((service) => {
                    const slug = service.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
                    return (
                      <MobileLink
                        key={slug}
                        href={`/services#${slug}`}
                        label={service}
                        onClick={() => setOpen(false)}
                      />
                    );
                  })}
                </div>
              )}

              <div className="pt-2 pb-2">
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
                  <span aria-hidden className="pointer-events-none shimmer-mask absolute inset-0 rounded-full" />
                  <span className="relative z-10 font-bold tracking-wide">Book an Appointment</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* styles reused */}
        <style jsx>{`
          .shimmer-mask {
            background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0) 100%);
            transform: translateX(-100%);
            animation: shimmer 2.25s linear infinite;
          }
          .gold-pulse {
            box-shadow: 0 0 8px rgba(212,175,55,0.35), inset 0 0 6px rgba(212,175,55,0.25);
            animation: pulseGold 2.6s ease-in-out infinite;
          }
          @keyframes shimmer {
            0% { transform: translateX(-120%); }
            100% { transform: translateX(120%); }
          }
          @keyframes pulseGold {
            0%,100% { box-shadow: 0 0 8px rgba(212,175,55,0.35), inset 0 0 6px rgba(212,175,55,0.25); opacity: 0.9; }
            50% { box-shadow: 0 0 22px rgba(212,175,55,0.75), inset 0 0 10px rgba(212,175,55,0.35); opacity: 1; }
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
      className="relative inline-block px-4 py-2 rounded-full text-[17px] text-black/80 hover:text-[#D4AF37] transition-colors duration-300"
    >
      {label}
    </Link>
  );
}

function MobileLink({ href, label, onClick }: { href: string; label: string; onClick?: () => void }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block px-3 py-2 text-[15px] text-black/80 hover:text-[#D4AF37] transition-colors duration-300"
    >
      {label}
    </Link>
  );
}
