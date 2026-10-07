# AGENTS.md

Project-wide rules for working in this repository. Focused project guidance lives in `docs/`; read the relevant spec before changing that area.

## Specs

- `docs/PROJECT_SPEC.md`: project structure, implementation contracts, coding conventions, and development checks.
- `docs/DESIGN_SPEC.md`: visual system, shared navigation, and page-specific UI requirements. Read for visual or interaction changes.
- `docs/BLOG_WRITING_SPEC.md`: blog drafting, publishing, content, and validation. Read for blog-writing tasks; it defines the draft-first workflow.

If a relevant spec is missing or conflicts with the request, surface the conflict rather than silently guessing.

## 1. Understand the task

- Identify the task path and state it briefly when the request is clear.
- Define what success means before making changes.
- Ask a focused question when a material decision cannot be resolved from the request, repository, or specs.
- For multi-step work, share a short plan and verify each meaningful outcome.

## 2. Simplicity (KISS + YAGNI)

- Make the smallest change that fully solves the request.
- Avoid unrequested features, options, dependencies, abstractions, and fallbacks.
- Prefer straightforward, readable code over patterns that add indirection.

## 3. Reuse (DRY)

- Look for an existing implementation or convention before adding another.
- Reuse existing helpers and components where they fit; avoid duplicated behavior.

## 4. Fix causes, not symptoms

- Address the underlying problem instead of suppressing its visible symptom.
- Keep errors visible; do not swallow failures or hide them behind defaults.
- If a genuine blocker remains, explain it and the available choices instead of adding a workaround that changes behavior.

## 5. Keep changes focused

- Touch only what the request requires and follow the existing style.
- Preserve unrelated user work; do not reset, overwrite, or clean up changes outside the task.
- Leave unrelated issues alone and mention them only when useful.
- Ask before destructive or irreversible changes that the request does not clearly authorize.

## 6. Verify and report

- Exercise the changed behavior with an appropriate check, build, or run before calling the work done.
- Report what changed and what was actually verified; identify any remaining limitation plainly.

## Interaction

- Use the interactive questioning tool when user input is genuinely needed, and include a recommended option when there are viable alternatives.
