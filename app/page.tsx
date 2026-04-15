import Link from "next/link";

import { HeroImage } from "@/components/home/hero-image";
import { GridContainer } from "@/components/layout/grid-container";
import { ProductCard } from "@/components/catalog/product-card";
import { Button } from "@/components/ui/button";
import { products } from "@/lib/products";

const featured = products.filter((p) => p.category === "petite").slice(0, 3);

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-[85vh]">
        <HeroImage
          src="https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=2000&q=85"
          alt="Restored vintage floor lamp in a softly lit interior"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/75 via-ink/45 to-transparent" />
        <GridContainer className="relative z-10 min-h-[85vh] items-end pb-20 pt-32 md:items-center md:pb-0">
          <div className="col-span-12 md:col-span-7 lg:col-span-6">
            <p className="font-sans text-xs uppercase tracking-[0.4em] text-parchment/80">
              Atelier since 1896
            </p>
            <h1 className="mt-6 font-serif text-4xl leading-[1.05] text-parchment sm:text-5xl lg:text-6xl">
              Lumina &amp; Lore
            </h1>
            <p className="mt-6 max-w-xl font-sans text-base leading-relaxed text-parchment/90 sm:text-lg">
              We resurrect forgotten light—pleated silk, weathered bronze, and
              hand-blown glass—so your rooms carry the quiet gravity of
              history, rewired for today.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild variant="brass" size="lg">
                <Link href="/catalog">View the collection</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-parchment/40 text-parchment hover:border-brass hover:bg-parchment/10 hover:text-parchment"
              >
                <Link href="/restoration">Book a restoration</Link>
              </Button>
            </div>
          </div>
        </GridContainer>
      </section>

      <section className="py-section">
        <GridContainer className="items-start gap-y-12">
          <header className="col-span-12 lg:col-span-5">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-charcoal-muted">
              Services
            </p>
            <h2 className="mt-4 font-serif text-3xl text-charcoal sm:text-4xl">
              Artisanal repair &amp; quiet curation
            </h2>
          </header>
          <div className="col-span-12 grid gap-8 lg:col-span-7 lg:grid-cols-2">
            <article className="rounded-sm border border-charcoal/10 bg-parchment-muted/30 p-8">
              <h3 className="font-serif text-2xl text-charcoal">
                Workshop restoration
              </h3>
              <p className="mt-4 font-sans text-sm leading-relaxed text-charcoal-muted">
                Rewiring to contemporary standards, patina conservation, and
                hand-matched glasswork. Each lamp leaves with provenance notes
                and a twelve-month atelier warranty.
              </p>
            </article>
            <article className="rounded-sm border border-charcoal/10 bg-parchment-muted/30 p-8">
              <h3 className="font-serif text-2xl text-charcoal">
                Curated acquisition
              </h3>
              <p className="mt-4 font-sans text-sm leading-relaxed text-charcoal-muted">
                Sourcing across European estates and North American galleries.
                We favor sculptural silhouettes, tactile materials, and the
                irregular beauty of age.
              </p>
            </article>
          </div>
        </GridContainer>
      </section>

      <section className="border-t border-charcoal/10 bg-parchment-muted/25 py-section">
        <GridContainer>
          <div className="col-span-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-charcoal-muted">
                Featured collection
              </p>
              <h2 className="mt-3 font-serif text-3xl text-charcoal sm:text-4xl">
                Desk &amp; nightstand lamps
              </h2>
            </div>
            <Button asChild variant="outline">
              <Link href="/catalog">Browse full catalog</Link>
            </Button>
          </div>
          <div className="col-span-12 mt-12 grid grid-cols-12 gap-8">
            {featured.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </GridContainer>
      </section>
    </>
  );
}
