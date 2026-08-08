# SEO_PLAN.md
# Auto-Verschrottung24 – SEO Strategy & Codex Implementation Brief

## 1. Purpose of this document

This file is the central SEO implementation brief for the website:

**https://auto-verschrottung24.de/**

Codex should read this file before making SEO-related changes.

The website offers vehicle collection / vehicle disposal / vehicle recycling services **nationwide across Germany**.

The SEO strategy must therefore NOT be built primarily around one city or one local region.

The primary goal is to increase organic visibility throughout Germany for commercially relevant searches related to:

- Autoverschrottung
- Auto verschrotten
- Autoentsorgung
- Autoverwertung
- Schrottauto verkaufen
- Fahrzeugabholung
- Unfallwagen verkaufen
- Auto mit Motorschaden verkaufen
- Auto mit Getriebeschaden verkaufen
- Fahrzeuge ohne TÜV
- related long-tail queries

Primary business goal:

> Generate qualified vehicle enquiries and customer contacts through organic Google search traffic.

---

# 2. Important project rules

## 2.1 Do not blindly redesign the website

The current visual identity and layout should generally be preserved.

SEO changes should integrate into the existing design system.

Do NOT perform a full redesign unless explicitly requested.

Reuse existing:

- components
- layout patterns
- typography
- buttons
- forms
- spacing
- colors
- UI elements

where practical.

---

## 2.2 Do not invent company facts

Never invent:

- certifications
- awards
- customer numbers
- reviews
- locations
- offices
- employees
- response times
- guarantees
- prices
- partner networks
- disposal certificates
- business relationships

If information is not available in the repository or provided by the user, either:

1. omit it, or
2. mark it clearly as requiring business confirmation.

Especially do not claim that the company itself is a certified dismantling facility unless this is actually verified.

---

## 2.3 Nationwide positioning

The business positions itself as a nationwide service.

Do NOT change the site into an Essen-focused or Ruhrgebiet-focused website.

Geographic SEO may later include selected city or regional pages, but the core website must communicate:

**bundesweite Fahrzeugabholung / bundesweite Autoverschrottung**

---

# 3. SEO strategy

The website should eventually be built around three main SEO content groups.

## Pillar 1 – Commercial service pages

Pages targeting people already looking for a service.

Highest priority.

Examples:

- Autoverschrottung
- Autoentsorgung
- Schrottauto verkaufen
- Fahrzeugabholung
- Unfallwagen verkaufen
- Auto mit Motorschaden verkaufen
- Auto mit Getriebeschaden verkaufen
- Auto ohne TÜV

These pages should be conversion-oriented.

---

## Pillar 2 – Informational / guide content

Pages targeting informational searches around vehicle disposal.

Examples:

- Was kostet eine Autoverschrottung?
- Welche Unterlagen braucht man?
- Auto ohne Fahrzeugbrief verschrotten
- Auto ohne Fahrzeugschein verschrotten
- Auto vor Verschrottung abmelden?
- Was ist ein Verwertungsnachweis?
- Wie läuft eine Autoverschrottung ab?
- Was bekommt man für ein Schrottauto?

These pages should educate users and internally link to the relevant commercial service pages.

---

## Pillar 3 – Geographic pages

Location pages may later target searches such as:

- Autoverschrottung Berlin
- Autoverschrottung Hamburg
- Autoverschrottung Köln
- Autoverschrottung München
- Auto verschrotten Dortmund
- Autoentsorgung Frankfurt

However:

### Do not mass-generate hundreds of near-identical city pages.

Google considers large numbers of substantially similar pages created mainly to rank for geographic variations potentially problematic.

Location pages should only be created if they contain genuine useful differences and real service information.

Possible useful location-specific information:

- service availability
- service area
- surrounding districts
- logistics
- vehicle pickup process
- real partner structure if available
- local FAQ where applicable

Never create fake offices or fake addresses.

---

# 4. Initial keyword architecture

Keywords are grouped by search intent.

Do NOT automatically create one page per keyword.

Closely related keywords should normally be grouped into one strong page.

---

## 4.1 Autoverschrottung cluster

Primary intent:

