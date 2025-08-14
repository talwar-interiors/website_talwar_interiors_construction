"use client";

import Image from "next/image";
import { Cinzel } from "next/font/google";
import React from "react";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export default function ContactButtons() {
  // 💧 Stone-in-water ripple: concentric rings from the click point
  const handlePointerDown = (e: React.PointerEvent<HTMLAnchorElement>) => {
    const btn = e.currentTarget;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Find farthest corner so the ripple fully reaches edges
    const maxX = Math.max(x, rect.width - x);
    const maxY = Math.max(y, rect.height - y);
    const maxRadius = Math.sqrt(maxX * maxX + maxY * maxY);
    const diameter = maxRadius * 2;

    // Remove any existing ripple first
    btn.querySelector(".ripple")?.remove();

    // Create a centered ripple container at the click point
    const container = document.createElement("span");
    container.className = "ripple";
    container.style.left = `${x}px`;
    container.style.top = `${y}px`;
    container.style.width = `${diameter}px`;
    container.style.height = `${diameter}px`;
    container.style.marginLeft = `${-diameter / 2}px`;
    container.style.marginTop = `${-diameter / 2}px`;

    // Create 3 concentric rings with staggered delays
    for (let i = 0; i < 3; i++) {
      const ring = document.createElement("span");
      ring.className = "ripple-ring";
      ring.style.animationDelay = `${i * 120}ms`;
      container.appendChild(ring);
    }

    btn.appendChild(container);
    // Clean up after the last ring finishes
    container.addEventListener("animationend", () => container.remove());
  };

  return (
    <>
      <div className="contact-stack" role="group" aria-label="Contact actions">
        {/* WhatsApp */}
        <a
          href="https://wa.me/919000701000"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          title="Chat on WhatsApp"
          className="contact-button whatsapp-button"
          onPointerDown={handlePointerDown}
        >
          <div className="button-content">
            <Image
              src="/assets/whatsapp.png" // change to "/whatsapp.png" if not in /public/assets
              alt=""
              width={32}
              height={32}
              className="contact-icon"
              sizes="32px"
              priority
            />
            <span className={`button-text ${cinzel.className}`}>Chat with us</span>
          </div>
        </a>

        {/* Phone */}
        <a
          href="tel:+919000701000"
          aria-label="Call us"
          title="Call us"
          className="contact-button phone-button"
          onPointerDown={handlePointerDown}
        >
          <div className="button-content">
            <Image
              src="/assets/telephone.png" // change to "/telephone.png" if not in /public/assets
              alt=""
              width={32}
              height={32}
              className="contact-icon"
              sizes="32px"
              priority
            />
            <span className={`button-text ${cinzel.className}`}>Call us</span>
          </div>
        </a>
      </div>

      <style jsx global>{`
        :root { --brand-gold: #d4af37; }

        /* 📍 Middle-right stack */
        .contact-stack {
          position: fixed;
          top: 50%;
          right: 16px;
          transform: translateY(-50%);
          display: flex;
          flex-direction: column;
          gap: 14px;
          z-index: 1000;
          pointer-events: none;
          align-items: flex-end;   /* keep siblings from stretching */
        }

        .contact-button {
          position: relative;
          background: rgba(255, 255, 255, 0.92);
          -webkit-backdrop-filter: blur(8px);
          backdrop-filter: blur(8px);
          border: 2px solid var(--brand-gold);
          border-radius: 999px;
          padding: 10px;           /* icon-only by default */
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          min-height: 48px;
          transform: translateZ(0);
          overflow: hidden;        /* for ripple + shine */
          transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease, padding 0.25s ease;
          animation:
            floaty 4.5s ease-in-out infinite,
            goldPulse 3.8s ease-in-out infinite;
          box-shadow: 0 6px 18px rgba(212, 175, 55, 0.18);

          width: max-content;      /* each button hugs its own content */
          box-sizing: border-box;
          pointer-events: auto;    /* container is none; child clickable */
        }

        .button-content {
          display: inline-flex;
          align-items: center;
          gap: 0; /* no space when icon-only */
        }

        .contact-icon {
          display: block;
          width: 32px;
          height: 32px;
          flex-shrink: 0;
          transition: transform 0.25s ease;
        }

        /* Icon-only default: label takes zero space */
        .button-text {
          margin-left: 0;
          max-width: 0;
          opacity: 0;
          transform: translateX(-6px);
          overflow: hidden;
          white-space: nowrap;

          font-weight: 700;
          font-size: 14px;
          letter-spacing: 0.2px;
          background-image: linear-gradient(90deg, var(--brand-gold), #f1d67a, var(--brand-gold));
          background-size: 200% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;

          transition:
            max-width 0.3s ease,
            opacity 0.25s ease,
            transform 0.25s ease,
            margin-left 0.25s ease,
            background-position 0.6s ease;
        }

        /* Hover/focus: reveal label + effects */
        .contact-button:hover,
        .contact-button:focus-visible {
          padding: 10px 14px; /* add room for the label */
          transform: translateY(-3px) scale(1.03);
          box-shadow: 0 10px 28px rgba(212, 175, 55, 0.35);
          outline: none;
        }
        .contact-button:hover .contact-icon,
        .contact-button:focus-visible .contact-icon {
          transform: translateY(-1px) scale(1.05);
        }
        .contact-button:hover .button-text,
        .contact-button:focus-visible .button-text {
          margin-left: 8px;
          max-width: 160px;
          opacity: 1;
          transform: translateX(0);
          background-position: 100% 0; /* shimmer sweep */
        }

        /* ✨ Glossy shine sweep on hover */
        .contact-button::after {
          content: "";
          position: absolute;
          top: -120%;
          left: -60%;
          width: 50%;
          height: 320%;
          transform: translateX(-120%) skewX(-15deg);
          background: linear-gradient(
            60deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.45) 45%,
            rgba(255, 255, 255, 0) 100%
          );
          opacity: 0;
          pointer-events: none;
        }
        .contact-button:hover::after,
        .contact-button:focus-visible::after {
          animation: shine 0.85s ease-out forwards;
        }

        /* 💧 Water ripple (concentric rings) */
        .ripple {
          position: absolute;
          pointer-events: none;
          border-radius: 50%;
          left: 0;
          top: 0;
          /* size & position are set inline from JS */
        }
        .ripple-ring {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 100%;
          height: 100%;
          transform: translate(-50%, -50%) scale(0.2);
          border-radius: 9999px;
          box-sizing: border-box;
          border: 2px solid rgba(212, 175, 55, 0.6);
          opacity: 0.7;
          will-change: transform, opacity;
          animation: ripple-ring 820ms ease-out forwards;
          filter: drop-shadow(0 0 4px rgba(212, 175, 55, 0.35));
        }
        @keyframes ripple-ring {
          0%   { transform: translate(-50%, -50%) scale(0.2); opacity: 0.7; }
          70%  { opacity: 0.35; }
          100% { transform: translate(-50%, -50%) scale(1); opacity: 0; }
        }

        /* 🎞️ Other keyframes */
        @keyframes floaty {
          0%   { transform: translateY(0); }
          50%  { transform: translateY(-3px); }
          100% { transform: translateY(0); }
        }
        @keyframes goldPulse {
          0%   { box-shadow: 0 6px 18px rgba(212, 175, 55, 0.18); }
          50%  { box-shadow: 0 10px 26px rgba(212, 175, 55, 0.35); }
          100% { box-shadow: 0 6px 18px rgba(212, 175, 55, 0.18); }
        }
        @keyframes shine {
          from { opacity: 0; }
          20%  { opacity: 1; }
          to   { transform: translateX(280%) skewX(-15deg); opacity: 0; }
        }

        /* 📱 Mobile: icon-only (no hover), compact paddings */
        @media (max-width: 480px) {
          .contact-stack { right: max(8px, env(safe-area-inset-right)); gap: 10px; }
          .contact-button { padding: 10px; min-height: 48px; }
          .button-text { display: none; }
        }

        /* ♿ Reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .contact-button { animation: none; transition: none; }
          .contact-button::after { display: none; }
          .button-text { transition: none; }
        }

        /* cleanup old rules */
        .whatsapp-button, .phone-button { bottom: auto; left: auto; }
      `}</style>
    </>
  );
}
