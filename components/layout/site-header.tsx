import Link from "next/link";

import { CartSheet } from "@/components/cart/cart-sheet";

const links = [
  { href: "/catalog", label: "Catalog" },
  { href: "/restoration", label: "Restoration" },
  { href: "/case-study", label: "Case study" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-charcoal/10 bg-parchment/90 backdrop-blur-md">
      <div className="mx-auto flex min-h-[4.5rem] w-full max-w-12col flex-wrap items-center justify-between gap-x-2 gap-y-3 px-gutter py-3 sm:flex-nowrap sm:py-0">
        <Link href="/" className="group flex flex-col leading-tight">
          <span className="font-serif text-xl tracking-tight text-charcoal transition-colors group-hover:text-brass-dark sm:text-2xl">
            Lumina &amp; Lore
          </span>
          <span className="font-sans text-[10px] uppercase tracking-[0.35em] text-charcoal-muted">
            Lighting atelier
          </span>
        </Link>
        <nav
          className="flex items-center gap-4 sm:gap-8"
          aria-label="Primary"
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-sans text-[10px] uppercase tracking-[0.2em] text-charcoal-muted transition-colors hover:text-charcoal sm:text-xs sm:tracking-[0.25em]"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <CartSheet />
        </div>
      </div>
    </header>
  );
}
