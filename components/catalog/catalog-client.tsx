"use client";

import * as React from "react";

import { GridContainer } from "@/components/layout/grid-container";
import {
  categoryLabels,
  type LampCategory,
  products,
} from "@/lib/products";

import { ProductCard } from "./product-card";

const categories: (LampCategory | "all")[] = [
  "all",
  "pendant",
  "grand",
  "petite",
];

export function CatalogClient() {
  const [filter, setFilter] = React.useState<(typeof categories)[number]>("all");

  const filtered =
    filter === "all"
      ? products
      : products.filter((p) => p.category === filter);

  return (
    <div className="mt-12">
      <GridContainer className="items-center gap-y-6">
        <div
          className="col-span-12 flex flex-wrap gap-2"
          role="tablist"
          aria-label="Filter by category"
        >
          {categories.map((key) => {
            const label =
              key === "all" ? "All pieces" : categoryLabels[key as LampCategory];
            const selected = filter === key;
            return (
              <button
                key={key}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setFilter(key)}
                className={
                  selected
                    ? "rounded-full border border-charcoal bg-charcoal px-4 py-2 font-sans text-xs uppercase tracking-[0.2em] text-parchment"
                    : "rounded-full border border-charcoal/15 bg-transparent px-4 py-2 font-sans text-xs uppercase tracking-[0.2em] text-charcoal-muted transition-colors hover:border-brass hover:text-charcoal"
                }
              >
                {label}
              </button>
            );
          })}
        </div>
      </GridContainer>
      <GridContainer className="mt-10 gap-8">
        {filtered.map((p) => (
          <ProductCard key={p.id} product={p} anchorId={p.id} />
        ))}
      </GridContainer>
    </div>
  );
}
