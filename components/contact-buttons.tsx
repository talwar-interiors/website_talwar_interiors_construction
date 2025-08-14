"use client";

import Link from "next/link";

export default function ContactButtons() {
  return (
    <>
      {/* WhatsApp Button */}
      <Link
        href="https://wa.me/919000701000"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="contact-button whatsapp-button"
      >
        <div className="button-content">
          <svg
            width={32}
            height={32}
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="contact-icon"
          >
            <circle cx="24" cy="24" r="24" fill="#25D366" />
            <path
              d="M34.6 29.7c-.5-.2-2.8-1.4-3.2-1.6-.4-.2-.7-.2-1 .2-.3.4-1.1 1.6-1.4 1.9-.3.3-.5.4-1 .1-2.7-1.3-4.5-2.3-6.3-5.2-.5-.8.5-.7 1.4-2.3.2-.3.1-.6 0-.8-.1-.2-1-2.4-1.4-3.3-.4-.9-.7-.8-1-.8-.3 0-.6 0-.9 0-.3 0-.8.1-1.2.6-.4.5-1.6 1.6-1.6 3.9 0 2.3 1.7 4.5 2 4.8.2.3 3.3 5.2 8.1 7.1 1.1.5 2 .8 2.7 1 .6.2 1.2.2 1.6.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2-.1-.1-.5-.2-1-.4z"
              fill="#fff"
            />
          </svg>
          <span className="button-text">Chat with us</span>
        </div>
      </Link>

      {/* Phone Button */}
      <Link
        href="tel:+919000701000"
        aria-label="Call us"
        className="contact-button phone-button"
      >
        <div className="button-content">
          <svg
            width={32}
            height={32}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="contact-icon"
          >
            <path
              d="M22 12A10 10 0 0 1 12 22M22 12A10 10 0 0 0 12 2M22 12h-4M12 22A10 10 0 0 1 2 12M12 22v-4M2 12A10 10 0 0 1 12 2M2 12h4M12 2v4"
              stroke="#D4AF37"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.5 14.5c-1.5 1.26-3.5 1.26-5 0-.97-.82-1.5-1.95-1.5-3.12V7.62c0-.42.28-.79.67-.92l4.5-1.5c.22-.07.45-.07.67 0l4.5 1.5c.39.13.67.5.67.92v3.76c0 1.17-.53 2.3-1.5 3.12"
              stroke="#D4AF37"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="button-text">Call us</span>
        </div>
      </Link>

      <style jsx global>{`
        .contact-button {
          position: fixed;
          z-index: 100;
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(8px);
          border: 2px solid #D4AF37;
          border-radius: 24px;
          padding: 8px 16px;
          cursor: pointer;
          box-shadow: 0 4px 16px rgba(212, 175, 55, 0.2);
          transition: all 0.3s ease;
          animation: pulse 2s infinite;
        }

        .whatsapp-button {
          bottom: 24px;
          right: 24px;
        }

        .phone-button {
          bottom: 24px;
          right: 180px;
        }

        .button-content {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .contact-icon {
          transition: transform 0.3s ease;
        }

        .button-text {
          color: #D4AF37;
          font-weight: 500;
          font-size: 14px;
          opacity: 0;
          transform: translateX(-10px);
          transition: all 0.3s ease;
        }

        .contact-button:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgba(212, 175, 55, 0.3);
          background: rgba(255, 255, 255, 0.95);
        }

        .contact-button:hover .contact-icon {
          transform: scale(1.1);
        }

        .contact-button:hover .button-text {
          opacity: 1;
          transform: translateX(0);
        }

        @keyframes pulse {
          0% {
            box-shadow: 0 4px 16px rgba(212, 175, 55, 0.2);
          }
          50% {
            box-shadow: 0 4px 24px rgba(212, 175, 55, 0.4);
          }
          100% {
            box-shadow: 0 4px 16px rgba(212, 175, 55, 0.2);
          }
        }

        @media (max-width: 768px) {
          .phone-button {
            right: 140px;
          }
          .contact-button {
            padding: 8px 12px;
          }
        }

        @media (max-width: 480px) {
          .phone-button {
            bottom: 80px;
            right: 24px;
          }
          .contact-button {
            padding: 6px 10px;
          }
        }
      `}</style>
    </>
  );
}