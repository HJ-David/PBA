import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Page Backcountry Adventures",
    template: "%s | Page Backcountry Adventures",
  },
  description:
    "Private SUV backcountry tours in Page, Arizona. Explore iconic viewpoints, slot canyon country, and remote desert landscapes with experienced local guides.",
  metadataBase: new URL("https://pagebackcountryadventures.com"),
  openGraph: {
    title: "Page Backcountry Adventures",
    description:
      "Private SUV backcountry tours in Page, Arizona. Explore iconic viewpoints, slot canyon country, and remote desert landscapes with experienced local guides.",
    url: "/",
    siteName: "Page Backcountry Adventures",
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
