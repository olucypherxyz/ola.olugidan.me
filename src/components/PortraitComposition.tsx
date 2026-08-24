import React from 'react';
import Image from 'next/image';

type PortraitSize = 'hero' | 'about';

const ECLIPSE_VIEWBOX = '0 0 400 400';

/** Filled asymmetric disc. No hole, no ring. */
const ECLIPSE_PATH =
  'M26 124C18 52 136 6 236 14C328 22 392 82 396 176C400 270 352 356 258 386C154 418 42 380 16 286C-2 214 10 162 26 124Z';

function OrganicEclipse({ className }: { className: string }) {
  return (
    <svg className={className} viewBox={ECLIPSE_VIEWBOX} aria-hidden="true" focusable="false">
      <path className="organic-eclipse-field" d={ECLIPSE_PATH} />
    </svg>
  );
}

export default function PortraitComposition({
  src,
  alt,
  size = 'hero',
  priority = false,
  className = '',
}: {
  src: string;
  alt: string;
  size?: PortraitSize;
  priority?: boolean;
  className?: string;
}) {
  return (
    <div className={`portrait-stage portrait-stage-${size} ${className}`.trim()}>
      <OrganicEclipse className="organic-eclipse organic-eclipse-back" />

      <div className="portrait-photo">
        <Image
          src={src}
          alt={alt}
          width={794}
          height={1000}
          sizes={size === 'hero' ? '(min-width: 1024px) 34vw, 80vw' : '220px'}
          priority={priority}
          unoptimized
          className="portrait-photo-img"
        />
      </div>
    </div>
  );
}
