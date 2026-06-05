# ✨ feat: Install Plausible Analytics on the Playing Field website

**Status:** ✅ Implemented (code) · **Created:** 2026-06-05 · **Type:** enhancement · **Effort:** S

> **Decisions made:** domain `playingfield.group` · proxy **on** · `@vercel/analytics` left as-is.
> **Done:** `next-plausible@4.0.0` installed; `next.config.mjs` proxy wrapper; `PlausibleProvider`
> in `app/layout.tsx` (production-only via `VERCEL_ENV`); `Subscribe` event in `subscribe-form.tsx`.
> Production build passes. Real script URL (`pa-hH8Of0rOY5XiakBXLGxdJ.js`) wired into
> `next.config.mjs`. **Remaining (manual):** add the `Subscribe` custom-event goal in the
> Plausible dashboard, then deploy and verify in Realtime.
>
> ⚠️ **v4 API note:** next-plausible v4 has **no `domain` / `trackOutboundLinks` props** (those were
> v3). The domain is encoded in the site-specific `src` URL; outbound links etc. are dashboard
> toggles. The code below reflects the real v4 API; earlier snippets in this doc were corrected.

## Overview

Add privacy-friendly, cookieless web analytics to the Playing Field marketing site using
[Plausible](https://plausible.io) via the official **`next-plausible`** package (v4). Track
pageviews across every page (homepage, fellowships, journals, summits, about/careers) and one
custom conversion goal — newsletter **Subscribe** — fired from the shared subscribe form.

Why Plausible (not GA4) for a holdco/marketing site:
- **No cookie banner.** Cookieless and GDPR/PECR-compliant — no consent friction, clean UX.
- **Lightweight.** < 1 KB script vs GA's ~45 KB; no impact on the carefully-tuned hero/landing pages.
- **Simple dashboard.** Pageviews, sources, goals — the metrics that actually matter here.

## Problem Statement / Motivation

The site ships several conversion-oriented pages (fellowship applications, summit signups,
newsletter subscribe) but currently has **no working analytics**. `@vercel/analytics@1.3.1` is
listed in `package.json` but is **never rendered** anywhere in `app/` — so today there is zero
visibility into traffic, top pages, referral sources, or whether the subscribe CTA converts.

Without analytics we can't answer: Which fellowship page performs best? Where does traffic come
from? Is the homepage hero rework (commit `c6061aa`) actually driving subscribes?

## Proposed Solution

1. Install `next-plausible` and wire `PlausibleProvider` into the root layout `<head>`.
2. Serve the script first-party via `withPlausibleProxy()` in `next.config.mjs` to dodge
   adblockers and keep any future CSP at `'self'`.
3. Add a `Subscribe` custom event to the shared `components/subscribe-form.tsx` (one change
   covers every page that uses the form).
4. Gate analytics to **production only** so dev and Vercel preview deploys don't pollute stats.
5. Create the site + `Subscribe` goal in the Plausible dashboard.

This is **2 code files + 1 component** changed. No new env vars strictly required (the script
URL is public), though the domain is parameterised below.

## Prerequisites (do these first, outside the codebase)

- [ ] Create a Plausible Cloud account (or confirm a self-hosted instance).
- [ ] Add the site in Plausible using the **production domain** — fill in `<PROD_DOMAIN>`
      (e.g. `playingfield.group`). Confirm the exact apex/subdomain currently served on Vercel.
- [ ] Copy the **site-specific script URL** from the dashboard — looks like
      `https://plausible.io/js/pa-XXXXX.js`. (v4 encodes the domain in this URL; there is no
      separate `domain` prop.)
- [ ] Decide **Cloud vs self-hosted** — only changes the `src` host (see Open Questions).

## Technical Considerations

- **next-plausible v4** supports Next `^15`/`^16` + React `19` — fully compatible with the
  current `next@15.2.8` / `react@19`. No version pinning needed. ⚠️ v4 is a breaking rewrite of
  v3: ignore any tutorial using `domain` / `trackOutboundLinks` / `customDomain` / `selfHosted`
  props — those are gone, replaced by a single `src` URL + dashboard toggles + an `init` object.
- **ESM config.** `next.config.mjs` uses `export default`, so use the `import { withPlausibleProxy }`
  form (not `require`).
- **Single shared form.** `components/subscribe-form.tsx:8` is a `"use client"` component reused
  by `app/page.tsx`, `app/home-v4/page.tsx`, `app/about/page.tsx`, `app/writing-club/page.tsx`,
  and others — instrumenting it once covers all of them.
- **Localhost is safe.** Plausible's script ignores `localhost`/`127.0.0.1` by default unless
  `init.captureOnLocalhost: true`. Combined with the `enabled` gate below, dev traffic is excluded.
- **Vercel preview deploys** run with `NODE_ENV=production`, so previews would otherwise send
  events to the live Plausible site. Gate on `VERCEL_ENV === "production"` to exclude previews
  (see MVP). This is the one non-obvious edge case.
- **Dead dependency.** `@vercel/analytics` is installed but unrendered. Optional cleanup: either
  remove it, or actually render `<Analytics />` and run both. Recommendation: remove to avoid
  confusion (see Open Questions).

## MVP

### 1. `next.config.mjs` — proxy the script first-party

```js
// next.config.mjs
import { withPlausibleProxy } from "next-plausible"

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  images: { unoptimized: true },
}

// Serves the script from /js/script.js and events from /api/event (first-party).
// `src` is REQUIRED in v4 — the site-specific URL from the Plausible dashboard.
export default withPlausibleProxy({
  src: "https://plausible.io/js/pa-XXXXX.js", // ← replace pa-XXXXX with the real value
})(nextConfig)
```

### 2. `app/layout.tsx` — add the provider in `<head>`

```tsx
// app/layout.tsx
import PlausibleProvider from "next-plausible"
// ...existing imports...

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        {/* No `src` — withPlausibleProxy injects the proxied path automatically.
            enabled gates to the real production deploy only (excludes dev + preview). */}
        <PlausibleProvider enabled={process.env.VERCEL_ENV === "production"} />
        <style>{`/* ...existing Geist font style... */`}</style>
      </head>
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
```

> Notes: with the proxy active, passing `src` here **throws** ("src is already set by
> withPlausibleProxy") — omit it. The root layout is a Server Component, so `process.env.VERCEL_ENV`
> is read server-side and the gate is correct on Vercel (preview builds → `enabled=false`). Relying
> on next-plausible's *default* gating is **not** enough here — it checks `NEXT_PUBLIC_VERCEL_ENV`,
> which Vercel doesn't auto-expose, so previews could leak. Outbound-link / file-download tracking
> are enabled in **Site Settings** in the dashboard (no props in v4).

### 3. `components/subscribe-form.tsx` — fire the Subscribe goal

```tsx
// components/subscribe-form.tsx
"use client"
import { useState } from "react"
import { Check } from "lucide-react"
import { usePlausible } from "next-plausible"          // + add
import { Button } from "@/components/ui/button"

export function SubscribeForm() {
  const plausible = usePlausible()                      // + add
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  // ...
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        if (!email.trim()) return
        plausible("Subscribe")                          // + add (optionally: { props: { source: "..." } })
        setSubmitted(true)
      }}
      // ...
    >
      {/* unchanged */}
    </form>
  )
}
```

### 4. Plausible dashboard

- [ ] **Site Settings → Goals → + Add goal → Custom event** → name it exactly `Subscribe`.
- [ ] (Optional) Toggle **Outbound link clicks** and **Tagged events** on.

## Acceptance Criteria

- [ ] `next-plausible` added to `package.json` and lockfile (`pnpm-lock.yaml` is the active lockfile).
- [ ] Production build injects the (proxied) Plausible script; `/js/script.js` and `/api/event`
      resolve first-party on the deployed site.
- [ ] Pageviews appear in the Plausible dashboard for the production domain.
- [ ] Navigating between pages (client-side routing) registers as separate pageviews.
- [ ] Submitting the subscribe form increments the `Subscribe` goal in the dashboard.
- [ ] **No** events recorded from `localhost` (`npm run dev`) or from a Vercel **preview** deploy.
- [ ] No cookie banner required (verify: no Plausible cookies set, no console/CSP errors).
- [ ] Lighthouse/perf unchanged on the homepage (script is < 1 KB, `defer`).

## Test / Verification Plan

1. `pnpm dev` → load homepage → confirm in DevTools the script loads but **no** `/api/event`
   POST fires (localhost excluded). 
2. `pnpm build && pnpm start` locally with `VERCEL_ENV=production pnpm start` → confirm an
   `/api/event` POST fires on load and on the subscribe submit.
3. Deploy to production → watch Plausible **Realtime** → load a few pages, submit the form →
   confirm pageviews + the `Subscribe` conversion appear.
4. Open a Vercel **preview** URL → confirm it does **not** appear in Realtime.

## Dependencies & Risks

- **Risk: wrong domain.** If `domain` ≠ the registered Plausible site domain, events are silently
  dropped. Mitigation: verify the exact production host on Vercel before configuring. (Low)
- **Risk: proxy path collision.** `withPlausibleProxy` claims `/js/script.js` and `/api/event`.
  The repo has no `app/api` routes today, so no collision. (Very low)
- **Risk: forgetting the goal.** Events fire but won't show as conversions until the `Subscribe`
  goal exists in the dashboard. Captured as an explicit prerequisite. (Low)
- **Dependency:** a Plausible account + the site-specific script URL (manual, one-time).

## Open Questions

1. ~~Cloud or self-hosted?~~ → **Plausible Cloud** (assumed). Self-hosted only changes the proxy `src` host.
2. ~~Production domain?~~ → **playingfield.group**.
3. ~~Proxy or direct?~~ → **Proxy on** (`withPlausibleProxy`).
4. ~~`@vercel/analytics`?~~ → **Left as-is** for now (still an unrendered dep — revisit later).
5. **The one blocker left:** paste the real site-specific `src` URL (`pa-XXXXX.js`) into
   `next.config.mjs` after creating the site in the Plausible dashboard.
6. **Extra goals later?** Candidates: fellowship "Apply" CTAs, summit signups, outbound partner
   links — out of scope for v1, trivial to add via the `plausible("EventName")` pattern.

## References

### Internal
- Root layout (injection point): `app/layout.tsx:20-30`
- Shared subscribe form (Subscribe goal): `components/subscribe-form.tsx:8-46`
- Next config (proxy wrapper): `next.config.mjs:1-14`
- Unused analytics dep: `package.json` → `@vercel/analytics@1.3.1`

### External
- next-plausible README: https://github.com/4lejandrito/next-plausible
- v3 → v4 migration (breaking prop changes): https://github.com/4lejandrito/next-plausible/blob/master/MIGRATION.md
- Plausible custom event goals: https://plausible.io/docs/custom-event-goals
- Plausible proxy (Next.js): https://plausible.io/docs/proxy/introduction
- Script extensions / `init` options (incl. `captureOnLocalhost`): https://plausible.io/docs/script-extensions
- Data/privacy policy (cookieless, no banner): https://plausible.io/data-policy

---
🤖 Plan generated with [Claude Code](https://claude.com/claude-code)
