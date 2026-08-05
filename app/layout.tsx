import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { businessInfo } from "@/constants/business";

export const metadata: Metadata = {
  title: {
    default: `${businessInfo.name} – ${businessInfo.tagline}`,
    template: `%s | ${businessInfo.name}`,
  },
  description:
    "Green Land Super Market – Your trusted neighborhood supermarket in Colombo. Fresh products, affordable prices, quality groceries, and friendly service for the whole family.",
  keywords: [
    "supermarket",
    "grocery",
    "fresh produce",
    "Colombo supermarket",
    "Green Land Super Market",
    "daily essentials",
    "Sri Lanka",
  ],
  openGraph: {
    title: `${businessInfo.name} – ${businessInfo.tagline}`,
    description:
      "Your trusted neighborhood supermarket. Fresh products, affordable prices, and friendly service.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${businessInfo.name} – ${businessInfo.tagline}`,
    description:
      "Your trusted neighborhood supermarket. Fresh products, affordable prices, and friendly service.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
