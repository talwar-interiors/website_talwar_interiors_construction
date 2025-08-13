"use client";

import { useState, useEffect } from "react";
import { Cinzel } from "next/font/google";
import Header from "../components/header";
import Footer from "../components/footer";

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

export default function PrivacyPolicy() {
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
    <div className={`min-h-screen relative overflow-hidden ${cinzel.className}`}>
      <Header />

      {/* Base background */}
      <div className="absolute inset-0 bg-white z-[-30]">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZjhmOGY4Ij48L3JlY3Q+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNkNGFmMzciPjwvcmVjdD4KPC9zdmc+')]"></div>
      </div>

      {/* Gold Animated Waves (SVG lines) */}
      <div className="pointer-events-none absolute inset-0 z-[-20]">
        <svg className="absolute h-full w-full" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1920 1080">
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

      {/* Content container */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8 flex justify-center items-center min-h-[calc(100vh-5rem)]">
        {/* Main card */}
        <div className="relative max-w-3xl w-full backdrop-blur-xl bg-white/80 border border-[#d4af37]/20 rounded-xl p-8 md:p-10 shadow-[0_0_25px_rgba(212,175,55,0.15)] animate-fade-in">
          {/* Gold accent line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-0.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />

          <div className="space-y-8">
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#b08c1d] via-[#d4af37] to-[#b08c1d]">
                  Privacy Policy
                </span>
              </h1>
              <p className="text-gray-600">
                This Privacy Policy explains how we collect, use, and protect the information you provide when using our website and services.
              </p>
            </div>

            {/* === FULL POLICY CONTENT === */}
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                At TALWAR Constructions & Interior&apos;s (&quot;we,&quot; &quot;our,&quot; &quot;us&quot;), we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and protect the information you provide when using our website and services.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4 text-[#d4af37]">1. Information We Collect</h2>
              <p>We may collect the following types of information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Personal Information:</strong> Name, email address, phone number, address, and other details you provide via our contact forms or during project discussions.
                </li>
                <li>
                  <strong>Project Information:</strong> Site location, design preferences, measurements, and related details.
                </li>
                <li>
                  <strong>Technical Information:</strong> IP address, browser type, device information, and browsing behavior on our website.
                </li>
              </ul>

              <h2 className="text-xl font-semibold mt-8 mb-4 text-[#d4af37]">2. How We Use Your Information</h2>
              <p>We use the collected information to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Respond to inquiries and provide our services.</li>
                <li>Prepare project proposals, quotations, and contracts.</li>
                <li>Improve our website and service offerings.</li>
                <li>Send important updates, service reminders, or promotional information (only if you opt in).</li>
              </ul>

              <h2 className="text-xl font-semibold mt-8 mb-4 text-[#d4af37]">3. Sharing of Information</h2>
              <p>We do not sell or rent your personal data. However, we may share it with:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Trusted partners &amp; contractors to execute your project.</li>
                <li>Legal authorities if required by law or in case of disputes.</li>
                <li>Service providers for payment processing, website hosting, or marketing (bound by confidentiality agreements).</li>
              </ul>

              <h2 className="text-xl font-semibold mt-8 mb-4 text-[#d4af37]">4. Data Security</h2>
              <p>
                We take reasonable measures to safeguard your information against unauthorized access, alteration, disclosure, or destruction.
                However, no method of transmission over the internet is 100% secure.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4 text-[#d4af37]">5. Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access and review the personal information we hold about you.</li>
                <li>Request corrections or updates to your information.</li>
                <li>Withdraw consent for marketing communications at any time.</li>
              </ul>

              <h2 className="text-xl font-semibold mt-8 mb-4 text-[#d4af37]">6. Cookies &amp; Tracking Technologies</h2>
              <p>
                Our website may use cookies to enhance your browsing experience and analyze website performance. You can disable cookies in your
                browser settings, but some features may not work properly.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4 text-[#d4af37]">7. Third-Party Links</h2>
              <p>
                Our website may contain links to other websites. We are not responsible for the privacy practices or content of those sites.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4 text-[#d4af37]">8. Updates to this Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated &quot;Last
                Updated&quot; date.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4 text-[#d4af37]">9. Contact Us</h2>
              <p>If you have any questions about this Privacy Policy or how we handle your data, please contact:</p>
              <p className="font-medium">📞 +91 9000701000</p>

              <p className="mt-8 text-sm text-gray-500 border-t border-gray-200 pt-6">
                This Privacy Policy is intended to help you understand our practices regarding your information and how we will protect it.
              </p>
            </div>
            {/* === /FULL POLICY CONTENT === */}
          </div>
        </div>
      </div>

      {/* Local keyframes (for Tailwind custom classes) */}
      <style jsx>{`
        @keyframes floatSlow {
          0% { transform: translate3d(0, 0, 0); opacity: 0.3; }
          50% { transform: translate3d(10px, -20px, 0); opacity: 0.6; }
          100% { transform: translate3d(0, 0, 0); opacity: 0.3; }
        }
        @keyframes pulseSlow {
          0%, 100% { transform: scale(1); opacity: 0.1; }
          50% { transform: scale(1.08); opacity: 0.18; }
        }
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes sparkleDrift {
          0% { transform: translateY(0) translateX(0); opacity: 0.6; }
          50% { transform: translateY(-14px) translateX(6px); opacity: 1; }
          100% { transform: translateY(0) translateX(0); opacity: 0.6; }
        }

        .animate-float-slow { animation: floatSlow var(--floatDur, 14s) ease-in-out infinite; }
        .animate-pulse-slow { animation: pulseSlow 6s ease-in-out infinite; }
        .animate-spin-slow { animation: spinSlow 60s linear infinite; }
        .animate-fade-in { animation: fadeIn 0.6s ease-out both; }

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
