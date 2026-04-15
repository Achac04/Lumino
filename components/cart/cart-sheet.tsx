"use client";

import * as React from "react";
import Link from "next/link";
import { ShoppingBag } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { SafeImage } from "@/components/media/safe-image";
import { formatPrice, products } from "@/lib/products";

const demoLineItems = [
  { productId: "nocturne-desk", qty: 1 },
  { productId: "oriel-pendant", qty: 2 },
];

export function CartSheet() {
  const [open, setOpen] = React.useState(false);
  const [insurance, setInsurance] = React.useState(false);
  const [quantities, setQuantities] = React.useState<Record<string, number>>(
    () =>
      Object.fromEntries(demoLineItems.map((l) => [l.productId, l.qty])) as Record<
        string,
        number
      >,
  );

  const lines = demoLineItems
    .map((l) => {
      const p = products.find((x) => x.id === l.productId);
      if (!p) return null;
      const qty = quantities[p.id] ?? 1;
      return { ...p, qty };
    })
    .filter(Boolean) as (typeof products[number] & { qty: number })[];

  const subtotal = lines.reduce((s, l) => s + l.price * l.qty, 0);
  const insuranceFee = insurance ? 120 : 0;
  const total = subtotal + insuranceFee;

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="sm" className="border-charcoal/20">
          <ShoppingBag className="h-4 w-4" aria-hidden />
          <span className="hidden sm:inline">Cart</span>
          <span className="rounded-full bg-charcoal px-2 py-0.5 text-[10px] font-medium text-parchment">
            {lines.reduce((n, l) => n + l.qty, 0)}
          </span>
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <SheetHeader>
          <SheetTitle>Your selection</SheetTitle>
          <p className="font-sans text-sm text-charcoal-muted">
            Pieces are held for forty-eight hours while we prepare your
            restoration notes.
          </p>
        </SheetHeader>
        <div className="flex-1 space-y-6 overflow-y-auto px-6 py-6">
          {lines.map((line) => (
            <div
              key={line.id}
              className="grid grid-cols-[88px_1fr] gap-4 border-b border-charcoal/10 pb-6 last:border-0 last:pb-0"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-parchment-deep">
                <SafeImage
                  src={line.image}
                  alt={line.name}
                  fill
                  sizes="88px"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-3">
                <div>
                  <p className="font-serif text-lg leading-snug text-charcoal">
                    {line.name}
                  </p>
                  <p className="mt-1 font-sans text-sm text-charcoal-muted">
                    {formatPrice(line.price)} each
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Label htmlFor={`qty-${line.id}`} className="sr-only">
                    Quantity
                  </Label>
                  <Input
                    id={`qty-${line.id}`}
                    type="number"
                    min={1}
                    max={9}
                    value={quantities[line.id] ?? 1}
                    onChange={(e) =>
                      setQuantities((q) => ({
                        ...q,
                        [line.id]: Math.min(
                          9,
                          Math.max(1, Number(e.target.value) || 1),
                        ),
                      }))
                    }
                    className="h-9 w-16 text-center text-sm"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="border-t border-charcoal/10 bg-parchment-muted/30 px-6 py-6">
          <label
            htmlFor="insurance"
            className="flex cursor-pointer items-start gap-3 rounded-sm border border-charcoal/10 bg-parchment px-4 py-4"
          >
            <span className="mt-1">
              <Checkbox
                id="insurance"
                checked={insurance}
                onCheckedChange={(c) => setInsurance(c)}
              />
            </span>
            <span>
              <span className="font-serif text-base text-charcoal">
                Restoration insurance
              </span>
              <span className="mt-1 block font-sans text-xs leading-relaxed text-charcoal-muted">
                Covers return shipping for workshop adjustments within twelve
                months of delivery.
              </span>
              <span className="mt-2 block font-sans text-xs uppercase tracking-[0.2em] text-brass-dark">
                + {formatPrice(120)} if selected
              </span>
            </span>
          </label>
          <dl className="mt-6 space-y-2 font-sans text-sm">
            <div className="flex justify-between text-charcoal-muted">
              <dt>Subtotal</dt>
              <dd>{formatPrice(subtotal)}</dd>
            </div>
            {insurance ? (
              <div className="flex justify-between text-charcoal-muted">
                <dt>Insurance</dt>
                <dd>{formatPrice(insuranceFee)}</dd>
              </div>
            ) : null}
            <div className="flex justify-between border-t border-charcoal/10 pt-3 font-medium text-charcoal">
              <dt>Estimated total</dt>
              <dd>{formatPrice(total)}</dd>
            </div>
          </dl>
          <Button
            asChild
            className="mt-6 w-full"
            onClick={() => setOpen(false)}
          >
            <Link href="/checkout">Proceed to checkout</Link>
          </Button>
          <Button
            asChild
            variant="ghost"
            className="mt-2 w-full text-charcoal-muted"
          >
            <Link href="/catalog" onClick={() => setOpen(false)}>
              Continue browsing
            </Link>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
