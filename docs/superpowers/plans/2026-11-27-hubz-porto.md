# Hubz Porto (`wahabdinn.my.id`) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build and verify the static bilingual (`EN` default + `ID`) Next.js portfolio and API legal portal for Wahabdin Sangadji (`https://wahabdinn.my.id`) with Hallmark Specimen typography, `shadcn/ui` primitives, and Cloudflare Pages/Workers static export readiness.

**Architecture:** Next.js 16 App Router configured with `output: "export"` generates 8 static HTML routes (`/`, `/id`, `/apps/hubz-publisher`, `/id/apps/hubz-publisher`, `/terms`, `/id/terms`, `/privacy`, `/id/privacy`) from shared typed content modules and Specimen-styled components. Only `CopyEmailButton` and the mobile nav toggle use `"use client"`; every page renders complete HTML with scripting disabled.

**Tech Stack:** Next.js 16, React 19, TypeScript 5, Tailwind CSS v4, `shadcn/ui` (`@base-ui/react`, `class-variance-authority`, `clsx`, `tailwind-merge`, `lucide-react`), `tsx` (`node:test`), `wrangler.jsonc` (Cloudflare Static Assets / Pages).

**Spec:** [2026-11-27-hubz-porto-design.md](../specs/2026-11-27-hubz-porto-design.md)

## Global Constraints

- Project root: `C:\Users\habdinn\Documents\web-projects\hubz-porto` (on Windows PowerShell run `pnpm.cmd`).
- Domain: `https://wahabdinn.my.id`; operator: `Wahabdin Sangadji`; roles: `Associate Partner Technology IAI`, `Admin`, `Full-Stack Developer`; email: `wahabdinn@gmail.com`; GitHub: `https://github.com/wahabdinn1`; app name: `Hubz Publisher`.
- No `public/tiktok*.txt` file (domain verification uses Cloudflare DNS `TXT` records).
- Zero invented projects, metrics, testimonials, logos, or stock photos (real work only: `Hubz Publisher` and `Hubz Video`).
- Hallmark Specimen floor: warm oat paper (`oklch(96.5% 0.016 82)`), warm near-black ink (`oklch(17% 0.012 60)`), ink-blue signal (`oklch(45% 0.18 262)` < 5% area), `Bodoni Moda` `400` (`"opsz" 96` on `h1`/`h2`), `Geist` body/labels, `Geist Mono` tabular only on numeric specs/codes, `border-radius: 0`, `box-shadow: none`, `1px` rules, one `3px double` rule per page, `overflow-x: clip` on `html`/`body`, `:focus-visible` instant, `prefers-reduced-motion: reduce`, zero middle-dot-joined meta strings, zero uppercase tracked eyebrows.
- Canonical API review URLs are `/terms`, `/privacy`, and `/apps/hubz-publisher` in English; Indonesian routes live under `/id/*` with an explicit note on `/id/terms` and `/id/privacy` that English is authoritative.

## Review Focus

1. **Trailing slashes & nested paths in locale switching:** Cloudflare Pages may serve `/terms/` or `/id/apps/hubz-publisher/` with a trailing slash; `getAlternateLocalePath` must normalize trailing slashes cleanly without producing `/id//` or broken paths.
2. **Static HTML completeness without JS:** TikTok/Google/Meta review bots and Hallmark Floor #7 require all legal text, operator identity, email, and platform scope disclosures to exist in pre-rendered static HTML inside `out/`.
3. **Bilingual key drift or accidental placeholders:** EN and ID dictionaries (`site.ts`, `legal.ts`) must keep identical structural counts (projects, spec rows, legal sections) and contain zero `TBD`/`TODO`/`Lorem` strings or banned AI buzzwords.
4. **Narrow-viewport (`320px`) header & table overflow:** Masthead nav links and the Hubz Publisher specification table must never cause horizontal page scroll or wrap clickable button text.
5. **Authoritative legal notice & platform disclosures:** `/terms` and `/privacy` must explicitly name `Hubz Publisher`, `Wahabdin Sangadji`, `wahabdinn@gmail.com`, YouTube Data API, Meta Graph API, and TikTok `user.info.basic` / `video.upload` with clear token revocation instructions.

---

### Task 1: Project Scaffold, Specimen Tokens & Cloudflare Export Config

