import fs from 'fs';
import matter from 'gray-matter';
import { join } from 'path';

import { Post } from '@/types/post';

const postsDirectory = join(process.cwd(), '_posts');

// Get slugs for all posts in a specific locale
export function getPostSlugs(locale: string) {
  const localeDirectory = join(postsDirectory, locale);
  return fs.readdirSync(localeDirectory);
}

// Get a specific post by slug and locale
export function getPostBySlug(slug: string, locale: string) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(postsDirectory, locale, `${realSlug}.md`);

  if (!fs.existsSync(fullPath)) {
    return null; // Handle missing posts for the locale
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content } as Post;
}

// Get all posts for a specific locale
export function getAllPosts(locale: string): Post[] {
  const slugs = getPostSlugs(locale);
  const posts = slugs
    .map((slug) => getPostBySlug(slug.replace('.md', ''), locale))
    .filter((post) => post !== null) // Filter out missing posts
    .sort((post1, post2) => (post1!.date > post2!.date ? -1 : 1)); // Sort by date

  return posts as Post[];
}
