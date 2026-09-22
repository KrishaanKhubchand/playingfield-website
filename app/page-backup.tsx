import Link from "next/link"
import { ArrowRight, ChevronDown } from "lucide-react"

import { Button } from "@/components/ui/button"

type Brand = {
  href: string
  title: string
  image: string
  blurb: string
}

const brands: Brand[] = [
  {
    href: "/african-infrastructure-journal",
    title: "African Infrastructure Journal",
    image: "/images/african-infrastructure-journal.png",
    blurb: "The projects, financing, and developers shaping the next decade of African infrastructure.",
  },
  {
    href: "/hotel-capital-journal",
    title: "Hotel Capital Journal",
    image: "/images/hotel-capital-journal.png",
    blurb: "Market analysis and operator perspectives for capital allocators in global hospitality.",
  },
  {
    href: "/private-credit-journal",
    title: "Private Credit Journal",
    image: "/images/private-credit-journal.png",
    blurb: "How the private credit boom is being financed, deployed, and re-shaped — from the people inside it.",
  },
  {
    href: "/technology-investment-journal",
    title: "Technology Investment Journal",
    image: "/images/technology-investment-journal.png",
    blurb: "The funds, founders, and deals shaping how capital flows into technology — written from the inside.",
  },
]

const howWeDoIt = [
  {
    label: "Choose",
    body: "We pick an industry that matters and is under-covered.",
  },
  {
    label: "Listen",
    body: "We sit down with the operators, investors, and builders inside it.",
  },
  {
    label: "Publish",
    body: "We turn the conversations into a journal readers can use.",
  },
]

