import React from 'react';
import Link from 'next/link';

interface TextLinkProps {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  ariaLabel?: string;
  affordance?: boolean;
  className?: string;
}

export default function TextLink({
  href,
  children,
  external = false,
  ariaLabel,
  affordance = true,
  className = '',
}: TextLinkProps) {
  const classes = `text-link ${className}`.trim();
  const marker = external ? '↗' : '→';
  const extras = {
    ...(ariaLabel ? { 'aria-label': ariaLabel } : {}),
  };

  const body = (
    <>
      {children}
      {affordance ? (
        <span className="link-affordance" aria-hidden="true">
          {marker}
        </span>
      ) : null}
    </>
  );

  if (external) {
    const isHttp = href.startsWith('http');
    return (
      <a
        href={href}
        className={classes}
        {...(isHttp ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...extras}
      >
        {body}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...extras}>
      {body}
    </Link>
  );
}
