import Image from 'next/image'
import profilePhoto from '/public/assets/profile_photo.jpg'
import { PRODUCTS, SOCIALS } from './shared'

const BENTO_COLORS = [
  'bg-violet-50 dark:bg-violet-950/40 hover:bg-violet-100 dark:hover:bg-violet-950/60',
  'bg-orange-50 dark:bg-orange-950/40 hover:bg-orange-100 dark:hover:bg-orange-950/60',
  'bg-emerald-50 dark:bg-emerald-950/40 hover:bg-emerald-100 dark:hover:bg-emerald-950/60',
  'bg-sky-50 dark:bg-sky-950/40 hover:bg-sky-100 dark:hover:bg-sky-950/60',
]

const BENTO_ACCENTS = [
  'text-violet-600 dark:text-violet-400',
  'text-orange-600 dark:text-orange-400',
  'text-emerald-600 dark:text-emerald-400',
  'text-sky-600 dark:text-sky-400',
]

export default function BentoStyle() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
      {/* Bento Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[minmax(120px,auto)]">
        {/* Profile - Spans 2 cols */}
        <div className="col-span-2 row-span-2 bg-neutral-100 dark:bg-neutral-900 rounded-3xl p-8 flex flex-col justify-end">
          <Image
            src={profilePhoto}
            alt="Hieu Dinh"
            width={64}
            height={64}
            className="rounded-2xl mb-5"
          />
          <h1 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white mb-1">
            Hieu Dinh
          </h1>
          <p className="text-neutral-500 dark:text-neutral-400 text-sm md:text-base">
            Software Engineer & Indie Hacker
          </p>
        </div>

        {/* Product Cards */}
        {PRODUCTS.map((product, i) => (
          <a
            key={product.name}
            href={product.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`group ${BENTO_COLORS[i]} rounded-3xl p-5 md:p-6 flex flex-col justify-between transition-all duration-300 hover:scale-[1.02] ${i === 0 ? 'col-span-2 md:col-span-2' : ''}`}
          >
            <h3 className={`text-base md:text-lg font-semibold ${BENTO_ACCENTS[i]}`}>
              {product.name}
            </h3>
            <p className="text-xs md:text-sm text-neutral-500 dark:text-neutral-400 mt-2">
              {product.description}
            </p>
          </a>
        ))}

        {/* Social Links row */}
        {SOCIALS.map((social) => (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-neutral-100 dark:bg-neutral-900 hover:bg-neutral-200 dark:hover:bg-neutral-800 rounded-3xl p-5 flex flex-col items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02]"
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
  )
}
