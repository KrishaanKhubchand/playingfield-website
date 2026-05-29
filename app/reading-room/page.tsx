import Link from "next/link"
import { ArrowRight, ChevronDown } from "lucide-react"

import { Button } from "@/components/ui/button"

type Intent = {
  label: string
  kind: string
  accent: string
}

const intents: Intent[] = [
  {
    label: "Drafting an interview transcript",
    kind: "Writing",
    accent: "bg-amber-50 border-amber-200",
  },
  {
    label: "Reading a 6,000-word primer end-to-end",
    kind: "Reading",
    accent: "bg-sky-50 border-sky-200",
  },
  {
    label: "Building a sector thesis from raw notes",
    kind: "Research",
    accent: "bg-rose-50 border-rose-200",
  },
  {
    label: "Prepping questions for a Friday interview",
    kind: "Prep",
    accent: "bg-emerald-50 border-emerald-200",
  },
  {
    label: "Outreach to twelve operators on a single sector",
    kind: "Outreach",
    accent: "bg-indigo-50 border-indigo-200",
  },
  {
    label: "Editing a longform piece down to its spine",
    kind: "Editing",
    accent: "bg-violet-50 border-violet-200",
  },
]

type Slot = {
  label: string
  when: string
  blurb: string
  accent: string
}

const slots: Slot[] = [
  {
    label: "Morning 90",
    when: "Weekdays · 07:00",
    blurb: "Ninety minutes before the day gets loud. Cameras on, intentions stated, work begins.",
    accent: "bg-amber-50 border-amber-200",
  },
  {
    label: "Afternoon 50",
    when: "Weekdays · 14:00",
    blurb: "A focused hour to push through the afternoon slump on one specific thing.",
    accent: "bg-sky-50 border-sky-200",
  },
  {
    label: "Evening 25",
    when: "Weekdays · 21:00",
    blurb: "A short, late session — for the long-form draft you keep meaning to finish.",
    accent: "bg-rose-50 border-rose-200",
  },
  {
    label: "Saturday Deep Work",
    when: "Saturdays · 09:00",
    blurb: "A three-hour block for the kind of work that needs uninterrupted runway.",
    accent: "bg-emerald-50 border-emerald-200",
  },
]

const steps = [
  {
    label: "Join",
    body: "Drop into a scheduled session a few minutes before it starts. Cameras on, mics off.",
  },
  {
    label: "Set an intent",
    body: "In one line, say what you&rsquo;re here to do. The host writes it down. You&rsquo;re on the hook.",
  },
  {
    label: "Ship",
    body: "Work in shared silence. At the end, take ninety seconds to say what you got done.",
  },
]

const archetypes = [
  {
    eyebrow: "Who shows up",
    headline: "The fellow working on their interview series.",
    body: "You&rsquo;ve got transcripts to clean, questions to prep, and a publishing deadline that keeps creeping. The Reading Room is the container that gets the actual work onto the page.",
    tag: "Playing Field fellows",
  },
  {
    eyebrow: "Who shows up",
    headline: "The analyst writing on the side.",
    body: "Day job pays the bills; the writing is what compounds. A weekly 90-minute room is the difference between a half-finished doc and a published piece.",
    tag: "Analysts · associates · researchers",
  },
  {
    eyebrow: "Who shows up",
    headline: "The operator carving out time to read seriously.",
    body: "You buy the books and never finish them. You bookmark the long pieces and never read them. The room gives the reading the same weight you give a meeting.",
    tag: "Founders · operators · investors",
  },
]

