import AnimationProvider from '@/components/Animation/AnimationContext';
import type { Metadata } from 'next';
import localfont from 'next/font/local';
import { assetPath, siteOrigin, siteUrl } from '@/site.config.mjs';

const Baskerville = localfont({
  src: [
    {
      path: '../public/fonts/BaskervilleMTPro-Regular.otf',
      weight: '400',
    },
  ],
  variable: '--font-baskerville',
});

const Franklin = localfont({
  src: '../node_modules/@fontsource/libre-franklin/files/libre-franklin-latin-300-normal.woff2',
  weight: '300',
  style: 'normal',
  variable: '--font-franklin',
});

const shareImage = new URL(assetPath('/opengraph-image.png'), siteOrigin).href;

export const metadata: Metadata = {
  title: 'Meridian Ventures — Project Archive',
  description: 'The 2025 Meridian Ventures website, preserved in McKay Anderson’s project portfolio. Bold ideas and visionary founders.',
  metadataBase: new URL(siteOrigin),
  alternates: { canonical: siteUrl },
  openGraph: {
    title: 'Meridian Ventures — Project Archive',
    description: 'The 2025 Meridian Ventures website, preserved by McKay Anderson.',
    url: siteUrl,
    type: 'website',
    images: [shareImage],
  },
  twitter: { card: 'summary_large_image', images: [shareImage] },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${Baskerville.variable} ${Franklin.variable}`}>
      <body>
        <AnimationProvider>
          {children}
          <div id="modal-root"></div>
        </AnimationProvider>
      </body>
    </html>
  );
}
