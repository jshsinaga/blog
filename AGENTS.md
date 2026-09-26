# AGENTS.md

Guide for agents working on Joshua Palti Sinaga's Astro portfolio and blog.

## Session workflow (read first)

At the start of every session, identify the user's mode. If the request is clear, announce the mode and continue; otherwise ask which mode they want:

1. **Create a blog post** - a session for writing or editing blog content.
2. **Develop** - a session for building or fixing the site itself.

How to behave:

- If the user picks **Create a blog post** (or their first message is clearly about writing a post), check the `./draft/` folder first. Existing drafts are the first option: ask whether to continue, edit, or publish one of them before offering to start a new post. Then read `BLOG_CREATE.md` and follow its workflow step by step.
- If the user picks **Develop** (or the message is clearly about the code, layout, or config), continue with the development guide below.
- If the mode is unclear, ask before doing any work.
- Do not silently choose a mode. When in doubt, ask.

## Project

Personal portfolio and blog built with Astro, Tailwind CSS v4, Astro Content Collections, and Bun. The homepage is the portfolio; `/blogs` is the blog archive.

Note: Astro is pinned to 7.2.0. Do not downgrade. Earlier 6.x versions fail to build this project.

Main folders:

- `src/pages` - routes and pages
- `src/components` - reusable Astro components
- `src/layouts` - page layouts
- `src/content/blogs` - Markdown blog posts
- `src/data` - site copy, links, SEO data
- `src/data/projects.ts` and `src/types/projects.ts` - project entries and their shared type
- `src/assets/blogs` - featured post images (optimized by astro:assets, see Images below)
- `src/assets/hero` - original portfolio portrait, optimized with `astro:assets`
- `src/utils` - helpers (formatDate, postSlug, tagSlug, postImage)
- `src/styles/global.css` - Tailwind, global light/dark palette, typography, and shared behavior
- `src/styles/portfolio.css` - homepage section and project-gallery styling; shared color tokens belong in `global.css`
- `public` - static assets (body screenshots, OG fallbacks, favicons)
- `public/img/projects` - project screenshots; `public/logo.png` - logo used in the hero
- `./draft/` - unpublished post drafts; checked first in content sessions (see Content creation below)

## Commands

Use Bun.

```bash
bun install
bun run dev
bun run check
bun run build    # also runs postbuild: pagefind --site dist
bun run preview
```

Before finishing changes, run:

```bash
bun run check
bun run build
```

`bun run build` also triggers `postbuild`, which generates the Pagefind search index into `dist/pagefind`. The site search (see below) only has an index after a build; in dev mode it shows a hint instead of results.

For visual changes, inspect desktop and mobile in a browser, including light and dark mode. Check for horizontal overflow and test affected interactions. Use a production preview after building when verifying Pagefind results. Save browser screenshots under `output/playwright/`.

For global layout or theme changes, check the homepage, blog archive, an article, projects, about, tag index, a tag detail page, and 404. Do not assume a homepage fix automatically applies to other routes.

## Coding standards

- Prefer Astro components for static UI.
- Use client JavaScript only when needed.
- Keep pages mostly static and fast.
- Use Tailwind utilities for styling.
- Keep component markup readable.
- Use clean, explicit code even when it is more verbose.
- Prefer small focused components.
- Keep public URLs stable, especially blog URLs.
- Use semantic HTML when possible.
- Add accessible labels for buttons and links with icons.
- Avoid adding large dependencies unless clear benefit exists.
- Keep dark mode classes paired with light mode classes.
- Use the shared `--folio-*` variables or themed `neutral-*` utilities. Avoid reintroducing separate gray/slate/zinc palettes for blog UI.
- Do not reintroduce Nuxt, Vue, Nuxt UI, or Nuxt config.
- The site does not use view transitions. If they are reintroduced, make sure document-level scripts and observers do not run more than once across navigations.

## Design standards

- The portfolio defines the site's visual identity: restrained neutral surfaces, generous spacing, light display typography, subtle italic emphasis, and thin borders.
- Apply the same navbar and light/dark color system on **every route**, including individual blog posts, tags, projects, about, and 404.
- Preserve the original blog hero and article reading layout while using the portfolio's shared colors and navbar. Do not restore the old blog navbar or separate white/slate page backgrounds.
- Footer should remain simple and centered.
- Header should remain clean, sticky, and readable.
- Use Figtree for interface text and JetBrains Mono for code/appropriate small details, as configured in the shared layout and CSS.
- Keep animations subtle, provide visible keyboard focus, and respect `prefers-reduced-motion`.

### Global theme and navigation

- `BaseLayout.astro` supplies the shared `Header.astro`, main content area, footer, fonts, metadata, and theme initialization.
- `Header.astro` always uses the portfolio navbar: **Jo**, Home, About, Projects, Blog, Contact, Let's Talk, search, and theme toggle. Do not condition this appearance on the current route.
- Mark the current route appropriately; Blog stays active on individual article routes. Links to homepage sections must work from other pages (`/#about`, `/#contact`).
- Preserve the mobile menu, Escape-to-close behavior, search button ID `search-open`, and theme button ID `theme-toggle`.
- Theme selection uses the `dark` class on `<html>`, the saved `localStorage` preference, and system preference when no selection is saved.
- `global.css` is the source of truth for these tokens; do not redefine them only inside `.portfolio-page`:

