import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

const principles = [
  {
    label: "Industries over headlines.",
    body: "We work on the sectors that compound over decades, not the news that cycles through a week.",
    accent: "bg-amber-50 border-amber-200",
  },
  {
    label: "Long over loud.",
    body: "We publish less than we could. Every piece runs because it adds to a working understanding of an industry.",
    accent: "bg-sky-50 border-sky-200",
  },
  {
    label: "Hire people who do the work, not just write about it.",
    body: "Our best writers and editors have spent time inside the industries we cover, or are obsessed with getting close to them.",
    accent: "bg-rose-50 border-rose-200",
  },
  {
    label: "Read more than you write.",
    body: "We spend a lot of time reading what others are publishing on the sectors we cover. So should you.",
    accent: "bg-emerald-50 border-emerald-200",
  },
  {
    label: "Think in decades.",
    body: "We&rsquo;re building Playing Field for a long time. We pick people and projects with that horizon in mind.",
    accent: "bg-indigo-50 border-indigo-200",
  },
  {
    label: "Bias toward the next interview.",
    body: "When in doubt, the right next move is usually to talk to one more person inside the industry. Then publish.",
    accent: "bg-violet-50 border-violet-200",
  },
  {
    label: "Take care of yourself and the people you write about.",
    body: "Both directions matter. The people we interview trust us with their time and reputation. The people we work with deserve the same care.",
    accent: "bg-stone-100 border-stone-300",
  },
]

const benefits = [
  {
    title: "Remote-first by design",
    body: "Work from wherever you do your best work. We get together in person a few times a year, but the default is async, written, and trusting people to own their time.",
    accent: "bg-amber-50 border-amber-200",
  },
  {
    title: "Generous time away",
    body: "Open paid time off, with a real expectation that you&rsquo;ll take at least four weeks a year. Rest is part of the job.",
    accent: "bg-sky-50 border-sky-200",
  },
  {
    title: "Health and care",
    body: "Comprehensive medical, dental, and vision for you and your dependents in the markets we hire in. We figure it out for the markets we don&rsquo;t.",
    accent: "bg-rose-50 border-rose-200",
  },
  {
    title: "Ownership in what you build",
    body: "Meaningful equity for full-time roles. The work you publish — under your own name — stays yours.",
    accent: "bg-emerald-50 border-emerald-200",
  },
  {
    title: "A budget for the work",
    body: "We pay for the subscriptions, books, travel, and interview coffee that make the work better. If it sharpens your understanding of the industry, we want you to spend.",
    accent: "bg-indigo-50 border-indigo-200",
  },
  {
    title: "Sixteen weeks parental leave",
    body: "Fully paid. New family members deserve more than a long weekend. Take the time.",
    accent: "bg-violet-50 border-violet-200",
  },
]

const journalCovers = [
  { src: "/images/african-infrastructure-journal.png", alt: "African Infrastructure Journal" },
  { src: "/images/hotel-capital-journal.png", alt: "Hotel Capital Journal" },
  { src: "/images/private-credit-journal.png", alt: "Private Credit Journal" },
  { src: "/images/frontier-markets-podcast-cover.png", alt: "Frontier Markets Podcast" },
]

const sectors = [
  { label: "Journals", count: "4 titles" },
  { label: "Podcasts", count: "1 show" },
  { label: "Fellowships", count: "2 programs" },
  { label: "Newsletters", count: "Weekly briefings" },
]

