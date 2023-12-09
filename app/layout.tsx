import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hieu Dinh'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <Script 
          src="https://cdn.telemetrydeck.com/websdk/telemetrydeck.min.js"
          data-app-id="1565CA38-B4D3-44C5-ABE8-F980E0EB9A2C"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
