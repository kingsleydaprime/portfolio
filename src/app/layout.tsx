import type { Metadata } from "next";
import "./globals.css";

import { Inter, Playfair_Display } from 'next/font/google'
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { KEYWORDS, SITE_TITLE, SITE_URL } from "@/constants";

export const metadata: Metadata = {
  metadataBase: new URL('https://kingsleydaprime.com'),
  title: {
    default: SITE_TITLE,
    template: '%s | kingsleydaprime',
  },
  description:
    'Systems Engineer, Software Developer, and Founder. Building at the intersection of systems, intelligence, and impact. Based in Lagos, Nigeria.',
  keywords: KEYWORDS,
  authors: [{ name: 'Kingsley Ihemelandu', url: SITE_URL }],
  creator: 'Kingsley Ihemelandu',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'kingsleydaprime',
    title: 'Kingsley Ihemelandu | kingsleydaprime',
    description:
      'Systems Engineer, Software Developer, and Founder. Building at the intersection of systems, intelligence, and impact.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Kingsley Ihemelandu — kingsleydaprime',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kingsley Ihemelandu | kingsleydaprime',
    description:
      'Systems Engineer, Software Developer, and Founder. Building at the intersection of systems, intelligence, and impact.',
    creator: '@kingsleydaprime',
    images: ['/og-image.png'],
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
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}


const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-heading',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className={`${inter.variable} ${playfair.variable} min-h-full flex flex-col`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}



