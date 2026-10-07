# Project Spec

## Product and stack

This is Joshua Palti Sinaga's personal portfolio and blog, built with Astro, Tailwind CSS v4, Astro Content Collections, and Bun. The homepage is the portfolio; `/blogs` is the blog archive.

Astro is pinned to 7.2.0. Keep that version: earlier 6.x releases fail to build this project.

## Project map

- `src/pages` - routes and pages.
- `src/components` - reusable Astro components.
- `src/layouts` - page layouts.
- `src/content/blogs` - Markdown blog posts.
- `src/data` - site copy, links, and SEO data.
- `src/data/projects.ts` and `src/types/projects.ts` - project entries and their shared type.
- `src/assets/blogs` - featured post images, optimized with `astro:assets`.
- `src/assets/hero` - original portfolio portrait, optimized with `astro:assets`.
- `src/utils` - helpers such as `formatDate`, `postSlug`, `tagSlug`, and `postImage`.
- `src/styles/global.css` - Tailwind, global light/dark palette, typography, and shared behavior.
- `src/styles/portfolio.css` - homepage sections and project-gallery styling; shared color tokens belong in `global.css`.
- `public` - static assets such as post-body screenshots, Open Graph fallbacks, and favicons.
- `public/img/projects` - project screenshots.
- `public/logo.png` - alternate hero image.
- `draft/` - unpublished post drafts, one Markdown file per draft.

## Development commands and checks

Use Bun:

```bash
bun install
bun run dev
bun run check
bun run build
bun run preview
```

Before finishing site changes, run `bun run check` and `bun run build`. The build runs `postbuild` (`pagefind --site dist`) and generates the Pagefind index in `dist/pagefind`. Navbar search results are available after a build; in development, the search modal shows a hint instead of results. Use a production preview when verifying Pagefind results.

## Implementation conventions

- Prefer Astro components for static UI; use client JavaScript only when needed.
- Keep pages mostly static and fast. Use Tailwind utilities and keep component markup readable.
- Prefer small, focused components and clean, explicit code.
- Use semantic HTML and accessible labels for icon-only buttons and links.
- Avoid large dependencies unless there is a clear benefit.
- Pair dark-mode classes with light-mode classes.
- Use the shared `--folio-*` variables or themed `neutral-*` utilities; do not add separate gray/slate/zinc palettes for blog UI.
- Do not reintroduce Nuxt, Vue, Nuxt UI, or Nuxt configuration.
- The site does not use view transitions. If they are added, ensure document-level scripts and observers do not run more than once across navigations.

## Site implementation contracts

### Shared layout and navigation

`BaseLayout.astro` supplies the shared `Header.astro`, main content area, footer, fonts, metadata, and theme initialization. Visual and interaction requirements for the shared shell are in `DESIGN_SPEC.md`.

### Search

Pagefind indexes the site during `postbuild`. Keep the header search button ID `search-open` synchronized with `SearchModal.astro`. The navbar search is separate from the local archive search and filters.

### Images and content

- Featured blog images live in `src/assets/blogs/`, use matching frontmatter paths, and are optimized by `astro:assets`.
- Keep post-body screenshots in `public`; do not remove files referenced by posts.
- Follow `BLOG_WRITING_SPEC.md` for authoring, frontmatter, image path, and content rules. Fix unresolved image warnings and check that referenced assets exist.
- The portfolio portrait is `src/assets/hero/joshua-mountains.jpg`; render it through `astro:assets` with responsive sizes. The alternate hero logo is `public/logo.png`.

### Portfolio and article metadata

- Keep `public/portfolio-og.webp` and the portfolio title and description wired to the homepage and project archive.
- Preserve article-specific metadata; do not replace it with portfolio defaults.
- Keep titles, descriptions, canonical URLs, social images, RSS, sitemap, and RSS auto-discovery working.

### Tags and code blocks

- Use `tagSlug()` to produce lowercase, hyphenated tag URLs. Keep published tag slugs stable.
- Use normal fenced code blocks with language tags; `CodeBlockEnhancer.astro` adds labels and Copy buttons.

## Safety and preservation

- Do not expose secrets or commit `.env` files.
- Do not edit generated files in `dist`, `.astro`, or `node_modules`.
- Do not add tracking scripts without explicit approval.
- Keep public URLs stable, especially blog URLs. Do not change an existing blog URL without asking.
- Do not delete blog content unless asked. Keep referenced post-body images in place.
