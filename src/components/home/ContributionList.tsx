import React from 'react';
import Section from '@/components/ui/Section';
import TextLink from '@/components/ui/TextLink';
import { homepage } from '@/config/homepage';

export default function ContributionList() {
  const { contributions } = homepage;

  return (
    <Section
      id="rooms"
      className="contribution-section"
      eyebrow={contributions.eyebrow}
      title={contributions.intro}
    >
      <ul className="contribution-list">
        {contributions.items.map((item) => (
          <li key={item.label} className="contribution-row">
            <span className="contribution-number">{item.number}</span>
            <div className="contribution-body">
              <p className="contribution-label">{item.label}</p>
              {item.title ? <p className="contribution-title">{item.title}</p> : null}
            </div>
            {'href' in item && item.href ? (
              <TextLink href={item.href} ariaLabel={`Explore ${item.label}`}>
                Explore
              </TextLink>
            ) : (
              <span className="contribution-pending type-metadata">Pending</span>
            )}
          </li>
        ))}
      </ul>
    </Section>
  );
}
