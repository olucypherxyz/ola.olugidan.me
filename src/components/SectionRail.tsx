'use client';

import React, { useEffect, useState } from 'react';
import { getActiveSectionId } from '@/lib/active-section';

const SECTIONS = [
  { id: 'work', n: '01' },
  { id: 'experience', n: '02' },
  { id: 'capabilities', n: '03' },
  { id: 'stack', n: '04' },
  { id: 'about', n: '05' },
  { id: 'proof', n: '06' },
  { id: 'contact', n: '07' },
] as const;

export default function SectionRail() {
  const [active, setActive] = useState('');

  useEffect(() => {
    const ids = ['intro', ...SECTIONS.map((s) => s.id)];
    const onScroll = () => {
      const id = getActiveSectionId(ids);
      setActive(id === 'intro' ? '' : id);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className="section-rail" aria-label="Section position">
      {SECTIONS.map((s) => (
        <a
          key={s.id}
          href={`#${s.id}`}
          className={active === s.id ? 'is-active' : ''}
          aria-current={active === s.id ? 'location' : undefined}
        >
          <span className="section-rail-dot" aria-hidden="true" />
          {s.n}
        </a>
      ))}
    </nav>
  );
}
