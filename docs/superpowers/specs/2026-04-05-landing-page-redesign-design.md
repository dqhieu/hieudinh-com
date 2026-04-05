# Landing Page Redesign — Dreamy Ethereal Style

## Context

The current landing page uses a dark terminal/CLI aesthetic (gray-950 background, emerald accents, monospace fonts). The goal is to replace it with a dreamy, ethereal design featuring a full-bleed flower/cloud photograph as the background, decorative floral CSS framing, elegant serif typography, and simplified content. This creates a more personal, artistic first impression.

## Design Summary

Single full-viewport page with a real photograph of flowers and pastel sky as the background. Content is vertically and horizontally centered. Decorative watercolor-style floral CSS accents frame the four corners. Glassmorphism (frosted glass) effects on interactive elements.

## Visual Direction

- **Mood**: Dreamy, ethereal, peaceful — Japanese-inspired tranquility
- **Background**: Real high-quality photo of flowers/clouds/pastel sky, `object-fit: cover`, full viewport
- **Color palette**: Soft pinks, lavenders, creams derived from the photo; text in deep muted plum tones
- **Typography**: Playfair Display (serif) via Google Fonts for headings; clean sans-serif for small text
- **Interactive elements**: Glassmorphism — white at 50-55% opacity with `backdrop-filter: blur(6px)`

## Content Structure (top to bottom, all centered)

1. **Profile photo** — 88px circular, 3px white border, soft shadow (`box-shadow: 0 5px 20px rgba(178,138,168,0.28)`)
2. **Name** — "Hieu Dinh" in large serif (text-4xl/text-5xl), letter-spacing 2.5px, color `#3a2838`
3. **Subtitle** — "Software Engineer & Indie Hacker" uppercase, 11px, letter-spacing 2px, color `#685060`
4. **Tagline** — italic serif, ~13px, color `#5a4552` (e.g. "Building tools that simplify everyday life.")
5. **Social links** — row of circular glassmorphism buttons (38px) with SVG icons: X, GitHub, Product Hunt, LinkedIn
6. **Delicate divider** — 45px gradient line
7. **Product links** — frosted pill-shaped links: Compresto, Steps, Marketing Channels, Flowly

## Background Image

- Source: A real photograph to be placed at `/public/assets/bg.jpg` (or similar)
- The user will provide or source a dreamy flowers + clouds + pastel sky photo
- Applied via CSS `background-image` on the `<main>` element, `background-size: cover`, `background-position: center`
- Optional: slight dark or light overlay (`rgba(255,255,255,0.1)`) if needed for text readability

## Decorative Floral Framing

CSS-only decorative elements in all four corners:
- Soft blurred circles in pink/lavender/rose tones simulating watercolor flower clusters
- Small green ellipses for leaves
- Applied via absolutely positioned `<div>` elements with `border-radius: 50%` and `filter: blur(3-5px)`
- Scattered floating petal shapes (teardrop via `border-radius: 50% 0 50% 50%`) across the page

## Glassmorphism Style

For social buttons and product pills:
- `background: rgba(255, 255, 255, 0.52)`
- `backdrop-filter: blur(6px)`
- `border: 1px solid rgba(178, 148, 168, 0.28)`
- `box-shadow: 0 2px 8px rgba(178, 138, 168, 0.15)`
- Hover: increase opacity to ~0.7, subtle scale or shadow transition

## Files to Modify

| File | Changes |
|------|---------|
| `app/page.tsx` | Complete rewrite of the component JSX and Tailwind classes |
| `app/globals.css` | Add custom CSS for floral decorations, glassmorphism utilities |
| `app/layout.tsx` | Add Playfair Display font via `next/font/google` |
| `tailwind.config.js` | Add custom colors (plum palette), extend backdrop-blur if needed |
| `public/assets/bg.jpg` | New background photo (user to provide) |

## Data to Preserve

The existing `PRODUCTS` and `SOCIALS` arrays in `app/page.tsx` should be kept as-is — only the rendering/styling changes. The JSON-LD structured data and SEO metadata in `layout.tsx` remain unchanged.

## Responsive Considerations

- Mobile: content takes full width with padding, social icons wrap if needed, product pills stack
- Desktop: content centered with max-width constraint (~600px), comfortable spacing
- Background photo covers viewport on all sizes
- Floral corner decorations scale down or hide on very small screens

## Hover & Transition Effects

- Social buttons: opacity increase + subtle lift (`transform: translateY(-1px)`)
- Product pills: background opacity increase + subtle glow
- All transitions: `duration-300 ease-out`

## Accessibility

- Sufficient color contrast between plum text and light background/photo
- `aria-label` on all social links (preserved from current)
- Semantic HTML structure preserved
- `alt` text on profile image
- Reduced motion: respect `prefers-reduced-motion` for any animations

## Verification

1. Run `npm run dev` and check `localhost:3000`
2. Verify full-bleed background covers viewport on desktop and mobile
3. Confirm all social links and product links work
4. Check text readability over the background photo
5. Test responsive layout at 375px, 768px, 1440px widths
6. Verify glassmorphism blur effect renders in Chrome, Safari, Firefox
7. Run `npm run build` to confirm no build errors
