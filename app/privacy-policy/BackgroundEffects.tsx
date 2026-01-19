"use client";

import { useState, useEffect } from "react";

type Particle = {
    left: string;
    top: string;
    size: string;
    delay: string;
    duration: string;
};

type Sparkle = {
    width: string;
    height: string;
    left: string;
    top: string;
    delay: string;
    duration: string;
};

export default function BackgroundEffects() {
    const [particles, setParticles] = useState<Particle[]>([]);
    const [sparkles, setSparkles] = useState<Sparkle[]>([]);

    // Client-only randomness to avoid hydration mismatch
    useEffect(() => {
        setParticles(
            Array.from({ length: 15 }, () => ({
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                size: `${Math.random() * 1.5 + 0.5}rem`,
                delay: `${Math.random() * 5}s`,
                duration: `${Math.random() * 10 + 10}s`,
            }))
        );

        setSparkles(
            Array.from({ length: 18 }, () => ({
                width: `${6 + Math.random() * 8}px`,
                height: `${6 + Math.random() * 8}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                delay: `${Math.random() * 2}s`,
                duration: `${3 + Math.random() * 2}s`,
            }))
        );
    }, []);

    return (
        <>
            {/* Base background */}
            <div className="absolute inset-0 bg-white z-[-30]">
                {/* Subtle pattern overlay */}
                <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZjhmOGY4Ij48L3JlY3Q+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNkNGFmMzciPjwvcmVjdD4KPC9zdmc+')]"></div>
            </div>

            {/* Gold Animated Waves (SVG lines) */}
            <div className="pointer-events-none absolute inset-0 z-[-20]">
                <svg
                    className="absolute h-full w-full"
                    preserveAspectRatio="xMidYMid slice"
                    viewBox="0 0 1920 1080"
                >
                    <path
                        d="M -100 500 C 400 1000, 800 100, 1100 450 S 1600 1000, 2020 600"
                        stroke="#FFD700"
                        strokeWidth="2.5"
                        fill="none"
                        opacity="0.18"
                    />
                    <path
                        d="M 0 200 C 300 400, 600 100, 900 300 S 1200 500, 1500 200"
                        stroke="#FFB300"
                        strokeWidth="1.5"
                        fill="none"
                        opacity="0.13"
                    />
                    <path
                        d="M 200 800 C 500 600, 800 900, 1100 700 S 1400 500, 1700 800"
                        stroke="#FFD700"
                        strokeWidth="1.5"
                        fill="none"
                        opacity="0.13"
                    />
                    <path
                        d="M 400 100 C 700 300, 1000 50, 1300 250 S 1600 400, 1900 150"
                        stroke="#FFECB3"
                        strokeWidth="1.5"
                        fill="none"
                        opacity="0.13"
                    />
                    <path
                        d="M 100 900 C 400 700, 700 950, 1000 750 S 1300 550, 1600 900"
                        stroke="#FFC107"
                        strokeWidth="1.5"
                        fill="none"
                        opacity="0.13"
                    />
                </svg>
            </div>

            {/* Sparkles (hydration-safe via state) */}
            <div className="pointer-events-none absolute inset-0 z-[-10]">
                {sparkles.map((s, i) => (
                    <span
                        key={i}
                        className="absolute rounded-full bg-yellow-200/70 blur-[2px] sparkle"
                        style={{
                            width: s.width,
                            height: s.height,
                            left: s.left,
                            top: s.top,
                            animationDelay: s.delay,
                            animationDuration: s.duration,
                        }}
                    />
                ))}
            </div>

            {/* Floating gold particles */}
            <div className="absolute inset-0 pointer-events-none z-0">
                {particles.map((p, index) => (
                    <div
                        key={index}
                        className="absolute rounded-full bg-[#d4af37] opacity-30 animate-float-slow"
                        style={{
                            left: p.left,
                            top: p.top,
                            width: p.size,
                            height: p.size,
                            animationDelay: p.delay,
                            animationDuration: p.duration,
                        }}
                    />
                ))}
            </div>

            {/* Gold light beams */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-[-5]">
                <div className="absolute -top-20 -left-20 w-40 h-40 bg-[#d4af37] opacity-10 rounded-full blur-3xl animate-pulse-slow"></div>
                <div
                    className="absolute top-1/4 -right-20 w-60 h-60 bg-[#d4af37] opacity-10 rounded-full blur-3xl animate-pulse-slow"
                    style={{ animationDelay: "2s" }}
                />
                <div
                    className="absolute -bottom-20 left-1/3 w-80 h-80 bg-[#d4af37] opacity-10 rounded-full blur-3xl animate-pulse-slow"
                    style={{ animationDelay: "4s" }}
                />
            </div>

            {/* Rotating icon */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 opacity-5">
                <svg
                    className="w-96 h-96 text-[#d4af37] animate-spin-slow"
                    style={{ animationDuration: "60s" }}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                >
                    <path d="M12,3L1,9L12,15L21,10.09V17H23V9M5,13.18V17.18L12,21L19,17.18V13.18L12,17L5,13.18Z" />
                </svg>
            </div>

            {/* Local keyframes */}
            <style jsx>{`
        @keyframes floatSlow {
          0% {
            transform: translate3d(0, 0, 0);
            opacity: 0.3;
          }
          50% {
            transform: translate3d(10px, -20px, 0);
            opacity: 0.6;
          }
          100% {
            transform: translate3d(0, 0, 0);
            opacity: 0.3;
          }
        }
        @keyframes pulseSlow {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.1;
          }
          50% {
            transform: scale(1.08);
            opacity: 0.18;
          }
        }
        @keyframes spinSlow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes sparkleDrift {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0.6;
          }
          50% {
            transform: translateY(-14px) translateX(6px);
            opacity: 1;
          }
          100% {
            transform: translateY(0) translateX(0);
            opacity: 0.6;
          }
        }

        .animate-float-slow {
          animation: floatSlow var(--floatDur, 14s) ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulseSlow 6s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spinSlow 60s linear infinite;
        }

        .sparkle {
          animation-name: sparkleDrift;
          animation-iteration-count: infinite;
          animation-timing-function: ease-in-out;
        }
      `}</style>
        </>
    );
}
