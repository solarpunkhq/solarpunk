import Container from '@/components/pages/blog/container';
import { HeroPost } from '@/components/pages/blog/hero-post';
import { Intro } from '@/components/pages/blog/intro';
import { MoreStories } from '@/components/pages/blog/more-stories';

import { getAllPosts } from '@/lib/blog-api';

export default function Index() {
  const allPosts = getAllPosts();

  const heroPost = allPosts[0];

  const morePosts = allPosts.slice(1);

  return (
    <main className="flex items-center justify-center">
      <Container>
        <Intro />
        <HeroPost
          title={heroPost.title}
          coverImage={heroPost.coverImage}
          date={heroPost.date}
          author={heroPost.author}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
        />
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
    </main>
  );
}
