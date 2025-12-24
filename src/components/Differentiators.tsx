import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { AnimatedSection } from './ui/AnimatedSection';
import { CheckCircle2, XCircle } from 'lucide-react';
export function Differentiators() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-100px'
  });
  return <AnimatedSection>
      <motion.div className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl" initial={{
      opacity: 0,
      scale: 0.95
    }} animate={isInView ? {
      opacity: 1,
      scale: 1
    } : {
      opacity: 0,
      scale: 0.95
    }} transition={{
      duration: 0.8
    }}>
        <div className="grid md:grid-cols-2">
          <motion.div className="p-12 md:p-16 flex flex-col justify-center" initial={{
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
          delay: 0.2
        }}>
            <h2 className="text-3xl font-extrabold text-white mb-6">
              Why This System Is Different
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Most online calculators use fixed percentages or outdated
              formulas. This system reflects how Sri Lankan Customs actually
              calculates duties.
            </p>
            <div className="space-y-4" ref={ref}>
              {['Real-time decision making tool', 'Official customs formulas', 'Invoice generation capabilities'].map((item, i) => <motion.div key={i} className="flex items-center text-white" initial={{
              opacity: 0,
              x: -20
            }} animate={isInView ? {
              opacity: 1,
              x: 0
            } : {
              opacity: 0,
              x: -20
            }} transition={{
              delay: 0.4 + i * 0.1,
              duration: 0.5
            }}>
                  <CheckCircle2 className="w-6 h-6 text-[#EB0A1E] mr-3" />
                  <span>{item}</span>
                </motion.div>)}
            </div>
          </motion.div>

          <motion.div className="bg-gray-800 p-12 md:p-16 flex flex-col justify-center border-l border-gray-700" initial={{
          opacity: 0,
          x: 30
        }} animate={isInView ? {
          opacity: 1,
          x: 0
        } : {
          opacity: 0,
          x: 30
        }} transition={{
          duration: 0.8,
          delay: 0.3
        }}>
            <h3 className="text-xl font-bold text-white mb-6">
              Generic Calculators vs. Our System
            </h3>
            <div className="space-y-6">
              {[{
              label: 'Calculation Method',
              wrong: 'Fixed %',
              right: 'Official Formula'
            }, {
              label: 'Currency',
              wrong: 'Static Rates',
              right: 'Live/Adjustable'
            }, {
              label: 'Output',
              wrong: 'Rough Estimate',
              right: 'Full Invoice'
            }].map((item, i) => <motion.div key={i} className="flex justify-between items-center border-b border-gray-700 pb-4" initial={{
              opacity: 0,
              y: 20
            }} animate={isInView ? {
              opacity: 1,
              y: 0
            } : {
              opacity: 0,
              y: 20
            }} transition={{
              delay: 0.5 + i * 0.1,
              duration: 0.5
            }}>
                  <span className="text-gray-400">{item.label}</span>
                  <div className="text-right">
                    <div className="text-red-400 text-sm flex items-center justify-end">
                      <XCircle className="w-3 h-3 mr-1" /> {item.wrong}
                    </div>
                    <div className="text-[#EB0A1E] font-bold text-sm flex items-center justify-end">
                      <CheckCircle2 className="w-3 h-3 mr-1" /> {item.right}
                    </div>
                  </div>
                </motion.div>)}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatedSection>;
}