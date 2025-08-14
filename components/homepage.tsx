import Image from "next/image";
import { Cinzel } from "next/font/google";

const cinzel = Cinzel({ subsets: ["latin"], weight: ["400", "700"] });

export default function Homepage() {
  return (
    <div
      className={`min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 ${cinzel.className}`}
    >
      {/* Hero Section with Interior Photo */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/landingpage.jpg"
            alt="Interior Design Showcase"
            fill
            className="object-cover"
            priority
            quality={90}
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Transform Your Space
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Discover the perfect blend of elegance and comfort with our curated
            interior design solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300">
              Explore Designs
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-gray-900 transition-colors duration-300">
              Get Consultation
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Welcome Section (bolder title, centered underline & text, image on right) */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Left: Title + Copy (centered) */}
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight md:whitespace-nowrap text-gray-900">
              Welcome to <span className="text-[#D4AF37] font-black">Talwar Interiors</span>
            </h2>

            {/* centered gold line */}
            <span className="mt-3 inline-block h-1 w-20 rounded-full bg-[#D4AF37] mx-auto" />

            <p className="mt-6 text-gray-700 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
              Step into a world where design meets passion and every detail reflects you.
Whether you dream of a warm, inviting home or a bold, statement-making office, we bring your vision to life with creativity, precision, and timeless style. From colors and fabrics to finishes and furniture, every choice is uniquely yours. With fresh ideas and meticulous attention to detail, we create spaces that inspire, delight, and truly feel like home.
            </p>
          </div>

          {/* Right: Landing image card (rounded + shadow) */}
          <div className="relative w-full overflow-hidden rounded-2xl shadow-xl ring-1 ring-black/5" style={{ paddingTop: "56.25%" }}>
            <Image
              src="/assets/landingpage.jpg"
              alt="Talwar Interiors showcase"
              fill
              className="object-cover"
              priority
              sizes="(min-width: 1024px) 560px, (min-width: 768px) 50vw, 100vw"
              quality={85}
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      {/* <section className="py-20 px-6 bg-white">
        ...
      </section> */}
    </div>
  );
}
