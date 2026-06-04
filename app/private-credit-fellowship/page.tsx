"use client"

import { useState } from "react"

const benefits = [
  {
    title: "Build direct relationships with the best in the asset class",
    description:
      "Interview the senior investors and allocators shaping private credit — on the record, every week. The relationships compound long after the fellowship ends.",
  },
  {
    title: "Develop a genuine understanding of how private credit works",
    description:
      "Go deep on one corner of the market and learn how capital actually moves through it. Many of the best investors started exactly this way — Harry Stebbings built 20VC by interviewing the people he wanted to learn from.",
  },
  {
    title: "Produce a body of work that signals seriousness",
    description:
      "Publish a canonical resource on the topics you cover — a portfolio that keeps working for you long after the programme ends.",
  },
]

const criteria = [
  {
    title: "Genuine curiosity about finance and private credit",
    description:
      "You're drawn to how capital actually moves through the economy, and you want to spend six months going deep on one of its most consequential corners.",
  },
  {
    title: "A basic financial background — or the commitment to build one fast",
    description:
      "You can engage with the substance — covenants, structuring, fund mechanics, the rest — or you're ready to do the work to get there.",
  },
  {
    title: "Communication and gravitas",
    description:
      "You write and speak clearly, and you can hold your own across the table from a senior practitioner. The access we offer only compounds if interviewees come away impressed.",
  },
  {
    title: "Reliability",
    description:
      "The fellowship is built around ownership. We expect you to ship on cadence, follow up on outreach, and treat interviewees' time with the seriousness it deserves.",
  },
  {
    title: "Availability",
    description:
      "Six months at roughly 10–20 hours per week. You should have the bandwidth to commit consistently.",
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

export default function PrivateCreditFellowship() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <main className="min-h-screen bg-white text-black">
      {/* Hero */}
      <section className="px-6 pt-24 pb-20 md:pt-32 md:pb-24">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-black/15 text-xs uppercase tracking-[0.2em] text-black/70">
            Inaugural Cohort • Applications Open
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.05] text-black">
            The Private Credit Fellowship for University Students
          </h1>

          <p className="text-xl md:text-2xl text-black/70 leading-relaxed max-w-4xl mx-auto">
            A six-month fellowship designed to connect ambitious university students with
            practitioners working in private credit, deepen their understanding of the asset
            class, and give them a platform to build a lasting career in it.
          </p>

          <div className="pt-4">
            <a
              href="#apply"
              className="inline-block bg-black text-white text-sm font-bold uppercase tracking-[0.2em] px-10 py-5 hover:opacity-80 transition-opacity"
            >
              Apply Now
            </a>
            <p className="text-sm text-black/50 mt-4">
              It takes under 2 minutes to apply.
            </p>
          </div>
        </div>
      </section>

      {/* Scarcity callout */}
      <section className="px-6 py-12 border-y border-black/10">
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-extrabold text-black mb-2">4</div>
              <div className="text-xs uppercase tracking-[0.2em] text-black/60">Junior Fellows</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-extrabold text-black mb-2">6</div>
              <div className="text-xs uppercase tracking-[0.2em] text-black/60">Months</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-extrabold text-black mb-2">10–20</div>
              <div className="text-xs uppercase tracking-[0.2em] text-black/60">Hours / Week</div>
            </div>
          </div>
        </div>
      </section>

      {/* The Opportunity */}
      <section className="px-6 py-24">
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-black mb-10 text-center">
            The Opportunity
          </h2>
          <p className="text-lg leading-relaxed text-black">
            We&apos;re launching a fellowship programme for ambitious university students, in
            collaboration with <span className="font-bold">The Private Credit Journal</span> — a
            market-leading publication focused on private credit.
          </p>
          <p className="text-lg leading-relaxed text-black">
            Private credit has moved from a niche corner of finance to a core layer of how the
            modern economy is financed — from corporate lending to infrastructure to the financing
            stacks behind private equity. The tailwind behind it is one of the longest in finance,
            and the asset class is only getting more central from here.
          </p>
          <p className="text-lg leading-relaxed text-black">
            Our aim is to give ambitious students a real foothold in the asset class — through
            self-directed research, direct connection with practitioners, and a body of work built
            alongside the publication.
          </p>
        </div>
      </section>

      {/* What You'll Get (numbered editorial rows) */}
      <section className="px-6 py-24 bg-gray-50 border-y border-black/10">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-baseline gap-4 mb-14">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-black">What You&apos;ll Get</h2>
            <div className="h-px flex-1 bg-black/10" />
          </div>

          <div className="space-y-12 md:space-y-14">
            {benefits.map((b, i) => (
              <div
                key={b.title}
                className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-3 md:gap-10 items-start border-t border-black/10 pt-10 first:border-t-0 first:pt-0"
              >
                <span className="text-5xl md:text-6xl font-extrabold tracking-tight text-black/20 leading-none tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-black mb-3">
                    {b.title}
                  </h3>
                  <p className="text-black/70 leading-relaxed text-lg max-w-2xl">{b.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Should Apply */}
      <section className="px-6 py-24 bg-black/[0.02] border-y border-black/10">
        <div className="max-w-2xl mx-auto space-y-5">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-black mb-10 text-center">
            What We&apos;re Looking For
          </h2>
          <p className="text-lg leading-relaxed text-black">We care about a few things:</p>
          <ul className="space-y-5 pt-1">
            {criteria.map((c) => (
              <li key={c.title} className="text-lg leading-relaxed text-black">
                <span className="font-bold">{c.title}.</span> {c.description}
              </li>
            ))}
          </ul>
          <p className="text-lg leading-relaxed text-black pt-4">
            We see this as closer to research — laying the foundation to think about private credit
            as an investor — than pure-play journalism. We like opportunism and a taste for ideas.
          </p>
        </div>
      </section>

      {/* Program Details */}
      <section className="px-6 py-24">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-black mb-10 text-center">
            Program Details
          </h2>
          <dl className="border-y border-black/10 divide-y divide-black/10">
            <div className="grid grid-cols-1 sm:grid-cols-[9rem_1fr] gap-1 sm:gap-6 py-5">
              <dt className="text-xs font-bold uppercase tracking-[0.18em] text-black/50 sm:pt-1">
                Format
              </dt>
              <dd className="text-lg leading-relaxed text-black">
                A six-month fellowship, ~10–20 hours per week — designed to fit alongside your
                studies or current work.
              </dd>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-[9rem_1fr] gap-1 sm:gap-6 py-5">
              <dt className="text-xs font-bold uppercase tracking-[0.18em] text-black/50 sm:pt-1">
                Cohort
              </dt>
              <dd className="text-lg leading-relaxed text-black">
                Four junior fellows in the inaugural cohort.
              </dd>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-[9rem_1fr] gap-1 sm:gap-6 py-5">
              <dt className="text-xs font-bold uppercase tracking-[0.18em] text-black/50 sm:pt-1">
                Who it&apos;s for
              </dt>
              <dd className="text-lg leading-relaxed text-black">
                Undergraduates, MBAs, JDs, and others early in their careers. We&apos;re open on
                background — what matters is that you can engage credibly with practitioners and
                write well.
              </dd>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-[9rem_1fr] gap-1 sm:gap-6 py-5">
              <dt className="text-xs font-bold uppercase tracking-[0.18em] text-black/50 sm:pt-1">
                Compensation
              </dt>
              <dd className="text-lg leading-relaxed text-black">
                Unpaid for now, with stipends as the publication grows.
              </dd>
            </div>
          </dl>
        </div>
      </section>

      {/* How to Apply */}
      <section id="apply" className="px-6 py-24 bg-black/[0.02] border-y border-black/10 scroll-mt-20">
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-black mb-10 text-center">
            How to Apply
          </h2>
          <p className="text-lg leading-relaxed text-black">
            Applying takes a few minutes — submit your CV and complete a short application form.
            We review every application within a week, and if yours stands out, we&apos;ll set up a
            conversation with the founding team and a short trial task before extending an offer.
          </p>

          <div className="pt-2">
            <h3 className="text-base font-bold text-black mb-3">How to Stand Out</h3>
            <p className="text-lg leading-relaxed text-black">
              We weight initiative highly — it&apos;s one of the clearest signals of agency. If
              private credit is new to you but you&apos;ve taught yourself the fundamentals, broken
              down a real deal, or worked through the basics on your own, show us — that matters more
              than credentials. The candidates who stand out have already started doing the work
              before they&apos;re asked.
            </p>
          </div>

          <div className="pt-6 text-center">
            <a
              href="#"
              className="inline-block bg-black text-white text-sm font-bold uppercase tracking-[0.2em] px-10 py-5 hover:opacity-80 transition-opacity"
            >
              Apply Now
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-24">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-black mb-12 text-center">
            FAQ
          </h2>
          <div>
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-black/10">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full py-5 flex justify-between items-center text-left"
                >
                  <span className="text-base md:text-lg font-bold text-black">{faq.question}</span>
                  <span className="text-black/40 ml-4 text-xl font-light">
                    {openIndex === i ? "−" : "+"}
                  </span>
                </button>
                {openIndex === i && (
                  <p className="pb-5 text-base leading-relaxed text-black/80">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="px-6 py-32 bg-black/[0.02] border-t border-black/10">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.1] text-black">
            Ready to apply?
          </h2>
          <p className="text-lg text-black/70 leading-relaxed">
            It takes under 2 minutes to apply. We review every application within a week.
          </p>
          <div className="pt-4">
            <a
              href="#apply"
              className="inline-block bg-black text-white text-sm font-bold uppercase tracking-[0.2em] px-10 py-5 hover:opacity-80 transition-opacity"
            >
              Apply Now
            </a>
            <p className="text-sm text-black/50 mt-4">When in doubt, just apply.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-black/10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[10px] uppercase tracking-[0.25em] text-black/50">
            © {new Date().getFullYear()} Private Credit Fellowship · The Private Credit Journal
          </p>
        </div>
      </footer>
    </main>
  )
}
