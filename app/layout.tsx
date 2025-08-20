
import type { Metadata } from "next";
import { Geist, Geist_Mono, Pacifico, Inter } from "next/font/google";
import "./globals.css";
import StructuredData from "../components/StructuredData";
import CookieBanner from "../components/CookieBanner";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['100', '200', '300', '400', '500', '600', '700'],
})

const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-pacifico',
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tricast360 – Baumschutz neu definiert",
  description: "Modulares 360°-Baumschutzsystem: schnell installiert, wiederverwendbar, normkonform. Innovative Lösung für nachhaltigen Baumschutz auf Baustellen.",
  keywords: "Baumschutz, Baustelle, modulares System, 360°, nachhaltig, wiederverwendbar, normkonform, Baustellenschutz, Umweltschutz",
  authors: [{ name: "Tricast360" }],
  creator: "Tricast360",
  publisher: "Tricast360",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://tricast360.de',
    siteName: 'Tricast360',
    title: 'Tricast360 – Baumschutz neu definiert',
    description: 'Modulares 360°-Baumschutzsystem: schnell installiert, wiederverwendbar, normkonform. Innovative Lösung für nachhaltigen Baumschutz auf Baustellen.',
    images: [
      {
        url: 'https://tricast360.de/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Tricast360 Baumschutzsystem',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tricast360 – Baumschutz neu definiert',
    description: 'Modulares 360°-Baumschutzsystem: schnell installiert, wiederverwendbar, normkonform.',
    images: ['https://tricast360.de/og-image.jpg'],
    creator: '@tricast360',
  },
  alternates: {
    canonical: 'https://tricast360.de',
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#22c55e',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" suppressHydrationWarning={true}>
      <body
        className={`${inter.variable} ${geistSans.variable} ${geistMono.variable} ${pacifico.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <StructuredData />
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}