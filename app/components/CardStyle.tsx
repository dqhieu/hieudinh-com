import Image from 'next/image'
import profilePhoto from '/public/assets/profile_photo.jpg'
import { PRODUCTS, SOCIALS } from './shared'

export default function CardStyle() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20 md:py-28">
      {/* Header */}
      <div className="text-center mb-16">
        <Image
          src={profilePhoto}
          alt="Hieu Dinh"
          width={72}
          height={72}
          className="rounded-2xl mx-auto mb-5 shadow-lg"
        />
        <h1 className="text-3xl font-bold mb-2 text-neutral-900 dark:text-white">
          Hieu Dinh
        </h1>
        <p className="text-neutral-500 dark:text-neutral-400">
          Software Engineer & Indie Hacker
        </p>
      </div>

      {/* Product Cards Grid */}
      <div className="mb-14">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-neutral-400 dark:text-neutral-500 mb-5">
          Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {PRODUCTS.map((product) => (
            <a
              key={product.name}
              href={product.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-6 bg-neutral-50 dark:bg-neutral-900 rounded-2xl hover:bg-white dark:hover:bg-neutral-800 hover:shadow-xl border border-transparent hover:border-neutral-200 dark:hover:border-neutral-700 transition-all duration-300"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-neutral-900 dark:text-white">
                    {product.name}
                  </h3>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                    {product.description}
                  </p>
                </div>
                <svg
                  className="w-5 h-5 mt-1 text-neutral-300 dark:text-neutral-600 group-hover:text-neutral-500 dark:group-hover:text-neutral-400 transition-all duration-300 -rotate-45 group-hover:rotate-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Social Cards */}
      <div>
        <h2 className="text-sm font-semibold uppercase tracking-widest text-neutral-400 dark:text-neutral-500 mb-5">
          Connect
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {SOCIALS.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2 p-4 bg-neutral-50 dark:bg-neutral-900 rounded-xl hover:bg-white dark:hover:bg-neutral-800 hover:shadow-lg border border-transparent hover:border-neutral-200 dark:hover:border-neutral-700 transition-all duration-300"
            >
              <span className="text-neutral-400 group-hover:text-neutral-700 dark:group-hover:text-white transition-colors">
                {social.icon}
              </span>
              <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
                {social.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
