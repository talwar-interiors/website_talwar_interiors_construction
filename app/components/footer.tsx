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
    <footer className={`relative text-gray-800 border-t border-[#d4af37]/30 backdrop-blur-lg overflow-hidden ${cinzel.className}`}>
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
              Your trusted partner in interior design and construction. We transform spaces into beautiful, functional environments that reflect your unique style.
            </p>
            <div className="flex space-x-4">
              {/* Social links left as placeholders */}
              <a href="#" className="text-black/70 hover:text-[#D4AF37] transition-all duration-300 hover:scale-110 p-2 rounded-full hover:bg-[#d4af37]/10 group" aria-label="Twitter">
                <svg className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a href="#" className="text-black/70 hover:text-[#D4AF37] transition-all duration-300 hover:scale-110 p-2 rounded-full hover:bg-[#d4af37]/10 group" aria-label="Instagram">
                <svg className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                </svg>
              </a>
              <a href="#" className="text-black/70 hover:text-[#D4AF37] transition-all duration-300 hover:scale-110 p-2 rounded-full hover:bg-[#d4af37]/10 group" aria-label="LinkedIn">
                <svg className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
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
                <Link href="/" className="text-black/80 hover:text-[#D4AF37] transition-all duration-300 hover:translate-x-1 inline-block group/item">
                  <span className="group-hover/item:bg-[#d4af37]/10 px-2 py-1 rounded transition-all duration-300">Home</span>
                </Link>
              </li>
              <li>
                <Link href="/#about" className="text-black/80 hover:text-[#D4AF37] transition-all duration-300 hover:translate-x-1 inline-block group/item">
                  <span className="group-hover/item:bg-[#d4af37]/10 px-2 py-1 rounded transition-all duration-300">About Us</span>
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-black/80 hover:text-[#D4AF37] transition-all duration-300 hover:translate-x-1 inline-block group/item">
                  <span className="group-hover/item:bg-[#d4af37]/10 px-2 py-1 rounded transition-all duration-300">Services</span>
                </Link>
              </li>
              <li>
                <Link href="/#portfolio" className="text-black/80 hover:text-[#D4AF37] transition-all duration-300 hover:translate-x-1 inline-block group/item">
                  <span className="group-hover/item:bg-[#d4af37]/10 px-2 py-1 rounded transition-all duration-300">Portfolio</span>
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-black/80 hover:text-[#D4AF37] transition-all duration-300 hover:translate-x-1 inline-block group/item">
                  <span className="group-hover/item:bg-[#d4af37]/10 px-2 py-1 rounded transition-all duration-300">Contact</span>
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
              <li><span className="text-black/80">Interior Design</span></li>
              <li><span className="text-black/80">Construction</span></li>
              <li><span className="text-black/80">Renovation</span></li>
              <li><span className="text-black/80">Consultation</span></li>
              <li><span className="text-black/80">Project Management</span></li>
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
              <span className="group-hover:text-[#D4AF37] transition-colors duration-300">©2025 Talwar Interiors | Developed by Osman</span>
            </div>

            {/* Legal Links */}
            <div className="flex space-x-6 text-sm">
              <Link href="/terms-conditions" className="text-black/80 hover:text-[#D4AF37] transition-all duration-300 hover:scale-105 group">
                <span className="group-hover:bg-[#d4af37]/10 px-2 py-1 rounded transition-all duration-300">Terms & Conditions</span>
              </Link>
              <Link href="/privacy-policy" className="text-black/80 hover:text-[#D4AF37] transition-all duration-300 hover:scale-105 group">
                <span className="group-hover:bg-[#d4af37]/10 px-2 py-1 rounded transition-all duration-300">Privacy Policy</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float-1 { 0%,100% { transform: translateY(0) rotate(0); } 50% { transform: translateY(-20px) rotate(180deg); } }
        @keyframes float-2 { 0%,100% { transform: translateY(0) rotate(0); } 50% { transform: translateY(-15px) rotate(-180deg); } }
        @keyframes float-3 { 0%,100% { transform: translateY(0) rotate(0); } 50% { transform: translateY(-25px) rotate(90deg); } }
        @keyframes float-4 { 0%,100% { transform: translateY(0) rotate(0); } 50% { transform: translateY(-18px) rotate(-90deg); } }
        @keyframes float-5 { 0%,100% { transform: translateY(0) rotate(0); } 50% { transform: translateY(-22px) rotate(180deg); } }
        @keyframes float-6 { 0%,100% { transform: translateY(0) rotate(0); } 50% { transform: translateY(-16px) rotate(-180deg); } }
        @keyframes float-7 { 0%,100% { transform: translateY(0) rotate(0); } 50% { transform: translateY(-24px) rotate(90deg); } }
        @keyframes float-8 { 0%,100% { transform: translateY(0) rotate(0); } 50% { transform: translateY(-19px) rotate(-90deg); } }
        @keyframes float-9 { 0%,100% { transform: translateY(0) rotate(0); } 50% { transform: translateY(-21px) rotate(180deg); } }
        .animate-float-1 { animation: float-1 6s ease-in-out infinite; }
        .animate-float-2 { animation: float-2 7s ease-in-out infinite; }
        .animate-float-3 { animation: float-3 8s ease-in-out infinite; }
        .animate-float-4 { animation: float-4 5s ease-in-out infinite; }
        .animate-float-5 { animation: float-5 6.5s ease-in-out infinite; }
        .animate-float-6 { animation: float-6 7.5s ease-in-out infinite; }
        .animate-float-7 { animation: float-7 8.5s ease-in-out infinite; }
        .animate-float-8 { animation: float-8 6.8s ease-in-out infinite; }
        .animate-float-9 { animation: float-9 7.2s ease-in-out infinite; }
      `}</style>
    </footer>
  );
}
