import Header from "@/components/header/header";
import Homepage from "@/components/homepage";
import Footer from "@/components/footer/footer";
import { Cinzel } from "next/font/google";

const cinzel = Cinzel({ subsets: ["latin"], weight: ["400", "700"] });

export default function Home() {
  return (
    <main className={`min-h-screen bg-white ${cinzel.className}`}>
      {/* Header */}
      <Header />

      {/* Homepage Component */}
      <Homepage />

      {/* Footer */}
      <Footer />
    </main>
  );
}
