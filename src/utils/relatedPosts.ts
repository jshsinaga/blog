import { tagSlug } from './helper';

interface TaggedPost {
  id: string;
  data: {
    date: Date;
    tags: string[];
    published: boolean;
  };
}

export function getRelatedPosts<T extends TaggedPost>(current: T, posts: T[]): T[] {
  const currentTags = new Set(current.data.tags.map(tagSlug));

  return posts
    .filter((post) => post.data.published && post.id !== current.id)
    .map((post) => ({
      post,
      sharedTags: [...new Set(post.data.tags.map(tagSlug))]
        .filter((tag) => currentTags.has(tag)).length,
    }))
    .filter(({ sharedTags }) => sharedTags > 0)
    .sort((a, b) => b.sharedTags - a.sharedTags
      || b.post.data.date.getTime() - a.post.data.date.getTime()
      || a.post.id.localeCompare(b.post.id))
    .slice(0, 3)
    .map(({ post }) => post);
}
