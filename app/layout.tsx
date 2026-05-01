import type { Metadata } from "next";
import type { ReactNode } from "react";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { site } from "@/content/site";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Frontier Wear | Hands-Free Technology for the Frontline",
    template: "%s | Frontier Wear"
  },
  description:
    "RealWear assisted reality devices for field teams, industrial sites, and connected worker programs across Australia and New Zealand.",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Frontier Wear | Hands-Free Technology for the Frontline",
    description:
      "RealWear assisted reality devices for field teams, industrial sites, and connected worker programs across Australia and New Zealand.",
    url: "/",
    siteName: "Frontier Wear",
    images: [
      {
        url: "/assets/field-worker.jpg",
        width: 1800,
        height: 1012,
        alt: "Frontier Wear connected worker technology in the field"
      }
    ],
    locale: "en_AU",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Frontier Wear | Hands-Free Technology for the Frontline",
    description:
      "RealWear assisted reality devices for field teams, industrial sites, and connected worker programs across Australia and New Zealand.",
    images: ["/assets/field-worker.jpg"]
  },
  icons: {
    icon: "/assets/frontier-wear-mark.png",
    apple: "/assets/frontier-wear-mark.png"
  }
};

const organisationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  url: site.url,
  logo: `${site.url}/assets/frontier-wear-logo.png`,
  email: site.email,
  telephone: site.phone,
  areaServed: ["Australia", "New Zealand"],
  sameAs: [site.social.facebook, site.social.instagram, site.social.youtube]
};

export default function RootLayout({
  children
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en-AU">
      <body>
        <a
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-blue focus:px-4 focus:py-3 focus:text-white"
          href="#main"
        >
          Skip to content
        </a>
        <script
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organisationJsonLd) }}
          type="application/ld+json"
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