export default function Home3() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      {/* Subscribe strip (1440-style) */}
      <div className="w-full border-y border-black/10 bg-indigo-50/60">
        <div className="container px-4 md:px-6 py-4">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="text-sm">
              <p className="font-medium text-foreground">Subscribe to the Playing Field briefing</p>
              <p className="text-muted-foreground font-light">
                One short note a week on the industries we&rsquo;re going deep on.
                <span className="italic"> Free, unsubscribe anytime.</span>
              </p>
            </div>
            <form className="flex items-center gap-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="Your email"
                className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-indigo-500/30"
              />
              <Button className="rounded-full bg-indigo-600 hover:bg-indigo-700 text-white px-5 font-light">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>

      <main className="flex-1">
        {/* Hero */}
        <section className="w-full pt-20 pb-24 md:pt-28 md:pb-32 relative overflow-hidden">
          {/* decorative connector lines (mosaic suggestion) */}
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
            <div className="max-w-5xl mx-auto text-center space-y-10">
              <h1 className="font-serif font-light tracking-tight leading-[1.1] text-3xl md:text-4xl lg:text-5xl text-foreground text-balance mx-auto max-w-4xl">
                Playing Field is a media group covering the industries that shape the global economy.
              </h1>

              <div className="pt-4">
                <Button className="rounded-full bg-foreground text-background px-7 py-6 font-light hover:bg-foreground/90">
                  Explore Playing Field
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Brand mosaic */}
        <section id="publications" className="w-full pb-24 relative scroll-mt-24">
          <div className="container px-4 md:px-6">
            <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8 items-end">
              {brands.map((b, i) => (
                <Link
                  key={b.href}
                  href={b.href}
                  className={`group block relative ${
                    i % 2 === 0 ? "md:translate-y-6" : "md:-translate-y-2"
                  }`}
                >
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src={b.image}
                      alt={b.title}
                      className="w-full h-full object-contain transition-transform group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="mt-3 space-y-1">
                    <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                      Playing Field
                    </p>
                    <p className="text-sm font-serif font-light leading-snug">
                      {b.title}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section className="w-full py-24 border-t bg-white">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <p className="text-sm md:text-base uppercase tracking-[0.22em] text-muted-foreground mb-8">
                About
              </p>

              <div className="space-y-7 text-xl md:text-2xl font-light leading-relaxed text-foreground">
                <p>
                  Playing Field is a global media group, home to the defining publications of the
                  world&rsquo;s most consequential industries.
                </p>
                <p>
                  Economies advance on information. Yet the industries that move the most capital are
                  often the least understood — their expertise held by a small number of firms and the
                  people who lead them.
                </p>
                <p>
                  Playing Field exists to make that expertise accessible. Each publication is reported
                  from within its industry, through the principals who shape it, and becomes the
                  authority in its field — the standard reference for how it works, and where it is
                  going.
                </p>
                <p>
                  Today, the group publishes across private credit, infrastructure, hospitality, and
                  technology investment, with further titles in development.
                </p>
              </div>

              <p className="mt-12 text-xl md:text-2xl font-light leading-relaxed text-foreground">
                We&rsquo;re building a home for the most curious people in every industry. Come join us.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Button
                  asChild
                  className="rounded-full bg-foreground text-background px-7 py-6 font-light hover:bg-foreground/90"
                >
                  <Link href="/fellowship">Join us</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-full px-7 py-6 font-light border-black/15"
                >
                  <Link href="#publications">Read the publications</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* How we do it */}
        <section className="w-full py-24 border-t">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-baseline gap-4 mb-10">
                <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                  How we do it
                </p>
                <div className="h-px flex-1 bg-black/10" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
                {howWeDoIt.map((step, i) => (
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

        {/* Per-brand showcases */}
        <section className="w-full py-24 border-t bg-white">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center mb-16 space-y-4">
              <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                Pick an industry. Go deep.
              </p>
              <h2 className="font-serif font-light tracking-tight text-3xl md:text-4xl leading-tight">
                A growing roster of journals,
                <br />
                one industry at a time.
              </h2>
            </div>

            <div className="max-w-5xl mx-auto space-y-20">
              <BrandShowcase
                eyebrow="The African Infrastructure Journal"
                headline="Get inside Africa&rsquo;s infrastructure boom."
                body="Reporting on the projects, financing structures, and developers shaping the next decade of infrastructure across the continent — written through interviews with the people building it."
                href="/african-infrastructure-journal"
                image="/images/african-infrastructure-journal-print.png"
                align="left"
              />
              <BrandShowcase
                eyebrow="The Hotel Capital Journal"
                headline="Understand global hospitality capital."
                body="Market analysis, investment strategies, and operator perspectives for capital allocators looking at the hospitality sector — from the people running the deals."
                href="/hotel-capital-journal"
                image="/images/hotel-capital-journal-print.png"
                align="right"
              />
              <BrandShowcase
                eyebrow="The Private Credit Journal"
                headline="Make sense of the private credit boom."
                body="How private credit is being raised, deployed, and re-shaped — built from interviews with the GPs, LPs, and borrowers inside the trade."
                href="/private-credit-journal"
                image="/images/private-credit-journal-print.png"
                align="left"
              />
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="w-full py-24 border-t">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h2 className="font-serif font-light tracking-tight text-3xl md:text-5xl leading-tight">
                Join the readers going deep
                <br />
                on the industries that move markets.
              </h2>
              <p className="text-base text-muted-foreground font-light max-w-xl mx-auto leading-relaxed">
                One short note a week on what we&rsquo;re publishing, who we&rsquo;re
                interviewing, and what we&rsquo;re learning across the journals.
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
            © {new Date().getFullYear()} Playing Field · Knowledge for the people who run industries
          </p>
        </div>
      </footer>
    </div>
  )
}

function BrandShowcase({
  eyebrow,
  headline,
  body,
  href,
  image,
  align,
}: {
  eyebrow: string
  headline: string
  body: string
  href: string
  image: string
  align: "left" | "right"
}) {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 items-center ${
        align === "right" ? "md:[&>*:first-child]:order-2" : ""
      }`}
    >
      <div className="md:col-span-2">
        <div className="aspect-[3/4] overflow-hidden rounded-md bg-white border border-black/10 shadow-sm">
          <img src={image} alt={eyebrow} className="w-full h-full object-cover" />
        </div>
      </div>
      <div className="md:col-span-3 space-y-4">
        <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">{eyebrow}</p>
        <h3
          className="font-serif font-light tracking-tight text-2xl md:text-4xl leading-tight"
          dangerouslySetInnerHTML={{ __html: headline }}
        />
        <p className="text-base text-muted-foreground font-light leading-relaxed">{body}</p>
        <Link
          href={href}
          className="inline-flex items-center gap-2 text-sm font-light text-foreground hover:gap-3 transition-all"
        >
          Read the journal
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}
