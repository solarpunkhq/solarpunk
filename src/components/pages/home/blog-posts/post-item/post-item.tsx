import { Route } from 'next';
import Image from 'next/image';

import { Link } from '@/i18n/routing';
import cn from 'classnames';

type Props = {
  title: string;
  coverImage: string;
  excerpt: string;
  slug: string;
};

export default function PostItem({ title, coverImage, excerpt, slug }: Props) {
  return (
    <div>
      <div className="mb-5">
        <Link href={`/blog/${slug}`} aria-label={title}>
          <Image
            src={coverImage}
            alt={`Image for ${title}`}
            className={cn(
              'aspect-video w-full rounded-xl border border-gray-98 object-cover object-center',
              {
                'transition-shadow duration-200 hover:shadow-lg': slug,
              },
            )}
            width={1300}
            height={630}
          />
        </Link>
      </div>
      <h3 className="mb-3 line-clamp-3 text-24 font-medium leading-snug tracking-tight text-gray-20">
        <Link href={`/blog/${slug}` as Route} className="hover:underline">
          {title}
        </Link>
      </h3>
      <p className="mb-4 line-clamp-4 text-20 leading-snug tracking-tight text-gray-40">
        {excerpt}
      </p>
    </div>
  );
}
