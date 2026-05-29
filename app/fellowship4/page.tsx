"use client"

import { useState } from "react"

const benefits = [
  {
    title: "A Published Series",
    description:
      "Build a podcast or newsletter on a sector, theme, or thesis you care about. Distributed through Playing Field.",
  },
  {
    title: "Mentor AMAs",
    description:
      "Weekly sessions with investors, founders, and operators who've built what you want to build. Ask anything.",
  },
  {
    title: "Peer Cohort",
    description:
      "A small group of fellows researching in parallel. Trade notes, debate ideas, ship together.",
  },
  {
    title: "Intros That Matter",
    description:
      "Funds, founders, operators, future colleagues — tell us who you need to talk to and we'll connect you.",
  },
]

const faqs = [
  {
    question: "Who is the Playing Field Fellowship for?",
    answer:
      "Early-career professionals who want to become great investors at the intersection of investing and media. Analysts, associates, journalists, operators, students — if you're curious, you can ship, and you want to learn in public, you should apply. No formal investing experience required.",
  },
  {
    question: "How long is the program?",
    answer: "12 weeks, with the network and community continuing long after.",
  },
  {
    question: "Is it full-time?",
    answer:
      "No. It's designed to fit alongside your current job or studies. Expect a few hours of cohort time per week, plus the time you put into your own series.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Nothing. We don't charge tuition. We don't take equity in anything you build. The series you produce is yours to keep.",
  },
  {
    question: "How long does the application take?",
    answer:
      "Less than 5 minutes. Tell us who you are, what you're curious about, and what you'd publish if you joined.",
  },
  {
    question: "When does the next cohort start?",
    answer:
      "Applications are open now. We'll share the exact start date when you apply.",
  },
]

export default function Fellowship4() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <main className="min-h-screen bg-white text-black">
      {/* Hero */}
      <section className="px-6 pt-24 pb-20 md:pt-32 md:pb-24">
        <div className="max-w-3xl mx-auto text-center space-y-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-black/15 text-xs uppercase tracking-[0.2em] text-black/70">
            Applications Open
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-black">
            A fellowship for the next generation of investors at the intersection of investing &amp; media.
          </h1>

          <p className="text-lg md:text-xl text-black/70 leading-relaxed max-w-2xl mx-auto">
            An unfair advantage for early-career talent — by apprenticing in public,
            alongside the operators and investors shaping the future.
          </p>

          <div className="pt-4">
            <a
              href="#apply"
              className="inline-block bg-black text-white text-sm font-bold uppercase tracking-[0.2em] px-10 py-5 hover:opacity-80 transition-opacity"
            >
              Apply Now
            </a>
            <p className="text-sm text-black/50 mt-4">
              Less than 5 minutes. When in doubt, just apply.
            </p>
          </div>
        </div>
      </section>

      {/* Scarcity callout */}
      <section className="px-6 py-12 border-y border-black/10">
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-extrabold text-black mb-2">10</div>
              <div className="text-xs uppercase tracking-[0.2em] text-black/60">Fellows</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-extrabold text-black mb-2">12</div>
              <div className="text-xs uppercase tracking-[0.2em] text-black/60">Weeks</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-extrabold text-black mb-2">$0</div>
              <div className="text-xs uppercase tracking-[0.2em] text-black/60">Tuition</div>
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
            The Playing Field Fellowship is designed to help early-career investors and
            analysts go deeper on the industries they want to shape, sharpen their thinking
            in public, and build the reputation that opens doors for the rest of their career.
          </p>
          <p className="text-lg leading-relaxed text-black">When you join, you get access to:</p>
          <ul className="space-y-3 pt-2">
            <li className="text-lg leading-relaxed text-black flex items-start gap-3">
              <span className="text-black/40 select-none mt-0.5">→</span>
              A published podcast or newsletter series under your name, distributed through Playing Field
            </li>
            <li className="text-lg leading-relaxed text-black flex items-start gap-3">
              <span className="text-black/40 select-none mt-0.5">→</span>
              Weekly AMAs with leading investors, founders, and operators
            </li>
            <li className="text-lg leading-relaxed text-black flex items-start gap-3">
              <span className="text-black/40 select-none mt-0.5">→</span>
              A small cohort of fellows researching alongside you
            </li>
            <li className="text-lg leading-relaxed text-black flex items-start gap-3">
              <span className="text-black/40 select-none mt-0.5">→</span>
              Warm intros to the funds, founders, and operators that&apos;ll move the needle for you
            </li>
          </ul>
          <p className="text-lg leading-relaxed text-black pt-4">
            The fellowship is complementary to whatever you&apos;re already doing. We don&apos;t
            charge tuition. We don&apos;t take equity in anything you build. The work you produce
            is yours to keep.
          </p>
          <p className="text-lg leading-relaxed text-black">
            We only accept 10 fellows per cohort and are selective about who we let in, to keep
            the quality of the work and the network high.
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
      <section id="apply" className="px-6 py-32 scroll-mt-20 border-t border-black/10">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.1] text-black">
            Ready to apply?
          </h2>
          <p className="text-lg text-black/70 leading-relaxed">
            Tell us who you are, what you&apos;re curious about, and what you&apos;d publish if you joined.
          </p>
          <div className="pt-4">
            <a
              href="#"
              className="inline-block bg-black text-white text-sm font-bold uppercase tracking-[0.2em] px-10 py-5 hover:opacity-80 transition-opacity"
            >
              Apply Now
            </a>
            <p className="text-sm text-black/50 mt-4">
              Less than 5 minutes. When in doubt, just apply.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-black/10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[10px] uppercase tracking-[0.25em] text-black/50">
            © {new Date().getFullYear()} Playing Field Fellowship
          </p>
        </div>
      </footer>
    </main>
  )
}
