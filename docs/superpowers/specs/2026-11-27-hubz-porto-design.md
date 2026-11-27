# Hubz Porto (`wahabdinn.my.id`) — Design Specification

- **Date:** 2026-11-27
- **Project path:** `C:\Users\habdinn\Documents\web-projects\hubz-porto`
- **Target domain:** `https://wahabdinn.my.id` (Cloudflare Pages / Workers Static Assets)
- **Owner:** Wahabdin Sangadji (`Associate Partner Technology IAI`, `Admin`, `Full-Stack Developer`)
- **Contact:** `wahabdinn@gmail.com` · GitHub `https://github.com/wahabdinn1`
- **App name (for TikTok / Google / Meta API portals):** `Hubz Publisher`

---

## 1. Purpose & Success Criteria

`hubz-porto` serves two concrete goals under a single canonical domain (`https://wahabdinn.my.id`):

1. **Personal Portfolio:** Present Wahabdin Sangadji's professional roles and real engineering work (**Hubz Publisher** and **Hubz Video**) with editorial clarity in English (default) and Bahasa Indonesia.
2. **API Verification Readiness:** Provide public, crawler-readable, HTTPS-served product information (`/apps/hubz-publisher`), **Terms of Service** (`/terms`), and **Privacy Policy** (`/privacy`) that meet TikTok for Developers, Google OAuth, and Meta App review requirements (HTTP 200 without authentication, zero placeholder text, real operator contact, explicit OAuth scope and data-handling disclosures). Domain verification for TikTok is handled via Cloudflare DNS `TXT` records rather than static root verification files.

### Success Criteria
- `pnpm build` succeeds cleanly with Next.js static export (`output: "export"`), emitting all 8 routes into `out/`.
- Every route renders full readable HTML without client-side JavaScript required.
- Language switcher (`EN | ID`) navigates cleanly between matching English and Indonesian routes on every page.
- Zero invented projects, metrics, testimonials, or stock placeholders.
- Responsive without horizontal overflow or element overlap across `320px` to `1920px`.
- Hallmark `sloplint` reports `0 FAIL` and `0` unwaived `REFLEX` findings across the codebase; `pnpm lint` and `pnpm test` pass cleanly.

---

## 2. Route & Bilingual Architecture

Static-first Next.js 16 App Router (`output: "export"`, `trailingSlash: false`) with dedicated English (default) and Indonesian routes sharing typed content dictionaries (`src/content/site.ts`, `src/content/legal.ts`) and presentational page components:

| English Route (Default) | Indonesian Route | Purpose |
| --- | --- | --- |
| `/` | `/id` | Portfolio home (Hero, Selected Work, Hubz Publisher Spec Table, Practice & Stack, Footer) |
| `/apps/hubz-publisher` | `/id/apps/hubz-publisher` | Dedicated product overview for Hubz Publisher (workflow, supported APIs, OAuth scopes, security model, direct links to `/terms` and `/privacy`) |
| `/terms` *(canonical for API portals)* | `/id/terms` | Terms of Service for `wahabdinn.my.id` and `Hubz Publisher` (ID page includes a clear notice that the English version at `/terms` is the authoritative legal text) |
| `/privacy` *(canonical for API portals)* | `/id/privacy` | Privacy Policy covering YouTube Data API, Meta Graph API, and TikTok Content Posting API (ID page notes `/privacy` as authoritative) |

### Locale Switching Logic
A pure helper `getAlternateLocalePath(pathname: string, targetLocale: "en" | "id"): string` maps between `/` ↔ `/id`, `/apps/hubz-publisher` ↔ `/id/apps/hubz-publisher`, `/terms` ↔ `/id/terms`, and `/privacy` ↔ `/id/privacy`, with unit tests verifying round-trip normalization (including trailing slashes and unknown paths falling back to `/` or `/id`).

Each route sets its own Next.js `Metadata` (`title`, `description`, `alternates.canonical`, `alternates.languages` for `en` and `id`).

---

## 3. Visual Direction (`Hallmark · Specimen` + `shadcn/ui`)

### Hallmark Picks Summary
- **Theme:** `Specimen` (dealt 1/3, seed `personal-portfolio-full-stack-developer-52de·0918bf70·2026-11-27·r0`, genre `editorial`)
- **Draw:** `9e348e` (`Hero: Stage`, `Nav: masthead`, `Footer: mast`; leaving out Split/Grid bento cards and using editorial ruled rows and a specification table instead)
- **Material:** Real identity (`Wahabdin Sangadji`, `Associate Partner Technology IAI`, `Admin`, `Full-Stack Developer`, `wahabdinn@gmail.com`, `github.com/wahabdinn1`) and real products (`Hubz Publisher`, `Hubz Video`); zero photographs or stock imagery; pure typographic & specification-table composition.

