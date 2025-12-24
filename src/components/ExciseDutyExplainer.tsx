import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { AnimatedSection } from './ui/AnimatedSection';
export function ExciseDutyExplainer() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-100px'
  });
  const formulaVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8
    },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    })
  };
  const operatorVariants = {
    hidden: {
      opacity: 0,
      scale: 0
    },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.3 + i * 0.2,
        duration: 0.4,
        type: 'spring',
        stiffness: 200
      }
    })
  };
  return <AnimatedSection background="dark" className="relative overflow-hidden">
      {/* Animated background particles */}
      <motion.div className="absolute inset-0 opacity-10" initial={{
      opacity: 0
    }} animate={{
      opacity: 0.1
    }} transition={{
      duration: 2
    }}>
        {[...Array(20)].map((_, i) => <motion.div key={i} className="absolute w-2 h-2 bg-white rounded-full" style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`
      }} animate={{
        y: [0, -30, 0],
        opacity: [0.3, 0.6, 0.3]
      }} transition={{
        duration: 3 + Math.random() * 2,
        repeat: Infinity,
        delay: Math.random() * 2
      }} />)}
      </motion.div>

      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <motion.h2 className="text-3xl font-extrabold text-white sm:text-4xl mb-8" initial={{
        opacity: 0,
        y: 20
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {
        opacity: 0,
        y: 20
      }} transition={{
        duration: 0.6
      }}>
          Engine CC Based Excise Duty
        </motion.h2>
        <motion.p className="text-xl text-gray-300 mb-12" initial={{
        opacity: 0,
        y: 20
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {
        opacity: 0,
        y: 20
      }} transition={{
        duration: 0.6,
        delay: 0.2
      }}>
          Excise duty is calculated using the official method to ensure
          precision for all vehicle categories.
        </motion.p>

        <motion.div ref={ref} className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/20" initial={{
        opacity: 0,
        scale: 0.9
      }} animate={isInView ? {
        opacity: 1,
        scale: 1
      } : {
        opacity: 0,
        scale: 0.9
      }} transition={{
        duration: 0.8,
        delay: 0.3
      }}>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-2xl md:text-4xl font-bold text-white font-mono">
            <motion.div className="flex flex-col items-center" custom={0} variants={formulaVariants} initial="hidden" animate={isInView ? 'visible' : 'hidden'}>
              <span className="text-sm text-gray-400 font-sans mb-2 uppercase tracking-wider">
                Engine Capacity
              </span>
              <motion.span className="bg-white/10 px-4 py-2 rounded" whileHover={{
              scale: 1.05,
              backgroundColor: 'rgba(255,255,255,0.15)'
            }} transition={{
              duration: 0.2
            }}>
                CC
              </motion.span>
            </motion.div>

            <motion.span className="text-[#EB0A1E]" custom={0} variants={operatorVariants} initial="hidden" animate={isInView ? 'visible' : 'hidden'}>
              ×
            </motion.span>

            <motion.div className="flex flex-col items-center" custom={1} variants={formulaVariants} initial="hidden" animate={isInView ? 'visible' : 'hidden'}>
              <span className="text-sm text-gray-400 font-sans mb-2 uppercase tracking-wider">
                Applicable Rate
              </span>
              <motion.span className="bg-white/10 px-4 py-2 rounded" whileHover={{
              scale: 1.05,
              backgroundColor: 'rgba(255,255,255,0.15)'
            }} transition={{
              duration: 0.2
            }}>
                3,450 LKR
              </motion.span>
            </motion.div>

            <motion.span className="text-[#EB0A1E]" custom={1} variants={operatorVariants} initial="hidden" animate={isInView ? 'visible' : 'hidden'}>
              =
            </motion.span>

            <motion.div className="flex flex-col items-center" custom={2} variants={formulaVariants} initial="hidden" animate={isInView ? 'visible' : 'hidden'}>
              <span className="text-sm text-gray-400 font-sans mb-2 uppercase tracking-wider">
                Excise Duty
              </span>
              <motion.span className="text-[#EB0A1E]" animate={isInView ? {
              scale: [1, 1.1, 1],
              transition: {
                delay: 1.5,
                duration: 0.5
              }
            } : {}}>
                Total
              </motion.span>
            </motion.div>
          </div>

          <motion.p className="mt-8 text-sm text-gray-400" initial={{
          opacity: 0
        }} animate={isInView ? {
          opacity: 1
        } : {
          opacity: 0
        }} transition={{
          delay: 1.8,
          duration: 0.6
        }}>
            * The rate (e.g., 3,450 LKR) varies based on vehicle type and fuel
            category. This system automatically selects the correct rate.
          </motion.p>
        </motion.div>
      </div>
    </AnimatedSection>;
}