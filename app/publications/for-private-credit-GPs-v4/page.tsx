import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "The #1 Morning Briefing for GPs in Private Credit | Playing Field",
  description:
    "The essential daily digest for General Partners and Allocators in private credit. Curated from 150+ sources, delivered in minutes — not hours.",
}

/* ─── design tokens ─── */
const DARK = "#0B1120"
const DARK_CARD = "#111827"
const GOLD = "#D4A853"
const GOLD_DIM = "#C9952D"

/* ─── small components ─── */

function GoldDivider() {
  return (
    <div className="mx-auto my-16 h-px w-full max-w-4xl" style={{ background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)` }} />
  )
}

function Avatar({ initials, bg }: { initials: string; bg: string }) {
  return (
    <span
      className={`inline-flex h-9 w-9 items-center justify-center rounded-full text-xs font-semibold text-white ring-2 ${bg}`}
      style={{ ringColor: GOLD, boxShadow: `0 0 0 2px ${GOLD}` }}
    >
      {initials}
    </span>
  )
}

/* ─── iPhone frame ─── */

function PhoneFrame({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative w-[250px] rounded-[40px] p-3 shadow-2xl ${className}`}
         style={{ backgroundColor: DARK, border: `1px solid ${GOLD}33` }}>
      <div className="flex items-center justify-between px-5 pb-2 pt-3 text-[11px] font-semibold text-white">
        <span>9:41</span>
        <div className="flex items-center gap-1">
          <svg className="h-3 w-3" fill="white" viewBox="0 0 24 24"><path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3a4.237 4.237 0 00-6 0zm-4-4l2 2a7.074 7.074 0 0110 0l2-2C15.14 9.14 8.87 9.14 5 13z"/></svg>
          <svg className="h-4 w-4" fill="white" viewBox="0 0 24 24"><rect x="2" y="6" width="18" height="12" rx="2"/><rect x="20" y="9" width="2" height="6" rx="1"/></svg>
        </div>
      </div>
      {children}
    </div>
  )
}

/* ─── Phone 1: feed ─── */

