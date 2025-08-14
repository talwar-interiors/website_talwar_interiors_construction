"use client";

import Image from "next/image";

export default function ContactButtons() {
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
        >
          <div className="button-content">
            <Image
              src="/assets/whatsapp.png"        // ← if in /public/assets, use "/assets/whatsapp.png"
              alt=""
              width={32}
              height={32}
              className="contact-icon"
              sizes="32px"
              priority
            />
            <span className="button-text">Chat with us</span>
          </div>
        </a>

        {/* Phone */}
        <a
          href="tel:+919000701000"
          aria-label="Call us"
          title="Call us"
          className="contact-button phone-button"
        >
          <div className="button-content">
            <Image
              src="/assets/telephone.png"       // ← if in /public/assets, use "/assets/telephone.png"
              alt=""
              width={32}
              height={32}
              className="contact-icon"
              sizes="32px"
              priority
            />
            <span className="button-text">Call us</span>
          </div>
        </a>
      </div>

      <style jsx global>{`
        :root { --brand-gold: #d4af37; }

        /* 📍 Middle-right, stacked vertically */
        .contact-stack {
          position: fixed;
          top: 50%;
          right: 16px; /* right side */
          transform: translateY(-50%);
          display: flex;
          flex-direction: column; /* one below another */
          gap: 12px;
          z-index: 1000;
          pointer-events: none; /* container doesn't block clicks beneath */
        }
        .contact-button { pointer-events: auto; } /* but buttons are clickable */

        .contact-button {
          background: rgba(255, 255, 255, 0.9);
          -webkit-backdrop-filter: blur(8px);
          backdrop-filter: blur(8px);
          border: 2px solid var(--brand-gold);
          border-radius: 24px;
          padding: 10px 14px;
          cursor: pointer;
          box-shadow: 0 4px 16px rgba(212, 175, 55, 0.2);
          transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
          animation: pulse 2s infinite;
          min-height: 48px; /* touch-friendly */
          display: inline-flex;
          align-items: center;
        }

        .button-content { display: flex; align-items: center; gap: 8px; }
        .contact-icon { display: block; }
        .button-text { color: var(--brand-gold); font-weight: 600; font-size: 14px; }

        .contact-button:hover,
        .contact-button:focus-visible {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(212, 175, 55, 0.3);
          background: rgba(255, 255, 255, 0.96);
          outline: none;
        }

        @keyframes pulse {
          0% { box-shadow: 0 4px 16px rgba(212, 175, 55, 0.2); }
          50% { box-shadow: 0 4px 24px rgba(212, 175, 55, 0.4); }
          100% { box-shadow: 0 4px 16px rgba(212, 175, 55, 0.2); }
        }

        /* 📱 Mobile tweaks: keep right, tighter padding, hide labels if cramped */
        @media (max-width: 480px) {
          .contact-stack { right: max(8px, env(safe-area-inset-right)); gap: 10px; }
          .contact-button { padding: 8px 10px; }
          .button-text { display: none; } /* icon-only on small screens */
        }

        /* Ensure no legacy bottom/left rules override this */
        .whatsapp-button, .phone-button { bottom: auto; left: auto; }
      `}</style>
    </>
  );
}
