import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "The #1 Morning Briefing for GPs in Private Credit | Playing Field",
  description:
    "The essential daily digest for General Partners and Allocators in private credit. Curated from 150+ sources, delivered in minutes — not hours.",
}

/* ─── tiny reusable pieces ─── */

function PillBadge() {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-4 py-1.5 text-sm font-medium text-amber-700">
      <span className="h-2 w-2 rounded-full bg-amber-400" />
      Invite-only access
    </span>
  )
}

function Avatar({ initials, bg }: { initials: string; bg: string }) {
  return (
    <span
      className={`inline-flex h-9 w-9 items-center justify-center rounded-full text-xs font-semibold text-white ring-2 ring-white ${bg}`}
    >
      {initials}
    </span>
  )
}

function TrustBar() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex -space-x-2">
        <Avatar initials="JM" bg="bg-blue-900" />
        <Avatar initials="SK" bg="bg-stone-700" />
        <Avatar initials="AR" bg="bg-amber-500" />
        <Avatar initials="PT" bg="bg-slate-400" />
        <Avatar initials="DL" bg="bg-slate-800" />
      </div>
      <p className="text-sm text-stone-600">
        Trusted by GPs at{" "}
        <span className="font-semibold text-stone-900">Ares, Apollo, Blackstone</span>
      </p>
    </div>
  )
}

/* ─── iPhone chrome ─── */

function PhoneFrame({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`relative w-[280px] rounded-[40px] bg-[#111827] p-3 shadow-2xl ring-1 ring-white/10 ${className}`}
    >
      {/* status bar */}
      <div className="flex items-center justify-between px-5 pb-2 pt-3 text-[11px] font-semibold text-white">
        <span>9:41</span>
        <div className="flex items-center gap-1">
          <svg className="h-3 w-3" fill="white" viewBox="0 0 24 24"><path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3a4.237 4.237 0 00-6 0zm-4-4l2 2a7.074 7.074 0 0110 0l2-2C15.14 9.14 8.87 9.14 5 13z"/></svg>
          <svg className="h-4 w-4" fill="white" viewBox="0 0 24 24"><rect x="2" y="6" width="18" height="12" rx="2" strokeWidth="0"/><rect x="20" y="9" width="2" height="6" rx="1"/></svg>
        </div>
      </div>
      {children}
    </div>
  )
}

/* ─── Phone 1: feed / welcome ─── */

function PhoneFeed() {
  return (
    <PhoneFrame className="z-10">
      <div className="rounded-[28px] bg-[#0f172a] px-4 pb-6 pt-3">
        {/* app header */}
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-amber-500">
              <span className="text-[10px] font-bold text-white">PF</span>
            </div>
            <span className="text-sm font-bold text-white">Playing Field</span>
          </div>
          <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] font-bold text-emerald-400">
            LIVE
          </span>
        </div>

        {/* filter tabs */}
        <div className="mb-4 flex gap-2">
          {["All", "Deals", "Fundraising"].map((tab, i) => (
            <span
              key={tab}
              className={`rounded-full px-3 py-1 text-[11px] font-medium ${
                i === 1
                  ? "border border-amber-500/60 text-amber-400"
                  : "text-white/50"
              }`}
            >
              {tab}
            </span>
          ))}
        </div>

        {/* welcome card */}
        <div className="mb-3 rounded-xl bg-white/5 p-3.5">
          <p className="mb-2 text-[13px] font-semibold text-white">
            Welcome to your briefing
          </p>
          <p className="mb-3 text-[11px] text-white/50">Here&rsquo;s what happened overnight:</p>
          <ul className="space-y-2 text-[12px] text-white/80">
            <li className="flex items-start gap-2">
              <span className="mt-0.5 text-amber-400">✦</span>
              <span>3 new fund closes above $1B</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 text-amber-400">✦</span>
              <span>2 deal pipeline signals in your sectors</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 text-amber-400">✦</span>
              <span>1 regulatory shift affecting covenant structures</span>
            </li>
          </ul>
        </div>

        {/* feed item 1 */}
        <div className="mb-3 border-b border-white/5 pb-3">
          <div className="mb-1 flex items-center gap-2">
            <span className="rounded bg-emerald-500/20 px-1.5 py-0.5 text-[9px] font-bold uppercase text-emerald-400">
              Deals
            </span>
            <span className="text-[10px] text-white/30">2m ago</span>
          </div>
          <p className="text-[13px] font-semibold leading-snug text-white">
            Ares closes $3.7B direct lending vehicle ahead of schedule
          </p>
          <p className="mt-1 text-[10px] text-white/30">Private Debt Investor</p>
        </div>

        {/* feed item 2 */}
        <div className="mb-2 pb-2">
          <div className="mb-1 flex items-center gap-2">
            <span className="rounded bg-sky-500/20 px-1.5 py-0.5 text-[9px] font-bold uppercase text-sky-400">
              Fundraising
            </span>
            <span className="text-[10px] text-white/30">18m ago</span>
          </div>
          <p className="text-[13px] font-semibold leading-snug text-white">
            Blue Owl launches $5B GP stakes fund targeting mid-market lenders
          </p>
          <p className="mt-1 text-[10px] text-white/30">Bloomberg</p>
        </div>

        {/* breaking alert */}
        <div className="mt-2 flex items-center gap-2 rounded-lg bg-red-500/10 px-3 py-2">
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
            !
          </span>
          <div>
            <p className="text-[11px] font-semibold text-white">Breaking alerts</p>
            <p className="text-[9px] text-white/40">real-time, filtered for you</p>
          </div>
        </div>

        {/* bottom nav */}
        <div className="mt-4 flex justify-around border-t border-white/5 pt-3">
          <div className="flex flex-col items-center gap-1">
            <div className="h-4 w-4 rounded bg-amber-500" />
            <span className="text-[9px] text-amber-400">Feed</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <svg className="h-4 w-4 text-white/30" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            <span className="text-[9px] text-white/30">Search</span>
          </div>
        </div>
      </div>
    </PhoneFrame>
  )
}

