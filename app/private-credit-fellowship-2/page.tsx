"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

type Output = {
  label: string
  kind: string
  accent: string
}

const outputs: Output[] = [
  {
    label: "A thesis on one corner of private credit",
    kind: "Research",
    accent: "bg-amber-50 border-amber-200",
  },
  {
    label: "Six in-depth interviews with senior allocators",
    kind: "Interviews",
    accent: "bg-sky-50 border-sky-200",
  },
  {
    label: "An outreach pipeline of 40+ decision-makers",
    kind: "Network",
    accent: "bg-rose-50 border-rose-200",
  },
  {
    label: "Editorial contributions to Private Credit Journal",
    kind: "Editorial",
    accent: "bg-emerald-50 border-emerald-200",
  },
  {
    label: "A published portfolio under your byline",
    kind: "Portfolio",
    accent: "bg-indigo-50 border-indigo-200",
  },
  {
    label: "Working knowledge of a corner outsiders rarely see",
    kind: "Expertise",
    accent: "bg-violet-50 border-violet-200",
  },
]

const pillars = [
  {
    label: "Senior Relationships",
    blurb:
      "Direct access to the investors and allocators you&rsquo;d otherwise spend years trying to meet.",
  },
  {
    label: "A Published Portfolio",
    blurb:
      "Interviews and analysis distributed under your name through Private Credit Journal — work that lives on as a calling card.",
  },
  {
    label: "Editorial Mentorship",
    blurb:
      "Work directly with the founding team on developing your thesis, sharpening your questions, and shaping editorial direction.",
  },
  {
    label: "A Path Into the Industry",
    blurb:
      "Deep expertise in a corner of the market that matters, plus the network that turns expertise into opportunity.",
  },
]

const steps = [
  {
    label: "Apply",
    body: "Fifteen minutes, including a 90-second video. We review every application within a week.",
  },
  {
    label: "Trial",
    body: "Selected applicants have a conversation with the founding team and complete a short trial task — you vet the work as we vet you.",
  },
  {
    label: "Embed",
    body: "Six months going deep on a corner of private credit, alongside the senior investors and allocators shaping it.",
  },
]

const archetypes = [
  {
    eyebrow: "Fellow archetype 1",
    headline: "The MBA who wants to break into credit.",
    body: "You&rsquo;ve got the framework but not the firm. The fellowship puts you in front of the senior investors and gives you a published thesis to point to — a credential that doesn&rsquo;t expire when the cohort ends.",
    tag: "MBA · finance · consulting",
  },
  {
    eyebrow: "Fellow archetype 2",
    headline: "The journalist who wants to understand the trade from inside it.",
    body: "You&rsquo;ve covered finance from the outside. The fellowship moves you inside — with editorial support, a publication on the other end, and the kind of access that turns reporting into expertise.",
    tag: "Journalism · law · policy",
  },
  {
    eyebrow: "Fellow archetype 3",
    headline: "The non-traditional candidate.",
    body: "Law, policy, something less obvious. If you&rsquo;ve got the curiosity and the commitment, a basic financial foundation is enough — the fellowship gives you the framework and the network to build the rest.",
    tag: "Less-obvious backgrounds",
  },
]

const faqs = [
  {
    question: "Who is the fellowship for?",
    answer:
      "Early-career talent who are genuinely curious about finance and want to build deep expertise in private credit. Backgrounds we welcome: MBA, JD, undergraduate, finance, journalism, law, policy, or something less obvious. Basic financial background helps; a commitment to build one is enough.",
  },
  {
    question: "How long is the program?",
    answer: "Six months, with the network and relationships continuing long after.",
  },
  {
    question: "What's the time commitment?",
    answer:
      "Roughly 10–20 hours per week. Designed to fit alongside your studies, current job, or other work.",
  },
  {
    question: "Is it paid?",
    answer:
      "Not for the inaugural cohort. As Private Credit Journal grows, we expect to introduce stipends for future cohorts. The work you publish is yours.",
  },
  {
    question: "How does the application work?",
    answer:
      "About fifteen minutes, including a 90-second video. We review every application within a week. Selected applicants have a conversation with the founding team and complete a short trial task.",
  },
  {
    question: "What does a fellow actually do?",
    answer:
      "Develop a thesis on a specific corner of private credit, build an outreach pipeline, conduct in-depth interviews with senior investors and allocators, and contribute to the editorial direction of the publication.",
  },
]

