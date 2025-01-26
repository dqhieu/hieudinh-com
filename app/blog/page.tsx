import fs from 'fs'
import path from 'path'
import Link from 'next/link'

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
      <h1 className="text-3xl font-bold mb-8">Swift things</h1>
      <div className="space-y-6">
        {posts.map((post) => (
          <article key={post.slug} className="border-b pb-6">
            <Link href={`/blog/${post.slug}`} className="block hover:opacity-75">
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <div className="flex items-center gap-4">
                <time className="text-gray-500">{post.date}</time>
                <div className="flex gap-2">
                  {post.tags.map(tag => (
                    <span key={tag} className="bg-gray-100 text-gray-700 text-sm px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  )
}