Vehicle owner wants to dispose of / scrap a vehicle.

Target URL:

`/autoverschrottung/`

Primary keyword candidates:

- autoverschrottung
- auto verschrotten
- auto verschrotten lassen
- kfz verschrotten
- pkw verschrotten

Secondary terms:

- fahrzeug verschrotten
- altes auto verschrotten
- auto entsorgen
- auto abholen lassen

---

## 4.2 Autoentsorgung cluster

Target URL:

`/autoentsorgung/`

Primary keyword candidates:

- autoentsorgung
- auto entsorgen
- kfz entsorgen
- fahrzeug entsorgen

Avoid keyword cannibalization with `/autoverschrottung/`.

The two pages must have distinguishable intent and content.

---

## 4.3 Schrottauto verkaufen cluster

Target URL:

`/schrottauto-verkaufen/`

Primary keyword candidates:

- schrottauto verkaufen
- schrottauto ankauf
- schrottwagen verkaufen
- altes auto verkaufen
- defektes auto verkaufen

The page should focus more strongly on residual value / selling intent than the pure disposal page.

---

## 4.4 Vehicle collection cluster

Target URL:

`/fahrzeugabholung/`

Primary keyword candidates:

- auto abholen lassen
- fahrzeug abholen lassen
- schrottauto abholen lassen
- kostenlose fahrzeugabholung
- auto abholung bundesweit

Only use words such as "kostenlos" when this is actually valid for the business model.

---

## 4.5 Accident vehicle cluster

Target URL:

`/unfallwagen-verkaufen/`

Primary keyword candidates:

- unfallwagen verkaufen
- unfallauto verkaufen
- unfallwagen ankauf
- totalschaden auto verkaufen

---

## 4.6 Engine damage cluster

Target URL:

`/auto-mit-motorschaden-verkaufen/`

Primary keyword candidates:

- auto mit motorschaden verkaufen
- motorschaden auto verkaufen
- motorschaden ankauf
- defektes auto mit motorschaden verkaufen

---

## 4.7 Transmission damage cluster

Target URL:

`/auto-mit-getriebeschaden-verkaufen/`

Primary keyword candidates:

- auto mit getriebeschaden verkaufen
- getriebeschaden ankauf
- fahrzeug mit getriebeschaden verkaufen

---

## 4.8 Vehicle without TÜV cluster

Target URL:

`/auto-ohne-tuev/`

Primary keyword candidates:

- auto ohne tüv verkaufen
- auto ohne tüv verschrotten
- fahrzeug ohne tüv verkaufen

---

# 5. Recommended first website structure

Initial target structure:

```text
/
├── autoverschrottung/
├── autoentsorgung/
├── schrottauto-verkaufen/
├── fahrzeugabholung/
├── unfallwagen-verkaufen/
├── auto-mit-motorschaden-verkaufen/
├── auto-mit-getriebeschaden-verkaufen/
├── auto-ohne-tuev/
│
├── ratgeber/
│   ├── autoverschrottung-kosten/
│   ├── auto-ohne-fahrzeugbrief-verschrotten/
│   ├── auto-ohne-fahrzeugschein-verschrotten/
│   ├── auto-verschrotten-ablauf/
│   ├── auto-vor-verschrottung-abmelden/
│   └── verwertungsnachweis/
│
└── standorte/
    └── [future selected location pages]
```

This is a strategic target structure.

Do not create every page at once without first reviewing the current application architecture.

---

# 6. Homepage SEO direction

The homepage should remain the central nationwide brand/service page.

Primary theme:

**Autoverschrottung bundesweit**

Possible supporting intents:

- Auto verschrotten
- Fahrzeugabholung
- Schrottauto
- Autoverwertung
- bundesweite Abholung

Possible title direction:

`Autoverschrottung bundesweit – Fahrzeugabholung | Auto-Verschrottung24`

Alternative if "kostenlose Abholung" is factually valid:

`Auto verschrotten lassen – kostenlose Abholung bundesweit | Auto-Verschrottung24`

Do not blindly overwrite the title.

First inspect:

- current title
- metadata implementation
- current H1
- wording of hero section
- current business claims

