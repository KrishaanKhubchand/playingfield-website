import type { ReactNode } from "react"
import Link from "next/link"
import { ArrowRight, ChevronDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { SubscribeForm } from "@/components/subscribe-form"

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

const pfStandards = [
  { name: "Rigour", body: "Understanding earned through depth and volume — hundreds of conversations, studied until the patterns hold." },
  { name: "Independence", body: "We report without agenda, and answer to our readers alone." },
  { name: "Access", body: "We work from within each industry, alongside the people who lead it." },
  { name: "Generosity", body: "We contribute to the fields we cover without keeping score." },
]

const editorialStandards = [
  { name: "Primary sources", body: "Intelligence drawn directly from the principals who shape a field — never secondhand." },
  { name: "Depth over coverage", body: "A single industry understood completely, over many skimmed." },
  { name: "Signal, not noise", body: "Lasting understanding, not commentary." },
]

export default function HomeV4() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      {/* Subscribe strip */}
      <div className="w-full border-y border-black/10 bg-indigo-50/60">
        <div className="container px-4 md:px-6 py-4">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="text-sm">
              <p className="font-medium text-foreground">Subscribe to the Playing Field briefing</p>
              <p className="text-muted-foreground font-light">
                A weekly briefing on the industries we cover.
                <span className="italic"> Complimentary.</span>
              </p>
            </div>
            <SubscribeForm />
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
            <div className="max-w-5xl mx-auto text-center space-y-10">
              <h1 className="font-serif font-light tracking-tight leading-[1.1] text-3xl md:text-4xl lg:text-5xl text-foreground text-balance mx-auto max-w-4xl">
                Playing Field is a media group covering the industries that shape the global economy.
              </h1>

              <div className="pt-4">
                <Button
                  asChild
                  className="rounded-full bg-foreground text-background px-7 py-6 font-light hover:bg-foreground/90"
                >
                  <Link href="#publications">
                    Explore Playing Field
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Brand mosaic (under hero, like the original) */}
        <section className="w-full pb-24 relative">
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
                    <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Playing Field</p>
                    <p className="text-sm font-serif font-light leading-snug">{b.title}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section className="w-full py-24 border-t bg-white">
          <AboutBlock label="About">
            <h2 className="font-serif font-light tracking-tight text-3xl md:text-4xl leading-tight text-foreground">
              Playing Field is a global media group, home to the defining publications of the
              world&rsquo;s most consequential industries.
            </h2>
            <p className="mt-6 text-lg md:text-xl font-light leading-relaxed text-muted-foreground">
              Each is devoted to a single industry. Its authority comes from within — from the
              operators, investors, and leaders who shape the field.
            </p>
          </AboutBlock>
        </section>

        {/* Our Mission */}
        <section className="w-full py-24 border-t">
          <AboutBlock label="Our Mission">
            <h2 className="font-serif font-light tracking-tight text-3xl md:text-4xl leading-tight text-foreground">
              To be the definitive source of intelligence on the industries that move the global
              economy.
            </h2>
            <div className="mt-6 space-y-5 text-lg md:text-xl font-light leading-relaxed text-muted-foreground">
              <p>
                Economies advance on information. Yet the industries that move the most capital are
                often the least understood — their expertise held by a small number of firms and the
                people who lead them.
              </p>
              <p>
                Playing Field exists to make that expertise accessible: rigorous, sourced directly from
                the principals who shape each field, and trusted by the professionals who operate
                within it.
              </p>
              <p>
                Each publication becomes the authority in its industry — the standard reference for how
                it works, and where it is going.
              </p>
            </div>
          </AboutBlock>
        </section>

        {/* Our Standards */}
        <section className="w-full py-24 border-t bg-white">
          <AboutBlock label="Our Standards">
            <h2 className="font-serif font-light tracking-tight text-3xl md:text-4xl leading-tight text-foreground">
              Every publication is held to the same standards.
            </h2>

            <div className="mt-10 space-y-12">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.14em] text-foreground mb-1">
                  How we work
                </p>
                <dl className="border-t border-black/10">
                  {pfStandards.map((s) => (
                    <div key={s.name} className="border-b border-black/10 py-4">
                      <dt className="font-medium text-foreground">{s.name}</dt>
                      <dd className="mt-1 text-muted-foreground font-light leading-relaxed">{s.body}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div>
                <p className="text-sm font-medium uppercase tracking-[0.14em] text-foreground mb-1">
                  What we publish
                </p>
                <dl className="border-t border-black/10">
                  {editorialStandards.map((s) => (
                    <div key={s.name} className="border-b border-black/10 py-4">
                      <dt className="font-medium text-foreground">{s.name}</dt>
                      <dd className="mt-1 text-muted-foreground font-light leading-relaxed">{s.body}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </AboutBlock>
        </section>

        {/* Our Name */}
        <section className="w-full py-24 border-t">
          <AboutBlock label="Our Name">
            <h2 className="font-serif font-light tracking-tight text-3xl md:text-4xl leading-tight text-foreground">
              The name reflects how the best operate.
            </h2>
            <p className="mt-6 text-lg md:text-xl font-light leading-relaxed text-muted-foreground">
              The investor Graham Duncan observed that the most accomplished people treat their field
              as a game — and that the greatest learn to see the entire board. Industries are those
              fields. Playing Field is built for the people who intend to master them.
            </p>
          </AboutBlock>
        </section>

        {/* Per-brand showcases */}
        <section id="publications" className="w-full py-24 border-t scroll-mt-24">
          <div className="container px-4 md:px-6 mb-16">
            <div className="max-w-4xl mx-auto text-center space-y-4">
              <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                The publications
              </p>
              <h2 className="font-serif font-light tracking-tight text-3xl md:text-4xl leading-tight">
                A portfolio across the world&rsquo;s consequential industries.
              </h2>
            </div>
          </div>
          <div className="max-w-5xl mx-auto px-4 md:px-6 space-y-20">
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
        </section>

        {/* Final CTA */}
        <section className="w-full py-24 border-t bg-white">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h2 className="font-serif font-light tracking-tight text-3xl md:text-5xl leading-tight">
                Built for the people who lead these industries — and those determined to join them.
              </h2>
              <p className="text-base text-muted-foreground font-light max-w-xl mx-auto leading-relaxed">
                Read the publications, or apply to the fellowship.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <Button
                  asChild
                  className="rounded-full bg-foreground text-background px-7 py-6 font-light hover:bg-foreground/90"
                >
                  <Link href="/fellowship">
                    Join us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="rounded-full px-7 py-6 font-light border-black/15">
                  <Link href="#publications">Read the publications</Link>
                </Button>
              </div>
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

function AboutBlock({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="container px-4 md:px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[160px_1fr] gap-4 md:gap-16">
        <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground md:pt-3">{label}</p>
        <div>{children}</div>
      </div>
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