export default function ReadingRoom() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      {/* Notify strip */}
      <div className="w-full border-y border-black/10 bg-indigo-50/60">
        <div className="container px-4 md:px-6 py-4">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="text-sm">
              <p className="font-medium text-foreground">
                The Reading Room opens this autumn.
              </p>
              <p className="text-muted-foreground font-light">
                Free for Playing Field readers. Drop your email and we&rsquo;ll hold you a seat
                for the first sessions.
              </p>
            </div>
            <form className="flex items-center gap-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="Your email"
                className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-indigo-500/30"
              />
              <Button className="rounded-full bg-indigo-600 hover:bg-indigo-700 text-white px-5 font-light">
                Notify me
              </Button>
            </form>
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
                The Reading Room · Live online co-working from Playing Field
              </div>

              <h1 className="font-serif font-light tracking-tight leading-[1.05] text-4xl md:text-6xl lg:text-7xl text-foreground">
                Live online
                <br />
                co-working sessions.
              </h1>

              <p className="text-base md:text-lg text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed">
                Drop into a scheduled video room, state what you&rsquo;re going to work on,
                and work in shared silence with five to fifteen others doing the same.
                Twenty-five, fifty, or ninety-minute sessions, four times a day.
              </p>

              <p className="text-sm text-muted-foreground/80 italic max-w-xl mx-auto">
                Free for Playing Field readers. A members&rsquo; study, run online.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center items-center pt-2">
                <Button className="rounded-full bg-foreground text-background px-7 py-6 font-light hover:bg-foreground/90">
                  Get on the waitlist
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  className="rounded-full text-foreground px-6 py-6 font-light hover:bg-black/5"
                >
                  See what people show up to do
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Intents mosaic */}
        <section className="w-full pb-24">
          <div className="container px-4 md:px-6">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-baseline gap-4 mb-10">
                <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                  What people show up to do
                </p>
                <div className="h-px flex-1 bg-black/10" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
                {intents.map((intent, i) => (
                  <div
                    key={intent.label}
                    className={`rounded-md border ${intent.accent} p-5 flex flex-col gap-3 ${
                      i % 2 === 0 ? "md:translate-y-3" : "md:-translate-y-1"
                    }`}
                  >
                    <p className="text-[10px] uppercase tracking-[0.22em] text-foreground/60">
                      {intent.kind}
                    </p>
                    <p className="font-serif text-lg font-light leading-snug">
                      &ldquo;{intent.label}.&rdquo;
                    </p>
                  </div>
                ))}
              </div>

              <p className="text-xs text-muted-foreground/70 italic mt-8 text-center">
                Representative intents from sessions like this one. Anonymised.
              </p>
            </div>
          </div>
        </section>

        {/* Sessions / format cards */}
        <section className="w-full py-24 border-t bg-white">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-16 space-y-6">
              <h2 className="font-serif font-light tracking-tight text-3xl md:text-5xl leading-tight">
                Pick the session
                <br />
                that fits the work.
              </h2>
              <p className="text-base md:text-lg text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto">
                Different lengths for different kinds of work. Drop in to any of them — no
                booking, no fee, no minimum commitment.
              </p>
            </div>

            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {slots.map((s, i) => (
                <div
                  key={s.label}
                  className={`rounded-md border ${s.accent} p-6 flex flex-col gap-3 transition-transform hover:-translate-y-1 ${
                    i % 2 === 0 ? "md:translate-y-3" : ""
                  }`}
                >
                  <p className="text-xs uppercase tracking-[0.2em] text-foreground/70">
                    {s.when}
                  </p>
                  <h3 className="font-serif text-2xl font-light leading-tight">{s.label}</h3>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">
                    {s.blurb}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="w-full py-24 border-t">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-baseline gap-4 mb-10">
                <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                  How a session runs
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

        {/* Who shows up — archetypes */}
        <section className="w-full py-24 border-t bg-white">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center mb-16 space-y-4">
              <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                Who shows up
              </p>
              <h2 className="font-serif font-light tracking-tight text-3xl md:text-4xl leading-tight">
                The room is full of people doing
                <br />
                the kind of work you&rsquo;re doing.
              </h2>
            </div>

            <div className="max-w-5xl mx-auto space-y-16">
              {archetypes.map((a, i) => (
                <div
                  key={a.headline}
                  className={`grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 items-center ${
                    i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div className="md:col-span-2">
                    <div className="aspect-[4/5] rounded-md bg-gradient-to-br from-black/[0.04] to-black/[0.01] border border-black/10 flex items-center justify-center p-8">
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
                    <p className="text-base text-muted-foreground font-light leading-relaxed">
                      {a.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why we&rsquo;re building it */}
        <section className="w-full py-24 border-t">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto space-y-6">
              <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                Why we&rsquo;re building it
              </p>
              <h2 className="font-serif font-light tracking-tight text-3xl md:text-4xl leading-tight">
                Deep work is solitary. It doesn&rsquo;t have to be lonely.
              </h2>
              <div className="space-y-4 text-base text-muted-foreground font-light leading-relaxed">
                <p>
                  Playing Field publishes for the people doing the slow, careful work of
                  understanding an industry from the inside. That work — reading, writing,
                  interviewing, thinking — is mostly done alone.
                </p>
                <p>
                  The Reading Room is the room next door. You&rsquo;re still doing your own
                  work, but other people are doing theirs alongside you — and the social
                  contract of stating an intent at the start and reporting at the end
                  turns ninety quiet minutes into ninety minutes you actually used.
                </p>
                <p>
                  We&rsquo;re starting with sessions for fellows, readers, and contributors.
                  Free, for now. A members&rsquo; study, run online.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="w-full py-24 border-t bg-white">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h2 className="font-serif font-light tracking-tight text-3xl md:text-5xl leading-tight">
                Hold me a seat
                <br />
                for the first sessions.
              </h2>
              <p className="text-base text-muted-foreground font-light max-w-xl mx-auto leading-relaxed">
                One email when the Reading Room opens. We&rsquo;ll let waitlist readers in
                first.
              </p>
              <form className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto pt-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="rounded-full border border-black/10 bg-white px-5 py-3 text-sm w-full focus:outline-none focus:ring-2 focus:ring-indigo-500/30"
                />
                <Button className="rounded-full bg-foreground text-background px-6 py-6 font-light w-full sm:w-auto">
                  Hold my seat
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full py-12 border-t">
        <div className="container px-4 md:px-6 text-center">
          <p className="text-sm text-muted-foreground font-light">
            © {new Date().getFullYear()} Playing Field · The Reading Room
          </p>
        </div>
      </footer>
    </div>
  )
}
