# Hubz Porto (`wahabdinn.my.id`)

Personal portfolio for **Wahabdin Sangadji** (Associate Partner Technology IAI, Admin, and Full-Stack Developer) and official public documentation portal for **Hubz Publisher**, built with Next.js 16 static export (`output: "export"`), `shadcn/ui`, and the Hallmark Specimen editorial system.

## Routes

| Route | Language | Purpose |
| --- | --- | --- |
| `/` | English (default) | Portfolio overview, selected work, and Hubz Publisher platform envelope |
| `/id` | Bahasa Indonesia | Indonesian portfolio overview |
| `/apps/hubz-publisher` | English | Dedicated Hubz Publisher specification and API scope page |
| `/id/apps/hubz-publisher` | Bahasa Indonesia | Indonesian Hubz Publisher page |
| `/terms` | English (authoritative) | Terms of Service for TikTok, Google, and Meta API review |
| `/id/terms` | Bahasa Indonesia | Indonesian translation of Terms of Service |
| `/privacy` | English (authoritative) | Privacy Policy for TikTok, Google, and Meta API review |
| `/id/privacy` | Bahasa Indonesia | Indonesian translation of Privacy Policy |

## Local Development

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

## Scripts

```bash
pnpm dev    # Start local Next.js dev server
pnpm lint   # Run ESLint
pnpm build  # Export all static routes into ./out
pnpm test   # Run unit tests + exported HTML smoke tests
```

## Deploy to Cloudflare (`wahabdinn.my.id`)

### Option A: Cloudflare Pages (Recommended)
1. Push this repository to GitHub (private or public).
2. In the Cloudflare Dashboard, open **Workers & Pages -> Create -> Pages -> Connect to Git** and select this repository.
3. Configure the build settings:
   - **Framework preset:** None (or Next.js Static HTML Export)
   - **Build command:** `pnpm build`
   - **Build output directory:** `out`
   - **Node version:** `22` (via environment variable `NODE_VERSION=22` if needed)
4. After the first deploy succeeds, open **Custom domains -> Set up a custom domain** and add `wahabdinn.my.id`. Because the zone is already managed by Cloudflare, DNS and SSL configure automatically.

### Option B: Cloudflare Workers Static Assets (`wrangler.jsonc`)
`wrangler.jsonc` is pre-configured to serve `./out` with `404-page` handling:

```bash
pnpm build
pnpm dlx wrangler deploy
```

Then attach `wahabdinn.my.id` under **Settings -> Domains & Routes** in Cloudflare.

## Developer Portal URLs (TikTok, Google, Meta)

Use these canonical English URLs once `https://wahabdinn.my.id` is live:

- **Website / App URL:** `https://wahabdinn.my.id/apps/hubz-publisher` (or `https://wahabdinn.my.id`)
- **Terms of Service URL:** `https://wahabdinn.my.id/terms`
- **Privacy Policy URL:** `https://wahabdinn.my.id/privacy`
- **Contact email:** `wahabdinn@gmail.com`

For TikTok domain verification, add the TXT record provided by the TikTok Developer Portal directly in your Cloudflare DNS dashboard for `wahabdinn.my.id`.
