import React from 'react';
import Link from 'next/link';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'onDark' | 'onDarkOutline';

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  external?: boolean;
  className?: string;
}

const variantClass: Record<ButtonVariant, string> = {
  primary: 'btn btn-primary',
  secondary: 'btn btn-secondary',
  ghost: 'btn btn-ghost',
  onDark: 'btn btn-on-dark',
  onDarkOutline: 'btn btn-on-dark-outline',
};

function isAppRoute(href: string) {
  return href.startsWith('/') && !href.startsWith('//');
}

export default function Button({
  href,
  children,
  variant = 'primary',
  external = false,
  className = '',
}: ButtonProps) {
  const classes = `${variantClass[variant]} ${className}`.trim();
  const marker = external ? (
    <span className="link-affordance" aria-hidden="true">
      ↗
    </span>
  ) : null;

  if (external || !isAppRoute(href)) {
    const isHttp = href.startsWith('http');
    return (
      <a
        href={href}
        className={classes}
        {...(isHttp ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {children}
        {marker}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
