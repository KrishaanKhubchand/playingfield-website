# Fellowship Application Form + Applicant Pipeline

**Status:** Plan
**Date:** 2026-06-05
**Decision:** Native branded form → Convex → custom `/applicants` admin dashboard. Multi-fellowship from day one. Mixed/open audience.

---

## The goal

Stand up a real application pipeline for the Private Credit Fellowship that also serves every other fellowship. The form is the easy 10%. The point is everything after submit: reviewing volume, triaging, tracking status, leaving notes, not losing the good ones, and moving the best into conversations.

Target shape of success: 50–100 applications/week across all fellowships becomes a genuine talent-sourcing engine. That only works if review scales — which means structured data and (eventually) agent pre-scoring, not a human reading every word of every application.

## Why this architecture

- **Convex** for database + serverless functions + file storage. One dependency covers the DB, the API, and CV uploads (Convex has built-in file storage — no separate Vercel Blob needed). Real-time queries mean the admin dashboard updates live.
- **Native branded form** on-site, styled to the fellowship page. Keeps the holdco-credibility positioning. `react-hook-form` + `zod` are already installed.
- **Custom `/applicants` dashboard** for review. Full control over the triage UX, status flow, and how agent scores surface.
- **One schema, many fellowships.** A `fellowshipSlug` field means a single form component, single backend, single dashboard serve Private Credit and everything else. Filter by slug in the dashboard.

The existing interview-outreach system keeps **Attio as its source of truth**. This pipeline does *not* fork that — applications live in Convex (high-volume public intake), and the **best applicants get promoted into Attio** as engagements via a dashboard action. Convex is the funnel; Attio is where serious relationships live.

## Form fields — mapped to the five selection criteria

The fellowship page already defines the bar: curiosity, financial background, communication/gravitas, reliability, availability. The form mirrors it so every answer maps to a criterion an agent (or a human) can score.

**Identity**
- Full name
- Email
- LinkedIn URL (huge for triage)
- Location / timezone
- Current role + company / institution

**Signal (short free-text, char-limited so they stay skimmable)**
- *Why private credit, why now?* → curiosity
- *Tell us about something you've built, shipped, or figured out that you're proud of.* → reliability / agency
- *What's your financial background, and where are the gaps you'd close fast?* → financial background (honest, framed for mixed/open audience)
- *What do you want out of the fellowship?* → fit

**Spike question (hard to fake — the one the scoring agent reads hardest)**
- *What's a non-consensus view you hold about private markets?*
  For mixed/open audience this is the great equalizer — it surfaces real thinking regardless of pedigree.

**Logistics**
- Availability: confirm ~10–20 hrs/week for six months → availability
- How did you hear about us?
- CV upload (PDF) — stored in Convex file storage
- Optional: a link to work/writing/portfolio → communication/gravitas

Keep it to one screen, ~10 fields. The form triages; it does not decide. Promising applicants get followed up.

## Convex data model

```
// convex/schema.ts
applications: defineTable({
  fellowshipSlug: v.string(),        // "private-credit-fellowship", etc.
  // identity
  name: v.string(),
  email: v.string(),
  linkedin: v.optional(v.string()),
  location: v.string(),
  currentRole: v.string(),
  // signal
  whyNow: v.string(),
  proudOf: v.string(),
  financialBackground: v.string(),
  wantOutOf: v.string(),
  nonConsensusView: v.string(),
  // logistics
  availabilityConfirmed: v.boolean(),
  heardFrom: v.optional(v.string()),
  cvStorageId: v.optional(v.id("_storage")),
  workLink: v.optional(v.string()),
  // pipeline
  status: v.string(),                // new | reviewing | shortlist | interview | accepted | rejected
  score: v.optional(v.number()),     // agent-populated, 0–100
  scoreRationale: v.optional(v.string()),
  notes: v.optional(v.string()),     // reviewer notes
  attioRecordId: v.optional(v.string()), // set when promoted to Attio
  createdAt: v.number(),
})
  .index("by_fellowship", ["fellowshipSlug"])
  .index("by_status", ["fellowshipSlug", "status"])
```

`score` / `scoreRationale` exist in v1 even though nothing fills them yet — so the agent-scoring layer drops in later with zero migration.

## Backend functions

- `submitApplication` (mutation) — validates with zod server-side, writes the record, status `new`. Honeypot field + basic rate-limit (per-IP, short window) to kill spam.
- `generateUploadUrl` (mutation) — Convex file upload URL for the CV.
- `listApplications` (query) — by fellowship + status, for the dashboard. Real-time.
- `getApplication` (query) — detail view, resolves CV download URL.
- `updateStatus` / `updateNotes` (mutations) — reviewer actions.
- `promoteToAttio` (action) — creates the Person + engagement in Attio, stamps `attioRecordId` back. Bridges into the existing outreach system.
- `scoreApplication` (action, later) — runs the rubric prompt against the five criteria + spike answer, writes `score` + `scoreRationale`.

## The `/applicants` dashboard

- **List view:** table of applicants, filterable by fellowship and status, sortable by score and date. Columns: name, fellowship, status, score, submitted. Quick-glance triage.
- **Detail view:** full application, CV download, LinkedIn link, status dropdown, notes field, "Promote to Attio" button.
- **Status flow:** new → reviewing → shortlist → interview → accepted/rejected.
- **Auth:** v1 is a single shared-password gate (env var + a thin login + middleware on `/applicants`). It's just the founding team reviewing. Upgrade to Convex Auth or Clerk if more reviewers or per-user assignment is needed later. *Do not over-build this in v1.*

## Build phases

**Phase 1 — Backend foundation**
- `npx convex init`, wire `ConvexProvider` into `app/layout.tsx`
- Schema + `submitApplication` + file upload functions
- Honeypot + rate limit

**Phase 2 — Public form**
- `/private-credit-fellowship/apply` route (reusable component param'd by `fellowshipSlug`)
- react-hook-form + zod, branded to match the fellowship page
- CV upload, success state, error handling
- Link "Apply" CTAs on the fellowship pages to it

**Phase 3 — Admin dashboard**
- Password gate + middleware
- List view with filters
- Detail view, status + notes mutations

**Phase 4 — Pipeline leverage (after volume is real)**
- `promoteToAttio` action → connects to the outreach system
- `scoreApplication` agent + score column/sort in the dashboard

## Open decisions

1. **Confirmation email to applicants?** Recommend yes for credibility (Resend, ~1 hr). Not a v1 blocker.
2. **Auth depth** — confirm single-password is fine for now (recommended) vs. wanting per-reviewer accounts day one.
3. **Apply route placement** — `/private-credit-fellowship/apply` vs. a top-level `/apply?f=private-credit-fellowship`. Per-fellowship path reads cleaner and is the default here.
4. **Agent scoring rubric** — defer the exact prompt to Phase 4, but the schema is ready for it now.
