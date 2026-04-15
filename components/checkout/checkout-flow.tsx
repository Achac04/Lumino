"use client";

import * as React from "react";
import { SafeImage } from "@/components/media/safe-image";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { formatPrice, products } from "@/lib/products";

const steps = ["Shipping", "Payment", "Review"] as const;

const summaryItems = [
  { productId: "nocturne-desk", qty: 1 },
  { productId: "oriel-pendant", qty: 2 },
];

export function CheckoutFlow() {
  const [step, setStep] = React.useState(0);
  const [sameBilling, setSameBilling] = React.useState(true);

  const lines = summaryItems
    .map((l) => {
      const p = products.find((x) => x.id === l.productId);
      return p ? { ...p, qty: l.qty } : null;
    })
    .filter(Boolean) as (typeof products[number] & { qty: number })[];

  const subtotal = lines.reduce((s, l) => s + l.price * l.qty, 0);
  const shipping = 85;
  const total = subtotal + shipping;

  return (
    <div className="col-span-12 mt-14 grid gap-12 lg:grid-cols-12 lg:gap-10">
      <div className="lg:col-span-7">
        <ol
          className="flex flex-wrap gap-4 border-b border-charcoal/10 pb-6"
          aria-label="Checkout steps"
        >
          {steps.map((label, i) => {
            const active = i === step;
            const complete = i < step;
            return (
              <li
                key={label}
                className="flex items-center gap-2"
                aria-current={active ? "step" : undefined}
              >
                <span
                  className={
                    active
                      ? "flex h-8 w-8 items-center justify-center rounded-full border border-charcoal bg-charcoal font-sans text-xs text-parchment"
                      : complete
                        ? "flex h-8 w-8 items-center justify-center rounded-full border border-brass bg-brass/20 font-sans text-xs text-charcoal"
                        : "flex h-8 w-8 items-center justify-center rounded-full border border-charcoal/20 font-sans text-xs text-charcoal-muted"
                  }
                >
                  {i + 1}
                </span>
                <span
                  className={
                    active
                      ? "font-sans text-xs uppercase tracking-[0.2em] text-charcoal"
                      : "font-sans text-xs uppercase tracking-[0.2em] text-charcoal-muted"
                  }
                >
                  {label}
                </span>
              </li>
            );
          })}
        </ol>

        <div className="mt-10 space-y-8">
          {step === 0 ? (
            <div className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@studio.com"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="first">First name</Label>
                  <Input id="first" autoComplete="given-name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last">Last name</Label>
                  <Input id="last" autoComplete="family-name" />
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="address">Street address</Label>
                  <Input id="address" autoComplete="address-line1" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="city">City</Label>
                  <Input id="city" autoComplete="address-level2" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="postal">Postal code</Label>
                  <Input id="postal" autoComplete="postal-code" />
                </div>
              </div>
              <label className="flex cursor-pointer items-center gap-3">
                <Checkbox
                  id="billing-same"
                  checked={sameBilling}
                  onCheckedChange={(c) => setSameBilling(c)}
                />
                <span className="font-sans text-sm text-charcoal-muted">
                  Billing address matches shipping
                </span>
              </label>
            </div>
          ) : null}

          {step === 1 ? (
            <div className="space-y-6">
              <div className="rounded-sm border border-charcoal/10 bg-parchment-muted/25 p-5">
                <p className="font-serif text-lg text-charcoal">
                  Express payment
                </p>
                <p className="mt-2 font-sans text-xs leading-relaxed text-charcoal-muted">
                  Apple Pay and Google Pay appear here on supported devices.
                  This prototype shows the layout only.
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Button type="button" variant="outline" size="sm">
                    Apple Pay
                  </Button>
                  <Button type="button" variant="outline" size="sm">
                    Google Pay
                  </Button>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="card">Card number</Label>
                <Input
                  id="card"
                  inputMode="numeric"
                  autoComplete="cc-number"
                  placeholder="4242 4242 4242 4242"
                />
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="exp">Expiry</Label>
                  <Input id="exp" placeholder="MM / YY" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cvc">CVC</Label>
                  <Input id="cvc" placeholder="123" />
                </div>
              </div>
            </div>
          ) : null}

          {step === 2 ? (
            <div className="space-y-4 rounded-sm border border-charcoal/10 bg-parchment-muted/20 p-6">
              <p className="font-serif text-xl text-charcoal">
                Review &amp; confirm
              </p>
              <p className="font-sans text-sm leading-relaxed text-charcoal-muted">
                By placing this order you agree to our atelier terms, including
                inspection windows for restored pieces and white-glove delivery
                scheduling.
              </p>
            </div>
          ) : null}

          <div className="flex flex-wrap gap-3 pt-4">
            {step > 0 ? (
              <Button
                type="button"
                variant="outline"
                onClick={() => setStep((s) => Math.max(0, s - 1))}
              >
                Back
              </Button>
            ) : null}
            {step < steps.length - 1 ? (
              <Button type="button" onClick={() => setStep((s) => s + 1)}>
                Continue
              </Button>
            ) : (
              <Button type="button" variant="brass">
                Place order — {formatPrice(total)}
              </Button>
            )}
          </div>
        </div>
      </div>

      <aside className="lg:col-span-4 lg:col-start-9">
        <div className="sticky top-28 rounded-sm border border-charcoal/10 bg-parchment p-6 shadow-soft">
          <h2 className="font-serif text-2xl text-charcoal">Order summary</h2>
          <ul className="mt-6 space-y-4">
            {lines.map((line) => (
              <li key={line.id} className="flex gap-4">
                <div className="relative h-16 w-14 shrink-0 overflow-hidden rounded-sm bg-parchment-deep">
                  <SafeImage
                    src={line.image}
                    alt={line.name}
                    fill
                    sizes="56px"
                    className="object-cover"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate font-serif text-sm text-charcoal">
                    {line.name}
                  </p>
                  <p className="mt-1 font-sans text-xs text-charcoal-muted">
                    Qty {line.qty} · {formatPrice(line.price * line.qty)}
                  </p>
                </div>
              </li>
            ))}
          </ul>
          <dl className="mt-6 space-y-2 border-t border-charcoal/10 pt-4 font-sans text-sm">
            <div className="flex justify-between text-charcoal-muted">
              <dt>Subtotal</dt>
              <dd>{formatPrice(subtotal)}</dd>
            </div>
            <div className="flex justify-between text-charcoal-muted">
              <dt>White-glove shipping</dt>
              <dd>{formatPrice(shipping)}</dd>
            </div>
            <div className="flex justify-between border-t border-charcoal/10 pt-3 font-medium text-charcoal">
              <dt>Total</dt>
              <dd>{formatPrice(total)}</dd>
            </div>
          </dl>
        </div>
      </aside>
    </div>
  );
}
