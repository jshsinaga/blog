# BLOG_CREATE.md

Guide for creating blog posts on this site, written in the site owner's voice.

Read this file at the start of any "create a blog post" session, before writing anything. Follow the workflow step by step and confirm with the user before moving to the next step.

## When to use this file

Use this file when the task is to create a new blog post or (partly) edit an existing one. For anything else, like site development, use `AGENTS.md`.

## Workflow (interactive, confirm per step)

Work in order and wait for the user's confirmation at each step. Do not jump ahead.

### Step 1: Ask what to write about

Ask the user for the topic, idea, or rough draft. If they only have a vague idea, help them shape it into one clear topic. One post, one topic.

### Step 2: Propose an outline

Before writing, present a short outline (title option, headings, and the point of the post). Keep it brief. Wait for approval or edits.

### Step 3: Write the draft

Once the outline is approved, write the full Markdown post in `src/content/blogs` following the rules below.

### Step 4: Review with the user

Show the finished post (or a summary). Ask whether it matches what they wanted. Offer to adjust tone, length, sections, or images.

### Step 5: Validate

Run the checks below and fix anything that fails before saying it is done.

## Where posts live

```txt
src/content/blogs
```

## Frontmatter

Use Markdown with frontmatter:

```md
---
title: Post title
date: 2026-05-01
description: Short friendly summary.
image: /path-to-image.png
alt: Helpful image alt text.
ogImage: /path-to-image.png
tags:
  - tag-one
  - tag-two
published: true
---
```

Fields:

- `title` - clear post title (required).
- `seoTitle` - optional, overrides the meta title if the title is too long for SEO.
- `date` - valid date, `YYYY-MM-DD`. Use the current date for new posts unless the user says otherwise.
- `description` - short and useful, fits SEO and preview cards (required).
- `seoDescription` - optional, overrides the meta description.
- `image` - required by default schema, falls back to `/not-found.jpg`.
- `alt` - real, descriptive alt text for the image.
- `ogImage` - optional, defaults to `image`.
- `tags` - lowercase or natural category form.
- `published` - `true` to show the post, `false` for drafts.

## File naming

- File names start with a number, then a dot, then slug text.
  - Example: `3.my-new-post.md`
- Use the next number in sequence. Check the existing files first (for example, if the highest is `3.`, the next is `4.`).
- Blog URL removes the leading number.
  - `3.my-new-post.md` becomes `/blogs/my-new-post`
- Do not change existing blog URLs: Giscus ties each comment thread to the page pathname.

## Images

- **Featured images** (the `image` frontmatter field, shown on post cards and headers) live in `src/assets/blogs/` and are optimized automatically (resize + WebP) by astro:assets.
- Keep the frontmatter `image` path mirroring the `src/assets/blogs` folder, without the `src/assets/blogs` prefix.
  - Example: file at `src/assets/blogs/4.my-post-slug/cover.png` -> `image: /4.my-post-slug/cover.png`
- Screenshots inside the post body can keep living in `public` and are referenced from root path (e.g. `/4.my-post-slug/shot1.png`). They are served as-is.
- `ogImage` is optional and defaults to `image`. Social previews are generated from the optimized featured image.
- Use real alt text that describes the image.
- Do not commit broken image paths. Check that each referenced image exists.

## Writing tone

Write posts in a casual, concise, and simple style. Sound like the site owner sharing with a friend.

House rules (non-negotiable):

- Use very few emojis, only for jokes or the closing section. One or two per post at most.
- Add one or two light jokes per post when they fit naturally. Keep them short, relevant to the topic, and never forced.
- Never use em dash characters (—). Use a regular dash or hyphen "-" instead.
- Briefly explain technical terms the first time they appear.
- Stay casual, concise, and simple. Short paragraphs, simple words.

Preferred style:

- Friendly and natural.
- Clear and practical.
- Curious and honest.
- A little playful is fine.
- Light jokes are welcome when they fit the flow. Use them like seasoning, not the main dish.
- Explain lessons like sharing with a friend.
- Keep paragraphs short.
- Use simple words when possible.
- Sound human, not corporate.

Avoid:

- Robotic GPT or LLM style.
- Overly polished marketing tone.
- Big claims without context.
- Too many buzzwords.
- Fake certainty.
- Long intros that delay the point.

Use normal punctuation. Prefer comma, period, colon, semicolon, or a regular hyphen "-" instead of em dash.

## Post structure (patterns from existing posts)

- Start with a friendly intro that explains why the topic matters, in one or two short paragraphs.
- Use `##` headings in a logical order. For how-to posts, use `## Step 1:` style headings like the existing guides.
- Include screenshots or images between steps with helpful alt text.
- Code blocks should have language tags (```bash, ```md, etc.) when possible.
- End with a short "why this is useful" section that wraps up the takeaway without overselling.
- Keep paragraphs short and the whole post scannable.

## Content quality checklist

Before saying a post is done:

- Title is clear.
- Date is valid.
- Description fits SEO and preview cards.
- Images exist in `public`.
- Alt text describes the image.
- Headings follow a logical order.
- Code blocks have language tags when possible.
- Links work.
- Tone feels relaxed and human.
- No em dash characters; use a regular dash "-".
- Very few emojis, only for jokes or the closing section.
- One or two light jokes present when the topic allows it.
- Technical terms are briefly explained.

## Validation

Before finishing, run:

```bash
bun run check
bun run build
```

Fix any errors that come up. If a screenshot or asset is missing, tell the user instead of silently skipping it.
