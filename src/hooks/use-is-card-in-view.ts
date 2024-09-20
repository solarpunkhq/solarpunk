import { useInView } from 'react-intersection-observer';

export function UseIsCardInView({ threshold }: { threshold: number }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold,
  });

  return { ref, inView };
}