**Files:**
- Create: `package.json`, `tsconfig.json`, `next.config.ts`, `postcss.config.mjs`, `eslint.config.mjs`, `components.json`, `wrangler.jsonc`, `.gitignore`
- Create: `src/app/globals.css`, `src/app/layout.tsx`, `src/lib/utils.ts`
- Create: `src/components/ui/button.tsx`, `src/components/ui/separator.tsx`, `src/components/ui/table.tsx`

**Interfaces:**
- Produces:
  - `cn(...inputs: ClassValue[]): string` in `src/lib/utils.ts`
  - `Button`, `buttonVariants` in `src/components/ui/button.tsx` (square `min-h-12` Specimen primary ink & secondary hairline variants)
  - `Separator` in `src/components/ui/separator.tsx` (`variant?: "hairline" | "double"`)
  - `Table`, `TableHeader`, `TableBody`, `TableRow`, `TableHead`, `TableCell` in `src/components/ui/table.tsx`
  - Specimen CSS variables (`--color-paper`, `--color-paper-2`, `--color-ink`, `--color-muted`, `--color-rule`, `--color-rule-2`, `--color-accent`, `--color-accent-ink`, `--color-guide`, `--font-display`, `--font-body`, `--font-outlier`) in `src/app/globals.css`

- [ ] **Step 1: Scaffold Next.js 16 and `shadcn/ui` strictly via `pnpm` CLIs (no hand-written `package.json` or `components.json`)**

1. Scaffold via `pnpm.cmd create next-app@latest` into a temp directory (`--ts --tailwind --eslint --app --src-dir --import-alias "@/*" --use-pnpm --yes`), then move the generated files into `C:\Users\habdinn\Documents\web-projects\hubz-porto` without touching `docs/` or `.git/`.
2. Initialize `shadcn/ui` via `pnpm.cmd dlx shadcn@latest init --defaults --yes` (or `--base base` / `--yes`), then add primitives via `pnpm.cmd dlx shadcn@latest add button separator table --yes`.
3. Install `tsx` for `node:test` via `pnpm.cmd add -D tsx` and add `"test": "node --import tsx --test src/**/*.test.ts"` to `package.json`.
4. Run `pnpm.cmd install` to ensure `pnpm-lock.yaml` is clean.

- [ ] **Step 2: Configure static export (`next.config.ts`), Cloudflare (`wrangler.jsonc`), and `.gitignore`**

- Update `next.config.ts` with `output: "export"` and `images: { unoptimized: true }`.
- Create `wrangler.jsonc`: `name: "hubz-porto"`, `compatibility_date: "2026-11-01"`, `assets: { directory: "./out", not_found_handling: "404-page" }`.
- Ensure `.gitignore` ignores `node_modules`, `.next`, `out`, `.wrangler`, `.env*`, `*.tsbuildinfo`, `next-env.d.ts`.

- [ ] **Step 3: Style `src/app/globals.css` with Hallmark stamp + Specimen tokens + Tailwind `@theme inline`**

Include the Hallmark stamp comment on line 1 (`theme: Specimen · dealt: 1/3, seed personal-portfolio-full-stack-developer-52de·0918bf70·2026-11-27·r0 · draw: 9e348e · genre: editorial`), declare all Specimen `:root` tokens verbatim from the spec, map shadcn variables to Specimen tokens, enforce `overflow-x: clip` on `html, body`, `Bodoni Moda` `400` (`"opsz" 96` on `h1, h2`), `:focus-visible` instant ink-blue outline, and `prefers-reduced-motion: reduce`.

- [ ] **Step 4: Update `src/app/layout.tsx` and tune the CLI-generated `shadcn/ui` primitives (`button.tsx`, `separator.tsx`) to Specimen geometry**

Load `Bodoni_Moda`, `Geist`, and `Geist_Mono` via `next/font/google` in `src/app/layout.tsx` bound to `--font-bodoni`, `--font-geist`, and `--font-geist-mono` with `metadataBase: new URL("https://wahabdinn.my.id")`. Adjust `button.tsx` (`rounded-none`, `min-h-12` ink/outline variants) and `separator.tsx` (`hairline` + `double` variant) cleanly on top of the CLI-generated files.

- [ ] **Step 5: Verify scaffold compiles cleanly**

Run: `pnpm.cmd lint`
Expected: 0 errors, 0 warnings.

