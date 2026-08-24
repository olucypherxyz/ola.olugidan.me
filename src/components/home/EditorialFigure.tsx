import React from 'react';
import Image from 'next/image';

export default function EditorialFigure({
  src,
  alt,
  width,
  height,
  caption,
  className = '',
  priority = false,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <figure className={`editorial-figure ${className}`.trim()}>
      <div className="editorial-media">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          sizes="(min-width: 1024px) 58vw, 92vw"
          className="editorial-media-img"
        />
      </div>
      {caption ? (
        <figcaption className="type-metadata editorial-caption">{caption}</figcaption>
      ) : null}
    </figure>
  );
}
