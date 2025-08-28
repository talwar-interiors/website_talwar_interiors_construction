"use client";

import Image from "next/image";
import Link from "next/link";
import { Cinzel } from "next/font/google";
import Testimonials from "@/components/sections/testimonials"; 

const cinzel = Cinzel({ subsets: ["latin"], weight: ["400", "700"] });

type TService = {
  id: string;
  title: string;
  blurb: string;
  points: string[];
  image: string;
};

const SERVICES: TService[] = [
  {
    id: "interior-exterior-design",
    title: "Interior Designs",
    blurb:
      "Concept-to-detail design—layouts, elevations, 3D, and material palettes for timeless spaces.",
    points: [
      "Space planning & 3D renders",
      "Material/finish boards",
      "Lighting & ceiling concepts",
      "Landscape/Facade cues",
    ],
    image: "/assets/20.png",
  },
  {
    id: "furniture-fabric-accessories",
    title: "Furniture, Fabric & Accessories",
    blurb:
      "Curated selections and bespoke pieces that elevate comfort and character.",
    points: [
      "Loose & built-in furniture",
      "Upholstery & drapery",
      "Rugs, art & décor curation",
      "Ergonomics & scale checks",
    ],
    image: "/assets/furniture.jpg",
  },
  {
    id: "lighting-false-ceiling-solutions",
    title: "False Ceiling & Lighting Solutions",
    blurb:
      "Layered lighting and ceiling systems that balance aesthetics with performance.",
    points: [
      "Ambient/task/accent planning",
      "False ceiling detailing",
      "Automation readiness",
      "Fixture scheduling",
    ],
    image: "/assets/34.jpg",
  },
];

