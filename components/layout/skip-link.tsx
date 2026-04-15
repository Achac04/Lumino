export function SkipLink() {
  return (
    <a
      href="#main-content"
      className={cnSkip}
    >
      Skip to main content
    </a>
  );
}

const cnSkip =
  "pointer-events-none fixed left-4 top-4 z-[100] -translate-y-20 rounded-sm border border-charcoal/20 bg-parchment px-4 py-2 font-sans text-sm font-medium text-charcoal opacity-0 shadow-soft outline-none transition-all duration-200 focus:pointer-events-auto focus:translate-y-0 focus:opacity-100 focus:ring-2 focus:ring-brass/50";
