"use client"

import { useState, useEffect, useRef } from "react"

/* ────────────────────────────────────────────
   ListenLabs-style redesign of the PCJ Fellowship
   Deep navy (#0A2E65) + warm cream (#F5F0E8)
   ──────────────────────────────────────────── */

const benefits = [
  {
    num: "01.",
    title: "Build direct relationships with the best in the asset class",
    desc: "Interview the senior investors and allocators shaping private credit — on the record, every week. The relationships compound long after the fellowship ends.",
  },
  {
    num: "02.",
    title: "Develop a genuine understanding of how private credit works",
    desc: "Go deep on one corner of the market and learn how capital actually moves through it. Many of the best investors started exactly this way — Harry Stebbings built 20VC by interviewing the people he wanted to learn from.",
  },
  {
    num: "03.",
    title: "Produce a body of work that signals seriousness",
    desc: "Publish a canonical resource on the topics you cover — a portfolio that keeps working for you long after the programme ends.",
  },
]

const criteria = [
  {
    icon: "🧭",
    title: "Genuine curiosity about finance and private credit",
    desc: "You're drawn to how capital actually moves through the economy, and you want to spend six months going deep on one of its most consequential corners.",
  },
  {
    icon: "📊",
    title: "A basic financial background — or the commitment to build one fast",
    desc: "You can engage with the substance — covenants, structuring, fund mechanics, the rest — or you're ready to do the work to get there.",
  },
  {
    icon: "🎤",
    title: "Communication and gravitas",
    desc: "You write and speak clearly, and you can hold your own across the table from a senior practitioner. The access we offer only compounds if interviewees come away impressed.",
  },
  {
    icon: "⚡",
    title: "Reliability",
    desc: "The fellowship is built around ownership. We expect you to ship on cadence, follow up on outreach, and treat interviewees' time with the seriousness it deserves.",
  },
  {
    icon: "🕐",
    title: "Availability",
    desc: "Six months at roughly 10–20 hours per week. You should have the bandwidth to commit consistently.",
  },
]

const faqs = [
  {
    question: "What does a fellow actually do?",
    answer:
      "Pick a coverage area in private credit, build an outreach pipeline, and run long-form interviews with senior practitioners — turning each into a published Q&A. A simple loop: find the right people, ask the right questions, and publish work people learn from.",
  },
  {
    question: "Is the fellowship remote?",
    answer:
      "Yes — fellows work remotely on their own schedule, with regular check-ins with the founding team.",
  },
  {
    question: "How do I choose a coverage area?",
    answer:
      "You pick a beat from a shortlist, or propose your own, when you apply. Committing to one upfront is part of how we select.",
  },
  {
    question: "What happens after the fellowship?",
    answer:
      "The relationships, the published work, and the expertise are yours to keep — a foundation many fellows use to move into investing roles in the asset class.",
  },
]

