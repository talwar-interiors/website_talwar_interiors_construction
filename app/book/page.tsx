import BookAppointment from "./bookappointment";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { Cinzel } from "next/font/google";

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
