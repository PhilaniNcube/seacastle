import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { GoogleTagManager } from '@next/third-parties/google';
import Navigation from "@/components/navigation";
import "./globals.css";


const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-serif",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.seacastlehotelcampsbay.com"),
  title: "Sea Castle Boutique Hotel",
  description: "Luxury Boutique Hotel in Camps Bay, Cape Town",
  keywords: ["hotel", "luxury", "boutique", "Camps Bay", "Cape Town"],
  robots: "index, follow",
  verification: {
    google: "wPZLfWVWyaA4vycRl22_8UL4YgrZDn3ORrl0-bVQyGg",
  },
  openGraph: {
    title: "Sea Castle Boutique Hotel",
    description: "Luxury Boutique Hotel in Camps Bay, Cape Town",
    type: "website",
    locale: "en_ZA",
    countryName: "South Africa",
    url: "https://www.seacastlehotelcampsbay.com/",
  },
  twitter: {
    card: "summary",
    description: "Luxury Boutique Hotel in Camps Bay, Cape Town",
    title: "Sea Castle Boutique Hotel",
    images: [
      "https://img.raccoonstatic.com/user/rooms/a786feb98035eb1b-8931-c3d7d5e4bc04d5aa1680082341.jpg?ts=1680082343",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${cormorant.variable} font-sans antialiased`}
      >
        <GoogleTagManager gtmId={'GTM-MHQDMDSQ'} />
        <Navigation />
        {children}
      </body>
    </html>
  );
}
