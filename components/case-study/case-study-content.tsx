import { portfolio } from "@/config/portfolio";

const tableClass =
  "w-full border-collapse text-left text-sm text-charcoal [&_th]:border [&_th]:border-charcoal/15 [&_th]:bg-parchment-muted/40 [&_th]:px-3 [&_th]:py-2 [&_th]:font-sans [&_th]:font-medium [&_td]:border [&_td]:border-charcoal/15 [&_td]:px-3 [&_td]:py-2";

export function CaseStudyContent() {
  return (
    <div className="space-y-20 font-sans text-charcoal">
      <section id="overview" className="scroll-mt-28">
        <h2 className="font-serif text-3xl text-charcoal">Overview</h2>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-charcoal-muted">
          <strong className="font-medium text-charcoal">Lumina &amp; Lore</strong>{" "}
          is a fictional boutique lighting brand built as a portfolio-grade
          prototype: five primary flows (landing, catalog, cart, checkout,
          restoration inquiry) with a cohesive antique-minimal visual language,
          owned UI primitives, and deploy-ready Next.js architecture.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {[
            { k: "Role", v: `${portfolio.displayName} — UI, UX, front-end` },
            { k: "Timeline", v: "Concept → build (single iteration)" },
            { k: "Live stack", v: "Next.js 15 · Tailwind · Radix" },
          ].map((box) => (
            <div
              key={box.k}
              className="rounded-sm border border-charcoal/10 bg-parchment-muted/25 p-4"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-charcoal-muted">
                {box.k}
              </p>
              <p className="mt-2 text-sm leading-snug text-charcoal">{box.v}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="brief" className="scroll-mt-28">
        <h2 className="font-serif text-3xl text-charcoal">Brief &amp; scope</h2>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-charcoal-muted">
          Curate a high-end lighting experience that feels editorial, not
          template-driven: generous whitespace, tactile photography direction,
          and flows that mirror real commerce (discovery → cart → payment)
          without implying a functioning store.
        </p>
        <ul className="mt-6 max-w-3xl list-disc space-y-2 pl-5 text-charcoal-muted">
          <li>Hero storytelling with services and featured collection.</li>
          <li>Filterable catalog with category semantics (roof / floor / petite).</li>
          <li>
            Cart as a slide-over panel with line items, quantity, and an
            optional add-on (restoration insurance).
          </li>
          <li>Multi-step checkout with sticky order summary.</li>
          <li>Restoration inquiry with structured fields and photo upload.</li>
        </ul>
      </section>

      <section id="ia" className="scroll-mt-28">
        <h2 className="font-serif text-3xl text-charcoal">
          Information architecture
        </h2>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-charcoal-muted">
          Routes are shallow and predictable so recruiters can skim the whole
          surface in under a minute, while the case study documents intent
          behind each destination.
        </p>
        <div className="mt-6 overflow-x-auto">
          <table className={tableClass}>
            <thead>
              <tr>
                <th>Route</th>
                <th>Job to be done</th>
                <th>Primary UI</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-mono text-xs">/</td>
                <td>Position the atelier; route to catalog or restoration.</td>
                <td>Hero, services, featured grid.</td>
              </tr>
              <tr>
                <td className="font-mono text-xs">/catalog</td>
                <td>Compare inventory by scale; hover for “lit” preview.</td>
                <td>Filter chips, responsive product cards.</td>
              </tr>
              <tr>
                <td className="font-mono text-xs">Cart (sheet)</td>
                <td>Review selection; toggle insurance; proceed.</td>
                <td>Radix Dialog sheet, form controls.</td>
              </tr>
              <tr>
                <td className="font-mono text-xs">/checkout</td>
                <td>Complete purchase narrative in discrete steps.</td>
                <td>Step indicator, shipping &amp; payment fields, summary.</td>
              </tr>
              <tr>
                <td className="font-mono text-xs">/restoration</td>
                <td>Capture workshop inquiry with evidence (photos).</td>
                <td>Long-form fields, file input, validation affordances.</td>
              </tr>
              <tr>
                <td className="font-mono text-xs">/case-study</td>
                <td>Explain design and engineering decisions (this page).</td>
                <td>Long-form documentation, tables, process notes.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="mood" className="scroll-mt-28">
        <h2 className="font-serif text-3xl text-charcoal">Mood &amp; references</h2>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-charcoal-muted">
          Direction: <em>antique minimalism</em> — historical warmth without
          ornament clutter. References included European atelier photography,
          museum lighting catalogs, and contemporary quiet-luxury e-commerce
          (single-column rhythm, restrained chrome, no neon accents).
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Material truth",
              body: "Imagery emphasizes pleated silk, patinated brass, and blown glass so product cards read tactile even on small screens.",
            },
            {
              title: "Light as subject",
              body: "Hover states suggest illumination (soft radial warmth) instead of gimmicky motion — reinforcing the product story.",
            },
            {
              title: "Trust cues",
              body: "Copy and layout borrow from concierge retail: restoration notes, insurance add-on, white-glove shipping language.",
            },
          ].map((c) => (
            <div
              key={c.title}
              className="rounded-sm border border-charcoal/10 bg-parchment p-5"
            >
              <h3 className="font-serif text-xl text-charcoal">{c.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-charcoal-muted">
                {c.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="typography" className="scroll-mt-28">
        <h2 className="font-serif text-3xl text-charcoal">Typography</h2>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-charcoal-muted">
          High-contrast serif headings establish heritage; a geometric sans
          (DM Sans) handles UI chrome and dense tables. Fonts self-host via{" "}
          <code className="rounded bg-parchment-muted px-1 font-mono text-xs">
            next/font
          </code>{" "}
          to avoid layout shift and keep Lighthouse typography scores clean.
        </p>
        <div className="mt-8 overflow-x-auto">
          <table className={tableClass}>
            <thead>
              <tr>
                <th>Token</th>
                <th>Family</th>
                <th>Use</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Display / H1</td>
                <td>Cormorant Garamond 600</td>
                <td>Hero, page titles</td>
              </tr>
              <tr>
                <td>Section / H2</td>
                <td>Cormorant Garamond 500</td>
                <td>Major section breaks</td>
              </tr>
              <tr>
                <td>Card title / H3</td>
                <td>Cormorant Garamond 500</td>
                <td>Product names, sheet titles</td>
              </tr>
              <tr>
                <td>UI / body</td>
                <td>DM Sans 400–500</td>
                <td>Forms, navigation, tables</td>
              </tr>
              <tr>
                <td>Overline</td>
                <td>DM Sans 500, +0.2–0.35em tracking</td>
                <td>Labels, metadata, legal</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-8 space-y-3 rounded-sm border border-charcoal/10 bg-parchment-muted/20 p-6">
          <p className="font-serif text-4xl leading-tight">Lumina &amp; Lore</p>
          <p className="font-serif text-3xl">Curated lighting</p>
          <p className="font-sans text-base leading-relaxed text-charcoal-muted">
            Body copy targets ~1.55 line height for long-form readability on
            parchment backgrounds, with charcoal softened to a muted token for
            secondary paragraphs.
          </p>
        </div>
      </section>

      <section id="color" className="scroll-mt-28">
        <h2 className="font-serif text-3xl text-charcoal">Color system</h2>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-charcoal-muted">
          A tight token set keeps Tailwind usage consistent and makes the
          antique palette enforceable in code review: parchment surfaces,
          charcoal type, brass accents, ink for deep overlays.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          {(
            [
              { name: "Parchment", hex: "#F4EFE6", token: "bg-parchment" },
              { name: "Charcoal", hex: "#2C2A26", token: "bg-charcoal" },
              { name: "Brass", hex: "#B8A06E", token: "bg-brass" },
              { name: "Ink", hex: "#1A1917", token: "bg-ink" },
            ] as const
          ).map((sw) => (
            <div key={sw.name} className="flex items-center gap-3">
              <div
                className={`h-14 w-14 rounded-sm border border-charcoal/15 shadow-inner ${sw.token}`}
                aria-hidden
              />
              <div>
                <p className="text-sm font-medium text-charcoal">{sw.name}</p>
                <p className="font-mono text-xs text-charcoal-muted">{sw.hex}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="layout" className="scroll-mt-28">
        <h2 className="font-serif text-3xl text-charcoal">Layout &amp; rhythm</h2>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-charcoal-muted">
          A <strong className="font-medium text-charcoal">12-column grid</strong>{" "}
          with CSS variables for gutter and max width keeps sections aligned
          across breakpoints. Vertical rhythm uses{" "}
          <code className="rounded bg-parchment-muted px-1 font-mono text-xs">
            py-section
          </code>{" "}
          spacing tokens so pages breathe consistently.
        </p>
      </section>

      <section id="wireframe" className="scroll-mt-28">
        <h2 className="font-serif text-3xl text-charcoal">Wireframe → hi-fi</h2>
        <ol className="mt-6 max-w-3xl list-decimal space-y-4 pl-5 text-charcoal-muted">
          <li>
            <span className="text-charcoal">Blockframe</span> — mapped hero,
            services, and featured modules on a single column for mobile-first
            priority.
          </li>
          <li>
            <span className="text-charcoal">Low-fi</span> — grayscale wireframes
            for catalog filters, sheet cart, and checkout steps to validate
            density before color.
          </li>
          <li>
            <span className="text-charcoal">Visual design</span> — applied
            parchment/brass palette, serif/sans pairing, and photography
            treatment notes (directional light, texture-forward crops).
          </li>
          <li>
            <span className="text-charcoal">Hi-fi in code</span> — implemented
            directly in Next.js so design tokens and production components stay
            in sync (no hand-off drift).
          </li>
        </ol>
        <div
          className="mt-10 grid max-w-2xl grid-cols-6 gap-2 rounded-sm border border-dashed border-charcoal/20 bg-parchment-muted/20 p-4 font-mono text-[10px] uppercase tracking-widest text-charcoal-muted"
          aria-hidden
        >
          <div className="col-span-6 h-10 rounded border border-charcoal/20 bg-parchment/80" />
          <div className="col-span-3 h-24 rounded border border-charcoal/20 bg-parchment/80" />
          <div className="col-span-3 h-24 rounded border border-charcoal/20 bg-parchment/80" />
          <div className="col-span-2 h-16 rounded border border-charcoal/20 bg-parchment/80" />
          <div className="col-span-2 h-16 rounded border border-charcoal/20 bg-parchment/80" />
          <div className="col-span-2 h-16 rounded border border-charcoal/20 bg-parchment/80" />
        </div>
        <p className="mt-4 max-w-2xl text-xs text-charcoal-muted">
          Abstract wireframe strip: hero band, two-up content blocks, three-up
          cards — mirrors the landing composition without using placeholder
          content.
        </p>
      </section>

      <section id="stack" className="scroll-mt-28">
        <h2 className="font-serif text-3xl text-charcoal">Engineering stack</h2>
        <div className="mt-6 overflow-x-auto">
          <table className={tableClass}>
            <thead>
              <tr>
                <th>Layer</th>
                <th>Choice</th>
                <th>Rationale</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Framework</td>
                <td>Next.js (App Router)</td>
                <td>
                  Static generation for marketing surfaces; familiar deploy path
                  on Vercel.
                </td>
              </tr>
              <tr>
                <td>Styling</td>
                <td>Tailwind CSS</td>
                <td>
                  Tokenized spacing/color; rapid iteration on antique minimal
                  details.
                </td>
              </tr>
              <tr>
                <td>Interaction</td>
                <td>Radix primitives</td>
                <td>
                  Sheet cart: focus management, scroll lock, and ESC behavior
                  without bespoke JS.
                </td>
              </tr>
              <tr>
                <td>Media</td>
                <td>next/image</td>
                <td>
                  Automatic resizing; paired with a client fallback when remote
                  art 404s.
                </td>
              </tr>
              <tr>
                <td>Content</td>
                <td>Typed product module</td>
                <td>
                  Single source of truth for catalog, cart demo lines, and
                  checkout summary.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="accessibility" className="scroll-mt-28">
        <h2 className="font-serif text-3xl text-charcoal">Accessibility</h2>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-charcoal-muted">
          Goal: keyboard-first parity with pointer UI and respectful motion. The
          table below maps concrete implementation work (not aspirations).
        </p>
        <div className="mt-8 overflow-x-auto">
          <table className={tableClass}>
            <thead>
              <tr>
                <th>Area</th>
                <th>Implementation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Skip link</td>
                <td>
                  First focusable control jumps to <code className="font-mono text-xs">#main-content</code>.
                </td>
              </tr>
              <tr>
                <td>Landmarks</td>
                <td>
                  Header / main / footer structure; nav labeled “Primary”.
                </td>
              </tr>
              <tr>
                <td>Checkout steps</td>
                <td>
                  Ordered list with <code className="font-mono text-xs">aria-label</code>; active step uses{" "}
                  <code className="font-mono text-xs">aria-current=&quot;step&quot;</code>.
                </td>
              </tr>
              <tr>
                <td>Forms</td>
                <td>
                  Visible labels, <code className="font-mono text-xs">htmlFor</code>{" "}
                  wiring, and descriptive placeholders where helpful.
                </td>
              </tr>
              <tr>
                <td>Motion</td>
                <td>
                  <code className="font-mono text-xs">prefers-reduced-motion</code>{" "}
                  disables smooth scrolling; hover scale / glow use{" "}
                  <code className="font-mono text-xs">motion-safe:</code> variants.
                </td>
              </tr>
              <tr>
                <td>Images</td>
                <td>
                  Meaningful <code className="font-mono text-xs">alt</code> on
                  catalog cards; graceful fallback icon if remote src fails.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="performance" className="scroll-mt-28">
        <h2 className="font-serif text-3xl text-charcoal">Performance</h2>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-charcoal-muted">
          Before shipping, run Lighthouse in Chrome DevTools (mobile + desktop)
          against the production build. Targets I optimize toward on static
          marketing sites:
        </p>
        <ul className="mt-4 max-w-3xl list-disc space-y-2 pl-5 text-charcoal-muted">
          <li>
            <strong className="font-medium text-charcoal">LCP</strong> — hero
            uses <code className="font-mono text-xs">priority</code> fetch;
            below-the-fold imagery defers.
          </li>
          <li>
            <strong className="font-medium text-charcoal">CLS</strong> —
            explicit aspect ratios on cards and thumbnails; fonts via{" "}
            <code className="font-mono text-xs">next/font</code>.
          </li>
          <li>
            <strong className="font-medium text-charcoal">INP</strong> — client
            islands limited to cart, catalog filters, checkout, and restoration
            form; avoid heavy animation on scroll.
          </li>
        </ul>
        <p className="mt-4 max-w-3xl text-sm text-charcoal-muted">
          After <code className="font-mono text-xs">npm run build && npm start</code>, capture scores in the README or your portfolio deck to document evidence.
        </p>
      </section>

      <section id="qa" className="scroll-mt-28">
        <h2 className="font-serif text-3xl text-charcoal">Quality gates</h2>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-charcoal-muted">
          Manual pass executed (and repeatable) before calling the prototype
          “done”:
        </p>
        <ul className="mt-4 max-w-3xl list-disc space-y-2 pl-5 text-charcoal-muted">
          <li>Keyboard path: skip link → nav → open cart sheet → tab controls → ESC close.</li>
          <li>Screen reader spot-check: VoiceOver / NVDA on checkout steps and sheet title.</li>
          <li>Responsive: 360 / 768 / 1280 widths; catalog grid reflow.</li>
          <li>Remote image failure: verify fallback tile on broken URL.</li>
          <li><code className="font-mono text-xs">npm run lint</code> clean.</li>
        </ul>
      </section>

      <section id="scope" className="scroll-mt-28">
        <h2 className="font-serif text-3xl text-charcoal">Out of scope (honest)</h2>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-charcoal-muted">
          This build intentionally stops where infrastructure would begin —
          useful to narrate in interviews so scope is credible:
        </p>
        <ul className="mt-4 max-w-3xl list-disc space-y-2 pl-5 text-charcoal-muted">
          <li>No payment processor, inventory API, or auth.</li>
          <li>No CMS — copy and SKUs live in the repository for speed.</li>
          <li>No analytics — add privacy-respecting tooling when a product warrants it.</li>
          <li>No automated E2E suite yet — manual checklist above is the current gate.</li>
        </ul>
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-charcoal-muted">
          Next iteration: connect a headless CMS, wire cart state to a session
          API, add Playwright smoke tests, and publish Lighthouse artifacts per
          deploy.
        </p>
      </section>
    </div>
  );
}
