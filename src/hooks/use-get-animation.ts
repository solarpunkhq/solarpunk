import { useScroll, useTransform } from 'framer-motion';

export function UseGetOpacity(
  index: number,
  totalItems: number,
  sectionRef: React.RefObject<HTMLDivElement>,
) {
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['1 1', '0.3 0.3'],
    layoutEffect: false,
  });

  const opacity = useTransform(
    scrollYProgress,
    [index / totalItems, (index + 1) / totalItems],
    [0.45, 1],
  );

  return opacity;
}

export function UseGetTextOpacity(
  index: number,
  totalItems: number,
  sectionRef: React.RefObject<HTMLDivElement>,
) {
  const opacity = UseGetOpacity(index, totalItems, sectionRef);
  const contentOpacity = useTransform(opacity, (value) => (value <= 0.45 ? 0.45 : 1));

  return contentOpacity;
}
