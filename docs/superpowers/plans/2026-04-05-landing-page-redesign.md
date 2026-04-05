# Landing Page Redesign — Dreamy Ethereal Style

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the dark terminal-style landing page with a dreamy ethereal design using a full-bleed flower/cloud photo background, decorative floral CSS framing, elegant serif typography, and glassmorphism interactive elements.

**Architecture:** Single-page redesign modifying 4 files: layout (font), globals (CSS utilities), tailwind config (colors), and page (complete JSX rewrite). Data arrays (PRODUCTS, SOCIALS) and SEO/JSON-LD are preserved unchanged. Background photo provided by user at `public/assets/bg.jpg`.

**Tech Stack:** Next.js 15 (App Router), Tailwind CSS 3, `next/font/google` (Playfair Display), CSS `backdrop-filter` for glassmorphism.

**Spec:** `docs/superpowers/specs/2026-04-05-landing-page-redesign-design.md`

---

### Task 1: Add Playfair Display font to layout

**Files:**
- Modify: `app/layout.tsx`

- [ ] **Step 1: Add Playfair Display import and apply to body**

Replace the full contents of `app/layout.tsx` with:

```tsx
import './globals.css'
import type { Metadata } from 'next'
import { Playfair_Display } from 'next/font/google'
import { Analytics } from "@vercel/analytics/next"

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://hieudinh.com'),
  title: {
    default: 'Hieu Dinh - Software Engineer & Indie Hacker',
    template: '%s | Hieu Dinh',
  },
  description:
    'Software engineer and indie hacker building Compresto, Steps, Marketing Channels, and Flowly. Shipping products that people love.',
  openGraph: {
    title: 'Hieu Dinh - Software Engineer & Indie Hacker',
    description:
      'Software engineer and indie hacker building Compresto, Steps, Marketing Channels, and Flowly. Shipping products that people love.',
    url: 'https://hieudinh.com',
    siteName: 'Hieu Dinh',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hieu Dinh - Software Engineer & Indie Hacker',
    description:
      'Software engineer and indie hacker building Compresto, Steps, Marketing Channels, and Flowly.',
    creator: '@hieudinh_',
  },
  alternates: {
    canonical: 'https://hieudinh.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={playfair.variable}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

- [ ] **Step 2: Verify build succeeds**

Run: `npm run build`
Expected: Build completes with no errors. Playfair Display font is downloaded and optimized by Next.js.

- [ ] **Step 3: Commit**

```bash
git add app/layout.tsx
git commit -m "feat: add Playfair Display serif font via next/font"
```

---

### Task 2: Update Tailwind config with plum palette

**Files:**
- Modify: `tailwind.config.js`

- [ ] **Step 1: Add custom plum colors and font family**

Replace the full contents of `tailwind.config.js` with:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{html,js}'
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
      colors: {
        plum: {
          900: '#3a2838',
          700: '#5a4552',
          600: '#685060',
          400: '#9a7a8a',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'ping-slow': 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
      width: {
        '100': '25rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
```

- [ ] **Step 2: Verify build succeeds**

Run: `npm run build`
Expected: Build completes with no errors.

- [ ] **Step 3: Commit**

```bash
git add tailwind.config.js
git commit -m "feat: add plum color palette and serif font family to Tailwind config"
```

---

### Task 3: Update globals.css with glassmorphism and floral utilities

**Files:**
- Modify: `app/globals.css`

- [ ] **Step 1: Replace globals.css with new styles**

Replace the full contents of `app/globals.css` with:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  .glass {
    background: rgba(255, 255, 255, 0.52);
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
    border: 1px solid rgba(178, 148, 168, 0.28);
    box-shadow: 0 2px 8px rgba(178, 138, 168, 0.15);
  }

  .glass:hover {
    background: rgba(255, 255, 255, 0.7);
    box-shadow: 0 4px 12px rgba(178, 138, 168, 0.25);
  }

  .floral-dot {
    position: absolute;
    border-radius: 50%;
  }

  .floral-leaf {
    position: absolute;
    border-radius: 50%;
  }

  .floral-petal {
    position: absolute;
    border-radius: 50% 0 50% 50%;
  }
}

@media (prefers-reduced-motion: reduce) {
  * {
    transition-duration: 0.01ms !important;
  }
}
```

- [ ] **Step 2: Verify build succeeds**

Run: `npm run build`
Expected: Build completes with no errors.

- [ ] **Step 3: Commit**

```bash
git add app/globals.css
git commit -m "feat: add glassmorphism and floral CSS utilities"
```

---

### Task 4: Rewrite landing page component

**Files:**
- Modify: `app/page.tsx`

**Important:** The user must place their background photo at `public/assets/bg.jpg` before this step. If the file is not there yet, use a placeholder gradient and leave a comment.

- [ ] **Step 1: Rewrite app/page.tsx with the new design**

Replace the full contents of `app/page.tsx` with:

```tsx
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
          key={i}
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
        <h1 className="font-serif text-4xl md:text-5xl text-plum-900 tracking-[2.5px]">
          Hieu Dinh
        </h1>

        {/* Subtitle */}
        <p className="mt-2 text-[11px] uppercase tracking-[2px] text-plum-600">
          Software Engineer &amp; Indie Hacker
        </p>

        {/* Tagline */}
        <p className="mt-4 text-[13px] italic text-plum-700 max-w-xs leading-relaxed font-serif">
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
```

- [ ] **Step 2: Verify build succeeds**

Run: `npm run build`
Expected: Build completes with no errors. If `public/assets/bg.jpg` doesn't exist yet, the page will render but with no background — that's expected.

- [ ] **Step 3: Commit**

```bash
git add app/page.tsx
git commit -m "feat: redesign landing page with dreamy ethereal style"
```

---

### Task 5: Visual verification and polish

**Files:**
- Possibly modify: `app/page.tsx`, `app/globals.css`

**Prerequisite:** User has placed their background photo at `public/assets/bg.jpg`.

- [ ] **Step 1: Start dev server and verify visually**

Run: `npm run dev`

Open `http://localhost:3000` and verify:
1. Background photo covers full viewport
2. Profile photo displays correctly, circular with white border
3. Name renders in Playfair Display serif font
4. Social link icons are visible and clickable
5. Product pill links are visible and clickable
6. Floral corner decorations appear on desktop (hidden on mobile <640px)
7. Floating petals visible on desktop
8. Glassmorphism blur effect works on social buttons and product pills

- [ ] **Step 2: Test responsive layout**

Check in browser devtools:
- 375px width (mobile): content stacked, no floral corners, product pills wrap
- 768px width (tablet): floral corners visible, content centered
- 1440px width (desktop): full layout with all decorations

- [ ] **Step 3: Test all links**

Click every social link and product link — verify they open in new tabs to correct URLs.

- [ ] **Step 4: Verify text readability**

Confirm plum-colored text is readable over the background photo. If contrast is insufficient, add a subtle overlay by inserting this div as the first child inside `<main>`:

```tsx
<div className="absolute inset-0 bg-white/10" />
```

- [ ] **Step 5: Run production build**

Run: `npm run build`
Expected: Build succeeds with no errors or warnings.

- [ ] **Step 6: Commit any polish adjustments**

```bash
git add -A
git commit -m "fix: polish landing page styling after visual review"
```

(Skip this step if no changes were needed.)
