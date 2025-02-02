import type { MetadataRoute } from 'next'
import { getBlogPosts } from './lib/blog';
 
export default function sitemap(): MetadataRoute.Sitemap {

  const posts = getBlogPosts();

  let dynamicPages = posts.map((post) => ({
    url: `https://hieudinh.com/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'weekly' as const,
    priority: 1,
  }));

  let staticPages = [
    {
      url: 'https://hieudinh.com',
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: 'https://hieudinh.com/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
  ]

  return [
    ...staticPages,
    ...dynamicPages,
  ]
}