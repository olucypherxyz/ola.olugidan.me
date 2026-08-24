import React from 'react';
import Section from '@/components/ui/Section';
import { thinkingPage } from '@/config/pages';

export default function ThinkingView() {
  return (
    <div className="thinking-page">
      <Section
        id="thinking"
        className="page-intro thinking-intro"
        title={thinkingPage.title}
        as="h1"
      >
        <p className="thinking-display">{thinkingPage.display}</p>
        <p className="section-lede">{thinkingPage.opening}</p>
        <p className="section-lede">{thinkingPage.supporting}</p>
      </Section>
    </div>
  );
}
