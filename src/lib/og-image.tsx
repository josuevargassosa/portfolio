/* eslint-disable @next/next/no-img-element */
import {ImageResponse} from 'next/og';

const SITE_URL = 'https://josuevargassosa.com';

export const OG_SIZE = {width: 1200, height: 630};
export const OG_CONTENT_TYPE = 'image/png';

interface RenderOgParams {
  eyebrow: string;
  title: string;
  subtitle: string;
}

async function fetchLogo(): Promise<string | null> {
  try {
    const res = await fetch(new URL('/images/skills/josueLogo.png', SITE_URL));
    if (!res.ok) return null;
    const buf = await res.arrayBuffer();
    return `data:image/png;base64,${Buffer.from(buf).toString('base64')}`;
  } catch {
    return null;
  }
}

export async function renderOgImage({
  eyebrow,
  title,
  subtitle,
}: RenderOgParams) {
  const logoSrc = await fetchLogo();

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
          background:
            'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #0a0a0a 100%)',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '4px',
            background:
              'linear-gradient(90deg, transparent, #ffffff, transparent)',
          }}
        />

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '32px',
          }}
        >
          {logoSrc ? (
            <img
              src={logoSrc}
              alt="Logo"
              width={64}
              height={64}
              style={{filter: 'invert(1)', objectFit: 'contain'}}
            />
          ) : (
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '14px',
                background: 'rgba(255,255,255,0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '30px',
                fontWeight: 700,
                color: '#ffffff',
                border: '1px solid rgba(255,255,255,0.2)',
              }}
            >
              JV
            </div>
          )}
        </div>

        <div
          style={{
            fontSize: '18px',
            fontWeight: 600,
            letterSpacing: '4px',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.5)',
            marginBottom: '20px',
          }}
        >
          {eyebrow}
        </div>

        <div
          style={{
            fontSize: '72px',
            fontWeight: 700,
            color: '#ffffff',
            lineHeight: 1.05,
            marginBottom: '20px',
            letterSpacing: '-1.5px',
          }}
        >
          {title}
        </div>

        <div
          style={{
            fontSize: '26px',
            fontWeight: 500,
            color: 'rgba(255,255,255,0.65)',
            lineHeight: 1.4,
            maxWidth: '900px',
          }}
        >
          {subtitle}
        </div>

        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            right: '80px',
            fontSize: '18px',
            color: 'rgba(255,255,255,0.35)',
          }}
        >
          josuevargassosa.com
        </div>
      </div>
    ),
    {...OG_SIZE}
  );
}
