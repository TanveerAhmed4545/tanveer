import { ImageResponse } from 'next/og';

export const runtime = 'edge';

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 20,
          background: '#0c0c0c',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: 900,
          fontFamily: 'sans-serif',
          borderRadius: '6px',
        }}
      >
        <div style={{ display: 'flex', marginTop: '-2px' }}>
          T<span style={{ color: '#FF5722' }}>.</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
