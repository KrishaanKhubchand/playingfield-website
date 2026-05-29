"use client"

import { useState } from "react"

const benefits = [
  {
    title: "Senior Relationships",
    description:
      "Direct relationships with the senior investors and allocators shaping private credit — the people you'd otherwise spend years trying to meet.",
  },
  {
    title: "A Published Portfolio",
    description:
      "In-depth interviews and analysis under your name, distributed through Private Credit Journal. Work that lives on as a calling card.",
  },
  {
    title: "Editorial Mentorship",
    description:
      "Work directly with the founding team on developing your thesis, sharpening your questions, and shaping editorial direction.",
  },
  {
    title: "A Path Into the Industry",
    description:
      "Deep expertise in a corner of the market that matters, plus the network that turns expertise into opportunity.",
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
    answer: "6 months, with the network and relationships continuing long after.",
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
      "About 15 minutes, including a 90-second video. We review every application within a week. Selected applicants have a conversation with the founding team and complete a short trial task.",
  },
  {
    question: "What does a fellow actually do?",
    answer:
      "Develop a thesis on a specific corner of private credit, build an outreach pipeline, conduct in-depth interviews with senior investors and allocators, and contribute to the editorial direction of the publication.",
  },
]

export default function PrivateCreditFellowshipD1() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <main className="mx-auto max-w-[800px] px-6 py-10 bg-white text-black">
      {/* Header */}
      <header className="mb-10">
        <h1 className="font-sans text-3xl md:text-4xl font-extrabold tracking-tight text-black">
          Private Credit Fellowship
        </h1>
      </header>

      {/* Hero */}
      <section className="mb-14">
        <p className="text-base leading-relaxed text-black max-w-2xl">
          A 6-month fellowship for the next generation of private credit researchers —
          going deep on the corners of the market that matter, alongside the senior
          investors and allocators shaping them.
        </p>
      </section>

      {/* About / BodyCopy */}
      <section className="mb-14 space-y-4">
        <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-black mb-8">
          About
        </h2>
        <p className="text-base leading-relaxed text-black">
          The Private Credit Fellowship is designed to help curious, early-career talent
          develop real expertise in private credit — by going deep on a specific corner
          of the market and publishing the kinds of interviews and analysis that build
          a reputation.
        </p>
        <p className="text-base leading-relaxed text-black">
          As a fellow, you&apos;ll:
        </p>
        <ul className="space-y-2">
          <li className="text-base leading-relaxed text-black flex items-start gap-2">
            <span className="text-black/40 select-none">→</span>
            Develop a thesis on a specific corner of private credit
          </li>
          <li className="text-base leading-relaxed text-black flex items-start gap-2">
            <span className="text-black/40 select-none">→</span>
            Build an outreach pipeline to the senior leaders shaping that market
          </li>
          <li className="text-base leading-relaxed text-black flex items-start gap-2">
            <span className="text-black/40 select-none">→</span>
            Conduct in-depth interviews with investors, allocators, and operators
          </li>
          <li className="text-base leading-relaxed text-black flex items-start gap-2">
            <span className="text-black/40 select-none">→</span>
            Contribute to the editorial direction of Private Credit Journal
          </li>
        </ul>
        <p className="text-base leading-relaxed text-black">
          This is an unpaid fellowship for the inaugural cohort. As Private Credit
          Journal grows, we expect to introduce stipends for future cohorts. The work
          you publish is yours, and it&apos;s distributed under your name.
        </p>
        <p className="text-base leading-relaxed text-black">
          We&apos;re only accepting four junior fellows in this inaugural cohort, to keep
          the cohort tight and the editorial quality high.
        </p>
        <p className="text-base leading-relaxed font-bold text-black">
          The application takes about 15 minutes, including a 90-second video. When in doubt, just apply.
        </p>
        <div className="pt-2">
          <a
            href="#apply"
            className="inline-block bg-black text-white text-xs font-bold uppercase tracking-[0.2em] px-6 py-3 hover:opacity-80 transition-opacity"
          >
            Apply Now
          </a>
        </div>
      </section>

      {/* What You Get */}
      <section className="mb-14">
        <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-black mb-8">
          What You Get
        </h2>
        <div className="space-y-4">
          {benefits.map((benefit) => (
            <p key={benefit.title} className="text-base leading-relaxed text-black">
              <span className="font-bold">{benefit.title}</span>
              {" — "}
              {benefit.description}
            </p>
          ))}
        </div>
      </section>

      {/* Who Should Apply */}
      <section className="mb-14 space-y-4">
        <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-black mb-8">
          Who Should Apply
        </h2>
        <p className="text-base leading-relaxed text-black">
          We&apos;re looking for people who are genuinely curious about finance, can
          communicate clearly, and will show up reliably for six months.
        </p>
        <p className="text-base leading-relaxed text-black">
          We welcome backgrounds you&apos;d expect — MBA, JD, undergraduate, finance,
          journalism, law, policy — and backgrounds you wouldn&apos;t. A basic financial
          foundation helps. A serious commitment to build one is enough.
        </p>
      </section>

      {/* FAQ */}
      <section className="mb-14">
        <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-black mb-8">
          FAQ
        </h2>
        <div>
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full py-3 flex justify-between items-center text-left"
              >
                <span className="text-base font-bold text-black">{faq.question}</span>
                <span className="text-black/40 ml-4 text-sm">
                  {openIndex === i ? "−" : "+"}
                </span>
              </button>
              {openIndex === i && (
                <p className="pb-4 text-base leading-relaxed text-black/80">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Apply */}
      <section id="apply" className="mb-14 scroll-mt-20">
        <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-black mb-8">
          Apply
        </h2>
        <p className="text-base leading-relaxed text-black mb-4">
          Tell us about yourself, what you&apos;re curious about in private credit, and
          what you&apos;d want to publish if you joined.
        </p>
        <a
          href="#"
          className="inline-block bg-black text-white text-xs font-bold uppercase tracking-[0.2em] px-6 py-3 hover:opacity-80 transition-opacity"
        >
          Apply Now
        </a>
      </section>

      {/* Footer */}
      <footer className="mt-24 pt-12 border-t border-black">
        <p className="text-[10px] uppercase tracking-[0.25em] text-black/60">
          © {new Date().getFullYear()} Private Credit Fellowship · Private Credit Journal
        </p>
      </footer>
    </main>
  )
}
