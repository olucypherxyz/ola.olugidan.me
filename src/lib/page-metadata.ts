import type { Metadata } from 'next';
import { homepage } from '@/config/homepage';
import { site } from '@/config/site';

const ogImage = {
  url: homepage.hero.portraitSrc,
  width: homepage.hero.portraitWidth,
  height: homepage.hero.portraitHeight,
  alt: homepage.hero.portraitAlt,
};

export function absoluteUrl(path: string): string {
  return path === '/' ? site.url : `${site.url}${path}`;
}

export function pageMetadata({
  path,
  description,
  title,
}: {
  path: string;
  description: string;
  title?: string;
}): Metadata {
  const url = absoluteUrl(path);
  const ogTitle = title ? `${title} — ${site.title}` : site.title;

  return {
    title: title ? title : { absolute: site.title },
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: 'website',
      url,
      siteName: site.name,
      title: ogTitle,
      description,
      images: [ogImage],
    },
    twitter: {
      card: 'summary_large_image',
      title: ogTitle,
      description,
      images: [homepage.hero.portraitSrc],
    },
  };
}
