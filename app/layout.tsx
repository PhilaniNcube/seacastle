import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.seacastlehotelcampsbay.com/"),
  title: "Primi Seacastle Boutique Hotel",
  description: "Luxury Boutique Hotel in Camps Bay, Cape Town",
  keywords: ["hotel", "luxury", "boutique", "Camps Bay", "Cape Town"],
  icons: [
    "https://img.raccoonstatic.com/user/logo/a786feb98035eb1b.jpg?mod-1694688638",
  ],
  robots: "index, follow",
  openGraph: {
    images: [
      "https://img.raccoonstatic.com/user/logo/a786feb98035eb1b.jpg?mod-1694688638",
    ],
    title: "Primi Seacastle Boutique Hotel",
    description: "Luxury Boutique Hotel in Camps Bay, Cape Town",
    type: "website",
    locale: "en_ZA",
    countryName: "South Africa",
    url: "https://www.seacastlehotelcampsbay.com/",
  },
  twitter: {
    card: "summary",
    site: "@primiseacastle",
    creator: "@primiseacastle",
    description: "Luxury Boutique Hotel in Camps Bay, Cape Town",
    title: "Primi Seacastle Boutique Hotel",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
