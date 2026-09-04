import React from 'react';
import Image from 'next/image';
import type { ImageLayoutRole } from '@/config/imagery';

export default function EditorialFigure({
  src,
  alt,
  width,
  height,
  sizes = '(max-width: 767px) 92vw, (max-width: 1023px) 70vw, 44rem',
  objectPosition,
  layoutRole = 'supporting',
  caption,
  className = '',
  priority = false,
  quality = 85,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  /** Describes rendered CSS width — not intrinsic px */
  sizes?: string;
  objectPosition?: string;
  layoutRole?: ImageLayoutRole;
  caption?: string;
  className?: string;
  priority?: boolean;
  quality?: number;
}) {
  return (
    <figure
      className={`editorial-figure editorial-role-${layoutRole} ${className}`.trim()}
      data-layout-role={layoutRole}
    >
      <div className="editorial-media">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes={sizes}
          priority={priority}
          quality={quality}
          className="editorial-media-img"
          style={objectPosition ? { objectPosition } : undefined}
        />
      </div>
      {caption ? (
        <figcaption className="type-metadata editorial-caption">{caption}</figcaption>
      ) : null}
    </figure>
  );
}
