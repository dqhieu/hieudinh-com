'use client'

import Image from 'next/image'
import profilePhoto from '/src/images/profile_photo.jpg'

// Add these URLs at the top of the file
const LINKS = {
  compressX: 'https://compressx.app',
  twitter: 'https://twitter.com/hieudinh_',
  github: 'https://github.com/dqhieu',
  productHunt: 'https://www.producthunt.com/@hieudinh',
  linkedin: 'https://www.linkedin.com/in/dinhquanghieu/'
}

// Simple container for nav items
const NavItem = ({ href, children }: { href: string, children: React.ReactNode }) => (
  <a href={href} className="text-neutral-500 hover:text-black dark:hover:text-white transition-colors">
    {children}
  </a>
)

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white p-8 md:p-16 flex items-center justify-center">
      <div className="max-w-xl w-full">
        {/* Header Section */}
        <div className="mb-16">
          <Image
            src={profilePhoto}
            alt="Profile"
            width={48}
            height={48}
            className="rounded-full mb-6"
          />
          <h1 className="text-2xl mb-2">Hieu Dinh</h1>
          <p className="text-xl text-neutral-500 dark:text-neutral-400">Software Engineer & Indie Hacker</p>
        </div>

        {/* Navigation */}
        {/* <nav className="flex gap-6 mb-16">
          <NavItem href="#about">About</NavItem>
          <NavItem href="#connect">Connect</NavItem>
          <NavItem href="#features">Features</NavItem>
        </nav> */}

        {/* Projects List */}
        <div className="space-y-2">
          <a href={LINKS.compressX} target="_blank" rel="noopener noreferrer">
            <div className="group p-4 -mx-4 rounded-xl hover:bg-neutral-100 dark:hover:bg-gray-800 transition-colors cursor-pointer">
              <h2 className="text-xl mb-1">CompressX</h2>
              <div className="text-neutral-500 dark:text-neutral-400">
                <span>2024</span>
                <span className="mx-2">·</span>
                <span>File compression app</span>
              </div>
            </div>
          </a>

          <a href={LINKS.twitter} target="_blank" rel="noopener noreferrer">
            <div className="group p-4 -mx-4 rounded-xl hover:bg-neutral-100 dark:hover:bg-gray-800 transition-colors cursor-pointer">
              <h2 className="text-xl mb-1">𝕏 (formerly Twitter)</h2>
              <div className="text-neutral-500 dark:text-neutral-400">
                <span>@hieudinh_</span>
                <span className="mx-2">·</span>
                <span>Thoughts on software & indie hacking</span>
              </div>
            </div>
          </a>

          <a href={LINKS.github} target="_blank" rel="noopener noreferrer">
            <div className="group p-4 -mx-4 rounded-xl hover:bg-neutral-100 dark:hover:bg-gray-800 transition-colors cursor-pointer">
              <h2 className="text-xl mb-1">GitHub</h2>
              <div className="text-neutral-500 dark:text-neutral-400">
                <span>@dqhieu</span>
                <span className="mx-2">·</span>
                <span>Open source contributions</span>
              </div>
            </div>
          </a>

          <a href={LINKS.productHunt} target="_blank" rel="noopener noreferrer">
            <div className="group p-4 -mx-4 rounded-xl hover:bg-neutral-100 dark:hover:bg-gray-800 transition-colors cursor-pointer">
              <h2 className="text-xl mb-1">Product Hunt</h2>
              <div className="text-neutral-500 dark:text-neutral-400">
                <span>@hieudinh</span>
                <span className="mx-2">·</span>
                <span>Latest launches</span>
              </div>
            </div>
          </a>

          <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer">
            <div className="group p-4 -mx-4 rounded-xl hover:bg-neutral-100 dark:hover:bg-gray-800 transition-colors cursor-pointer">
              <h2 className="text-xl mb-1">LinkedIn</h2>
              <div className="text-neutral-500 dark:text-neutral-400">
                <span>dinhquanghieu</span>
                <span className="mx-2">·</span>
                <span>Professional network</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </main>
  )
}

