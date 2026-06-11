# Anemone Website

Static website for Anemone, built with Astro 6 and deployed to GitHub Pages.
The project prioritizes calm Nordic design, accessibility, fast loading, and a
small Git-based content workflow.

## Documentation

Start here before making changes:

- [Project context](docs/PROJECT_CONTEXT.md)
- [Roadmap](docs/ROADMAP.md)
- [Starting a Codex session](docs/CODEX_START.md)
- [Architecture decisions](docs/decisions/)

## Requirements

- Node.js 22.12 or newer
- npm

## Local development

```sh
npm ci
npm run dev
```

The development server normally runs at `http://localhost:4321`.

## Validation

```sh
npm run build
```

The static output is written to `dist/`.

## Deployment

Pushes to `main` are built and deployed through GitHub Actions. Production is
served from:

`https://ladevuser.github.io/Anemone-WebSite/`

The repository subpath is configured in `astro.config.mjs`. Keep internal links
and public asset references compatible with `import.meta.env.BASE_URL`.