function PhoneFeed() {
  return (
    <PhoneFrame className="z-10">
      <div className="rounded-[28px] px-4 pb-6 pt-3" style={{ backgroundColor: DARK_CARD }}>
        {/* header */}
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-md" style={{ backgroundColor: GOLD }}>
              <span className="text-[10px] font-bold text-white">PF</span>
            </div>
            <span className="text-sm font-bold text-white">Playing Field</span>
          </div>
          <span className="rounded-full px-2 py-0.5 text-[10px] font-bold" style={{ backgroundColor: `${GOLD}22`, color: GOLD }}>
            LIVE
          </span>
        </div>

        {/* tabs */}
        <div className="mb-4 flex gap-2">
          {["All", "Deals", "Fundraising"].map((tab, i) => (
            <span key={tab} className={`rounded-full px-3 py-1 text-[11px] font-medium ${i === 1 ? "text-white" : "text-white/40"}`}
                  style={i === 1 ? { border: `1px solid ${GOLD}66`, color: GOLD } : {}}>
              {tab}
            </span>
          ))}
        </div>

        {/* welcome */}
        <div className="mb-3 rounded-xl p-3.5" style={{ backgroundColor: `${GOLD}08` }}>
          <p className="mb-2 text-[13px] font-semibold text-white">Welcome to your briefing</p>
          <p className="mb-3 text-[11px] text-white/40">Here&rsquo;s what happened overnight:</p>
          <ul className="space-y-2 text-[12px] text-white/70">
            {["3 new fund closes above $1B", "2 deal pipeline signals in your sectors", "1 regulatory shift affecting covenant structures"].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-0.5" style={{ color: GOLD }}>✦</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* article 1 */}
        <div className="mb-3 border-b border-white/5 pb-3">
          <div className="mb-1 flex items-center gap-2">
            <span className="rounded px-1.5 py-0.5 text-[9px] font-bold uppercase" style={{ backgroundColor: `${GOLD}22`, color: GOLD }}>
              Deals
            </span>
            <span className="text-[10px] text-white/30">2m ago</span>
          </div>
          <p className="text-[13px] font-semibold leading-snug text-white">Ares closes $3.7B direct lending vehicle ahead of schedule</p>
          <p className="mt-1 text-[10px] text-white/30">Private Debt Investor</p>
        </div>

        {/* article 2 */}
        <div className="pb-2">
          <div className="mb-1 flex items-center gap-2">
            <span className="rounded px-1.5 py-0.5 text-[9px] font-bold uppercase" style={{ backgroundColor: "#3b82f622", color: "#60a5fa" }}>
              Fundraising
            </span>
            <span className="text-[10px] text-white/30">18m ago</span>
          </div>
          <p className="text-[13px] font-semibold leading-snug text-white">Blue Owl launches $5B GP stakes fund targeting mid-market lenders</p>
          <p className="mt-1 text-[10px] text-white/30">Bloomberg</p>
        </div>

        {/* bottom nav */}
        <div className="mt-4 flex justify-around border-t border-white/5 pt-3">
          <div className="flex flex-col items-center gap-1">
            <div className="h-4 w-4 rounded" style={{ backgroundColor: GOLD }} />
            <span className="text-[9px]" style={{ color: GOLD }}>Feed</span>
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

/* ─── Phone 2: detail ─── */

function PhoneDetail() {
  return (
    <PhoneFrame className="z-0">
      <div className="rounded-[28px] px-4 pb-6 pt-3" style={{ backgroundColor: DARK_CARD }}>
        <div className="mb-3 flex items-center gap-2">
          <span className="text-white/50">‹</span>
          <span className="rounded-full px-2 py-0.5 text-[10px] font-semibold" style={{ backgroundColor: `${GOLD}22`, color: GOLD }}>
            Private Debt Investor
          </span>
          <span className="text-[10px] text-white/30">2 min ago</span>
        </div>

        <h3 className="mb-3 text-[18px] font-bold leading-tight text-white" style={{ fontFamily: "Georgia, serif" }}>
          Ares closes $3.7B direct lending vehicle
        </h3>

        <div className="mb-3 flex items-center gap-2 rounded-lg px-3 py-2" style={{ backgroundColor: `${GOLD}0D` }}>
          <div className="flex h-6 w-6 items-center justify-center rounded" style={{ backgroundColor: GOLD }}>
            <span className="text-[8px] font-bold text-white">✓</span>
          </div>
          <span className="text-[11px] text-white/70">
            <span className="font-bold text-white">142 sources</span> curated today
          </span>
        </div>

        <div className="mb-3 rounded-xl p-3.5" style={{ backgroundColor: "#1a1f2e" }}>
          <p className="mb-2 text-[10px] font-bold uppercase tracking-wider" style={{ color: GOLD }}>Key Takeaways</p>
          <ul className="space-y-1.5 text-[11px] leading-snug text-white/70">
            <li>• Fund oversubscribed by 40%, signalling LP appetite for direct lending</li>
            <li>• Mid-market focus narrows competitive overlap with syndicated loans</li>
            <li>• Covenant-lite structures under scrutiny from institutional LPs</li>
          </ul>
        </div>

        <p className="mb-4 text-[11px] leading-relaxed text-white/50">
          The rapid close suggests sustained LP confidence in direct lending despite rising defaults in adjacent credit strategies&hellip;
        </p>

        <button className="w-full rounded-full py-2 text-center text-[12px] font-semibold text-white/80" style={{ border: `1px solid ${GOLD}44` }}>
          Read full briefing
        </button>
      </div>
    </PhoneFrame>
  )
}

/* ─── main page ─── */

export default function ForPrivateCreditGPsV4() {
  return (
    <div className="flex min-h-screen flex-col" style={{ backgroundColor: DARK }}>
      <main className="flex-1">
        {/* hero */}
        <div className="container px-4 md:px-6">
          <div className="grid min-h-[85vh] items-center gap-12 overflow-visible py-16 lg:grid-cols-2 lg:gap-20">
            {/* left */}
            <div className="max-w-xl space-y-8">
              <span className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium"
                    style={{ backgroundColor: `${GOLD}15`, color: GOLD, border: `1px solid ${GOLD}33` }}>
                <span className="h-2 w-2 rounded-full" style={{ backgroundColor: GOLD }} />
                Invite-only access
              </span>

              <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[56px]"
                  style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
                The #1 Morning Briefing for GPs in Private Credit
              </h1>

              <p className="text-lg leading-relaxed text-white/50">
                The essential daily digest for General Partners and Allocators. Curated from 150+ sources, delivered in minutes&nbsp;&mdash; not hours.
              </p>

              <a href="mailto:krish@playingfield.co?subject=Early%20Access%20%E2%80%94%20Private%20Credit%20Briefing"
                 className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-base font-semibold text-white transition hover:brightness-110"
                 style={{ border: `2px solid ${GOLD}`, color: GOLD }}>
                Request Early Access
                <span aria-hidden>→</span>
              </a>

              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <Avatar initials="JM" bg="bg-blue-900" />
                  <Avatar initials="SK" bg="bg-stone-700" />
                  <Avatar initials="AR" bg="bg-amber-600" />
                  <Avatar initials="PT" bg="bg-slate-500" />
                  <Avatar initials="DL" bg="bg-slate-800" />
                </div>
                <p className="text-sm text-white/50">
                  Trusted by GPs at <span className="font-semibold text-white/80">Ares, Apollo, Blackstone</span>
                </p>
              </div>
            </div>

            {/* right — phones */}
            <div className="relative flex justify-center overflow-visible lg:justify-end">
              <div className="relative h-[600px] w-[380px]">
                <div className="absolute left-0 top-[28px] z-0"><PhoneDetail /></div>
                <div className="absolute left-[130px] top-0 z-10"><PhoneFeed /></div>
              </div>
            </div>
          </div>
        </div>

        <GoldDivider />

        {/* what you get */}
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-12 text-center text-2xl font-bold text-white/80" style={{ fontFamily: "Georgia, serif" }}>
              What You Get
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                { num: "01", title: "Morning Brief", desc: "One sharp digest of every deal, pricing move, and mandate that matters — in your inbox by 7am." },
                { num: "02", title: "Deal Alerts", desc: "Real-time notifications when a deal, fund close, or mandate hits your coverage sectors." },
                { num: "03", title: "Weekly Deep Dive", desc: "Long-form analysis on the structural shifts reshaping private credit markets." },
              ].map((item) => (
                <div key={item.num} className="rounded-xl p-6" style={{ backgroundColor: `${DARK_CARD}` }}>
                  <p className="mb-3 text-3xl font-bold" style={{ color: GOLD }}>{item.num}</p>
                  <h3 className="mb-2 text-lg font-semibold text-white">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-white/50">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <GoldDivider />

        {/* quote */}
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <blockquote className="text-2xl italic leading-relaxed text-white/70 md:text-3xl" style={{ fontFamily: "Georgia, serif" }}>
              &ldquo;The only briefing worth reading before the 8am call.&rdquo;
            </blockquote>
            <div className="mt-6 flex items-center justify-center gap-3">
              <div className="h-10 w-10 rounded-full bg-slate-700 flex items-center justify-center">
                <span className="text-xs font-bold" style={{ color: GOLD }}>MP</span>
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold text-white/70">Managing Partner</p>
                <p className="text-xs text-white/40">$2B direct lending fund</p>
              </div>
            </div>
          </div>
        </div>

        <GoldDivider />

        {/* final cta */}
        <div className="container px-4 pb-20 text-center md:px-6">
          <a href="mailto:krish@playingfield.co?subject=Early%20Access%20%E2%80%94%20Private%20Credit%20Briefing"
             className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-lg font-semibold transition hover:brightness-110"
             style={{ border: `2px solid ${GOLD}`, color: GOLD }}>
            Join the waitlist
            <span aria-hidden>→</span>
          </a>
        </div>
      </main>

      <footer className="w-full py-10">
        <div className="container px-4 text-center md:px-6">
          <p className="text-sm text-white/20">© {new Date().getFullYear()} Playing Field Group</p>
        </div>
      </footer>
    </div>
  )
}
