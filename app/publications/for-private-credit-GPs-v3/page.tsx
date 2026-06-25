import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The #1 Morning Briefing for GPs in Private Credit",
  description:
    "Our editors and AI read 150+ sources before dawn — deals, pricing, mandates, regulation, podcasts — and write you one sharp briefing.",
};

/* ───────── tiny inline sub-components ───────── */

function Dot({ color }: { color: string }) {
  return <span className={`inline-block h-3 w-3 rounded-full ${color}`} />;
}

function SourcePill({ name, color }: { name: string; color: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-4 py-2 text-sm font-medium text-stone-700 shadow-sm">
      <span className={`inline-block h-3 w-3 rounded-full ${color}`} />
      {name}
    </span>
  );
}

function StepCard({
  num,
  title,
  desc,
}: {
  num: number;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex flex-col items-start gap-4 rounded-2xl border border-stone-200 bg-white p-8 shadow-sm">
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E8734A] text-lg font-bold text-white">
        {num}
      </span>
      <h3 className="text-xl font-bold text-stone-900" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
        {title}
      </h3>
      <p className="text-stone-500 leading-relaxed">{desc}</p>
    </div>
  );
}

/* ───────── page ───────── */

export default function PrivateCreditBriefingV3() {
  return (
    <main className="min-h-screen bg-[#F5F2ED]">
      {/* ─── HERO ─── */}
      <section className="mx-auto max-w-6xl px-6 pb-24 pt-20 md:pt-28">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left — copy */}
          <div className="max-w-xl">
            <span className="mb-4 inline-block rounded-full bg-[#E8734A]/10 px-4 py-1.5 text-sm font-semibold tracking-wide text-[#E8734A]">
              NEWSLETTER
            </span>
            <h1
              className="mb-6 text-4xl font-bold leading-tight text-stone-900 md:text-5xl lg:text-[3.25rem]"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              The #1 Morning Briefing for GPs in Private Credit
            </h1>
            <p className="mb-8 text-lg leading-relaxed text-stone-600">
              Our editors and AI read 150+ sources before dawn&nbsp;— deals,
              pricing, mandates, regulation, podcasts&nbsp;— and write you one
              sharp briefing. Tell us what you cover; we tailor the rest.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="mailto:krish@playingfield.co?subject=Early%20Access%20%E2%80%94%20Private%20Credit%20Briefing"
                className="inline-flex items-center rounded-full bg-stone-900 px-7 py-3.5 text-sm font-semibold text-white shadow-md transition hover:bg-stone-800"
              >
                Build your briefing
              </a>
              <a
                href="#sample"
                className="inline-flex items-center rounded-full border-2 border-stone-300 px-7 py-3.5 text-sm font-semibold text-stone-700 transition hover:border-stone-500"
              >
                See today's sample
              </a>
            </div>

            <p className="mt-5 text-sm text-stone-400">
              Free forever · lands tomorrow 7 am · no account to start
            </p>
          </div>

          {/* Right — interactive briefing card */}
          <div id="sample" className="w-full">
            <div className="overflow-hidden rounded-2xl border border-stone-200 bg-[#FAF8F5] shadow-lg">
              {/* browser chrome */}
              <div className="flex items-center gap-2 border-b border-stone-200 bg-white px-5 py-3">
                <Dot color="bg-red-400" />
                <Dot color="bg-yellow-400" />
                <Dot color="bg-green-400" />
                <span className="ml-3 text-xs font-medium tracking-wide text-stone-400">
                  your briefing · live
                </span>
              </div>

              <div className="space-y-6 p-6 md:p-8">
                {/* topic pills */}
                <div>
                  <p className="mb-3 text-sm font-semibold tracking-wide text-stone-500">
                    What do you cover?
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Direct Lending", "NAV Lending", "CLOs"].map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-stone-900 px-4 py-1.5 text-sm font-medium text-white"
                      >
                        {t}
                      </span>
                    ))}
                    {["Mezzanine", "Distressed"].map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-stone-300 px-4 py-1.5 text-sm font-medium text-stone-600"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* TOP OF THE MARKET */}
                <div className="rounded-xl border border-stone-200 bg-white p-5">
                  <div className="mb-3 flex items-center gap-2">
                    <span className="text-[#E8734A]">
                      {/* orange triangle */}
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M10 3l8 14H2z" />
                      </svg>
                    </span>
                    <span className="text-xs font-bold tracking-widest text-[#E8734A]">
                      TOP OF THE MARKET
                    </span>
                  </div>
                  <ul className="space-y-2 text-sm leading-relaxed text-stone-700">
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#E8734A]" />
                      Megafund prices $1.2B NAV facility — spreads tighten 40 bps
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#E8734A]" />
                      Blue Owl closes $5B GP stakes fund
                    </li>
                  </ul>
                </div>

                {/* PODCAST IN 60S */}
                <div className="rounded-xl border border-stone-200 bg-white p-5">
                  <div className="mb-3 flex items-center gap-2">
                    <span className="text-[#E8734A]">
                      {/* headphone icon */}
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
                        <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
                      </svg>
                    </span>
                    <span className="text-xs font-bold tracking-widest text-[#E8734A]">
                      PODCAST IN 60S
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-stone-700">
                    <span className="font-semibold">The Private Credit Pod</span>{" "}
                    — why direct lending is the next battleground
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SOURCES ─── */}
      <section className="border-y border-stone-200 bg-white/60 py-20">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2
            className="mb-10 text-3xl font-bold text-stone-900 md:text-4xl"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            150+ sources read before dawn
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { name: "PDI", color: "bg-blue-500" },
              { name: "Bloomberg", color: "bg-orange-500" },
              { name: "PitchBook", color: "bg-emerald-600" },
              { name: "Debtwire", color: "bg-red-500" },
              { name: "S&P Global", color: "bg-sky-600" },
              { name: "FT", color: "bg-rose-300" },
              { name: "Preqin", color: "bg-violet-500" },
              { name: "WSJ Pro", color: "bg-stone-800" },
              { name: "Reorg", color: "bg-amber-500" },
              { name: "Private Debt Investor", color: "bg-teal-600" },
              { name: "IJGlobal", color: "bg-indigo-500" },
              { name: "Creditflux", color: "bg-cyan-600" },
            ].map((s) => (
              <SourcePill key={s.name} name={s.name} color={s.color} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── THREE STEPS ─── */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2
            className="mb-4 text-center text-3xl font-bold text-stone-900 md:text-4xl"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            Tell us what you cover. That&rsquo;s it.
          </h2>
          <p className="mx-auto mb-12 max-w-xl text-center text-stone-500">
            Three steps to a briefing that actually matches your mandate.
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            <StepCard
              num={1}
              title="Pick your topics"
              desc="Direct lending, NAV, CLOs, distressed — toggle the verticals you live in."
            />
            <StepCard
              num={2}
              title="Add what you want in"
              desc="Deals, pricing, regulation, podcasts, people moves — you choose the mix."
            />
            <StepCard
              num={3}
              title="Wake up briefed"
              desc="One email at 7 am, sharp and scannable. No fluff, no paywall."
            />
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIAL ─── */}
      <section className="bg-stone-900 py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <svg
            className="mx-auto mb-6 text-[#E8734A]"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M11 7.5a4.5 4.5 0 0 0-9 0v1a2.5 2.5 0 0 0 5 0V8H5.5A2.5 2.5 0 0 1 3 5.5v0A4.5 4.5 0 0 1 7.5 1H8" opacity=".4" />
            <path d="M4.6 17.4A7.96 8 0 0 1 2 11.5V11h2v.5c0 1.7.6 3.3 1.7 4.5L4.6 17.4z" opacity="0" />
            <text x="1" y="20" fontSize="18" fontWeight="bold">&ldquo;</text>
          </svg>
          <blockquote
            className="mb-6 text-2xl font-bold leading-snug text-white md:text-3xl"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            &ldquo;It&rsquo;s the only thing I read before standup&nbsp;— and it
            already knows my market.&rdquo;
          </blockquote>
          <p className="text-sm font-semibold tracking-wide text-stone-300">
            A GP in private credit
          </p>
          <p className="mt-1 text-xs tracking-wider text-stone-500">
            Direct lending · Fund finance
          </p>
        </div>
      </section>

      {/* ─── CTA FOOTER ─── */}
      <section className="py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2
            className="mb-6 text-3xl font-bold text-stone-900 md:text-4xl"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            Start tomorrow&rsquo;s briefing today.
          </h2>
          <a
            href="mailto:krish@playingfield.co?subject=Early%20Access%20%E2%80%94%20Private%20Credit%20Briefing"
            className="inline-flex items-center rounded-full bg-stone-900 px-8 py-4 text-base font-semibold text-white shadow-md transition hover:bg-stone-800"
          >
            Build your briefing — free →
          </a>
          <p className="mt-5 text-sm text-stone-400">
            Free forever · lands tomorrow 7 am · no account to start
          </p>
        </div>
      </section>
    </main>
  );
}
