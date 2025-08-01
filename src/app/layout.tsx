import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientThemeProvider from '../components/ClientThemeProvider';
import AppAppBar from '../components/AppAppBar';
import Footer from '../components/Footer';

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
    default: "Selge Adventure Park - Köprülü Kanyon Macera Turizmi",
    template: "%s | Selge Adventure Park"
  },
  description: "Köprülü Kanyon'da rafting, zipline, camping, buggy safari ve restaurant hizmetleri. Antalya'nın en iyi macera parkı. Rezervasyon: 0538 451 65 67",
  keywords: "selge adventure park, köprülü kanyon, rafting, zipline, camping, buggy safari, antalya macera turizmi, outdoor aktiviteler",
  authors: [{ name: "Selge Adventure Park" }],
  creator: "Selge Adventure Park",
  publisher: "Selge Adventure Park",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://selgeadventurepark.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://selgeadventurepark.com',
    title: 'Selge Adventure Park - Köprülü Kanyon Macera Turizmi',
    description: 'Köprülü Kanyon\'da rafting, zipline, camping, buggy safari ve restaurant hizmetleri.',
    siteName: 'Selge Adventure Park',
    images: [
      {
        url: '/images/logo.png',
        width: 1200,
        height: 630,
        alt: 'Selge Adventure Park',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Selge Adventure Park - Köprülü Kanyon Macera Turizmi',
    description: 'Köprülü Kanyon\'da rafting, zipline, camping, buggy safari ve restaurant hizmetleri.',
    images: ['/images/logo.png'],
  },
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
  verification: {
    google: 'your-google-verification-code',
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
        <ClientThemeProvider>
          <AppAppBar />
          {children}
          <Footer />
        </ClientThemeProvider>
      </body>
    </html>
  );
}
