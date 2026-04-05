import Image from 'next/image'
import profilePhoto from '/public/assets/profile_photo.jpg'

const PRODUCTS = [
  {
    name: 'Compresto',
    description: 'Video, image & PDF compression for macOS',
    href: 'https://compresto.app',
  },
  {
    name: 'Steps',
    description: 'Workout & pedometer app',
    href: 'https://getsteps.app',
  },
  {
    name: 'Marketing Channels',
    description: 'One new marketing channel, every day',
    href: 'https://marketingchannels.co',
  },
  {
    name: 'Flowly',
    description: 'AI-powered automated testing',
    href: 'https://useflowly.ai',
  },
]

const SOCIALS = [
  { name: 'Twitter', href: 'https://twitter.com/hieudinh_', icon: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )},
  { name: 'GitHub', href: 'https://github.com/dqhieu', icon: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  )},
  { name: 'Product Hunt', href: 'https://www.producthunt.com/@hieudinh', icon: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M13.604 8.4h-3.405V12h3.405c.995 0 1.801-.806 1.801-1.801 0-.993-.806-1.799-1.801-1.799zM12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm1.604 14.4h-3.405V18H7.801V6h5.804c2.319 0 4.2 1.88 4.2 4.199 0 2.321-1.881 4.201-4.201 4.201z" />
    </svg>
  )},
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/dinhquanghieu/', icon: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )},
]

function FloralCorner({ position }: { position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' }) {
  const isTop = position.includes('top')
  const isLeft = position.includes('left')

  const positionClasses = [
    isTop ? 'top-0' : 'bottom-0',
    isLeft ? 'left-0' : 'right-0',
  ].join(' ')

  return (
    <div className={`absolute ${positionClasses} w-[140px] h-[120px] md:w-[200px] md:h-[160px] pointer-events-none hidden sm:block`}>
      {/* Main flower cluster */}
      <div
        className="floral-dot"
        style={{
          [isTop ? 'top' : 'bottom']: '-8px',
          [isLeft ? 'left' : 'right']: '-8px',
          width: 60, height: 60,
          background: 'rgba(230,155,178,0.72)',
          filter: 'blur(5px)',
        }}
      />
      <div
        className="floral-dot"
        style={{
          [isTop ? 'top' : 'bottom']: '22px',
          [isLeft ? 'left' : 'right']: '38px',
          width: 42, height: 42,
          background: 'rgba(218,148,175,0.6)',
          filter: 'blur(4px)',
        }}
      />
      <div
        className="floral-dot"
        style={{
          [isTop ? 'top' : 'bottom']: '6px',
          [isLeft ? 'left' : 'right']: '70px',
          width: 30, height: 30,
          background: 'rgba(198,155,212,0.5)',
          filter: 'blur(3px)',
        }}
      />
      <div
        className="floral-dot"
        style={{
          [isTop ? 'top' : 'bottom']: '48px',
          [isLeft ? 'left' : 'right']: '12px',
          width: 32, height: 32,
          background: 'rgba(238,172,192,0.52)',
          filter: 'blur(3px)',
        }}
      />
      <div
        className="floral-dot"
        style={{
          [isTop ? 'top' : 'bottom']: '38px',
          [isLeft ? 'left' : 'right']: '55px',
          width: 22, height: 22,
          background: 'rgba(192,162,215,0.42)',
          filter: 'blur(2px)',
        }}
      />
      {/* Leaves */}
      <div
        className="floral-leaf"
        style={{
          [isTop ? 'top' : 'bottom']: '65px',
          [isLeft ? 'left' : 'right']: '8px',
          width: 24, height: 12,
          background: 'rgba(125,172,125,0.42)',
          transform: `rotate(${isLeft ? '-22deg' : '22deg'})`,
        }}
      />
      <div
        className="floral-leaf"
        style={{
          [isTop ? 'top' : 'bottom']: '55px',
          [isLeft ? 'left' : 'right']: '72px',
          width: 18, height: 9,
          background: 'rgba(125,172,125,0.32)',
          transform: `rotate(${isLeft ? '18deg' : '-18deg'})`,
        }}
      />
    </div>
  )
}

function FloatingPetals() {
  const petals = [
    { top: '28%', left: '14%', size: 10, rotate: 48, opacity: 0.45 },
    { top: '72%', left: '88%', size: 8, rotate: 125, opacity: 0.38 },
    { top: '18%', left: '68%', size: 7, rotate: 205, opacity: 0.32 },
    { top: '82%', left: '22%', size: 9, rotate: 80, opacity: 0.35 },
    { top: '55%', left: '8%', size: 8, rotate: 160, opacity: 0.3 },
    { top: '40%', left: '92%', size: 7, rotate: 260, opacity: 0.28 },
  ]

  return (
    <>
      {petals.map((p, i) => (
        <div
          key={`petal-${i}`}
          className="floral-petal pointer-events-none hidden sm:block"
          style={{
            top: p.top,
            left: p.left,
            width: p.size,
            height: p.size,
            background: `rgba(238,178,192,${p.opacity})`,
            transform: `rotate(${p.rotate}deg)`,
          }}
        />
      ))}
    </>
  )
}

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Hieu Dinh',
    url: 'https://hieudinh.com',
    jobTitle: 'Software Engineer',
    sameAs: [
      'https://twitter.com/hieudinh_',
      'https://github.com/dqhieu',
      'https://www.producthunt.com/@hieudinh',
      'https://www.linkedin.com/in/dinhquanghieu/',
    ],
  }

  return (
    <main
      className="relative min-h-screen bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: "url('/assets/bg.jpg')" }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Decorative floral corners */}
      <FloralCorner position="top-left" />
      <FloralCorner position="top-right" />
      <FloralCorner position="bottom-left" />
      <FloralCorner position="bottom-right" />

      {/* Floating petals */}
      <FloatingPetals />

      {/* Centered content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-16 text-center">
        {/* Profile photo */}
        <Image
          src={profilePhoto}
          alt="Hieu Dinh"
          width={88}
          height={88}
          className="rounded-full border-[3px] border-white/80 shadow-[0_5px_20px_rgba(178,138,168,0.28)] mb-5"
        />

        {/* Name */}
        <h1 className="font-display text-4xl md:text-5xl text-plum-900 tracking-[2.5px]">
          Hieu Dinh
        </h1>

        {/* Subtitle */}
        <p className="mt-2 text-[11px] uppercase tracking-[2px] text-plum-600">
          Software Engineer &amp; Indie Hacker
        </p>

        {/* Tagline */}
        <p className="mt-4 text-[13px] italic text-plum-700 max-w-xs leading-relaxed font-display">
          Building tools that simplify everyday life.
        </p>

        {/* Social links */}
        <div className="flex gap-3 mt-6">
          {SOCIALS.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="glass w-[38px] h-[38px] rounded-full flex items-center justify-center text-plum-700 hover:-translate-y-0.5 transition-all duration-300"
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="w-[45px] h-px bg-gradient-to-r from-transparent via-plum-400/40 to-transparent my-5" />

        {/* Product links */}
        <div className="flex flex-wrap justify-center gap-3">
          {PRODUCTS.map((product) => (
            <a
              key={product.name}
              href={product.href}
              target="_blank"
              rel="noopener noreferrer"
              className="glass text-[11px] text-plum-700 tracking-[0.8px] px-3 py-1.5 rounded-full hover:-translate-y-0.5 transition-all duration-300"
            >
              {product.name}
            </a>
          ))}
        </div>
      </div>
    </main>
  )
}
