import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy | Talwar Interiors",
    description:
        "Learn how Talwar Interiors collects, uses, and protects your personal information. Our commitment to your privacy and data security.",
    robots: {
        index: true,
        follow: true,
    },
};

export default function PrivacyPolicyLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
