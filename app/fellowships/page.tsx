import Link from "next/link"
import { Network, Newspaper, TrendingUp, Users } from "lucide-react"

type Fellowship = {
  industry: string
  title: string
  blurb: string
  status: "open" | "soon"
  href?: string
  accentBar: string
  accentText: string
}

const fellowships: Fellowship[] = [
  {
    industry: "Private credit",
    title: "Private Credit Fellowship",
    blurb:
      "Go deep on the corners of the private credit market that matter — alongside the investors and allocators shaping them.",
    status: "open",
    href: "/private-credit-fellowship",
    accentBar: "bg-indigo-500",
    accentText: "text-indigo-700",
  },
  {
    industry: "Venture capital",
    title: "European Venture Capital Fellowship",
    blurb: "Research the funds, founders, and deals defining the next decade of European venture.",
    status: "soon",
    accentBar: "bg-amber-500",
    accentText: "text-amber-700",
  },
  {
    industry: "Agribusiness",
    title: "African Agribusiness Fellowship",
    blurb: "Get inside the operators and capital building Africa's agriculture and food systems.",
    status: "soon",
    accentBar: "bg-emerald-500",
    accentText: "text-emerald-700",
  },
  {
    industry: "Infrastructure",
    title: "African Infrastructure Fellowship",
    blurb: "Report on the projects and financing shaping the continent's infrastructure boom.",
    status: "soon",
    accentBar: "bg-sky-500",
    accentText: "text-sky-700",
  },
  {
    industry: "Hospitality",
    title: "Hotel Capital Fellowship",
    blurb: "Understand how capital moves through global hospitality — from the people running the deals.",
    status: "soon",
    accentBar: "bg-rose-500",
    accentText: "text-rose-700",
  },
  {
    industry: "Technology",
    title: "Technology Investment Fellowship",
    blurb: "Track how capital flows into technology, written from inside the funds.",
    status: "soon",
    accentBar: "bg-violet-500",
    accentText: "text-violet-700",
  },
]

const benefits = [
  {
    title: "Access to the people building the industry",
    description:
      "Direct relationships with the operators, investors, and allocators shaping your field — the people you'd otherwise spend years trying to meet.",
    Icon: Network,
    tileBg: "bg-indigo-50",
    iconColor: "text-indigo-500",
  },
  {
    title: "A community of ambitious peers",
    description:
      "Go deep alongside a small cohort tackling the same industry. The relationships you build here tend to outlast the fellowship itself.",
    Icon: Users,
    tileBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
  {
    title: "Work that builds your reputation",
    description:
      "Interviews and analysis published under your name, through the industry's publication — a body of work that becomes your calling card.",
    Icon: Newspaper,
    tileBg: "bg-rose-50",
    iconColor: "text-rose-500",
  },
  {
    title: "Mentorship that accelerates you",
    description:
      "Work directly with the founding team to sharpen your thesis, your questions, and your judgement — faster than you would alone.",
    Icon: TrendingUp,
    tileBg: "bg-amber-50",
    iconColor: "text-amber-600",
  },
]

export default function Fellowships() {
  return (
    <main className="min-h-screen bg-white text-black">
      {/* Hero */}
      <section className="px-6 pt-24 pb-16 md:pt-32 md:pb-20">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-black/15 text-xs uppercase tracking-[0.2em] text-black/70">
            Playing Field Fellowships
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-black">
            Accelerate your expertise in the industries that shape the world.
          </h1>

          <p className="text-lg md:text-xl text-black/70 leading-relaxed max-w-2xl mx-auto">
            Playing Field&rsquo;s fellowships are free, selective communities for going deep on a
            single industry — with direct access to the people building it, and a platform to publish
            your work and build your reputation.
          </p>
        </div>
      </section>

      {/* Pick a fellowship */}
      <section className="px-6 pb-24">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-baseline gap-4 mb-10">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-black">Choose a fellowship</h2>
            <div className="h-px flex-1 bg-black/10" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {fellowships.map((f) =>
              f.status === "open" && f.href ? (
                <Link
                  key={f.title}
                  href={f.href}
                  className="group block border border-black/15 hover:border-black transition-colors overflow-hidden"
                >
                  <div className={`h-1.5 ${f.accentBar}`} />
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-6">
                      <span className={`text-xs uppercase tracking-[0.2em] font-medium ${f.accentText}`}>
                        {f.industry}
                      </span>
                      <span className="text-xs uppercase tracking-[0.18em] font-medium text-emerald-700">
                        Applications open
                      </span>
                    </div>
                    <h3 className="text-2xl font-extrabold tracking-tight text-black mb-3">{f.title}</h3>
                    <p className="text-black/70 leading-relaxed mb-6">{f.blurb}</p>
                    <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-black group-hover:gap-3 transition-all">
                      View fellowship →
                    </span>
                  </div>
                </Link>
              ) : (
                <div key={f.title} className="border border-black/10 overflow-hidden">
                  <div className={`h-1.5 ${f.accentBar} opacity-30`} />
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-xs uppercase tracking-[0.2em] font-medium text-black/40">
                        {f.industry}
                      </span>
                      <span className="text-xs uppercase tracking-[0.18em] font-medium text-black/40">
                        Coming soon
                      </span>
                    </div>
                    <h3 className="text-2xl font-extrabold tracking-tight text-black/60 mb-3">{f.title}</h3>
                    <p className="text-black/50 leading-relaxed">{f.blurb}</p>
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* What you get (alternating text / visual) */}
      <section className="px-6 py-24 bg-gray-50 border-t border-black/10">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-baseline gap-4 mb-16">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-black">What you get</h2>
            <div className="h-px flex-1 bg-black/10" />
          </div>

          <div className="space-y-16 md:space-y-20">
            {benefits.map((b, i) => (
              <div
                key={b.title}
                className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 items-center ${
                  i % 2 === 0 ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className={`aspect-[4/3] rounded-xl ${b.tileBg} flex items-center justify-center`}>
                  <b.Icon className={`h-16 w-16 ${b.iconColor}`} strokeWidth={1.25} />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-black mb-4">
                    {b.title}
                  </h3>
                  <p className="text-black/70 leading-relaxed text-lg">{b.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Register interest */}
      <section className="px-6 py-24 text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-black">
            Don&rsquo;t see your industry?
          </h2>
          <p className="text-lg text-black/70 leading-relaxed">
            We&rsquo;re launching new fellowships across the industries that shape the global economy.
            Tell us where you want to go deep.
          </p>
          <div className="pt-2">
            <a
              href="#register"
              className="inline-block bg-black text-white text-sm font-bold uppercase tracking-[0.2em] px-10 py-5 hover:opacity-80 transition-opacity"
            >
              Register your interest
            </a>
          </div>
        </div>
      </section>

      <footer className="px-6 py-12 border-t border-black/10 text-center">
        <p className="text-sm text-black/50">© {new Date().getFullYear()} Playing Field</p>
      </footer>
    </main>
  )
}