### Design Tokens (`:root` in `src/app/globals.css`)
- **Surfaces:** `--color-paper: oklch(96.5% 0.016 82)` (warm oat), `--color-paper-2: oklch(93.5% 0.02 80)`, `--color-paper-3: oklch(89% 0.024 78)`
- **Ink:** `--color-ink: oklch(17% 0.012 60)`, `--color-ink-2: oklch(28% 0.014 60)`, `--color-muted: oklch(49% 0.014 65)`
- **Rules:** `--color-rule: oklch(80% 0.018 75)`, `--color-rule-2: oklch(66% 0.02 72)` (`1px` solid hairlines; one `3px double` rule heading the primary specification table)
- **Signal:** `--color-accent: oklch(45% 0.18 262)` (ink-blue for links, focus ring, and subtle guide hairlines; kept strictly under 5% of viewport area), `--color-accent-ink: oklch(97% 0.012 82)`, `--color-guide: oklch(55% 0.16 262 / 0.5)`
- **Typography:**
  - Display (`h1`, `h2`, `h3`): `Bodoni Moda` (`400`, sentence case, tracking `-0.02em`, `line-height: 1.02`, `"opsz" 96` on `h1`/`h2`, auto optical size on `h3`)
  - Body & labels: `Geist` (`400` at `17px` body with `1.55` line-height; `500` sentence case for labels, nav, and table headers)
  - Figures & technical codes: `Geist Mono` (`400`, `font-variant-numeric: tabular-nums`) strictly for numeric specs, version/limit figures, and paths
- **Geometry & Motion:** `border-radius: 0`, `box-shadow: none`, state-only transitions (underline thickness, ink fill on hover, instant `:focus-visible` ring), `prefers-reduced-motion: reduce` respected, `overflow-x: clip` on `html` and `body`.
- **`shadcn/ui` Primitives:** Map shadcn semantic variables (`--background`, `--foreground`, `--primary`, `--border`, `--muted`, `--ring`) directly to Specimen tokens in `globals.css`, using `Button` (48px tall square ink primary & 1px outlined secondary), `Separator`, and `Table`.

---

## 4. Page Structure & Component Boundaries

```text
src/
├── app/
│   ├── layout.tsx                      # Root layout loading Bodoni Moda, Geist, Geist Mono + base metadata
│   ├── globals.css                     # Hallmark stamp + Specimen tokens + Tailwind v4 theme mapping
│   ├── page.tsx                        # EN Home
│   ├── apps/hubz-publisher/page.tsx    # EN Hubz Publisher product page
│   ├── terms/page.tsx                  # EN Canonical Terms of Service
│   ├── privacy/page.tsx                # EN Canonical Privacy Policy
│   └── id/
│       ├── page.tsx                    # ID Home
│       ├── apps/hubz-publisher/page.tsx# ID Hubz Publisher product page
│       ├── terms/page.tsx              # ID Terms of Service
│       └── privacy/page.tsx            # ID Privacy Policy
├── components/
│   ├── ui/                             # shadcn/ui primitives (button, separator, table)
│   ├── site-header.tsx                 # Masthead nav + EN/ID route switcher + copy/email action
│   ├── site-footer.tsx                 # Mast footer with contact, GitHub, /terms, /privacy
│   ├── copy-email-button.tsx           # Minimal client island to copy wahabdinn@gmail.com with accessible feedback
│   ├── portfolio-home.tsx              # Shared EN/ID Home renderer
│   ├── hubz-publisher-page.tsx         # Shared EN/ID Hubz Publisher overview renderer
│   └── legal-document-page.tsx         # Shared EN/ID clean reading layout for /terms & /privacy
├── content/
│   ├── site.ts                         # Typed EN & ID portfolio and Hubz Publisher copy
│   └── legal.ts                        # Typed EN & ID Terms of Service & Privacy Policy sections
└── lib/
    ├── locale.ts                       # Locale types & getAlternateLocalePath helper
    ├── locale.test.ts                  # Unit tests for locale path mapping and content parity
    └── utils.ts                        # cn() helper for shadcn/ui
```

