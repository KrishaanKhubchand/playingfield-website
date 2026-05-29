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
      "Funds, founders, operators, future colleagues — tell us who you need to talk to and we'll connect you with the right people from our network.",
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
    answer: "Applications are open now for the next cohort. We'll share the start date when you apply.",
  },
]

export default function FellowshipsV3() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <main className="mx-auto max-w-[800px] px-6 py-10 bg-white text-black">
      {/* Header */}
      <header className="mb-10">
        <h1 className="font-sans text-3xl md:text-4xl font-extrabold tracking-tight text-black">
          Playing Field Fellowship
        </h1>
      </header>

      {/* Hero */}
      <section className="mb-14">
        <p className="text-base leading-relaxed text-black max-w-2xl">
          A fellowship that gives the next generation of investors an unfair advantage —
          by apprenticing them in public, at the intersection of investing and media.
        </p>
      </section>

      {/* About / BodyCopy */}
      <section className="mb-14 space-y-4">
        <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-black mb-8">
          About
        </h2>
        <p className="text-base leading-relaxed text-black">
          The Playing Field Fellowship is designed to help early-career investors and analysts
          go deeper on the industries they want to shape, sharpen their thinking in public, and
          build the reputation that opens doors for the rest of their career.
        </p>
        <p className="text-base leading-relaxed text-black">
          When you join, you get access to:
        </p>
        <ul className="space-y-2">
          <li className="text-base leading-relaxed text-black flex items-start gap-2">
            <span className="text-black/40 select-none">→</span>
            A published podcast or newsletter series under your name, distributed through Playing Field
          </li>
          <li className="text-base leading-relaxed text-black flex items-start gap-2">
            <span className="text-black/40 select-none">→</span>
            Weekly AMAs with leading investors, founders, and operators
          </li>
          <li className="text-base leading-relaxed text-black flex items-start gap-2">
            <span className="text-black/40 select-none">→</span>
            A small cohort of fellows researching alongside you
          </li>
          <li className="text-base leading-relaxed text-black flex items-start gap-2">
            <span className="text-black/40 select-none">→</span>
            Warm intros to the funds, founders, and operators that&apos;ll move the needle for you and your career
          </li>
        </ul>
        <p className="text-base leading-relaxed text-black">
          The fellowship is complementary to whatever you&apos;re already doing. We don&apos;t
          charge tuition. We don&apos;t take equity in anything you build. The work you produce
          is yours to keep.
        </p>
        <p className="text-base leading-relaxed text-black">
          We only accept 10 fellows per cohort and are selective about who we let in, to keep
          the quality of the work and the network high.
        </p>
        <p className="text-base leading-relaxed font-bold text-black">
          It takes less than 5 minutes to apply. When in doubt, just apply.
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
          Tell us who you are, what you&apos;re curious about, and what you&apos;d publish if you joined.
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
          © {new Date().getFullYear()} Playing Field Fellowship
        </p>
      </footer>
    </main>
  )
}
