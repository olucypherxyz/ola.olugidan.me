import React from 'react';
import Image from 'next/image';

export default function PortraitBlock({
  src,
  alt,
  width,
  height,
  sizes = '(min-width: 1024px) 28rem, 90vw',
  priority = false,
  className = '',
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  sizes?: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <figure className={`portrait-block ${className}`.trim()}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        sizes={sizes}
        quality={88}
        className="portrait-block-img"
      />
    </figure>
  );
}
