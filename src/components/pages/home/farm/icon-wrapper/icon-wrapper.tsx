'use client';

import { ReactNode, useRef } from 'react';

import { motion, useInView } from 'framer-motion';

function IconWrapper({ children }: { children: ReactNode }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px 0px' });

  return (
    <motion.svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width="56"
      height="56"
      viewBox="0 0 56 56"
      fill="none"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 1.5, ease: [0.45, 0.45, 0, 1] }}
    >
      {children}
    </motion.svg>
  );
}

export default IconWrapper;
