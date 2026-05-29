import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

const missionPrinciples = [
  {
    title: "We treat every industry as a craft worth learning.",
    body: "Each title we publish is built by people who do the slow, careful work of understanding a single sector from the inside. We don&rsquo;t cover everything. We pick something that matters and we go deep on it.",
    accent: "bg-amber-50 border-amber-200",
  },
  {
    title: "We give insiders the room to explain their world.",
    body: "Our job is to surface the people who actually run an industry — operators, allocators, builders — not to summarise them or compete with them. The interview is our default form because it&rsquo;s the form that lets them speak.",
    accent: "bg-sky-50 border-sky-200",
  },
  {
    title: "We publish less, more carefully.",
    body: "A piece runs when it adds to a working understanding of a sector. Not when it fills a content calendar, not when it chases a news cycle. Long over loud.",
    accent: "bg-rose-50 border-rose-200",
  },
  {
    title: "We back the long-distance writer.",
    body: "We&rsquo;re building for people who want to write seriously about an industry over years, not just hit publish once. Our fellowship, our writing club, our editorial process — all of it is structured to compound.",
    accent: "bg-emerald-50 border-emerald-200",
  },
  {
    title: "We make depth accessible.",
    body: "Serious doesn&rsquo;t have to mean inaccessible. Our work is written for any thoughtful reader — analyst, operator, or interested generalist — who wants to understand an industry the way the people inside it do.",
    accent: "bg-indigo-50 border-indigo-200",
  },
]

const standards = [
  {
    title: "Primary sources only.",
    body: "Every piece is built from interviews with the people inside the industry. Secondary commentary isn&rsquo;t enough.",
  },
  {
    title: "Facts and action. Not just words.",
    body: "We don&rsquo;t cover stories built on cherry-picked quotes or speculation about a person&rsquo;s motives. Only verified facts and what the people inside are actually doing.",
  },
  {
    title: "Context. Not interpretation.",
    body: "Our readers are specialists. We provide the structure, the people, and the source material so they can connect the dots themselves.",
  },
  {
    title: "Alignment with our mission.",
    body: "We only choose brand partners who share our mission of explaining industries through the people inside them — and uphold the editorial line.",
  },
  {
    title: "High quality is a requirement.",
    body: "Partners in any of our journals must have a reputation for substance in the sector they want to reach. We don&rsquo;t run anything that wouldn&rsquo;t belong in the work itself.",
  },
  {
    title: "No miracle products. No motives.",
    body: "We rigorously vet every partner. You won&rsquo;t see promotional content from political entities, opaque crypto issuers, or anything promising returns we wouldn&rsquo;t stake our own work on.",
  },
]

