import React from 'react';
import Image from 'next/image';

type PortraitSize = 'hero' | 'about';

export default function PortraitComposition({
  src,
  alt,
  size = 'hero',
  priority = false,
  className = '',
  width = 1000,
  height = 1000,
}: {
  src: string;
  alt: string;
  size?: PortraitSize;
  priority?: boolean;
  className?: string;
  width?: number;
  height?: number;
}) {
  return (
    <div className={`portrait-stage portrait-stage-${size} ${className}`.trim()}>
      <div className="portrait-photo">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes={size === 'hero' ? '(min-width: 1024px) 34vw, 80vw' : '220px'}
          priority={priority}
          unoptimized
          className="portrait-photo-img"
        />
      </div>
    </div>
  );
}
