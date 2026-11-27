# hubz-portfolio

Personal portfolio and public API legal portal for **Wahabdin Sangadji**, published at [wahabdinn.my.id](https://wahabdinn.my.id).

- **Repository:** [github.com/wahabdinn1/hubz-portfolio](https://github.com/wahabdinn1/hubz-portfolio)
- **Live domain:** `https://wahabdinn.my.id`
- **Contact:** `wahabdinn@gmail.com`

## Stack & Design

- **Framework:** Next.js 16 (App Router, `output: "export"`) + React 19 + TypeScript
- **Styling & UI:** Tailwind CSS v4, Neobrutalism components (`neobrutalism.dev` registry on `@base-ui/react`), `lucide-react`, custom GitHub SVG icon
- **Typography:** `Archivo` (variable display & body) and `JetBrains Mono` (OAuth scope codes)
- **Accessibility & polish:** `prefers-reduced-motion` support, hover/focus pause plus dedicated pause/play dock on the marquee, explicit `:focus-visible` and `:active` states, single-row desktop footer, responsive mobile cards for platform specs

## Routes & Client i18n

Every route exports static English HTML by default (`<html lang="en">`) so crawlers and developer-portal reviewers (TikTok, Google/YouTube, Meta) read full English content without JavaScript. Visitors can toggle between **EN** and **ID** in place from the header via `I18nProvider` (`localStorage`-persisted, zero duplicate `/id/*` URLs).

| Route | Exported file | Purpose |
| --- | --- | --- |
| `/` | `out/index.html` | Portfolio overview, selected work (`Hubz Publisher`, `Hubz Video`), platform API table, roles, and stack |
| `/apps/hubz-publisher` | `out/apps/hubz-publisher.html` | Product specification, 4-step workflow, OAuth scopes, and local security architecture |
| `/terms` | `out/terms.html` | Terms of Service for `wahabdinn.my.id` and `Hubz Publisher` |
| `/privacy` | `out/privacy.html` | Privacy Policy for `wahabdinn.my.id` and `Hubz Publisher` |
| `/404` | `out/404.html` | Custom static 404 page |

## Local Development & Verification

```bash
pnpm install
pnpm dev
```

Run checks before pushing or deploying:

```bash
pnpm lint
pnpm build
pnpm test
```

## Deploy to Cloudflare

### Cloudflare Pages (Git integration)
1. Connect [wahabdinn1/hubz-portfolio](https://github.com/wahabdinn1/hubz-portfolio) in Cloudflare Pages.
2. Set the build configuration:
   - **Build command:** `pnpm build`
   - **Build output directory:** `out`
3. Attach the custom domain `wahabdinn.my.id`.

### Direct Wrangler Deploy
```bash
pnpm build
npx wrangler deploy
```

## Developer Portal URLs (TikTok / Google / Meta)

- **App Name:** `Hubz Publisher`
- **Website URL:** `https://wahabdinn.my.id/apps/hubz-publisher`
- **Terms of Service URL:** `https://wahabdinn.my.id/terms`
- **Privacy Policy URL:** `https://wahabdinn.my.id/privacy`
- **TikTok Domain Verification:** Add the `TXT` record issued by TikTok for Developers directly in Cloudflare DNS for `wahabdinn.my.id`.
