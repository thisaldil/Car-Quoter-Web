import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { AnimatedSection } from './ui/AnimatedSection';
import { Button } from './ui/Button';
export function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true
  });
  return <AnimatedSection background="dark" className="text-center">
      <motion.div ref={ref} initial={{
      opacity: 0,
      y: 30
    }} animate={isInView ? {
      opacity: 1,
      y: 0
    } : {
      opacity: 0,
      y: 30
    }} transition={{
      duration: 0.8
    }}>
        <motion.h2 className="text-3xl font-extrabold text-white sm:text-4xl mb-6" initial={{
        opacity: 0,
        scale: 0.9
      }} animate={isInView ? {
        opacity: 1,
        scale: 1
      } : {
        opacity: 0,
        scale: 0.9
      }} transition={{
        delay: 0.2,
        duration: 0.6
      }}>
          Estimate Your Vehicle Import Cost Accurately
        </motion.h2>
        <motion.p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto" initial={{
        opacity: 0
      }} animate={isInView ? {
        opacity: 1
      } : {
        opacity: 0
      }} transition={{
        delay: 0.4,
        duration: 0.6
      }}>
          Start using the calculator today and avoid unexpected customs charges.
          Professional, precise, and easy to use.
        </motion.p>
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {
        opacity: 0,
        y: 20
      }} transition={{
        delay: 0.6,
        duration: 0.6
      }}>
          <Button size="lg" className="shadow-lg shadow-red-900/50">
            Try the Calculator
          </Button>
        </motion.div>
      </motion.div>
    </AnimatedSection>;
}