import Link from "next/link";

import { GridContainer } from "@/components/layout/grid-container";
import { PortfolioCredit } from "@/components/portfolio/portfolio-credit";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-charcoal/10 bg-parchment-muted/40">
      <GridContainer as="section" className="py-16">
        <div className="col-span-12 flex flex-col gap-10 md:col-span-6">
          <div>
            <p className="font-serif text-2xl text-charcoal">Lumina &amp; Lore</p>
            <p className="mt-3 max-w-sm font-sans text-sm leading-relaxed text-charcoal-muted">
              Curated and restored premium lighting. Each piece is documented,
              rewired to modern safety standards, and finished by hand in our
              Calgary atelier.
            </p>
          </div>
        </div>
        <div className="col-span-12 md:col-span-3 md:col-start-8">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-charcoal-muted">
            Visit
          </p>
          <address className="mt-4 not-italic font-sans text-sm leading-relaxed text-charcoal">
            214 Atelier Lane
            <br />
            Calgary, AB
          </address>
        </div>
        <div className="col-span-12 md:col-span-3">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-charcoal-muted">
            Concierge
          </p>
          <ul className="mt-4 space-y-2 font-sans text-sm text-charcoal">
            <li>
              <Link
                href="/restoration"
                className="transition-colors hover:text-brass-dark"
              >
                Restoration inquiry
              </Link>
            </li>
            <li>
              <Link
                href="/catalog"
                className="transition-colors hover:text-brass-dark"
              >
                Private viewing
              </Link>
            </li>
            <li>
              <Link
                href="/case-study"
                className="transition-colors hover:text-brass-dark"
              >
                Case study
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-span-12 mt-10">
          <PortfolioCredit />
        </div>
        <div className="col-span-12 mt-12 flex flex-col gap-2 border-t border-charcoal/10 pt-8 text-xs text-charcoal-muted sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Lumina &amp; Lore. All rights reserved.</span>
          <span className="uppercase tracking-[0.2em]">Prototype — not a live store</span>
        </div>
      </GridContainer>
    </footer>
  );
}
