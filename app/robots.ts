import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://hieudinh.com/sitemap.xml',
    host: 'https://hieudinh.com',
  }
}
