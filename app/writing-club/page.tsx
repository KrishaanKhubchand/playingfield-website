import Link from "next/link"

const examples = [
  "the analyst who wants to publish their first piece on private credit",
  "the founder who needs to write better investor updates",
  "the journalist who wants to go deeper than the news cycle allows",
  "the operator who wants to think out loud about their industry in public",
]

const expectations = [
  {
    bold: "Weekly writing prompts",
    rest:
      "rooted in the industries we cover — markets, deals, operators, structural questions worth chewing on.",
  },
  {
    bold: "A place to post drafts for feedback",
    rest: "from other members, and to give feedback on theirs.",
  },
  {
    bold: "A feed of long-form writing worth reading",
    rest:
      "on the industries we care about — from the community and from the wider world.",
  },
  {
    bold: "An open chat to talk craft, interviews, and distribution",
    rest:
      "— ask anything, get support from us and other members.",
  },
  {
    bold: "A community of writers covering industries",
    rest:
      ", sharing leads, contacts, reading lists, and the occasional encouragement to ship the draft you&rsquo;ve been sitting on.",
  },
]

const faqs = [
  {
    q: "What&rsquo;s the goal of Writing Club?",
    a: "To help more people write seriously about the industries they care about — and to keep them writing, week after week. Most writing gets started; not much gets shipped. The club is the structure that helps it ship.",
  },
  {
    q: "Who runs Writing Club?",
    a: "Playing Field — the same team that runs the journals (African Infrastructure Journal, Hotel Capital Journal, Private Credit Journal, and others). We host the space and run the prompts. Members do the writing.",
  },
  {
    q: "Is it right for me?",
    a: "Probably yes if you already write a bit — or wish you did — on a sector or beat you care about. You don&rsquo;t need to be a journalist or a published writer. The bar is curiosity and willingness to ship something rough and improve it.",
  },
  {
    q: "Is it really free?",
    a: "Free for Playing Field readers. You can pay what you want to support the work, including nothing. Donations help us keep prompts coming and the chat moderated.",
  },
  {
    q: "How much do I need to write?",
    a: "As much as you want. Some members post every week; some lurk for a month before sharing anything. There&rsquo;s no minimum. The only honest commitment is that the value of the club scales with how much you actually write.",
  },
  {
    q: "What if I don&rsquo;t like it?",
    a: "Leave. No charge, no awkwardness. You can also stay subscribed and just read what others post — that&rsquo;s fine too.",
  },
  {
    q: "Can I share work that isn&rsquo;t about a specific industry?",
    a: "Yes. Most of what gets posted is sector-flavoured, but the prompts and feedback work for any non-fiction long-form. Personal essays, memos, pitch decks, founder updates — all welcome.",
  },
  {
    q: "How do I join?",
    a: "Drop your email below. We send one invite a week. You&rsquo;re in.",
  },
]

