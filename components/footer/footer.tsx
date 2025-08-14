"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Cinzel } from "next/font/google";

const cinzel = Cinzel({ subsets: ["latin"], weight: ["400", "700"] });

type Particle = {
  left: string;
  top: string;
  delay: string;
  dur: string;
};

export default function Footer() {
  const [particles, setParticles] = useState<Particle[]>([]);

  // Generate random particles ONLY on the client to avoid hydration mismatch
  useEffect(() => {
    const arr: Particle[] = Array.from({ length: 8 }, () => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 2}s`,
      dur: `${2 + Math.random() * 2}s`,
    }));
    setParticles(arr);
  }, []);

  return (
    <footer
      className={`relative text-gray-800 border-t border-[#d4af37]/30 backdrop-blur-lg overflow-hidden ${cinzel.className}`}
    >
      {/* Gold gradient overlay (matching navbar) */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#d4af37]/10 via-white/80 to-[#d4af37]/10 pointer-events-none" />

      {/* Animated Golden Balls/Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating Golden Orbs */}
        <div className="absolute top-10 left-10 w-3 h-3 bg-[#d4af37] rounded-full animate-float-1 opacity-60"></div>
        <div className="absolute top-20 right-20 w-2 h-2 bg-[#d4af37] rounded-full animate-float-2 opacity-40"></div>
        <div className="absolute top-32 left-1/4 w-4 h-4 bg-[#d4af37] rounded-full animate-float-3 opacity-50"></div>
        <div className="absolute top-16 right-1/3 w-2.5 h-2.5 bg-[#d4af37] rounded-full animate-float-4 opacity-70"></div>

        {/* Bottom Floating Orbs */}
        <div className="absolute bottom-20 left-16 w-3.5 h-3.5 bg-[#d4af37] rounded-full animate-float-5 opacity-55"></div>
        <div className="absolute bottom-32 right-24 w-2 h-2 bg-[#d4af37] rounded-full animate-float-6 opacity-45"></div>
        <div className="absolute bottom-24 left-1/3 w-3 h-3 bg-[#d4af37] rounded-full animate-float-7 opacity-60"></div>

        {/* Center Floating Orbs */}
        <div className="absolute top-1/2 left-8 w-2.5 h-2.5 bg-[#d4af37] rounded-full animate-float-8 opacity-50"></div>
        <div className="absolute top-1/2 right-12 w-3 h-3 bg-[#d4af37] rounded-full animate-float-9 opacity-65"></div>
      </div>

      {/* Golden Particle Effects (hydration-safe: generated on client) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full">
          {particles.map((p, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-[#d4af37] rounded-full animate-pulse"
              style={{
                left: p.left,
                top: p.top,
                animationDelay: p.delay,
                animationDuration: p.dur,
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-6 group">
              <div className="relative">
                <Image
                  src="/assets/talwar_nobg.png"
                  alt="Talwar Interiors Logo"
                  width={50}
                  height={50}
                  className="mr-3 transition-transform duration-500 group-hover:scale-110"
                />
                {/* Enhanced golden glow around logo */}
                <div className="absolute inset-0 bg-[#d4af37]/20 rounded-full blur-md -z-10 group-hover:bg-[#d4af37]/30 transition-all duration-500"></div>
              </div>
              <h3 className="text-2xl font-bold text-[#D4AF37] drop-shadow-sm group-hover:drop-shadow-lg transition-all duration-300">
                Talwar Interiors
              </h3>
            </div>
            <p className="text-black/80 mb-4 max-w-md leading-relaxed">
              Your trusted partner in interior design and construction. We
              transform spaces into beautiful, functional environments that
              reflect your unique style.
            </p>
            <div className="flex space-x-4">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/talwarinteriors"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black/70 hover:text-[#D4AF37] transition-all duration-300 hover:scale-110 p-2 rounded-full hover:bg-[#d4af37]/10 group"
                aria-label="Instagram"
              >
                <svg
                  className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.25.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                </svg>
              </a>
              {/* Facebook */}
              <a
                href="https://www.facebook.com/talwarinteriors"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black/70 hover:text-[#D4AF37] transition-all duration-300 hover:scale-110 p-2 rounded-full hover:bg-[#d4af37]/10 group"
                aria-label="Facebook"
              >
                <svg
                  className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.405 24 24 23.408 24 22.674V1.326C24 .592 23.405 0 22.675 0" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/talwarinteriors"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black/70 hover:text-[#D4AF37] transition-all duration-300 hover:scale-110 p-2 rounded-full hover:bg-[#d4af37]/10 group"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="group">
            <h4 className="text-lg font-semibold mb-6 text-[#D4AF37] border-b-2 border-[#d4af37]/30 pb-2 group-hover:border-[#d4af37] transition-all duration-300">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-black/80 hover:text-[#D4AF37] transition-all duration-300 hover:translate-x-1 inline-block group/item"
                >
                  <span className="group-hover/item:bg-[#d4af37]/10 px-2 py-1 rounded transition-all duration-300">
                    Home
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/#about"
                  className="text-black/80 hover:text-[#D4AF37] transition-all duration-300 hover:translate-x-1 inline-block group/item"
                >
                  <span className="group-hover/item:bg-[#d4af37]/10 px-2 py-1 rounded transition-all duration-300">
                    About Us
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  className="text-black/80 hover:text-[#D4AF37] transition-all duration-300 hover:translate-x-1 inline-block group/item"
                >
                  <span className="group-hover/item:bg-[#d4af37]/10 px-2 py-1 rounded transition-all duration-300">
                    Services
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/#portfolio"
                  className="text-black/80 hover:text-[#D4AF37] transition-all duration-300 hover:translate-x-1 inline-block group/item"
                >
                  <span className="group-hover/item:bg-[#d4af37]/10 px-2 py-1 rounded transition-all duration-300">
                    Portfolio
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="text-black/80 hover:text-[#D4AF37] transition-all duration-300 hover:translate-x-1 inline-block group/item"
                >
                  <span className="group-hover/item:bg-[#d4af37]/10 px-2 py-1 rounded transition-all duration-300">
                    Contact
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="group">
            <h4 className="text-lg font-semibold mb-6 text-[#D4AF37] border-b-2 border-[#d4af37]/30 pb-2 group-hover:border-[#d4af37] transition-all duration-300">
              Services
            </h4>
            <ul className="space-y-3">
              <li>
                <span className="text-black/80">Interior Design</span>
              </li>
              <li>
                <span className="text-black/80">Construction</span>
              </li>
              <li>
                <span className="text-black/80">Renovation</span>
              </li>
              <li>
                <span className="text-black/80">Consultation</span>
              </li>
              <li>
                <span className="text-black/80">Project Management</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="relative z-10 border-t border-[#d4af37]/30">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-black/80 text-sm group">
              <span className="group-hover:text-[#D4AF37] transition-colors duration-300">
                ©2025 Talwar Interiors | Developed by Osman
              </span>
            </div>

            {/* Legal Links */}
            <div className="flex space-x-6 text-sm">
              <Link
                href="/terms-conditions"
                className="text-black/80 hover:text-[#D4AF37] transition-all duration-300 hover:scale-105 group"
              >
                <span className="group-hover:bg-[#d4af37]/10 px-2 py-1 rounded transition-all duration-300">
                  Terms & Conditions
                </span>
              </Link>
              <Link
                href="/privacy-policy"
                className="text-black/80 hover:text-[#D4AF37] transition-all duration-300 hover:scale-105 group"
              >
                <span className="group-hover:bg-[#d4af37]/10 px-2 py-1 rounded transition-all duration-300">
                  Privacy Policy
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float-1 {
          0%,
          100% {
            transform: translateY(0) rotate(0);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }
        @keyframes float-2 {
          0%,
          100% {
            transform: translateY(0) rotate(0);
          }
          50% {
            transform: translateY(-15px) rotate(-180deg);
          }
        }
        @keyframes float-3 {
          0%,
          100% {
            transform: translateY(0) rotate(0);
          }
          50% {
            transform: translateY(-25px) rotate(90deg);
          }
        }
        @keyframes float-4 {
          0%,
          100% {
            transform: translateY(0) rotate(0);
          }
          50% {
            transform: translateY(-18px) rotate(-90deg);
          }
        }
        @keyframes float-5 {
          0%,
          100% {
            transform: translateY(0) rotate(0);
          }
          50% {
            transform: translateY(-22px) rotate(180deg);
          }
        }
        @keyframes float-6 {
          0%,
          100% {
            transform: translateY(0) rotate(0);
          }
          50% {
            transform: translateY(-16px) rotate(-180deg);
          }
        }
        @keyframes float-7 {
          0%,
          100% {
            transform: translateY(0) rotate(0);
          }
          50% {
            transform: translateY(-24px) rotate(90deg);
          }
        }
        @keyframes float-8 {
          0%,
          100% {
            transform: translateY(0) rotate(0);
          }
          50% {
            transform: translateY(-19px) rotate(-90deg);
          }
        }
        @keyframes float-9 {
          0%,
          100% {
            transform: translateY(0) rotate(0);
          }
          50% {
            transform: translateY(-21px) rotate(180deg);
          }
        }
        .animate-float-1 {
          animation: float-1 6s ease-in-out infinite;
        }
        .animate-float-2 {
          animation: float-2 7s ease-in-out infinite;
        }
        .animate-float-3 {
          animation: float-3 8s ease-in-out infinite;
        }
        .animate-float-4 {
          animation: float-4 5s ease-in-out infinite;
        }
        .animate-float-5 {
          animation: float-5 6.5s ease-in-out infinite;
        }
        .animate-float-6 {
          animation: float-6 7.5s ease-in-out infinite;
        }
        .animate-float-7 {
          animation: float-7 8.5s ease-in-out infinite;
        }
        .animate-float-8 {
          animation: float-8 6.8s ease-in-out infinite;
        }
        .animate-float-9 {
          animation: float-9 7.2s ease-in-out infinite;
        }
      `}</style>

      {/* <footer className="w-full py-8 bg-white/90 border-t border-[#d4af37]/20 text-center text-gray-700 text-sm">
        <div>
          &copy; {new Date().getFullYear()} Talwar Interiors & Constructions.
          All rights reserved.
        </div>
        <div className="mt-1">
          Official Email:{" "}
          <a
            href="mailto:info@talwarinteriors.in"
            className="text-[#D4AF37] hover:underline font-medium"
          >
            info@talwarinteriors.in
          </a>
        </div>
      </footer> */}
    </footer>
  );
}