export default function Careers() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main>
        {/* Hero */}
        <section className="w-full pt-20 pb-20 md:pt-28 md:pb-24 relative overflow-hidden">
          {/* decorative connector lines — echoes /home3 */}
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
              <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                Careers at Playing Field
              </p>

              <h1 className="font-serif font-light tracking-tight leading-[1.05] text-4xl md:text-6xl lg:text-7xl text-foreground">
                Build media brands that take
                <br />
                industries seriously.
              </h1>

              <p className="text-base md:text-lg text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto">
                We&rsquo;re writers, editors, interviewers, and operators
                publishing long-form work on the industries that move markets.
                Small team. Independent. Built to last.
              </p>

              {/* Journal covers strip — what the team makes */}
              <div className="flex items-end justify-center gap-3 md:gap-5 pt-4">
                {journalCovers.map((c, i) => (
                  <div
                    key={c.src}
                    className={`w-16 md:w-24 aspect-[3/4] rounded-md overflow-hidden border border-black/10 bg-white shadow-sm ${
                      i % 2 === 0 ? "md:translate-y-2" : "md:-translate-y-1"
                    }`}
                  >
                    <img src={c.src} alt={c.alt} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center items-center pt-2">
                <a href="#open-roles">
                  <Button className="rounded-full bg-foreground text-background px-7 py-6 font-light hover:bg-foreground/90 w-full sm:w-auto">
                    See open roles
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
                <a href="#our-story">
                  <Button
                    variant="ghost"
                    className="rounded-full text-foreground px-6 py-6 font-light hover:bg-black/5 w-full sm:w-auto"
                  >
                    Read our story
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Mission strip */}
        <section className="w-full py-20 border-y bg-white">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
              <div className="md:col-span-4">
                <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                  Our mission
                </p>
              </div>
              <div className="md:col-span-8">
                <h2 className="font-serif font-light tracking-tight text-2xl md:text-4xl leading-[1.15] text-foreground">
                  To build a media company where serious industry understanding compounds — title by title, interview by interview, year by year.
                </h2>
              </div>
            </div>
          </div>
        </section>

        {/* A few of our principles */}
        <section className="w-full py-24">
          <div className="container px-4 md:px-6">
            <div className="max-w-5xl mx-auto">
              <div className="mb-12 space-y-3">
                <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                  A few of our principles
                </p>
                <h2 className="font-serif font-light tracking-tight text-3xl md:text-4xl leading-tight text-foreground">
                  How we work.
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
                {principles.map((p, i) => (
                  <div
                    key={p.label}
                    className={`rounded-md border ${p.accent} p-6 flex flex-col gap-3 transition-transform hover:-translate-y-1 ${
                      i % 3 === 1 ? "md:translate-y-4" : ""
                    }`}
                  >
                    <span className="font-mono text-[10px] text-foreground/50 tabular-nums uppercase tracking-[0.2em]">
                      Principle {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-serif text-xl font-light leading-snug text-foreground">
                      {p.label}
                    </h3>
                    <p
                      className="text-sm text-foreground/70 font-light leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: p.body }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Our story */}
        <section id="our-story" className="w-full py-24 border-t bg-white scroll-mt-20">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto space-y-12">
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                  Our story
                </p>
                <h2 className="font-serif font-light tracking-tight text-3xl md:text-5xl leading-tight text-foreground">
                  Playing Field began as a single podcast.
                </h2>
              </div>

              <p className="text-base md:text-lg text-muted-foreground font-light leading-relaxed max-w-3xl">
                What started as long conversations with the investors and operators inside frontier and emerging markets has grown into a group of media brands publishing in-depth interviews on the industries that move global capital — without the noise that gets in the way of understanding them.
              </p>

              {/* Trajectory line */}
              <div className="border-y border-black/10 py-10">
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.22em] text-muted-foreground mb-6">
                  <span>One podcast</span>
                  <span>Today</span>
                </div>
                <div className="relative h-px bg-black/10">
                  <div className="absolute left-0 top-0 h-px w-3/5 bg-foreground" />
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-foreground" />
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-foreground" />
                </div>
                <p className="font-serif text-4xl md:text-6xl font-light text-foreground tabular-nums mt-8">
                  4,000+
                </p>
                <p className="text-sm text-muted-foreground font-light mt-2">
                  analysts, allocators, and operators across the sectors we cover.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {sectors.map((s) => (
                  <div key={s.label} className="space-y-1">
                    <p className="font-serif text-xl font-light text-foreground">
                      {s.label}
                    </p>
                    <p className="text-xs text-muted-foreground">{s.count}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Our people & culture */}
        <section className="w-full py-24 border-t">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
              <div className="md:col-span-5 space-y-3">
                <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                  Our people & culture
                </p>
                <h2 className="font-serif font-light tracking-tight text-3xl md:text-4xl leading-[1.15] text-foreground">
                  A small team of writers, editors, and operators who&rsquo;d rather understand one industry well than skim ten.
                </h2>
              </div>
              <div className="md:col-span-7 space-y-6 text-base text-muted-foreground font-light leading-relaxed">
                <p>
                  We&rsquo;re mission-driven about long-form, primary-source work and the people who make it. The team is fully remote and writes more than it talks — most decisions are made in shared docs, not meetings.
                </p>
                <p>
                  We work with each other for a long time. When we hire, we hire for people who want to build a single industry beat for years, not just ship a few pieces. Curiosity, care, and the willingness to do the slow part of the work are the bar.
                </p>
                <div className="pt-4 border-t border-black/10">
                  <blockquote className="text-base italic text-foreground/80 font-light leading-relaxed">
                    &ldquo;The thing I noticed within the first month is that
                    everyone here treats the people we interview the way you&rsquo;d
                    want to be treated yourself. It&rsquo;s rare and it&rsquo;s
                    real.&rdquo;
                  </blockquote>
                  <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground mt-4">
                    — Anya R., Editor, African Infrastructure Journal
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our benefits */}
        <section className="w-full py-24 border-t bg-white">
          <div className="container px-4 md:px-6">
            <div className="max-w-5xl mx-auto">
              <div className="mb-12 space-y-3 max-w-2xl">
                <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                  Our benefits
                </p>
                <h2 className="font-serif font-light tracking-tight text-3xl md:text-4xl leading-tight text-foreground">
                  Built around people who want to do the work for a long time.
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
                {benefits.map((b, i) => (
                  <div
                    key={b.title}
                    className={`rounded-md border ${b.accent} p-6 flex flex-col gap-3 transition-transform hover:-translate-y-1 ${
                      i % 2 === 0 ? "md:translate-y-3" : ""
                    }`}
                  >
                    <p className="text-[10px] uppercase tracking-[0.2em] text-foreground/60">
                      Benefit
                    </p>
                    <h3 className="font-serif text-xl font-light leading-snug text-foreground">
                      {b.title}
                    </h3>
                    <p
                      className="text-sm text-foreground/70 font-light leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: b.body }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Open roles / final CTA */}
        <section id="open-roles" className="w-full py-24 border-t scroll-mt-20">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto space-y-12">
              <div className="text-center space-y-4">
                <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                  Join us
                </p>
                <h2 className="font-serif font-light tracking-tight text-3xl md:text-5xl leading-tight text-foreground">
                  We&rsquo;re always looking for curious, careful people who want to do their best work on an industry that matters.
                </h2>
              </div>

              <div className="max-w-2xl mx-auto rounded-md border border-black/10 bg-white divide-y divide-black/10">
                {[
                  { role: "Editor, Private Credit Journal", location: "Remote · Full-time" },
                  { role: "Interviewer / Producer", location: "Remote · Full-time" },
                  { role: "Editorial Fellow (paid)", location: "Remote · 6 months" },
                  { role: "Operations & Partnerships Lead", location: "Remote · Full-time" },
                ].map((r) => (
                  <div
                    key={r.role}
                    className="px-6 py-5 flex items-center justify-between gap-4"
                  >
                    <div>
                      <p className="font-serif text-lg font-light text-foreground">
                        {r.role}
                      </p>
                      <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground mt-1">
                        {r.location}
                      </p>
                    </div>
                    <Link
                      href="#"
                      className="text-[11px] uppercase tracking-[0.2em] text-foreground border border-black/15 hover:border-black/40 rounded-full px-4 py-2 transition-colors"
                    >
                      Apply
                    </Link>
                  </div>
                ))}
              </div>

              <p className="text-center text-sm text-muted-foreground font-light">
                Don&rsquo;t see your role?{" "}
                <a
                  href="mailto:careers@playingfield.co"
                  className="underline decoration-muted-foreground/40 underline-offset-4 hover:decoration-foreground hover:text-foreground transition-colors"
                >
                  Tell us what you&rsquo;d build here
                </a>
                .
              </p>
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
