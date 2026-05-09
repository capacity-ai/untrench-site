export function NailMark({ size = 22 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="National AI Lab"
    >
      {/* Top triangle (pointing down) */}
      <polygon points="37.5,37.5 62.5,37.5 50,50" fill="#9BB463" />
      {/* Bottom triangle (pointing up) */}
      <polygon points="22,78 78,78 61,61 39,61" fill="#9BB463" />
      {/* Connecting lines forming X + top/bottom bars */}
      <g stroke="#5E7434" strokeWidth="2.5" strokeLinecap="square">
        <line x1="22" y1="22" x2="78" y2="22" />
        <line x1="22" y1="22" x2="78" y2="78" />
        <line x1="22" y1="78" x2="78" y2="22" />
        <line x1="22" y1="78" x2="78" y2="78" />
      </g>
      {/* Corner diamonds */}
      <g fill="#5E7434">
        <rect x="12" y="12" width="20" height="20" transform="rotate(45 22 22)" />
        <rect x="68" y="12" width="20" height="20" transform="rotate(45 78 22)" />
        <rect x="68" y="68" width="20" height="20" transform="rotate(45 78 78)" />
        <rect x="12" y="68" width="20" height="20" transform="rotate(45 22 78)" />
      </g>
      {/* Center dot */}
      <circle cx="50" cy="56.5" r="2.6" fill="#5E7434" />
    </svg>
  );
}
