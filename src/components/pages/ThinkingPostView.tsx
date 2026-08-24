import React from 'react';
import Section from '@/components/ui/Section';
import TextLink from '@/components/ui/TextLink';
import { site } from '@/config/site';
import type { ThinkingPost } from '@/config/thinking';
import { getRelatedThinkingPosts } from '@/config/thinking';
import { absoluteUrl } from '@/lib/page-metadata';

function formatDate(value: string) {
  const date = new Date(`${value}T00:00:00`);
  if (Number.isNaN(date.getTime())) return value;
  return new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date);
}

export default function ThinkingPostView({ post }: { post: ThinkingPost }) {
  const related = getRelatedThinkingPosts(post.slug);
  const meta = [
    formatDate(post.publishedAt),
    post.updatedAt ? `Updated ${formatDate(post.updatedAt)}` : null,
    post.author,
    post.readingTime,
    post.category,
  ].filter(Boolean);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.seoDescription || post.excerpt,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    author: {
      '@type': 'Person',
      name: post.author,
      url: site.url,
    },
    mainEntityOfPage: absoluteUrl(`/thinking/${post.slug}`),
  };

  return (
    <article className="thinking-page thinking-post">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Section id="thinking-post" className="page-intro thinking-intro" title={post.title} as="h1">
        <p className="type-metadata">{meta.join(' · ')}</p>
        <p className="section-lede">{post.excerpt}</p>
      </Section>
      <Section id="thinking-post-body" className="chapter-text">
        {post.content.map((paragraph) => (
          <p key={paragraph} className="section-lede">
            {paragraph}
          </p>
        ))}
      </Section>
      {related.length > 0 ? (
        <Section id="thinking-related" className="chapter-text">
          <p className="type-metadata">Related</p>
          <ul>
            {related.map((item) => (
              <li key={item.slug}>
                <TextLink href={`/thinking/${item.slug}`}>{item.title}</TextLink>
              </li>
            ))}
          </ul>
        </Section>
      ) : null}
    </article>
  );
}
