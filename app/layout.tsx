import Script from "next/script";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ContactButtons from "@/components/contactbuttons";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.talwarinteriors.in"),
  applicationName: "Talwar Interiors",
  title: "Talwar Interiors | Luxury Interior Design & Construction in India",
  description:
    "Talwar Interiors crafts timeless, elegant, and functional spaces across homes, offices, and commercial projects. From concept-to-execution interior design to construction, furniture, lighting, and bespoke décor — we redefine modern luxury in India.",
  keywords: [
    "Talwar Interiors",
    "luxury interior design India",
    "home interiors",
    "office interiors",
    "residential construction",
    "commercial construction",
    "furniture design",
    "modular kitchen",
    "false ceiling",
    "lighting solutions",
    "space planning",
    "Hyderabad",
    "Pune",
    "Delhi",
    "Bangalore",
  ],
  authors: [{ name: "Talwar Interiors", url: "https://www.talwarinteriors.in" }],
  creator: "Talwar Interiors",
  publisher: "Talwar Interiors",
  referrer: "origin-when-cross-origin",
  themeColor: "#D4AF37",
  formatDetection: { email: false, address: false, telephone: true },
  category: "Home & Garden",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://www.talwarinteriors.in",
    languages: {
      "en-IN": "https://www.talwarinteriors.in",
    },
  },
  verification: {
    google: "/* your-google-site-verification-code */",
    yandex: "/* optional */",
  },
  openGraph: {
    title: "Talwar Interiors | India’s Luxury Interior Design & Construction Firm",
    description:
      "Discover Talwar Interiors — where design meets passion. Premium interiors, construction, and bespoke furniture solutions tailored for timeless living and working spaces.",
    url: "https://www.talwarinteriors.in",
    siteName: "Talwar Interiors",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/assets/talwarinteriors_og.png",
        width: 1200,
        height: 630,
        alt: "Talwar Interiors – Luxury Interior Design & Construction",
      },
      {
        url: "/assets/talwar_nobg.png",
        width: 1200,
        height: 1200,
        alt: "Talwar Interiors Gold Mark",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@TalwarInteriors",
    title: "Talwar Interiors | Luxury Interior Design & Construction in India",
    description:
      "Transforming spaces into timeless experiences — Talwar Interiors specializes in premium design, construction, and bespoke interiors across India.",
    images: ["/assets/talwarinteriors_og.png"],
  },
  icons: {
    icon: [
      { url: "/assets/favicon.png" },
      { url: "/assets/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/assets/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/assets/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: ["/assets/favicon.png"],
    other: [
      { rel: "mask-icon", url: "/assets/safari-pinned-tab.svg", color: "#D4AF37" },
    ],
  },
  manifest: "/site.webmanifest",
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* JSON-LD Structured Data (Organization) */}
        <Script id="ti-org-jsonld" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Talwar Interiors",
            url: "https://www.talwarinteriors.in",
            logo: "https://www.talwarinteriors.in/assets/talwarinteriors_logo.png",
            sameAs: [
              "https://www.instagram.com/talwarinteriors",
              "https://www.facebook.com/talwarinteriors",
              "https://www.linkedin.com/company/talwarinteriors",
            ],
            description:
              "Talwar Interiors is a premier design and construction firm in India, delivering bespoke interior and exterior solutions including residential projects, commercial builds, furniture, lighting, and space planning.",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Available in Hyderabad, Pune, Delhi, and Bangalore",
              addressCountry: "IN",
            },
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "Customer Service",
              email: "info@talwarinteriors.in",
              telephone: "+91-9000701000",
            },
          })}
        </Script>

        {/* (Optional) If you still want a favicon link explicitly */}
        <link rel="icon" type="image/png" href="/assets/favicon.png" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Chatbase bubble */}
        <Script id="chatbase-init" strategy="afterInteractive">
          {`(function(){if(!window.chatbase||window.chatbase("getState")!=="initialized"){window.chatbase=(...arguments)=>{if(!window.chatbase.q){window.chatbase.q=[]}window.chatbase.q.push(arguments)};window.chatbase=new Proxy(window.chatbase,{get(target,prop){if(prop==="q"){return target.q}return(...args)=>target(prop,...args)}})}const onLoad=function(){const script=document.createElement("script");script.src="https://www.chatbase.co/embed.min.js";script.id="BTV3XIDKeMoypQEUMwUQg";script.domain="www.chatbase.co";document.body.appendChild(script)};if(document.readyState==="complete"){onLoad()}else{window.addEventListener("load",onLoad)}})();`}
        </Script>

        <SpeedInsights />
        {children}
        <ContactButtons />
      </body>
    </html>
  );
}
