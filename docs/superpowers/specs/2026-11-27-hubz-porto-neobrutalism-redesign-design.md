# Hubz Porto: Neobrutalism Redesign

Date: 2026-11-27
Status: Approved in chat by the owner ("no, do it")
Supersedes: the visual sections of `2026-11-27-hubz-porto-design.md` (Hallmark `Specimen` theme). Routes, content, locale handling and Cloudflare static export stay as specified there.

## Why

The owner rejected the Specimen look (cream paper, Bodoni serif, hairline rules). It read as a printed broadsheet, not a developer's site. The owner asked for neobrutalism and delegated layout and visual decisions.

## Scope

- Replace every Hallmark / Specimen token, class and font. Hallmark `sloplint` is no longer a gate.
- Restyle all routes: `/`, `/id`, `/apps/hubz-publisher`, `/id/apps/hubz-publisher`, `/terms`, `/id/terms`, `/privacy`, `/id/privacy`, `404.html`.
- No new facts. `src/content/site.ts` and `src/content/legal.ts` keep their copy. Only UI labels are added (table-of-contents label).
- Fold in three deferred minors from the previous review: Meta optional comment scopes in the platform table, `aria-current` in the mobile nav, platform table rendered as stacked cards on small screens.
- Out of scope: dark mode, new pages, blog, analytics.

## Tokens

| Token | Value | Job |
|---|---|---|
| `--background` | `#E8EDFF` plus a 24px dot grid | Page ground (cool graph paper, deliberately not cream) |
| `--foreground`, `--border` | `#000000` | Text, 3px borders |
| `--shadow` | `5px 5px 0 0 #000` | Hard offset shadow, no blur |
| `--main` | `#FFD23F` | Primary CTA and hero name block only |
| `--coral` | `#FF7A5C` | Hubz Publisher identity |
| `--violet` | `#B79CFF` | Hubz Video identity |
| `--mint` | `#6EE7B7` | Legal pages and security points |
| `--secondary-background` | `#FFFFFF` | Card surfaces and long-form text |

Radius `10px` (`rounded-base`). Light mode only.

## Type

- Archivo (variable weight and width) for headings and body. Headings `800` at `wdth 112`; body `400`/`500`.
- JetBrains Mono only for literal API identifiers (OAuth scopes).

## Components

Installed through the shadcn CLI from the neobrutalism.dev registry (Base UI build, matches the project):
`pnpm dlx shadcn@latest add https://neobrutalism.dev/r/styling/yellow.json` and `button`, `card`, `badge`, `table`, `marquee`. The palette is then overridden with the tokens above. `separator.tsx` is removed.

## Layout

Home:
1. Header: black `WS` monogram plus name, nav as bordered pills, EN/ID segmented toggle, yellow Email button. Mobile: menu button opens a bordered panel with `aria-current`.
2. Hero bento: large yellow block with the name, statement and two CTAs; right column holds a white roles card and a black GitHub card.
3. Marquee band of the four platforms and core stack. Static when `prefers-reduced-motion: reduce`.
4. Selected work: two project cards side by side, coloured header strip (coral, violet), summary, stack as badges, link to the product page for Hubz Publisher.
5. Platform envelope: bordered table on `md+`, one card per platform below `md`. Links to Terms and Privacy.
6. Practice: roles card, core tools card with badges, GitHub CTA card.
7. Footer: black block, white text, legal links as bordered buttons.

Product page: coral header block with title, subtitle and legal CTAs; four workflow steps as numbered cards (the content is a real sequence); platform table/cards; security points as a mint checklist; legal CTA card.

Legal pages: one white document card on the dotted ground, 70ch measure, mint summary header, authority notice as a yellow note, sticky table of contents on `lg+`.

404: tilted "404" sticker, heading, two buttons.

## Motion

- Buttons and clickable cards sink into their shadow on hover and press (`translate` by the shadow offset, shadow removed). User-triggered only.
- One ambient motion: the marquee. No scroll-triggered entrances.

## Verification

- `pnpm lint`, `pnpm build`, `pnpm test` exit 0.
- Static export test updated: asserts no Specimen leftovers (`font-display`, `editorial-link`, `Bodoni`) and the existing route, lang and title checks.
- Playwright screenshots of `/`, `/apps/hubz-publisher`, `/privacy` at 375px, 768px and 1280px, reviewed for overflow and contrast.
