# 0001 – Use Astro for Anemone website

## Status
Accepted

## Context
Anemone needs a fast, maintainable, Git-based website with versioned content,
SEO-friendly output, and simple initial hosting on GitHub Pages.

## Decision
Use Astro as the static site generator.
Use Markdown/MDX for content.
Deploy initially to GitHub Pages using GitHub Actions.

## Consequences
Positive:
- Low hosting complexity
- Fast static output
- Content stays versioned in Git
- Easy migration later to Azure or AWS

Negative:
- No built-in CMS initially
- Non-technical editing requires Git or a later editorial layer