// ─── Scrolling Ticker ───────────────────────
function Ticker() {
  const items = Array(14).fill("APPLICATIONS OPEN · INAUGURAL COHORT 2026")
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
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
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
        <a href="/" className="text-[#0A2E65] text-lg font-bold tracking-tight">
          Playing Field
        </a>
        <div className="hidden md:flex items-center gap-8">
          {[
            ["The Opportunity", "#opportunity"],
            ["What You'll Get", "#benefits"],
            ["Criteria", "#criteria"],
            ["FAQ", "#faq"],
          ].map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="text-[#0A2E65]/60 hover:text-[#0A2E65] text-sm font-medium transition-colors"
            >
              {label}
            </a>
          ))}
          <a
            href="#apply"
            className="bg-[#0A2E65] text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[#0A2E65]/90 transition-colors"
          >
            Apply Now
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
export default function PrivateCreditFellowshipLL() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-[#F5F0E8]">
      <Ticker />
      <StickyNav />

      {/* ═══════════ HERO ═══════════ */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-24 md:pt-28 md:pb-32">
        <FadeIn>
          <div className="inline-block mb-6">
            <span className="text-[11px] tracking-[0.2em] uppercase text-[#0A2E65]/50 border border-[#0A2E65]/15 rounded-full px-4 py-1.5">
              Inaugural Cohort · Applications Open
            </span>
          </div>
        </FadeIn>
        <FadeIn delay={100}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-[#0A2E65] leading-[0.95] tracking-tight max-w-5xl mb-8">
            The Private Credit Fellowship for University Students
          </h1>
        </FadeIn>
        <FadeIn delay={200}>
          <p className="text-lg md:text-xl text-[#0A2E65]/55 leading-relaxed max-w-2xl mb-10">
            A six-month fellowship designed to connect ambitious university students with
            practitioners working in private credit, deepen their understanding of the asset
            class, and give them a platform to build a lasting career in it.
          </p>
        </FadeIn>
        <FadeIn delay={300}>
          <div className="flex flex-wrap gap-4 items-center">
            <a
              href="#apply"
              className="bg-[#0A2E65] text-white text-base font-semibold px-8 py-3.5 rounded-full hover:bg-[#0A2E65]/90 transition-colors inline-flex items-center gap-2"
            >
              Apply Now
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="ml-1"
              >
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <span className="text-sm text-[#0A2E65]/35">
              It takes under 2 minutes to apply.
            </span>
          </div>
        </FadeIn>
      </section>

      {/* ═══════════ SCARCITY STATS ═══════════ */}
      <section className="border-y border-[#0A2E65]/10 py-12">
        <div className="max-w-4xl mx-auto px-6">
          <FadeIn>
            <div className="grid grid-cols-3 gap-8 text-center">
              {[
                { value: "4", label: "Junior Fellows" },
                { value: "6", label: "Months" },
                { value: "10–20", label: "Hours / Week" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-4xl md:text-6xl font-black text-[#0A2E65] mb-2 tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-[11px] uppercase tracking-[0.2em] text-[#0A2E65]/40">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════ THE OPPORTUNITY ═══════════ */}
      <section id="opportunity" className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <FadeIn>
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <span className="text-[11px] tracking-[0.2em] uppercase text-[#0A2E65]/40">
                    The Opportunity
                  </span>
                  <div className="flex-1 h-px bg-[#0A2E65]/10" />
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[#0A2E65] leading-tight mb-6">
                  A real foothold in private credit
                </h2>
                <div className="space-y-5 text-lg text-[#0A2E65]/60 leading-relaxed">
                  <p>
                    We&apos;re launching a fellowship programme for ambitious university students, in
                    collaboration with{" "}
                    <span className="font-bold text-[#0A2E65]/80">
                      The Private Credit Journal
                    </span>{" "}
                    — a market-leading publication focused on private credit.
                  </p>
                  <p>
                    Private credit has moved from a niche corner of finance to a core layer of how
                    the modern economy is financed — from corporate lending to infrastructure to the
                    financing stacks behind private equity. The tailwind behind it is one of the
                    longest in finance, and the asset class is only getting more central from here.
                  </p>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={150}>
              <blockquote className="border-l-4 border-[#0A2E65] pl-6 py-2">
                <p className="text-xl md:text-2xl font-serif italic text-[#0A2E65]/75 leading-snug">
                  &ldquo;Our aim is to give ambitious students a real foothold in the asset class —
                  through self-directed research, direct connection with practitioners, and a body
                  of work built alongside the publication.&rdquo;
                </p>
              </blockquote>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ═══════════ WHAT YOU'LL GET (blue section) ═══════════ */}
      <section id="benefits" className="bg-[#0A2E65] py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[11px] tracking-[0.2em] uppercase text-white/30">
                What You&apos;ll Get
              </span>
              <div className="flex-1 h-px bg-white/10" />
              <span className="text-[11px] tracking-[0.2em] uppercase text-white/30">
                What You&apos;ll Get
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-16 max-w-3xl">
              What the fellowship gives you
            </h2>
          </FadeIn>

          <div className="space-y-16">
            {benefits.map((item, i) => (
              <FadeIn key={i} delay={i * 100}>
                <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-4 md:gap-12 items-start border-t border-white/10 pt-12 first:border-t-0 first:pt-0">
                  <span className="text-6xl md:text-7xl font-black text-white/15 leading-none tracking-tight">
                    {item.num}
                  </span>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-4 tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-lg text-white/55 leading-relaxed max-w-2xl">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ WHAT WE'RE LOOKING FOR ═══════════ */}
      <section id="criteria" className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[11px] tracking-[0.2em] uppercase text-[#0A2E65]/40">
                Criteria
              </span>
              <div className="flex-1 h-px bg-[#0A2E65]/10" />
              <span className="text-[11px] tracking-[0.2em] uppercase text-[#0A2E65]/40">
                Criteria
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#0A2E65] leading-tight mb-6 max-w-3xl">
              What we&apos;re looking for
            </h2>
            <p className="text-lg text-[#0A2E65]/50 mb-14 max-w-2xl">
              We care about a few things:
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {criteria.map((item, i) => (
              <FadeIn key={i} delay={i * 70}>
                <div className="bg-white/60 backdrop-blur-sm border border-[#0A2E65]/[0.06] rounded-2xl p-8 hover:border-[#0A2E65]/15 hover:shadow-lg transition-all duration-300 h-full">
                  <div className="text-3xl mb-4">{item.icon}</div>
                  <h3 className="text-lg font-bold text-[#0A2E65] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#0A2E65]/50 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={200}>
            <p className="text-base text-[#0A2E65]/45 leading-relaxed mt-12 max-w-2xl">
              We see this as closer to research — laying the foundation to think about private
              credit as an investor — than pure-play journalism. We like opportunism and a taste
              for ideas.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════ PROGRAM DETAILS ═══════════ */}
      <section className="bg-[#0A2E65]/[0.03] py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <FadeIn>
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <span className="text-[11px] tracking-[0.2em] uppercase text-[#0A2E65]/40">
                    Program Details
                  </span>
                  <div className="flex-1 h-px bg-[#0A2E65]/10" />
                </div>
                <div className="space-y-6">
                  {[
                    {
                      label: "Format",
                      value:
                        "A six-month fellowship, ~10–20 hours per week — designed to fit alongside your studies or current work.",
                    },
                    {
                      label: "Cohort",
                      value: "Four junior fellows in the inaugural cohort.",
                    },
                    {
                      label: "Who it's for",
                      value:
                        "Undergraduates, MBAs, JDs, and others early in their careers. We're open on background — what matters is that you can engage credibly with practitioners and write well.",
                    },
                    {
                      label: "Compensation",
                      value:
                        "Unpaid for now, with stipends as the publication grows.",
                    },
                  ].map((detail) => (
                    <div
                      key={detail.label}
                      className="border-b border-[#0A2E65]/8 pb-5 last:border-b-0"
                    >
                      <dt className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#0A2E65]/35 mb-2">
                        {detail.label}
                      </dt>
                      <dd className="text-base text-[#0A2E65]/65 leading-relaxed">
                        {detail.value}
                      </dd>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={150}>
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <span className="text-[11px] tracking-[0.2em] uppercase text-[#0A2E65]/40">
                    How to Stand Out
                  </span>
                  <div className="flex-1 h-px bg-[#0A2E65]/10" />
                </div>
                <div className="bg-white/70 border border-[#0A2E65]/[0.06] rounded-2xl p-8">
                  <p className="text-base text-[#0A2E65]/60 leading-relaxed mb-6">
                    We weight initiative highly — it&apos;s one of the clearest signals of agency.
                  </p>
                  <p className="text-base text-[#0A2E65]/60 leading-relaxed">
                    If private credit is new to you but you&apos;ve taught yourself the fundamentals,
                    broken down a real deal, or worked through the basics on your own, show us —
                    that matters more than credentials. The candidates who stand out have already
                    started doing the work before they&apos;re asked.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ═══════════ HOW TO APPLY ═══════════ */}
      <section id="apply" className="py-24 md:py-32 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[11px] tracking-[0.2em] uppercase text-[#0A2E65]/40">
                Apply
              </span>
              <div className="flex-1 h-px bg-[#0A2E65]/10" />
              <span className="text-[11px] tracking-[0.2em] uppercase text-[#0A2E65]/40">
                Apply
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#0A2E65] leading-tight mb-6 max-w-3xl">
              How to apply
            </h2>
          </FadeIn>
          <FadeIn delay={100}>
            <p className="text-lg text-[#0A2E65]/55 leading-relaxed max-w-2xl mb-10">
              Applying takes a few minutes — submit your CV and complete a short application
              form. We review every application within a week, and if yours stands out, we&apos;ll
              set up a conversation with the founding team and a short trial task before
              extending an offer.
            </p>
          </FadeIn>
          <FadeIn delay={200}>
            <div className="flex flex-wrap gap-4 items-center">
              <a
                href="#"
                className="bg-[#0A2E65] text-white text-base font-semibold px-8 py-3.5 rounded-full hover:bg-[#0A2E65]/90 transition-colors inline-flex items-center gap-2"
              >
                Apply Now
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="ml-1"
                >
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <span className="text-sm text-[#0A2E65]/35">
                Under 2 minutes · reviewed within 7 days
              </span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════ FAQ ═══════════ */}
      <section id="faq" className="bg-[#0A2E65]/[0.03] py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6">
          <FadeIn>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[11px] tracking-[0.2em] uppercase text-[#0A2E65]/40">
                FAQ
              </span>
              <div className="flex-1 h-px bg-[#0A2E65]/10" />
              <span className="text-[11px] tracking-[0.2em] uppercase text-[#0A2E65]/40">
                FAQ
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0A2E65] leading-tight mb-12">
              Frequently asked questions
            </h2>
          </FadeIn>

          <div>
            {faqs.map((faq, i) => (
              <FadeIn key={i} delay={i * 60}>
                <div className="border-b border-[#0A2E65]/10">
                  <button
                    onClick={() =>
                      setOpenIndex(openIndex === i ? null : i)
                    }
                    className="w-full py-6 flex justify-between items-center text-left group"
                  >
                    <span className="text-base md:text-lg font-bold text-[#0A2E65] group-hover:text-[#0A2E65]/80 transition-colors">
                      {faq.question}
                    </span>
                    <span
                      className={`text-[#0A2E65]/30 ml-4 text-2xl font-light transition-transform duration-300 ${
                        openIndex === i ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-300 ${
                      openIndex === i
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="pb-6 text-base leading-relaxed text-[#0A2E65]/55">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ FINAL CTA ═══════════ */}
      <section className="bg-[#0A2E65] py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6 tracking-tight">
              Ready to apply?
            </h2>
          </FadeIn>
          <FadeIn delay={100}>
            <p className="text-lg text-white/45 max-w-xl mx-auto mb-10">
              It takes under 2 minutes to apply. We review every application within a week.
            </p>
          </FadeIn>
          <FadeIn delay={200}>
            <a
              href="#apply"
              className="bg-white text-[#0A2E65] text-base font-semibold px-10 py-4 rounded-full hover:bg-white/90 transition-colors inline-flex items-center gap-2"
            >
              Apply Now
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="ml-1"
              >
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </FadeIn>
          <FadeIn delay={300}>
            <p className="text-sm text-white/25 mt-8">
              When in doubt, just apply.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════ FOOTER ═══════════ */}
      <footer className="bg-[#0A2E65] border-t border-white/10 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-[11px] uppercase tracking-[0.25em] text-white/25">
              © {new Date().getFullYear()} Private Credit Fellowship · The
              Private Credit Journal
            </p>
            <a
              href="https://playingfield.group"
              className="text-[11px] uppercase tracking-[0.25em] text-white/25 hover:text-white/50 transition-colors"
            >
              Playing Field
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
