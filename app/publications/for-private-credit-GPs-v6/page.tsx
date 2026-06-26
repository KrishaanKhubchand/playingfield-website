import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "The Personalised Daily Briefing for GPs in Private Credit | Playing Field",
  description:
    "The essential daily digest for General Partners and Allocators in private credit. Curated from 150+ sources, delivered in minutes — not hours.",
}

/* ─── design tokens ─── */
const HERO_BG = "#2D2D2D"
const ACCENT = "#E8553D"
const ACCENT_HOVER = "#D4472F"

/* ─── iPhone frame ─── */

function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-[250px] rounded-[40px] bg-white p-3 shadow-2xl">
      <div className="flex items-center justify-between px-5 pb-2 pt-3 text-[11px] font-semibold text-gray-800">
        <span>9:41</span>
        <div className="flex items-center gap-1">
          <svg className="h-3 w-3" fill="#333" viewBox="0 0 24 24"><path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3a4.237 4.237 0 00-6 0zm-4-4l2 2a7.074 7.074 0 0110 0l2-2C15.14 9.14 8.87 9.14 5 13z"/></svg>
          <svg className="h-4 w-4" fill="#333" viewBox="0 0 24 24"><rect x="2" y="6" width="18" height="12" rx="2"/><rect x="20" y="9" width="2" height="6" rx="1"/></svg>
        </div>
      </div>
      {children}
    </div>
  )
}

/* ─── Phone: feed view ─── */

function PhoneFeed() {
  return (
    <PhoneFrame>
      <div className="rounded-[28px] bg-white px-4 pb-6 pt-3">
        {/* header */}
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-black">
              <span className="text-[10px] font-bold text-white">PF</span>
            </div>
            <span className="text-sm font-bold text-gray-900">Playing Field</span>
          </div>
          <span className="rounded-full bg-red-50 px-2 py-0.5 text-[10px] font-bold text-red-500">
            LIVE
          </span>
        </div>

        {/* tabs */}
        <div className="mb-4 flex gap-2">
          {["All", "Deals", "Fundraising"].map((tab, i) => (
            <span key={tab} className={`rounded-full px-3 py-1 text-[11px] font-medium ${i === 1 ? "border border-gray-900 text-gray-900" : "text-gray-400"}`}>
              {tab}
            </span>
          ))}
        </div>

        {/* welcome */}
        <div className="mb-3 rounded-xl bg-gray-50 p-3.5">
          <p className="mb-2 text-[13px] font-semibold text-gray-900">Your morning briefing</p>
          <p className="mb-3 text-[11px] text-gray-400">Here&rsquo;s what happened overnight:</p>
          <ul className="space-y-2 text-[12px] text-gray-600">
            {["3 new fund closes above $1B", "2 deal pipeline signals in your sectors", "1 regulatory shift affecting covenant structures"].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-0.5 text-red-500">✦</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* article 1 */}
        <div className="mb-3 border-b border-gray-100 pb-3">
          <div className="mb-1 flex items-center gap-2">
            <span className="rounded bg-orange-50 px-1.5 py-0.5 text-[9px] font-bold uppercase text-orange-600">
              Deals
            </span>
            <span className="text-[10px] text-gray-300">2m ago</span>
          </div>
          <p className="text-[13px] font-semibold leading-snug text-gray-900">Ares closes $3.7B direct lending vehicle ahead of schedule</p>
          <p className="mt-1 text-[10px] text-gray-400">Private Debt Investor</p>
        </div>

        {/* article 2 */}
        <div className="pb-2">
          <div className="mb-1 flex items-center gap-2">
            <span className="rounded bg-blue-50 px-1.5 py-0.5 text-[9px] font-bold uppercase text-blue-600">
              Fundraising
            </span>
            <span className="text-[10px] text-gray-300">18m ago</span>
          </div>
          <p className="text-[13px] font-semibold leading-snug text-gray-900">Blue Owl launches $5B GP stakes fund targeting mid-market lenders</p>
          <p className="mt-1 text-[10px] text-gray-400">Bloomberg</p>
        </div>
      </div>
    </PhoneFrame>
  )
}

/* ─── main page ─── */

export default function ForPrivateCreditGPsV6() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <main className="flex-1">
        {/* ── hero ── */}
        <section style={{ backgroundColor: HERO_BG }}>
          <div className="container overflow-visible px-4 md:px-6">
            <div className="grid min-h-[85vh] items-center gap-12 overflow-visible py-16 lg:grid-cols-2 lg:gap-20">
              {/* left copy */}
              <div className="max-w-xl space-y-6">
                <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[52px]">
                  The Personalised Daily Briefing for GPs in Private Credit
                </h1>

                <p className="text-lg leading-relaxed text-white/60">
                  The essential daily digest for General Partners and Allocators. Curated from 150+ sources, delivered in 5 minutes&nbsp;&mdash; not hours.
                </p>

                <p className="text-sm font-medium text-white/80">
                  Join the GPs at <span className="font-bold text-white">Ares, Apollo, Blackstone</span> who read Playing Field
                </p>

                {/* CTA styled like an email signup row */}
                <div className="flex max-w-md items-stretch gap-0 overflow-hidden rounded-md">
                  <div className="flex flex-1 items-center bg-white px-4 py-3.5">
                    <span className="text-sm text-gray-400">Enter Your Email Address</span>
                  </div>
                  <a
                    href="mailto:krish@playingfield.co?subject=Early%20Access%20%E2%80%94%20Private%20Credit%20Briefing"
                    className="flex items-center whitespace-nowrap px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-white transition hover:brightness-110"
                    style={{ backgroundColor: ACCENT }}
                  >
                    Join Free
                  </a>
                </div>
              </div>

              {/* right — phone */}
              <div className="relative flex justify-center overflow-visible lg:justify-end">
                <div className="relative h-[600px] w-[380px]">
                  <div className="absolute left-[65px] top-[30px]">
                    <PhoneFeed />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── testimonials ── */}
        <section className="bg-white py-20">
          <div className="container px-4 md:px-6">
            <h2 className="mb-14 text-center text-3xl font-extrabold tracking-tight text-gray-900">
              What Readers Are Saying
            </h2>

            <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
              {[
                {
                  initials: "MP",
                  name: "Managing Partner",
                  role: "$2B direct lending fund",
                  quote: "The only briefing worth reading before the 8am call. It catches things our internal research team misses — and it's on my desk before they arrive.",
                },
                {
                  initials: "SK",
                  name: "Senior Partner",
                  role: "Global credit platform",
                  quote: "We were subscribing to six different sources. Playing Field replaced all of them. It's fast, it's sharp, and it actually understands private credit.",
                },
              ].map((t) => (
                <div key={t.initials} className="rounded-lg border border-gray-100 p-8">
                  <span className="mb-4 block text-5xl font-bold leading-none" style={{ color: ACCENT }}>&ldquo;</span>
                  <p className="mb-6 text-sm leading-relaxed text-gray-600">
                    {t.quote}
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200">
                      <span className="text-xs font-bold text-gray-600">{t.initials}</span>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-900">{t.name}</p>
                      <p className="text-xs text-gray-400">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* ── footer ── */}
      <footer className="border-t border-gray-100 py-8">
        <div className="container flex flex-col items-center justify-between gap-4 px-4 text-xs text-gray-400 md:flex-row md:px-6">
          <span>Terms of Use | Privacy Notice</span>
          <span className="text-sm font-extrabold tracking-tight text-gray-900">
            Playing Field
          </span>
          <span>Playing Field | {new Date().getFullYear()}. All Rights Reserved.</span>
        </div>
      </footer>
    </div>
  )
}
