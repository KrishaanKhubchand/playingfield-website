"use client"

import Link from "next/link"
import { useState, useEffect, useRef } from "react"

/* ────────────────────────────────────────────
   ListenLabs-style homepage for Playing Field
   Deep navy (#0A2E65) + warm cream (#F5F0E8)
   ──────────────────────────────────────────── */

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
    blurb:
      "The projects, financing, and developers shaping the next decade of African infrastructure.",
  },
  {
    href: "/hotel-capital-journal",
    title: "Hotel Capital Journal",
    image: "/images/hotel-capital-journal.png",
    blurb:
      "Market analysis and operator perspectives for capital allocators in global hospitality.",
  },
  {
    href: "/private-credit-journal",
    title: "Private Credit Journal",
    image: "/images/private-credit-journal.png",
    blurb:
      "How the private credit boom is being financed, deployed, and re-shaped — from the people inside it.",
  },
  {
    href: "/technology-investment-journal",
    title: "Technology Investment Journal",
    image: "/images/technology-investment-journal.png",
    blurb:
      "The funds, founders, and deals shaping how capital flows into technology — written from the inside.",
  },
]

const brandShowcases = [
  {
    eyebrow: "The African Infrastructure Journal",
    headline: "Get inside Africa\u2019s infrastructure boom.",
    body: "Reporting on the projects, financing structures, and developers shaping the next decade of infrastructure across the continent — written through interviews with the people building it.",
    href: "/african-infrastructure-journal",
    image: "/images/african-infrastructure-journal-print.png",
  },
  {
    eyebrow: "The Hotel Capital Journal",
    headline: "Understand global hospitality capital.",
    body: "Market analysis, investment strategies, and operator perspectives for capital allocators looking at the hospitality sector — from the people running the deals.",
    href: "/hotel-capital-journal",
    image: "/images/hotel-capital-journal-print.png",
  },
  {
    eyebrow: "The Private Credit Journal",
    headline: "Make sense of the private credit boom.",
    body: "How private credit is being raised, deployed, and re-shaped — built from interviews with the GPs, LPs, and borrowers inside the trade.",
    href: "/private-credit-journal",
    image: "/images/private-credit-journal-print.png",
  },
]

const howWeDoIt = [
  {
    num: "01.",
    label: "Choose",
    body: "We pick an industry that matters and is under-covered.",
  },
  {
    num: "02.",
    label: "Listen",
    body: "We sit down with the operators, investors, and builders inside it.",
  },
  {
    num: "03.",
    label: "Publish",
    body: "We turn the conversations into a journal readers can use.",
  },
]

// ─── Scrolling Ticker ───────────────────────
function Ticker() {
  const items = Array(14).fill(
    "PLAYING FIELD · KNOWLEDGE FOR THE PEOPLE WHO RUN INDUSTRIES"
  )
  return (
    <div className="bg-[#0A2E65] overflow-hidden whitespace-nowrap py-2.5 select-none">
      <div className="animate-ticker inline-flex">
        {items.map((text, i) => (
          <span
            key={i}
            className="text-white text-[11px] tracking-[0.2em] uppercase mx-8"
          >
            {text}
          </span>
        ))}
      </div>
      <style jsx>{`
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-ticker {
          animation: ticker 35s linear infinite;
        }
      `}</style>
    </div>
  )
}

// ─── Sticky Nav ─────────────────────────────
function StickyNav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener("scroll", handler, { passive: true })
    return () => window.removeEventListener("scroll", handler)
  }, [])

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#F5F0E8]/95 backdrop-blur-md shadow-sm"
          : "bg-[#F5F0E8]"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/home-ll"
          className="text-[#0A2E65] text-lg font-bold tracking-tight"
        >
          Playing Field
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {[
            ["Publications", "#publications"],
            ["About", "#about"],
            ["How We Work", "#how"],
            ["Journals", "#journals"],
          ].map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="text-[#0A2E65]/60 hover:text-[#0A2E65] text-sm font-medium transition-colors"
            >
              {label}
            </a>
          ))}
          <Link
            href="/fellowships"
            className="text-[#0A2E65]/60 hover:text-[#0A2E65] text-sm font-medium transition-colors"
          >
            Fellowships
          </Link>
          <a
            href="#subscribe"
            className="bg-[#0A2E65] text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[#0A2E65]/90 transition-colors"
          >
            Subscribe
          </a>
        </div>
      </div>
    </nav>
  )
}

