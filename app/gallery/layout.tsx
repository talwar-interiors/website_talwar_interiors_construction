import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Portfolio Gallery | Luxury Interior Design Projects | Talwar Interiors",
    description:
        "Explore 40+ completed projects - residential villas, commercial offices, modular kitchens, living rooms & bedrooms. See our work before booking a consultation.",
    keywords: [
        "interior design portfolio",
        "completed projects Hyderabad",
        "home interiors gallery",
        "before after interior design",
        "luxury home designs India",
        "interior design photos",
    ],
    openGraph: {
        title: "Portfolio Gallery | Talwar Interiors",
        description:
            "Browse our showcase of luxury homes, offices, and commercial interiors across India.",
        images: ["/assets/talwarinteriors_og.png"],
    },
};

export default function GalleryLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
