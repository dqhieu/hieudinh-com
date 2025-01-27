import Image from 'next/image'
import Link from 'next/link'
import swiftBanner from '@/public/assets/swift.png'
import { getBlogPosts } from '@/app/lib/blog'

export default function BlogPage() {
  const posts = getBlogPosts()

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <Image src={swiftBanner} alt="Swift Banner" className="w-full h-auto mb-8 rounded-xl" />
      <h1 className="text-3xl font-bold mb-4">Swift things</h1>
      <div className="space-y-2">
        {posts.map((post) => (
          <article key={post.slug}>
            <Link href={`/blog/${post.slug}`} className="block">
              <div className="p-4 -mx-4 rounded-xl hover:bg-neutral-100 dark:hover:bg-gray-800 transition-colors cursor-pointer">
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                <div className="flex items-center gap-4">
                  <time className="text-gray-500 dark:text-gray-400">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                  <div className="flex gap-2">
                    {post.tags.map(tag => (
                      <span key={tag} className="bg-gray-100 dark:bg-gray-800 text-orange-600 dark:text-orange-400 text-sm px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  )
}
