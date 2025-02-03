import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface BlogPost {
  slug: string
  title: string
  date: string
  tags: string[]
  content?: string
}

export function getBlogPosts(): BlogPost[] {
  const postsDirectory = path.join(process.cwd(), 'app/blog/posts')
  const files = fs.readdirSync(postsDirectory)
  
  const posts = files
    .filter(file => file.endsWith('.md'))
    .map(file => {
      const fullPath = path.join(postsDirectory, file)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      
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

export function getBlogPost(slug: string): BlogPost | null {
  const fullPath = path.join(process.cwd(), 'app/blog/posts', `${slug}.md`)
  
  try {
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    
    return {
      slug,
      title: data.title,
      date: data.date,
      content,
      tags: data.tags || []
    }
  } catch (error) {
    return null
  }
} 