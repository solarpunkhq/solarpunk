import clsx from 'clsx';

import { Container } from '@/components/pages/agrivoltaics/container';
import { FadeIn } from '@/components/pages/agrivoltaics/fade-in';

export function PageIntro({ eyebrow, title, children, centered = false }) {
  return (
    <Container className={clsx('mt-24 sm:mt-32 lg:mt-40', centered && 'text-center')}>
      <FadeIn>
        <h1>
          <span className="font-display text-neutral-950 block text-base font-semibold">
            {eyebrow}
          </span>
          <span className="sr-only"> - </span>
          <span
            className={clsx(
              'font-display text-neutral-950 mt-6 block max-w-5xl text-5xl font-medium tracking-tight [text-wrap:balance] sm:text-6xl',
              centered && 'mx-auto',
            )}
          >
            {title}
          </span>
        </h1>
        <div className={clsx('text-neutral-600 mt-6 max-w-3xl text-xl', centered && 'mx-auto')}>
          {children}
        </div>
      </FadeIn>
    </Container>
  );
}
