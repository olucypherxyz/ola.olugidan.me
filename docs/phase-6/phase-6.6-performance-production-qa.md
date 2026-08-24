# Phase 6.6 — Performance + production QA

## Status

PASS — ready to ship, with documented leftovers.

This was a production-readiness audit. Architecture, copy, motion, tokens, and 6.5 accessibility behaviour were not reopened.

## Method

Measured the **production** `next build` + `next start` (port 4036), not the webpack dev server.

## Measurements

| Area | Finding |
| --- | --- |
| Build | Static generation; 13 routes including `/sitemap.xml` |
| First-load JS (uncompressed, `/`) | ~473 KB (Next/React runtime; no extra animation libraries) |
| Portrait source | `ola-olugidan.png` 131 KB; served via `next/image` (`q=75`, responsive `w`) |
| Work screenshots | 45–95 KB each; not `priority` |
| Unused public binaries | Cutout 614 KB; template `app_logo` / `no_image`; not used on personal-site pages |
| Fonts | Instrument Serif, Manrope, IBM Plex Mono via `next/font`, `display: swap` |
| Source maps | Were on in production; now off |

Route probe (`next start`):

| Path | Status |
| --- | --- |
| `/` `/about` `/work` `/thinking` `/connect` `/transformation` `/homeschool-core` `/faith-community` | 200 |
| `/home` | 307 → `/` |
| `/robots.txt` `/sitemap.xml` | 200 |
| unknown path | 404 |

Security headers on probed routes: `X-Content-Type-Options: nosniff`, `X-Frame-Options: SAMEORIGIN`, `Referrer-Policy: strict-origin-when-cross-origin`.

## Findings and action

| Severity | Issue | Action |
| --- | --- | --- |
| P1 | No sitemap; robots had no sitemap URL | Added `src/app/sitemap.ts`; robots points at it |
| P1 | No `metadataBase`, canonical, Open Graph, or Twitter tags | Added using locked identity line + existing portrait (no new image) |
| P1 | `images.remotePatterns` allowed `hostname: '**'` plus stock CDNs | Local-only (`imageHosts = []`) |
| P2 | `productionBrowserSourceMaps: true` | Set `false` |
| P2 | Favicon metadata only referenced the SVG mark | Wired existing ico/png/apple/manifest files |
| P2 | No document security headers | Added the four headers above |
| P3 | Unused cutout and template images still in `public/` | Left in place; not linked from the personal site |
| P3 | `.env.example` describes a retired “Peer Signal” GitHub token | Unused; no `.env.local` required to run |
| P3 | `@netlify/plugin-nextjs` present, no `netlify.toml` | Documented; host not assumed |

## Fixes made

- Production metadata: `metadataBase` `https://ola.olugidan.me`, canonical, description from locked identity, OG/Twitter using the studio portrait already on the site
- `/sitemap.xml` for the eight product routes (not `/home`)
- `/robots.txt` Host + Sitemap
- Remote image allowlist emptied
- Production source maps disabled
- Baseline security headers
- Existing favicon set wired in `layout` metadata
- 404 title + `noindex`

## Left alone (already good)

- Portrait `priority` + `sizes` + CSS aspect-ratio
- Work images lazy by default
- No new animation libraries
- Pending/reserved copy
- 6.5 `aria-current`, theme names, focus ring
- `/home` redirect

## Runtime / console

Production homepage loaded with `document.readyState === complete`. LCP candidate is the Next image optimizer URL for the portrait. No `window` error hook fired during the check.

## Deployment readiness

The app is a static App Router site: `npm run build` then `npm start`, or a Next-aware host.

If deploying to Netlify, add the official Next runtime config around the existing `@netlify/plugin-nextjs` dependency. That file was **not** invented here because the live host is not confirmed.

Confirm DNS/`site.url` is `https://ola.olugidan.me` before go-live so OG and sitemap URLs match production.

## Regression checks

- Type check: PASS
- Lint: PASS
- Build: PASS

## Final verdict

PASS

The personal-site architecture was already proven in 6.2–6.5. 6.6 shows the **production artefact** can be indexed, shared, served with a bounded image pipeline, and given a real 404 — without filling reserved rooms or chasing Lighthouse with new pictures.

Next: Killcritic final audit (outside this implementation sequence).