| Token | Light | Dark |
| --- | --- | --- |
| `--folio-paper` | `#f9f9f8` | `#151717` |
| `--folio-ink` | `#202222` | `#eef0ef` |
| `--folio-muted` | `#707675` | `#a4aaa8` |
| `--folio-line` | `#dedfdd` | `#353b38` |

- Page and navbar backgrounds must agree across routes. Cards, search, tag/filter controls, and the article TOC use the same neutral palette; raised surfaces may use its secondary tones.

### Portfolio homepage

- `src/pages/index.astro` composes `PortfolioHero.astro`, `PortfolioAbout.astro`, `ProjectGallery.astro`, recent blog posts, and `PortfolioContact.astro`.
- Keep the hero portrait at `src/assets/hero/joshua-mountains.jpg` and the alternate logo at `public/logo.png`. Render the portrait through `astro:assets` with responsive sizes.
- The hero uses a simple rounded rectangular frame with a relatively narrow desktop width (currently 31%). Do not restore the organic cutout shape or the small secondary photo/icon.
- The **large hero image** alternates between the portrait and logo with a smooth horizontal wipe. Preserve the pause/resume control and static photo under reduced motion. Do not substitute blinking, flashing, or vertical squashing.
- Do not reintroduce the 01–04 timeline, decorative quotes such as “always a work in progress,” or small section labels such as “03 Selected work.” Actual section headings and the hero's developer role remain.
- Homepage projects use an aligned grid: three columns on desktop, two on tablet, one on mobile. Use compact 16:9 thumbnails with `object-fit: cover`, filling the thumbnail area without distortion or padded image mats. Do not restore staggered/masonry positioning.
- Project data comes from `src/data/projects.ts`; the homepage shows a subset, while `/projects` shows the full archive. Preserve project and source-code links.
- Keep Contact in the same light/dark palette as the rest of the page, with restrained decoration.

### Blog archive and articles

- `/blogs` starts with the original `Hero.astro`: **Joshua's Writings**, its `RunningText.astro` typing effect, and “Writing the journey of building, breaking, and learning in technology.” This is the original blog-home hero preserved in Git history.
- Immediately below that hero, retain All Posts, archive search, category filters, clear/reset, tag navigation, empty state, and pagination. Keep published posts sorted newest first.
- Archive search/filtering is local to the post list; the navbar search is the separate Pagefind modal. Preserve both.
- Article pages retain their content, featured images, tags, dates, TOC, code-copy controls, image zoom, sharing, comments, and SEO. Their navbar and theme must match the portfolio.
- Keep the TOC open button below the sticky navbar. The open TOC panel must sit above the navbar and remain usable on mobile.

## Technical implementation

- **Search:** Pagefind indexes the site during `postbuild`, so search results exist only after `bun run build`. Keep the header search button id (`search-open`) synchronized with `SearchModal.astro`.
- **Images:** Store featured images under `src/assets/blogs/` using matching frontmatter paths. Fix unresolved image warnings, and keep post-body screenshots in `public` without deleting referenced files. See `BLOG_CREATE.md` for content-image rules.
- **Portfolio metadata:** Keep `public/portfolio-og.webp` and the portfolio title/description wired into the homepage and project archive. Do not overwrite article-specific metadata with portfolio defaults.
- **Tags:** Use `tagSlug()` for lowercase, hyphenated tag URLs and keep published tag slugs stable.
- **Code blocks:** Use normal fenced code blocks with language tags; `CodeBlockEnhancer.astro` adds labels and Copy buttons.
- **SEO and feeds:** Keep titles, descriptions, canonical URLs, RSS, sitemap, social images, and RSS auto-discovery working.

## Content creation

- Unfinished posts live in `./draft/` (one Markdown file per draft). Whenever the session mode is "Create a blog post", check `./draft/` first and offer existing drafts as the initial option before starting a new post.
- Publishing a draft means moving it from `./draft/` to `src/content/blogs` and applying `BLOG_CREATE.md` (next file number, frontmatter, featured image, tone, checklist, validation).
- All rules for writing blog posts (frontmatter, file naming, images, tone, structure, checklist, and validation) live in `BLOG_CREATE.md` at the project root. Read it and follow it whenever the session mode is "Create a blog post".

## Safety rules

- Do not delete content unless asked.
- Do not change existing blog URLs without asking.
- Do not expose secrets or commit `.env` files.
- Do not edit generated files in `dist`, `.astro`, or `node_modules`.
- Do not add tracking scripts without explicit approval.
- Preserve existing uncommitted work outside the task; do not reset or overwrite unrelated changes.
- After repeated failures, explain any proposed hacky workaround and its consequences, and ask before using it.
- Resolve any remaining unclear request with the user after completing independent authorized work, and suggest a relevant next step within the workflow.
