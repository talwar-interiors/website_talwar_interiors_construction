"use client";

import React, { useCallback, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Cinzel } from "next/font/google";

import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

const cinzel = Cinzel({ subsets: ["latin"], weight: ["400", "700"] });

type ImageItem = { id: number; url: string; alt: string; aspectRatio: number };

const FILES: string[] = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
  "10.jpg",
  "11.jpg",
  "12.jpg",
  "13.jpg",
  "14.jpg",
  "15.jpg",
  "16.jpg",
  "17.jpg",
  "18.jpg",
  "19.jpg",
  "20.png",
  "21.jpg",
  "22.jpg",
  "23.jpg",
  "24.jpg",
  "25.jpg",
  "26.jpg",
  "27.jpg",
  "28.jpg",
  "29.jpg",
  "30.jpg",
  "31.jpg",
  "32.jpg",
  "33.jpg",
  "34.jpg",
  "35.jpg",
  "36.jpg",
  "37.jpg",
  "38.jpg",
  "39.jpg",
  "40.jpg",
  "41.jpg",
  "42.jpg",
  "43.jpg",
  "44.jpg",
];

const SEED_RATIOS = [4 / 3, 3 / 4, 16 / 9, 9 / 16, 1, 5 / 4, 4 / 5];

// Helper Components 
const GoldAnimatedBackground = () => (
  <div className="pointer-events-none absolute left-0 top-0 -z-10 size-full">
    <svg className="absolute size-full" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1920 1080">
      <path d="M 0 200 C 300 400, 600 100, 900 300 S 1200 500, 1500 200" stroke="#FFD700" strokeWidth="2.5" fill="none" opacity="0.13" />
      <path d="M 200 800 C 500 600, 800 900, 1100 700 S 1400 500, 1700 800" stroke="#FFB300" strokeWidth="1.5" fill="none" opacity="0.13" />
      <path d="M 400 100 C 700 300, 1000 50, 1300 250 S 1600 400, 1900 150" stroke="#FFECB3" strokeWidth="1.5" fill="none" opacity="0.13" />
      <path d="M 100 900 C 400 700, 700 950, 1000 750 S 1300 550, 1600 900" stroke="#FFC107" strokeWidth="1.5" fill="none" opacity="0.13" />
    </svg>
  </div>
);

