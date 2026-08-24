import React from 'react';
import type { Capability } from '@/config/portfolio';

export default function CapabilityItem({ item }: { item: Capability }) {
  return (
    <article className="capability-item">
      <p className="project-number">{item.number}</p>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
    </article>
  );
}
