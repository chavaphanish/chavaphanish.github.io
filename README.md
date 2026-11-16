# Phanish Chava — Portfolio

A static personal portfolio for Phanish Chava, Ph.D., featuring semiconductor research, cryogenic electronics, compact modeling, device characterization, publications, and professional experience.

**Website:** [chavaphanish.github.io](https://chavaphanish.github.io/)

Built with HTML, CSS, and vanilla JavaScript. No framework, package installation, or build step is required.

## Features

- Dark and light themes with the selected theme saved locally.
- Publication filtering by journal or conference, plus search by title, venue, or year.
- Section navigation, scroll reveal animations, and professional profile links.
- Search and social metadata, structured data, and crawler configuration.

## Repository files

| File | Purpose |
| --- | --- |
| [`index.html`](index.html) | Page content, profile links, SEO metadata, and JSON-LD |
| [`styles.css`](styles.css) | Layout, visual styles, themes, and animations |
| [`script.js`](script.js) | Publication data, search and filters, theme switching, and scroll effects |
| [`assets/profile.jpg`](assets/profile.jpg) | Profile portrait and social preview image |
| [`sitemap.xml`](sitemap.xml) | Sitemap containing the public homepage |
| [`robots.txt`](robots.txt) | Crawler access rules and sitemap location |
| [`googlecb7a36b828542477.html`](googlecb7a36b828542477.html) | Google Search Console verification file; preserve its filename and contents |

## SEO configuration

The homepage includes a descriptive title and meta description, a canonical URL, index/follow directives, Open Graph metadata, and a Twitter summary card using the existing portrait.

Schema.org `Person` and `WebSite` JSON-LD describes the professional details shown on the page and links to existing LinkedIn, ORCID, and ResearchGate profiles. The Google Scholar link is a search query and is kept as a navigation link rather than a structured identity.

Keep structured data consistent with the visible content when updating professional details. If the public domain changes, update the canonical URL, social URLs, JSON-LD identifiers and URLs, sitemap, and sitemap location in `robots.txt` together. Add only real public pages to the sitemap; section anchors are not separate pages.

## Checks before publishing

- Run `node --check script.js` if Node.js is available and `git diff --check` to catch JavaScript syntax and whitespace errors.
- Verify that the homepage, stylesheet, script, portrait, sitemap, robots file, and Google verification file load successfully.
- Check publication search and both filters, section navigation, and theme switching after reloading.
- Check desktop and mobile layouts in both themes. For metadata-only changes, confirm that the rendered site remains unchanged.
- Parse JSON-LD as JSON and check its facts and profile links against the visible page. Confirm that canonical, social, sitemap, and robots URLs use the public website address.

There is no automated test suite or build command in this repository. The checks above are manual validation steps.

## Publish on GitHub Pages

1. Merge reviewed changes into `main` in `chavaphanish/chavaphanish.github.io`.
2. In **Settings → Pages**, use **Deploy from a branch**, with `main` and `/ (root)` selected.
3. Keep the site files, `assets/`, sitemap, robots file, and Google verification file at their existing paths.
4. After the Pages deployment completes, verify the public site at [https://chavaphanish.github.io/](https://chavaphanish.github.io/).

## Customize

- Profile image: `assets/profile.jpg`
- Publication data and links: `script.js`
- Main copy and profile links: `index.html`
- Theme and visual system: `styles.css`

The site intentionally does **not** contain a downloadable CV link.