Then make the smallest useful improvement.

---

# 7. Technical SEO requirements

Before creating large amounts of content, perform a technical audit of the current project.

Check the following.

---

## 7.1 Indexability

Confirm:

- pages intended for SEO are indexable
- no accidental `noindex`
- robots rules do not block important routes
- canonical URLs are correct
- production domain is used consistently

---

## 7.2 robots.txt

Inspect whether a valid `robots.txt` exists.

It should:

- allow crawling of public SEO pages
- avoid blocking necessary resources
- reference the sitemap when appropriate

Do not block pages without a clear reason.

---

## 7.3 XML sitemap

Check whether a sitemap exists.

The sitemap should include:

- homepage
- important service pages
- guide pages
- later valid location pages

It should exclude:

- duplicate routes
- internal utility pages
- non-indexable pages
- test routes

If framework-supported sitemap generation exists, prefer that over manual duplication.

---

## 7.4 Canonical tags

Each indexable page should have an appropriate canonical URL.

Avoid accidental canonicals pointing all pages to the homepage.

---

## 7.5 Titles

Every indexable page should have a unique, descriptive `<title>`.

Guidelines:

- describe actual page intent
- include primary topic naturally
- avoid keyword stuffing
- avoid identical titles across pages
- include brand where useful

---

## 7.6 Meta descriptions

Each important page should have a useful unique meta description.

Descriptions should:

- explain the service clearly
- encourage qualified clicks
- remain factual
- avoid artificial keyword repetition

---

## 7.7 Heading structure

Each important page should generally have one meaningful H1.

Use logical H2/H3 hierarchy.

Avoid headings chosen only for visual styling.

---

## 7.8 Semantic HTML

Prefer semantic elements where practical:

- main
- nav
- section
- article
- header
- footer
- address where appropriate

Maintain accessibility.

---

## 7.9 Internal linking

Important commercial pages should be reachable through normal internal links.

Build contextual links between:

- homepage
- service pages
- guide articles
- future location pages

Use descriptive anchor text.

Avoid excessive footer spam containing hundreds of keyword links.

---

## 7.10 Structured data

Inspect whether structured data is already implemented.

Potentially relevant schema types may include:

- Organization
- LocalBusiness only where truthful and appropriate
- Service
- BreadcrumbList
- FAQPage only where technically/content-policy appropriate

Do not add misleading structured data.

Do not add fake reviews or aggregate ratings.

---

## 7.11 Social metadata

Check Open Graph and social metadata.

At minimum important pages should have sensible:

- title
- description
- canonical URL
- image if available

---

## 7.12 Performance

Audit:

- image sizes
- next-gen image formats where supported
- lazy loading
- layout shifts
- unnecessarily large scripts
- blocking resources
- font loading
- mobile performance

Do not sacrifice UX merely to increase a synthetic SEO score.

---

## 7.13 Mobile usability

The website must work properly on mobile.

Check:

- navigation
- CTA visibility
- forms
- text sizes
- spacing
- buttons
- sticky elements
- horizontal overflow

---

## 7.14 Broken links and status codes

Check:

- internal links
- 404s
- redirects
- trailing slash consistency
- duplicate route variants

Use permanent redirects for intentionally moved SEO pages.

---

# 8. Content rules

Content should be written primarily for users, not search engines.

---

## 8.1 Avoid keyword stuffing

Bad:

> Autoverschrottung bundesweit ist unsere Autoverschrottung für Kunden, die Autoverschrottung suchen.

Good:

> Wir organisieren die Abholung und Verwertung von Altfahrzeugen bundesweit.

Use natural German.

---

## 8.2 Avoid duplicate content

Do not duplicate the same large text block across dozens of pages.

Especially avoid city pages where only the city name changes.

---

## 8.3 Do not copy competitors

Competitor pages may be used to understand:

- topics
- search intent
- content gaps
- page structures

But wording must be original.

---

## 8.4 Match search intent

Commercial page:

focus on:

- service
- eligibility
- process
- collection
- next steps
- CTA

Guide article:

focus on:

- answering the question
- explaining legal/practical issues
- useful steps
- then linking naturally to the service

