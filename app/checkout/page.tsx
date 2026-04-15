import { CheckoutFlow } from "@/components/checkout/checkout-flow";
import { GridContainer } from "@/components/layout/grid-container";

export const metadata = {
  title: "Checkout — Lumina & Lore",
};

export default function CheckoutPage() {
  return (
    <div className="py-section">
      <GridContainer>
        <header className="col-span-12 max-w-xl">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-charcoal-muted">
            Secure checkout
          </p>
          <h1 className="mt-4 font-serif text-4xl text-charcoal">
            Complete your commission
          </h1>
          <p className="mt-4 font-sans text-sm leading-relaxed text-charcoal-muted">
            White-label processing through our trusted payment partners. Your
            details are encrypted in transit and never stored on this
            prototype.
          </p>
        </header>
        <CheckoutFlow />
      </GridContainer>
    </div>
  );
}
