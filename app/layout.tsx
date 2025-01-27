import './globals.css'
import './styles/prism-one-light.css'
import './styles/prism-one-dark.css'
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
        <script
          src="https://cdn.telemetrydeck.com/websdk/telemetrydeck.min.js"
          data-app-id="1565CA38-B4D3-44C5-ABE8-F980E0EB9A2C"
          async
        ></script>
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <body className="dark:text-gray-100">{children}</body>
      <Script src="https://scripts.simpleanalyticscdn.com/latest.js"  />
    </html>
  )
}
