import Image from 'next/image'
import profilePhoto from '/public/assets/profile_photo.jpg'
import { PRODUCTS, SOCIALS } from './shared'

export default function TechyStyle() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <div className="max-w-2xl mx-auto px-6 py-20 md:py-28">
        {/* Terminal-style Header */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-emerald-500 rounded-full blur opacity-50" />
              <Image
                src={profilePhoto}
                alt="Hieu Dinh"
                width={56}
                height={56}
                className="relative rounded-full ring-1 ring-emerald-500/50"
              />
            </div>
            <div className="h-px flex-1 bg-gradient-to-r from-emerald-500/50 to-transparent" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-3">
            Hieu Dinh
          </h1>
          <p className="font-mono text-sm text-emerald-400">
            <span className="text-gray-600">$</span> Software Engineer & Indie Hacker
          </p>
          <p className="font-mono text-sm text-gray-500 mt-2">
            <span className="text-gray-600">#</span> Building products that people love
          </p>
        </div>

        {/* Products */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-xs text-emerald-500">~/products</span>
            <div className="h-px flex-1 bg-gray-800" />
          </div>
          <div className="space-y-2">
            {PRODUCTS.map((product) => (
              <a
                key={product.name}
                href={product.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-4 rounded-lg border border-gray-800 hover:border-emerald-500/50 bg-gray-900/50 hover:bg-gray-900 transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium mb-1 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 group-hover:shadow-[0_0_8px_rgba(16,185,129,0.6)] transition-shadow" />
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-500 font-mono">
                      {product.description}
                    </p>
                  </div>
                  <span className="font-mono text-xs text-gray-700 group-hover:text-emerald-500 transition-colors">
                    &gt;_
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Social Links */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-xs text-emerald-500">~/connect</span>
            <div className="h-px flex-1 bg-gray-800" />
          </div>
          <div className="flex flex-wrap gap-2">
            {SOCIALS.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-3 py-2 rounded-md border border-gray-800 hover:border-emerald-500/50 bg-gray-900/50 hover:bg-gray-900 transition-all duration-300"
              >
                <span className="text-gray-500 group-hover:text-emerald-400 transition-colors">
                  {social.icon}
                </span>
                <span className="font-mono text-xs text-gray-400 group-hover:text-white transition-colors">
                  {social.name}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Blinking cursor footer */}
        <div className="mt-20 font-mono text-sm text-gray-700">
          <span className="text-emerald-500">~</span> <span className="animate-pulse">_</span>
        </div>
      </div>
    </div>
  )
}
