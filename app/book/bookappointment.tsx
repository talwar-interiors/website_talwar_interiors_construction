"use client";

import { useState, useEffect } from "react";
import { Cinzel } from "next/font/google";
import { createClient, SupabaseClient } from "@supabase/supabase-js";

const cinzel = Cinzel({ subsets: ["latin"], weight: ["400", "700"] });

/** ── Supabase: safe init with URL validation ───────────────────────────── */
const rawUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

function safeCreateSupabase(): SupabaseClient | null {
  try {
    if (!rawUrl || !anonKey) return null;
    // Throws if invalid, prevents "Invalid URL" crash during prerender
    const url = new URL(rawUrl).toString();
    return createClient(url, anonKey);
  } catch {
    return null;
  }
}

const supabase = safeCreateSupabase();
const envOk = !!supabase;

/** ── Types ─────────────────────────────────────────────────────────────── */
type FormData = {
  name: string;
  email: string;
  phone: string;
  date: string;   // YYYY-MM-DD from <input type="date">
  time: string;   // your select values (e.g., "morning" | "afternoon" | "evening")
  message: string;
};

type Particle = {
  left: string;
  top: string;
  size: string;
  delay: string;
  duration: string;
};

export default function BookAppointment() {
  /** ── Form + UI state ────────────────────────────────────────────────── */
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [bookingId, setBookingId] = useState<string | number | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  /** ── Background particles (unchanged) ───────────────────────────────── */
  const [particles, setParticles] = useState<Particle[]>([]);
  useEffect(() => {
    setParticles(
      Array.from({ length: 12 }, () => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: `${Math.random() * 1.5 + 0.5}rem`,
        delay: `${Math.random() * 5}s`,
        duration: `${Math.random() * 10 + 10}s`,
      }))
    );
  }, []);

  /** ── Controlled inputs (unchanged) ──────────────────────────────────── */
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  /** ── Submit: single-object insert (unchanged) ───────────────────────── */
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMsg(null);
    setBookingId(null);

    // Basic validation
    if (!formData.name || !formData.email || !formData.phone) {
      setErrorMsg("Please fill in name, email, and phone.");
      return;
    }
    if (!supabase) {
      setErrorMsg(
        "Supabase is not configured. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in your hosting environment."
      );
      return;
    }

    setIsSubmitting(true);
    try {
      const payload = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        date: formData.date || null,
        time: formData.time || null,
        message: formData.message?.trim() || null,
      };

      const { data, error } = await supabase
        .from("customer_details")
        .insert(payload)
        .select("id")
        .single();

      if (error) throw error;

      setBookingId((data as any)?.id ?? null);
      setSubmitted(true);

      setTimeout(() => {
        setSubmitted(false);
        setBookingId(null);
        setFormData({
          name: "",
          email: "",
          phone: "",
          date: "",
          time: "",
          message: "",
        });
      }, 3500);
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : typeof err === "string" ? err : JSON.stringify(err);
      setErrorMsg(message || "Something went wrong while booking.");
    } finally {
      setIsSubmitting(false);
    }
  };

  /** ── Render ─────────────────────────────────────────────────────────── */
  if (!envOk) {
    // Friendly UI guard if env vars are missing/invalid (unchanged)
    return (
      <div className="min-h-screen flex items-center justify-center p-6">
        <div className="max-w-lg w-full rounded-xl border border-yellow-300/40 bg-yellow-50 p-6 text-yellow-900">
          <h2 className="text-xl font-semibold mb-2">Configuration required</h2>
          <p className="mb-2">
            Supabase isn’t configured. Set{" "}
            <code className="mx-1 px-1 bg-yellow-100 rounded">NEXT_PUBLIC_SUPABASE_URL</code> to
            your project URL (https://…supabase.co) and{" "}
            <code className="mx-1 px-1 bg-yellow-100 rounded">NEXT_PUBLIC_SUPABASE_ANON_KEY</code>{" "}
            to your anon key in your hosting environment, then redeploy.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen relative overflow-hidden ${cinzel.className}`}>
      {/* ===== Light privacy-policy style background (only change) ===== */}
      <div className="absolute inset-0 -z-10 pp-bg">
        <div className="pp-noise" />
      </div>

      {/* Animated gold particles (unchanged) */}
      <div className="absolute inset-0 pointer-events-none z-10" suppressHydrationWarning>
        {particles.map((p, i) => (
          <div
            key={i}
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

      {/* Content (unchanged) */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#b08c1d] via-[#d4af37] to-[#b08c1d]">
              Book Your Exclusive Consultation
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Transform your space into a realm of unparalleled elegance. Our design experts await to
            bring your vision to life.
          </p>
        </div>

        <div className="max-w-3xl mx-auto relative">
          <div className="absolute -top-4 -left-4 w-20 h-20 border border-[#d4af37]/30 rounded-tl-2xl"></div>
          <div className="absolute -bottom-4 -right-4 w-20 h-20 border border-[#d4af37]/30 rounded-br-2xl"></div>

          <div className="relative backdrop-blur-xl bg-white/90 border border-[#d4af37]/20 rounded-xl p-8 md:p-10 shadow-[0_0_25px_rgba(212,175,55,0.15)]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-0.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"></div>

            {submitted ? (
              <div className="text-center py-16">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#d4af37]/20 mb-6">
                  <svg className="w-8 h-8 text-[#d4af37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Appointment Request Received</h3>
                {bookingId && (
                  <p className="text-gray-700 font-medium mb-1">
                    Your booking ID: <span className="text-[#b08c1d]">{bookingId}</span>
                  </p>
                )}
                <p className="text-gray-600">We will contact you shortly to confirm your exclusive consultation.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Error message */}
                {errorMsg && (
                  <div className="rounded-md bg-red-50 border border-red-200 text-red-700 px-4 py-3">
                    {errorMsg}
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-medium text-[#d4af37]">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-gray-50 border border-[#d4af37]/30 focus:border-[#d4af37] text-gray-800 rounded-lg px-4 py-3 outline-none transition-colors duration-200 placeholder-gray-400"
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium text-[#d4af37]">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-gray-50 border border-[#d4af37]/30 focus:border-[#d4af37] text-gray-800 rounded-lg px-4 py-3 outline-none transition-colors duration-200 placeholder-gray-400"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-sm font-medium text-[#d4af37]">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-gray-50 border border-[#d4af37]/30 focus:border-[#d4af37] text-gray-800 rounded-lg px-4 py-3 outline-none transition-colors duration-200 placeholder-gray-400"
                      placeholder="Your phone number"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="date" className="block text-sm font-medium text-[#d4af37]">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full bg-gray-50 border border-[#d4af37]/30 focus:border-[#d4af37] text-gray-800 rounded-lg px-4 py-3 outline-none transition-colors duration-200"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="time" className="block text-sm font-medium text-[#d4af37]">
                      Preferred Time
                    </label>
                    <select
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full bg-gray-50 border border-[#d4af37]/30 focus:border-[#d4af37] text-gray-800 rounded-lg px-4 py-3 outline-none transition-colors duration-200"
                      required
                    >
                      <option value="" disabled>
                        Select a time
                      </option>
                      <option value="morning">Morning (9AM - 12PM)</option>
                      <option value="afternoon">Afternoon (12PM - 4PM)</option>
                      <option value="evening">Evening (4PM - 7PM)</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium text-[#d4af37]">
                    Your Vision
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border border-[#d4af37]/30 focus:border-[#d4af37] text-gray-800 rounded-lg px-4 py-3 outline-none transition-colors duration-200 placeholder-gray-400"
                    placeholder="Tell us about your dream space..."
                  />
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full relative overflow-hidden group bg-gradient-to-r from-[#b08c1d] via-[#d4af37] to-[#b08c1d] text-white rounded-lg px-6 py-4 font-semibold text-lg transition-all duration-300 hover:shadow-[0_0_15px_rgba(212,175,55,0.5)] disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    <span className="absolute top-0 left-0 w-full h-full bg-white/20 transform -skew-x-12 -translate-x-full transition-transform duration-700 ease-in-out group-hover:translate-x-full" />
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Processing
                      </span>
                    ) : (
                      <span>Book Your Exclusive Consultation</span>
                    )}
                  </button>
                </div>
              </form>
            )}

            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/3 h-0.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"></div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-4 text-lg">
            Prefer to speak directly with our design consultants?
          </p>
          <div className="inline-flex items-center justify-center space-x-2 text-[#d4af37]">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
            </svg>
            <span className="text-lg">+91 90007 01000</span>
          </div>
        </div>
      </div>

      {/* Tailwind keyframes + light PP background styles */}
      <style jsx global>{`
        @keyframes float-slow {
          0% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-10px) translateX(5px); }
          100% { transform: translateY(0) translateX(0); }
        }
        .animate-float-slow { animation: float-slow var(--dur, 12s) ease-in-out infinite; }

        /* Light "privacy policy" background: warm ivory with subtle gold tint */
        .pp-bg {
          background:
            radial-gradient(120% 80% at 50% -10%, rgba(212, 175, 55, 0.10), transparent 55%),
            radial-gradient(120% 80% at 50% 110%, rgba(212, 175, 55, 0.08), transparent 55%),
            linear-gradient(180deg, #fffdf7 0%, #fffaf0 60%, #fff9ea 100%);
        }
        .pp-noise {
          position: absolute;
          inset: 0;
          opacity: 0.06;
          mix-blend-mode: multiply;
          background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGZpbHRlciBpZD0iYSIgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuOTUiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIGZpbHRlcj0idXJsKCNhKSIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg==");
        }
      `}</style>
    </div>
  );
}