export default function Homepage() {
  return (
    <div
      className={`min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 ${cinzel.className}`}
    >
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            src="/assets/landingpage.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="absolute w-full h-full inset-0 object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Transform Your Space
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Transform your space into a realm of unparalleled elegance. Our
            design experts await to bring your vision to life.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight md:whitespace-nowrap text-gray-900">
              Welcome to{" "}
              <span className="text-[#D4AF37] font-black">Talwar Interiors</span>
            </h2>
            <span className="mt-3 inline-block h-1 w-20 rounded-full bg-[#D4AF37] mx-auto" />
            <p className="mt-6 text-gray-700 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
              Step into a world where design meets passion and every detail
              captures your essence. Whether you dream of a warm, inviting home
              or a bold statement making office, we bring your vision to life
              with creativity, precision, and timeless style.
              <br />
              <br />
              Every aspect, from colors and fabrics to finishes including
              furniture, is uniquely chosen to define your space. Every choice
              is tailored uniquely as per your imagination. With fresh ideas and
              meticulous attention to detail, we create spaces that inspire,
              delight, and truly feel like home.
            </p>
          </div>

          <div
            className="relative w-full overflow-hidden rounded-2xl shadow-xl ring-1 ring-black/5"
            style={{ paddingTop: "56.25%" }}
          >
            <Image
              src="/assets/23.jpg"
              alt="Talwar Interiors showcase"
              fill
              className="object-cover"
              priority
              sizes="(min-width: 1024px) 560px, (min-width: 768px) 50vw, 100vw"
              quality={85}
            />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-wide">
              <span className="bg-gradient-to-r from-[#D4AF37] to-[#b8892b] bg-clip-text text-transparent">
                Our Services
              </span>
            </h2>
            <div className="mx-auto mt-4 h-[3px] w-24 rounded-full bg-gradient-to-r from-[#FFF5CC] via-[#D4AF37] to-[#C08E2F] shadow-[0_0_12px_rgba(212,175,55,0.55)]" />
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {SERVICES.map((s, idx) => (
              <Link
                key={s.id}
                href={`/services#${s.id}`}
                className="group gold-card flex flex-col overflow-hidden"
              >
                <div className="relative h-52 w-full bg-white">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    priority={idx < 1}
                    quality={85}
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#d4af37]/12 via-transparent to-[#d4af37]/10" />
                </div>
                <div className="px-5 pt-4 pb-5">
                  <h3 className="text-lg font-semibold text-gray-900 text-center transition-colors group-hover:text-[#D4AF37]">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 text-center">
                    {s.blurb}
                  </p>
                  <ul className="mt-3 grid gap-1.5 text-sm text-gray-700">
                    {s.points.slice(0, 4).map((p) => (
                      <li key={p} className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#D4AF37]/80" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Link
              href="/services"
              className="gold-outline-cta group relative inline-flex items-center justify-center overflow-hidden rounded-2xl border px-6 py-3 text-sm font-semibold transition active:scale-95"
              aria-label="Explore our services"
            >
              <span className="gold-outline-sheen" aria-hidden />
              <span className="relative z-10">Explore our services</span>
            </Link>
          </div>
        </div>
      </section>
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            Why Choose Us?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="gold-card text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Custom Design
              </h3>
              <p className="text-gray-600">
                Tailored solutions crafted to bring your imagination to life
                while honoring your preferences
              </p>
            </div>

            <div className="gold-card text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Quality Materials
              </h3>
              <p className="text-gray-600">
                Premium materials and craftsmanship that stand the test of time
              </p>
            </div>

            <div className="gold-card text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Timely Delivery
              </h3>
              <p className="text-gray-600">
                Project management that delivers your space as and when promised
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Testimonials />


      <style jsx global>{`
        /* Translucent CTA with gold border + animated sheen */
        .gold-outline-cta {
          color: #b8892b;
          border-color: rgba(212, 175, 55, 0.7);
          background: rgba(255, 255, 255, 0.35);
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
          box-shadow: 0 10px 22px rgba(212, 175, 55, 0.15),
            inset 0 1px 0 rgba(255, 255, 255, 0.35);
        }
        .gold-outline-cta:hover {
          border-color: #d4af37;
          color: #d4af37;
          box-shadow: 0 14px 30px rgba(212, 175, 55, 0.25),
            inset 0 1px 0 rgba(255, 255, 255, 0.45);
        }
        .gold-outline-cta:focus-visible {
          outline: none;
          box-shadow: 0 0 0 3px #fff, 0 0 0 6px rgba(212, 175, 55, 0.55);
        }
        .gold-outline-sheen {
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
        .gold-outline-cta:hover .gold-outline-sheen {
          opacity: 1;
          animation: gold-outline-sweep 1.25s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        @keyframes gold-outline-sweep {
          0% {
            background-position: 120% -10%;
          }
          100% {
            background-position: -20% 120%;
          }
        }

        /* Gold keyline + outer glow for cards */
        .gold-card {
          position: relative;
          border-radius: 1rem; /* rounded-2xl */
          background: #fff;
          box-shadow: 0 10px 28px rgba(212, 175, 55, 0.18),
            0 2px 8px rgba(0, 0, 0, 0.05);
          overflow: hidden;
          transition: transform 200ms cubic-bezier(0.2, 0.8, 0.2, 1),
            box-shadow 200ms ease;
        }
        .gold-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 40px rgba(212, 175, 55, 0.28),
            0 3px 10px rgba(0, 0, 0, 0.07);
        }
        .gold-card::before {
          content: "";
          position: absolute;
          inset: 0;
          padding: 1.5px; /* keyline thickness */
          border-radius: inherit;
          background: conic-gradient(
            from 180deg,
            #fff7d1 0deg,
            #d4af37 80deg,
            #b8892b 140deg,
            #d4af37 220deg,
            #fff7d1 300deg,
            #d4af37 360deg
          );
          -webkit-mask: linear-gradient(#000 0 0) content-box,
            linear-gradient(#000 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
        }
        .gold-card::after {
          content: "";
          position: absolute;
          inset: -4px;
          border-radius: inherit;
          background: radial-gradient(
            60% 80% at 50% 0%,
            rgba(212, 175, 55, 0.2),
            rgba(212, 175, 55, 0) 60%
          );
          filter: blur(10px);
          opacity: 0.75;
          pointer-events: none;
          z-index: -1;
        }

        /* Respect reduced-motion users (no page-load animations) */
        @media (prefers-reduced-motion: reduce) {
          .gold-outline-cta,
          .gold-outline-cta *,
          .gold-card {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </div>
  );
}
