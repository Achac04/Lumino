"use client";

import Link from "next/link";

import { SafeImage } from "@/components/media/safe-image";
import type { Product } from "@/lib/products";
import { formatPrice } from "@/lib/products";
import { cn } from "@/lib/utils";

type ProductCardProps = {
  product: Product;
  className?: string;
  anchorId?: string;
};

export function ProductCard({
  product,
  className,
  anchorId,
}: ProductCardProps) {
  return (
    <Link
      id={anchorId ?? product.id}
      href={`/catalog#${product.id}`}
      className={cn(
        "group relative col-span-12 overflow-hidden rounded-sm border border-charcoal/10 bg-parchment shadow-soft transition-shadow motion-safe:hover:shadow-lift sm:col-span-6 lg:col-span-4",
        className,
      )}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-parchment-deep">
        <SafeImage
          src={product.image}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 28vw, (min-width: 640px) 45vw, 100vw"
          className="object-cover transition duration-700 ease-out motion-safe:group-hover:scale-[1.03]"
        />
        {/* Warm “illuminated” wash on hover */}
        <div
          className={cn(
            "pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 ease-out motion-safe:group-hover:opacity-100",
            "bg-[radial-gradient(circle_at_30%_20%,rgba(255,220,170,0.55),transparent_55%),radial-gradient(circle_at_70%_80%,rgba(255,235,200,0.35),transparent_50%)]",
            "mix-blend-soft-light",
          )}
        />
        <div
          className={cn(
            "pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 motion-safe:group-hover:opacity-100",
            "bg-gradient-to-t from-ink/25 via-transparent to-transparent",
          )}
        />
        <span className="pointer-events-none absolute bottom-4 left-4 rounded-full bg-parchment/90 px-3 py-1 font-sans text-[10px] uppercase tracking-[0.25em] text-charcoal opacity-0 shadow-sm transition-opacity duration-300 motion-safe:group-hover:opacity-100">
          Lit preview
        </span>
      </div>
      <div className="space-y-2 px-5 py-5">
        <h3 className="font-serif text-xl leading-snug text-charcoal">
          {product.name}
        </h3>
        <p className="font-sans text-sm text-charcoal-muted">
          {formatPrice(product.price)}
        </p>
      </div>
    </Link>
  );
}
