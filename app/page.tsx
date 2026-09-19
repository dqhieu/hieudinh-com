import Image from 'next/image'

const PRODUCTS = [
  {
    name: 'GrokBots',
    description: 'Templates and prompts for the best Grok Bots',
    href: 'https://grokbots.best',
  },
  {
    name: 'Compresto',
    description: 'Video, image & PDF compression for macOS',
    href: 'https://compresto.app',
  },
  {
    name: 'Steps: Workout & Pedometer',
    description: 'Stay motivated with every step and workout on iOS',
    href: 'https://getsteps.app',
  },
  {
    name: 'Marketing Channels',
    description: 'One new marketing channel, every day',
    href: 'https://marketingchannels.co',
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

const ExternalArrow = (
  <svg
    className="w-4 h-4 shrink-0 text-muted-foreground"
    viewBox="0 0 16 16"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M4.5 11.5 11.5 4.5M6 4.5h5.5V10"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

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
    <main className="min-h-screen bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto flex max-w-3xl flex-col gap-4 px-6 py-16 sm:py-24">
        <section className="surface-card animate-fade-rise flex flex-col items-center gap-6 p-8 text-center sm:flex-row sm:items-start sm:text-left">
          <Image
            src="/assets/profile_photo.jpg"
            alt="Hieu Dinh"
            width={88}
            height={88}
            priority
            className="h-[88px] w-[88px] shrink-0 rounded-full object-cover outline outline-1 -outline-offset-1 outline-black/10"
          />

          <div className="min-w-0">
            <h1 className="font-display text-3xl tracking-tight text-foreground sm:text-4xl [text-wrap:balance]">
              Hieu Dinh
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Software engineer &amp; indie hacker
            </p>
            <p className="font-display mt-4 text-xl leading-snug text-foreground sm:text-2xl [text-wrap:balance]">
              Building tools that simplify everyday life.
            </p>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground [text-wrap:pretty]">
              Software engineer &amp; indie hacker crafting apps for macOS and iOS.
              Compresto, Steps, and more — designed for focus and simplicity.
            </p>
          </div>
        </section>

        <div className="animate-fade-rise-delay grid grid-cols-1 gap-4 sm:grid-cols-2">
          {PRODUCTS.map((product) => (
            <a
              key={product.name}
              href={product.href}
              target="_blank"
              rel="noopener noreferrer"
              className="surface-card surface-card-interactive flex min-h-[10rem] flex-col p-6 text-left"
            >
              <span className="flex items-start justify-between gap-3">
                <span className="text-base font-medium text-foreground [text-wrap:balance]">
                  {product.name}
                </span>
                {ExternalArrow}
              </span>
              <span className="mt-2 text-sm leading-snug text-muted-foreground [text-wrap:pretty]">
                {product.description}
              </span>
            </a>
          ))}
        </div>

        <div className="animate-fade-rise-delay-2 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {SOCIALS.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="surface-card surface-card-interactive flex min-h-[88px] flex-col items-center justify-center gap-2 px-3 py-5 text-foreground"
            >
              {social.icon}
              <span className="text-sm text-muted-foreground">{social.name}</span>
            </a>
          ))}
        </div>
      </div>
    </main>
  )
}
