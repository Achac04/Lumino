import Link from "next/link";

import { portfolio } from "@/config/portfolio";

export function PortfolioCredit() {
  return (
    <div className="rounded-sm border border-charcoal/10 bg-parchment p-5">
      <p className="text-xs font-medium uppercase tracking-[0.25em] text-charcoal-muted">
        Project author
      </p>
      <p className="mt-2 font-serif text-xl text-charcoal">
        {portfolio.displayName}
      </p>
      <p className="mt-1 font-sans text-sm text-charcoal-muted">{portfolio.role}</p>
      <p className="mt-3 max-w-md font-sans text-sm leading-relaxed text-charcoal-muted">
        {portfolio.tagline}
      </p>
      <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2 font-sans text-sm">
        <li>
          <a
            href={portfolio.email}
            className="text-brass-dark underline-offset-4 transition-colors hover:text-charcoal hover:underline"
          >
            Email
          </a>
        </li>
        <li>
          <a
            href={portfolio.links.github}
            target="_blank"
            rel="noreferrer"
            className="text-brass-dark underline-offset-4 transition-colors hover:text-charcoal hover:underline"
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            href={portfolio.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-brass-dark underline-offset-4 transition-colors hover:text-charcoal hover:underline"
          >
            LinkedIn
          </a>
        </li>
        {portfolio.links.personalSite ? (
          <li>
            <a
              href={portfolio.links.personalSite}
              target="_blank"
              rel="noreferrer"
              className="text-brass-dark underline-offset-4 transition-colors hover:text-charcoal hover:underline"
            >
              Portfolio
            </a>
          </li>
        ) : null}
        <li>
          <Link
            href="/case-study"
            className="font-medium text-charcoal underline-offset-4 hover:underline"
          >
            Case study
          </Link>
        </li>
      </ul>
    </div>
  );
}
