import type { Metadata } from "next";
import BookAppointment from "./bookappointment";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import { Cinzel } from "next/font/google";

export const metadata: Metadata = {
  title: "Book Free Consultation | Interior Design Quote | Talwar Interiors",
  description:
    "Schedule a free interior design consultation in Hyderabad, Bangalore, Delhi or Pune. Get a personalized quote within 24 hours. Call +91 9000701000.",
  keywords: [
    "free interior consultation",
    "interior design quote",
    "book interior designer",
    "home renovation consultation",
    "interior design cost India",
    "interior design estimate",
  ],
  openGraph: {
    title: "Book a Consultation | Talwar Interiors",
    description:
      "Transform your space – schedule your exclusive interior design consultation today.",
    images: ["/assets/talwarinteriors_og.png"],
  },
};


const cinzel = Cinzel({ subsets: ["latin"], weight: ["400", "700"] });

export default function BookPage() {
  return (
    <main className={`min-h-screen bg-white ${cinzel.className}`}>
      {/* Header */}
      <Header />

      {/* Book Appointment Component */}
      <BookAppointment />

      {/* Footer */}
      <Footer />
    </main>
  );
}
