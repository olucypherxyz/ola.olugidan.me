import type { MetadataRoute } from 'next';
import { getPublishedThinkingPosts } from '@/config/thinking';
import { site } from '@/config/site';

const paths = [
  '/',
  '/about',
  '/work',
  '/thinking',
  '/connect',
  '/transformation',
  '/homeschool-core',
  '/faith-community',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = paths.map((path) => ({
    url: path === '/' ? site.url : `${site.url}${path}`,
    changeFrequency: 'monthly' as const,
    priority: path === '/' ? 1 : 0.7,
  }));

  const posts = getPublishedThinkingPosts().map((post) => ({
    url: `${site.url}/thinking/${post.slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...pages, ...posts];
}
