import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import rehypePrism from 'rehype-prism-plus'
import { getBlogPost } from '@/app/lib/blog'
import { MarkdownComponents } from '@/app/components/Markdown'
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
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      url: 'https://hieudinh.com/blog/' + post.slug,
      siteName: 'Swift things',
      locale: 'en_US',
      type: 'article',
    },
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
  const currentUrl = `https://hieudinh.com/blog/${slug}`;

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
        <div className="max-w-md sm:max-w-4xl prose prose-md dark:prose-invert prose-code:text-orange-600 dark:prose-code:text-orange-400">
          <ReactMarkdown
            rehypePlugins={[[rehypePrism, { showLineNumbers: true }]]}
            components={{
              ...MarkdownComponents,
              h1: ({ children }) => {
                const id = (children?.toString() || '').toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
                return <h1 className="text-3xl font-bold mt-8" id={id}><a href={`#${id}`} className="text-orange-600 font-bold no-underline">#</a> {children}</h1>;
              },
              h2: ({ children }) => {
                const id = (children?.toString() || '').toString().toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
                return <h2 className="mt-4" id={id}>{children}</h2>;
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

        <div className="flex justify-between items-center mt-8">
          <Link 
            href="/blog" 
            className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to blog
          </Link>

          <div className="flex gap-3 items-center">
            <span className="text-sm text-gray-500 dark:text-gray-400">Share this post</span>
            <a
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(post.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors"
              aria-label="Share on Twitter"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-600 transition-colors"
              aria-label="Share on LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
      </article>
    </div>
  )
} 