function GoldCTAPanel() {
  return (
    <div className="relative mt-12 overflow-hidden rounded-2xl ring-1 ring-[#D4AF37]/40 shadow-[0_20px_60px_rgba(212,175,55,0.25)]">
      <div className="absolute inset-0 opacity-95 bg-[conic-gradient(from_220deg_at_50%_50%,#FFF7D6,#F7E6A6,#E9C85A,#F7E6A6,#FFF7D6)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_0%,rgba(255,255,255,0.65),transparent_55%),radial-gradient(160%_100%_at_50%_100%,rgba(212,175,55,0.28),transparent_60%)]" />
      <div className="relative p-7 sm:p-10 text-center">
        <h3 className="text-2xl sm:text-3xl font-extrabold tracking-wide bg-gradient-to-r from-[#b8892b] via-[#D4AF37] to-[#b8892b] bg-clip-text text-transparent drop-shadow-[0_1px_0_rgba(0,0,0,0.08)]">
          Elevate every detail—craft a space that’s unmistakably yours.
        </h3>
        <p className="mx-auto mt-2 max-w-3xl text-black/80">
          Tell us your vision—colors, textures, routines. We’ll shape a clear, design-first plan and deliver with precision.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <a
            href="/book"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-2xl border border-[#D4AF37] bg-transparent px-6 py-3 text-sm font-semibold text-[#D4AF37] shadow-[0_10px_30px_rgba(212,175,55,0.25)] ring-1 ring-[#D4AF37]/40 transition hover:shadow-[0_14px_40px_rgba(212,175,55,0.45)] hover:bg-[#D4AF37]/10 active:scale-95"
          >
            <span className="pointer-events-none absolute inset-0 opacity-40 bg-[radial-gradient(60%_120%_at_50%_0%,rgba(212,175,55,0.25),transparent)]" />
            <span className="pointer-events-none absolute inset-0 -translate-x-full bg-[linear-gradient(120deg,transparent,rgba(212,175,55,0.6),transparent)] transition-transform duration-700 ease-out group-hover:translate-x-full" />
            <span className="relative z-10">Book a Consultation</span>
          </a>
          <a
            href="https://wa.me/919000701000"
            target="_blank"
            className="rounded-2xl border border-black/25 bg-white/40 backdrop-blur px-5 py-3 text-sm text-black transition hover:bg-white/55"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}

// Utilities
function useImages(): ImageItem[] {
  return useMemo(
    () =>
      FILES.map((file, i) => ({
        id: i + 1,
        url: `/assets/${file}`,
        alt: `Project ${i + 1}`,
        aspectRatio: SEED_RATIOS[i % SEED_RATIOS.length],
      })),
    []
  );
}

function balanceColumns(images: ImageItem[], num: number): ImageItem[][] {
  const cols: ImageItem[][] = Array.from({ length: num }, () => []);
  const heights = Array(num).fill(0);
  images.forEach((img) => {
    const estH = 300 / (img.aspectRatio || 1);
    const idx = heights.indexOf(Math.min(...heights));
    cols[idx].push(img);
    heights[idx] += estH;
  });
  return cols;
}

//  Deterministic “variance” to avoid hydration mismatch 
function seededVariance(id: number): number {
  const x = Math.sin(id * 997) * 10000;
  const frac = x - Math.floor(x);
  return frac * 40 - 20; // [-20, +20]
}

function cardHeight(img: ImageItem): number {
  const baseW = 300;
  let h = baseW / (img.aspectRatio || 1);
  h += seededVariance(img.id);
  return Math.max(200, Math.min(520, h));
}

// Page 
export default function GalleryPage() {
  const images = useImages();

  const [columns, setColumns] = useState(4);
  const [columnImages, setColumnImages] = useState<ImageItem[][]>([]);
  const [selected, setSelected] = useState<ImageItem | null>(null);
  const [open, setOpen] = useState(false);
  const [aspectMap, setAspectMap] = useState<Record<number, number>>({});

  // responsive columns
  useEffect(() => {
    const handle = () => {
      if (window.innerWidth < 640) setColumns(2);
      else if (window.innerWidth < 768) setColumns(3);
      else if (window.innerWidth < 1024) setColumns(4);
      else if (window.innerWidth < 1280) setColumns(5);
      else setColumns(6);
    };
    handle();
    window.addEventListener("resize", handle);
    return () => window.removeEventListener("resize", handle);
  }, []);

  // re-balance when columns or aspect ratios change
  useEffect(() => {
    const refined = images.map((img) => ({
      ...img,
      aspectRatio: aspectMap[img.id] || img.aspectRatio,
    }));
    setColumnImages(balanceColumns(refined, columns));
  }, [images, columns, aspectMap]);

  const openModal = (img: ImageItem) => {
    setSelected(img);
    setOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setOpen(false);
    setSelected(null);
    document.body.style.overflow = "unset";
  };

  const navigate = useCallback(
    (dir: "prev" | "next") => {
      if (!selected) return;
      const idx = images.findIndex((x) => x.id === selected.id);
      const nextIdx = dir === "next" ? (idx + 1) % images.length : idx === 0 ? images.length - 1 : idx - 1;
      setSelected(images[nextIdx]);
    },
    [selected, images]
  );

  // keyboard controls
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowLeft") navigate("prev");
      if (e.key === "ArrowRight") navigate("next");
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, navigate]);

  return (
    <div className={`relative min-h-screen overflow-x-hidden bg-white ${cinzel.className}`}>
      <GoldAnimatedBackground />
      <Header />

      {/* HERO — NO load animation */}
      <section className="relative flex h-[60vh] items-center justify-center text-center">
        <div className="absolute inset-0 bg-white" />
        <div className="absolute inset-0 -z-0">
          <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-[#d4af37]/15 blur-3xl" />
          <div className="absolute top-1/3 -right-24 h-80 w-80 rounded-full bg-[#d4af37]/10 blur-3xl" />
          <div className="absolute -bottom-24 left-1/3 h-96 w-96 rounded-full bg-[#d4af37]/10 blur-3xl" />
        </div>

        <div className="relative z-10 px-6">
          <h1 className="text-5xl font-bold md:text-6xl">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#b08c1d] via-[#d4af37] to-[#b08c1d]">
              Gallery
            </span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-700">
            A curated showcase of Talwar Interiors — residences, offices, kitchens and bespoke details.
          </p>
          <div className="mx-auto mt-6 h-[3px] w-24 rounded-full bg-gradient-to-r from-[#FFF5CC] via-[#D4AF37] to-[#C08E2F] shadow-[0_0_12px_rgba(212,175,55,0.55)]" />
        </div>
      </section>

      {/* Masonry Grid */}
      <section className="relative min-h-screen py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div
            className={`grid gap-4 ${
              columns === 2
                ? "grid-cols-2"
                : columns === 3
                ? "grid-cols-3"
                : columns === 4
                ? "grid-cols-4"
                : columns === 5
                ? "grid-cols-5"
                : "grid-cols-6"
            }`}
          >
            {columnImages.map((col, cIdx) => (
              <div key={`col-${cIdx}`} className="flex flex-col gap-4">
                {col.map((img) => {
                  const height = cardHeight(img);
                  return (
                    <div
                      key={img.id}
                      style={{ height }}
                      className="group relative cursor-pointer overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:shadow-xl hover:shadow-amber-200/50"
                      onClick={() => openModal(img)}
                    >
                      <div className="relative size-full overflow-hidden rounded-2xl">
                        <Image
                          src={img.url}
                          alt={img.alt}
                          fill
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                          loading="lazy"
                          sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, (max-width: 1280px) 20vw, 16vw"
                          onLoadingComplete={({ naturalWidth, naturalHeight }) => {
                            if (naturalWidth && naturalHeight) {
                              const ar = naturalWidth / naturalHeight;
                              setAspectMap((m) => (m[img.id] ? m : { ...m, [img.id]: ar }));
                            }
                          }}
                        />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/35 to-transparent opacity-90" />
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>

          {/* Same gold CTA panel as Services, before Footer */}
          <GoldCTAPanel />
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {open && selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="relative max-h-[90vh] w-full max-w-4xl"
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute -top-12 right-0 text-white transition-colors hover:text-gray-300"
                aria-label="Close"
              >
                <svg className="size-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <button
                onClick={() => navigate("prev")}
                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-3 text-white backdrop-blur-sm transition-colors hover:bg-white/30"
                aria-label="Previous image"
              >
                <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => navigate("next")}
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-3 text-white backdrop-blur-sm transition-colors hover:bg-white/30"
                aria-label="Next image"
              >
                <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <div className="relative mx-auto aspect-[4/3] w-full max-w-2xl overflow-hidden rounded-2xl bg-white" style={{ maxHeight: "80vh" }}>
                <Image
                  src={selected.url}
                  alt={selected.alt}
                  fill
                  className="object-contain"
                  priority
                  sizes="(max-width: 768px) 90vw, 800px"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
