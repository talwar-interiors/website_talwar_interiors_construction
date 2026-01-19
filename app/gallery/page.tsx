import type { Metadata } from "next";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import GalleryClient from "./GalleryClient";

export const metadata: Metadata = {
  title: "Interior Design Gallery | Project Showcase | Talwar Interiors",
  description:
    "Explore our curated gallery of stunning interior design projects in Hyderabad. View residential, commercial, kitchen, and office transformations by Talwar Interiors.",
  keywords: [
    "interior design gallery",
    "interior design portfolio",
    "home interior photos",
    "office interior design Hyderabad",
    "modular kitchen designs",
    "luxury interiors India",
    "residential interior projects",
    "commercial interior showcase",
  ],
  openGraph: {
    title: "Gallery | Talwar Interiors",
    description:
      "A curated showcase of Talwar Interiors — residences, offices, kitchens and bespoke details.",
    images: ["/assets/talwarinteriors_og.png"],
  },
};

export default function GalleryPage() {
  return (
    <>
      <Header />
      <GalleryClient />
      <Footer />
    </>
  );
}
