export function Mark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 40" aria-hidden className={className} fill="currentColor">
      <path d="M24 0 46 34h-9L24 12 11 34H2L24 0Z" />
      <path d="M15 40h18l-9-14-9 14Z" opacity="0.9" />
    </svg>
  );
}
