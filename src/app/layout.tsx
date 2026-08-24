import React from 'react';
import { Instrument_Serif, Manrope, IBM_Plex_Mono } from 'next/font/google';
import type { Metadata, Viewport } from 'next';
import '../styles/tailwind.css';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import { site, social } from '@/config/site';
import { homepage } from '@/config/homepage';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F7F5F2' },
    { media: '(prefers-color-scheme: dark)', color: '#111014' },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s — ${site.title}`,
  },
  authors: [{ name: site.name }],
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/assets/brand/o-mark.svg', type: 'image/svg+xml' },
      { url: '/assets/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/assets/favicon/apple-touch-icon.png' }],
  },
  manifest: '/assets/favicon/site.webmanifest',
};

const instrument = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-display',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
});

const themeInit = `(function(){try{var s=localStorage.getItem('ola-theme');var t=(s==='dark'||s==='light')?s:(window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${instrument.variable} ${manrope.variable} ${plexMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body suppressHydrationWarning>
        <a className="skip-link" href="#content">
          Skip to content
        </a>
        <SiteHeader />
        <main id="content" tabIndex={-1}>
          {children}
        </main>
        <SiteFooter />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'Person',
                  '@id': `${site.url}/#person`,
                  name: site.name,
                  url: site.url,
                  email: `mailto:${social.email}`,
                  image: `${site.url}${homepage.hero.portraitSrc}`,
                  sameAs: [social.linkedin],
                },
                {
                  '@type': 'WebSite',
                  '@id': `${site.url}/#website`,
                  name: site.name,
                  url: site.url,
                  publisher: { '@id': `${site.url}/#person` },
                },
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
