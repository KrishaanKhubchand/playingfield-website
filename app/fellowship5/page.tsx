import Link from "next/link"
import { ArrowRight, ChevronDown } from "lucide-react"

import { Button } from "@/components/ui/button"

type Output = {
  label: string
  kind: string
  accent: string
}

const outputs: Output[] = [
  {
    label: "A 4,000-word primer on private credit fund formation",
    kind: "Research memo",
    accent: "bg-amber-50 border-amber-200",
  },
  {
    label: "An interview series with operators across African logistics",
    kind: "Interview series",
    accent: "bg-sky-50 border-sky-200",
  },
  {
    label: "A weekly newsletter on the AI infrastructure stack",
    kind: "Newsletter",
    accent: "bg-rose-50 border-rose-200",
  },
  {
    label: "A six-episode podcast on hotel capital allocators",
    kind: "Podcast",
    accent: "bg-emerald-50 border-emerald-200",
  },
  {
    label: "A sector map of frontier fintech across SE Asia",
    kind: "Sector map",
    accent: "bg-indigo-50 border-indigo-200",
  },
  {
    label: "An investor&rsquo;s guide to climate adaptation",
    kind: "Long-form essay",
    accent: "bg-violet-50 border-violet-200",
  },
]

type Pillar = {
  label: string
  blurb: string
  accent: string
}

const pillars: Pillar[] = [
  {
    label: "Research",
    blurb: "Pick a sector you want to understand. We help you scope a project worth publishing.",
    accent: "bg-amber-50 border-amber-200",
  },
  {
    label: "Interviews",
    blurb: "Sit down with the operators, investors, and builders inside it — intros from our network.",
    accent: "bg-sky-50 border-sky-200",
  },
  {
    label: "Publication",
    blurb: "Ship a series — podcast, newsletter, or interview run — distributed through Playing Field.",
    accent: "bg-rose-50 border-rose-200",
  },
  {
    label: "Network",
    blurb: "A small cohort of fellows working in parallel, plus the people you interview along the way.",
    accent: "bg-emerald-50 border-emerald-200",
  },
]

const steps = [
  {
    label: "Apply",
    body: "Tell us who you are and what you&rsquo;d publish. Under five minutes — no formal background required.",
  },
  {
    label: "Embed",
    body: "Twelve weeks alongside your day job. Weekly mentor AMAs, peer reviews, and an editor who works with you on shape.",
  },
  {
    label: "Publish",
    body: "Ship your series under your own name, distributed by Playing Field. The work is yours to keep.",
  },
]

type Archetype = {
  eyebrow: string
  headline: string
  body: string
  tag: string
}

const archetypes: Archetype[] = [
  {
    eyebrow: "Fellow archetype 1",
    headline: "The analyst who wants to publish.",
    body: "You&rsquo;ve been reading sector research for years and writing internal memos no one outside the firm sees. The fellowship turns one of those memos into a published series — built on interviews with the people you&rsquo;ve been reading about.",
    tag: "Funds · banks · research",
  },
  {
    eyebrow: "Fellow archetype 2",
    headline: "The journalist who wants to go deeper than the news cycle allows.",
    body: "You can already report. What you don&rsquo;t have is twelve weeks to sit with a single industry and twenty operators inside it. The fellowship is that container, with editorial support and a distribution platform on the other end.",
    tag: "Reporters · editors · writers",
  },
  {
    eyebrow: "Fellow archetype 3",
    headline: "The operator who wants to think out loud about their industry.",
    body: "You know the sector from the inside, and you want to build a body of public work — a newsletter, a podcast, a sector map — that signals what you know. The fellowship gives you the structure and the network to ship one without quitting your job.",
    tag: "Founders · operators · builders",
  },
]

