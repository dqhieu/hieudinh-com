import './globals.css'
import type { Metadata } from 'next'
import { Playfair_Display } from 'next/font/google'
import { Analytics } from "@vercel/analytics/next"

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://hieudinh.com'),
  title: {
    default: 'Hieu Dinh - Software Engineer & Indie Hacker',
    template: '%s | Hieu Dinh',
  },
  description:
    'Software engineer and indie hacker building Compresto, Steps, Marketing Channels, and Flowly. Shipping products that people love.',
  openGraph: {
    title: 'Hieu Dinh - Software Engineer & Indie Hacker',
    description:
      'Software engineer and indie hacker building Compresto, Steps, Marketing Channels, and Flowly. Shipping products that people love.',
    url: 'https://hieudinh.com',
    siteName: 'Hieu Dinh',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hieu Dinh - Software Engineer & Indie Hacker',
    description:
      'Software engineer and indie hacker building Compresto, Steps, Marketing Channels, and Flowly.',
    creator: '@hieudinh_',
  },
  alternates: {
    canonical: 'https://hieudinh.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={playfair.variable}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
