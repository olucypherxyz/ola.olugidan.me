export default function OMark({
  className = '',
  size = 18,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      className={`o-mark ${className}`.trim()}
      width={size}
      height={size}
      viewBox="0 0 32 32"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="16" cy="16" r="12.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle className="o-mark-core" cx="16" cy="16" r="3.5" />
    </svg>
  );
}
