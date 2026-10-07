import type { ImageMetadata } from 'astro';

// Eagerly imports every post image under src/assets/blogs so the build can
// optimize (resize + convert to WebP) them via astro:assets.
// Frontmatter `image` paths are stored mirroring this folder, e.g.:
//   image: /2.agent-clock-comparison/image2.png
//   -> file: src/assets/blogs/2.agent-clock-comparison/image2.png
const imageModules = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/blogs/**/*.{png,jpg,jpeg,webp,avif}',
  { eager: true }
);

const imageMap: Record<string, ImageMetadata> = {};
for (const [path, mod] of Object.entries(imageModules)) {
  imageMap[path] = mod.default;
}

/**
 * Returns the optimized ImageMetadata for a frontmatter image path, or undefined.
 *
 * Frontmatter `image` paths must mirror the `src/assets/blogs` folder (see
 * `docs/BLOG_WRITING_SPEC.md`). When a path does not resolve, we warn loudly instead of
 * silently shipping an unoptimized (or broken) fallback image.
 */
export function postImage(src: string): ImageMetadata | undefined {
  const resolved = imageMap[`/src/assets/blogs${src}`];
  if (!resolved && src && src !== '/not-found.jpg') {
    console.warn(
      `[postImages] No optimized image found in src/assets/blogs for frontmatter path "${src}". ` +
        'Move the file there (mirroring the path) or fix the path.'
    );
  }
  return resolved;
}
