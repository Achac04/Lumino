import Link from "next/link";

const items: { id: string; label: string }[] = [
  { id: "overview", label: "Overview" },
  { id: "brief", label: "Brief & scope" },
  { id: "ia", label: "Information architecture" },
  { id: "mood", label: "Mood & references" },
  { id: "typography", label: "Typography" },
  { id: "color", label: "Color system" },
  { id: "layout", label: "Layout & rhythm" },
  { id: "wireframe", label: "Wireframe → hi-fi" },
  { id: "stack", label: "Engineering stack" },
  { id: "accessibility", label: "Accessibility" },
  { id: "performance", label: "Performance" },
  { id: "qa", label: "Quality gates" },
  { id: "scope", label: "Out of scope" },
];

export function CaseStudyNav() {
  return (
    <nav aria-label="Case study sections" className="text-sm">
      <p className="text-xs font-medium uppercase tracking-[0.25em] text-charcoal-muted">
        On this page
      </p>
      <ul className="mt-4 space-y-2 border-l border-charcoal/15 pl-4 font-sans">
        {items.map((item) => (
          <li key={item.id}>
            <Link
              href={`#${item.id}`}
              className="text-charcoal-muted transition-colors hover:text-charcoal"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
