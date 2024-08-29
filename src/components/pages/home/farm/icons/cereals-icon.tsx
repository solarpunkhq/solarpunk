'use client';

import React from 'react';

import { motion } from 'framer-motion';

function CerealsIcon() {
  return (
    <>
      <path
        d="M0 5.00006C0 2.23864 2.23858 6.10352e-05 5 6.10352e-05H51C53.7614 6.10352e-05 56 2.23864 56 5.00006V51.0001C56 53.7615 53.7614 56.0001 51 56.0001H5C2.23858 56.0001 0 53.7615 0 51.0001V5.00006Z"
        fill="#323232"
      />
      <motion.path
        d="M9.45472 29.8182C9.45472 34.6404 11.3703 39.265 14.7801 42.6747C18.1898 46.0845 22.8144 48.0001 27.6365 48.0001C32.4587 48.0001 37.0833 46.0845 40.493 42.6747C43.9028 39.265 45.8184 34.6404 45.8184 29.8182L37.6365 29.8182C33.3872 29.8182 29.708 32.7696 28.7861 36.9178L27.6365 42.091L26.4869 36.9178C25.5651 32.7696 21.8859 29.8182 17.6365 29.8182L9.45472 29.8182Z"
        fill="#E0FF20"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      />
      <motion.circle
        cx="21.2729"
        cy="23.4546"
        r="5.45455"
        fill="#E0FF20"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      />
      <motion.circle
        cx="34.0014"
        cy="23.4546"
        r="5.45455"
        fill="#E0FF20"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      />
      <motion.circle
        cx="27.6362"
        cy="13.4546"
        r="5.45455"
        fill="#E0FF20"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      />
    </>
  );
}

export default CerealsIcon;
