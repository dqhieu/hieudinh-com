import fs from 'fs'
import path from 'path'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import rehypePrism from 'rehype-prism-plus'
import 'prismjs/themes/prism-tomorrow.css' // You can choose different themes

interface BlogPostProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: BlogPostProps): Promise<Metadata> {
  const post = getBlogPost(params.slug)
  
  if (!post) {
    return {
      title: 'Post Not Found'
    }
  }

  return {
    title: post.title,
    description: post.content.substring(0, 160)
  }
}

function getBlogPost(slug: string) {
  const fullPath = path.join(process.cwd(), 'app/blog', `${slug}.md`)
  
  try {
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    
    return {
      title: data.title,
      date: data.date,
      content,
      tags: data.tags || []
    }
  } catch (error) {
    return null
  }
}

export default function BlogPost({ params }: BlogPostProps) {
  const post = getBlogPost(params.slug)
  
  if (!post) {
    notFound()
  }

  return (
    <article className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <div className="flex items-center gap-4 mb-8">
        <time className="text-gray-500">
          {new Date(post.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </time>
        <div className="flex gap-2">
          {post.tags.map((tag: string) => (
            <span key={tag} className="bg-gray-100 text-gray-700 text-sm px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="prose prose-lg dark:prose-invert">
        <ReactMarkdown rehypePlugins={[[rehypePrism, { showLineNumbers: true }]]}>
          {post.content}
        </ReactMarkdown>
      </div>
    </article>
  )
} 