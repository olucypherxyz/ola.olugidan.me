import React from 'react';
import OMark from '@/components/OMark';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  as?: 'h2' | 'h1';
  id?: string;
  mark?: boolean;
}

export default function SectionHeader({
  eyebrow,
  title,
  as: Tag = 'h2',
  id,
  mark = false,
}: SectionHeaderProps) {
  return (
    <div className="mb-10 md:mb-14">
      {eyebrow ? (
        <p className="eyebrow mb-3">
          {mark ? <OMark size={12} /> : null}
          {eyebrow}
        </p>
      ) : null}
      <Tag id={id} className="section-heading">
        {title}
      </Tag>
    </div>
  );
}
