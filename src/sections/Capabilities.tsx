import React from 'react';
import SectionHeader from '@/components/SectionHeader';
import CapabilityItem from '@/components/CapabilityItem';
import { capabilities } from '@/config/portfolio';

export default function Capabilities() {
  return (
    <section
      id="capabilities"
      className="section-block chapter-system"
      aria-labelledby="capabilities-heading"
    >
      <div className="container-site">
        <SectionHeader eyebrow="Practice" title="Capabilities" as="h2" id="capabilities-heading" />
        <div className="capability-grid">
          {capabilities.map((item) => (
            <CapabilityItem key={item.number} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