---

## 8.5 Use factual claims only

Claims such as:

- "kostenlose Abholung"
- "innerhalb von 24 Stunden"
- "zertifizierte Partner"
- "Verwertungsnachweis inklusive"
- "bundesweit überall"

must be confirmed before being used.

When uncertain, preserve existing verified wording rather than inventing stronger marketing claims.

---

# 9. Internal linking model

Example:

Homepage:

→ Autoverschrottung  
→ Schrottauto verkaufen  
→ Fahrzeugabholung  
→ Unfallwagen  
→ Motorschaden

`/autoverschrottung/`:

→ Autoentsorgung  
→ Fahrzeugabholung  
→ Verwertungsnachweis guide  
→ Autoverschrottung Kosten guide

`/auto-mit-motorschaden-verkaufen/`:

→ Schrottauto verkaufen  
→ Fahrzeugabholung  
→ Auto ohne TÜV

Guide articles:

→ relevant commercial landing page

Internal links should be contextually useful.

---

# 10. Guide content backlog

Potential future articles:

1. Was kostet eine Autoverschrottung?
2. Auto ohne Fahrzeugbrief verschrotten – geht das?
3. Auto ohne Fahrzeugschein verschrotten
4. Welche Unterlagen braucht man zum Auto verschrotten?
5. Wie läuft eine Autoverschrottung ab?
6. Auto vor der Verschrottung abmelden?
7. Was ist ein Verwertungsnachweis?
8. Was bekommt man für ein Schrottauto?
9. Auto mit Totalschaden verkaufen oder verschrotten?
10. Auto ohne TÜV verkaufen oder verschrotten?
11. Nicht fahrbereites Auto verkaufen
12. Motorschaden: reparieren, verkaufen oder verschrotten?
13. Getriebeschaden: lohnt sich die Reparatur?
14. Darf man ein abgemeldetes Auto abschleppen?
15. Was passiert mit einem Auto bei der Autoverwertung?

Do not publish all at once purely for SEO volume.

Prioritize quality and business relevance.

---

# 11. Location page strategy

Location SEO is a later phase.

Initial candidate cities can eventually be chosen using real keyword demand and business coverage.

Potential candidates may include:

- Berlin
- Hamburg
- München
- Köln
- Frankfurt am Main
- Düsseldorf
- Dortmund
- Stuttgart
- Hannover
- Bremen
- Leipzig
- Dresden
- Nürnberg
- Duisburg
- Essen
- Bochum

This is NOT yet an instruction to create these pages.

Before creating them:

1. confirm actual service coverage
2. validate keyword opportunity
3. define meaningful local content
4. avoid fake local offices
5. ensure pages are materially useful

---

# 12. Conversion optimization

SEO traffic is only valuable if users convert.

Important pages should make the desired next step obvious.

Possible CTAs based on the existing business flow:

- Fahrzeug anfragen
- Angebot erhalten
- Abholung anfragen
- Kontakt aufnehmen

Reuse existing forms and CTA components when possible.

Do not introduce fake urgency.

---

# 13. Search Console

Google Search Console should be treated as the primary feedback source after launch.

Eventually use it to evaluate:

- impressions
- clicks
- CTR
- average position
- indexed pages
- indexing errors
- search queries
- page-level performance

SEO decisions should increasingly become data-driven.

Examples:

If a page receives many impressions around positions 8–20:

→ improve that page first.

If Google ranks the wrong page for a query:

→ investigate keyword cannibalization.

If a guide article ranks well but does not convert:

→ improve internal links and CTA placement.

---

# 14. Keyword cannibalization

Avoid having multiple pages compete for exactly the same search intent.

Examples:

`/autoverschrottung/`
and
`/autoentsorgung/`

must have sufficiently distinct positioning.

Similarly:

`/schrottauto-verkaufen/`
and
`/unfallwagen-verkaufen/`

should not simply contain duplicate text with different titles.

---

# 15. Recommended implementation phases

## Phase 0 – Repository audit

Before significant changes:

