import React from 'react';
import Section from '@/components/ui/Section';
import TextLink from '@/components/ui/TextLink';
import Reveal from '@/components/Reveal';
import WorkProof from '@/components/pages/WorkProof';
import RoomEnter from '@/components/RoomEnter';
import RoomPager from '@/components/RoomPager';
import { workPage } from '@/config/pages';

function EvidenceLinks({ links }: { links: readonly { label: string; href: string }[] }) {
  return (
    <ul className="work-evidence-links-inline">
      {links.map((link) => (
        <li key={link.href}>
          <TextLink href={link.href} external>
            {link.label}
          </TextLink>
        </li>
      ))}
    </ul>
  );
}

export default function WorkView() {
  const { build, closing } = workPage;

  return (
    <RoomEnter className="work-page">
      <Section id="work-intro" className="page-intro work-intro" title={workPage.title} as="h1">
        <p className="work-display">{workPage.display}</p>
        <p className="section-lede">{workPage.opening}</p>
      </Section>

      <RoomPager pathname="/work" />

      <Reveal className="reveal-sequence">
        <Section id="work-build" className="work-build" eyebrow={build.label} title={build.heading}>
          <div className="work-block">
            <h3 className="work-subheading">{build.products.heading}</h3>
            <p className="section-lede">{build.products.body}</p>
            <EvidenceLinks links={build.products.links} />
            <WorkProof labels={build.products.links.map((link) => link.label)} />
          </div>

          <div className="work-block">
            <h3 className="work-subheading">{build.experiences.heading}</h3>
            <p className="section-lede">{build.experiences.body}</p>
            <EvidenceLinks links={build.experiences.links} />
            <WorkProof labels={build.experiences.links.map((link) => link.label)} />
          </div>

          <div className="work-block">
            <p className="section-lede">{build.boundary.body}</p>
            <TextLink href={build.boundary.link.href} external>
              {build.boundary.link.label}
            </TextLink>
          </div>
        </Section>
      </Reveal>

      <Reveal>
        <Section id="work-close" className="work-close" intro={closing.body}>
          <TextLink href={closing.cta.href}>{closing.cta.label}</TextLink>
        </Section>
      </Reveal>
    </RoomEnter>
  );
}
