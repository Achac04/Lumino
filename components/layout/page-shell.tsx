import type { ReactNode } from "react";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { SkipLink } from "@/components/layout/skip-link";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-parchment text-charcoal">
      <SkipLink />
      <SiteHeader />
      <main id="main-content" className="flex-1 scroll-mt-24" tabIndex={-1}>
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}