### Home Page Sections (`/` & `/id`)
1. **Masthead Header:** Wordmark (`Wahabdin Sangadji`), navigation (`Work`, `Hubz Publisher`, `Terms`, `Privacy`), `EN | ID` segmented route toggle, and `Email` action. Collapses cleanly on mobile (`< 640px`) without wrapping clickable labels.
2. **Hero (Stage):** Display name `Wahabdin Sangadji`, concise role line (`Associate Partner Technology IAI, Admin, and Full-Stack Developer` — no middle-dot joining), one focused sentence on building web systems and local video-publishing tools, and two actions (`Explore Hubz Publisher` primary button + `wahabdinn@gmail.com` secondary link/copy). Fits cleanly above the fold at `1280×800`.
3. **Selected Work (Ruled Index):** Two numbered hairline rows (`01` **Hubz Publisher**, `02` **Hubz Video**) describing real architecture, stack, and purpose, with direct link from `01` to `/apps/hubz-publisher`.
4. **Hubz Publisher Platform Specification Table (Signature under `3px double` rule):** Tabular breakdown of supported channels (`YouTube Shorts`, `Facebook Reels`, `Instagram Reels`, `TikTok`), duration/format envelope (`180s`, `90s`, `1080×1920`, `Inbox Draft`), scheduling mode, and API scope reference — plus direct links to `/terms` and `/privacy`.
5. **Practice & Tools:** Concise 2-column editorial summary of Wahabdin's practice across IAI technology coordination, system administration, and full-stack TypeScript/Next.js/Cloudflare development, plus direct GitHub profile link (`https://github.com/wahabdinn1`).
6. **Mast Footer:** Operator line (`Wahabdin Sangadji`), `wahabdinn@gmail.com`, GitHub link, `Terms of Service`, and `Privacy Policy`.

### Dedicated Legal Content (`/terms` & `/privacy`)
- **Terms of Service (`/terms`):**
  1. Scope & Operator (`Wahabdin Sangadji`, `https://wahabdinn.my.id`, `Hubz Publisher`).
  2. Eligibility & Authorized Account Use (self-hosted tool for accounts owned or explicitly authorized by the operator).
  3. Third-Party Platform Terms (explicit compliance with YouTube Terms of Service, Google API Services User Data Policy, Meta Platform Terms, and TikTok Developer Terms of Service).
  4. User Content & Responsibility (operator retains full ownership and responsibility for uploaded media, titles, captions, and comments).
  5. Service Availability, As-Is Disclaimer & Limitation of Liability.
  6. Termination & Revocation (users may revoke API tokens anytime via Google, Meta, TikTok settings or in-app Disconnect).
  7. Changes & Contact (`wahabdinn@gmail.com`, effective date `November 27, 2026`).
- **Privacy Policy (`/privacy`):**
  1. Overview & Data Controller (`Wahabdin Sangadji`, `wahabdinn@gmail.com`).
  2. Information Accessed via Platform APIs (explicitly itemized for YouTube Data API v3, Meta Graph API for Facebook/Instagram, and TikTok Login Kit / Content Posting API `user.info.basic` and `video.upload`).
  3. How Information Is Used (solely to execute user-initiated scheduling, video/draft uploads, optional first-comments, and personal performance analytics).
  4. Local Storage & Security (self-hosted architecture; OAuth tokens encrypted at rest with AES-256-GCM in local SQLite; zero third-party data broker sharing, ad tracking, or analytics cookies on `wahabdinn.my.id`).
  5. Data Retention, Revocation & Deletion (how to disconnect accounts, purge local database records, or request assistance via `wahabdinn@gmail.com`).
  6. Changes & Contact.

---

## 5. Deployment (Cloudflare) & Verification Plan

- **Cloudflare Configuration:**
  - `next.config.ts`: `output: "export"`, `images: { unoptimized: true }`.
  - `wrangler.jsonc`: Configured with `assets.directory: "./out"` and `name: "hubz-porto"` so it deploys identically via **Cloudflare Pages** (GitHub integration, build `pnpm build`, output `out`) or `wrangler deploy` (Cloudflare Workers Static Assets) bound to `wahabdinn.my.id`.
  - Zero cookies, zero tracking scripts, zero external API calls on page load.
- **Verification Gates:**
  1. Unit tests (`node --import tsx --test src/**/*.test.ts`): locale route switching (`EN` ↔ `ID`), legal & site content completeness (ensuring no empty fields, matching EN/ID keys, and required TikTok/Google/Meta disclosures present).
  2. `pnpm lint` (0 errors).
  3. `pnpm build` (static export generates all 8 HTML pages in `out/`).
  4. Hallmark `sloplint` sweep on `src/` (`0 FAIL`, `0` unwaived `REFLEX`).
