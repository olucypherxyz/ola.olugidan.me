import React from 'react';
import Image from 'next/image';

export default function PortraitBlock({
  src,
  alt,
  width,
  height,
  priority = false,
  className = '',
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
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
        sizes="(min-width: 1024px) 42vw, 90vw"
        className="portrait-block-img"
      />
    </figure>
  );
}
