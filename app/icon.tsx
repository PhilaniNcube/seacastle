import { ImageResponse } from 'next/og'

// Do NOT add `export const runtime = 'edge'` here. Edge runtime disables static
// generation for metadata routes, turning every favicon request into an Edge
// Function invocation. Without it this is prerendered to a static PNG.
// Image metadata
export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'

// Generate favicon
export default async function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 24,
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
