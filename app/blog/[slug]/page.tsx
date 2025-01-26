import fs from 'fs'
import path from 'path'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import rehypePrism from 'rehype-prism-plus'
import 'prismjs/themes/prism-tomorrow.css' // You can choose different themes
import Link from 'next/link'

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
      <Link 
        href="/blog" 
        className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 mb-8"
      >
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to blog
      </Link>

      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <div className="flex items-center gap-4 mb-8">
        <time className="text-gray-500 dark:text-gray-400">
          {new Date(post.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </time>
        <div className="flex gap-2">
          {post.tags.map((tag: string) => (
            <span key={tag} className="bg-gray-100 dark:bg-gray-800 text-orange-600 dark:text-orange-400 text-sm px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="prose prose-lg dark:prose-invert prose-code:text-orange-600 dark:prose-code:text-orange-400">
        <ReactMarkdown rehypePlugins={[[rehypePrism, { showLineNumbers: true }]]}>
          {post.content}
        </ReactMarkdown>
      </div>
      <Link 
        href="/blog" 
        className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 mt-8"
      >
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to blog
      </Link>
    </article>
  )
} 