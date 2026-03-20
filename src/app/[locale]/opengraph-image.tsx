import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Josue Vargas - Senior Software Engineer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image({ params }: { params: { locale: string } }) {
  const locale = params.locale;
  const isEn = locale === 'en';

  // Fetch logo as base64 for edge runtime
  const logoUrl = new URL('/images/skills/josueLogo.png', 'https://josuevargassosa.com');
  let logoSrc: string | null = null;
  try {
    const logoRes = await fetch(logoUrl);
    if (logoRes.ok) {
      const buf = await logoRes.arrayBuffer();
      logoSrc = `data:image/png;base64,${Buffer.from(buf).toString('base64')}`;
    }
  } catch {
    // Logo fetch failed, will use text fallback
  }

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #0a0a0a 100%)',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        {/* Top accent line */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: 'linear-gradient(90deg, transparent, #ffffff, transparent)',
          }}
        />

        {/* Logo */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '40px',
          }}
        >
          {logoSrc ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={logoSrc}
              alt="Logo"
              width={72}
              height={72}
              style={{ filter: 'invert(1)', objectFit: 'contain' }}
            />
          ) : (
            <div
              style={{
                width: '72px',
                height: '72px',
                borderRadius: '16px',
                background: 'rgba(255,255,255,0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '36px',
                fontWeight: 700,
                color: '#ffffff',
                border: '1px solid rgba(255,255,255,0.2)',
              }}
            >
              JV
            </div>
          )}
        </div>

        {/* Name */}
        <div
          style={{
            fontSize: '64px',
            fontWeight: 700,
            color: '#ffffff',
            lineHeight: 1.1,
            marginBottom: '16px',
            letterSpacing: '-1px',
          }}
        >
          Josue Vargas
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: '32px',
            fontWeight: 600,
            color: 'rgba(255,255,255,0.7)',
            marginBottom: '32px',
          }}
        >
          {isEn ? 'Senior Software Engineer' : 'Ingeniero de Software Senior'}
        </div>

        {/* Description */}
        <div
          style={{
            fontSize: '22px',
            color: 'rgba(255,255,255,0.5)',
            lineHeight: 1.5,
            maxWidth: '800px',
          }}
        >
          {isEn
            ? 'Angular · NestJS · .NET · React · Next.js · Flutter'
            : 'Angular · NestJS · .NET · React · Next.js · Flutter'}
        </div>

        {/* Bottom URL */}
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            right: '80px',
            fontSize: '18px',
            color: 'rgba(255,255,255,0.3)',
          }}
        >
          josuevargassosa.com
        </div>
      </div>
    ),
    { ...size }
  );
}
