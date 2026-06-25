import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "The #1 Morning Briefing for GPs in Private Credit | Playing Field",
  description:
    "The essential daily digest for General Partners and Allocators in private credit. Curated from 150+ sources, delivered in minutes — not hours.",
}

/* ─── color tokens ─── */
const GREEN = "#4CAF50"
const YELLOW = "#F5C542"
const ORANGE = "#FF9800"

/* ─── reusable pieces ─── */

function CategoryTag({
  label,
  color,
}: {
  label: string
  color: "green" | "yellow" | "orange"
}) {
  const colors = {
    green: { bg: GREEN, text: "#fff" },
    yellow: { bg: YELLOW, text: "#1a1a1a" },
    orange: { bg: ORANGE, text: "#fff" },
  }
  const c = colors[color]
  return (
    <span
      className="inline-block rounded-full px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider"
      style={{ backgroundColor: c.bg, color: c.text }}
    >
      {label}
    </span>
  )
}

function Avatar({ initials, bg }: { initials: string; bg: string }) {
  return (
    <span
      className={`inline-flex h-10 w-10 items-center justify-center rounded-full text-xs font-bold text-white ring-3 ring-black ${bg}`}
    >
      {initials}
    </span>
  )
}

function TrustBar() {
  return (
    <div className="flex flex-col items-center gap-3 sm:flex-row">
      <div className="flex -space-x-2.5">
        <Avatar initials="JM" bg="bg-zinc-600" />
        <Avatar initials="SK" bg="bg-emerald-700" />
        <Avatar initials="AR" bg="bg-yellow-500" />
        <Avatar initials="PT" bg="bg-zinc-500" />
        <Avatar initials="DL" bg="bg-neutral-800" />
      </div>
      <p className="text-sm text-zinc-400">
        Trusted by GPs at{" "}
        <span className="font-bold text-white">Ares, Apollo, Blackstone</span>
      </p>
    </div>
  )
}

/* ─── iPhone chrome (redesigned for bold aesthetic) ─── */

function PhoneFrame({
  children,
  className = "",
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={`relative w-[280px] rounded-[40px] border-2 border-zinc-700 bg-black p-3 shadow-[0_0_60px_rgba(76,175,80,0.15)] ${className}`}
    >
      {/* notch */}
      <div className="mx-auto mb-1 h-6 w-28 rounded-full bg-zinc-900" />
      {/* status bar */}
      <div className="flex items-center justify-between px-5 pb-2 text-[11px] font-bold text-white">
        <span>9:41</span>
        <div className="flex items-center gap-1">
          <svg className="h-3 w-3" fill="white" viewBox="0 0 24 24">
            <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3a4.237 4.237 0 00-6 0zm-4-4l2 2a7.074 7.074 0 0110 0l2-2C15.14 9.14 8.87 9.14 5 13z" />
          </svg>
          <svg className="h-4 w-4" fill="white" viewBox="0 0 24 24">
            <rect x="2" y="6" width="18" height="12" rx="2" />
            <rect x="20" y="9" width="2" height="6" rx="1" />
          </svg>
        </div>
      </div>
      {children}
    </div>
  )
}

/* ─── Phone 1: Feed view ─── */

