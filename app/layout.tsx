import type { Metadata } from "next";

import "./globals.css";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { businessInfo } from "@/constants/business";
import { storePhoneDigits, tidyAddress } from "@/lib/contact";
import { toIsoHour } from "@/lib/hours";
import { getStore } from "@/lib/store-api";

const SITE_URL = "https://greenland.millx.in";

const DESCRIPTION =
  "Greenland Supermarket in Padanilam, Kozhikode — fresh fruit and vegetables, dairy, staples, snacks and household essentials. Shop in store, or order online and pay with UPI.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${businessInfo.name} – ${businessInfo.tagline}`,
    template: `%s | ${businessInfo.name}`,
  },
  description: DESCRIPTION,
  keywords: [
    "Greenland Supermarket",
    "supermarket Padanilam",
    "grocery Kozhikode",
    "grocery delivery Kerala",
    "fresh vegetables Padanilam",
    "online grocery Kozhikode",
  ],
  alternates: { canonical: SITE_URL },
  icons: {
    icon: [
      { url: "/brand/favicon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/brand/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: "/brand/apple-touch-icon.png",
  },
  openGraph: {
    title: `${businessInfo.name} – ${businessInfo.tagline}`,
    description: DESCRIPTION,
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: businessInfo.name,
    images: [{ url: "/brand/og-image.jpg", width: 1200, height: 630, alt: businessInfo.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${businessInfo.name} – ${businessInfo.tagline}`,
    description: DESCRIPTION,
    images: ["/brand/og-image.jpg"],
  },
  robots: { index: true, follow: true },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const store = await getStore();
  const digits = storePhoneDigits(store);

  // Only facts we can verify from the store record.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "GroceryStore",
    name: businessInfo.name,
    description: DESCRIPTION,
    url: SITE_URL,
    image: `${SITE_URL}/brand/og-image.jpg`,
    ...(digits && { telephone: `+${digits}` }),
    address: {
      "@type": "PostalAddress",
      streetAddress: tidyAddress(store?.address || businessInfo.address),
      addressLocality: "Padanilam",
      addressRegion: "Kerala",
      addressCountry: "IN",
    },
    ...(store?.latitude != null &&
      store?.longitude != null && {
        geo: {
          "@type": "GeoCoordinates",
          latitude: Number(store.latitude),
          longitude: Number(store.longitude),
        },
      }),
    ...(store && {
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: toIsoHour(store.open_hour),
        closes: toIsoHour(store.close_hour),
      },
    }),
    paymentAccepted: "UPI",
    currenciesAccepted: "INR",
  };

  return (
    <html lang="en-IN">
      <body className="flex min-h-screen flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-pill focus:bg-white focus:px-4 focus:py-2 focus:font-bold focus:shadow-lift"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer store={store} />
      </body>
    </html>
  );
}
