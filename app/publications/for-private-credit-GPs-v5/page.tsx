import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "The #1 Morning Briefing for GPs in Private Credit | Playing Field",
  description:
    "The essential daily digest for General Partners and Allocators in private credit. Curated from 150+ sources, delivered in minutes — not hours.",
}

/* ─── design tokens ─── */
const BG = "#000000"
const CARD_BG = "#111111"
const GOLD = "#D4A853"
const STAR = "#FFD700"
const MUTED = "#999999"

/* ─── small components ─── */

function Stars() {
  return (
    <span className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <span key={i} style={{ color: STAR }}>★</span>
      ))}
    </span>
  )
}

function StatItem({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      {/* laurel left + value + laurel right */}
      <div className="flex items-center justify-center gap-3">
        <span className="text-lg" style={{ color: GOLD }}>❦</span>
        <p className="text-3xl font-bold text-white sm:text-4xl">{value}</p>
        <span className="text-lg" style={{ color: GOLD }}>❦</span>
      </div>
      <p className="mt-1 text-sm" style={{ color: MUTED }}>{label}</p>
    </div>
  )
}

function TestimonialCard({ quote, name, role }: { quote: string; name: string; role: string }) {
  return (
    <div className="flex min-w-[300px] flex-col justify-between rounded-2xl p-6" style={{ backgroundColor: CARD_BG }}>
      <p className="mb-4 text-sm leading-relaxed text-white/80">&ldquo;{quote}&rdquo;</p>
      <div className="flex items-center gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
          <span className="text-xs font-bold" style={{ color: GOLD }}>{name.split(" ").map(n => n[0]).join("")}</span>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">{name}</p>
          <Stars />
        </div>
      </div>
    </div>
  )
}

/* ─── iPhone frame ─── */

