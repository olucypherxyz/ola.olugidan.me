import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ThinkingPostView from '@/components/pages/ThinkingPostView';
import { getPublishedThinkingPosts, getThinkingPostBySlug } from '@/config/thinking';
import { pageMetadata } from '@/lib/page-metadata';

export const dynamicParams = false;

export function generateStaticParams() {
  return getPublishedThinkingPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getThinkingPostBySlug(slug);
  if (!post) return {};

  const meta = pageMetadata({
    path: `/thinking/${post.slug}`,
    title: post.seoTitle || post.title,
    description: post.seoDescription || post.excerpt,
  });

  return {
    ...meta,
    openGraph: {
      ...meta.openGraph,
      type: 'article',
    },
  };
}

export default async function ThinkingPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getThinkingPostBySlug(slug);
  if (!post) notFound();

  return <ThinkingPostView post={post} />;
}
