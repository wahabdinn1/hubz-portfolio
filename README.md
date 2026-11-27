# hubz-porto

Personal portfolio and public API legal portal for **Wahabdin Sangadji** at [wahabdinn.my.id](https://wahabdinn.my.id), built with Next.js 16 (static export), Tailwind CSS v4, and Neobrutalism UI components (Base UI + `lucide-react`).

## Routes & i18n

All routes export static English HTML by default so crawlers and developer-portal reviewers (TikTok, Google/YouTube, Meta) read full English content without JavaScript. Visitors can switch seamlessly between **EN** and **ID** in place via the client-side `I18nProvider` (`localStorage`-persisted, zero URL duplication).

- `/` — Portfolio overview, selected work (`Hubz Publisher`, `Hubz Video`), platform API specification, and stack
- `/apps/hubz-publisher` — Product specification, 4-step workflow, OAuth scopes, and local security architecture
- `/terms` — Official Terms of Service for `wahabdinn.my.id` and `Hubz Publisher`
- `/privacy` — Official Privacy Policy for `wahabdinn.my.id` and `Hubz Publisher`
- `/404` — Custom static 404 page (`out/404.html`)

## Local Development & Verification

```bash
pnpm install
pnpm dev
```

Run checks before deploying:

```bash
pnpm lint
pnpm build
pnpm test
```

## Deploy to Cloudflare

### Option A: Cloudflare Pages (Git integration)
1. Push this repository to GitHub.
2. Create a Cloudflare Pages project connected to the repo.
3. Build settings:
   - **Build command:** `pnpm build`
   - **Build output directory:** `out`
4. Attach custom domain `wahabdinn.my.id`.

### Option B: Direct Wrangler Deploy
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
