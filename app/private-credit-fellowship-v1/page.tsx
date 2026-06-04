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
      "Not for the inaugural cohort. As Private Credit Journal grows, we expect to introduce stipends for future cohorts. The work you publish is yours, and it's distributed under your name.",
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

export default function PrivateCreditFellowshipV1() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <main className="min-h-screen bg-white text-black">
      {/* Hero */}
      <section className="px-6 pt-24 pb-20 md:pt-32 md:pb-24">
        <div className="max-w-3xl mx-auto text-center space-y-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-black/15 text-xs uppercase tracking-[0.2em] text-black/70">
            Inaugural Cohort • Applications Open
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-black">
            A 6-month fellowship for the next generation of private credit researchers.
          </h1>

          <p className="text-lg md:text-xl text-black/70 leading-relaxed max-w-2xl mx-auto">
            Go deep on the corners of the market that matter — alongside the senior
            investors and allocators shaping them.
          </p>

          <div className="pt-4">
            <a
              href="#apply"
              className="inline-block bg-black text-white text-sm font-bold uppercase tracking-[0.2em] px-10 py-5 hover:opacity-80 transition-opacity"
            >
              Apply Now
            </a>
            <p className="text-sm text-black/50 mt-4">
              About 15 minutes, including a 90-second video.
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

      {/* About */}
      <section className="px-6 py-24">
        <div className="max-w-2xl mx-auto space-y-5">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-black mb-10 text-center">
            About
          </h2>
          <p className="text-lg leading-relaxed text-black">
            The Private Credit Fellowship is designed to help curious, early-career
            talent develop real expertise in private credit — by going deep on a specific
            corner of the market and publishing the kinds of interviews and analysis that
            build a reputation.
          </p>
          <p className="text-lg leading-relaxed text-black">As a fellow, you&apos;ll:</p>
          <ul className="space-y-3 pt-2">
            <li className="text-lg leading-relaxed text-black flex items-start gap-3">
              <span className="text-black/40 select-none mt-0.5">→</span>
              Develop a thesis on a specific corner of private credit
            </li>
            <li className="text-lg leading-relaxed text-black flex items-start gap-3">
              <span className="text-black/40 select-none mt-0.5">→</span>
              Build an outreach pipeline to the senior leaders shaping that market
            </li>
            <li className="text-lg leading-relaxed text-black flex items-start gap-3">
              <span className="text-black/40 select-none mt-0.5">→</span>
              Conduct in-depth interviews with investors, allocators, and operators
            </li>
            <li className="text-lg leading-relaxed text-black flex items-start gap-3">
              <span className="text-black/40 select-none mt-0.5">→</span>
              Contribute to the editorial direction of Private Credit Journal
            </li>
          </ul>
          <p className="text-lg leading-relaxed text-black pt-4">
            This is an unpaid fellowship for the inaugural cohort. As Private Credit
            Journal grows, we expect to introduce stipends for future cohorts. The
            work you publish is yours, and it&apos;s distributed under your name.
          </p>
          <p className="text-lg leading-relaxed text-black">
            We&apos;re only accepting four junior fellows in this inaugural cohort, to
            keep the cohort tight and the editorial quality high.
          </p>
        </div>
      </section>

      {/* What You Get */}
      <section className="px-6 py-24 bg-black/[0.02] border-y border-black/10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-black mb-12 text-center">
            What You Get
          </h2>
          <div className="space-y-6">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="border-b border-black/10 pb-6 last:border-b-0">
                <p className="text-lg leading-relaxed text-black">
                  <span className="font-bold">{benefit.title}</span>
                  {" — "}
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Should Apply */}
      <section className="px-6 py-24">
        <div className="max-w-2xl mx-auto space-y-5">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-black mb-10 text-center">
            Who Should Apply
          </h2>
          <p className="text-lg leading-relaxed text-black">
            We&apos;re looking for people who are genuinely curious about finance, can
            communicate clearly, and will show up reliably for six months.
          </p>
          <p className="text-lg leading-relaxed text-black">
            We welcome backgrounds you&apos;d expect — MBA, JD, undergraduate, finance,
            journalism, law, policy — and backgrounds you wouldn&apos;t. A basic financial
            foundation helps. A serious commitment to build one is enough.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-24 bg-black/[0.02] border-y border-black/10">
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
                  <span className="text-base md:text-lg font-bold text-black">
                    {faq.question}
                  </span>
                  <span className="text-black/40 ml-4 text-xl font-light">
                    {openIndex === i ? "−" : "+"}
                  </span>
                </button>
                {openIndex === i && (
                  <p className="pb-5 text-base leading-relaxed text-black/80">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section id="apply" className="px-6 py-32 scroll-mt-20">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.1] text-black">
            Ready to apply?
          </h2>
          <p className="text-lg text-black/70 leading-relaxed">
            About 15 minutes — including a 90-second video. We review every application
            within a week.
          </p>
          <div className="pt-4">
            <a
              href="#"
              className="inline-block bg-black text-white text-sm font-bold uppercase tracking-[0.2em] px-10 py-5 hover:opacity-80 transition-opacity"
            >
              Apply Now
            </a>
            <p className="text-sm text-black/50 mt-4">
              When in doubt, just apply.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-black/10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[10px] uppercase tracking-[0.25em] text-black/50">
            © {new Date().getFullYear()} Private Credit Fellowship · Private Credit Journal
          </p>
        </div>
      </footer>
    </main>
  )
}