export default function Fellowship5() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      {/* Apply strip (1440-style, repurposed for cohort apply) */}
      <div className="w-full border-y border-black/10 bg-indigo-50/60">
        <div className="container px-4 md:px-6 py-4">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="text-sm">
              <p className="font-medium text-foreground">Applications are open for the next cohort.</p>
              <p className="text-muted-foreground font-light">
                Twelve weeks. No tuition. The work you publish is yours to keep.
              </p>
            </div>
            <div className="flex items-center gap-2 w-full md:w-auto">
              <Button className="rounded-full bg-indigo-600 hover:bg-indigo-700 text-white px-6 font-light w-full md:w-auto">
                Apply Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <main className="flex-1">
        {/* Hero */}
        <section className="w-full pt-20 pb-24 md:pt-28 md:pb-32 relative overflow-hidden">
          <svg
            aria-hidden
            className="absolute inset-0 w-full h-full opacity-[0.05] pointer-events-none"
            viewBox="0 0 1200 800"
            fill="none"
            preserveAspectRatio="xMidYMid slice"
          >
            <path d="M0,420 C200,360 320,500 520,440 S820,360 1200,420" stroke="currentColor" strokeWidth="1" />
            <path d="M0,520 C260,560 400,420 620,520 S960,580 1200,520" stroke="currentColor" strokeWidth="1" />
            <path d="M120,200 C200,280 320,140 500,220" stroke="currentColor" strokeWidth="1" />
            <path d="M700,180 C820,260 940,180 1080,260" stroke="currentColor" strokeWidth="1" />
          </svg>

          <div className="container px-4 md:px-6 relative">
            <div className="max-w-4xl mx-auto text-center space-y-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-black/10 rounded-full text-xs uppercase tracking-[0.18em] text-muted-foreground">
                The Playing Field Fellowship
              </div>

              <h1 className="font-serif font-light tracking-tight leading-[1.05] text-4xl md:text-6xl lg:text-7xl text-foreground">
                Become the person inside the industry.
                <br />
                Not the one covering it.
              </h1>

              <p className="text-base md:text-lg text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed">
                A twelve-week fellowship for analysts, journalists, and operators who want to
                go deep on a single sector — by sitting down with the people who actually
                run it, and publishing what they learn.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center items-center pt-4">
                <Button className="rounded-full bg-foreground text-background px-7 py-6 font-light hover:bg-foreground/90">
                  Apply to the Fellowship
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  className="rounded-full text-foreground px-6 py-6 font-light hover:bg-black/5"
                >
                  See what fellows ship
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Mosaic of fellow outputs */}
        <section className="w-full pb-24">
          <div className="container px-4 md:px-6">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-baseline gap-4 mb-10">
                <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                  What fellows ship
                </p>
                <div className="h-px flex-1 bg-black/10" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
                {outputs.map((o, i) => (
                  <div
                    key={o.label}
                    className={`rounded-md border ${o.accent} p-5 flex flex-col gap-3 ${
                      i % 2 === 0 ? "md:translate-y-3" : "md:-translate-y-1"
                    }`}
                  >
                    <p className="text-[10px] uppercase tracking-[0.22em] text-foreground/60">
                      {o.kind}
                    </p>
                    <p
                      className="font-serif text-lg font-light leading-snug"
                      dangerouslySetInnerHTML={{ __html: o.label }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pillars / what you actually get */}
        <section className="w-full py-24 border-t bg-white">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-16 space-y-6">
              <h2 className="font-serif font-light tracking-tight text-3xl md:text-5xl leading-tight">
                Twelve weeks. One sector.
                <br />
                A published body of work.
              </h2>
              <p className="text-base md:text-lg text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto">
                Designed to fit alongside your day job. A small cohort, weekly mentor AMAs,
                and an editor working with you on what you ship.
              </p>
              <p className="text-sm text-muted-foreground/80 italic">
                Free to attend. No equity in what you publish. The work is yours.
              </p>
            </div>

            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {pillars.map((p, i) => (
                <div
                  key={p.label}
                  className={`rounded-md border ${p.accent} p-6 flex flex-col gap-3 transition-transform hover:-translate-y-1 ${
                    i % 2 === 0 ? "md:translate-y-3" : ""
                  }`}
                >
                  <p className="text-xs uppercase tracking-[0.2em] text-foreground/70">
                    What you get
                  </p>
                  <h3 className="font-serif text-2xl font-light leading-tight">{p.label}</h3>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">
                    {p.blurb}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How the fellowship works */}
        <section className="w-full py-24 border-t">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-baseline gap-4 mb-10">
                <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                  How the fellowship works
                </p>
                <div className="h-px flex-1 bg-black/10" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
                {steps.map((step, i) => (
                  <div key={step.label} className="space-y-3">
                    <div className="flex items-baseline gap-3">
                      <span className="font-mono text-xs text-muted-foreground">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="font-serif text-2xl font-light">{step.label}</h3>
                    </div>
                    <p
                      className="text-sm text-muted-foreground font-light leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: step.body }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Per-archetype showcases */}
        <section className="w-full py-24 border-t bg-white">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center mb-16 space-y-4">
              <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                Who fellows are
              </p>
              <h2 className="font-serif font-light tracking-tight text-3xl md:text-4xl leading-tight">
                Three people the fellowship is built for.
              </h2>
            </div>

            <div className="max-w-5xl mx-auto space-y-16">
              {archetypes.map((a, i) => (
                <div
                  key={a.eyebrow}
                  className={`grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 items-center ${
                    i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div className="md:col-span-2">
                    <div className="aspect-[3/4] rounded-md bg-gradient-to-br from-black/[0.04] to-black/[0.01] border border-black/10 flex items-center justify-center p-8">
                      <div className="text-center space-y-3">
                        <p className="font-mono text-xs text-muted-foreground">
                          {String(i + 1).padStart(2, "0")} / 03
                        </p>
                        <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                          {a.tag}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="md:col-span-3 space-y-4">
                    <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                      {a.eyebrow}
                    </p>
                    <h3
                      className="font-serif font-light tracking-tight text-2xl md:text-4xl leading-tight"
                      dangerouslySetInnerHTML={{ __html: a.headline }}
                    />
                    <p
                      className="text-base text-muted-foreground font-light leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: a.body }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="w-full py-24 border-t">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h2 className="font-serif font-light tracking-tight text-3xl md:text-5xl leading-tight">
                Join the next cohort of fellows
                <br />
                going deep on the industries that move markets.
              </h2>
              <p className="text-base text-muted-foreground font-light max-w-xl mx-auto leading-relaxed">
                Applications take under five minutes. No formal background required — just
                tell us what you&rsquo;d publish.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center items-center pt-2">
                <Button className="rounded-full bg-foreground text-background px-7 py-6 font-light hover:bg-foreground/90 w-full sm:w-auto">
                  Apply to the Fellowship
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Link
                  href="/manifesto"
                  className="text-sm text-muted-foreground font-light hover:text-foreground transition-colors"
                >
                  Read the manifesto first &rarr;
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full py-12 border-t">
        <div className="container px-4 md:px-6 text-center">
          <p className="text-sm text-muted-foreground font-light">
            © {new Date().getFullYear()} Playing Field · The Fellowship
          </p>
        </div>
      </footer>
    </div>
  )
}
