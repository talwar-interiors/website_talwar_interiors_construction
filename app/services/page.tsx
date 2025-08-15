// app/services/page.tsx
import Link from "next/link";
import Image from "next/image";
import { Cinzel } from "next/font/google";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

const cinzel = Cinzel({ subsets: ["latin"], weight: ["400", "700"] });

type Service = {
  id: string;
  title: string;
  blurb: string;
  points: string[];
  image: string;
};

const services: Service[] = [
  {
    id: "property-development-civil-contracting",
    title: "Property Development & Civil Contracting",
    blurb:
      "End-to-end civil works with quality control, statutory compliance, and on-site supervision.",
    points: [
      "Structural planning & BOQs",
      "Vendor & contractor management",
      "Site safety & compliance",
      "Quality audits & handover",
    ],
    image: "/assets/talwar_nobg.png",
  },
  {
    id: "residential-commercial-construction",
    title: "Residential & Commercial Construction",
    blurb:
      "Turnkey builds for homes, offices, and retail—delivered on schedule with transparent execution.",
    points: [
      "Project scheduling & tracking",
      "MEP coordination",
      "Material procurement",
      "Snag list & closure",
    ],
    image: "/assets/talwar_nobg.png",
  },
  {
    id: "fabrication",
    title: "Fabrication",
    blurb:
      "Custom metal/wood/glass fabrication tailored to fit, finish, and function.",
    points: [
      "MS/SS works & powder coating",
      "Joinery & carpentry",
      "CNC/laser detailing",
      "On-site installation",
    ],
    image: "/assets/talwar_nobg.png",
  },
  {
    id: "interior-exterior-design",
    title: "Interior & Exterior Design",
    blurb:
      "Concept-to-detail design—layouts, elevations, 3D, and material palettes for timeless spaces.",
    points: [
      "Space planning & 3D renders",
      "Material/finish boards",
      "Lighting & ceiling concepts",
      "Landscape/Facade cues",
    ],
    image: "/assets/talwar_nobg.png",
  },
  {
    id: "furniture-fabric-accessories",
    title: "Furniture, Fabric & Accessories",
    blurb:
      "Curated selections and bespoke pieces that elevate comfort and character.",
    points: [
      "Loose & built-in furniture",
      "Upholstery & drapery",
      "Rugs, art & décor curation",
      "Ergonomics & scale checks",
    ],
    image: "/assets/talwar_nobg.png",
  },
  {
    id: "lighting-false-ceiling-solutions",
    title: "Lighting & False Ceiling Solutions",
    blurb:
      "Layered lighting and ceiling systems that balance aesthetics with performance.",
    points: [
      "Ambient/task/accent planning",
      "False ceiling detailing",
      "Automation readiness",
      "Fixture scheduling",
    ],
    image: "/assets/talwar_nobg.png",
  },
  {
    id: "space-planning-optimization",
    title: "Space Planning & Optimization",
    blurb:
      "Flow, storage, and zoning strategies to make every square foot work harder.",
    points: [
      "Circulation & zoning",
      "Storage & utilities mapping",
      "Code & accessibility checks",
      "Cost–benefit alternatives",
    ],
    image: "/assets/talwar_nobg.png",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Header />

      <main id="top" className={`min-h-screen bg-white text-gray-900 ${cinzel.className}`}>
        {/* HERO — centered title + punchline, elegant gold divider */}
        <section className="relative overflow-hidden">
          <div className="mx-auto max-w-6xl px-4 pt-20 pb-14 sm:pt-28 text-center">
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-wide">
              <span className="bg-gradient-to-r from-[#D4AF37] to-[#b8892b] bg-clip-text text-transparent">
                Services
              </span>
            </h1>

            <p className="mx-auto mt-4 max-w-3xl text-lg sm:text-xl text-gray-700">
              Bold ideas. Luxe materials. Flawless execution.{" "}
              <span className="font-semibold text-[#8b6b1f]">
                Welcome to the golden standard of interiors.
              </span>
            </p>

            {/* Centered, subtle gold divider */}
            <div className="mx-auto mt-6 h-[3px] w-24 rounded-full bg-gradient-to-r from-[#FFF5CC] via-[#D4AF37] to-[#C08E2F] shadow-[0_0_12px_rgba(212,175,55,0.55)] motion-safe:animate-pulse" />
          </div>

          {/* soft radial gold glow at top */}
          <div className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 h-40 w-[120%] bg-[radial-gradient(closest-side,rgba(212,175,55,0.18),transparent)]" />
        </section>

        {/* SECTIONS — alternating image layout */}
        <div className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
          <div className="grid gap-10">
            {services.map((s, i) => (
              <ServiceSection key={s.id} s={s} i={i} />
            ))}
          </div>

          {/* LUXURY GOLD CTA PANEL */}
          <div className="relative mt-12 overflow-hidden rounded-2xl ring-1 ring-[#D4AF37]/40 shadow-[0_20px_60px_rgba(212,175,55,0.25)]">
            {/* champagne/brushed gold base */}
            <div className="absolute inset-0 opacity-95 bg-[conic-gradient(from_220deg_at_50%_50%,#FFF7D6,#F7E6A6,#E9C85A,#F7E6A6,#FFF7D6)]" />
            {/* soft vignette + inner glow */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_0%,rgba(255,255,255,0.65),transparent_55%),radial-gradient(160%_100%_at_50%_100%,rgba(212,175,55,0.28),transparent_60%)]" />

            <div className="relative p-7 sm:p-10 text-center">
              {/* GOLDEN HEADLINE */}
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-wide bg-gradient-to-r from-[#b8892b] via-[#D4AF37] to-[#b8892b] bg-clip-text text-transparent drop-shadow-[0_1px_0_rgba(0,0,0,0.08)]">
                Elevate every detail—craft a space that’s unmistakably yours.
              </h3>

              <p className="mx-auto mt-2 max-w-3xl text-black/80">
                Tell us your vision—colors, textures, routines. We’ll shape a clear, design-first plan and deliver with precision.
              </p>

              <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                {/* GOLD BUTTON WITH WHITE TEXT */}
                <Link
                  href="/book"
                  className="group relative inline-flex items-center justify-center overflow-hidden rounded-2xl border border-[#BA8D2F] bg-gradient-to-b from-[#F2D885] via-[#D4AF37] to-[#B8892B] px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(212,175,55,0.35)] ring-1 ring-[#D4AF37]/40 transition
                             hover:shadow-[0_14px_40px_rgba(212,175,55,0.45)] hover:brightness-110 active:scale-95"
                  aria-label="Book a Consultation"
                >
                  <span className="pointer-events-none absolute inset-0 opacity-60 bg-[radial-gradient(60%_120%_at_50%_0%,rgba(255,255,255,0.35),transparent)]" />
                  <span className="pointer-events-none absolute inset-0 -translate-x-full bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.8),transparent)] transition-transform duration-700 ease-out group-hover:translate-x-full" />
                  <span className="relative z-10">Book a Consultation</span>
                </Link>

                <Link
                  href="https://wa.me/919000701000"
                  target="_blank"
                  className="rounded-2xl border border-black/25 bg-white/40 backdrop-blur px-5 py-3 text-sm text-black transition hover:bg-white/55"
                >
                  Chat on WhatsApp
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

/** Section renderer with side image + gold frame + alternating order */
function ServiceSection({ s, i }: { s: Service; i: number }) {
  const reverse = i % 2 === 1;

  return (
    <section id={s.id} className="scroll-mt-28 rounded-2xl border border-gray-200/70 shadow-sm overflow-hidden">
      <div className={`grid md:grid-cols-2 ${reverse ? "md:[&>*:first-child]:order-2" : ""}`}>
        {/* Image side */}
        <figure className="relative h-56 sm:h-72 md:h-full">
          <Image
            src={s.image}
            alt={`${s.title} preview`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            priority={i < 2}
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#d4af37]/15 via-transparent to-[#d4af37]/10" />
          <div className="pointer-events-none absolute inset-0 ring-1 ring-[#d4af37]/30" />
          <figcaption className="absolute bottom-3 left-3 rounded-full bg-black/30 text-white text-xs px-3 py-1 backdrop-blur">
            Sample preview
          </figcaption>
        </figure>

        {/* Content side */}
        <div className="p-6 sm:p-8">
          <div className="max-w-3xl mx-auto text-center">
            {/* Centered heading in SAME gold gradient as the main Services heading */}
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-wide">
              <span className="bg-gradient-to-r from-[#D4AF37] to-[#b8892b] bg-clip-text text-transparent">
                {s.title}
              </span>
            </h2>
            <p className="mt-3 text-gray-600">{s.blurb}</p>
          </div>

          {/* Points */}
          <ul className="mt-6 grid gap-2 text-sm text-gray-700 sm:grid-cols-2 max-w-3xl mx-auto text-left">
            {s.points.map((p) => (
              <li key={p} className="flex items-start gap-2">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#D4AF37]/80" />
                {p}
              </li>
            ))}
          </ul>

          {/* Actions: Book + Explore our work (gallery) */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/book"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl border border-[#BA8D2F] bg-gradient-to-b from-[#F2D885] via-[#D4AF37] to-[#B8892B] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(212,175,55,0.3)] ring-1 ring-[#D4AF37]/40 transition hover:shadow-[0_12px_34px_rgba(212,175,55,0.45)] hover:brightness-110 active:scale-95"
            >
              <span className="pointer-events-none absolute inset-0 opacity-60 bg-[radial-gradient(60%_120%_at_50%_0%,rgba(255,255,255,0.35),transparent)]" />
              <span className="pointer-events-none absolute inset-0 -translate-x-full bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.8),transparent)] transition-transform duration-700 ease-out group-hover:translate-x-full" />
              <span className="relative z-10">Book a Consultation</span>
            </Link>

            <Link
              href="/gallery"
              className="inline-flex items-center justify-center rounded-xl border border-[#D4AF37]/60 px-5 py-2.5 text-sm font-semibold text-[#8b6b1f] hover:bg-[#FFF7D6] hover:border-[#D4AF37] transition"
            >
              Explore our work →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
