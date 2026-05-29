"use client"

import Link from "next/link"
import { useState } from "react"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

type Chapter = {
  num: string
  label: string
}

const chapters: Chapter[] = [
  { num: "01", label: "Our Story" },
  { num: "02", label: "Our Mission" },
  { num: "03", label: "Our Standards" },
  { num: "04", label: "Our Name" },
]

type Standard = {
  title: string
  body: string
}

const playingFieldStandards: Standard[] = [
  {
    title: "Industries over headlines.",
    body: "We cover the sectors that compound over decades, not the news that cycles through a week. The point is durable understanding, not constant updates.",
  },
  {
    title: "Long over loud.",
    body: "We publish less than we could. Each piece runs because it adds to a working understanding of an industry — not because it fills a content calendar.",
  },
  {
    title: "Independent by construction.",
    body: "We&rsquo;re not owned by a fund, a media group, or an advertiser. The journals exist to serve the people reading them.",
  },
]

const editorialStandards: Standard[] = [
  {
    title: "Primary sources only.",
    body: "Every piece is built from interviews with the people inside the industry — operators, investors, builders. Secondary commentary isn&rsquo;t enough.",
  },
  {
    title: "In their own words.",
    body: "Our job is to give the people who run an industry the room to explain it — not to summarise them, not to compete with them, but to surface them.",
  },
  {
    title: "Depth over speed.",
    body: "We&rsquo;d rather publish six well-reported interviews a quarter than thirty thin ones. A piece runs when it&rsquo;s true, not when it&rsquo;s due.",
  },
]

const partnerStandards: Standard[] = [
  {
    title: "Alignment with the mission.",
    body: "We only partner with firms whose work actually serves the industry being covered. No exceptions.",
  },
  {
    title: "No native confusion.",
    body: "Sponsored content is labelled, separated, and never lets a partner shape editorial. Readers should always know who&rsquo;s talking.",
  },
  {
    title: "No miracle products.",
    body: "We don&rsquo;t run partnerships with anything that promises returns or outcomes we wouldn&rsquo;t stake our own work on.",
  },
]

