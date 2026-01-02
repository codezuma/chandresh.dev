import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const title = searchParams.get('title') || 'Chandresh Patidar';
    const description = searchParams.get('description') || 'Generalist with a strong focus on frontend development, dedicated to building seamless user experiences.';

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#ffffff',
            backgroundImage: 'linear-gradient(to bottom, #fafafa, #ffffff)',
            fontFamily: 'system-ui, -apple-system, sans-serif',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '80px',
              maxWidth: '1200px',
            }}
          >
            <h1
              style={{
                fontSize: '72px',
                fontWeight: '700',
                color: '#18181b',
                marginBottom: '24px',
                textAlign: 'center',
                lineHeight: '1.1',
              }}
            >
              {title}
            </h1>
            {description && (
              <p
                style={{
                  fontSize: '32px',
                  color: '#52525b',
                  textAlign: 'center',
                  lineHeight: '1.5',
                  maxWidth: '900px',
                }}
              >
                {description}
              </p>
            )}
            <div
              style={{
                display: 'flex',
                marginTop: '48px',
                fontSize: '24px',
                color: '#71717a',
                gap: '16px',
              }}
            >
              <span>chandresh.dev</span>
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: unknown) {
    const error = e instanceof Error ? e.message : 'Unknown error';
    console.log(error);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
