# ✨ Install the Plausible MCP server (query analytics from Claude Code)

**Status:** Planned · **Created:** 2026-06-05 · **Type:** tooling/integration · **Effort:** XS (~5–10 min)

## Goal

Give Claude Code read-only access to the **playingfield.group** Plausible stats so I can answer
questions like *"which fellowship page got the most visitors last week?"* or *"did the homepage
rework move the Subscribe conversion rate?"* directly — no dashboard clicking.

## What we're installing

[`getsentry/plausible-mcp`](https://github.com/getsentry/plausible-mcp) — a Sentry-maintained MCP
server wrapping the **Plausible Stats API v2** (`POST /api/v2/query`). MIT, TypeScript/Bun.

**Tools it exposes (all `readOnlyHint: true`):**

| Tool | What it does |
|------|--------------|
| `get_timeseries` | Traffic + conversion metrics over time (daily/weekly/monthly) |
| `get_breakdown` | Break down by page, source, country, device, browser, OS, UTM, … |
| `get_conversions` | Goal conversion rates (e.g. our `Subscribe` goal), optionally per-page |
| `compare_periods` | Two date ranges side-by-side with absolute + % deltas |

Works with Plausible Cloud (our case) and self-hosted. Read-only — it cannot change site config or write data.

## Prerequisite (1 min, in the Plausible dashboard)

- [ ] **Generate a Stats API key:** Plausible dashboard → **Settings → API Keys → + New API Key**.
      Scope it to **playingfield.group**. This key is **read-only stats access** — it cannot modify
      the site. Copy it (looks like a long token). Reference: https://plausible.io/docs/stats-api

## Two install paths — pick one

### Path A — Remote hosted (simplest, zero local deps) ⭐ default

Sentry runs a hosted multi-tenant instance; you pass your own key per-request as a Bearer header
(not stored on their server). One command:

```bash
claude mcp add --transport http plausible https://plausible-mcp.sentry.dev/mcp \
  --header "Authorization: Bearer YOUR_PLAUSIBLE_API_KEY" \
  -s user
```

- **Pro:** nothing to clone/build; always the latest version Sentry ships.
- **Con:** your API key travels to Sentry's hosted endpoint on every call (it's read-only stats,
  and Sentry is reputable — but it *is* a third party in the path).

### Path B — Local STDIO (key never leaves your machine) 🔒 most private

Bun is already installed (`1.3.11`). Clone + run locally; the server talks straight to plausible.io.

```bash
git clone https://github.com/getsentry/plausible-mcp.git ~/.local/share/plausible-mcp
cd ~/.local/share/plausible-mcp && bun install

claude mcp add plausible \
  -e PLAUSIBLE_API_KEY=YOUR_PLAUSIBLE_API_KEY \
  -e PLAUSIBLE_DEFAULT_SITE_ID=playingfield.group \
  -s user \
  -- bun run ~/.local/share/plausible-mcp/src/index.ts
```

- **Pro:** API key only ever goes to plausible.io; you can read the source before running it; the
  clone tracks the latest repo (0.2.0, ahead of the npm 0.1.1 build).
- **Con:** a local clone to keep updated (`git pull && bun install` occasionally); depends on Bun.

> `PLAUSIBLE_DEFAULT_SITE_ID=playingfield.group` means I won't have to pass the site on every query.
> (Path A supports the same via a `-H "X-Plausible-Site-Id: ..."`-style default only if added as an
> env on a local run — on hosted, just mention the domain in the question.)

## Scope note

`-s user` registers it across all your projects (matches how your other MCPs are set up). Use
`-s local` instead to limit it to this repo only. Either is fine.

## Security considerations

- **Key storage:** Claude Code writes MCP env/headers into `~/.claude.json` in **plaintext**. Anyone
  with read access to your home dir can see the key. The key is read-only stats, so blast radius is
  low, but treat it like a secret and rotate it from the dashboard if exposed.
- **Third-party trust:** Path A routes the key through `plausible-mcp.sentry.dev`. Path B keeps it
  local. If you want zero third-party exposure, choose **B**.
- **Revocation:** you can revoke/rotate the key anytime in Plausible → Settings → API Keys.

## Acceptance criteria

- [ ] `claude mcp list` shows `plausible … ✓ Connected`.
- [ ] In a new Claude Code session, a `mcp__plausible__*` tool (e.g. `get_timeseries`) is callable.
- [ ] Asking "how many visitors did playingfield.group get in the last 7 days?" returns real numbers.
- [ ] Once the site has traffic + the `Subscribe` goal, `get_conversions` returns the Subscribe rate.

## Verify

```bash
claude mcp list | grep plausible          # expect: ✓ Connected
# then, in chat: "Top 5 pages on playingfield.group by visitors, last 30 days"
```

## Notes / gotchas

- The site must be **collecting data** for queries to return anything — until the analytics deploy
  (see `plans/install-plausible-analytics.md`) is live and getting traffic, results will be empty.
- npm has `plausible-mcp@0.1.1` but the GitHub repo is `0.2.0`; prefer hosted (Path A) or the clone
  (Path B) over `npx plausible-mcp` to avoid the stale npm build.
- This is **separate** from the on-site tracking integration — that plan installs the script;
  this plan installs the *query* tooling for Claude.

## References

- Repo: https://github.com/getsentry/plausible-mcp
- Plausible Stats API v2: https://plausible.io/docs/stats-api
- Claude Code MCP docs: https://code.claude.com/docs/en/mcp

---
🤖 Plan generated with [Claude Code](https://claude.com/claude-code)
