import Container from '@/components/shared/container';

import { getAllPosts } from '@/lib/blog-api';

import { PostPreview } from '../../blog/post-preview';

export default function BlogPosts() {
  const allPosts = getAllPosts();
  return (
    <Container>
      <h2 className="font-title text-52 font-semibold leading-[1.2] tracking-tight text-gray-20 home-lg:text-44 home-md:text-36 home-sm:max-w-[289px] home-sm:text-29">
        Learn more?
      </h2>
      <p className="mb-8 mt-[19px] text-25 leading-snug tracking-tighter text-gray-40 home-lg:text-20 home-md:mt-5 home-md:text-18 home-sm:mt-4 home-sm:text-16">
        We got you <mark className="highlight active">covered</mark>.
      </p>
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
