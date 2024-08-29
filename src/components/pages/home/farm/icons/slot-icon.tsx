'use client';

import React from 'react';

import { motion } from 'framer-motion';

function SlotIcon() {
  return (
    <>
      <motion.path
        d="M0 5.00012C0 2.2387 2.23858 0.00012207 5 0.00012207H51C53.7614 0.00012207 56 2.2387 56 5.00012V51.0001C56 53.7615 53.7614 56.0001 51 56.0001H5C2.23858 56.0001 0 53.7615 0 51.0001V5.00012Z"
        fill="#323232"
        style={{ fill: '#323232' }}
      />
      <motion.path
        d="M28 46.0001C37.9411 46.0001 46 37.9412 46 28.0001C46 18.059 37.9411 10.0001 28 10.0001C18.0589 10.0001 10 18.059 10 28.0001C10 37.9412 18.0589 46.0001 28 46.0001ZM27.9989 16.631C28.4319 16.631 28.7829 16.982 28.7829 17.415V21.923C28.7829 24.8457 31.1522 27.215 34.0749 27.215H38.5832C39.0162 27.215 39.3672 27.566 39.3672 27.999C39.3672 28.432 39.0162 28.783 38.5832 28.783H34.075C31.1523 28.783 28.7829 31.1524 28.7829 34.0752V38.5838C28.7829 39.0168 28.4319 39.3678 27.9989 39.3678C27.5659 39.3678 27.2148 39.0168 27.2148 38.5838V34.0753C27.2148 31.1524 24.8454 28.783 21.9226 28.783H17.4144C16.9814 28.783 16.6303 28.432 16.6303 27.999C16.6303 27.566 16.9814 27.215 17.4144 27.215H21.9229C24.8455 27.215 27.2148 24.8457 27.2148 21.923V17.415C27.2148 16.982 27.5659 16.631 27.9989 16.631Z"
        fill="#E0FF20"
        style={{ fill: '#E0FF20' }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0, ease: [0.45, 0.45, 0, 1] }}
      />
    </>
  );
}

export default SlotIcon;
