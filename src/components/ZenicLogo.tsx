export function ZenicLogo({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 whitespace-nowrap shrink-0 ${className}`}>
      <svg
        width="28"
        height="28"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0"
      >
        <defs>
          <linearGradient id="zenicLogoBg" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#6366F1" />
            <stop offset="100%" stopColor="#7C3AED" />
          </linearGradient>
        </defs>
        <rect width="32" height="32" rx="8" fill="url(#zenicLogoBg)" />
        <path
          d="M16 7.5L23.5 11.75L16 16L8.5 11.75L16 7.5Z"
          stroke="#FFFFFF"
          strokeWidth="1.65"
          strokeLinejoin="round"
        />
        <path
          d="M8.5 16L16 20.25L23.5 16"
          stroke="#E0E7FF"
          strokeWidth="1.65"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.5 20.25L16 24.5L23.5 20.25"
          stroke="#C7D2FE"
          strokeWidth="1.65"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="font-display text-[15px] sm:text-base font-bold tracking-[0.06em] text-white uppercase">
        Zenic Group
      </span>
    </span>
  );
}
