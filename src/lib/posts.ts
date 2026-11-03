import { getCollection } from 'astro:content';

export async function getPosts() {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

const dateFormat = new Intl.DateTimeFormat('hr-HR', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
});

export const formatDate = (date: Date) => dateFormat.format(date);

export const readingTime = (body = '') =>
  Math.max(1, Math.round(body.split(/\s+/).filter(Boolean).length / 200));