1. inspect project structure
2. identify framework and version
3. identify routing system
4. identify rendering mode
5. inspect metadata implementation
6. inspect current homepage
7. inspect existing pages
8. inspect robots.txt
9. inspect sitemap
10. inspect structured data
11. inspect analytics/search-console hooks if present
12. inspect reusable page/layout components

Output a short audit before creating many pages.

---

## Phase 1 – Technical SEO foundation

Prioritize:

- indexability
- metadata
- canonical handling
- robots
- sitemap
- semantic structure
- structured data where appropriate
- internal links
- performance issues
- broken links

Do not create dozens of new pages yet.

---

## Phase 2 – Homepage optimization

Improve the homepage around nationwide commercial intent.

Goals:

- clear nationwide positioning
- stronger relevance for Autoverschrottung / Auto verschrotten
- preserve brand
- improve title / metadata
- improve headings where necessary
- improve internal links to service pages
- preserve conversion flow

---

## Phase 3 – Core service pages

Create / improve the following first:

1. `/autoverschrottung/`
2. `/autoentsorgung/`
3. `/schrottauto-verkaufen/`
4. `/fahrzeugabholung/`
5. `/unfallwagen-verkaufen/`
6. `/auto-mit-motorschaden-verkaufen/`
7. `/auto-mit-getriebeschaden-verkaufen/`
8. `/auto-ohne-tuev/`

These should be visually consistent with the existing website.

---

## Phase 4 – Initial guide content

Start with the highest business relevance:

1. Autoverschrottung Kosten
2. Auto verschrotten Ablauf
3. Auto ohne Fahrzeugbrief verschrotten
4. Verwertungsnachweis
5. Auto vor Verschrottung abmelden

---

## Phase 5 – Data review

After indexing and enough Search Console data exists:

Review:

- which queries generate impressions
- which service pages rank
- which terms are near page 1
- which pages have low CTR
- where cannibalization occurs

Use this data before large-scale expansion.

---

## Phase 6 – Geographic expansion

Only after the nationwide foundation is stable.

Create selected location pages based on:

- actual demand
- actual coverage
- Search Console data
- competitor opportunity
- content quality

---

# 16. Codex workflow instructions

When asked to implement SEO work:

## Before editing

1. Read this entire file.
2. Inspect the repository.
3. Identify existing conventions.
4. Reuse existing architecture where reasonable.
5. Avoid unnecessary dependencies.
6. Preserve design.
7. Preserve existing working functionality.

---

## During implementation

Prefer small, reviewable changes.

Do not:

- rewrite the whole application
- replace the framework
- add unnecessary libraries
- generate 100 pages automatically
- invent business information
- break existing forms
- remove existing conversion functionality
- create fake reviews
- create fake addresses
- create fake certifications

---

## After implementation

Run the relevant checks available in the repository:

- build
- type check
- lint
- tests

Where practical also verify:

- page renders
- metadata exists
- no broken internal links
- sitemap contains correct URLs
- robots file is valid
- important pages return successful responses

Report:

1. files changed
2. SEO improvements made
3. assumptions
4. items requiring business confirmation
5. remaining recommended work

---

# 17. First Codex task

The preferred first Codex prompt is:

> Read `SEO_PLAN.md` completely.  
> Then inspect the existing repository and perform **Phase 0 only: Repository audit**.  
> Do not create the planned SEO landing pages yet.  
> Identify the framework, routing, rendering approach, current metadata implementation, robots.txt, sitemap, structured data, homepage heading structure, existing SEO strengths/weaknesses, internal linking, and obvious technical SEO issues.  
> Then give me a prioritized implementation plan for Phase 1.  
> Do not redesign the site and do not invent business information.

After reviewing that audit, proceed with Phase 1.

---

# 18. Definition of success

SEO success is not defined as an instant #1 ranking.

Success should be measured progressively through:

- correct indexation
- more relevant impressions
- growth in organic clicks
- ranking improvements
- visibility across multiple commercial keyword clusters
- qualified enquiries
- conversion growth

The long-term objective is to establish Auto-Verschrottung24 as a strong nationwide organic search result for vehicle disposal, vehicle collection, damaged vehicle sales, and related queries in Germany.