export default function PrivateCreditFellowship2() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      {/* Apply strip — scarcity-forward */}
      <div className="w-full border-y border-black/10 bg-stone-100">
        <div className="container px-4 md:px-6 py-4">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="text-sm">
              <p className="font-medium text-foreground">Four fellows. Six months. Inaugural cohort.</p>
              <p className="text-muted-foreground font-light">
                Applications are open. We review every one.
              </p>
            </div>
            <a href="#apply">
              <Button className="rounded-full bg-foreground text-background hover:bg-foreground/90 px-6 font-light w-full md:w-auto">
                Apply Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>
      </div>

      <main className="flex-1">
        {/* Hero */}
        <section className="w-full pt-20 pb-20 md:pt-28 md:pb-24 relative overflow-hidden bg-white">
          <div className="container px-4 md:px-6 relative">
            <div className="max-w-4xl mx-auto text-center space-y-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-stone-100 border border-black/10 rounded-full text-xs uppercase tracking-[0.18em] text-muted-foreground">
                The Private Credit Fellowship
              </div>

              <h1 className="font-serif font-light tracking-tight leading-[1.05] text-4xl md:text-6xl lg:text-7xl text-foreground">
                Spend six months
                <br />
                inside private credit.
              </h1>

              <p className="text-base md:text-lg text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed">
                A four-person fellowship for early-career talent building real expertise — by
                going deep on one corner of the market, alongside the senior investors and
                allocators shaping it.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center items-center pt-2">
                <a href="#apply">
                  <Button className="rounded-full bg-foreground text-background px-7 py-6 font-light hover:bg-foreground/90">
                    Apply to the Fellowship
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Scarcity strip — numbers band */}
        <section className="w-full border-y border-black/10 bg-foreground text-background">
          <div className="container px-4 md:px-6 py-10 md:py-12">
            <div className="max-w-4xl mx-auto grid grid-cols-3 gap-6 md:gap-12 text-center">
              <div>
                <p className="font-serif text-4xl md:text-6xl font-light leading-none">04</p>
                <p className="mt-3 text-[10px] uppercase tracking-[0.22em] text-background/70">
                  Fellows
                </p>
              </div>
              <div>
                <p className="font-serif text-4xl md:text-6xl font-light leading-none">06</p>
                <p className="mt-3 text-[10px] uppercase tracking-[0.22em] text-background/70">
                  Months
                </p>
              </div>
              <div>
                <p className="font-serif text-4xl md:text-6xl font-light leading-none">10–20</p>
                <p className="mt-3 text-[10px] uppercase tracking-[0.22em] text-background/70">
                  Hours / week
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Outputs mosaic */}
        <section className="w-full py-24">
          <div className="container px-4 md:px-6">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-baseline gap-4 mb-10">
                <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                  What you walk away with
                </p>
                <div className="h-px flex-1 bg-black/10" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
                {outputs.map((o) => (
                  <div
                    key={o.label}
                    className={`rounded-md border ${o.accent} p-5 flex flex-col gap-3`}
                  >
                    <p className="text-[10px] uppercase tracking-[0.22em] text-foreground/60">
                      {o.kind}
                    </p>
                    <p className="font-serif text-lg font-light leading-snug">{o.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* What you get — four pillars */}
        <section className="w-full py-24 border-t bg-white">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-16 space-y-6">
              <h2 className="font-serif font-light tracking-tight text-3xl md:text-5xl leading-tight">
                Real apprenticeship.
                <br />
                Real access.
              </h2>
              <p className="text-base md:text-lg text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto">
                Designed for early-career talent who want to build expertise that compounds —
                in a corner of the market that&rsquo;s under-covered and over-needed.
              </p>
            </div>

            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-px bg-black/10 border border-black/10 rounded-md overflow-hidden">
              {pillars.map((p) => (
                <div key={p.label} className="bg-white p-8 space-y-3">
                  <p className="text-xs uppercase tracking-[0.2em] text-foreground/70">
                    What you get
                  </p>
                  <h3 className="font-serif text-2xl font-light leading-tight">{p.label}</h3>
                  <p
                    className="text-sm text-muted-foreground font-light leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: p.blurb }}
                  />
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
                    <p className="text-sm text-muted-foreground font-light leading-relaxed">
                      {step.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Who fellows are */}
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
                    <div className="aspect-[4/5] rounded-md bg-stone-100 border border-black/10 flex items-center justify-center p-8">
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
                    <h3 className="font-serif font-light tracking-tight text-2xl md:text-4xl leading-tight">
                      {a.headline}
                    </h3>
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

        {/* FAQ */}
        <section className="w-full py-24 border-t">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-baseline gap-4 mb-10">
                <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                  Questions
                </p>
                <div className="h-px flex-1 bg-black/10" />
              </div>
              <div className="divide-y divide-black/10 border-y border-black/10">
                {faqs.map((faq, i) => (
                  <div key={i}>
                    <button
                      onClick={() => setOpenIndex(openIndex === i ? null : i)}
                      className="w-full py-5 flex justify-between items-center text-left"
                    >
                      <span className="text-base font-serif font-light text-foreground">
                        {faq.question}
                      </span>
                      <span className="text-foreground/40 ml-4 text-sm font-mono">
                        {openIndex === i ? "−" : "+"}
                      </span>
                    </button>
                    {openIndex === i && (
                      <p className="pb-5 pr-8 text-sm leading-relaxed text-muted-foreground font-light">
                        {faq.answer}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section
          id="apply"
          className="w-full py-24 border-t bg-foreground text-background scroll-mt-20"
        >
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h2 className="font-serif font-light tracking-tight text-3xl md:text-5xl leading-tight">
                Four spots.
                <br />
                Apply now.
              </h2>
              <p className="text-base text-background/70 font-light max-w-xl mx-auto leading-relaxed">
                Tell us about yourself, what you&rsquo;re curious about in private credit, and
                what you&rsquo;d want to publish if you joined. Fifteen minutes, including a
                90-second video.
              </p>
              <div className="flex justify-center pt-2">
                <Button className="rounded-full bg-background text-foreground hover:bg-background/90 px-7 py-6 font-light w-full sm:w-auto">
                  Apply to the Fellowship
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full py-12 border-t">
        <div className="container px-4 md:px-6 text-center">
          <p className="text-sm text-muted-foreground font-light">
            © {new Date().getFullYear()} Private Credit Fellowship · Private Credit Journal
          </p>
        </div>
      </footer>
    </div>
  )
}
