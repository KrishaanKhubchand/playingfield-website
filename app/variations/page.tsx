import Link from "next/link"

type Variation = {
  href: string
  title: string
  org: string
  style: string
  notes: string
}

const variations: Variation[] = [
  {
    href: "/",
    title: "Default Home — 1440-Inspired",
    org: "Home",
    style: "reader-promise + brand mosaic",
    notes:
      "Now the live homepage. Adapts the join1440.com pattern to Playing Field — subscribe strip, reader-direct hero (\"Go deep on the industries that move markets\"), a mosaic of transparent journal covers (AIJ, HCJ, PCJ, TIJ), four format cards, three-step \"How we do it\" callout, per-brand showcases, and a final email CTA.",
  },
  {
    href: "/home2",
    title: "Journals-Forward Home",
    org: "Home",
    style: "two-journal lineup",
    notes:
      "Alternate homepage that swaps the podcast and summit cards for the African Infrastructure Journal and Hotel Capital Journal. Taller 2:3 portrait cards and all entries link straight through — no Coming Soon state.",
  },
  {
    href: "/home-original",
    title: "Original Live Home (archived)",
    org: "Home",
    style: "podcast + summit lineup",
    notes:
      "The previous default homepage. Lineup includes Frontier Markets Podcast and the Crypto × AI Summit alongside the journals. Square card aspect ratios and a Coming Soon popup on the summit card. Archived here for reference.",
  },
  {
    href: "/fellowship",
    title: "Original",
    org: "Playing Field",
    style: "v0 marketing",
    notes:
      "The original v0-generated page. Centered hero, italic subtitle, blue gradient band, Harry/Bill/Moritz photo cards, stats grid. Marketing-heavy voice.",
  },
  {
    href: "/fellowships3",
    title: "Tight D1 Voice",
    org: "Playing Field",
    style: "800px column",
    notes:
      "Mirrors the D1 Fellowship layout exactly. 800px single column, black-on-white, small-uppercase section labels, arrow bullets. Reads like a confident note, not a landing page.",
  },
  {
    href: "/fellowship4",
    title: "Spatial + D1 Voice",
    org: "Playing Field",
    style: "spatial hybrid",
    notes:
      "Keeps the big centered hero, prominent Apply CTA, and stats row from the original — but routes the D1 copy through it. Scarcity row says what the numbers mean: 10 fellows, 12 weeks, $0 tuition.",
  },
  {
    href: "/private-credit-fellowship-d1",
    title: "Tight D1 Voice",
    org: "Private Credit",
    style: "800px column",
    notes:
      "D1 layout adapted to the Private Credit Fellowship. Honest about being unpaid for the inaugural cohort, work-is-yours promise, four-fellow scarcity, 15-minute application with 90-second video.",
  },
  {
    href: "/private-credit-fellowship",
    title: "Spatial + D1 Voice",
    org: "Private Credit",
    style: "spatial hybrid",
    notes:
      "Spacious centered hero with the PC promise. Stats row: 4 junior fellows, 6 months, 10–20 hours/week. Adds a Who Should Apply section that leans into the non-traditional backgrounds the source page welcomes.",
  },
  {
    href: "/private-credit-fellowship-2",
    title: "1440-Inspired PC Fellowship",
    org: "Private Credit",
    style: "reader-promise + scarcity strip",
    notes:
      "Adapts the join1440.com pattern to the Private Credit Fellowship, tuned for seriousness. Scarcity-forward apply strip, hero (\"Spend six months getting inside private credit\"), a black numbers band (4 fellows · 6 months · 10–20 hrs/week), outputs mosaic, four-pillar grid, three-step Apply → Trial → Embed, three fellow archetypes including the non-traditional candidate, FAQ accordion, and a dark final apply section. More black-on-white than the general fellowship variant — feels like the serious one.",
  },
  {
    href: "/fellowship5",
    title: "1440-Inspired Fellowship",
    org: "Playing Field",
    style: "reader-promise + outputs mosaic",
    notes:
      "Adapts the join1440.com pattern to the fellowship. Apply strip at the top, reader-direct hero (\"Become the person inside the industry — not the one covering it\"), a mosaic of representative fellow outputs, four \"what you get\" cards, a three-step \"How the fellowship works\" callout, three fellow-archetype showcases, and a final apply CTA. Treats the fellowship as a product, not a landing page.",
  },
  {
    href: "/reading-room",
    title: "The Reading Room — Brochure",
    org: "Playing Field",
    style: "co-working cafe · 1440-pattern brochure",
    notes:
      "First-pass landing page for the Reading Room product, built on the same 1440-pattern as /home3 and the fellowship variants. Notify-strip waitlist, hero, intents mosaic, session-type cards, three-step, archetypes, \"Why we&rsquo;re building it\" essay, final waitlist CTA. In hindsight the wrong genre for a co-working product — kept as the long-form \"letter\" view linked from /the-reading-room.",
  },
  {
    href: "/the-reading-room",
    title: "The Reading Room — Lobby",
    org: "Playing Field",
    style: "co-working cafe · atmospheric lobby",
    notes:
      "The page is the room. Dark warm stone palette with a soft lamp glow, the page itself models the feeling of focus. A single-screen lobby: live countdown to the next session, a session card showing the time, host, intent prompt, and the five people already in their seats (with their stated intents). A small row of today&rsquo;s other sessions sits below. One action: pull up a chair. Tiny link out to /reading-room for the long letter. Closer to a status panel than a brochure.",
  },
  {
    href: "/reading-room-live",
    title: "The Reading Room — Schedule",
    org: "Playing Field",
    style: "co-working cafe · flow.club-style schedule",
    notes:
      "Modeled on flow.club&rsquo;s homepage. Hero pairs the headline (\"Get the work done. In good company.\") with a live Upcoming Sessions panel as the primary visual. A full schedule section below lists every session with day, time, name, host, duration, seat count, and Reserve / Waitlist buttons. A Members section shows four placeholder testimonials with initials, plus a small stats row (240+ sessions hosted · 14 a week · 94% show-up). Five-step How It Works in the flow.club register: Book → Show up → Share your goal → Start doing → Debrief. All in Playing Field&rsquo;s serif/light palette — no purple, no Flow Club aesthetic borrowed beyond information architecture.",
  },
  {
    href: "/writing-club",
    title: "Writing Club",
    org: "Playing Field",
    style: "writing community · letter-from-founder",
    notes:
      "Modeled on writingclub.world (\"a run club for writing\"). Different beast from the Reading Room family: an async community product, not live sessions. Single-column literary layout on a cream background, serif throughout, \"* * *\" dividers between sections, native <details> FAQ accordion. Hero leads with the run-club analogy and then argues it through: weekly prompts, drafts-for-feedback, a feed of writing worth reading, open chat, community. Pay-what-you-want including nothing. Voice is conversational and personal, closer to a Substack post than a marketing page.",
  },
  {
    href: "/about",
    title: "About — Four Chapters",
    org: "Playing Field",
    style: "manifesto · 1440 about-page (2023 version)",
    notes:
      "Modeled on the 2023 join1440.com/about-us page. Problem-first hero, then a four-up chapter grid (01 Our Story · 02 Our Mission · 03 Our Standards · 04 Our Name) that anchors into expanded sections. Standards is the centerpiece: three groups of three principles (Playing Field / Editorial / Partner) in accordion form. Our Name uses the dual-reading move 1440 makes (the field where the work happens × a level playing field). Copy now filled in: founding podcast → African Infrastructure Journal → Hotel Capital Journal → Private Credit Journal, audience of a few thousand analysts/allocators/operators across NA, Europe, Africa.",
  },
  {
    href: "/about-2",
    title: "About — Essay Style",
    org: "Playing Field",
    style: "manifesto · 1440 about-page (current version)",
    notes:
      "Modeled on the current join1440.com/about-us — more flowing, missional, less structural than /about. Hero is a single big serif title with a one-paragraph community description. Then a literary essay block: \"We live in an age of limitless industry coverage but limited industry understanding → Enter Playing Field.\" Mission section uses sticky left column + five numbered stance principles on the right. Editorial & Partner Standards combined into a 2×6 grid. Our Name reduced to one paragraph. Closes with the same Pick-an-industry email CTA.",
  },
  {
    href: "/careers",
    title: "Careers",
    org: "Playing Field",
    style: "recruitment landing · 1440 careers pattern",
    notes:
      "Modeled on join1440.com/careers. Hero with \"See open roles / Read our story\" CTAs (no fabricated award badges or press logos). Mission strip with two-column label + sentence. Seven principles in a 2×4 grid (Industries over headlines, Long over loud, Hire people who do the work, Read more than you write, Think in decades, Bias toward the next interview, Take care of yourself and the people you write about). Our Story section reuses the origin from /about with a horizontal trajectory line and a 4,000+ readers stat. People & culture with a single editor pull quote. Six benefits in a 2×3 grid (remote-first, time away, health, ownership, work budget, parental leave). Open Roles list with four sample positions and Apply links. Honest scope — no big-org puffery.",
  },
]

