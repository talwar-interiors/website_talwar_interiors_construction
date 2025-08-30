"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Cinzel } from "next/font/google";

const cinzel = Cinzel({ subsets: ["latin"], weight: ["400", "700"] });

type TItem = { quote: string; name: string; meta: string; rating: number };

const TESTIMONIALS: TItem[] = [
  { quote: "Talwar translated a bold brief into a warm, luxurious home. Materials, lighting and detailing were world-class—delivered with absolute clarity.", name: "Armaan Sharma", meta: "Private Residence — Jubilee Hills", rating: 4.9 },
  { quote: "We trusted them with a complete office build in 60 days. The result is tailored, timeless, and deeply functional. Worth every rupee.", name: "Rhea Mehta", meta: "Corporate HQ — Banjara Hills", rating: 4.8 },
  { quote: "They balanced vision with execution—joinery, finishes and ergonomics are impeccable. Guests still ask who designed our space.", name: "Savita Rao", meta: "Luxury Apartment — Kokapet", rating: 4.7 },
  { quote: "From mood boards to handover, everything felt precise. Budgets were transparent, schedules honored, outcome beyond expectation.", name: "Nikhil Kapoor", meta: "Premium Villa — Nanakramguda", rating: 5.0 },
  { quote: "Retail reimagined with intelligent lighting and meticulous fabrication. Sales lifted within weeks—design that truly performs.", name: "Aarav Verma", meta: "Retail Flagship — Gachibowli", rating: 4.6 },
  { quote: "Creative and exacting. The palette, proportions and detailing show a strong point of view—our space feels iconic.", name: "Divya Iyer", meta: "Penthouse — Financial District", rating: 4.5 },
  { quote: "Installation finished five days beyond the commitment due to a bespoke stone batch. The updates were consistent, and the final finish is exquisite—absolutely forgivable for the quality.", name: "Aditya Malhotra", meta: "Townhouse — Banjara Hills", rating: 4.3 },
  { quote: "They understood our lifestyle and translated it into thoughtful spaces—smart storage, perfect lighting, textures that age beautifully.", name: "Radhika & Kabir Menon", meta: "Family Home — Madhapur", rating: 4.8 },
  { quote: "A couple of site meetings started late, which worried me at first. But the craftsmanship and finish surpassed expectations—the result is refined, cohesive and worth the patience.", name: "Ishaan Bhattacharya", meta: "Show Apartment — Hitech City", rating: 4.0 },
  { quote: "From concept to execution, everything felt intentional. The result is calm, sophisticated and built to last.", name: "Vihaan Deshmukh", meta: "Weekend Home — Gandipet", rating: 4.9 },
];

function Stars({ rating }: { rating: number }) {
  // Full >=1, “half-ish” >=0.5, else empty — represented via opacity (SSR-safe).
  return (
    <div className="flex items-center gap-1" aria-label={`${rating.toFixed(1)} out of 5`}>
      {Array.from({ length: 5 }).map((_, i) => {
        const delta = rating - i;
        const opacity = delta >= 1 ? 1 : delta >= 0.5 ? 0.6 : 0.2;
        return (
          <svg key={i} viewBox="0 0 24 24" width="16" height="16" className="shrink-0">
            <path
              d="M12 17.27l6.18 3.73-1.64-7.03L21 9.24l-7.19-.62L12 2 10.81 8.62 3 9.24l4.46 4.73L5.82 21z"
              fill="#D4AF37"
              opacity={opacity}
              stroke="#B8892B"
              strokeWidth="0.5"
            />
          </svg>
        );
      })}
    </div>
  );
}

function Card({ t }: { t: TItem }) {
  return (
    <article className="t-card w-[78vw] sm:w-[420px] md:w-[560px] shrink-0 rounded-2xl bg-white/95 p-6 sm:p-7 backdrop-blur">
      <div className="flex items-center justify-between">
        <Stars rating={t.rating} />
        <span className="text-[11px] font-semibold tracking-wide text-[#8b6b1f]">
          {t.rating.toFixed(1)} RATED
        </span>
      </div>
      <div className="relative mt-4">
        <div className="select-none text-7xl leading-none text-[#D4AF37]/10">“</div>
        <p className="-mt-3 text-[15px] sm:text-[16px] leading-relaxed text-gray-800">{t.quote}</p>
      </div>
      <div className="mt-5 flex items-center justify-between">
        <div className="text-sm font-semibold text-gray-900">{t.name}</div>
        <div className="text-xs text-[#8b6b1f]">{t.meta}</div>
      </div>
    </article>
  );
}

