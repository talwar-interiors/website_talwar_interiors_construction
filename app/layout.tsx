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
  openGraph: {
    title: "Talwar Interiors | India’s Luxury Interior Design & Construction Firm",
    description:
      "Discover Talwar Interiors — where design meets passion. Premium interiors, construction, and bespoke furniture solutions tailored for timeless living and working spaces.",
    url: "https://www.talwarinteriors.in",
    type: "website",
    siteName: "Talwar Interiors",
    images: [
      {
        url: "/assets/talwarinteriors_og.png",
        width: 1200,
        height: 630,
        alt: "Talwar Interiors – Luxury Interior Design & Construction",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@TalwarInteriors", // remove if you don't have a handle
    title: "Talwar Interiors | Luxury Interior Design & Construction in India",
    description:
      "Transforming spaces into timeless experiences — Talwar Interiors specializes in premium design, construction, and bespoke interiors across India.",
    images: ["/assets/talwarinteriors_og.png"], // ✅ use `images`, not `image`
  },
  icons: {
    icon: "/assets/favicon.png",
  },
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
