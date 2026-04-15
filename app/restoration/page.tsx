import { RestorationForm } from "@/components/restoration/restoration-form";
import { GridContainer } from "@/components/layout/grid-container";

export const metadata = {
  title: "Restoration Inquiry — Lumina & Lore",
};

export default function RestorationPage() {
  return (
    <div className="py-section">
      <GridContainer>
        <header className="col-span-12 max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-charcoal-muted">
            Restoration inquiry
          </p>
          <h1 className="mt-4 font-serif text-4xl text-charcoal sm:text-5xl">
            Tell us about your lamp
          </h1>
          <p className="mt-5 font-sans text-sm leading-relaxed text-charcoal-muted sm:text-base">
            Our maîtres-lumières review each submission by hand. Photographs in
            natural daylight help us assess glass stress, textile fatigue, and
            patina integrity before we propose a treatment plan.
          </p>
        </header>
        <RestorationForm />
      </GridContainer>
    </div>
  );
}
