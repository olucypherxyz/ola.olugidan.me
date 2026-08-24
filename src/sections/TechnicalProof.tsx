import React from 'react';
import SectionHeader from '@/components/SectionHeader';
import { proof } from '@/config/portfolio';

export default function TechnicalProof() {
  return (
    <section id="proof" className="section-block chapter-about" aria-labelledby="proof-heading">
      <div className="container-site">
        <SectionHeader eyebrow="Source" title={proof.heading} as="h2" id="proof-heading" />
        <p className="section-lede">{proof.intro}</p>
        <ul className="proof-list">
          {proof.links.map((link) => (
            <li key={link.href}>
              <a href={link.href} target="_blank" rel="noopener noreferrer">
                {link.label}
              </a>
              <span className="proof-detail">{link.detail}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
