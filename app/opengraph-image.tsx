import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Sea Castle Boutique Hotel'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #f5f2ed 0%, #e8dfd2 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'serif',
        }}
      >
        <div
          style={{
            fontSize: 180,
            color: '#3d2817',
            marginBottom: 40,
          }}
        >
          🌴
        </div>
        <div
          style={{
            fontSize: 72,
            fontWeight: 300,
            color: '#3d2817',
            letterSpacing: '0.05em',
            marginBottom: 20,
          }}
        >
          SEA CASTLE
        </div>
        <div
          style={{
            fontSize: 32,
            color: '#6b5544',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
          }}
        >
          Boutique Hotel
        </div>
        <div
          style={{
            fontSize: 24,
            color: '#8b7355',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            marginTop: 30,
          }}
        >
          Camps Bay, Cape Town
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