function PhoneFeed() {
  return (
    <PhoneFrame className="z-10">
      <div className="rounded-[28px] bg-zinc-950 px-4 pb-6 pt-3">
        {/* app header */}
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div
              className="flex h-7 w-7 items-center justify-center rounded-md font-black text-black"
              style={{ backgroundColor: GREEN }}
            >
              <span className="text-[10px]">PF</span>
            </div>
            <span
              className="text-sm text-white"
              style={{ fontFamily: "'Oswald', Impact, 'Arial Black', sans-serif", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.05em" }}
            >
              Playing Field
            </span>
          </div>
          <span
            className="rounded-full px-2 py-0.5 text-[10px] font-black text-black"
            style={{ backgroundColor: GREEN }}
          >
            LIVE
          </span>
        </div>

        {/* filter pills */}
        <div className="mb-4 flex gap-1.5">
          {[
            { label: "All", active: false },
            { label: "Deals", active: true, color: GREEN },
            { label: "Fundraising", active: false },
          ].map((tab) => (
            <span
              key={tab.label}
              className="rounded-full px-3 py-1 text-[11px] font-bold"
              style={
                tab.active
                  ? { backgroundColor: GREEN, color: "#000" }
                  : { color: "rgba(255,255,255,0.4)" }
              }
            >
              {tab.label}
            </span>
          ))}
        </div>

        {/* welcome card */}
        <div
          className="mb-3 rounded-xl border p-3.5"
          style={{ borderColor: "rgba(76,175,80,0.3)", backgroundColor: "rgba(76,175,80,0.05)" }}
        >
          <p
            className="mb-2 text-[13px] text-white"
            style={{ fontFamily: "Georgia, 'Playfair Display', serif", fontWeight: 700 }}
          >
            Welcome to your briefing
          </p>
          <p className="mb-3 text-[11px] text-zinc-500">
            Here&rsquo;s what happened overnight:
          </p>
          <ul className="space-y-2 text-[12px] text-zinc-300">
            <li className="flex items-start gap-2">
              <span style={{ color: GREEN }}>▸</span>
              <span>3 new fund closes above $1B</span>
            </li>
            <li className="flex items-start gap-2">
              <span style={{ color: YELLOW }}>▸</span>
              <span>2 deal pipeline signals in your sectors</span>
            </li>
            <li className="flex items-start gap-2">
              <span style={{ color: ORANGE }}>▸</span>
              <span>1 regulatory shift affecting covenant structures</span>
            </li>
          </ul>
        </div>

        {/* feed item 1 */}
        <div className="mb-3 border-b border-zinc-800 pb-3">
          <div className="mb-1.5 flex items-center gap-2">
            <CategoryTag label="Deals" color="green" />
            <span className="text-[10px] text-zinc-600">2m ago</span>
          </div>
          <p
            className="text-[13px] leading-snug text-white"
            style={{ fontFamily: "Georgia, 'Playfair Display', serif", fontWeight: 700 }}
          >
            Ares closes $3.7B direct lending vehicle ahead of schedule
          </p>
          <p className="mt-1 text-[10px] text-zinc-600">Private Debt Investor</p>
        </div>

        {/* feed item 2 */}
        <div className="pb-2">
          <div className="mb-1.5 flex items-center gap-2">
            <CategoryTag label="Fundraising" color="yellow" />
            <span className="text-[10px] text-zinc-600">18m ago</span>
          </div>
          <p
            className="text-[13px] leading-snug text-white"
            style={{ fontFamily: "Georgia, 'Playfair Display', serif", fontWeight: 700 }}
          >
            Blue Owl launches $5B GP stakes fund targeting mid-market lenders
          </p>
          <p className="mt-1 text-[10px] text-zinc-600">Bloomberg</p>
        </div>

        {/* bottom nav */}
        <div className="mt-4 flex justify-around border-t border-zinc-800 pt-3">
          <div className="flex flex-col items-center gap-1">
            <div className="h-4 w-4 rounded" style={{ backgroundColor: GREEN }} />
            <span className="text-[9px] font-bold" style={{ color: GREEN }}>
              Feed
            </span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <svg
              className="h-4 w-4 text-zinc-600"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <span className="text-[9px] text-zinc-600">Search</span>
          </div>
        </div>
      </div>
    </PhoneFrame>
  )
}

/* ─── Phone 2: Article detail ─── */

function PhoneDetail() {
  return (
    <PhoneFrame className="absolute left-[160px] top-10 z-0 md:left-[180px] md:top-14">
      <div className="rounded-[28px] bg-zinc-950 px-4 pb-6 pt-3">
        {/* back + source */}
        <div className="mb-3 flex items-center gap-2">
          <span className="text-zinc-500">‹</span>
          <CategoryTag label="Deals" color="green" />
          <span className="text-[10px] text-zinc-600">2 min ago</span>
        </div>

        {/* headline */}
        <h3
          className="mb-3 text-[18px] leading-tight text-white"
          style={{ fontFamily: "Georgia, 'Playfair Display', serif", fontWeight: 700 }}
        >
          Ares closes $3.7B direct lending vehicle
        </h3>

        {/* sources badge */}
        <div
          className="mb-3 flex items-center gap-2 rounded-lg px-3 py-2"
          style={{ backgroundColor: "rgba(76,175,80,0.1)" }}
        >
          <div
            className="flex h-6 w-6 items-center justify-center rounded font-black text-white"
            style={{ backgroundColor: GREEN }}
          >
            <span className="text-[10px]">✓</span>
          </div>
          <span className="text-[11px] text-zinc-400">
            <span className="font-bold text-white">142 sources</span> curated
            today
          </span>
        </div>

        {/* key takeaways */}
        <div
          className="mb-3 rounded-xl border p-3.5"
          style={{ borderColor: "rgba(245,197,66,0.3)", backgroundColor: "rgba(245,197,66,0.05)" }}
        >
          <p
            className="mb-2 text-[10px] font-black uppercase tracking-widest"
            style={{ color: YELLOW }}
          >
            Key Takeaways
          </p>
          <ul className="space-y-1.5 text-[11px] leading-snug text-zinc-300">
            <li className="flex items-start gap-1.5">
              <span style={{ color: YELLOW }}>■</span>
              Fund oversubscribed by 40%, signalling LP appetite for direct lending
            </li>
            <li className="flex items-start gap-1.5">
              <span style={{ color: YELLOW }}>■</span>
              Mid-market focus narrows competitive overlap with broadly syndicated loans
            </li>
            <li className="flex items-start gap-1.5">
              <span style={{ color: YELLOW }}>■</span>
              Covenant-lite structures under scrutiny from institutional LPs
            </li>
          </ul>
        </div>

        {/* analysis */}
        <p className="mb-4 text-[11px] leading-relaxed text-zinc-500">
          The rapid close suggests sustained LP confidence in direct lending
          despite rising defaults in adjacent credit strategies. GPs with
          deployment track records continue to attract&nbsp;capital&hellip;
        </p>

        {/* read full */}
        <button
          className="w-full rounded-full py-2 text-center text-[12px] font-black text-black"
          style={{ backgroundColor: GREEN }}
        >
          Read full briefing →
        </button>
      </div>
    </PhoneFrame>
  )
}

/* ─── stat block ─── */

function StatBlock({
  value,
  label,
  accent,
}: {
  value: string
  label: string
  accent: string
}) {
  return (
    <div className="text-center">
      <p
        className="text-3xl font-black sm:text-4xl"
        style={{
          fontFamily: "'Oswald', Impact, 'Arial Black', sans-serif",
          color: accent,
        }}
      >
        {value}
      </p>
      <p className="mt-1 text-sm text-zinc-400">{label}</p>
    </div>
  )
}

/* ─── feature card ─── */

function FeatureCard({
  icon,
  title,
  description,
  accentColor,
}: {
  icon: string
  title: string
  description: string
  accentColor: string
}) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-6 transition hover:shadow-lg">
      <div
        className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl text-2xl text-white"
        style={{ backgroundColor: accentColor }}
      >
        {icon}
      </div>
      <h3
        className="mb-2 text-lg font-bold text-zinc-900"
        style={{ fontFamily: "Georgia, 'Playfair Display', serif" }}
      >
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-zinc-500">{description}</p>
    </div>
  )
}

