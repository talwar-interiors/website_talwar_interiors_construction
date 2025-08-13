"use client";

import Link from "next/link";

export default function WhatsAppSticky() {
  return (
    <>
      <Link
        href="https://wa.me/919000701000"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="whatsapp-sticky"
      >
        <svg
          width={36}
          height={36}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="whatsapp-icon"
        >
          <circle cx="24" cy="24" r="24" fill="#25D366" />
          <path
            d="M34.6 29.7c-.5-.2-2.8-1.4-3.2-1.6-.4-.2-.7-.2-1 .2-.3.4-1.1 1.6-1.4 1.9-.3.3-.5.4-1 .1-2.7-1.3-4.5-2.3-6.3-5.2-.5-.8.5-.7 1.4-2.3.2-.3.1-.6 0-.8-.1-.2-1-2.4-1.4-3.3-.4-.9-.7-.8-1-.8-.3 0-.6 0-.9 0-.3 0-.8.1-1.2.6-.4.5-1.6 1.6-1.6 3.9 0 2.3 1.7 4.5 2 4.8.2.3 3.3 5.2 8.1 7.1 1.1.5 2 .8 2.7 1 .6.2 1.2.2 1.6.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2-.1-.1-.5-.2-1-.4z"
            fill="#fff"
          />
        </svg>
      </Link>
      <style jsx global>{`
        .whatsapp-sticky {
          position: fixed;
          bottom: 24px;
          right: 24px;
          z-index: 100;
          background: none;
          border: none;
          outline: none;
          cursor: pointer;
          box-shadow: 0 4px 16px rgba(37, 211, 102, 0.18);
          border-radius: 50%;
          transition: transform 0.15s, box-shadow 0.15s;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .whatsapp-sticky:hover {
          transform: scale(1.08) translateY(-2px);
          box-shadow: 0 8px 24px rgba(37, 211, 102, 0.28);
        }
        .whatsapp-icon {
          display: block;
        }
        @media (max-width: 600px) {
          .whatsapp-sticky {
            bottom: 16px;
            right: 16px;
          }
        }
      `}</style>
    </>
  );
}
