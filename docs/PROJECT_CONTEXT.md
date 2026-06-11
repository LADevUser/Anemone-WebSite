# Anemone Website: Project Context

## Project purpose

This repository contains the public Anemone website. It is a small, static,
Git-based site for presenting Anemone's direction, projects, journal entries,
philosophy, and ways to contribute.

The current objective is a stable internal-demo foundation that can grow
carefully without adding operational complexity.

## Current technical stack

- Astro 6
- TypeScript with Astro's strict configuration
- Astro Content Collections for Markdown content
- Plain CSS with shared design tokens
- Static HTML output
- Node.js 22 or newer (`>=22.12.0`)
- npm and the committed `package-lock.json`

Astro is currently the only runtime dependency. There is no client framework
and no required browser-side JavaScript.

## Hosting and deployment

The site is hosted on GitHub Pages at:

`https://ladevuser.github.io/Anemone-WebSite/`

Deployment is handled by `.github/workflows/deploy.yml`:

1. Pushes to `main` trigger the workflow.
2. GitHub Actions installs dependencies with `npm ci`.
3. Astro builds the static site into `dist/`.
4. The Pages artifact is uploaded and deployed.

`astro.config.mjs` defines both the production `site` and the
`/Anemone-WebSite` base path. Internal links and public asset URLs must respect
`import.meta.env.BASE_URL`; root-relative URLs such as `/branding/logo.svg`
break when deployed under the repository subpath.

## Current site structure

Primary navigation:

- Home: `/`
- Vision: `/vision/`
- Projekt: `/projekt/`
- Journal: `/journal/`
- Filosofi: `/filosofi/`
- Bidra: `/delta/`

The visible label is **Bidra**, but the route intentionally remains `/delta/`
for now.

Key implementation areas:

- `src/layouts/BaseLayout.astro`: document shell, metadata, header, and footer
- `src/components/`: shared header and footer
- `src/pages/`: static pages and collection-backed routes
- `src/styles/`: global styles and design tokens
- `src/content/`: Markdown journal and project content
- `public/branding/`: logo, mark, favicon, hero artwork, and social-card assets

Journal and project detail pages are generated statically from
`src/pages/journal/[slug].astro` and `src/pages/projekt/[slug].astro`.

## Design principles

The visual identity should feel like a Nordic botanical journal:

- Calm, spacious, and editorial
- Warm white rather than pure white
- Forest green text and restrained natural accents
- Vitsippa (*Anemone nemorosa*) as the botanical symbol
- Accessible contrast and visible keyboard focus
- Responsive layouts without heavy interaction
- Quiet confidence rather than startup or SaaS presentation

Current core colors are defined in `src/styles/tokens.css`:

- Background: `#F7F8F3`
- Soft background: `#EEF2EA`
- Primary text: `#1E3A2F`
- Secondary text: `#526658`
- Accent: `#8FAF8A`
- Warm border: `#C8B89A`
- Gold detail: `#D4B437`

The site uses system font stacks. The older typography names in decision record
`0002` describe an intended direction, not externally loaded fonts in the
current implementation.

## Content architecture

Content Collections are configured in `src/content.config.ts`, which is the
Astro 6 configuration location.

### Journal

Stored in `src/content/journal/*.md`.

Required frontmatter:

- `title`: string
- `description`: string
- `pubDate`: date
- `draft`: boolean, defaults to `false`

Public entries are sorted newest first. Draft entries are excluded from both
the listing and generated detail routes.

### Projects

Stored in `src/content/projects/*.md`.

Required frontmatter:

- `title`: string
- `description`: string
- `status`: string
- `order`: number
- `draft`: boolean, defaults to `false`

Optional frontmatter:

- `audience`: string
- `focus`: string

Public projects are sorted by `order`. Projects with both optional fields use a
summary information card on the detail page; other projects retain the simple
status and description header.

Content is currently written primarily in Swedish. Slugs come from Markdown
filenames and should remain stable after publication.

## Important constraints

- Keep the site static, fast, accessible, and SEO-friendly.
- Keep dependencies minimal and justify any new dependency.
- Do not add Tailwind.
- Do not add React, Vue, or another client framework.
- Do not add a CMS, database, analytics, search, tags, or pagination for now.
- Do not add heavy JavaScript or animation libraries.
- Preserve GitHub Pages base-path support.
- Preserve the established branding assets unless an explicit design task
  changes them.
- Prefer existing Astro, Markdown, and CSS patterns over new abstractions.
- Run `npm run build` after changes.

## Current project phase

The project is in the **content foundation and internal demo** phase.

Completed foundations include static deployment, branding integration,
responsive global styling, navigation, journal and project collections, and
initial Swedish demonstration content. Vision, Filosofi, and Bidra still
contain placeholder-level content.

Anemone OS and Anemone Spatial System are presented as active Proof of Concept
initiatives, not finished products.

## Known conventions

- Branches use names such as `v1/content-foundation`.
- Deployment occurs from `main`; feature branches are merged before release.
- Use trailing slashes in internal route URLs.
- Build internal URLs with the configured Astro base path.
- Use semantic headings; the detail template already renders the page `<h1>`,
  so Markdown bodies should normally begin with `##`.
- Use `draft: true` to keep collection content out of listings and static
  routes.
- Use `order` to control project listing order.
- Keep visible labels independent from legacy route names when necessary, as
  with Bidra at `/delta/`.
- Do not depend on local Codex conversation history. Record durable decisions
  in the repository.
