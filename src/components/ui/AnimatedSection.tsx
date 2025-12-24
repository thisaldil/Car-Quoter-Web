import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  background?: 'white' | 'gray' | 'dark';
  id?: string;
  delay?: number;
}
export function AnimatedSection({
  children,
  className = '',
  background = 'white',
  id,
  delay = 0
}: AnimatedSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-100px'
  });
  const backgrounds = {
    white: 'bg-white',
    gray: 'bg-[#F7F7F7]',
    dark: 'bg-[#1A1A1A] text-white'
  };
  return <motion.section ref={ref} id={id} className={`py-16 md:py-24 ${backgrounds[background]} ${className}`} initial={{
    opacity: 0,
    y: 50
  }} animate={isInView ? {
    opacity: 1,
    y: 0
  } : {
    opacity: 0,
    y: 50
  }} transition={{
    duration: 0.8,
    delay,
    ease: [0.22, 1, 0.36, 1]
  }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </motion.section>;
}