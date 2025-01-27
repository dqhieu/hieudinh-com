import { MetadataRoute } from 'next'
import { getBlogPosts } from '@/app/lib/blog' 

export async function generateSitemaps() {

  
  return [{ id: 0 }]

}

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getBlogPosts()

  const blogPosts = posts.map((post) => ({
    url: `https://hieudinh.com/blog/${post.slug}`,
    lastModified: new Date(post.date),
  }))

  return [
    {
      url: 'https://hieudinh.com',
      lastModified: new Date(),
    },
    {
      url: 'https://hieudinh.com/blog',
      lastModified: new Date(),
    },
    ...blogPosts,
  ]
}