- [ ] **Step 6: Commit**

```bash
git add .gitignore package.json pnpm-lock.yaml tsconfig.json next.config.ts postcss.config.mjs eslint.config.mjs components.json wrangler.jsonc src/app/globals.css src/app/layout.tsx src/lib/utils.ts src/components/ui/
git commit -m "chore: scaffold hubz-porto with Specimen tokens and Cloudflare export config"
```

---

### Task 2: Locale Routing Helper & Bilingual Content Dictionaries (TDD)

**Files:**
- Create: `src/lib/locale.ts`
- Create: `src/content/site.ts`
- Create: `src/content/legal.ts`
- Test: `src/lib/locale.test.ts`

**Interfaces:**
- Produces:
  - `export type Locale = "en" | "id"`
  - `export function getAlternateLocalePath(pathname: string, targetLocale: Locale): string`
  - `export function localizePath(enPath: string, locale: Locale): string`
  - `export const SITE_META` (`name`, `email`, `githubUrl`, `domain`, `appName`)
  - `export const SITE_CONTENT: Record<Locale, SiteContent>` (nav, hero, projects, platformSpecs, practice, hubzPublisherPage, footer)
  - `export const LEGAL_CONTENT: Record<Locale, LegalBundle>` (`terms` and `privacy`, each with `title`, `effectiveDate`, `summary`, `authorityNotice`, `sections: Array<{ id: string; heading: string; paragraphs: string[]; bullets?: string[] }>`)

- [ ] **Step 1: Write failing unit tests in `src/lib/locale.test.ts`**

Test assertions pinning Review Focus #1, #3, and #5:
- `getAlternateLocalePath` maps `/`, `/id`, `/terms`, `/id/terms`, `/privacy`, `/id/privacy`, `/apps/hubz-publisher`, `/id/apps/hubz-publisher` bidirectionally, normalizes trailing slashes (`/terms/` → `/id/terms`, `/id/terms/` → `/terms`), strips query/hash, and falls back unknown paths to `/` (`en`) or `/id` (`id`).
- `SITE_CONTENT.en` and `SITE_CONTENT.id` have equal `projects.length` (`2`), equal `platformSpecs.length` (`4`), non-empty strings, zero `TBD`/`TODO`/`Lorem` placeholders, and zero middle-dot (`·`) joins inside role/nav strings.
- `LEGAL_CONTENT.en.terms` and `LEGAL_CONTENT.en.privacy` explicitly mention `Wahabdin Sangadji`, `Hubz Publisher`, `wahabdinn@gmail.com`, `wahabdinn.my.id`, `YouTube`, `Meta`, `TikTok`, `user.info.basic`, `video.upload`, and `AES-256-GCM`; `LEGAL_CONTENT.id.terms.authorityNotice` and `LEGAL_CONTENT.id.privacy.authorityNotice` are non-empty.

- [ ] **Step 2: Run test to verify it fails**

Run: `pnpm.cmd test`
Expected: FAIL with module-not-found for `./locale` / `../content/site`.

- [ ] **Step 3: Implement `src/lib/locale.ts`, `src/content/site.ts`, and `src/content/legal.ts`**

Write clean, Humanizer-checked English and Indonesian copy strictly grounded in the spec's real facts (`Wahabdin Sangadji`, `Associate Partner Technology IAI`, `Admin`, `Full-Stack Developer`, `Hubz Publisher`, `Hubz Video`, `wahabdinn@gmail.com`, `https://github.com/wahabdinn1`). Ensure `/terms` and `/privacy` cover all 7 Terms clauses and 6 Privacy clauses from Spec Section 4.

- [ ] **Step 4: Run tests to verify all pass**

Run: `pnpm.cmd test`
Expected: PASS (all assertions green).

- [ ] **Step 5: Commit**

```bash
git add src/lib/locale.ts src/lib/locale.test.ts src/content/site.ts src/content/legal.ts
git commit -m "feat: add bilingual EN/ID locale routing and verified site + legal content"
```

---

### Task 3: Editorial Chrome (`SiteHeader`, `SiteFooter`, `CopyEmailButton`) & Home Pages (`/` and `/id`)

**Files:**
- Create: `src/components/copy-email-button.tsx`
- Create: `src/components/site-header.tsx`
- Create: `src/components/site-footer.tsx`
- Create: `src/components/portfolio-home.tsx`
- Create: `src/app/page.tsx`
- Create: `src/app/id/page.tsx`

