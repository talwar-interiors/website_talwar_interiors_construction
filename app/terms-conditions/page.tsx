import type { Metadata } from "next";
import { Cinzel } from "next/font/google";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import BackgroundEffects from "./BackgroundEffects";

const cinzel = Cinzel({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Terms & Conditions | Talwar Interiors & Construction",
  description:
    "Read the terms and conditions for using Talwar Interiors & Construction services. Understand our policies on services, payments, intellectual property, and liability.",
  keywords: [
    "terms and conditions",
    "service agreement",
    "Talwar Interiors terms",
    "interior design contract",
    "construction terms",
  ],
  openGraph: {
    title: "Terms & Conditions | Talwar Interiors",
    description: "Terms and conditions for our interior design and construction services.",
    images: ["/assets/talwarinteriors_og.png"],
  },
};

export default function TermsConditions() {
  return (
    <div className={`min-h-screen relative overflow-hidden ${cinzel.className}`}>
      <Header />
      <BackgroundEffects />

      <div className="relative z-20 max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8 flex justify-center items-center min-h-[calc(100vh-5rem)]">
        <div className="relative max-w-3xl w-full backdrop-blur-xl bg-white/80 border border-[#d4af37]/20 rounded-xl p-8 md:p-10 shadow-[0_0_25px_rgba(212,175,55,0.15)] animate-fade-in">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-0.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />

          <div className="space-y-8">
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#b08c1d] via-[#d4af37] to-[#b08c1d]">
                  Terms &amp; Conditions
                </span>
              </h1>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                Welcome to the official website of TALWAR Constructions &amp; Interior&apos;s (&quot;we,&quot; &quot;our,&quot; &quot;us&quot;). By accessing or using our website and services, you agree to comply with and be bound by the following Terms &amp; Conditions.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4 text-[#d4af37]">1. General Information</h2>
              <p>TALWAR Constructions &amp; Interior&apos;s is a full-scale construction and interior design company specializing in property development, civil contracting, residential &amp; commercial interiors, and custom furniture solutions.</p>

              <h2 className="text-xl font-semibold mt-8 mb-4 text-[#d4af37]">2. Acceptance of Terms</h2>
              <p>By using our website, you confirm that you have read, understood, and agree to these Terms &amp; Conditions. If you do not agree, you should discontinue use immediately.</p>

              <h2 className="text-xl font-semibold mt-8 mb-4 text-[#d4af37]">3. Scope of Services</h2>
              <p>Our services include but are not limited to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Property development &amp; civil contracting</li>
                <li>Residential, commercial, and industrial construction</li>
                <li>Interior and exterior design solutions</li>
                <li>Furniture, fabric, and accessories selection</li>
                <li>Lighting, false ceiling, and space planning solutions</li>
              </ul>

              <h2 className="text-xl font-semibold mt-8 mb-4 text-[#d4af37]">4. Intellectual Property Rights</h2>
              <p>All designs, concepts, text, graphics, images, logos, and other materials displayed on this website are the exclusive property of TALWAR Constructions &amp; Interior&apos;s unless otherwise stated.</p>

              <h2 className="text-xl font-semibold mt-8 mb-4 text-[#d4af37]">5. Project Estimates &amp; Payments</h2>
              <p>Any quotations or cost estimates provided by us are valid for a limited time and subject to change without notice. Payment terms will be outlined in the individual project contract.</p>

              <h2 className="text-xl font-semibold mt-8 mb-4 text-[#d4af37]">6. Client Responsibilities</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide accurate project details, measurements, and requirements.</li>
                <li>Approve designs, layouts, and selections in a timely manner.</li>
                <li>Ensure site accessibility for our team and suppliers.</li>
              </ul>

              <h2 className="text-xl font-semibold mt-8 mb-4 text-[#d4af37]">7. Limitation of Liability</h2>
              <p>TALWAR Constructions &amp; Interior&apos;s will not be held liable for delays caused by third-party vendors, natural calamities, or any indirect losses.</p>

              <h2 className="text-xl font-semibold mt-8 mb-4 text-[#d4af37]">8. Modifications to Terms</h2>
              <p>We reserve the right to update or change these Terms &amp; Conditions at any time without prior notice.</p>

              <h2 className="text-xl font-semibold mt-8 mb-4 text-[#d4af37]">9. Governing Law</h2>
              <p>These Terms &amp; Conditions shall be governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Hyderabad, Telangana.</p>

              <h2 className="text-xl font-semibold mt-8 mb-4 text-[#d4af37]">10. Contact Us</h2>
              <p>📞 +91 9000701000</p>

              <p className="mt-8 text-sm text-gray-500 border-t border-gray-200 pt-6"></p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
