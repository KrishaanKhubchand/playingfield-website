import Link from "next/link"
import { ArrowRight, Users } from "lucide-react"

import { Button } from "@/components/ui/button"

type Session = {
  day: string
  time: string
  name: string
  host: string
  duration: string
  taken: number
  total: number
}

const sessions: Session[] = [
  { day: "Today", time: "14:00", name: "Afternoon 50", host: "Krish A.", duration: "50 min", taken: 8, total: 16 },
  { day: "Today", time: "21:00", name: "Evening 25", host: "Anya R.", duration: "25 min", taken: 4, total: 12 },
  { day: "Tomorrow", time: "07:00", name: "Morning 90", host: "Marcus T.", duration: "90 min", taken: 6, total: 16 },
  { day: "Tomorrow", time: "14:00", name: "Afternoon 50", host: "Priya N.", duration: "50 min", taken: 3, total: 16 },
  { day: "Saturday", time: "09:00", name: "Saturday Deep Work", host: "Krish A.", duration: "3 hrs", taken: 11, total: 20 },
  { day: "Saturday", time: "14:00", name: "Afternoon 50", host: "Sam K.", duration: "50 min", taken: 2, total: 16 },
]

type Member = {
  name: string
  role: string
  quote: string
}

const members: Member[] = [
  {
    name: "Anya R.",
    role: "Editor, African Infrastructure Journal",
    quote: "I run two sessions a week and ship more in ninety minutes than I do across a half-day at my desk.",
  },
  {
    name: "Marcus T.",
    role: "Analyst, frontier markets fund",
    quote: "I write on the side. The room is the difference between a half-finished doc and a published piece.",
  },
  {
    name: "Priya N.",
    role: "Playing Field Fellow",
    quote: "I show up to do the reading I&rsquo;d otherwise put off all week. It works because everyone else is doing the same.",
  },
  {
    name: "Sam K.",
    role: "Founder, fintech operator",
    quote: "The hour is short, the silence is real, and the intent at the start makes you actually use the time.",
  },
]

const steps = [
  {
    num: "01",
    label: "Book a session",
    body: "Pick a slot from the schedule. We send a calendar invite so you actually show up.",
  },
  {
    num: "02",
    label: "Show up",
    body: "Drop into the video room a minute or two before the start. Cameras on, mics off.",
  },
  {
    num: "03",
    label: "Share your goal",
    body: "One sentence: what you&rsquo;re going to work on for the next twenty-five, fifty, or ninety minutes. The host writes it down.",
  },
  {
    num: "04",
    label: "Start doing",
    body: "When the timer begins, work in shared silence. Soft focus music if you want it. No talking until the timer ends.",
  },
  {
    num: "05",
    label: "Debrief",
    body: "At the end, take ninety seconds to say what you got done. Not everyone hits their goal — everyone makes progress.",
  },
]

