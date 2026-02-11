import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://hieudinh.com',
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: 'https://hieudinh.com/dadjokes',
      lastModified: new Date('2023-07-27'),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
  ]
}
