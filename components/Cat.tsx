export function Cat({ className = "h-10 w-10", label }: { className?: string; label?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      className={className}
      role="img"
      aria-label={label ?? "Рыжий кот — талисман прачечной"}
    >
      <g fill="none" strokeLinecap="round" strokeLinejoin="round">
        {/* tail */}
        <path d="M46 52c8-2 10-12 2-14" stroke="#f59e0b" strokeWidth="4" />
        {/* body */}
        <path
          d="M50 52c0-14-9-22-18-22S14 38 14 52Z"
          fill="#f59e0b"
          stroke="#0abab5"
          strokeWidth="2.5"
        />
        {/* head */}
        <circle cx="32" cy="24" r="13" fill="#f59e0b" stroke="#0abab5" strokeWidth="2.5" />
        {/* ears */}
        <path d="M21 17 18 6l10 7" fill="#f59e0b" stroke="#0abab5" strokeWidth="2.5" />
        <path d="M43 17l3-11-10 7" fill="#f59e0b" stroke="#0abab5" strokeWidth="2.5" />
        {/* inner ears */}
        <path d="M22 14l-2-6 7 5Z" fill="#fbbf24" />
        <path d="M42 14l2-6-7 5Z" fill="#fbbf24" />
        {/* closed happy eyes */}
        <path d="M25 23c-2-2-4-2-6 0" stroke="#0abab5" strokeWidth="2.5" />
        <path d="M39 23c2-2 4-2 6 0" stroke="#0abab5" strokeWidth="2.5" />
        {/* nose & mouth */}
        <path d="M32 27c-1-1-1-1-2 0" stroke="#0abab5" strokeWidth="2.5" />
        <path d="M28 29c2 2 4 2 6 2v-3" stroke="#0abab5" strokeWidth="2.5" />
        {/* whiskers */}
        <path d="M19 24h-7" stroke="#0abab5" strokeWidth="2.5" />
        <path d="M20 27h-7" stroke="#0abab5" strokeWidth="2.5" />
        <path d="M45 24h7" stroke="#0abab5" strokeWidth="2.5" />
        <path d="M44 27h7" stroke="#0abab5" strokeWidth="2.5" />
        {/* ginger stripes on body */}
        <path d="M27 40h10" stroke="#fbbf24" strokeWidth="3" />
        <path d="M29 45h6" stroke="#fbbf24" strokeWidth="3" />
      </g>
    </svg>
  );
}
