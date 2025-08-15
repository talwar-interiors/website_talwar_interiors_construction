"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Cinzel } from "next/font/google";

const cinzel = Cinzel({ subsets: ["latin"], weight: ["400", "700"] });

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
  const [open, setOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const openTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Desktop: anti-flicker scheduling
  const scheduleOpen = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    if (megaOpen) return;
    openTimer.current = setTimeout(() => setMegaOpen(true), 120);
  };
  const scheduleClose = () => {
    if (openTimer.current) clearTimeout(openTimer.current);
    closeTimer.current = setTimeout(() => setMegaOpen(false), 180);
  };

  // Close menus on ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMegaOpen(false);
        setOpen(false);
        setServicesOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    // ✅ Apply Cinzel to the entire header so desktop + mobile inherit it
    <header className={`${cinzel.className} sticky top-0 z-50 border-b border-[#d4af37]/20 shadow-[0_4px_20px_rgba(0,0,0,0.08)] backdrop-blur-lg`}>
      {/* Gold gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#d4af37]/10 via-white/80 to-[#d4af37]/10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ⬇️ Removed cinzel here (now inherited from header) */}
        <div className="grid grid-cols-3 items-center h-20">
          {/* Left: Home + SERVICES */}
          <nav aria-label="Primary left" className="hidden md:flex items-center justify-center gap-8">
            <NavLink href="/" label="Home" />

            {/* SERVICES trigger + desktop mega panel */}
            <div className="relative" onMouseEnter={scheduleOpen} onMouseLeave={scheduleClose}>
              {/* Link to /services (kept hover behavior for mega menu) */}
              <Link
                href="/services"
                onClick={() => setMegaOpen(false)}
                className="relative inline-flex items-center gap-1 px-4 py-2 rounded-full text-[17px] text-black/80 hover:text-[#D4AF37] transition-colors duration-300 group focus:outline-none"
              >
                <span className="relative z-10 flex items-center gap-1">
                  Services
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`transition-transform duration-200 ${megaOpen ? "rotate-180" : ""}`}
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </span>
                {/* Animated gold loading underline */}
                <span
                  className="pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-1 h-[3px] w-0 bg-gradient-to-r from-[#fffbe6] via-[#d4af37] to-[#b08c1d] rounded-full shadow-[0_0_8px_2px_rgba(212,175,55,0.18)] transition-all duration-500 group-hover:w-4/5 group-hover:animate-navbar-underline"
                  aria-hidden
                />
              </Link>

              {/* Hover buffer to prevent flicker when moving down */}
              <div className={`${megaOpen ? "block" : "hidden"} absolute left-0 right-0 h-3`} />

              {/* Mega panel (opens from left) */}
              <div
                role="menu"
                className={`absolute left-0 mt-3 w-[min(92vw,640px)] rounded-2xl bg-white/95 backdrop-blur-md border border-[#d4af37]/25 shadow-[0_20px_40px_rgba(0,0,0,0.12)] ring-1 ring-black/5 transition-all duration-200 ${
                  megaOpen ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 translate-y-2"
                }`}
              >
                <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#d4af37]/60 to-transparent rounded-t-2xl" />
                <div className="p-4 grid grid-cols-2 gap-2">
                  {SERVICES.map((service) => {
                    const slug = service
                      .toLowerCase()
                      .replace(/[^a-z0-9]+/g, "-")
                      .replace(/(^-|-$)/g, "");
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
                          <div className="text-[12px] text-gray-500">Explore details →</div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
                <div className="flex items-center justify-between px-4 py-3 border-t border-black/5">
                  <Link
                    href="/services"
                    className="text-[13px] font-medium text-[#D4AF37] hover:underline"
                    onClick={() => setMegaOpen(false)}
                  >
                    View all services
                  </Link>
                  <span className="text-[12px] text-gray-500" />
                </div>
              </div>
            </div>
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
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 6h18M3 12h18M3 18h18" />
                )}
              </svg>
            </button>
          </div>

          {/* Center logo */}
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

          {/* Right: Gallery + CTA */}
          <div className="hidden md:flex justify-center items-center gap-10">
            <NavLink href="/gallery" label="Gallery" />
            <BookCTA className="ml-0" />
          </div>
        </div>

        {/* MOBILE drawer */}
        <div
          id="mobile-nav"
          className={`md:hidden fixed inset-x-0 top-20 z-50 transition-all duration-300 ${
            open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
          style={{
            maxHeight: open ? "80vh" : "0",
            overflowY: open ? "auto" : "hidden",
            background: "rgba(255,255,255,0.97)",
            borderRadius: "0 0 1.5rem 1.5rem",
            boxShadow: open ? "0 8px 32px rgba(0,0,0,0.12)" : "none",
            transition: "all 0.3s cubic-bezier(.4,0,.2,1)",
          }}
        >
          <div className="mt-2 rounded-2xl border border-black/10 bg-transparent backdrop-blur-md shadow-xl">
            <div className="px-3 py-2">
              <MobileLink href="/" label="Home" onClick={() => setOpen(false)} />

              {/* MOBILE SERVICES */}
              <MobileServicesAccordion
                services={SERVICES}
                servicesOpen={servicesOpen}
                setServicesOpen={setServicesOpen}
                onItemClick={() => setOpen(false)}
              />

              <MobileLink href="/gallery" label="Gallery" onClick={() => setOpen(false)} />

              <BookCTA className="block w-full text-center mt-2" label="Book an Appointment" />
            </div>
          </div>
        </div>

        {/* Styles */}
        <style jsx global>{`
          :root {
            --gold: #d4af37;
            --gold-soft: rgba(212, 175, 55, 0.15);
            --gold-strong: rgba(212, 175, 55, 0.45);
          }

          .cta-gold {
            position: relative;
            display: inline-flex;
            align-items: center;
            gap: 10px;
            padding: 10px 18px 10px 16px;
            border-radius: 9999px;
            border: 2px solid var(--gold);
            color: var(--gold);
            background: linear-gradient(
              135deg,
              rgba(212, 175, 55, 0.1),
              rgba(212, 175, 55, 0.02) 40%,
              rgba(212, 175, 55, 0.1) 80%
            );
            box-shadow: 0 1px 1px rgba(0, 0, 0, 0.04), inset 0 0 0.5px rgba(255, 255, 255, 0.3);
            transition: transform 220ms cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 220ms cubic-bezier(0.2, 0.8, 0.2, 1),
              color 220ms ease;
            will-change: transform, box-shadow;
            outline: none;
            -webkit-tap-highlight-color: transparent;
          }

          .cta-gold:hover {
            transform: translateY(-1px) scale(1.02);
            box-shadow: 0 10px 26px rgba(0, 0, 0, 0.12), 0 0 0 6px var(--gold-soft);
          }
          .cta-gold:active {
            transform: translateY(0) scale(0.995);
            box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1), 0 0 0 4px var(--gold-soft);
          }
          .cta-gold:focus-visible {
            box-shadow: 0 0 0 3px #fff, 0 0 0 6px var(--gold-strong);
          }

          .cta-label {
            position: relative;
            z-index: 2;
            font-weight: 700;
            letter-spacing: 0.3px;
            white-space: nowrap;
          }
          .cta-arrow {
            position: relative;
            z-index: 2;
            transition: transform 220ms cubic-bezier(0.2, 0.8, 0.2, 1), opacity 220ms ease;
            transform: translateX(0);
            opacity: 0.9;
          }
          .cta-gold:hover .cta-arrow {
            transform: translateX(2px);
            opacity: 1;
          }

          .cta-border {
            pointer-events: none;
            position: absolute;
            inset: -2px;
            border-radius: inherit;
            background: conic-gradient(
              from 0deg,
              rgba(255, 255, 255, 0) 0deg,
              rgba(255, 255, 255, 0) 40deg,
              rgba(255, 230, 150, 0.7) 120deg,
              rgba(255, 255, 255, 0) 200deg,
              rgba(255, 255, 255, 0) 360deg
            );
            filter: blur(0.4px);
            animation: borderSweep 2.2s linear infinite;
            -webkit-mask: radial-gradient(
              circle at 50% 50%,
              transparent 0,
              transparent calc(100% - 2px),
              #000 calc(100% - 2px)
            );
            mask: radial-gradient(
              circle at 50% 50%,
              transparent 0,
              transparent calc(100% - 2px),
              #000 calc(100% - 2px)
            );
          }

          .cta-glow {
            pointer-events: none;
            position: absolute;
            inset: 2px;
            border-radius: inherit;
            background: radial-gradient(80% 140% at 50% 50%, rgba(212, 175, 55, 0.25), rgba(212, 175, 55, 0) 70%);
            filter: blur(8px);
            opacity: 0.65;
            animation: breathe 3s ease-in-out infinite;
          }

          .cta-sheen {
            pointer-events: none;
            position: absolute;
            inset: 0;
            border-radius: inherit;
            background: linear-gradient(
              120deg,
              rgba(255, 255, 255, 0) 0%,
              rgba(255, 255, 255, 0) 45%,
              rgba(255, 255, 255, 0.45) 50%,
              rgba(255, 255, 255, 0) 55%,
              rgba(255, 255, 255, 0) 100%
            );
            background-size: 220% 220%;
            transform: translate3d(0, 0, 0);
            animation: sheenSweep 2.8s cubic-bezier(0.2, 0.8, 0.2, 1) infinite;
            opacity: 0.9;
          }

          .cta-sparks {
            pointer-events: none;
            position: absolute;
            inset: 0;
            border-radius: inherit;
            background: radial-gradient(2px 2px at 14% 60%, rgba(255, 240, 200, 0.9), rgba(255, 240, 200, 0) 60%),
              radial-gradient(1.5px 1.5px at 72% 30%, rgba(255, 250, 230, 0.95), rgba(255, 250, 230, 0) 60%),
              radial-gradient(1.8px 1.8px at 36% 20%, rgba(255, 235, 180, 0.9), rgba(255, 235, 180, 0) 60%),
              radial-gradient(1.3px 1.3px at 86% 72%, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0) 60%);
            filter: drop-shadow(0 0 4px rgba(212, 175, 55, 0.5));
            opacity: 0.65;
            animation: sparksDrift 5.2s ease-in-out infinite alternate;
          }

          @keyframes borderSweep {
            from { transform: rotate(0deg); }
            to   { transform: rotate(360deg); }
          }
          @keyframes breathe {
            0%, 100% { opacity: 0.45; filter: blur(8px); }
            50% { opacity: 0.85; filter: blur(10px); }
          }
          @keyframes sheenSweep {
            0% { background-position: 120% -10%; opacity: 0; }
            15% { opacity: 0.9; }
            45% { background-position: -20% 120%; opacity: 0; }
            100% { background-position: -20% 120%; opacity: 0; }
          }
          @keyframes sparksDrift {
            0% { transform: translate3d(0, 0, 0); }
            100% { transform: translate3d(2px, -2px, 0); }
          }

          @media (prefers-reduced-motion: reduce) {
            .cta-border,
            .cta-glow,
            .cta-sheen,
            .cta-sparks,
            .cta-gold,
            .cta-arrow {
              animation: none !important;
              transition: none !important;
            }
          }
        `}</style>
        <style jsx global>{`
          @keyframes navbar-underline {
            0% { width: 0; }
            100% { width: 80%; }
          }
          .group:hover > .group-hover\\:animate-navbar-underline {
            animation: navbar-underline 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          }
        `}</style>
      </div>
    </header>
  );
}

// NavLink with underline animation
function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="relative inline-block px-4 py-2 rounded-full text-[17px] text-black/80 hover:text-[#D4AF37] transition-colors duration-300 group focus:outline-none"
      style={{
        border: "2px solid transparent",
        background: "linear-gradient(135deg, transparent 0%, rgba(212, 175, 55, 0.07) 50%, transparent 100%)",
      }}
    >
      <span className="relative z-10">{label}</span>
      {/* Animated gold loading underline */}
      <span
        className="pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-1 h-[3px] w-0 bg-gradient-to-r from-[#fffbe6] via-[#d4af37] to-[#b08c1d] rounded-full shadow-[0_0_8px_2px_rgba(212,175,55,0.18)] transition-all duration-500 group-hover:w-4/5 group-hover:animate-navbar-underline"
        aria-hidden
      />
      <style jsx>{`
        @keyframes navbar-underline {
          0% { width: 0; }
          100% { width: 80%; }
        }
        .group-hover\\:animate-navbar-underline:hover > span[aria-hidden] {
          animation: navbar-underline 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
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
      className="block px-3 py-2 text-[15px] text-black/80 hover:text-[#D4AF37] transition-colors duration-300"
    >
      {label}
    </Link>
  );
}

