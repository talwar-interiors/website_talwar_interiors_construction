"use client";

import { useState, useEffect } from "react";
import { Cinzel } from "next/font/google";

const cinzel = Cinzel({ subsets: ["latin"], weight: ["400", "700"] });

// Define types
type FormData = {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
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
  // Form state
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    message: "",
  });

  // Form submission state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Floating particles for ethereal effect
  const [particles, setParticles] = useState<Particle[]>([]);
  
  // Generate particles only on the client side to avoid hydration mismatch
  useEffect(() => {
    setParticles(Array.from({ length: 12 }, (): Particle => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: `${Math.random() * 1.5 + 0.5}rem`,
      delay: `${Math.random() * 5}s`,
      duration: `${Math.random() * 10 + 10}s`,
    })));
  }, []);

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      // Reset form after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          date: "",
          time: "",
          message: "",
        });
      }, 3000);
    }, 1500);
  };

  return (
    <div className={`min-h-screen relative overflow-hidden ${cinzel.className}`}>
<div className="absolute inset-0 pointer-events-none z-10" suppressHydrationWarning={true}>
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
</div>      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-white z-0">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZjhmOGY4Ij48L3JlY3Q+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNkNGFmMzciPjwvcmVjdD4KPC9zdmc+')]"></div>
      </div>

      {/* Animated gold particles */}
      <div className="absolute inset-0 pointer-events-none z-10">
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
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-[#d4af37] opacity-10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-1/4 -right-20 w-60 h-60 bg-[#d4af37] opacity-10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-20 left-1/3 w-80 h-80 bg-[#d4af37] opacity-10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Content container */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#b08c1d] via-[#d4af37] to-[#b08c1d]">Book Your Exclusive Consultation</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Transform your space into a realm of unparalleled elegance. Our design experts await to bring your vision to life.
          </p>
        </div>

        {/* Form card with glass morphism effect */}
        <div className="max-w-3xl mx-auto relative">
          {/* Card decorative elements */}
          <div className="absolute -top-4 -left-4 w-20 h-20 border border-[#d4af37]/30 rounded-tl-2xl"></div>
          <div className="absolute -bottom-4 -right-4 w-20 h-20 border border-[#d4af37]/30 rounded-br-2xl"></div>
          
          {/* Main card */}
          <div className="relative backdrop-blur-xl bg-white/90 border border-[#d4af37]/20 rounded-xl p-8 md:p-10 shadow-[0_0_25px_rgba(212,175,55,0.15)]">
            {/* Gold accent line */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-0.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"></div>
            
            {submitted ? (
              <div className="text-center py-16">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#d4af37]/20 mb-6">
                  <svg className="w-8 h-8 text-[#d4af37]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Appointment Request Received</h3>
                <p className="text-gray-600">We will contact you shortly to confirm your exclusive consultation.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name field */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-medium text-[#d4af37]">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-gray-50 border border-[#d4af37]/30 focus:border-[#d4af37] text-gray-800 rounded-lg px-4 py-3 outline-none transition-colors duration-200 placeholder-gray-400"
                      placeholder="Your name"
                    />
                  </div>
                  
                  {/* Email field */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium text-[#d4af37]">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-gray-50 border border-[#d4af37]/30 focus:border-[#d4af37] text-gray-800 rounded-lg px-4 py-3 outline-none transition-colors duration-200 placeholder-gray-400"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  {/* Phone field */}
                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-sm font-medium text-[#d4af37]">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-gray-50 border border-[#d4af37]/30 focus:border-[#d4af37] text-gray-800 rounded-lg px-4 py-3 outline-none transition-colors duration-200 placeholder-gray-400"
                      placeholder="Your phone number"
                    />
                  </div>
                  
                  {/* Date field */}
                  <div className="space-y-2">
                    <label htmlFor="date" className="block text-sm font-medium text-[#d4af37]">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      required
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full bg-gray-50 border border-[#d4af37]/30 focus:border-[#d4af37] text-gray-800 rounded-lg px-4 py-3 outline-none transition-colors duration-200"
                    />
                  </div>
                  
                  {/* Time field */}
                  <div className="space-y-2">
                    <label htmlFor="time" className="block text-sm font-medium text-[#d4af37]">
                      Preferred Time
                    </label>
                    <select
                      id="time"
                      name="time"
                      required
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full bg-gray-50 border border-[#d4af37]/30 focus:border-[#d4af37] text-gray-800 rounded-lg px-4 py-3 outline-none transition-colors duration-200"
                    >
                      <option value="" disabled>Select a time</option>
                      <option value="morning">Morning (9AM - 12PM)</option>
                      <option value="afternoon">Afternoon (12PM - 4PM)</option>
                      <option value="evening">Evening (4PM - 7PM)</option>
                    </select>
                  </div>
                </div>
                
                {/* Message field */}
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
                  ></textarea>
                </div>
                
                {/* Submit button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full relative overflow-hidden group bg-gradient-to-r from-[#b08c1d] via-[#d4af37] to-[#b08c1d] text-white rounded-lg px-6 py-4 font-semibold text-lg transition-all duration-300 hover:shadow-[0_0_15px_rgba(212,175,55,0.5)] disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {/* Button shine effect */}
                    <span className="absolute top-0 left-0 w-full h-full bg-white/20 transform -skew-x-12 -translate-x-full transition-transform duration-700 ease-in-out group-hover:translate-x-full"></span>
                    
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
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
            
            {/* Gold accent line */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/3 h-0.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"></div>
          </div>
        </div>
        
        {/* Additional information */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-4 text-lg">Prefer to speak directly with our design consultants?</p>
          <div className="inline-flex items-center justify-center space-x-2 text-[#d4af37]">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
            </svg>
            <span className="text-lg">+91 90007 01000</span>
          </div>
        </div>
      </div>
    </div>
  );
}