export default function WritingClub() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      <main className="mx-auto max-w-[680px] px-6 py-16 md:py-24 font-serif">
        {/* Hero */}
        <header className="mb-12 space-y-6">
          <p className="text-[10px] uppercase tracking-[0.28em] text-stone-500 font-sans">
            A Playing Field club
          </p>
          <h1 className="font-serif font-light tracking-tight text-5xl md:text-6xl leading-[1.05]">
            Writing Club
          </h1>
          <p className="font-serif italic text-xl text-stone-600">
            Like a run club, for writing.
          </p>
        </header>

        <section className="space-y-6 text-lg leading-[1.7] text-stone-800 font-light">
          <p>
            Writing Club helps you write more about the industries you care about — and
            write about them better.
          </p>

          <p>
            If you wanted to become a serious writer on private credit, or African
            infrastructure, or hospitality capital, you wouldn&rsquo;t just buy a book
            about how to write. You&rsquo;d sit down and write. And you&rsquo;d ship more
            of it if you were doing it alongside other people doing the same thing.
          </p>

          <p>
            Writing Club is that group. A community of people writing seriously about the
            industries they work in or follow closely — supporting each other&rsquo;s
            drafts, trading interview leads, and shipping the work that&rsquo;s been
            sitting half-finished.
          </p>

          <p>Some examples of people who join:</p>

          <ul className="space-y-2 pl-2">
            {examples.map((e) => (
              <li key={e} className="text-stone-800">
                <span className="text-stone-400 select-none mr-2">—</span>
                {e}
              </li>
            ))}
          </ul>

          <p>
            You can join Writing Club{" "}
            <a href="#join" className="underline decoration-stone-400 underline-offset-4 hover:decoration-stone-900">
              here
            </a>
            . Free for Playing Field readers. You can pay what you want to support the
            work, including nothing.
          </p>

          <p>
            Questions?{" "}
            <a
              href="mailto:hey@playingfield.co"
              className="underline decoration-stone-400 underline-offset-4 hover:decoration-stone-900"
            >
              Email us
            </a>
            .
          </p>
        </section>

        {/* Divider */}
        <div className="my-16 text-center text-stone-300 tracking-[1em] text-lg select-none">
          * * *
        </div>

        {/* What you get */}
        <section className="space-y-6 text-lg leading-[1.7] text-stone-800 font-light">
          <h2 className="font-serif font-light text-3xl md:text-4xl tracking-tight leading-tight text-stone-900">
            Write more. Write better.
            <br />
            Read what&rsquo;s worth reading.
          </h2>

          <p>
            Our goal is that joining Writing Club helps you become what we call a
            long-distance writer: someone who keeps shipping, week after week, on a sector
            or beat they care about. We also think it helps you discover the kind of
            writing that makes you better — by reading what your peers are working on.
          </p>

          <p>Here&rsquo;s what to expect when you join:</p>

          <ul className="space-y-3 pl-2">
            {expectations.map((e) => (
              <li key={e.bold} className="text-stone-800">
                <span className="text-stone-400 select-none mr-2">—</span>
                <strong className="font-serif font-medium text-stone-900">{e.bold}</strong>{" "}
                <span dangerouslySetInnerHTML={{ __html: e.rest }} />
              </li>
            ))}
          </ul>

          <p>
            Of course, much like getting value out of a run club requires you to actually
            run, getting value out of Writing Club probably requires you to actually
            write.
          </p>

          <p>
            Want to join?{" "}
            <a href="#join" className="underline decoration-stone-400 underline-offset-4 hover:decoration-stone-900">
              Go here.
            </a>
          </p>
        </section>

        {/* Divider */}
        <div className="my-16 text-center text-stone-300 tracking-[1em] text-lg select-none">
          * * *
        </div>

        {/* FAQs */}
        <section className="space-y-6">
          <h2 className="font-serif font-light text-3xl md:text-4xl tracking-tight leading-tight text-stone-900">
            FAQs
          </h2>

          <div className="divide-y divide-stone-200 border-y border-stone-200">
            {faqs.map((f, i) => (
              <details key={i} className="group py-4">
                <summary className="cursor-pointer flex items-baseline justify-between gap-4 list-none">
                  <span
                    className="text-lg text-stone-900 font-serif font-light"
                    dangerouslySetInnerHTML={{ __html: f.q }}
                  />
                  <span className="text-stone-400 font-sans text-sm shrink-0 transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 pr-8 text-base leading-relaxed text-stone-700 font-light">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* Divider */}
        <div className="my-16 text-center text-stone-300 tracking-[1em] text-lg select-none">
          * * *
        </div>

        {/* Join */}
        <section id="join" className="space-y-8 scroll-mt-20">
          <p className="text-lg leading-[1.7] text-stone-800 font-light">
            One more time: if you&rsquo;d like to join Writing Club, drop your email below.
            We send one invite a week. Free for Playing Field readers.
          </p>

          <form className="flex flex-col sm:flex-row gap-3 max-w-md">
            <input
              type="email"
              placeholder="your@email"
              className="flex-1 rounded-md border border-stone-300 bg-white px-4 py-3 text-base font-sans focus:outline-none focus:ring-2 focus:ring-stone-400/40"
            />
            <button
              type="submit"
              className="rounded-md bg-stone-900 text-stone-50 hover:bg-stone-800 transition-colors px-6 py-3 text-sm font-sans font-medium uppercase tracking-[0.15em]"
            >
              Join the club
            </button>
          </form>

          <p className="text-sm text-stone-500 italic font-light">
            You can pay what you want to support — including nothing. Donations help us
            keep prompts coming and the chat moderated.
          </p>
        </section>

        <footer className="mt-24 pt-12 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[10px] uppercase tracking-[0.22em] text-stone-500 font-sans">
            © {new Date().getFullYear()} Playing Field · Writing Club
          </p>
          <div className="flex items-center gap-5">
            <Link
              href="/reading-room"
              className="text-[10px] uppercase tracking-[0.22em] text-stone-500 hover:text-stone-900 font-sans transition-colors"
            >
              The Reading Room
            </Link>
            <Link
              href="/"
              className="text-[10px] uppercase tracking-[0.22em] text-stone-500 hover:text-stone-900 font-sans transition-colors"
            >
              Playing Field
            </Link>
          </div>
        </footer>
      </main>
    </div>
  )
}