function StandardsGroup({
  title,
  items,
  defaultOpen,
}: {
  title: string
  items: Standard[]
  defaultOpen: number
}) {
  const [open, setOpen] = useState<number>(defaultOpen)
  return (
    <div className="space-y-4">
      <p className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground font-sans">
        {title}
      </p>
      <div className="divide-y divide-black/10 border-y border-black/10">
        {items.map((s, i) => (
          <div key={s.title}>
            <button
              onClick={() => setOpen(open === i ? -1 : i)}
              className="w-full py-4 flex items-baseline justify-between gap-4 text-left"
            >
              <span className="font-serif text-xl font-light text-foreground">
                {s.title}
              </span>
              <span className="font-mono text-sm text-muted-foreground shrink-0 transition-transform">
                {open === i ? "−" : "+"}
              </span>
            </button>
            {open === i && (
              <p
                className="pb-5 pr-8 text-base leading-relaxed text-muted-foreground font-light"
                dangerouslySetInnerHTML={{ __html: s.body }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default function About() {
  const [activeChapter, setActiveChapter] = useState<string>("01")

  return (
    <div className="min-h-screen bg-gray-50">
      <main>
        {/* Hero */}
        <section className="w-full pt-20 pb-16 md:pt-28 md:pb-20 border-b relative overflow-hidden">
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
            <div className="max-w-4xl mx-auto space-y-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-black/10 rounded-full text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                About Playing Field
              </div>

              <h1 className="font-serif font-light tracking-tight leading-[1.05] text-3xl md:text-5xl lg:text-6xl text-foreground">
                The people who actually understand an industry from the inside rarely get to explain it on their own terms.
              </h1>

              <p className="text-base md:text-lg text-muted-foreground font-light leading-relaxed max-w-3xl">
                Most industry coverage is written <em>about</em> the people doing the work, not <em>by</em> them. We started Playing Field to flip that — by building media brands that go deep on a single industry at a time, written through interviews with the people who run it.
              </p>
            </div>
          </div>
        </section>

        {/* Four-up chapter nav — color-tinted tiles */}
        <section className="w-full border-b">
          <div className="container px-4 md:px-6">
            <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-black/10">
              {chapters.map((c, i) => {
                const tints = [
                  "bg-amber-50 hover:bg-amber-100/70",
                  "bg-sky-50 hover:bg-sky-100/70",
                  "bg-rose-50 hover:bg-rose-100/70",
                  "bg-emerald-50 hover:bg-emerald-100/70",
                ]
                return (
                  <a
                    key={c.num}
                    href={`#chapter-${c.num}`}
                    onClick={() => setActiveChapter(c.num)}
                    className={`px-6 py-8 flex flex-col gap-3 transition-colors ${tints[i]}`}
                  >
                    <p className="font-mono text-xs text-foreground/60 tabular-nums">
                      {c.num}
                    </p>
                    <p className="font-serif text-xl md:text-2xl font-light text-foreground leading-tight">
                      {c.label}
                    </p>
                  </a>
                )
              })}
            </div>
          </div>
        </section>

        {/* 01 — Our Story */}
        <section id="chapter-01" className="w-full py-24 border-b scroll-mt-20">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto space-y-8">
              <div className="flex items-baseline gap-4">
                <p className="font-mono text-xs text-muted-foreground tabular-nums">01</p>
                <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                  Our Story
                </p>
              </div>

              <h2 className="font-serif font-light tracking-tight text-3xl md:text-4xl leading-[1.1] text-foreground">
                Playing Field is a group of media brands publishing in-depth interviews on the industries that move markets. But it began as a single podcast — built around long conversations with the investors and operators inside frontier and emerging markets.
              </h2>

              <div className="space-y-5 text-base md:text-lg text-muted-foreground font-light leading-relaxed">
                <p>
                  We kept reading industry coverage that explained an industry without ever talking to the people inside it. Filler reports. Analyst summaries. Commentary on commentary. So instead of waiting for someone to fix it, we started doing it ourselves — one industry, one set of interviews, at a time.
                </p>
                <p>
                  The Frontier Markets Podcast turned into a journal — the African Infrastructure Journal — then the Hotel Capital Journal, then the Private Credit Journal. Each title takes a single industry seriously, built from interviews with the people inside it.
                </p>
                <p className="text-foreground/80 italic">
                  We&rsquo;re independent — not owned by a fund, a media group, or an advertiser. The work answers to the people reading it.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 02 — Our Mission */}
        <section id="chapter-02" className="w-full py-24 border-b bg-white scroll-mt-20">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto space-y-8">
              <div className="flex items-baseline gap-4">
                <p className="font-mono text-xs text-muted-foreground tabular-nums">02</p>
                <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                  Our Mission
                </p>
              </div>

              <h2 className="font-serif font-light tracking-tight text-3xl md:text-4xl leading-[1.1] text-foreground">
                To explain how the industries that move markets work — through the people who run them.
              </h2>

              <p className="text-base md:text-lg text-muted-foreground font-light leading-relaxed">
                Each journal we publish takes a single industry and goes deep, sitting down with the operators, investors, and builders inside it. The point is durable understanding — the kind a reader can use for years, not the kind that cycles through a week.
              </p>

              <p className="text-base md:text-lg text-muted-foreground font-light leading-relaxed">
                Read by a few thousand analysts, allocators, and operators across the sectors we cover — primarily in North America, Europe, and Africa, and a growing number of readers in Asia.
              </p>
            </div>
          </div>
        </section>

        {/* 03 — Our Standards */}
        <section id="chapter-03" className="w-full py-24 border-b scroll-mt-20">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto space-y-12">
              <div className="space-y-8">
                <div className="flex items-baseline gap-4">
                  <p className="font-mono text-xs text-muted-foreground tabular-nums">03</p>
                  <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                    Our Standards
                  </p>
                </div>

                <h2 className="font-serif font-light tracking-tight text-3xl md:text-4xl leading-[1.1] text-foreground max-w-3xl">
                  To make industries legible without distortion, we commit to these principles every day.
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
                <StandardsGroup
                  title="Playing Field Standards"
                  items={playingFieldStandards}
                  defaultOpen={0}
                />
                <StandardsGroup
                  title="Editorial Standards"
                  items={editorialStandards}
                  defaultOpen={0}
                />
                <StandardsGroup
                  title="Partner Standards"
                  items={partnerStandards}
                  defaultOpen={0}
                />
              </div>
            </div>
          </div>
        </section>

        {/* 04 — Our Name */}
        <section id="chapter-04" className="w-full py-24 border-b bg-white scroll-mt-20">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto space-y-12">
              <div className="space-y-8">
                <div className="flex items-baseline gap-4">
                  <p className="font-mono text-xs text-muted-foreground tabular-nums">04</p>
                  <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                    Our Name
                  </p>
                </div>

                <h2 className="font-serif font-light tracking-tight text-3xl md:text-4xl leading-[1.1] text-foreground max-w-3xl">
                  Two readings of the same phrase.
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
                <div className="space-y-4">
                  <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                    The field
                  </p>
                  <p className="font-serif text-xl md:text-2xl font-light leading-snug text-foreground">
                    A &ldquo;playing field&rdquo; is where the work actually happens — where industries are built, capital is deployed, deals get done.
                  </p>
                  <p className="text-base text-muted-foreground font-light leading-relaxed">
                    Our work is to bring readers onto it, not to comment on it from the stands.
                  </p>
                </div>
                <div className="space-y-4">
                  <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                    Level
                  </p>
                  <p className="font-serif text-xl md:text-2xl font-light leading-snug text-foreground">
                    A &ldquo;level playing field&rdquo; is what we want to make.
                  </p>
                  <p className="text-base text-muted-foreground font-light leading-relaxed">
                    Where any serious reader can understand an industry as deeply as the people working in it.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="w-full py-24">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h2 className="font-serif font-light tracking-tight text-3xl md:text-5xl leading-tight">
                Pick an industry. Go deep.
              </h2>
              <p className="text-base text-muted-foreground font-light max-w-xl mx-auto leading-relaxed">
                One short briefing a week on what we&rsquo;re publishing across the journals.
                Free.
              </p>
              <form className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto pt-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="rounded-full border border-black/10 bg-white px-5 py-3 text-sm w-full focus:outline-none focus:ring-2 focus:ring-indigo-500/30"
                />
                <Button className="rounded-full bg-foreground text-background px-6 py-6 font-light w-full sm:w-auto">
                  Subscribe
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full py-12 border-t bg-white">
        <div className="container px-4 md:px-6 text-center">
          <p className="text-sm text-muted-foreground font-light">
            © {new Date().getFullYear()} Playing Field
          </p>
        </div>
      </footer>
    </div>
  )
}
