import type { Metadata } from "next";
import {
  Cinzel_Decorative,
  Cormorant_Garamond,
  IM_Fell_English_SC,
  Noto_Serif_Devanagari,
} from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const cinzel = Cinzel_Decorative({
  subsets: ["latin"],
  variable: "--font-cinzel",
  weight: ["400", "700"],
  display: "swap",
});

const devanagari = Noto_Serif_Devanagari({
  subsets: ["devanagari"],
  variable: "--font-devanagari",
  weight: ["400", "600"],
  display: "swap",
});

const imFell = IM_Fell_English_SC({
  subsets: ["latin"],
  variable: "--font-im-fell",
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Manoj Weds Sakshi | Rajputana Wedding Invitation",
  description:
    "A royal Rajasthani wedding invitation for Manoj and Sakshi. Friday, 19 June 2026, Palak Palace and Resort, Bhopal.",
  openGraph: {
    title: "Manoj Weds Sakshi",
    description:
      "Join the Shrivastava family for the sacred wedding ceremony of Manoj and Sakshi at Palak Palace and Resort, Bhopal.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${cinzel.variable} ${devanagari.variable} ${imFell.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
