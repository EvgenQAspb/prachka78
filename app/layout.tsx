import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://prachka78.ru"),
  title: {
    default: "Городская прачечная 78 — прачечная и химчистка в Санкт-Петербурге",
    template: "%s — Городская прачечная 78",
  },
  description:
    "Прачечная и химчистка «Городская прачечная 78» в Санкт-Петербурге: стирка, сушка, глажка, химчистка одежды, ковров и обуви. Самообслуживание и оплата картой. Ежедневно 9:00–21:00.",
  keywords: [
    "прачечная санкт-петербург",
    "химчистка санкт-петербург",
    "прачечная самообслуживание",
    "яктенная 28 прачечная",
    "стирка глажка сушка",
  ],
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: "Городская прачечная 78",
    title: "Городская прачечная 78 — прачечная и химчистка в Санкт-Петербурге",
    description:
      "Стирка, сушка, глажка, химчистка одежды, ковров и обуви. Самообслуживание и оплата картой. Ежедневно 9:00–21:00.",
  },
};

export const viewport: Viewport = {
  themeColor: "#0abab5",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LaundryOrDryCleaner",
  name: "Городская прачечная 78",
  telephone: "+79500398988",
  address: {
    "@type": "PostalAddress",
    streetAddress: "ул. Яхтенная, д. 28",
    addressLocality: "Санкт-Петербург",
    postalCode: "197082",
    addressCountry: "RU",
  },
  openingHours: "Mo-Su 09:00-21:00",
  url: "https://prachka78.ru",
  priceRange: "₽₽",
  aggregatesRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "70" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ru" className={`${manrope.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
