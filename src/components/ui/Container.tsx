import React from 'react';

export default function Container({
  children,
  className = '',
  as: Tag = 'div',
}: {
  children: React.ReactNode;
  className?: string;
  as?: 'div' | 'section';
}) {
  return <Tag className={`container-site ${className}`.trim()}>{children}</Tag>;
}
