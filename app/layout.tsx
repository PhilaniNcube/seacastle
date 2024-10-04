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
  metadataBase: new URL("https://www.seacastlehotelcampsbay.com"),
  title: "Seacastle Boutique Hotel",
  description: "Luxury Boutique Hotel in Camps Bay, Cape Town",
  keywords: ["hotel", "luxury", "boutique", "Camps Bay", "Cape Town"],
  icons: ["/images/secastle-logo.png"],
  robots: "index, follow",
  openGraph: {
    images: ["/images/secastle-logo.png"],
    title: "Seacastle Boutique Hotel",
    description: "Luxury Boutique Hotel in Camps Bay, Cape Town",
    type: "website",
    locale: "en_ZA",
    countryName: "South Africa",
    url: "https://www.seacastlehotelcampsbay.com/",
  },
  twitter: {
    card: "summary",
    description: "Luxury Boutique Hotel in Camps Bay, Cape Town",
    title: "Seacastle Boutique Hotel",
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
