"use client";

import Image from "next/image";
import Link from "next/link";
import { Cinzel } from "next/font/google";
import { useEffect, useMemo, useRef, useState } from "react";

const cinzel = Cinzel({ subsets: ["latin"], weight: ["400", "700"] });

type Orb = {
  x: number; y: number; r: number; hue: number; alpha: number;
  vx: number; vy: number; wobble: number; wobbleSpeed: number; glow: number;
};
type Spark = {
  x: number; y: number; life: number; maxLife: number; size: number;
  twinkle: number; speedX: number; speedY: number;
};
type Comet = { x: number; y: number; vx: number; vy: number; life: number; maxLife: number };

const clamp = (v: number, a: number, b: number) => Math.min(b, Math.max(a, v));
const rand = (min: number, max: number) => Math.random() * (max - min) + min;
const chance = (p: number) => Math.random() < p;
const TAU = Math.PI * 2;

export default function Footer() {
  const year = useMemo(() => new Date().getFullYear(), []);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const [motionOK, setMotionOK] = useState(true);

  // honor reduced motion
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setMotionOK(!mq.matches);
    onChange();
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);

  useEffect(() => {
    if (!motionOK) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let w = 0, h = 0, dpr = Math.max(1, window.devicePixelRatio || 1);

    let orbs: Orb[] = [];
    let sparks: Spark[] = [];
    let comets: Comet[] = [];

    let last = performance.now();
    let paused = false;

    const fit = () => {
      const parent = canvas.parentElement || document.body;
      w = parent.clientWidth;
      h = parent.clientHeight;
      dpr = Math.max(1, window.devicePixelRatio || 1);
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const init = () => {
      fit();
      const isMobile = w < 768;

      const ORB_COUNT = isMobile ? 14 : 22;
      const SPARK_COUNT = isMobile ? 90 : 140;

      orbs = Array.from({ length: ORB_COUNT }, () => {
        const r = rand(isMobile ? 8 : 10, isMobile ? 16 : 24);
        return {
          x: rand(0, w),
          y: rand(0, h),
          r,
          hue: rand(44, 52),
          alpha: rand(0.28, 0.55),
          vx: rand(-0.16, 0.16),
          vy: rand(-0.14, 0.14),
          wobble: rand(0, TAU),
          wobbleSpeed: rand(0.003, 0.01),
          glow: rand(0.7, 1.1),
        };
      });

      sparks = Array.from({ length: SPARK_COUNT }, () => ({
        x: rand(0, w), y: rand(0, h), life: 0, maxLife: rand(1.8, 3.6),
        size: rand(0.8, 1.8), twinkle: rand(0.4, 1),
        speedX: rand(-0.06, 0.06), speedY: rand(-0.06, 0.06),
      }));

      comets = [];
    };

    const drawOrb = (o: Orb) => {
      const lx = o.x - o.r * 0.35;
      const ly = o.y - o.r * 0.35;

      const grad = ctx.createRadialGradient(lx, ly, o.r * 0.12, o.x, o.y, o.r);
      grad.addColorStop(0.0, `hsla(${o.hue}, 95%, 98%, ${0.85 * o.alpha})`);
      grad.addColorStop(0.25, `hsla(${o.hue}, 90%, 80%, ${0.65 * o.alpha})`);
      grad.addColorStop(0.65, `hsla(${o.hue - 8}, 80%, 55%, ${0.28 * o.alpha})`);
      grad.addColorStop(1.0, `hsla(${o.hue - 8}, 80%, 44%, 0)`);

      ctx.save();
      ctx.globalCompositeOperation = "screen";
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(o.x, o.y, o.r, 0, TAU);
      ctx.fill();

      ctx.shadowColor = `hsla(${o.hue}, 95%, 72%, ${0.35 * o.alpha * o.glow})`;
      ctx.shadowBlur = 18;
      ctx.beginPath();
      ctx.arc(o.x, o.y, o.r * 0.65, 0, TAU);
      ctx.fill();

      ctx.globalCompositeOperation = "screen";
      ctx.fillStyle = `rgba(255,255,255,${0.35 * o.alpha})`;
      ctx.beginPath();
      ctx.arc(lx, ly, o.r * 0.08, 0, TAU);
      ctx.fill();
      ctx.restore();
    };

    const drawSpark = (s: Spark) => {
      const a = Math.sin((s.life / s.maxLife) * Math.PI) * s.twinkle;
      ctx.save();
      ctx.globalCompositeOperation = "screen";
      ctx.fillStyle = `rgba(255,240,200,${a})`;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.size, 0, TAU);
      ctx.fill();

      ctx.strokeStyle = `rgba(212,175,55,${0.22 * a})`;
      ctx.lineWidth = 0.6;
      ctx.beginPath();
      ctx.moveTo(s.x - s.size * 2, s.y);
      ctx.lineTo(s.x + s.size * 2, s.y);
      ctx.moveTo(s.x, s.y - s.size * 2);
      ctx.lineTo(s.x, s.y + s.size * 2);
      ctx.stroke();
      ctx.restore();
    };

    const drawComet = (c: Comet) => {
      const prog = c.life / c.maxLife;
      const len = 150 * (1 - prog);
      const angle = Math.atan2(c.vy, c.vx);

      ctx.save();
      ctx.globalCompositeOperation = "screen";

      const grad = ctx.createLinearGradient(
        c.x - Math.cos(angle) * len, c.y - Math.sin(angle) * len, c.x, c.y
      );
      grad.addColorStop(0, "rgba(212,175,55,0)");
      grad.addColorStop(1, "rgba(255,240,200,0.9)");
      ctx.strokeStyle = grad;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(c.x - Math.cos(angle) * len, c.y - Math.sin(angle) * len);
      ctx.lineTo(c.x, c.y);
      ctx.stroke();

      ctx.fillStyle = "rgba(255,240,200,0.95)";
      ctx.beginPath();
      ctx.arc(c.x, c.y, 2.3, 0, TAU);
      ctx.fill();
      ctx.restore();
    };

    const step = () => {
      if (paused) { rafRef.current = requestAnimationFrame(step); return; }
      // ctx is closed over; if canvas unmounted, bail safely
      if (!canvasRef.current || !ctx) return;

      const now = performance.now();
      const dt = (now - last) / 16.6667;
      last = now;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const vGrad = ctx.createRadialGradient(
        w / 2, h / 2, Math.min(w, h) * 0.15,
        w / 2, h / 2, Math.max(w, h) * 0.75
      );
      vGrad.addColorStop(0, "rgba(255,255,255,0)");
      vGrad.addColorStop(1, "rgba(0,0,0,0.06)");
      ctx.fillStyle = vGrad;
      ctx.fillRect(0, 0, w, h);

      for (const o of orbs) {
        o.wobble += o.wobbleSpeed * dt;
        o.x += (o.vx + Math.sin(o.wobble) * 0.16) * dt * 1.2;
        o.y += (o.vy + Math.cos(o.wobble * 0.9) * 0.13) * dt * 1.2;

        if (o.x < -o.r) o.x = w + o.r;
        if (o.x > w + o.r) o.x = -o.r;
        if (o.y < -o.r) o.y = h + o.r;
        if (o.y > h + o.r) o.y = -o.r;

        drawOrb(o);
      }

      for (const s of sparks) {
        s.life += (1 / 60) * dt;
        if (s.life > s.maxLife) {
          s.x = rand(0, w); s.y = rand(0, h); s.life = 0;
          s.maxLife = rand(1.8, 3.6);
          s.size = rand(0.8, 1.8);
          s.twinkle = rand(0.4, 1);
          s.speedX = rand(-0.06, 0.06);
          s.speedY = rand(-0.06, 0.06);
        } else {
          s.x += s.speedX * dt * 1.4;
          s.y += s.speedY * dt * 1.4;
          if (s.x < 0) s.x = w; if (s.x > w) s.x = 0;
          if (s.y < 0) s.y = h; if (s.y > h) s.y = 0;
        }
        drawSpark(s);
      }

      if (chance(0.012)) {
        const fromLeft = chance(0.5);
        const y = rand(h * 0.1, h * 0.6);
        comets.push({
          x: fromLeft ? -40 : w + 40,
          y,
          vx: fromLeft ? rand(4.2, 6.5) : rand(-6.5, -4.2),
          vy: rand(-0.3, 0.2),
          life: 0,
          maxLife: rand(1.8, 2.6),
        });
      }
      comets = comets.filter((c) => c.life < c.maxLife);
      for (const c of comets) {
        c.life += (1 / 60) * dt;
        c.x += c.vx * dt;
        c.y += c.vy * dt;
        drawComet(c);
      }

      rafRef.current = requestAnimationFrame(step);
    };

    const onResize = () => {
      fit();
      for (const o of orbs) { o.x = clamp(o.x, -o.r, w + o.r); o.y = clamp(o.y, -o.r, h + o.r); }
      for (const s of sparks) { s.x = clamp(s.x, 0, w); s.y = clamp(s.y, 0, h); }
    };

    const onVis = () => { paused = document.hidden; };

    init();
    last = performance.now();
    rafRef.current = requestAnimationFrame(step);
    window.addEventListener("resize", onResize);
    document.addEventListener("visibilitychange", onVis);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, [motionOK]);

  return (
    <footer
      className={`relative overflow-hidden border-t border-[#d4af37]/30 bg-white ${cinzel.className}`}
      aria-labelledby="footer-heading"
    >
      {/* light gold mesh behind canvas */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(160% 100% at 0% 0%, rgba(212,175,55,0.06), transparent 55%), radial-gradient(180% 120% at 100% 100%, rgba(212,175,55,0.06), transparent 60%)",
        }}
      />

      {/* canvas animation layer */}
      <div className="absolute inset-0 z-[1]" aria-hidden="true">
        <canvas ref={canvasRef} className="h-full w-full" />
      </div>

      {/* subtle sheen */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[2] mix-blend-screen"
        style={{
          background:
            "linear-gradient(115deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.32) 8%, rgba(255,255,255,0) 16%)",
          backgroundSize: "240% 240%",
          animation: motionOK ? "sheen 8.5s cubic-bezier(.2,.8,.2,1) infinite" : "none",
        }}
      />
      {/* hairline */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 z-[2] h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(212,175,55,.7), transparent)" }}
      />

      {/* CONTENT */}
      <div className="relative z-[3] mx-auto max-w-7xl px-6 py-14">
        <h2 id="footer-heading" className="sr-only">Site footer</h2>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          {/* Brand + blurb + CTA */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-12">
                <Image src="/assets/talwar_nobg.png" alt="Talwar Interiors logo" fill className="object-contain" sizes="48px" priority />
              </div>
              <p className="text-2xl font-bold tracking-wide bg-gradient-to-r from-[#b8892b] via-[#D4AF37] to-[#b8892b] bg-clip-text text-transparent">
                Talwar Interiors
              </p>
            </div>

            <p className="mt-5 max-w-md leading-relaxed text-black/80">
              Your trusted partner in interior design and construction. We transform spaces into
              beautiful, functional environments that reflect your unique style.
            </p>

            {/* socials */}
            <div className="mt-5 flex items-center gap-4">
              <Link
                href="https://www.instagram.com/talwarinteriors"
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-full p-2 text-black/70 transition hover:bg-[#d4af37]/10 hover:text-[#D4AF37] focus-visible:outline-2 focus-visible:outline-[#d4af37] focus-visible:outline-offset-2"
                aria-label="Instagram"
                title="Instagram"
              >
                <svg className="h-5 w-5 transition group-hover:rotate-[8deg]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.25.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                </svg>
              </Link>
              
            </div>

            <div className="mt-6">
              <Link
                href="/book"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-2xl border border-[#D4AF37] bg-transparent px-6 py-3 text-sm font-semibold text-[#D4AF37] shadow-[0_10px_30px_rgba(212,175,55,0.25)] ring-1 ring-[#D4AF37]/40 transition
                          hover:shadow-[0_14px_40px_rgba(212,175,55,0.45)] hover:bg-[#D4AF37]/10 active:scale-95"
                aria-label="Book a Consultation"
              >
                <span className="pointer-events-none absolute inset-0 opacity-40 bg-[radial-gradient(60%_120%_at_50%_0%,rgba(212,175,55,0.25),transparent)]" />
                <span className="pointer-events-none absolute inset-0 -translate-x-full bg-[linear-gradient(120deg,transparent,rgba(212,175,55,0.6),transparent)] transition-transform duration-700 ease-out group-hover:translate-x-full" />
                <span className="relative z-10">Book a Consultation</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <nav className="md:col-span-3" aria-label="Quick links">
            <h3 className="text-lg font-semibold text-[#D4AF37]">Quick Links</h3>
            <div className="mt-2 h-px w-28 bg-gradient-to-r from-[#d4af37] to-transparent" aria-hidden="true" />
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
                    <svg className="h-3.5 w-3.5 opacity-0 transition group-hover:opacity-100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
            <div className="mt-2 h-px w-40 bg-gradient-to-r from-[#d4af37] to-transparent" aria-hidden="true" />
            {/* masonry-style columns to avoid big gaps */}
            <ul className="mt-5 columns-1 sm:columns-2 gap-x-10 [column-fill:_balance] text-[15px]">
              {[
                { label: "Interior & Exterior Design", id: "interior-exterior-design" },
                { label: "Furniture, Fabric & Accessories", id: "furniture-fabric-accessories" },
                { label: "Lighting & False Ceiling Solutions", id: "lighting-false-ceiling-solutions" },
                { label: "Space Planning & Optimization", id: "space-planning-optimization" },
                { label: "Fabrication", id: "fabrication" },
                { label: "Residential & Commercial Construction", id: "residential-commercial-construction" },
                { label: "Property Development & Civil Contracting", id: "property-development-civil-contracting" },
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
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 text-sm text-black/80">
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
        @keyframes sheen {
          0%   { background-position: 120% -10%; opacity: 0; }
          10%  { opacity: .9; }
          45%  { background-position: -20% 120%; opacity: 0; }
          100% { background-position: -20% 120%; opacity: 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          * { animation: none !important; transition: none !important; }
        }
      `}</style>
    </footer>
  );
}
