import type { Metadata } from "next";
import { Playfair_Display, Hanken_Grotesk, DM_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { site } from "@/content/site";

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", style: ["normal", "italic"] });
const hanken = Hanken_Grotesk({ subsets: ["latin"], variable: "--font-hanken" });
const dmMono = DM_Mono({ subsets: ["latin"], weight: "400", variable: "--font-dmmono" });

export const metadata: Metadata = {
  title: {
    default: `${site.name}, ${site.credential} | Financial Advisor in San Diego`,
    template: `%s | ${site.name}, ${site.credential}`,
  },
  description:
    "Personal financial planning for women, professionals, and families in San Diego from Roohi Darugar, CRPC®, an independent financial advisor with LPL Financial.",
  // Proof-of-concept: keep out of search engines until LPL has approved the site.
  robots: { index: false, follow: false },
  openGraph: { type: "website", siteName: "Roohi Darugar, CRPC®", locale: "en_US" },
  twitter: { card: "summary_large_image" },
};


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  name: `${site.name}, ${site.credential}`,
  description: "Financial planning, wealth management, and retirement planning for women, professionals, and families in San Diego.",
  email: site.email,
  areaServed: "San Diego, CA",
  address: { "@type": "PostalAddress", addressLocality: "San Diego", addressRegion: "CA", addressCountry: "US" },
  sameAs: [site.linkedin, site.brokerCheckUrl],
  employee: { "@type": "Person", name: site.name, jobTitle: site.title, hasCredential: "Chartered Retirement Planning Counselor (CRPC®)" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${hanken.variable} ${dmMono.variable}`}>
      <body>
        <a className="skip" href="#main">Skip to content</a>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <div className="banner">
          Now welcoming new clients for 2027 planning. <a href={site.bookingUrl}>Schedule a free consultation →</a>
        </div>
        <Nav />
        <main id="main">{children}</main>
        <Reveal />
        <Footer />
        <a
          className="brokercheck"
          href={site.brokerCheckUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Check the background of this financial professional on FINRA's BrokerCheck"
        >
          <b>
            Broker<span>Check</span>
          </b>
          <small>by</small>
          <em>FINRA</em>
        </a>
      </body>
    </html>
  );
}