/* ─── Phone 2: article detail ─── */

function PhoneDetail() {
  return (
    <PhoneFrame className="z-0">
      <div className="rounded-[28px] bg-[#0f172a] px-4 pb-6 pt-3">
        {/* back + source */}
        <div className="mb-3 flex items-center gap-2">
          <span className="text-white/50">‹</span>
          <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] font-semibold text-emerald-400">
            Private Debt Investor
          </span>
          <span className="text-[10px] text-white/30">2 min ago</span>
        </div>

        {/* headline */}
        <h3 className="mb-3 text-[18px] font-bold leading-tight text-white">
          Ares closes $3.7B direct lending vehicle
        </h3>

        {/* sources badge */}
        <div className="mb-3 flex items-center gap-2 rounded-lg bg-emerald-500/10 px-3 py-2">
          <div className="flex h-6 w-6 items-center justify-center rounded bg-emerald-500">
            <span className="text-[8px] font-bold text-white">✓</span>
          </div>
          <span className="text-[11px] text-white/70">
            <span className="font-bold text-white">142 sources</span> curated today
          </span>
        </div>

        {/* key takeaways */}
        <div className="mb-3 rounded-xl bg-[#1a2e1a] p-3.5">
          <p className="mb-2 text-[10px] font-bold uppercase tracking-wider text-amber-400">
            Key Takeaways
          </p>
          <ul className="space-y-1.5 text-[11px] leading-snug text-white/80">
            <li>• Fund oversubscribed by 40%, signalling LP appetite for direct lending</li>
            <li>• Mid-market focus narrows competitive overlap with broadly syndicated loans</li>
            <li>• Covenant-lite structures under scrutiny from institutional LPs</li>
          </ul>
        </div>

        {/* analysis */}
        <p className="mb-4 text-[11px] leading-relaxed text-white/60">
          The rapid close suggests sustained LP confidence in direct lending despite rising defaults
          in adjacent credit strategies. GPs with deployment track records continue to
          attract&nbsp;capital&hellip;
        </p>

        {/* read full */}
        <button className="w-full rounded-full border border-white/20 py-2 text-center text-[12px] font-semibold text-white/80">
          Read full briefing
        </button>
      </div>
    </PhoneFrame>
  )
}

/* ─── main page ─── */

export default function ForPrivateCreditGPs() {
  return (
    <div className="flex min-h-screen flex-col bg-[#FAF8F4]">
      {/* hero */}
      <main className="flex-1">
        <div className="container px-4 md:px-6">
          <div className="grid min-h-[85vh] items-center gap-12 py-16 lg:grid-cols-2 lg:gap-20">
            {/* left — copy */}
            <div className="max-w-xl space-y-8">
              <PillBadge />

              <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-stone-900 sm:text-5xl lg:text-[56px]"
                  style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
                The #1 Morning Briefing for GPs in Private Credit
              </h1>

              <p className="text-lg leading-relaxed text-stone-500">
                The essential daily digest for General Partners and Allocators. Curated from 150+
                sources, delivered in minutes&nbsp;&mdash; not hours.
              </p>

              <a
                href="mailto:krish@playingfield.co?subject=Early%20Access%20%E2%80%94%20Private%20Credit%20Briefing"
                className="inline-flex items-center gap-2 rounded-full bg-stone-900 px-7 py-3.5 text-base font-semibold text-white transition hover:bg-stone-800"
              >
                Request Early Access
                <span aria-hidden>→</span>
              </a>

              <TrustBar />
            </div>

            {/* right — phones */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative h-[620px] w-[420px]">
                <div className="absolute left-0 top-0"><PhoneFeed /></div>
                <div className="absolute left-[150px] top-[24px]"><PhoneDetail /></div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* footer */}
      <footer className="w-full border-t py-10">
        <div className="container px-4 text-center md:px-6">
          <p className="text-sm text-stone-400">
            © {new Date().getFullYear()} Playing Field Group
          </p>
        </div>
      </footer>
    </div>
  )
}