**Interfaces:**
- Consumes: `Locale`, `getAlternateLocalePath`, `localizePath` from `src/lib/locale.ts`; `SITE_META`, `SITE_CONTENT` from `src/content/site.ts`; `Button`, `Separator`, `Table` from `src/components/ui/*`.
- Produces:
  - `SiteHeader({ locale, pathname }: { locale: Locale; pathname: string })`
  - `SiteFooter({ locale }: { locale: Locale })`
  - `CopyEmailButton({ email, label, copiedLabel, variant }: ...)`
  - `PortfolioHome({ locale }: { locale: Locale })`

- [ ] **Step 1: Implement `CopyEmailButton`, `SiteHeader`, and `SiteFooter`**

- `SiteHeader`: masthead layout with `Wahabdin Sangadji` wordmark, single-line `whitespace-nowrap` nav links (`Work`, `Hubz Publisher`, `Terms`, `Privacy`), square Specimen `EN | ID` segmented route links (active cell underlined `2px` ink), and mobile menu disclosure under `md:` (`< 768px`) so nothing wraps or overflows at `320px`.
- `SiteFooter`: mast layout with operator identity, `mailto:wahabdinn@gmail.com`, GitHub link, and explicit links to `/terms` and `/privacy` (plus localized counterparts).

- [ ] **Step 2: Implement `PortfolioHome` and route entrypoints (`src/app/page.tsx`, `src/app/id/page.tsx`)**

Sections in order per Hallmark draw `9e348e`:
1. **Stage Hero** (above the fold at `1280×800`, `Bodoni Moda` `h1` with subtle `--color-guide` baseline rule, role line without middle dots, one concise focus sentence, primary `Hubz Publisher` button + `CopyEmailButton` / `mailto`).
2. **Selected Work** (`01` Hubz Publisher, `02` Hubz Video as hairline-ruled rows, linking to `/apps/hubz-publisher`).
3. **Hubz Publisher Platform Specification Table** headed by `Separator variant="double"` (`3px double`), tabular `Geist Mono` limits, responsive `overflow-x-auto` wrapper, and inline links to `/terms` and `/privacy`.
4. **Practice & Stack** (2-column hairline layout on `md:`, 1-column on mobile: roles across IAI, administration, and full-stack development + core stack + GitHub link).

Attach `Metadata` with `alternates.canonical` and `alternates.languages` on both `/` and `/id`.

- [ ] **Step 3: Verify lint and static export build for `/` and `/id`**

Run: `pnpm.cmd lint && pnpm.cmd build`
Expected: 0 lint errors; `out/index.html` and `out/id.html` generated.

- [ ] **Step 4: Commit**

```bash
git add src/components/copy-email-button.tsx src/components/site-header.tsx src/components/site-footer.tsx src/components/portfolio-home.tsx src/app/page.tsx src/app/id/page.tsx
git commit -m "feat: build Specimen editorial chrome and bilingual home pages"
```

---

### Task 4: Hubz Publisher Product Pages & Legal Pages (`/apps/hubz-publisher`, `/terms`, `/privacy` + `/id/*`)

**Files:**
- Create: `src/components/hubz-publisher-page.tsx`
- Create: `src/components/legal-document-page.tsx`
- Create: `src/app/apps/hubz-publisher/page.tsx`
- Create: `src/app/id/apps/hubz-publisher/page.tsx`
- Create: `src/app/terms/page.tsx`
- Create: `src/app/id/terms/page.tsx`
- Create: `src/app/privacy/page.tsx`
- Create: `src/app/id/privacy/page.tsx`
- Create: `src/app/not-found.tsx`
- Test: `src/lib/static-export.test.ts`

**Interfaces:**
- Consumes: `Locale`, `localizePath`, `SITE_META`, `SITE_CONTENT`, `LEGAL_CONTENT`, `SiteHeader`, `SiteFooter`, `Button`, `Separator`, `Table`.
- Produces:
  - `HubzPublisherPage({ locale }: { locale: Locale })`
  - `LegalDocumentPage({ locale, doc }: { locale: Locale; doc: "terms" | "privacy" })`
  - 6 Next.js static route pages + `not-found.tsx` (for Cloudflare `404-page` handling).

