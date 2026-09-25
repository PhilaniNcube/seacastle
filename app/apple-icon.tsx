import { ImageResponse } from 'next/og'

// Do NOT add `export const runtime = 'edge'` here. Edge runtime disables static
// generation for metadata routes, turning every apple-touch-icon request into an
// Edge Function invocation. Without it this is prerendered to a static PNG.
// Image metadata
export const size = {
  width: 180,
  height: 180,
}
export const contentType = 'image/png'

// Generate Apple touch icon
export default async function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 120,
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#3d2817',
          fontFamily: 'serif',
        }}
      >
        🌴
      </div>
    ),
    {
      ...size,
    }
  )
}
