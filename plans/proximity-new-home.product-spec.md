---
spec_format_version: "0.1"
title: "Proximity Group Experimental Homepage"
artifact_type: "prd"
spec_revision: 2
author: "Krishaan Khubchand and Codex"
created_at: "2026-09-17T00:00:00Z"
updated_at: "2026-09-17T00:00:00Z"
linked_github_repo: "KrishaanKhubchand/playingfield-website"
applies_to:
  - component: "playingfield.group/new-home"
---

# Proximity Group Experimental Homepage

## Problem

Playing Field is preparing to become Proximity Group, but the current homepage does not yet express the new company's ambition or business model. It presents a collection of publications without clearly explaining why the group exists, how publications and events reinforce one another, or why being at the centre of an industry creates value for readers, participants, sponsors, and the company.

The new positioning needs to make an unfamiliar visitor understand, within one page, that Proximity launches and grows specialist media and events businesses that become essential gathering points for their industries. The team also needs a safe way to evaluate the new identity, copy, and visual direction without replacing the current homepage or prematurely committing to the wider company rename.

## Hypothesis

If Proximity is introduced through a concise, editorial homepage that pairs a strong statement of purpose with a visual gallery of the publications it builds, then visitors will understand both the company's ambition and the breadth of its portfolio more quickly than they do from the current homepage.

A private-by-navigation but publicly accessible experiment at `/new-home`, closely adapting Locke's typography, grid, section rhythm, dark palette, and horizontal visual narrative, will let the team judge that positioning in context before promoting it to the root domain.

## Product Summary

