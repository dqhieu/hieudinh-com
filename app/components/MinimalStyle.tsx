import Image from 'next/image'
import profilePhoto from '/public/assets/profile_photo.jpg'
import { PRODUCTS, SOCIALS } from './shared'

export default function MinimalStyle() {
  return (
    <div className="max-w-lg mx-auto px-6 py-24 md:py-36">
      {/* Header */}
      <div className="mb-20">
        <Image
          src={profilePhoto}
          alt="Hieu Dinh"
          width={56}
          height={56}
          className="rounded-full mb-8 grayscale hover:grayscale-0 transition-all duration-500"
        />
        <h1 className="text-3xl font-light tracking-tight mb-3 text-neutral-900 dark:text-neutral-100">
          Hieu Dinh
        </h1>
        <p className="text-base text-neutral-400 dark:text-neutral-500 font-light">
          Software Engineer & Indie Hacker
        </p>
      </div>

      {/* Products */}
      <div className="mb-20">
        <div className="border-b border-neutral-100 dark:border-neutral-800 pb-2 mb-8">
          <span className="text-xs text-neutral-400 dark:text-neutral-500 tracking-wider uppercase">
            Products
          </span>
        </div>
        <div className="space-y-6">
          {PRODUCTS.map((product) => (
            <a
              key={product.name}
              href={product.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <h3 className="text-base text-neutral-800 dark:text-neutral-200 group-hover:text-neutral-500 dark:group-hover:text-neutral-400 transition-colors duration-300">
                {product.name}
                <span className="inline-block ml-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-neutral-300 dark:text-neutral-600">&rarr;</span>
              </h3>
              <p className="text-sm text-neutral-400 dark:text-neutral-500 mt-0.5 font-light">
                {product.description}
              </p>
            </a>
          ))}
        </div>
      </div>

      {/* Social */}
      <div>
        <div className="border-b border-neutral-100 dark:border-neutral-800 pb-2 mb-8">
          <span className="text-xs text-neutral-400 dark:text-neutral-500 tracking-wider uppercase">
            Elsewhere
          </span>
        </div>
        <div className="flex gap-6">
          {SOCIALS.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors duration-300"
            >
              {social.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
