import fs from 'fs'
import path from 'path'
import Link from 'next/link'
import Image from 'next/image'
import swiftBanner from '@/public/assets/swift.png'

interface BlogPost {
  slug: string
  title: string
  date: string
  tags: string[]
}

function getBlogPosts(): BlogPost[] {
  const postsDirectory = path.join(process.cwd(), 'app/blog')
  const files = fs.readdirSync(postsDirectory)
  
  const posts = files
    .filter(file => file.endsWith('.md'))
    .map(file => {
      // Read the markdown file content
      const fullPath = path.join(postsDirectory, file)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      
      // Extract metadata from markdown frontmatter
      // Assuming each markdown file starts with:
      // ---
      // title: Post Title
      // date: YYYY-MM-DD
      // ---
      const metadata = fileContents.split('---')[1]
      const title = metadata.match(/title: (.*)/)?.[1] || file.replace('.md', '')
      const date = metadata.match(/date: (.*)/)?.[1] || ''
      const tagsMatch = metadata.match(/tags: \[(.*)\]/)
      const tags = tagsMatch ? tagsMatch[1].split(',').map(tag => tag.trim()) : []
      
      return {
        slug: file.replace('.md', ''),
        title,
        date,
        tags
      }
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return posts
}

export default function BlogPage() {
  const posts = getBlogPosts()

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <Image src={swiftBanner} alt="Swift Banner" className="w-full h-auto mb-8 rounded-xl" />
      <h1 className="text-3xl font-bold mb-8">Swift things</h1>
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
                      <span key={tag} className="bg-gray-100 dark:bg-gray-800 text-orange-700 dark:text-orange-300 text-sm px-2 py-1 rounded">
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