/* ─── main page ─── */

export default function ForPrivateCreditGPsV2() {
  return (
    <div className="flex min-h-screen flex-col bg-black">
      {/* ══════ HERO — black, bold, high-impact ══════ */}
      <section className="relative overflow-hidden bg-black">
        {/* subtle grid pattern */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-4 pb-24 pt-20 sm:px-6 lg:px-8">
          {/* top badge */}
          <div className="mb-8 flex justify-center">
            <span
              className="inline-flex items-center gap-2 rounded-full border px-5 py-2 text-sm font-bold"
              style={{ borderColor: GREEN, color: GREEN }}
            >
              <span
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: GREEN }}
              />
              Invite-only — limited early access
            </span>
          </div>

          {/* masthead */}
          <div className="mx-auto max-w-4xl text-center">
            <h1
              className="mb-6 text-5xl leading-[0.95] text-white sm:text-6xl md:text-7xl lg:text-8xl"
              style={{
                fontFamily: "'Oswald', Impact, 'Arial Black', sans-serif",
                fontWeight: 900,
                textTransform: "uppercase",
                letterSpacing: "-0.02em",
              }}
            >
              The{" "}
              <span style={{ color: GREEN }}>#1</span>{" "}
              Morning Briefing
              <br />
              <span className="text-zinc-500">for GPs in</span>{" "}
              <span style={{ color: YELLOW }}>Private Credit</span>
            </h1>

            <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-zinc-400 sm:text-xl">
              The essential daily digest for General Partners and Allocators.
              Curated from{" "}
              <span className="font-bold text-white">150+ sources</span>,
              delivered in minutes&nbsp;— not hours.
            </p>

            {/* CTA */}
            <div className="mb-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href="mailto:krish@playingfield.co?subject=Early%20Access%20%E2%80%94%20Private%20Credit%20Briefing"
                className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-black text-black transition hover:scale-105 hover:shadow-[0_0_30px_rgba(76,175,80,0.4)]"
                style={{ backgroundColor: GREEN }}
              >
                REQUEST EARLY ACCESS
                <span aria-hidden className="text-lg">
                  →
                </span>
              </a>
              <span className="text-sm text-zinc-600">
                Free · No spam · Unsubscribe anytime
              </span>
            </div>

            {/* trust bar */}
            <div className="flex justify-center">
              <TrustBar />
            </div>
          </div>

          {/* phones */}
          <div className="mt-16 flex justify-center">
            <div className="relative">
              <PhoneFeed />
              <PhoneDetail />
            </div>
          </div>
        </div>

        {/* gradient fade to white */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-white" />
      </section>

      {/* ══════ STATS BAR ══════ */}
      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-8 px-4 sm:grid-cols-4 sm:px-6">
          <StatBlock value="150+" label="Sources curated" accent={GREEN} />
          <StatBlock value="5 min" label="Average read time" accent={YELLOW} />
          <StatBlock value="6:00 AM" label="Daily delivery" accent={ORANGE} />
          <StatBlock value="100%" label="Signal, zero noise" accent={GREEN} />
        </div>
      </section>

      {/* ══════ FEATURES GRID ══════ */}
      <section className="bg-white pb-20 pt-8">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2
              className="mb-3 text-3xl font-black text-zinc-900 sm:text-4xl"
              style={{
                fontFamily: "'Oswald', Impact, 'Arial Black', sans-serif",
                textTransform: "uppercase",
              }}
            >
              Built for the way{" "}
              <span style={{ color: GREEN }}>GPs</span> actually work
            </h2>
            <p className="mx-auto max-w-xl text-zinc-500">
              Everything you need to stay ahead — nothing you don&rsquo;t.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon="⚡"
              title="Real-Time Deal Flow"
              description="Closings, launches, and pipeline signals from across direct lending, mezzanine, and specialty finance — as they happen."
              accentColor={GREEN}
            />
            <FeatureCard
              icon="📊"
              title="Fundraising Intelligence"
              description="Track who's raising, at what size, and how fast. LP appetite trends and GP-stakes activity in one view."
              accentColor={YELLOW}
            />
            <FeatureCard
              icon="🔥"
              title="Market Pulse"
              description="Macro shifts, regulatory changes, and covenant trends distilled into actionable insights for credit professionals."
              accentColor={ORANGE}
            />
            <FeatureCard
              icon="🎯"
              title="Key Takeaways"
              description="Every story comes with bullet-point takeaways so you can brief your team or IC in seconds."
              accentColor={GREEN}
            />
            <FeatureCard
              icon="🔔"
              title="Breaking Alerts"
              description="Material events that affect your portfolio or pipeline — pushed instantly, not buried in a daily email."
              accentColor={YELLOW}
            />
            <FeatureCard
              icon="📱"
              title="Mobile-First"
              description="Designed to read in your car, between meetings, or on the tarmac. Fast, clean, zero clutter."
              accentColor={ORANGE}
            />
          </div>
        </div>
      </section>

      {/* ══════ BOTTOM CTA ══════ */}
      <section className="bg-black py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2
            className="mb-4 text-3xl text-white sm:text-5xl"
            style={{
              fontFamily: "'Oswald', Impact, 'Arial Black', sans-serif",
              fontWeight: 900,
              textTransform: "uppercase",
            }}
          >
            Stop missing what{" "}
            <span style={{ color: YELLOW }}>matters</span>
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-zinc-400">
            Join the GPs and allocators who start every morning with Playing
            Field. One briefing, all the signal.
          </p>
          <a
            href="mailto:krish@playingfield.co?subject=Early%20Access%20%E2%80%94%20Private%20Credit%20Briefing"
            className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-black text-black transition hover:scale-105 hover:shadow-[0_0_30px_rgba(76,175,80,0.4)]"
            style={{ backgroundColor: GREEN }}
          >
            REQUEST EARLY ACCESS
            <span aria-hidden className="text-lg">
              →
            </span>
          </a>
          <p className="mt-6 text-sm text-zinc-600">
            Launching Q3 2026 · Limited spots available
          </p>
        </div>
      </section>

      {/* ══════ FOOTER ══════ */}
      <footer className="border-t border-zinc-800 bg-black py-10">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
          <p className="text-sm text-zinc-600">
            © {new Date().getFullYear()} Playing Field Group
          </p>
        </div>
      </footer>
    </div>
  )
}
