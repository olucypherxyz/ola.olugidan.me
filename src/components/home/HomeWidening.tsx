import React from 'react';
import Section from '@/components/ui/Section';
import { homepage } from '@/config/homepage';

export default function HomeWidening() {
  return (
    <Section
      id="widening"
      className="home-statement home-widening"
      title={homepage.home.widening}
      as="h2"
    />
  );
}
