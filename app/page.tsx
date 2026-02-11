'use client'

import { useState } from 'react'
import MinimalStyle from './components/MinimalStyle'
import CardStyle from './components/CardStyle'
import BentoStyle from './components/BentoStyle'
import TechyStyle from './components/TechyStyle'

const STYLES = [
  { id: 'minimal', label: 'Minimal' },
  { id: 'cards', label: 'Cards' },
  { id: 'bento', label: 'Bento' },
  { id: 'techy', label: 'Techy' },
] as const

type StyleId = (typeof STYLES)[number]['id']

export default function Home() {
  const [activeStyle, setActiveStyle] = useState<StyleId>('minimal')

  return (
    <main className={`min-h-screen ${activeStyle === 'techy' ? 'bg-gray-950' : 'bg-white dark:bg-gray-950'} text-black dark:text-white`}>
      {/* Floating Style Switcher */}
      <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
        <div className={`flex gap-1 p-1 rounded-full shadow-lg border backdrop-blur-md ${
          activeStyle === 'techy'
            ? 'bg-gray-900/90 border-gray-700'
            : 'bg-white/90 dark:bg-gray-900/90 border-neutral-200 dark:border-neutral-700'
        }`}>
          {STYLES.map((style) => (
            <button
              key={style.id}
              onClick={() => setActiveStyle(style.id)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                activeStyle === style.id
                  ? activeStyle === 'techy'
                    ? 'bg-emerald-500 text-white'
                    : 'bg-black dark:bg-white text-white dark:text-black'
                  : activeStyle === 'techy'
                    ? 'text-gray-400 hover:text-white'
                    : 'text-neutral-500 hover:text-black dark:hover:text-white'
              }`}
            >
              {style.label}
            </button>
          ))}
        </div>
      </div>

      {/* Render Active Style */}
      {activeStyle === 'minimal' && <MinimalStyle />}
      {activeStyle === 'cards' && <CardStyle />}
      {activeStyle === 'bento' && <BentoStyle />}
      {activeStyle === 'techy' && <TechyStyle />}
    </main>
  )
}
