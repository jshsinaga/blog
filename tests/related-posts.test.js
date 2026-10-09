import { expect, test } from 'bun:test';
import { getRelatedPosts } from '../src/utils/relatedPosts';

const post = (id, tags, date = '2026-01-01', published = true) => ({
  id,
  data: { tags, date: new Date(date), published },
});

test('related posts prioritize topic relevance, then recency', () => {
  const current = post('current', ['AI', 'coding-agent']);
  const relevant = post('relevant', ['ai', 'coding-agent'], '2025-01-01');
  const newer = post('newer', ['Coding Agent'], '2026-09-01');
  const older = post('older', ['coding-agent'], '2026-08-01');
  const draft = post('draft', ['ai', 'coding-agent'], '2026-10-01', false);
  const unrelated = post('unrelated', ['windows-10']);

  expect(getRelatedPosts(current, [current, older, unrelated, draft, newer, relevant]))
    .toEqual([relevant, newer, older]);
});

test('recommendations are unique, limited to three, and do not mutate the archive', () => {
  const current = post('current', ['ai']);
  const archive = [
    post('oldest', ['ai'], '2026-01-01'),
    post('second', ['ai'], '2026-03-01'),
    post('newest', ['ai', 'AI'], '2026-04-01'),
    post('third', ['ai'], '2026-02-01'),
  ];
  const original = [...archive];

  expect(getRelatedPosts(current, archive).map(({ id }) => id))
    .toEqual(['newest', 'second', 'third']);
  expect(archive).toEqual(original);
});

test('no matching topics, an empty archive, or missing tags yield no recommendations', () => {
  const current = post('current', ['iot']);
  expect(getRelatedPosts(current, [post('unrelated', ['ai'])])).toEqual([]);
  expect(getRelatedPosts(current, [])).toEqual([]);
  expect(getRelatedPosts(post('untagged', []), [current])).toEqual([]);
});
