import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { AnimatedSection } from './ui/AnimatedSection';
import { ShieldCheck, Globe, FileCheck } from 'lucide-react';
export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-100px'
  });
  const features = [{
    icon: ShieldCheck,
    title: 'Official Customs Logic',
    desc: 'Follows the exact tax structure used by Sri Lanka Customs.'
  }, {
    icon: Globe,
    title: 'Multi-Currency',
    desc: 'Real-time conversion for JPY, USD, GBP to LKR.'
  }, {
    icon: FileCheck,
    title: 'Clearance Ready',
    desc: 'Generates breakdowns matching official clearance documents.'
  }];
  return <AnimatedSection background="gray" id="about">
      <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
        <motion.div initial={{
        opacity: 0,
        x: -30
      }} animate={isInView ? {
        opacity: 1,
        x: 0
      } : {
        opacity: 0,
        x: -30
      }} transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }}>
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-6">
            About the System
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            This platform provides a practical solution for estimating vehicle
            import costs in Sri Lanka. Unlike generic calculators, it follows
            the actual customs tax structure used by Sri Lanka Customs, ensuring
            realistic and dependable results.
          </p>
          <p className="text-lg text-gray-600">
            The system supports multiple vehicle types, international
            currencies, and real duty components used in official clearance
            documents.
          </p>
        </motion.div>

        <div className="mt-10 lg:mt-0 grid gap-8" ref={ref}>
          {features.map((item, index) => <motion.div key={index} className="flex items-start" initial={{
          opacity: 0,
          x: 30
        }} animate={isInView ? {
          opacity: 1,
          x: 0
        } : {
          opacity: 0,
          x: 30
        }} transition={{
          duration: 0.6,
          delay: index * 0.15,
          ease: [0.22, 1, 0.36, 1]
        }}>
              <motion.div className="flex-shrink-0" whileHover={{
            rotate: 360,
            scale: 1.1
          }} transition={{
            duration: 0.6
          }}>
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#EB0A1E] text-white">
                  <item.icon className="h-6 w-6" />
                </div>
              </motion.div>
              <div className="ml-4">
                <h3 className="text-lg font-bold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-1 text-gray-500">{item.desc}</p>
              </div>
            </motion.div>)}
        </div>
      </div>
    </AnimatedSection>;
}