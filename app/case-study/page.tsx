import type { Metadata } from "next";

import { CaseStudyContent } from "@/components/case-study/case-study-content";
import { CaseStudyNav } from "@/components/case-study/case-study-nav";
import { GridContainer } from "@/components/layout/grid-container";
import { portfolio } from "@/config/portfolio";

export const metadata: Metadata = {
  title: "Case study",
  description: `Design and engineering documentation for Lumina & Lore — a portfolio prototype by ${portfolio.displayName}.`,
  openGraph: {
    title: "Case study — Lumina & Lore",
    description:
      "IA, visual system, accessibility, performance methodology, and honest scope notes.",
  },
};

export default function CaseStudyPage() {
  return (
    <div className="py-section">
      <GridContainer>
        <header className="col-span-12 max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-charcoal-muted">
            Case study
          </p>
          <h1 className="mt-4 font-serif text-4xl text-charcoal sm:text-5xl">
            Lumina &amp; Lore
          </h1>
          <p className="mt-5 text-base leading-relaxed text-charcoal-muted sm:text-lg">
            How a fictional lighting atelier became a deploy-ready surface for
            product UI, interaction design, and front-end craft — written for
            hiring managers who skim, then dig.
          </p>
        </header>

        <div className="col-span-12 mt-12 lg:grid lg:grid-cols-12 lg:gap-10">
          <aside className="hidden lg:col-span-3 lg:block">
            <div className="sticky top-28">
              <CaseStudyNav />
            </div>
          </aside>
          <article className="col-span-12 mt-12 max-w-3xl lg:col-span-8 lg:col-start-5 lg:mt-0 lg:max-w-none">
            <div className="lg:hidden">
              <CaseStudyNav />
            </div>
            <div className="mt-12 border-t border-charcoal/10 pt-12 lg:mt-0 lg:border-0 lg:pt-0">
              <CaseStudyContent />
            </div>
          </article>
        </div>
      </GridContainer>
    </div>
  );
}
