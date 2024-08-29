'use client';

import React from 'react';

import { motion } from 'framer-motion';

function LeafsIcon() {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="56"
      height="56"
      viewBox="0 0 56 56"
      fill="none"
      initial={{ scale: 0.8 }}
      animate={{ scale: 1 }}
      transition={{ duration: 1.5, ease: [0.45, 0.45, 0, 1] }}
    >
      <rect y="0" width="56" height="56" rx="5" fill="#323232" />
      <motion.rect
        x="11"
        y="29"
        width="16"
        height="16"
        rx="2"
        fill="#E0FF20"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      />
      <motion.rect
        x="11"
        y="11"
        width="16"
        height="16"
        rx="2"
        fill="#E0FF20"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      />
      <motion.rect
        x="29"
        y="29"
        width="16"
        height="16"
        rx="2"
        fill="#E0FF20"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.0 }}
      />
      <motion.path
        d="M43 11.0001C44.1046 11.0001 45 11.8956 45 13.0001L45 15.0001C45 21.6275 39.6274 27.0001 33 27.0001L31 27.0001C29.8954 27.0001 29 26.1047 29 25.0001L29 23.0001C29 16.3727 34.3726 11.0001 41 11.0001L43 11.0001Z"
        fill="#E0FF20"
        initial={{ scale: 0, x: -10, y: 8, opacity: 0 }}
        animate={{ scale: 1, x: 0, y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      />
    </motion.svg>
  );
}

export default LeafsIcon;
