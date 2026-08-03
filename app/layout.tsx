import type { Metadata } from "next";
import {
  Great_Vibes,
  Cormorant_Garamond,
  Poppins,
} from "next/font/google";
import "./globals.css";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-script",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Uchenna & Ebere",
  description: "Wedding Invitation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${greatVibes.variable} ${cormorant.variable} ${poppins.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}