Create a new, standalone homepage concept at `https://playingfield.group/new-home` under the working brand **Proximity Group**. The page will be a faithful visual adaptation of [Locke's homepage](https://locke.inc/) using the same Geist and Geist Mono typography, near-black and warm-white palette, numbered editorial grid, fixed header, oversized opening statement, horizontally scrolling mission gallery, restrained calls to action, and compact footer.

All Proximity copy, imagery, navigation, and brand assets will be original. The existing homepage at `/` and all current routes will remain unchanged while the concept is reviewed.

## Scope

```productspec-scope
in:
  - Add a responsive page at `/new-home` that introduces the working Proximity Group identity.
  - Closely reproduce the reference site's layout system, typography, spacing, colors, numbered section structure, fixed navigation, horizontal image gallery behavior, button treatment, and footer rhythm.
  - Use Geist for display and body copy and Geist Mono for section numbers and small metadata.
  - Present three numbered sections: the company proposition, a provisional mission and publication gallery, and careers.
  - Use original Proximity copy focused on building specialist publications and events at the centre of industries.
  - Use the gallery to present a set of explicitly approved Proximity publications, with one image, name, and concise description for each.
  - Keep the route visually isolated so the existing Playing Field global navigation and light theme do not appear on `/new-home`.
  - Supply page-specific metadata, accessible image alternatives, keyboard-accessible navigation, and responsive mobile behavior.
  - Preserve the existing production homepage and every existing route.
out:
  - Do not replace `/` with the experiment in this release.
  - Do not complete the legal, domain, social-account, analytics-property, or repository rename from Playing Field to Proximity Group.
  - Do not redesign or rewrite existing publication, fellowship, event, or journal pages.
  - Do not claim that proposed brands, events, profits, audience scale, or portfolio companies already exist unless the claim is verified and approved.
  - Do not copy Locke's logo, photographs, written copy, source code, or proprietary brand assets.
  - Do not add a CMS, application form, newsletter workflow, or new operational backend.
cut:
  - Cut the low-$1m-to-$2m profit claim from the public homepage; it is an internal investment thesis, not necessary to explain the customer-facing proposition.
  - Cut Hotel Capital Europe as the lead example until its name, ownership status, and public positioning are confirmed.
  - Cut a separate business-model section from this experiment.
  - Cut a large static portfolio grid; publications should appear in the horizontally scrolling mission gallery.
```

## User Experience

### Design language

- Background: near-black (`#050505`).
- Primary text: warm off-white (`#f3f0e8`).
- Body text: muted warm white (`#e2ded2`).
- Interactive accent: pale blue-green close to `#c7d9d3`.
- Typography: Geist Sans throughout; Geist Mono for numbering and metadata.
- Desktop frame: maximum width of approximately 1440px, 64px side padding, and a 78px numbering gutter.
- Header: fixed, approximately 80px high on desktop and 72px on mobile, with a subtle lower border and backdrop treatment.
- Opening statement: approximately 54px on desktop and 36px on mobile, normal weight, 1.05 line height, and a deliberately controlled three-line measure.
- Sections: numbered `01`, `02`, and `03`, separated by approximately 64px rather than decorative containers.
- Gallery: horizontally scrollable 16:9 images, each up to approximately 680px wide, with numbered captions below and a visible partial next item.
- Shapes: square or minimally rounded controls; no ornamental cards, gradients, illustrations, or floating decoration.
- Mobile: 20px side padding, a compact menu, section numbers above their content, and touch scrolling for the gallery.

### Page sequence and recommended copy

#### Navigation

- Wordmark: `Proximity`
- Links: `Home`, `Company`, `Businesses`, `Careers`, `Contact`
- Bordered action: `Our businesses`

Links without approved destinations may point to sections on `/new-home` during the experiment. They must not lead to empty or fabricated pages.

#### 01 — Proposition

**Recommended headline**

> Proximity launches and grows high-quality media and events businesses for the world's industries.

Recommended desktop line treatment:

> Proximity launches and grows  
> high-quality media and events  
> businesses for the world's industries.

This is preferred to “Proximity is an incubator that launches and grows new, high quality media and events businesses focused on the world's industries” because it is shorter, more direct, avoids the redundant “incubator that launches,” and makes the company the active subject.

**Recommended supporting copy**

> We build specialist publications and year-round event platforms that become essential to the industries they serve—bringing the people, information and opportunities that move a market closer together.

#### 02 — Mission

**Heading**

> Mission

**Provisional mission copy**

> The industries that shape the real economy still run on specialist knowledge and trusted relationships. Yet their best information rarely lives where the wider internet looks. It lives in trade publications, conferences, executive dinners and conversations between the people doing the work. Proximity exists to build the institutions at the centre of these industries—bringing operators, investors, vendors and emerging ideas closer together.

**Recommended closing sentence**

> Our ambition is to build a mosaic of publications and events, each distinct to its market and indispensable to the people moving it forward.

This copy is a layout placeholder for the experiment. It should be revisited as a separate positioning discussion and must not be treated as approved final mission language.

**Gallery narrative**

The gallery should focus on the different publications Proximity owns or is actively building. Each slide should contain publication-specific artwork or photography, the publication name, and one restrained sentence explaining the industry it serves.

The initial structure should contain four to six publications. Private Credit Journal may be included immediately; every other publication must be approved before implementation so the site does not present an experimental concept as a live portfolio business. Hotel Capital Europe should not be used as the default second example.

#### 03 — Careers

**Heading**

> Careers

**Recommended body copy**

> We are building a small, ambitious team of editors, operators and commercial leaders to create the defining media and events businesses in the world's industries. Join us.

**Primary action**

> Get in touch

The button should resolve to an approved careers or contact destination. If no dedicated careers page exists, an approved email or scheduling link may be used.

#### Footer

**Recommended descriptor**

> Proximity is an incubator for specialist media and events businesses at the centre of the world's industries.

The footer may repeat approved navigation and social links. It should use the working company name but avoid an unconfirmed legal entity name in the copyright line.

## Customer Truth

- In specialist industries such as fire safety, mining equipment, manufacturing, private credit, and hospitality investment, the most useful information often lives outside broad technology and social-media discourse.
- Trade publications, trade shows, conferences, dinners, and peer relationships remain core infrastructure for discovering information, meeting counterparties, and understanding a market.
- A strong specialist media brand can convene operators, vendors, investors, regulators, and emerging ideas because it earns sustained attention and trust within a defined industry.
- The user-provided business thesis is that a publication and a year-round events calendar are more valuable together than either format alone.

These statements guide the positioning. Any quantified commercial claims or claims about specific portfolio businesses require evidence before publication.

## Solution Alternatives

### Retain the user's original headline verbatim

“Proximity is an incubator that launches and grows new, high quality media and events businesses focused on the world's industries.” This preserves the user's framing but is longer, less active, and more difficult to set elegantly in the reference layout.

### Lead with the “centre of industry” idea

“Proximity builds the publications and events at the centre of the world's industries.” This is the sharpest expression of the name and mission, but it describes the desired outcome more strongly than the operating model. It is a credible alternate headline if the team wants a bolder, less literal opening.

### Use a publication-led gallery

This is the selected approach for the experiment. The proposition and provisional mission establish the group-level idea first; the horizontal gallery then makes it concrete through the different publications rather than through generic event formats or external industry examples.

## Acceptance Criteria

```productspec-acceptance-criteria
- id: AC-1
  criterion: Visiting `/new-home` on the production domain returns a successful page while `/` continues to render the existing Playing Field homepage without visual or content changes.
- id: AC-2
  criterion: The page uses the approved Proximity headline, supporting statement, provisional mission copy, careers copy, and footer descriptor with no unapproved portfolio or financial claims.
- id: AC-3
  criterion: At desktop widths of 1280px and 1440px, the page visibly matches the reference's fixed header, narrow numbering gutter, content measure, numbered section rhythm, restrained typography, dark palette, and horizontal gallery composition.
- id: AC-4
  criterion: At mobile widths of 375px and 430px, all copy remains readable without clipping or horizontal page overflow, the menu can be opened and used by touch and keyboard, and the gallery scrolls horizontally with part of the next item visible.
- id: AC-5
  criterion: The page uses Geist Sans and Geist Mono locally through the existing application dependencies, and font loading does not cause a materially different fallback layout after load.
- id: AC-6
  criterion: The existing global Playing Field navigation, light background, and route-level styling do not appear on `/new-home`.
- id: AC-7
  criterion: The mission gallery presents four to six approved Proximity publications using publication-specific, original or properly licensed images, concise captions, and useful alternative text for each meaningful image.
- id: AC-8
  criterion: Every visible navigation item and call to action resolves to an approved route, section, email address, or external destination and no control leads to an empty placeholder page.
- id: AC-9
  criterion: Keyboard users can reach and visibly focus every navigation item, menu control, gallery link, and call to action in a logical order.
- id: AC-10
  criterion: Text and interactive controls meet WCAG AA color-contrast requirements, with muted text either meeting the threshold or being limited to nonessential metadata.
- id: AC-11
  criterion: Page metadata identifies the working brand and describes Proximity as a specialist media and events incubator without changing metadata on existing routes.
- id: AC-12
  criterion: A production build completes successfully and automated checks report no new errors attributable to `/new-home`.
- id: AC-13
  criterion: Desktop and mobile screenshot review confirms there are no overlapping elements, unexpected rounded cards, gradients, decorative blobs, blank image regions, or layout shifts caused by the gallery.
- id: AC-14
  criterion: Plausible or the existing analytics integration can distinguish visits to `/new-home` and clicks on the Careers section's `Get in touch` button without creating a new analytics property.
```

## Success Metrics

```productspec-success-metrics
- id: SM-1
  metric: stakeholder_positioning_approval
  target: "Krishaan approves the proposition, publication gallery, and careers sections as the new homepage direction while explicitly deferring final mission approval"
  target_status: committed
  window: before the experiment is considered ready to replace `/`
- id: SM-2
  metric: moderated_message_comprehension
  target: ">= 4 of 5 representative readers can explain that Proximity launches and grows specialist media and events businesses after viewing the page for 30 seconds"
  target_status: provisional
  target_owner: "Krishaan Khubchand"
  window: during the first review round before root-page promotion
- id: SM-3
  metric: new_home_primary_cta_click_rate
  target: "tbd"
  target_status: provisional
  target_owner: "Krishaan Khubchand"
  window: during the first 30 days after the experiment receives meaningful traffic
- id: SM-4
  metric: new_home_mobile_layout_defects
  target: "0 blocking defects across the approved mobile viewport checks"
  target_status: committed
  window: before each production deployment of the experiment
```

## Risks

- A near-exact visual adaptation can feel derivative if Proximity does not add its own strong logo, imagery, and editorial point of view. The layout may be faithfully adapted, but the identity and assets must be original.
- “At the centre of an industry” can sound self-congratulatory when stated as a present fact. The copy should frame it as the standard each business is built to reach unless there is evidence that a brand already holds that position.
- Naming speculative brands can make the group appear broader but less credible. Every publication in the gallery must be explicitly approved for public presentation.
- “Incubator” accurately describes company formation but can imply short-term experimentation or a service offered to outsiders. The headline should use active language; the term can remain in secondary copy until the corporate category is settled.
- The reference site's muted text is visually elegant but may fail accessibility contrast at small sizes if reproduced mechanically.
- The existing application places shared navigation in the root layout. Route isolation must be designed carefully so the experiment does not inherit or destabilize the current site shell.

## Open Questions

1. **Headline:** Approve the recommended active headline, retain the original “is an incubator” wording, or use the bolder “at the centre” alternative? Current recommendation: use the active headline in section 01 and save “at the centre” for the mission.
2. **Name treatment:** Should the header use a temporary typeset `Proximity` wordmark, or is there an early logo direction to test? Current recommendation: use a restrained text wordmark for the experiment and treat logo design as separate work.
3. **Gallery publications:** Which four to six publications should appear, and which are active businesses versus concepts? Private Credit Journal is the only assumed inclusion; every other item requires approval.
4. **Publication order:** Should the gallery lead with the most established publication, represent the intended future portfolio breadth, or follow a deliberate industry sequence? Current recommendation: lead with the strongest live business, then show breadth.
5. **Imagery:** Which publication covers, event photographs, or editorial images can Proximity license and confidently publish for each selected publication? This must be resolved before final visual QA.
6. **Careers conversion:** Should `Get in touch` open an email, scheduling link, application form, or existing careers route? A working destination is required before deployment.
7. **Navigation:** Which non-section destinations should remain visible during the experiment? Hide any item that lacks an approved destination rather than creating placeholders.
8. **Copyright entity:** What legal entity should appear in the footer during the working-name phase? Current recommendation: omit the entity-specific copyright line until confirmed.
9. **Root promotion:** What evidence is required before `/new-home` replaces `/`? Current recommendation: copy approval, mobile and desktop visual approval, verified links and claims, and one short comprehension test with representative readers.

## Rollout

1. Review and approve the proposition copy and the role of the word “incubator”; keep the mission explicitly provisional.
2. Confirm the four to six publications for the gallery, their order, and the public status of each.
3. Source publication-specific, original or properly licensed imagery and approve a one-sentence caption for each gallery item.
4. Confirm the Careers copy, `Get in touch` destination, navigation destinations, and footer treatment.
5. Implement `/new-home` as an isolated route without altering `/` or shared existing pages.
6. Run production build, accessibility checks, link checks, and desktop/mobile screenshot review against the reference layout.
7. Deploy the route to the existing Vercel project and review it on the public URL.
8. Iterate on copy and visuals at `/new-home` while keeping the current homepage intact.
9. Revisit and approve the mission through a separate positioning discussion before root-page promotion.
10. Create a separate approval and migration change before promoting the concept to `/` or completing the Proximity rename.

## Related Artifacts

```productspec-related-artifacts
- type: other
  url: "https://locke.inc/"
  title: "Locke homepage visual and structural reference"
  section_id: user_experience
- type: other
  url: "https://playingfield.group/"
  title: "Current Playing Field homepage"
  section_id: problem
```