export default function About2() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main>
        {/* Hero */}
        <section className="w-full pt-20 pb-16 md:pt-28 md:pb-20 relative overflow-hidden">
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
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h1 className="font-serif font-light tracking-tight text-5xl md:text-7xl leading-[1.05] text-foreground">
                About Playing Field
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed">
                Playing Field is a media company for the people who want to
                understand the industries that move markets — through the people
                who actually run them.
              </p>

              {/* Journal covers strip — small, anchored */}
              <div className="flex items-end justify-center gap-3 md:gap-4 pt-6">
                {[
                  "/images/african-infrastructure-journal.png",
                  "/images/hotel-capital-journal.png",
                  "/images/private-credit-journal.png",
                  "/images/frontier-markets-podcast-cover.png",
                ].map((src, i) => (
                  <div
                    key={src}
                    className={`w-14 md:w-20 aspect-[3/4] rounded-md overflow-hidden border border-black/10 bg-white shadow-sm ${
                      i % 2 === 0 ? "md:translate-y-2" : "md:-translate-y-1"
                    }`}
                  >
                    <img src={src} alt="" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Essay block — problem → enter Playing Field */}
        <section className="w-full py-20 md:py-24 border-t bg-white">
          <div className="container px-4 md:px-6">
            <div className="max-w-2xl mx-auto space-y-7 text-lg md:text-xl text-foreground/90 font-serif font-light leading-[1.6]">
              <p>
                We live in an age of{" "}
                <strong className="font-medium text-foreground">
                  limitless industry coverage but limited industry understanding
                </strong>
                .
              </p>
              <p className="text-base md:text-lg font-sans text-muted-foreground leading-relaxed">
                Analyst notes summarise. Commentators interpret. Newsletters
                aggregate. But the people who actually run a sector — the
                operators making the deals, the allocators deploying the
                capital, the builders putting up the buildings — rarely get a
                long-form venue to explain what they&rsquo;re doing on their own
                terms.
              </p>

              <h2 className="font-serif text-3xl md:text-4xl font-light leading-tight tracking-tight text-foreground pt-4">
                Enter Playing Field.
              </h2>

              <p className="text-base md:text-lg font-sans text-muted-foreground leading-relaxed">
                A group of media brands built around a single idea: that the
                best way to understand an industry is to listen, at length, to
                the people inside it. Each of our journals takes one sector
                seriously, built from interviews — not analysis, not press
                releases, not takes.
              </p>

              <p className="text-base md:text-lg font-sans text-muted-foreground leading-relaxed">
                We think the next generation of serious writing about industries
                won&rsquo;t come from more noise, faster. It will come from a
                small group of writers and readers who would rather sit with one
                industry for a year than skim twelve in a week — and from giving
                the people inside those industries the room to speak.{" "}
                <Link
                  href="/"
                  className="text-foreground underline decoration-foreground/30 underline-offset-4 hover:decoration-foreground"
                >
                  Curious to join us
                </Link>
                ?
              </p>
            </div>
          </div>
        </section>

        {/* Mission + 5 stance principles */}
        <section className="w-full py-24 border-t">
          <div className="container px-4 md:px-6">
            <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-12 lg:self-start">
                <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                  Our Mission
                </p>
                <h2 className="font-serif font-light tracking-tight text-3xl md:text-4xl leading-[1.1] text-foreground">
                  To build a media company where serious industry understanding compounds.
                </h2>
              </div>

              <div className="lg:col-span-8 grid grid-cols-1 gap-5">
                {missionPrinciples.map((p, i) => (
                  <div
                    key={p.title}
                    className={`rounded-md border ${p.accent} p-6 flex flex-col gap-3 transition-transform hover:-translate-x-1`}
                  >
                    <span className="font-mono text-[10px] text-foreground/50 tabular-nums uppercase tracking-[0.2em]">
                      Principle {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-serif text-xl md:text-2xl font-light leading-snug text-foreground">
                      {p.title}
                    </h3>
                    <p
                      className="text-sm md:text-base text-foreground/70 font-light leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: p.body }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Editorial & Partner Standards */}
        <section className="w-full py-24 border-t bg-white">
          <div className="container px-4 md:px-6">
            <div className="max-w-5xl mx-auto">
              <div className="max-w-3xl mb-16 space-y-6">
                <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                  Our Editorial & Partner Standards
                </p>
                <h2 className="font-serif font-light tracking-tight text-3xl md:text-4xl leading-[1.1] text-foreground">
                  Clarity and integrity aren&rsquo;t optional. They&rsquo;re the backbone of every interview we publish and every brand we partner with.
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                {standards.map((s) => (
                  <div key={s.title} className="space-y-2">
                    <h3 className="font-serif text-xl font-light leading-snug text-foreground">
                      {s.title}
                    </h3>
                    <p
                      className="text-base text-muted-foreground font-light leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: s.body }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Our Name */}
        <section className="w-full py-24 border-t">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                Our Name
              </p>
              <h2 className="font-serif font-light tracking-tight text-3xl md:text-4xl leading-[1.15] text-foreground">
                The playing field is where the work happens. A level playing field is what we want to make.
              </h2>
              <p className="text-base text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto">
                Bring readers onto the field, not to comment on it from the
                stands — and make sure they can understand an industry as
                deeply as the people working in it.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="w-full py-24 border-t bg-white">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h2 className="font-serif font-light tracking-tight text-3xl md:text-5xl leading-tight">
                Pick an industry. Go deep.
              </h2>
              <p className="text-base text-muted-foreground font-light max-w-xl mx-auto leading-relaxed">
                One short briefing a week on what we&rsquo;re publishing across the
                journals. Free.
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

      <footer className="w-full py-12 border-t">
        <div className="container px-4 md:px-6 text-center">
          <p className="text-sm text-muted-foreground font-light">
            © {new Date().getFullYear()} Playing Field
          </p>
        </div>
      </footer>
    </div>
  )
}
