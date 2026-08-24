import type { Metadata } from 'next';
import React from 'react';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Not found',
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="not-found">
      <p className="eyebrow">Error</p>
      <h1>404</h1>
      <p>This page doesn&rsquo;t exist.</p>
      <div className="hero-actions" style={{ justifyContent: 'center' }}>
        <Button href="/" variant="secondary">
          Home
        </Button>
      </div>
    </div>
  );
}
