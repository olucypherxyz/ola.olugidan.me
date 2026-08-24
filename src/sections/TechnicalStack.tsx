import React from 'react';
import SectionHeader from '@/components/SectionHeader';
import { stackCategories, stackNote } from '@/config/portfolio';

export default function TechnicalStack() {
  return (
    <section id="stack" className="section-block chapter-system" aria-labelledby="stack-heading">
      <div className="container-site">
        <SectionHeader eyebrow="Tools" title="Technical stack" as="h2" id="stack-heading" />
        <p className="section-lede">{stackNote}</p>
        <div className="stack-grid">
          {stackCategories.map((category) => (
            <div key={category.title} className="stack-category">
              <h3 className="stack-category-title">{category.title}</h3>
              <p className="stack-items">{category.items.join(' · ')}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
