import React from 'react';
import Container from '@/components/ui/Container';
import TextLink from '@/components/ui/TextLink';
import { homepage } from '@/config/homepage';

export default function StorySection() {
  const { homeschool } = homepage;

  return (
    <section
      id="homeschool"
      className="section-block story-section"
      aria-labelledby="homeschool-heading"
    >
      <Container>
        <p className="eyebrow">{homeschool.eyebrow}</p>
        <p className="type-metadata story-date">{homeschool.date}</p>
        <h2 id="homeschool-heading" className="section-heading story-title">
          {homeschool.title}
        </h2>
        <div className="story-image-slot" aria-hidden="true" />
        <p className="section-lede">{homeschool.note}</p>
        <TextLink href={homeschool.href}>Homeschool Core</TextLink>
      </Container>
    </section>
  );
}
