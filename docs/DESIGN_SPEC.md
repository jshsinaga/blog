# Design Spec

## Site-wide visual identity

- The portfolio defines the visual identity: restrained neutral surfaces, generous spacing, light display typography, subtle italic emphasis, and thin borders.
- Use the same portfolio navbar and light/dark system on every route, including articles, tags, projects, about, and 404 pages.
- Keep the footer simple and centered. Keep the header clean, sticky, and readable.
- Use Figtree for interface text and JetBrains Mono for code and appropriate small details, as configured in the shared layout and CSS.
- Keep animations subtle, provide visible keyboard focus, and respect `prefers-reduced-motion`.

## Global theme and navigation

`global.css` is the source of truth for shared color tokens; do not redefine these only inside `.portfolio-page`.

| Token | Light | Dark |
| --- | --- | --- |
| `--folio-paper` | `#f9f9f8` | `#151717` |
| `--folio-ink` | `#202222` | `#eef0ef` |
| `--folio-muted` | `#707675` | `#a4aaa8` |
| `--folio-line` | `#dedfdd` | `#353b38` |

Page and navbar backgrounds must agree across routes. Cards, search, tag/filter controls, and the article table of contents use the same neutral palette; raised surfaces may use its secondary tones.

The shared navbar always contains **Jo**, Home, About, Projects, Blog, Contact, Let's Talk, search, and the theme toggle. Do not vary its appearance by route. Keep the navbar free of a bottom border. Mark the current route appropriately; Blog remains active on individual article routes. Homepage section links must work from other pages (`/#about`, `/#contact`).

Preserve the mobile menu and Escape-to-close behavior, search button ID `search-open`, and theme button ID `theme-toggle`. Theme selection uses the `dark` class on `<html>` and the saved `localStorage` preference. Default to the white/light theme when no selection is saved; never consult the system color scheme.

## Portfolio homepage

- `src/pages/index.astro` composes `PortfolioHero.astro`, `PortfolioAbout.astro`, `ProjectGallery.astro`, recent blog posts, and `PortfolioContact.astro`.
- Keep the hero portrait in a simple rounded rectangular frame, relatively narrow on desktop (currently 31% width). Do not restore an organic cutout shape or a small secondary photo/icon.
- The large hero image alternates between the portrait and logo with a smooth horizontal wipe. Preserve the pause/resume control and show a static photo under reduced motion. Do not replace this with blinking, flashing, or vertical squashing.
- Keep the existing section headings and the hero's developer role. Do not reintroduce the 01–04 timeline, decorative quotes such as “always a work in progress,” or small section labels such as “03 Selected work.”
- Homepage projects use an aligned grid: three columns on desktop, two on tablet, and one on mobile. Use compact 16:9 thumbnails with `object-fit: cover`, filling the thumbnail area without distortion or padded image mats. Do not use staggered or masonry positioning.
- Project data comes from `src/data/projects.ts`; the homepage displays a subset, while `/projects` displays the full archive. Preserve project and source-code links.
- Keep Contact in the same light/dark palette as the rest of the page, with restrained decoration.

## Blog archive and articles

### Archive (`/blogs`)

- Start with the original `Hero.astro`: **Joshua's Writings**, its `RunningText.astro` typing effect, and “Writing the journey of building, breaking, and learning in technology.”
- Immediately below the hero, retain All Posts, archive search, category filters, clear/reset, tag navigation, the empty state, and pagination.
- Sort published posts newest first.
- Keep archive search and filtering local to the post list. Navbar search is the separate Pagefind modal; preserve both.

### Article pages

Retain article content, featured images, tags, dates, table of contents, code-copy controls, image zoom, sharing, comments, and SEO. Article pages use the same navbar and theme as the portfolio.

Keep the table-of-contents open button below the sticky navbar. The open panel sits above the navbar and remains usable on mobile.

## Visual verification

For visual changes, inspect desktop and mobile in a browser, in both light and dark mode. Check horizontal overflow and affected interactions. Save browser screenshots under `output/playwright/`.

For global layout or theme changes, check the homepage, blog archive, an article, projects, about, tag index, a tag detail page, and the 404 page. A homepage fix does not prove other routes are correct.
