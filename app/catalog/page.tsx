import { CatalogClient } from "@/components/catalog/catalog-client";
import { GridContainer } from "@/components/layout/grid-container";

export const metadata = {
  title: "Catalog — Lumina & Lore",
};

export default function CatalogPage() {
  return (
    <div className="py-section">
      <GridContainer>
        <header className="col-span-12 max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-charcoal-muted">
            Catalog
          </p>
          <h1 className="mt-4 font-serif text-4xl text-charcoal sm:text-5xl">
            Luminaries in residence
          </h1>
          <p className="mt-5 font-sans text-sm leading-relaxed text-charcoal-muted sm:text-base">
            Hover any piece to glimpse it illuminated—soft brass bloom against
            pleated silk and blown glass. Filter by scale: roof, tall floor, or
            petite accents for desks and bedside tables.
          </p>
        </header>
      </GridContainer>
      <CatalogClient />
    </div>
  );
}
