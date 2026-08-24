import React from 'react';
import EditorialFigure from '@/components/home/EditorialFigure';
import { workEvidenceVisuals } from '@/config/imagery';

export default function WorkProof({ labels }: { labels: readonly string[] }) {
  const items = labels.flatMap((label) => {
    const visual = workEvidenceVisuals[label as keyof typeof workEvidenceVisuals];
    return visual ? [{ label, ...visual }] : [];
  });

  if (items.length === 0) return null;

  return (
    <div className="work-proof">
      {items.map((item) => (
        <EditorialFigure
          key={item.src}
          src={item.src}
          alt={item.alt}
          width={1600}
          height={1000}
          className="work-proof-figure"
        />
      ))}
    </div>
  );
}