export default function ReadingRoomLive() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <main className="flex-1">
        {/* Hero with schedule panel as the visual */}
        <section className="w-full pt-16 pb-20 md:pt-24 md:pb-28">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
              {/* Left: copy */}
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-black/10 rounded-full text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  The Reading Room · Live online co-working from Playing Field
                </div>

                <h1 className="font-serif font-light tracking-tight leading-[1.05] text-4xl md:text-6xl text-foreground">
                  Get the work done.
                  <br />
                  In good company.
                </h1>

                <p className="text-base md:text-lg text-muted-foreground font-light leading-relaxed max-w-xl">
                  Live, scheduled video sessions of focused co-working. Drop into a room,
                  state what you&rsquo;re going to work on, and work in shared silence with
                  others doing the same.
                </p>

                <p className="text-sm text-muted-foreground/80 italic">
                  Free for Playing Field readers. Twenty-five, fifty, or ninety-minute sessions.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <a href="#schedule">
                    <Button className="rounded-full bg-foreground text-background px-6 py-6 font-light hover:bg-foreground/90 w-full sm:w-auto">
                      Reserve a session
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                  <a href="#how-it-works">
                    <Button
                      variant="ghost"
                      className="rounded-full text-foreground px-6 py-6 font-light hover:bg-black/5 w-full sm:w-auto"
                    >
                      See how it works
                    </Button>
                  </a>
                </div>
              </div>

              {/* Right: schedule preview panel */}
              <div className="lg:col-span-6">
                <div className="rounded-lg border border-black/10 bg-white shadow-sm overflow-hidden">
                  <div className="px-5 py-4 border-b border-black/10 flex items-baseline justify-between bg-stone-50">
                    <p className="font-serif text-base font-light text-foreground">
                      Upcoming sessions
                    </p>
                    <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-60 animate-ping" />
                        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      </span>
                      Live schedule
                    </div>
                  </div>
                  <div className="divide-y divide-black/10">
                    {sessions.slice(0, 4).map((s, i) => (
                      <div key={i} className="px-5 py-4 flex items-center gap-4">
                        <div className="w-16 shrink-0">
                          <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                            {s.day}
                          </p>
                          <p className="font-mono text-sm font-light text-foreground tabular-nums mt-0.5">
                            {s.time}
                          </p>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-serif text-base font-light text-foreground truncate">
                            {s.name}
                          </p>
                          <p className="text-xs text-muted-foreground font-light truncate">
                            with {s.host} · {s.duration}
                          </p>
                        </div>
                        <button className="text-[10px] uppercase tracking-[0.2em] text-foreground/80 hover:text-foreground border border-black/15 hover:border-black/40 rounded-full px-3 py-1.5 transition-colors shrink-0">
                          Reserve
                        </button>
                      </div>
                    ))}
                  </div>
                  <a
                    href="#schedule"
                    className="block px-5 py-3 border-t border-black/10 text-center text-[10px] uppercase tracking-[0.22em] text-muted-foreground hover:text-foreground transition-colors bg-stone-50/50"
                  >
                    See full schedule &rarr;
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Upcoming Sessions — the full schedule */}
        <section id="schedule" className="w-full py-24 border-t bg-white scroll-mt-20">
          <div className="container px-4 md:px-6">
            <div className="max-w-5xl mx-auto">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
                <div className="space-y-3">
                  <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                    Upcoming sessions
                  </p>
                  <h2 className="font-serif text-3xl md:text-5xl font-light leading-tight">
                    Pull up a chair.
                  </h2>
                </div>
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-muted-foreground">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-60 animate-ping" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  </span>
                  Updated in real time
                </div>
              </div>

              <div className="rounded-lg border border-black/10 overflow-hidden bg-white">
                {sessions.map((s, i) => {
                  const seatsLeft = s.total - s.taken
                  const isFull = seatsLeft === 0
                  return (
                    <div
                      key={i}
                      className={`px-6 py-5 flex items-center gap-6 ${
                        i !== 0 ? "border-t border-black/10" : ""
                      }`}
                    >
                      <div className="w-24 shrink-0">
                        <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                          {s.day}
                        </p>
                        <p className="font-mono text-xl font-light text-foreground tabular-nums mt-1">
                          {s.time}
                        </p>
                      </div>

                      <div className="flex-1 min-w-0">
                        <p className="font-serif text-lg md:text-xl font-light text-foreground">
                          {s.name}
                        </p>
                        <p className="text-sm text-muted-foreground font-light mt-0.5">
                          Hosted by {s.host} · {s.duration}
                        </p>
                      </div>

                      <div className="hidden sm:block text-right">
                        <div className="flex items-center gap-1.5 justify-end">
                          <Users className="h-3.5 w-3.5 text-muted-foreground" />
                          <p className="text-sm text-foreground font-light tabular-nums">
                            {s.taken}/{s.total}
                          </p>
                        </div>
                        <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground mt-1">
                          {isFull ? "full" : `${seatsLeft} open`}
                        </p>
                      </div>

                      <button
                        disabled={isFull}
                        className={`text-[11px] uppercase tracking-[0.2em] rounded-full px-4 py-2 transition-colors shrink-0 ${
                          isFull
                            ? "text-muted-foreground border border-black/10 cursor-not-allowed"
                            : "text-foreground bg-stone-100 hover:bg-stone-200 border border-black/10"
                        }`}
                      >
                        {isFull ? "Waitlist" : "Reserve"}
                      </button>
                    </div>
                  )
                })}
              </div>

              <p className="text-xs text-muted-foreground font-light italic text-center mt-6">
                Sessions run daily. New times added every Sunday.
              </p>
            </div>
          </div>
        </section>

        {/* Members */}
        <section className="w-full py-24 border-t">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center mb-16 space-y-4">
              <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                Our members
              </p>
              <h2 className="font-serif text-3xl md:text-5xl font-light leading-tight">
                The room is full of people
                <br />
                doing serious work.
              </h2>
              <p className="text-base text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed pt-2">
                Fellows, analysts, writers, founders — the room draws people who treat focused
                time as something worth scheduling.
              </p>
            </div>

            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
              {members.map((m) => (
                <div
                  key={m.name}
                  className="bg-white rounded-md border border-black/10 p-6 space-y-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-stone-200 flex items-center justify-center font-mono text-xs text-foreground/70">
                      {m.name
                        .split(" ")
                        .map((w) => w[0])
                        .join("")}
                    </div>
                    <div>
                      <p className="font-serif text-base font-light text-foreground">{m.name}</p>
                      <p className="text-xs text-muted-foreground font-light">{m.role}</p>
                    </div>
                  </div>
                  <p
                    className="text-sm text-foreground/80 font-light leading-relaxed italic"
                    dangerouslySetInnerHTML={{ __html: `&ldquo;${m.quote}&rdquo;` }}
                  />
                </div>
              ))}
            </div>

            {/* Tiny social-proof row */}
            <div className="max-w-3xl mx-auto mt-16 pt-10 border-t border-black/10">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16 text-center">
                <div>
                  <p className="font-serif text-3xl font-light text-foreground tabular-nums">240+</p>
                  <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground mt-1">
                    Sessions hosted
                  </p>
                </div>
                <div>
                  <p className="font-serif text-3xl font-light text-foreground tabular-nums">14</p>
                  <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground mt-1">
                    Sessions a week
                  </p>
                </div>
                <div>
                  <p className="font-serif text-3xl font-light text-foreground tabular-nums">94%</p>
                  <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground mt-1">
                    Show-up rate
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section id="how-it-works" className="w-full py-24 border-t bg-white scroll-mt-20">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center mb-16 space-y-4">
              <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                How a session runs
              </p>
              <h2 className="font-serif text-3xl md:text-5xl font-light leading-tight">
                Five steps.
                <br />
                One focused block.
              </h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-10">
              {steps.map((step) => (
                <div key={step.num} className="flex gap-6">
                  <p className="font-mono text-xs text-muted-foreground w-8 shrink-0 pt-2 tabular-nums">
                    {step.num}
                  </p>
                  <div className="space-y-2 flex-1">
                    <h3 className="font-serif text-2xl font-light text-foreground">{step.label}</h3>
                    <p
                      className="text-base text-muted-foreground font-light leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: step.body }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="w-full py-24 border-t">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h2 className="font-serif text-3xl md:text-5xl font-light leading-tight">
                Reserve your first session.
              </h2>
              <p className="text-base text-muted-foreground font-light max-w-xl mx-auto leading-relaxed">
                Pick a time from the schedule. We&rsquo;ll send a calendar invite and a link
                to join. Free for Playing Field readers — bring the work that&rsquo;s been
                waiting.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center items-center pt-2">
                <a href="#schedule">
                  <Button className="rounded-full bg-foreground text-background px-7 py-6 font-light hover:bg-foreground/90 w-full sm:w-auto">
                    See the schedule
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
                <Link
                  href="/reading-room"
                  className="text-sm text-muted-foreground font-light hover:text-foreground transition-colors"
                >
                  Read about the room &rarr;
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full py-12 border-t">
        <div className="container px-4 md:px-6 text-center">
          <p className="text-sm text-muted-foreground font-light">
            © {new Date().getFullYear()} Playing Field · The Reading Room
          </p>
        </div>
      </footer>
    </div>
  )
}
