'use client'

import Image from 'next/image'
import profilePhoto from '/public/assets/profile_photo.jpg'

const PRODUCTS = [
  {
    name: 'Compresto',
    description: 'Video, image & PDF compression for macOS',
    href: 'https://compresto.app',
    gradient: 'from-violet-500 to-purple-600',
    hoverBg: 'hover:bg-violet-50 dark:hover:bg-violet-950/30',
  },
  {
    name: 'Steps',
    description: 'Workout & pedometer app',
    href: 'https://getsteps.app',
    gradient: 'from-orange-500 to-red-500',
    hoverBg: 'hover:bg-orange-50 dark:hover:bg-orange-950/30',
  },
  {
    name: 'Marketing Channels',
    description: 'One new marketing channel, every day',
    href: 'https://marketingchannels.co',
    gradient: 'from-emerald-500 to-teal-600',
    hoverBg: 'hover:bg-emerald-50 dark:hover:bg-emerald-950/30',
  },
  {
    name: 'Flowly',
    description: 'AI-powered automated testing',
    href: 'https://useflowly.ai',
    gradient: 'from-blue-500 to-cyan-500',
    hoverBg: 'hover:bg-blue-50 dark:hover:bg-blue-950/30',
  },
]

const SOCIALS = [
  { name: 'Twitter', handle: '@hieudinh_', href: 'https://twitter.com/hieudinh_', icon: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  )},
  { name: 'GitHub', handle: '@dqhieu', href: 'https://github.com/dqhieu', icon: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  )},
  { name: 'Product Hunt', handle: '@hieudinh', href: 'https://www.producthunt.com/@hieudinh', icon: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M13.604 8.4h-3.405V12h3.405c.995 0 1.801-.806 1.801-1.801 0-.993-.806-1.799-1.801-1.799zM12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm1.604 14.4h-3.405V18H7.801V6h5.804c2.319 0 4.2 1.88 4.2 4.199 0 2.321-1.881 4.201-4.201 4.201z"/>
    </svg>
  )},
  { name: 'LinkedIn', handle: 'dinhquanghieu', href: 'https://www.linkedin.com/in/dinhquanghieu/', icon: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  )},
]

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950 text-black dark:text-white">
      <div className="max-w-2xl mx-auto px-6 py-20 md:py-32">
        {/* Hero Section */}
        <div className="mb-20">
          <div className="relative inline-block mb-8">
            <div className="absolute -inset-1 bg-gradient-to-r from-violet-500 via-pink-500 to-orange-500 rounded-full blur-sm opacity-75" />
            <Image
              src={profilePhoto}
              alt="Hieu Dinh"
              width={80}
              height={80}
              className="relative rounded-full ring-2 ring-white dark:ring-gray-950"
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">
            Hieu Dinh
          </h1>
          <p className="text-xl md:text-2xl font-medium bg-gradient-to-r from-violet-500 via-pink-500 to-orange-500 bg-clip-text text-transparent">
            Software Engineer & Indie Hacker
          </p>
          <p className="mt-4 text-lg text-neutral-500 dark:text-neutral-400 max-w-md">
            Building products that people love. Shipping fast, iterating faster.
          </p>
        </div>

        {/* Products */}
        <div className="mb-16">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-neutral-400 dark:text-neutral-500 mb-6">
            Products
          </h2>
          <div className="space-y-3">
            {PRODUCTS.map((product) => (
              <a
                key={product.name}
                href={product.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group block p-5 rounded-2xl border border-neutral-200 dark:border-neutral-800 ${product.hoverBg} transition-all duration-300 hover:scale-[1.02] hover:border-transparent hover:shadow-lg`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold mb-1 flex items-center gap-2">
                      <span className={`inline-block w-2 h-2 rounded-full bg-gradient-to-r ${product.gradient}`} />
                      {product.name}
                    </h3>
                    <p className="text-neutral-500 dark:text-neutral-400">
                      {product.description}
                    </p>
                  </div>
                  <svg
                    className="w-5 h-5 text-neutral-300 dark:text-neutral-600 group-hover:text-neutral-500 dark:group-hover:text-neutral-300 transition-all duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Social Links */}
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-widest text-neutral-400 dark:text-neutral-500 mb-6">
            Connect
          </h2>
          <div className="flex flex-wrap gap-3">
            {SOCIALS.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-4 py-2.5 rounded-full border border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-all duration-300"
              >
                <span className="text-neutral-500 group-hover:text-black dark:group-hover:text-white transition-colors">
                  {social.icon}
                </span>
                <span className="text-sm font-medium">{social.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
