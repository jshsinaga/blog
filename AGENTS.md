# AGENTS.md

Guide for agents working on this Astro blog.

## Session workflow (read first)

At the start of every session, ask the user which mode they want:

1. **Create a blog post** - a session for writing or editing blog content.
2. **Develop** - a session for building or fixing the site itself.

How to behave:

- If the user picks **Create a blog post** (or their first message is clearly about writing a post), check the `./draft/` folder first. Existing drafts are the first option: ask whether to continue, edit, or publish one of them before offering to start a new post. Then read `BLOG_CREATE.md` and follow its workflow step by step.
- If the user picks **Develop** (or the message is clearly about the code, layout, or config), continue with the development guide below.
- If the mode is unclear, ask before doing any work.
- Do not silently choose a mode. When in doubt, ask.

## Project

Personal blog built with Astro, Tailwind CSS, Astro Content Collections, and Bun.

Note: Astro is pinned to 7.2.0. Do not downgrade. Earlier 6.x versions fail to build this project.

Main folders:

- `src/pages` - routes and pages
- `src/components` - reusable Astro components
- `src/layouts` - page layouts
- `src/content/blogs` - Markdown blog posts
- `src/data` - site copy, links, SEO data
- `src/assets/blogs` - featured post images (optimized by astro:assets, see Images below)
- `src/utils` - helpers (formatDate, postSlug, tagSlug, postImage)
- `src/styles/global.css` - global Tailwind and CSS
- `public` - static assets (body screenshots, OG fallbacks, favicons)
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

## Coding standards

- Prefer Astro components for static UI.
- Use client JavaScript only when needed.
- Keep pages mostly static and fast.
- Use Tailwind utilities for styling.
- Keep component markup readable.
- Prefer small focused components.
- Keep public URLs stable, especially blog URLs.
- Use semantic HTML when possible.
- Add accessible labels for buttons and links with icons.
- Avoid adding large dependencies unless clear benefit exists.
- Keep dark mode classes paired with light mode classes.
- Do not reintroduce Nuxt, Vue, Nuxt UI, or Nuxt config.
- The site does not use view transitions. If they are reintroduced, make sure document-level scripts and observers do not run more than once across navigations.

## Design standards

- Preserve current visual identity.
- Match existing spacing, typography, colors, and responsive behavior.
- Blog pages should stay close to original Nuxt design.
- Footer should remain simple and centered.
- Header should remain clean, sticky, and readable.
- Prefer calm neutral colors.
- Keep animations subtle.

## Technical implementation

- **Search:** Pagefind indexes the site during `postbuild`, so search results exist only after `bun run build`. Keep the header search button id (`search-open`) synchronized with `SearchModal.astro`.
- **Images:** Store featured images under `src/assets/blogs/` using matching frontmatter paths. Fix unresolved image warnings, and keep post-body screenshots in `public` without deleting referenced files. See `BLOG_CREATE.md` for content-image rules.
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