- [ ] **Step 1: Implement `HubzPublisherPage` and `LegalDocumentPage`**

- `HubzPublisherPage`: Product summary, 4-step publishing workflow (Import → Compose → Schedule/Upload → Analytics & Auto-Comment), platform API & OAuth scope disclosure table (YouTube Data API v3, Meta Graph API v22, TikTok Login Kit & Content Posting API), local AES-256-GCM security architecture, and prominent links to `/terms`, `/privacy`, and `wahabdinn@gmail.com`.
- `LegalDocumentPage`: Clean editorial document layout (`max-w-[68ch]` reading measure), effective date, optional authoritative-English banner on `/id/terms` and `/id/privacy`, numbered section anchors, and direct contact footer.

- [ ] **Step 2: Wire all 6 static route pages + `src/app/not-found.tsx`**

Set exact canonical and `hreflang` metadata on each route (`/apps/hubz-publisher`, `/id/apps/hubz-publisher`, `/terms`, `/id/terms`, `/privacy`, `/id/privacy`).

- [ ] **Step 3: Build static export and add smoke test (`src/lib/static-export.test.ts`) pinning Review Focus #2**

Write `src/lib/static-export.test.ts` (skips cleanly if `out/` does not exist yet; when `out/` exists, asserts all 8 HTML files exist and `out/index.html`, `out/terms.html`, `out/privacy.html`, `out/apps/hubz-publisher.html` contain rendered `Wahabdin Sangadji`, `Hubz Publisher`, `wahabdinn@gmail.com`, `TikTok`, `YouTube`, `Meta`, and zero `TBD`/`Lorem`).

- [ ] **Step 4: Run build, tests, and lint**

Run: `pnpm.cmd build && pnpm.cmd test && pnpm.cmd lint`
Expected: All 8 static pages emitted to `out/`, all unit + static-HTML smoke tests PASS, 0 lint errors.

- [ ] **Step 5: Commit**

```bash
git add src/components/hubz-publisher-page.tsx src/components/legal-document-page.tsx src/app/apps/ src/app/terms/ src/app/privacy/ src/app/id/apps/ src/app/id/terms/ src/app/id/privacy/ src/app/not-found.tsx src/lib/static-export.test.ts
git commit -m "feat: add Hubz Publisher product pages and EN/ID legal documents"
```

---

### Task 5: Hallmark AI-Slop Sweep, Cloudflare Deployment README & Final Verification

**Files:**
- Create: `README.md`
- Modify: any `src/` file flagged by Hallmark `sloplint`

**Interfaces:**
- Consumes: built site in `src/` and `out/`.
- Produces: verified `0 FAIL` / `0` unwaived `REFLEX` Hallmark sweep + `README.md` documenting local dev, Cloudflare Pages / `wrangler deploy` binding for `wahabdinn.my.id`, and exact TikTok/Google/Meta Developer Portal URLs.

- [ ] **Step 1: Run Hallmark `sloplint` sweep on `src/`**

Run: `node C:\Users\habdinn\.gemini\config\plugins\design-presentations\skills\hallmark\scripts\sloplint.mjs src --genre editorial`
Expected: Identify and fix every `FAIL` and `REFLEX` finding until clean (0 FAIL, 0 unwaived REFLEX).

- [ ] **Step 2: Write concise Humanizer-checked `README.md`**

Document: local dev (`pnpm install`, `pnpm dev`, `pnpm test`, `pnpm build`), Cloudflare Pages deployment (`Build command: pnpm build`, `Output directory: out`, Custom domain `wahabdinn.my.id`) and optional `wrangler deploy`, plus copy-paste table of API portal URLs (`https://wahabdinn.my.id/apps/hubz-publisher`, `https://wahabdinn.my.id/terms`, `https://wahabdinn.my.id/privacy`).

- [ ] **Step 3: Run full final verification suite**

Run: `node C:\Users\habdinn\.gemini\config\plugins\design-presentations\skills\hallmark\scripts\sloplint.mjs src --genre editorial && pnpm.cmd lint && pnpm.cmd build && pnpm.cmd test`
Expected: `sloplint` 0 FAIL / 0 unwaived REFLEX, `eslint` 0 errors, `next build` emits all 8 static pages, all tests PASS.

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "docs: add Cloudflare deployment guide and finalize Hallmark sweep"
```
