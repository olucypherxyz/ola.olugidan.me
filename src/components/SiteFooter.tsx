'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { footerDomains, primaryNav, site, social } from '@/config/site';
import Container from '@/components/ui/Container';
import TextLink from '@/components/ui/TextLink';

function isActivePath(pathname: string, href: string) {
  if (href === '/') return pathname === '/';
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function SiteFooter() {
  const pathname = usePathname();
  const year = new Date().getFullYear();
  const externals = [
    { label: 'Email', href: `mailto:${social.email}`, external: true },
    { label: 'LinkedIn', href: social.linkedin, external: true },
  ];

  return (
    <footer className="site-footer">
      <Container>
        <p className="footer-identity">{site.name}</p>
        <p className="footer-domains">{footerDomains}</p>
        <div className="footer-grid">
          <nav className="footer-nav" aria-label="Footer">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActivePath(pathname, item.href) ? 'page' : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="footer-social">
            {externals.map((item) => (
              <TextLink
                key={item.label}
                href={item.href}
                external={item.external}
                className="footer-link"
              >
                {item.label}
              </TextLink>
            ))}
          </div>
        </div>
        <p className="footer-copy">
          © {year} {site.name}
        </p>
      </Container>
    </footer>
  );
}
