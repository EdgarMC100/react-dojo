interface LogoProps {
  className?: string
}

export function Logo({ className }: LogoProps) {
  return (
    <svg
      viewBox="0 0 40 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      {/* < */}
      <polyline points="7,5 3,12 7,19" />

      {/* React atom — centered at (20,12) */}
      <circle cx="20" cy="12" r="1.4" fill="currentColor" stroke="none" />
      <ellipse cx="20" cy="12" rx="7" ry="2.3" transform="rotate(30 20 12)" />
      <ellipse cx="20" cy="12" rx="7" ry="2.3" transform="rotate(90 20 12)" />
      <ellipse cx="20" cy="12" rx="7" ry="2.3" transform="rotate(150 20 12)" />

      {/* > */}
      <polyline points="33,5 38,12 33,19" />
    </svg>
  )
}