/** Mobile Services accordion with measured height for buttery expand/collapse */
function MobileServicesAccordion({
  services,
  servicesOpen,
  setServicesOpen,
  onItemClick,
}: {
  services: string[];
  servicesOpen: boolean;
  setServicesOpen: (v: boolean) => void;
  onItemClick: () => void;
}) {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [contentHeight, setContentHeight] = useState(0);

  // measure content for smooth max-height animation
  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    const measure = () => setContentHeight(el.scrollHeight);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  return (
    <div>
      <button
        onClick={() => setServicesOpen(!servicesOpen)}
        aria-expanded={servicesOpen}
        className="w-full flex items-center justify-between px-3 py-3 text-[17px] text-black/90 hover:text-[#D4AF37] transition-colors duration-200"
      >
        <span>Services</span>
        <svg
          width={18}
          height={18}
          viewBox="0 0 24 24"
          fill="none"
          stroke="#d4af37"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`ml-2 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {/* Animated container */}
      <div
        style={{
          maxHeight: servicesOpen ? contentHeight : 0,
          transition: "max-height 260ms cubic-bezier(.2,.8,.2,1)",
          overflow: "hidden",
        }}
        aria-hidden={!servicesOpen}
      >
        <div ref={contentRef} className="pb-2">
          <ul className="mx-1 rounded-xl border border-black/10 bg-white/70 backdrop-blur-sm overflow-hidden">
            {services.map((service, idx) => {
              const slug = service.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
              const isLast = idx === services.length - 1;
              return (
                <li key={slug} className={!isLast ? "border-b border-black/5" : ""}>
                  <Link
                    href={`/services#${slug}`}
                    prefetch
                    onClick={onItemClick}
                    className="flex items-center justify-between gap-3 px-3 py-3.5 active:bg-[#fff8e1] transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-[#D4AF37]" />
                      <span className="text-[15px] text-gray-900">{service}</span>
                    </div>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

// BookCTA component
function BookCTA({
  className = "",
  label = "Book Appointment",
}: {
  className?: string;
  label?: string;
}) {
  return (
    <Link href="/book" className={`cta-gold ${className}`} aria-label={label}>
      <span className="cta-border" aria-hidden />
      <span className="cta-glow" aria-hidden />
      <span className="cta-sheen" aria-hidden />
      <span className="cta-sparks" aria-hidden />
      <span className="cta-label">{label}</span>
      <span className="cta-arrow" aria-hidden>
        →
      </span>
    </Link>
  );
}
