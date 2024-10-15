import { useLocale } from 'next-intl';

import Container from '@/components/shared/container';

import { getAllPosts } from '@/lib/blog-api';

import { PostPreview } from '../../blog/post-preview';
import BlogHeader from './blog-header';

export default function BlogPosts() {
  const locale = useLocale(); // Get the current locale from next-intl
  const allPosts = getAllPosts(locale); // Fetch posts for the current locale

  return (
    <Container>
      <BlogHeader />
      <div className="grid-col-1 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {allPosts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </Container>
  );
}
