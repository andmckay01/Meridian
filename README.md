# Meridian Ventures · 2025 archive

The original Meridian website, prepared for **https://mckayanderson.net/meridian/**.
The design, intro animation, interactive globe, investment filters, team biographies,
testimonials, and articles are preserved from this repository's 2025 snapshot.

This is a static export: production needs only a host that serves HTML, CSS,
JavaScript, images, and fonts. It needs no Next.js server, Cloudflare Worker,
database, API keys, or environment files.

## Build and preview

Use Node.js 22+ and Bun 1.3.6.

```sh
bun install --frozen-lockfile
bun run lint
bun run typecheck
bun run build
bun run check:archive
bun run preview
```

Open **http://127.0.0.1:3000/meridian/**. The preview serves the actual production
files, including the subdirectory and trailing-slash redirect. Set `PORT=3001`
when port 3000 is already in use. Run `bun run dev` for development at the same path.

`check:archive` checks exported HTML and CSS asset references, social images, globe
textures, the canonical URL, and the removal of retired service endpoints.

## Add it to mckayanderson.net

After `bun run build`, the ready-to-copy folder is:

```text
dist/
  meridian/
    index.html
    404.html
    _next/
    ...original images, fonts, and other assets
```

1. Copy **`dist/meridian/`** into the personal website's public/static directory
   as **`meridian/`**. Copy the entire folder, including `_next/`. Do not place
   Meridian's files at the personal site's root.
2. Add a project link to `/meridian/` wherever it belongs on the personal site.
3. Configure the host to serve these files before any parent-site routing or SPA
   fallback. `/meridian/` must serve `meridian/index.html`; `/meridian` must redirect
   to `/meridian/`. If needed, scope the archive's 404 page to `/meridian/*`.
4. Publish the personal site through its normal deployment workflow. This
   repository's build and preview commands do not publish anything.

The site can also be served separately and proxied at `/meridian/`; the proxy must
forward the entire `/meridian/*` subtree, including its own `_next/` files. Keep
the prefix when serving `dist/`, or strip it when serving the raw `out/` directory.
Do not send Meridian's assets to the parent site's Next.js runtime.

The personal site's hosting provider is intentionally not assumed. The archive is
portable across static hosting providers; no DNS change is needed for a subpath.
When copying a new build, replace the archive folder as a whole so its HTML and
hashed assets come from the same build.

## Use another location

Both values are public **build-time** settings. Pass them to the build command;
no `.env` file is needed. Rebuild before moving the archive.

```sh
# Another path on the personal site:
NEXT_PUBLIC_BASE_PATH=/projects/meridian bun run build

# A standalone subdomain, served from its root:
NEXT_PUBLIC_BASE_PATH='' NEXT_PUBLIC_SITE_ORIGIN=https://meridian.mckayanderson.net bun run build
```

For the first example, copy `dist/projects/meridian/` to the matching parent-site
directory. For the subdomain, publish the contents of `dist/` as its document root.
`bun run preview` and `bun run check:archive` use the settings recorded by the last
build, so the variables do not need to be repeated for those commands.

[`site.config.mjs`](site.config.mjs) is the shared source for the hosting path,
canonical URL, and public asset paths. Next.js applies `basePath` to its own bundles;
`assetPath()` prefixes the original images and globe textures. See the official
[static export](https://nextjs.org/docs/app/guides/static-exports) and
[basePath](https://nextjs.org/docs/app/api-reference/config/next-config-js/basePath)
documentation for the hosting model.

## Archive behavior

- The original footer is preserved, with the copyright year fixed at 2025.
- Google Analytics, reCAPTCHA, the expired live team-verification request, and the
  original Cloudflare deployment commands have been removed.
- Both fonts are bundled at build time. The original Baskerville asset remains in
  `public/fonts/`; Libre Franklin comes from the locked Fontsource package. Visitors
  do not need Google Fonts or Meridian's old services to view the project. Libre
  Franklin's license is included at `public/fonts/Libre-Franklin-OFL.txt`.
- Contact, investor-login, company, social, and article links retain their original
  destinations. They leave the archive, and their availability may change over time.
- Content is the repository snapshot, not a claim about Meridian's current team,
  investments, or activities. No live verification result is fabricated.

## Before publishing

In addition to the checks above, preview desktop and mobile layouts, let the intro
finish, navigate to each section, switch both funds, open a team biography and the
contact modal, and close them with their controls and Escape. Check that the globe,
logos, headshots, fonts, and share image load under the intended hosting path.
