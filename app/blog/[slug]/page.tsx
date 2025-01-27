import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import rehypePrism from 'rehype-prism-plus'
import { getBlogPost } from '@/app/lib/blog'

type Params = Promise<{ slug: string }>;

// Add this type definition near the top of the file
type TableOfContents = {
  level: number;
  text: string;
  id: string;
}[];

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  
  if (!post) {
    return {
      title: 'Post Not Found'
    }
  }

  return {
    title: post.title,
    description: post.content?.substring(0, 160) || ''
  }
}

// Add this helper function before the BlogPost component
function extractTableOfContents(markdown: string): TableOfContents {
  const headingRegex = /^(#{1,6})\s+(.+)$/gm;
  const toc: TableOfContents = [];
  
  let match;
  while ((match = headingRegex.exec(markdown)) !== null) {
    const level = match[1].length;
    const text = match[2];
    const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
    toc.push({ level, text, id });
  }
  
  return toc;
}

export default async function BlogPost({ params }: { params: Params }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  
  if (!post) {
    notFound()
  }

  const tableOfContents = extractTableOfContents(post.content || '');

  return (
    <div className="flex gap-8 max-w-6xl mx-auto py-12 px-4">
      {/* Table of Contents Sidebar */}
      <nav className="hidden lg:block w-64 flex-shrink-0">
        <div className="sticky top-8">
          <h2 className="text-md font-semibold mb-4">Table of Contents</h2>
          <ul className="space-y-2">
            {tableOfContents.map((heading) => (
              <li
                key={heading.id}
                style={{ paddingLeft: `${(heading.level - 1) * 1}rem` }}
              >
                <a
                  href={`#${heading.id}`}
                  className="text-gray-600 hover:text-orange-600 dark:text-gray-400 dark:hover:text-orange-400 text-sm"
                >
                  {heading.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <article className="flex-1">
        <Link 
          href="/blog" 
          className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 mb-8"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to blog
        </Link>

        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
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
        <div className="prose prose-md dark:prose-invert prose-code:text-orange-600 dark:prose-code:text-orange-400">
          <ReactMarkdown
            rehypePlugins={[[rehypePrism, { showLineNumbers: true }]]}
            components={{
              h1: ({ children }) => {
                const id = (children?.toString() || '').toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
                return <h1 className="text-3xl font-bold" id={id}><a href={`#${id}`} className="text-orange-600 font-bold no-underline">#</a> {children}</h1>;
              },
              h2: ({ children }) => {
                const id = (children?.toString() || '').toString().toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
                return <h2 id={id}>{children}</h2>;
              },
              h3: ({ children }) => {
                const id = (children?.toString() || '').toString().toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
                return <h3 id={id}>{children}</h3>;
              },
              h4: ({ children }) => {
                const id = (children?.toString() || '').toString().toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
                return <h4 id={id}>{children}</h4>;
              },
              h5: ({ children }) => {
                const id = (children?.toString() || '').toString().toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
                return <h5 id={id}>{children}</h5>;
              },
              h6: ({ children }) => {
                const id = (children?.toString() || '').toString().toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
                return <h6 id={id}>{children}</h6>;
              },
            }}
          >
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
    </div>
  )
} 