export default function Testimonials() {
  const railRef = useRef<HTMLDivElement>(null);
  const [dragging, setDragging] = useState(false);
  const [isAuto, setIsAuto] = useState(true);
  const pos = useRef({ x: 0, left: 0 });

  // Drag handlers (mobile)
  const onPointerDown: React.PointerEventHandler<HTMLDivElement> = (e) => {
    const el = railRef.current;
    if (!el) return;
    setDragging(true);
    setIsAuto(false);
    el.setPointerCapture?.(e.pointerId);
    pos.current = { x: e.clientX, left: el.scrollLeft };
  };
  const onPointerMove: React.PointerEventHandler<HTMLDivElement> = (e) => {
    if (!dragging) return;
    const el = railRef.current;
    if (!el) return;
    el.scrollLeft = pos.current.left - (e.clientX - pos.current.x);
  };
  const onPointerUp: React.PointerEventHandler<HTMLDivElement> = (e) => {
    const el = railRef.current;
    if (!el) return;
    setDragging(false);
    el.releasePointerCapture?.(e.pointerId);
    setTimeout(() => setIsAuto(true), 600);
  };

  // Gentle auto-scroll
  useEffect(() => {
    const el = railRef.current;
    if (!el) return;
    let raf = 0;
    let last = 0;
    const speed = 0.18;
    const step = (t: number) => {
      if (!last) last = t;
      const dt = t - last;
      last = t;

      if (isAuto && !dragging) {
        el.scrollLeft += dt * speed;
        if (el.scrollLeft >= el.scrollWidth - el.clientWidth - 1) el.scrollLeft = 0;
      }
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);

    const onEnter = () => setIsAuto(false);
    const onLeave = () => setIsAuto(true);
    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [isAuto, dragging]);

  const rowA = [...TESTIMONIALS];
  const rowB = [...TESTIMONIALS].reverse();

  return (
    <section id="testimonials" className={`relative overflow-hidden py-20 sm:py-24 ${cinzel.className}`}>
      {/* Ambient gold accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-72 w-[120%] bg-[radial-gradient(closest-side,rgba(212,175,55,0.16),transparent_65%)]" />
        <div className="absolute inset-x-0 top-1/3 h-px bg-gradient-to-r from-transparent via-[#d4af37]/45 to-transparent animate-gold-sweep" />
        <div className="absolute inset-x-0 bottom-1/4 h-px bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent animate-gold-sweep-slow" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        {/* Title */}
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-wide">
            <span className="bg-gradient-to-r from-[#D4AF37] to-[#b8892b] bg-clip-text text-transparent">
              Client Testimonials
            </span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-gray-700">
            Bold ideas. Luxe materials. Flawless execution. This is what our clients say.
          </p>
          <div className="mx-auto mt-4 h-[3px] w-24 rounded-full bg-gradient-to-r from-[#FFF5CC] via-[#D4AF37] to-[#C08E2F] shadow-[0_0_12px_rgba(212,175,55,0.55)]" />
        </div>

        {/* Mobile */}
        <div className="relative mt-10 md:hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-white to-transparent" />
          <div className="absolute -top-6 right-3 text-[11px] font-semibold tracking-wide text-[#8b6b1f]/80">
            Swipe<span className="inline-block translate-x-1 animate-pulse">→</span>
          </div>

          <div
            className={`no-scrollbar snap-x snap-mandatory overflow-x-auto overflow-y-hidden px-2 py-2 ${
              dragging ? "cursor-grabbing" : "cursor-grab"
            }`}
            ref={railRef}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerLeave={() => setDragging(false)}
            style={{ touchAction: "pan-y" }}
          >
            <div className="inline-flex gap-6 pr-10">
              {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
                <div key={i} className="snap-start">
                  <Card t={t} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop */}
        <div className="relative hidden md:block mt-12">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent" />
          <div className="space-y-8">
            <div className="marquee group" aria-label="testimonial marquee row 1">
              <div className="marquee-track group-hover:[animation-play-state:paused]">
                {[...rowA, ...rowA].map((t, i) => (
                  <div key={`a-${i}`} className="mr-6 last:mr-0">
                    <Card t={t} />
                  </div>
                ))}
              </div>
            </div>
            <div className="marquee group" data-dir="right" aria-label="testimonial marquee row 2">
              <div className="marquee-track group-hover:[animation-play-state:paused]">
                {[...rowB, ...rowB].map((t, i) => (
                  <div key={`b-${i}`} className="mr-6 last:mr-0">
                    <Card t={t} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 flex justify-center">
          <Link
            href="/book"
            aria-label="Book an Appointment"
            className="t-outline-cta group relative inline-flex items-center justify-center overflow-hidden rounded-2xl border px-6 py-3 text-sm font-semibold transition active:scale-95"
          >
            <span className="t-outline-sheen" aria-hidden />
            <span className="relative z-10">Book an Appointment</span>
          </Link>
        </div>
      </div>

      {/* Styles */}
      <style jsx global>{`
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        .no-scrollbar::-webkit-scrollbar { display: none; }

        @keyframes gold-sweep {
          0% { transform: translateX(-18%); opacity: 0.3; }
          50% { opacity: 0.55; }
          100% { transform: translateX(18%); opacity: 0.3; }
        }
        .animate-gold-sweep { animation: gold-sweep 12s ease-in-out infinite alternate; }
        .animate-gold-sweep-slow { animation: gold-sweep 18s ease-in-out infinite alternate; }

        .marquee { overflow: hidden; width: 100%; }
        .marquee-track {
          display: inline-flex;
          gap: 1.5rem;
          will-change: transform;
          animation: marquee-left 70s linear infinite;
        }
        .marquee[data-dir="right"] .marquee-track {
          animation-name: marquee-right;
          animation-duration: 78s;
        }
        @keyframes marquee-left { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes marquee-right { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); } }

        .t-card {
          position: relative;
          box-shadow: 0 10px 28px rgba(212, 175, 55, 0.16), 0 2px 8px rgba(0, 0, 0, 0.04);
          transition: transform 220ms cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 220ms ease;
        }
        .t-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 18px 44px rgba(212, 175, 55, 0.26), 0 3px 12px rgba(0, 0, 0, 0.06);
        }
        .t-card::before {
          content: "";
          position: absolute;
          inset: 0;
          padding: 1.6px;
          border-radius: 16px;
          background: conic-gradient(
            from 180deg,
            #fff7d1 0deg,
            #d4af37 80deg,
            #b8892b 140deg,
            #d4af37 220deg,
            #fff7d1 300deg,
            #d4af37 360deg
          );
          -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
          -webkit-mask-composite: xor;
                  mask-composite: exclude;
          pointer-events: none;
        }
        .t-card::after {
          content: "";
          position: absolute;
          inset: -4px;
          border-radius: 20px;
          background:
            radial-gradient(60% 80% at 50% 0%, rgba(212, 175, 55, 0.22), rgba(212, 175, 55, 0) 60%),
            radial-gradient(40% 60% at 85% 30%, rgba(255, 246, 200, 0.25), transparent 70%);
          filter: blur(10px);
          opacity: 0.8;
          pointer-events: none;
          z-index: -1;
        }

        .t-outline-cta {
          color: #b8892b;
          border-color: rgba(212, 175, 55, 0.75);
          background: rgba(255, 255, 255, 0.28);
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
          box-shadow: 0 10px 22px rgba(212, 175, 55, 0.15),
                      inset 0 1px 0 rgba(255, 255, 255, 0.35);
        }
        .t-outline-cta:hover {
          border-color: #d4af37;
          color: #d4af37;
          box-shadow: 0 14px 30px rgba(212, 175, 55, 0.25),
                      inset 0 1px 0 rgba(255, 255, 255, 0.45);
        }
        .t-outline-cta:focus-visible {
          outline: none;
          box-shadow: 0 0 0 3px #fff, 0 0 0 6px rgba(212, 175, 55, 0.55);
        }
        .t-outline-sheen {
          position: absolute;
          inset: 0;
          border-radius: 16px;
          background: linear-gradient(
            115deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.75) 10%,
            rgba(255, 255, 255, 0) 20%
          );
          background-size: 220% 220%;
          transform: translate3d(0, 0, 0);
          opacity: 0;
          transition: opacity 160ms ease;
          pointer-events: none;
        }
        .t-outline-cta:hover .t-outline-sheen {
          opacity: 1;
          animation: t-outline-sweep 1.25s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        @keyframes t-outline-sweep { 0% { background-position: 120% -10%; } 100% { background-position: -20% 120%; } }

        @media (prefers-reduced-motion: reduce) {
          .animate-gold-sweep,
          .animate-gold-sweep-slow,
          .marquee-track { animation: none !important; }
          .t-card { transition: none !important; }
        }
      `}</style>
    </section>
  );
}
