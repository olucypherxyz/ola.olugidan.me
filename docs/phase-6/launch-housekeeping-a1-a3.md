# Launch housekeeping A1–A3

Phase 6 product work remains closed. This pass only addressed deploy leftovers.

```text
A2  UNUSED ASSETS     DONE
A3  NETLIFY PLUGIN    DEFERRED (host unconfirmed)
A1  DNS / LIVE HOST   OPEN — do this at the registrar/CDN before GO LIVE
```

No CREATE / TRANSFORM / SERVE / Thinking / Homeschool copy was added.

---

## A2 — Unused assets (done)

Confirmed the live App Router does not import `src/sections/*`. Those files are leftover recruiter sections.

Removed from `public/` after confirming they were not used by personal-site pages:

| File | Size | Notes |
| --- | --- | --- |
| `public/assets/about/ola-olugidan-cutout.png` | 628,515 | Studio cutout; not the production portrait |
| `public/assets/images/app_logo.png` | 90,899 | Template leftover |
| `public/assets/images/no_image.png` | 809 | Template leftover |

Left in place:

- `public/assets/about/ola-olugidan.png` (production portrait / OG image)
- Verified work screenshots
- Favicon set and `o-mark.svg`

`portraitCutoutSrc` was removed from `src/config/portfolio.ts` so the evidence store does not point at a deleted file. Unused Hero/About sections now fall back to `portraitSrc` only, so type-check still holds if those files are compiled.

---

## A3 — Netlify plugin (deferred)

Repo facts:

- `@netlify/plugin-nextjs` is in `package.json` `devDependencies`
- There is **no** `netlify.toml`
- There is **no** `vercel.json`
- `.gitignore` includes `.vercel/` (local Vercel residue, not a confirmed host)

The live host is **not** confirmed. Per the launch rule, the plugin was **not** removed and no Netlify config was invented.

When the host is known:

- **Netlify:** add the official Next runtime config around the existing plugin; do not guess the rest of the Netlify UI.
- **Anywhere else:** `npm uninstall @netlify/plugin-nextjs` and leave the rest of the Next config as-is.

---

## A1 — DNS (open)

Public DNS (Google resolver, 20 Aug 2026):

| Query | Result |
| --- | --- |
| `ola.olugidan.me` A | NXDOMAIN (status 3) |
| `ola.olugidan.me` AAAA | NXDOMAIN |
| `ola.olugidan.me` CNAME | NXDOMAIN |
| Apex `olugidan.me` SOA | Cloudflare (`keyla.ns.cloudflare.com`) |

`https://ola.olugidan.me` does not resolve yet. Browser load ended on a Chrome network-error page. Do not announce OG or sitemap URLs until an A/AAAA/CNAME for `ola` is published and the Next build is attached to that hostname.

### Code-side host (already correct; verified on local production `http://localhost:4036`)

| Surface | Value |
| --- | --- |
| Canonical | `https://ola.olugidan.me/` |
| `og:url` | `https://ola.olugidan.me` |
| `og:image` / `twitter:image` | `https://ola.olugidan.me/assets/about/ola-olugidan.png` |
| `og:description` / Twitter | `Technology · Transformation · Education · Service` |
| Sitemap locs | eight product routes under `https://ola.olugidan.me` (`/home` not listed) |
| `robots.txt` | `Host: ola.olugidan.me` + `Sitemap: https://ola.olugidan.me/sitemap.xml` |

Those absolute URLs will be right **once** DNS and the deployment host match `site.url`.

### What to do at Cloudflare before GO LIVE

1. Point `ola.olugidan.me` at the chosen host (A/AAAA or CNAME).
2. Attach this Next app to that hostname.
3. Repeat the live smoke test on the public origin (core routes, specialists, theme, menu, images, outbound links, sitemap, robots, canonical, OG/Twitter).
4. Then announce.

---

## Next in the launch sequence

```text
Deploy housekeeping A1–A3
        ↓
Production deployment  ← waiting on host + DNS
        ↓
Live smoke test
        ↓
GO LIVE
```
