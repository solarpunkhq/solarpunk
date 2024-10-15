import { Metadata } from 'next';
import { getLocale, unstable_setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';

import { routing } from '@/i18n/routing';

import Container from '@/components/pages/blog/container';
import { PostBody } from '@/components/pages/blog/post-body';
import { PostHeader } from '@/components/pages/blog/post-header';

import { getAllPosts, getPostBySlug } from '@/lib/blog-api';
import { markdownToHtml } from '@/lib/markdownToHtml';

export default async function Post({ params: { slug } }: { params: { slug: string } }) {
  const locale = await getLocale();
  unstable_setRequestLocale(locale);
  const post = getPostBySlug(slug, locale);

  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.content || '');

  return (
    <main className="mt-10">
      <Container>
        <article className="mb-32">
          <PostHeader
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
          />
          <PostBody content={content} />
        </article>
      </Container>
    </main>
  );
}

// Generate metadata for each post
export function generateMetadata({ params: { slug } }: { params: { slug: string } }): Metadata {
  const locale = 'en'; // Default locale for metadata generation
  const post = getPostBySlug(slug, locale); // Fetch post in the default locale

  if (!post) {
    return notFound();
  }

  const title = `${post.title} | Solarpunk Blog`;

  return {
    title,
    openGraph: {
      title,
      images: [post.ogImage.url],
    },
    icons: {
      icon: '/favicon/favicon.png',
      apple: [
        { url: '/favicon/favicon.png' },
        { url: '/favicon/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
        { url: '/favicon/favicon-72x72.png', sizes: '72x72', type: 'image/png' },
        { url: '/favicon/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
        { url: '/favicon/favicon-144x144.png', sizes: '144x144', type: 'image/png' },
        { url: '/favicon/favicon-180x180.png', sizes: '180x180', type: 'image/png' },
        { url: '/favicon/favicon-256x256.png', sizes: '256x256', type: 'image/png' },
        { url: '/favicon/favicon-384x384.png', sizes: '384x384', type: 'image/png' },
        { url: '/favicon/favicon-512x512.png', sizes: '512x512', type: 'image/png' },
      ],
    },
  };
}

export async function generateStaticParams() {
  const locales = routing.locales;

  const posts = getAllPosts('en');

  return locales.flatMap((locale) =>
    posts.map((post) => ({
      locale,
      slug: post.slug,
    })),
  );
}
