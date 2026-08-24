import React from 'react';
import Section from '@/components/ui/Section';

export default function PendingPage({
  title,
  note = 'This page is being prepared. Content will be added from the locked copy, not invented here.',
}: {
  title: string;
  note?: string;
}) {
  return (
    <Section
      className="pending-page"
      eyebrow="Content pending"
      title={title}
      as="h1"
      intro={note}
    />
  );
}