const grouped = variations.reduce<Record<string, Variation[]>>((acc, v) => {
  acc[v.org] = acc[v.org] ?? []
  acc[v.org].push(v)
  return acc
}, {})

export default function Variations() {
  return (
    <main className="mx-auto max-w-[800px] px-6 py-10 bg-white text-black">
      <header className="mb-10">
        <h1 className="font-sans text-3xl md:text-4xl font-extrabold tracking-tight text-black">
          Page Variations
        </h1>
        <p className="mt-4 text-base leading-relaxed text-black/70">
          Side-by-side test pages across the homepage and the Playing Field and
          Private Credit Fellowships, in different layouts and voices. Click any
          title to open the page.
        </p>
      </header>

      {Object.entries(grouped).map(([org, items]) => (
        <section key={org} className="mb-14">
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-black mb-8">
            {org}
          </h2>
          <div className="space-y-6">
            {items.map((v) => (
              <Link
                key={v.href}
                href={v.href}
                className="block border border-black/10 hover:border-black transition-colors p-6"
              >
                <div className="flex items-baseline justify-between gap-4 mb-2">
                  <div className="flex items-baseline gap-3">
                    <span className="text-lg font-bold text-black">{v.title}</span>
                    <span className="text-xs uppercase tracking-[0.2em] text-black/50">
                      {v.style}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-black/40">{v.href}</span>
                </div>
                <p className="text-sm leading-relaxed text-black/70">{v.notes}</p>
              </Link>
            ))}
          </div>
        </section>
      ))}

      <footer className="mt-24 pt-12 border-t border-black">
        <p className="text-[10px] uppercase tracking-[0.25em] text-black/60">
          Internal · For comparison only
        </p>
      </footer>
    </main>
  )
}
