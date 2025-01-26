import './globals.css'
import './styles/prism-custom.css'
import type { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  metadataBase: new URL('https://hieudinh.com')
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark:bg-gray-900">
      <head>
        <Script 
          src="https://cdn.telemetrydeck.com/websdk/telemetrydeck.min.js"
          data-app-id="1565CA38-B4D3-44C5-ABE8-F980E0EB9A2C"
        />
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <body className="dark:text-gray-100">{children}</body>
    </html>
  )
}
