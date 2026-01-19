import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms & Conditions | Talwar Interiors",
    description:
        "Read the terms and conditions for using Talwar Interiors services. Understand our project terms, payment policies, and client responsibilities.",
    robots: {
        index: true,
        follow: true,
    },
};

export default function TermsConditionsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