// ─── Fade-in on scroll ──────────────────────
function FadeIn({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

// ─── Main Page ──────────────────────────────
export default function HomeLLPage() {
  return (
    <div className="min-h-screen bg-[#F5F0E8]">
      <Ticker />
      <StickyNav />

      {/* ═══════════ HERO ═══════════ */}
      <section className="max-w-6xl mx-auto px-6 pt-24 pb-20 md:pt-32 md:pb-28">
        <FadeIn>
          <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-black text-[#0A2E65] leading-[0.95] tracking-tight max-w-5xl mb-8">
            The media group covering the industries that shape the global economy.
          </h1>
        </FadeIn>
        <FadeIn delay={150}>
          <div className="flex flex-wrap gap-4 items-center pt-2">
            <a
              href="#publications"
              className="bg-[#0A2E65] text-white text-base font-semibold px-8 py-3.5 rounded-full hover:bg-[#0A2E65]/90 transition-colors inline-flex items-center gap-2"
            >
              Explore Playing Field
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="ml-1">
                <path d="M8 3v10M4 9l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </FadeIn>
      </section>

      {/* ═══════════ BRAND MOSAIC ═══════════ */}
      <section id="publications" className="pb-24 md:pb-32 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <div className="flex items-center gap-3 mb-12">
              <span className="text-[11px] tracking-[0.2em] uppercase text-[#0A2E65]/40">
                Publications
              </span>
              <div className="flex-1 h-px bg-[#0A2E65]/10" />
              <span className="text-[11px] tracking-[0.2em] uppercase text-[#0A2E65]/40">
                Publications
              </span>
            </div>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8 items-end">
            {brands.map((b, i) => (
              <FadeIn key={b.href} delay={i * 100}>
                <Link
                  href={b.href}
                  className={`group block relative ${
                    i % 2 === 0 ? "md:translate-y-6" : "md:-translate-y-2"
                  }`}
                >
                  <div className="aspect-[3/4] overflow-hidden rounded-xl bg-white/50 border border-[#0A2E65]/[0.06] shadow-sm group-hover:shadow-lg group-hover:border-[#0A2E65]/15 transition-all duration-300">
                    <img
                      src={b.image}
                      alt={b.title}
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="mt-4 space-y-1.5">
                    <p className="text-[10px] uppercase tracking-[0.22em] text-[#0A2E65]/35">
                      Playing Field
                    </p>
                    <p className="text-sm font-bold text-[#0A2E65] leading-snug">
                      {b.title}
                    </p>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ ABOUT (navy section) ═══════════ */}
      <section id="about" className="bg-[#0A2E65] py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[11px] tracking-[0.2em] uppercase text-white/30">
                About
              </span>
              <div className="flex-1 h-px bg-white/10" />
              <span className="text-[11px] tracking-[0.2em] uppercase text-white/30">
                About
              </span>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-16 items-start mt-12">
            <FadeIn>
              <div className="space-y-7 text-xl md:text-2xl text-white/70 leading-relaxed">
                <p>
                  Playing Field is a global media group, home to the defining publications of
                  the world&apos;s most consequential industries.
                </p>
                <p>
                  Economies advance on information. Yet the industries that move the most
                  capital are often the least understood — their expertise held by a small
                  number of firms and the people who lead them.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={150}>
              <div className="space-y-7 text-xl md:text-2xl text-white/70 leading-relaxed">
                <p>
                  Playing Field exists to make that expertise accessible. Each publication is
                  reported from within its industry, through the principals who shape it, and
                  becomes the authority in its field — the standard reference for how it
                  works, and where it is going.
                </p>
                <p>
                  Today, the group publishes across private credit, infrastructure,
                  hospitality, and technology investment, with further titles in development.
                </p>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={200}>
            <div className="mt-16 pt-12 border-t border-white/10">
              <p className="text-2xl md:text-3xl font-extrabold text-white leading-snug max-w-3xl">
                We&apos;re building a home for the most curious people in every industry.
                Come join us.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/fellowship"
                  className="bg-white text-[#0A2E65] text-base font-semibold px-8 py-3.5 rounded-full hover:bg-white/90 transition-colors"
                >
                  Join us
                </Link>
                <a
                  href="#journals"
                  className="border border-white/25 text-white text-base font-semibold px-8 py-3.5 rounded-full hover:bg-white/10 transition-colors"
                >
                  Read the publications
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════ HOW WE DO IT ═══════════ */}
      <section id="how" className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <div className="flex items-center gap-3 mb-16">
              <span className="text-[11px] tracking-[0.2em] uppercase text-[#0A2E65]/40">
                How We Do It
              </span>
              <div className="flex-1 h-px bg-[#0A2E65]/10" />
              <span className="text-[11px] tracking-[0.2em] uppercase text-[#0A2E65]/40">
                How We Do It
              </span>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
            {howWeDoIt.map((step, i) => (
              <FadeIn key={step.label} delay={i * 100}>
                <div className="group">
                  <span className="text-5xl md:text-6xl font-black text-[#0A2E65]/10 group-hover:text-[#0A2E65]/20 transition-colors leading-none tracking-tight">
                    {step.num}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-[#0A2E65] mt-3 mb-3 tracking-tight">
                    {step.label}
                  </h3>
                  <p className="text-base text-[#0A2E65]/50 leading-relaxed">
                    {step.body}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ PER-BRAND SHOWCASES ═══════════ */}
      <section id="journals" className="bg-[#0A2E65]/[0.03] py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-16 space-y-4">
              <span className="text-[11px] tracking-[0.2em] uppercase text-[#0A2E65]/40">
                Pick an industry. Go deep.
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-[#0A2E65] leading-tight tracking-tight">
                A growing roster of journals,
                <br />
                one industry at a time.
              </h2>
            </div>
          </FadeIn>

          <div className="space-y-20">
            {brandShowcases.map((b, i) => (
              <FadeIn key={b.eyebrow} delay={i * 80}>
                <div
                  className={`grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 items-center ${
                    i % 2 !== 0 ? "md:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div className="md:col-span-2">
                    <div className="aspect-[3/4] overflow-hidden rounded-2xl bg-white/60 border border-[#0A2E65]/[0.06] shadow-sm hover:shadow-lg transition-shadow duration-300">
                      <img
                        src={b.image}
                        alt={b.eyebrow}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-3 space-y-4">
                    <p className="text-[11px] uppercase tracking-[0.22em] text-[#0A2E65]/40">
                      {b.eyebrow}
                    </p>
                    <h3 className="text-2xl md:text-4xl font-extrabold text-[#0A2E65] leading-tight tracking-tight">
                      {b.headline}
                    </h3>
                    <p className="text-base text-[#0A2E65]/50 leading-relaxed">
                      {b.body}
                    </p>
                    <Link
                      href={b.href}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[#0A2E65] hover:gap-3 transition-all mt-2"
                    >
                      Read the journal
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ SUBSCRIBE CTA ═══════════ */}
      <section id="subscribe" className="bg-[#0A2E65] py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tight mb-6">
              Join the readers going deep
              <br className="hidden md:block" />
              {" "}on the industries that move markets.
            </h2>
          </FadeIn>
          <FadeIn delay={100}>
            <p className="text-lg text-white/45 max-w-xl mx-auto mb-10">
              One short note a week on what we&apos;re publishing, who we&apos;re interviewing,
              and what we&apos;re learning across the journals.
            </p>
          </FadeIn>
          <FadeIn delay={200}>
            <form className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email"
                className="rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/30 px-6 py-3.5 text-sm w-full focus:outline-none focus:ring-2 focus:ring-white/30 focus:bg-white/15 transition-colors"
              />
              <button
                type="submit"
                className="bg-white text-[#0A2E65] text-base font-semibold px-8 py-3.5 rounded-full hover:bg-white/90 transition-colors w-full sm:w-auto inline-flex items-center justify-center gap-2"
              >
                Subscribe
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </form>
          </FadeIn>
          <FadeIn delay={300}>
            <p className="text-sm text-white/25 mt-6">
              Free, unsubscribe anytime.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════ FOOTER ═══════════ */}
      <footer className="bg-[#0A2E65] border-t border-white/10 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-[11px] uppercase tracking-[0.25em] text-white/25">
              © {new Date().getFullYear()} Playing Field · Knowledge for the
              people who run industries
            </p>
            <div className="flex items-center gap-8">
              <Link
                href="/manifesto"
                className="text-[11px] uppercase tracking-[0.2em] text-white/25 hover:text-white/50 transition-colors"
              >
                Manifesto
              </Link>
              <Link
                href="/fellowships"
                className="text-[11px] uppercase tracking-[0.2em] text-white/25 hover:text-white/50 transition-colors"
              >
                Fellowships
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
