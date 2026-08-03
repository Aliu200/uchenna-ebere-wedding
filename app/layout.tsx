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

const siteUrl = "https://Sandra-ebere-wedding.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: "Sandra & Ebere | Wedding Invitation",

  description:
    "Together with our families, joyfully invite you to celebrate our wedding on Saturday, 5 September 2026.",

  openGraph: {
    title: "Sandra & Ebere | Wedding Invitation",
    description:
      "Together with our families, joyfully invite you to celebrate our wedding on Saturday, 5 September 2026.",
    url: siteUrl,
    siteName: "Sandra & Ebere",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sandra & Ebere Wedding Invitation",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Sandra & Ebere | Wedding Invitation",
    description:
      "Together with our families, joyfully invite you to celebrate our wedding.",
    images: ["/images/og-image.png"],
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
      className={`${greatVibes.variable} ${cormorant.variable} ${poppins.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}