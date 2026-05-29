"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { ArrowRight } from "lucide-react"

const seats = [
  { name: "Anya R.", intent: "Editing a longform piece" },
  { name: "Marcus T.", intent: "Drafting interview questions" },
  { name: "Priya N.", intent: "Reading a sector primer" },
  { name: "Sam K.", intent: "Cleaning a transcript" },
  { name: "Jonas B.", intent: "Building a thesis from notes" },
]

function nextSessionAt(now: Date) {
  const next = new Date(now)
  next.setHours(now.getMinutes() < 5 ? now.getHours() : now.getHours() + 1, 0, 0, 0)
  if (next <= now) next.setHours(next.getHours() + 1, 0, 0, 0)
  return next
}

function formatHM(d: Date) {
  return d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: false })
}

function countdown(target: Date, now: Date) {
  const ms = Math.max(0, target.getTime() - now.getTime())
  const total = Math.floor(ms / 1000)
  const h = Math.floor(total / 3600)
  const m = Math.floor((total % 3600) / 60)
  const s = total % 60
  if (h > 0) return `${h}h ${String(m).padStart(2, "0")}m`
  return `${m}:${String(s).padStart(2, "0")}`
}

export default function TheReadingRoom() {
  const [now, setNow] = useState<Date | null>(null)

  useEffect(() => {
    setNow(new Date())
    const t = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(t)
  }, [])

  const next = now ? nextSessionAt(now) : null
  const startsIn = next && now ? countdown(next, now) : "—"
  const startsAt = next ? formatHM(next) : "—"

  return (
    <div className="min-h-screen bg-stone-900 text-stone-100 relative overflow-hidden">
      {/* Warm lamp glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 30%, rgba(251,191,36,0.10) 0%, rgba(251,191,36,0.03) 35%, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)",
          backgroundSize: "3px 3px",
        }}
      />

      {/* Threshold bar — sits under the global nav, signals you&apos;ve crossed into the room */}
      <div className="relative border-b border-stone-800/80 bg-stone-950/40 backdrop-blur-sm">
        <div className="container px-4 md:px-6 py-3 flex items-center justify-between">
          <p className="text-[10px] uppercase tracking-[0.28em] text-stone-400">
            The Reading Room · Live online co-working from Playing Field
          </p>
          <Link
            href="/reading-room"
            className="text-[10px] uppercase tracking-[0.22em] text-stone-400 hover:text-stone-100 transition-colors"
          >
            About the room &rarr;
          </Link>
        </div>
      </div>

      <main className="relative">
        <div className="container px-4 md:px-6 min-h-[78vh] flex items-center justify-center py-16 md:py-24">
          <div className="w-full max-w-2xl space-y-12 text-center">
            {/* Status */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.28em] text-amber-300/80">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-amber-300 opacity-60 animate-ping" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-amber-300" />
                </span>
                The next session begins in {startsIn}
              </div>

              <h1 className="font-serif font-light tracking-tight leading-[1.05] text-4xl md:text-6xl text-stone-50">
                Live online
                <br />
                co-working sessions.
              </h1>

              <p className="text-sm md:text-base text-stone-300 font-light max-w-md mx-auto leading-relaxed pt-2">
                Drop into a scheduled video room, state what you&rsquo;re going to work on,
                and work in shared silence with five to fifteen others doing the same.
                Twenty-five, fifty, or ninety minutes.
              </p>

              <p className="text-xs text-stone-500 italic max-w-md mx-auto">
                Free for Playing Field readers. A members&rsquo; study, run online.
              </p>
            </div>

            {/* Session card */}
            <div className="rounded-lg border border-stone-700/80 bg-stone-900/80 backdrop-blur-sm overflow-hidden shadow-[0_0_60px_-20px_rgba(251,191,36,0.15)]">
              <div className="px-6 py-5 border-b border-stone-800 flex items-baseline justify-between">
                <div className="text-left">
                  <p className="font-serif text-2xl font-light text-stone-50">Morning 90</p>
                  <p className="text-[10px] uppercase tracking-[0.22em] text-stone-500 mt-1">
                    Hosted by Krish · 90 minutes
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-mono text-2xl font-light text-amber-200/90 tabular-nums">
                    {startsAt}
                  </p>
                  <p className="text-[10px] uppercase tracking-[0.22em] text-stone-500 mt-1">
                    starts in {startsIn}
                  </p>
                </div>
              </div>

              <div className="px-6 py-5 space-y-4 text-left">
                <p className="text-[10px] uppercase tracking-[0.22em] text-stone-500">
                  Five seats taken · twelve open
                </p>
                <ul className="space-y-2">
                  {seats.map((s) => (
                    <li
                      key={s.name}
                      className="flex items-baseline justify-between gap-4 text-sm font-light"
                    >
                      <span className="text-stone-200">{s.name}</span>
                      <span className="text-stone-500 italic truncate">
                        &ldquo;{s.intent}&rdquo;
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="px-6 py-5 border-t border-stone-800 flex items-center justify-between gap-4">
                <p className="text-[10px] uppercase tracking-[0.22em] text-stone-500">
                  Free for Playing Field readers
                </p>
                <button className="inline-flex items-center gap-2 rounded-full bg-amber-200 text-stone-900 hover:bg-amber-100 transition-colors px-5 py-2.5 text-sm font-medium">
                  Pull up a chair
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>

            {/* Today&apos;s other sessions */}
            <div className="space-y-3">
              <p className="text-[10px] uppercase tracking-[0.28em] text-stone-500">
                Today, after this one
              </p>
              <div className="grid grid-cols-3 gap-3 text-left">
                {[
                  { time: "14:00", name: "Afternoon 50" },
                  { time: "21:00", name: "Evening 25" },
                  { time: "Sat 09:00", name: "Saturday Deep Work" },
                ].map((slot) => (
                  <div
                    key={slot.name}
                    className="rounded-md border border-stone-800 bg-stone-900/50 px-4 py-3"
                  >
                    <p className="font-mono text-xs text-amber-200/70 tabular-nums">{slot.time}</p>
                    <p className="font-serif text-sm font-light text-stone-200 mt-1">{slot.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="relative border-t border-stone-800/80 bg-stone-950/40 backdrop-blur-sm">
        <div className="container px-4 md:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[10px] uppercase tracking-[0.22em] text-stone-500">
            © {new Date().getFullYear()} Playing Field
          </p>
          <div className="flex items-center gap-5">
            <Link
              href="/reading-room"
              className="text-[10px] uppercase tracking-[0.22em] text-stone-500 hover:text-stone-200 transition-colors"
            >
              Read about the room
            </Link>
            <Link
              href="/"
              className="text-[10px] uppercase tracking-[0.22em] text-stone-500 hover:text-stone-200 transition-colors"
            >
              Playing Field
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
