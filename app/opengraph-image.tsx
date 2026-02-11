import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Hieu Dinh - Software Engineer & Indie Hacker'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          backgroundColor: '#030712',
          color: '#fff',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '24px',
          }}
        >
          <div
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              backgroundColor: '#10b981',
            }}
          />
          <div
            style={{
              height: '1px',
              flex: 1,
              background: 'linear-gradient(to right, rgba(16,185,129,0.5), transparent)',
            }}
          />
        </div>
        <div
          style={{
            fontSize: '72px',
            fontWeight: 700,
            letterSpacing: '-0.025em',
            marginBottom: '16px',
          }}
        >
          Hieu Dinh
        </div>
        <div
          style={{
            fontSize: '28px',
            color: '#10b981',
            fontFamily: 'monospace',
          }}
        >
          $ Software Engineer &amp; Indie Hacker
        </div>
        <div
          style={{
            fontSize: '22px',
            color: '#6b7280',
            fontFamily: 'monospace',
            marginTop: '12px',
          }}
        >
          Compresto &middot; Steps &middot; Marketing Channels &middot; Flowly
        </div>
      </div>
    ),
    { ...size }
  )
}
