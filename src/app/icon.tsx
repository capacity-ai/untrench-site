import { ImageResponse } from 'next/og';

export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#1d4175',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 5,
        }}
      >
        <span
          style={{
            color: '#f1ece0',
            fontSize: 22,
            fontWeight: 600,
            fontFamily: 'serif',
            letterSpacing: '-0.04em',
            marginTop: 1,
          }}
        >
          U
        </span>
      </div>
    ),
    { ...size }
  );
}
