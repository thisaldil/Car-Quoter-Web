import React, { Children } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import { Calculator, FileText } from 'lucide-react';
export function Hero() {
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };
  const imageVariants = {
    hidden: {
      opacity: 0,
      scale: 0.9,
      rotate: -3
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: -3,
      transition: {
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };
  return <div className="relative bg-white overflow-hidden">
      {/* Animated Background Pattern */}
      <motion.div className="absolute inset-0 z-0 opacity-5" initial={{
      x: -100
    }} animate={{
      x: 0
    }} transition={{
      duration: 1.5,
      ease: [0.22, 1, 0.36, 1]
    }}>
        <div className="absolute right-0 top-0 h-full w-1/2 bg-gray-900 skew-x-[-12deg] translate-x-20" />
      </motion.div>

      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <motion.main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28" variants={containerVariants} initial="hidden" animate="visible">
            <div className="sm:text-center lg:text-left">
              <motion.div variants={itemVariants} className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider text-[#EB0A1E] uppercase bg-red-50 rounded-full">
                Professional Import Tool
              </motion.div>

              <motion.h1 variants={itemVariants} className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Accurate Vehicle</span>{' '}
                <span className="block text-[#EB0A1E] xl:inline">
                  Import Cost Estimation
                </span>
              </motion.h1>

              <motion.p variants={itemVariants} className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Calculate Sri Lankan vehicle import duties with real customs
                rules, multi-currency pricing, and engine CC based excise duty.
                Designed for importers, dealers, and consultants.
              </motion.p>

              <motion.div variants={itemVariants} className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start gap-4">
                <Button size="lg" withArrow>
                  Get Started
                </Button>
                <Button variant="outline" size="lg">
                  View Sample Calculation
                </Button>
              </motion.div>
            </div>
          </motion.main>
        </div>
      </div>

      {/* Animated Hero Image Area */}
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 bg-gray-100 flex items-center justify-center overflow-hidden">
        <div className="relative w-full h-full">
          <motion.div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200" initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          duration: 1
        }} />
          <motion.div className="absolute inset-0 flex items-center justify-center" initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          delay: 0.5,
          duration: 1
        }}>
            <motion.div variants={imageVariants} initial="hidden" animate="visible" whileHover={{
            rotate: 0,
            scale: 1.02,
            transition: {
              duration: 0.4,
              ease: [0.22, 1, 0.36, 1]
            }
          }} className="w-3/4 h-3/4 bg-[url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80')] bg-cover bg-center shadow-2xl rounded-lg transform -rotate-3 border-4 border-white cursor-pointer" />
          </motion.div>
        </div>
      </div>
    </div>;
}