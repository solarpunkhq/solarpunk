// app/blog/[slug]/page.tsx
import { Metadata } from 'next';
import { unstable_setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';

import Container from '@/components/pages/blog/container';
import { PostBody } from '@/components/pages/blog/post-body';
import { PostHeader } from '@/components/pages/blog/post-header';

import { getAllPosts, getPostBySlug } from '@/lib/blog-api';
import { markdownToHtml } from '@/lib/markdownToHtml';

export default async function Post({
  params: { slug, locale },
}: {
  params: { slug: string; locale: string };
}) {
  unstable_setRequestLocale(locale);
  console.log('locale', locale);
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

export async function generateMetadata({
  params: { locale, slug },
}: {
  params: { locale: string; slug: string };
}): Promise<Metadata> {
  const post = getPostBySlug(slug, locale);

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
  const locales = ['en', 'de'];
  const allPosts = await Promise.all(
    locales.map(async (locale) => {
      const posts = getAllPosts(locale);
      return posts.map((post) => ({
        slug: post.slug,
        locale,
      }));
    }),
  );
  return allPosts.flat();
}
