import { site } from '@/config/site';

export type ThinkingPost = {
  slug: string;
  title: string;
  excerpt: string;
  content: readonly string[];
  publishedAt: string;
  updatedAt?: string;
  author: string;
  category?: string;
  tags?: readonly string[];
  readingTime?: string;
  featured?: boolean;
  coverImage?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  seoTitle?: string;
  seoDescription?: string;
};

/**
 * Production Thinking posts. Empty until a genuine piece is ready to publish.
 * Do not add placeholder or sample records.
 */
export const thinkingPosts: readonly ThinkingPost[] = [];

export function getPublishedThinkingPosts(): ThinkingPost[] {
  return thinkingPosts.filter((post) => Boolean(post.publishedAt && post.slug && post.title));
}

export function getThinkingPostBySlug(slug: string): ThinkingPost | undefined {
  return getPublishedThinkingPosts().find((post) => post.slug === slug);
}

export function getRelatedThinkingPosts(slug: string): ThinkingPost[] {
  const current = getThinkingPostBySlug(slug);
  if (!current?.category) return [];

  return getPublishedThinkingPosts().filter(
    (post) => post.slug !== slug && post.category === current.category
  );
}

export const thinkingAuthor = site.name;