function PhoneFrame({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`w-[250px] rounded-[36px] bg-[#1a1a1a] p-2.5 shadow-2xl ring-1 ring-white/10 ${className}`}>
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

/* ─── Phone: feed ─── */

function PhoneFeed() {
  return (
    <PhoneFrame>
      <div className="rounded-[26px] bg-[#0f172a] px-4 pb-5 pt-3">
        <div className="mb-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-md" style={{ backgroundColor: GOLD }}>
              <span className="text-[9px] font-bold text-white">PF</span>
            </div>
            <span className="text-xs font-bold text-white">Playing Field</span>
          </div>
          <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[9px] font-bold text-emerald-400">LIVE</span>
        </div>
        <div className="mb-3 flex gap-1.5">
          {["All", "Deals", "Fundraising"].map((tab, i) => (
            <span key={tab} className={`rounded-full px-2.5 py-0.5 text-[10px] font-medium ${i === 1 ? "text-white" : "text-white/40"}`}
                  style={i === 1 ? { border: `1px solid ${GOLD}66`, color: GOLD } : {}}>
              {tab}
            </span>
          ))}
        </div>
        <div className="mb-3 rounded-lg bg-white/5 p-3">
          <p className="mb-1.5 text-[12px] font-semibold text-white">Welcome to your briefing</p>
          <p className="mb-2 text-[10px] text-white/40">Here&rsquo;s what happened overnight:</p>
          <ul className="space-y-1.5 text-[11px] text-white/70">
            {["3 new fund closes above $1B", "2 deal pipeline signals in your sectors", "1 regulatory shift affecting covenant structures"].map((item) => (
              <li key={item} className="flex items-start gap-1.5">
                <span className="mt-0.5" style={{ color: GOLD }}>✦</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="mb-2 border-b border-white/5 pb-2">
          <div className="mb-1 flex items-center gap-1.5">
            <span className="rounded px-1.5 py-0.5 text-[8px] font-bold uppercase" style={{ backgroundColor: `${GOLD}22`, color: GOLD }}>Deals</span>
            <span className="text-[9px] text-white/30">2m ago</span>
          </div>
          <p className="text-[11px] font-semibold leading-snug text-white">Ares closes $3.7B direct lending vehicle ahead of schedule</p>
          <p className="mt-0.5 text-[9px] text-white/30">Private Debt Investor</p>
        </div>
        <div className="pb-1">
          <div className="mb-1 flex items-center gap-1.5">
            <span className="rounded px-1.5 py-0.5 text-[8px] font-bold uppercase bg-sky-500/20 text-sky-400">Fundraising</span>
            <span className="text-[9px] text-white/30">18m ago</span>
          </div>
          <p className="text-[11px] font-semibold leading-snug text-white">Blue Owl launches $5B GP stakes fund targeting mid-market lenders</p>
          <p className="mt-0.5 text-[9px] text-white/30">Bloomberg</p>
        </div>
        <div className="mt-2 flex items-center gap-1.5 rounded-lg bg-red-500/10 px-2.5 py-1.5">
          <span className="flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[8px] font-bold text-white">!</span>
          <div>
            <p className="text-[10px] font-semibold text-white">Breaking alerts</p>
            <p className="text-[8px] text-white/40">real-time, filtered for you</p>
          </div>
        </div>
      </div>
    </PhoneFrame>
  )
}

/* ─── Phone: detail ─── */

function PhoneDetail() {
  return (
    <PhoneFrame>
      <div className="rounded-[26px] bg-[#0f172a] px-4 pb-5 pt-3">
        <div className="mb-2 flex items-center gap-1.5">
          <span className="text-white/50">‹</span>
          <span className="rounded-full px-2 py-0.5 text-[9px] font-semibold" style={{ backgroundColor: `${GOLD}22`, color: GOLD }}>Private Debt Investor</span>
          <span className="text-[9px] text-white/30">2 min ago</span>
        </div>
        <h3 className="mb-2 text-[16px] font-bold leading-tight text-white" style={{ fontFamily: "Georgia, serif" }}>
          Ares closes $3.7B direct lending vehicle
        </h3>
        <div className="mb-2 flex items-center gap-1.5 rounded-lg px-2.5 py-1.5" style={{ backgroundColor: `${GOLD}0D` }}>
          <div className="flex h-5 w-5 items-center justify-center rounded" style={{ backgroundColor: GOLD }}>
            <span className="text-[7px] font-bold text-white">✓</span>
          </div>
          <span className="text-[10px] text-white/70"><span className="font-bold text-white">142 sources</span> curated today</span>
        </div>
        <div className="mb-2 rounded-xl p-3" style={{ backgroundColor: "#1a2e1a" }}>
          <p className="mb-1.5 text-[9px] font-bold uppercase tracking-wider" style={{ color: GOLD }}>Key Takeaways</p>
          <ul className="space-y-1 text-[10px] leading-snug text-white/70">
            <li>• Fund oversubscribed by 40%, signalling LP appetite for direct lending</li>
            <li>• Mid-market focus narrows competitive overlap with syndicated loans</li>
            <li>• Covenant-lite structures under scrutiny from institutional LPs</li>
          </ul>
        </div>
        <p className="mb-3 text-[10px] leading-relaxed text-white/50">
          The rapid close suggests sustained LP confidence in direct lending despite rising defaults in adjacent credit strategies&hellip;
        </p>
        <button className="w-full rounded-full py-1.5 text-center text-[11px] font-semibold text-white/80" style={{ border: `1px solid ${GOLD}44` }}>
          Read full briefing
        </button>
      </div>
    </PhoneFrame>
  )
}

/* ─── feature section ─── */

function FeatureRow({ title, description, phone, reverse = false }: { title: string; description: string; phone: React.ReactNode; reverse?: boolean }) {
  return (
    <div className={`flex flex-col items-center gap-12 py-16 lg:flex-row lg:gap-20 ${reverse ? "lg:flex-row-reverse" : ""}`}>
      <div className="flex-1 flex justify-center">{phone}</div>
      <div className="flex-1 max-w-md">
        <h3 className="mb-4 text-2xl font-bold text-white" style={{ fontFamily: "Georgia, serif" }}>{title}</h3>
        <p className="text-base leading-relaxed" style={{ color: MUTED }}>{description}</p>
      </div>
    </div>
  )
}

/* ─── main page ─── */

export default function ForPrivateCreditGPsV5() {
  return (
    <div className="flex min-h-screen flex-col" style={{ backgroundColor: BG }}>
      <main className="flex-1">

        {/* ══════ HERO ══════ */}
        <section className="relative overflow-hidden py-24 lg:py-32">
          {/* warm ambient glow */}
          <div className="absolute inset-0 opacity-20" style={{ background: "radial-gradient(ellipse at 50% 30%, #3b2510 0%, transparent 70%)" }} />
          <div className="container relative z-10 mx-auto max-w-3xl px-4 text-center md:px-6">
            <h1 className="text-4xl font-bold leading-[1.15] text-white sm:text-5xl lg:text-[52px]" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
              The <em>home</em> for your morning briefing.
            </h1>
            <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed" style={{ color: MUTED }}>
              The essential daily digest for General Partners and Allocators in private credit. Curated from 150+ sources, delivered in minutes&nbsp;&mdash; not hours.
            </p>
            <a href="mailto:krish@playingfield.co?subject=Early%20Access%20%E2%80%94%20Private%20Credit%20Briefing"
               className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 text-base font-semibold text-black transition hover:bg-white/90">
              Get early access
            </a>
          </div>
        </section>

        {/* ══════ STATS BAR ══════ */}
        <section className="border-y border-white/5 py-12">
          <div className="container mx-auto grid max-w-3xl grid-cols-3 gap-8 px-4 md:px-6">
            <StatItem value="#1" label="private credit briefing" />
            <StatItem value="150+" label="sources read before dawn" />
            <StatItem value="7am" label="in your inbox daily" />
          </div>
        </section>

        {/* ══════ SOCIAL PROOF + CTA ══════ */}
        <section className="py-20">
          <div className="container mx-auto max-w-3xl px-4 text-center md:px-6">
            <p className="mb-2 text-sm font-medium" style={{ color: GOLD }}>Trusted by leading GPs</p>
            <h2 className="text-3xl font-bold text-white sm:text-4xl" style={{ fontFamily: "Georgia, serif" }}>
              The most trusted briefing in private credit
            </h2>
            <a href="mailto:krish@playingfield.co?subject=Early%20Access%20%E2%80%94%20Private%20Credit%20Briefing"
               className="mt-8 inline-flex items-center gap-2 rounded-xl px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
               style={{ border: "1px solid rgba(255,255,255,0.2)" }}>
              Request early access
            </a>
          </div>
        </section>

        {/* ══════ TESTIMONIALS ══════ */}
        <section className="overflow-hidden py-8">
          <div className="flex gap-4 px-4" style={{ animation: "none" }}>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 mx-auto max-w-5xl">
              <TestimonialCard
                quote="It's the only thing I read before standup — and it already knows my market."
                name="Sarah K"
                role="GP, Direct Lending"
              />
              <TestimonialCard
                quote="We used to spend 45 minutes every morning scanning PDI, Bloomberg, Debtwire. Now it's five minutes with coffee."
                name="James M"
                role="Partner, $2B Fund"
              />
              <TestimonialCard
                quote="The deal alerts alone are worth it. We caught a mandate 24 hours before our competitors."
                name="Michael R"
                role="MD, Fund Finance"
              />
              <TestimonialCard
                quote="Finally a briefing that understands the difference between broadly syndicated and direct. The signal-to-noise ratio is unreal."
                name="David L"
                role="CIO, Credit Fund"
              />
              <TestimonialCard
                quote="I forward the key takeaways to my IC every morning. It's become the starting point for our deal discussions."
                name="Anna T"
                role="GP, Mid-Market"
              />
              <TestimonialCard
                quote="The podcast summaries save me hours. I know what's being said on every private credit pod without listening to any of them."
                name="Peter H"
                role="LP, Allocator"
              />
            </div>
          </div>
        </section>

        {/* ══════ FEATURES HEADER ══════ */}
        <section className="py-20">
          <div className="container mx-auto max-w-3xl px-4 text-center md:px-6">
            <h2 className="text-3xl font-bold text-white sm:text-4xl" style={{ fontFamily: "Georgia, serif" }}>
              The <em>home</em> for your private credit intelligence
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed" style={{ color: MUTED }}>
              Deals, fundraising, regulation, podcasts, and deep dives all in one place. Built for the people moving capital.
            </p>
          </div>
        </section>

        {/* ══════ FEATURE ROWS ══════ */}
        <div className="container mx-auto max-w-5xl px-4 md:px-6">
          <FeatureRow
            title="Morning Brief & Deal Alerts"
            description="Something new, every single morning. Deals, fund closes, mandates, pricing moves — all filtered to what you cover. Never miss a signal again."
            phone={<PhoneFeed />}
          />
          <div className="mx-auto h-px w-full max-w-md" style={{ background: `linear-gradient(90deg, transparent, ${GOLD}33, transparent)` }} />
          <FeatureRow
            title="Key Takeaways & Deep Analysis"
            description="Every story distilled to what matters for your portfolio. Key takeaways, competitive implications, and the 'so what' — written by people who understand the market."
            phone={<PhoneDetail />}
            reverse
          />
        </div>

        {/* ══════ CLOSING CTA ══════ */}
        <section className="py-24">
          <div className="container mx-auto max-w-3xl px-4 text-center md:px-6">
            <h2 className="text-3xl font-bold text-white sm:text-4xl" style={{ fontFamily: "Georgia, serif" }}>
              Some things are worth <em>five minutes</em> of your morning.
            </h2>
            <p className="mx-auto mt-4 max-w-md text-base" style={{ color: MUTED }}>
              Free to start. Lands tomorrow at 7am. It might just change how you start your day.
            </p>
            <a href="mailto:krish@playingfield.co?subject=Early%20Access%20%E2%80%94%20Private%20Credit%20Briefing"
               className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-semibold text-black transition hover:bg-white/90">
              Request Early Access →
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 py-10">
        <div className="container mx-auto px-4 text-center md:px-6">
          <p className="text-sm" style={{ color: "#444" }}>© {new Date().getFullYear()} Playing Field Group</p>
        </div>
      </footer>
    </div>
  )
}
