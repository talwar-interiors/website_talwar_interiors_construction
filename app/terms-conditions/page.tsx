"use client";

import { useState, useEffect } from "react";
import { Cinzel } from "next/font/google";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

const cinzel = Cinzel({ subsets: ["latin"], weight: ["400", "700"] });

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

export default function TermsConditions() {
  // Floating particles for ethereal effect
  const [particles, setParticles] = useState<Particle[]>([]);
  // Twinkling sparkles (hydration-safe via state)
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  // Generate effects only on the client to avoid hydration mismatches
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
    <div
      className={`min-h-screen relative overflow-hidden ${cinzel.className}`}
    >
      <Header />

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

      {/* Sparkles (hydration-safe) */}
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

      {/* Animated gold particles */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {particles.map((particle, index) => (
          <div
            key={index}
            className="absolute rounded-full bg-[#d4af37] opacity-30 animate-float-slow"
            style={{
              left: particle.left,
              top: particle.top,
              width: particle.size,
              height: particle.size,
              animationDelay: particle.delay,
              animationDuration: particle.duration,
            }}
          />
        ))}
      </div>

      {/* Gold light beams */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[-5]">
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-[#d4af37] opacity-10 rounded-full blur-3xl animate-pulse-slow" />
        <div
          className="absolute top-1/4 -right-20 w-60 h-60 bg-[#d4af37] opacity-10 rounded-full blur-3xl animate-pulse-slow"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute -bottom-20 left-1/3 w-80 h-80 bg-[#d4af37] opacity-10 rounded-full blur-3xl animate-pulse-slow"
          style={{ animationDelay: "4s" }}
        />
      </div>

      {/* Rotating feather/icon */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 opacity-5">
        <svg
          className="w-96 h-96 text-[#d4af37] animate-spin-slow"
          style={{ animationDuration: "60s" }}
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M7,21C5.35,21 4,19.65 4,18V5C4,3.35 5.35,2 7,2H17C18.65,2 20,3.35 20,5V18C20,19.65 18.65,21 17,21H7ZM7,4C6.45,4 6,4.45 6,5V18C6,18.55 6.45,19 7,19H17C17.55,19 18,18.55 18,18V5C18,4.45 17.55,4 17,4H7Z" />
        </svg>
      </div>

      {/* Content container */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8 flex justify-center items-center min-h-[calc(100vh-5rem)]">
        {/* Main card with glass morphism effect */}
        <div className="relative max-w-3xl w-full backdrop-blur-xl bg-white/80 border border-[#d4af37]/20 rounded-xl p-8 md:p-10 shadow-[0_0_25px_rgba(212,175,55,0.15)] animate-fade-in">
          {/* Gold accent line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-0.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />

          <div className="space-y-8">
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#b08c1d] via-[#d4af37] to-[#b08c1d]">
                  Terms & Conditions
                </span>
              </h1>
              <p className="text-gray-600">Last Updated: [Insert Date]</p>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                Welcome to the official website of TALWAR Constructions &
                Interior&apos;s (&quot;we,&quot; &quot;our,&quot;
                &quot;us&quot;). By accessing or using our website and services,
                you agree to comply with and be bound by the following Terms &
                Conditions. Please read them carefully.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4 text-[#d4af37]">
                1. General Information
              </h2>
              <p>
                TALWAR Constructions & Interior&apos;s is a full-scale
                construction and interior design company specializing in
                property development, civil contracting, residential &
                commercial interiors, and custom furniture solutions. All
                content, designs, and information on this website are intended
                for informational purposes only.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4 text-[#d4af37]">
                2. Acceptance of Terms
              </h2>
              <p>
                By using our website, you confirm that you have read,
                understood, and agree to these Terms & Conditions. If you do not
                agree, you should discontinue use immediately.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4 text-[#d4af37]">
                3. Scope of Services
              </h2>
              <p>Our services include but are not limited to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Property development & civil contracting</li>
                <li>Residential, commercial, and industrial construction</li>
                <li>Interior and exterior design solutions</li>
                <li>Furniture, fabric, and accessories selection</li>
                <li>Lighting, false ceiling, and space planning solutions</li>
              </ul>
              <p>
                All services are subject to project-specific contracts and
                agreements.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4 text-[#d4af37]">
                4. Intellectual Property Rights
              </h2>
              <p>
                All designs, concepts, text, graphics, images, logos, and other
                materials displayed on this website are the exclusive property
                of TALWAR Constructions & Interior&apos;s unless otherwise
                stated.
              </p>
              <p>
                You may not reproduce, copy, distribute, or use any content
                without our prior written consent.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4 text-[#d4af37]">
                5. Project Estimates & Payments
              </h2>
              <p>
                Any quotations or cost estimates provided by us are valid for a
                limited time and subject to change without notice.
              </p>
              <p>
                Payment terms will be outlined in the individual project
                contract.
              </p>
              <p>
                Delays in payment may result in a pause or termination of
                services.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4 text-[#d4af37]">
                6. Client Responsibilities
              </h2>
              <p>Clients are required to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Provide accurate project details, measurements, and
                  requirements.
                </li>
                <li>
                  Approve designs, layouts, and selections in a timely manner.
                </li>
                <li>Ensure site accessibility for our team and suppliers.</li>
              </ul>

              <h2 className="text-xl font-semibold mt-8 mb-4 text-[#d4af37]">
                7. Limitation of Liability
              </h2>
              <p>
                While we aim to deliver high-quality work, TALWAR Constructions
                & Interior&apos;s will not be held liable for:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Delays caused by third-party vendors, suppliers, or unforeseen
                  circumstances.
                </li>
                <li>
                  Damages due to natural calamities, accidents, or misuse of our
                  products.
                </li>
                <li>Any indirect or consequential losses.</li>
              </ul>

              <h2 className="text-xl font-semibold mt-8 mb-4 text-[#d4af37]">
                8. Modifications to Terms
              </h2>
              <p>
                We reserve the right to update or change these Terms &
                Conditions at any time without prior notice. Changes will be
                posted on our website.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4 text-[#d4af37]">
                9. Governing Law
              </h2>
              <p>
                These Terms & Conditions shall be governed and interpreted in
                accordance with the laws of India. Any disputes shall be subject
                to the exclusive jurisdiction of the courts in Hyderabad,
                Telangana.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4 text-[#d4af37]">
                10. Contact Us
              </h2>
              <p>
                If you have any questions about these Terms & Conditions, please
                contact:
                <br />
                📞 +91 9000701000
              </p>

              <p className="mt-8 text-sm text-gray-500 border-t border-gray-200 pt-6"></p>
            </div>
          </div>
        </div>
      </div>

      {/* Local keyframes for custom Tailwind-like classes */}
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
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
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
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out both;
        }

        .sparkle {
          animation-name: sparkleDrift;
          animation-iteration-count: infinite;
          animation-timing-function: ease-in-out;
        }
      `}</style>

      <Footer />
    </div>
  );
}
