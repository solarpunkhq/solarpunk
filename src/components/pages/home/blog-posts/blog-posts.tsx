import { useLocale } from 'next-intl';

import Button from '@/components/shared/button';
import Container from '@/components/shared/container';

import { getAllPosts } from '@/lib/blog-api';

import BlogHeader from './blog-header';
import PostItem from './post-item';

export default function BlogPosts() {
  const locale = useLocale(); // Get the current locale from next-intl
  const allPosts = getAllPosts(locale); // Fetch posts for the current locale

  return (
    <Container>
      <BlogHeader />
      <div className="grid-col-1 mb-16 grid gap-x-4 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
        {allPosts.slice(0, 3).map((post) => (
          <PostItem
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}{' '}
      </div>
      <Button
        className="mb-28 "
        size="home-md"
        theme="green"
        href="https://solarpunkhq.com/blog"
        withArrow
      >
        Read more
      </Button>
    </Container>
  );
}
