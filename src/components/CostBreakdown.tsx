import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { AnimatedSection } from './ui/AnimatedSection';
import { ArrowDown } from 'lucide-react';
export function CostBreakdown() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-100px'
  });
  const steps = [{
    label: 'CIF Value (LKR)',
    desc: 'Cost, Insurance, Freight converted to LKR'
  }, {
    label: 'Customs Import Duty',
    desc: '20% of CIF Value'
  }, {
    label: 'Excise Duty',
    desc: 'Based on Engine CC'
  }, {
    label: 'PAL & CESS',
    desc: 'Port & Airport Levy + CESS Levy'
  }, {
    label: 'VAT',
    desc: 'Value Added Tax on total base'
  }, {
    label: 'Final Estimated Cost',
    desc: 'Total Landed Cost',
    highlight: true
  }];
  return <AnimatedSection background="gray">
      <motion.div className="text-center mb-12" initial={{
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
        <h2 className="text-3xl font-extrabold text-gray-900">
          Detailed Cost Breakdown
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Transparent visibility into every tax component.
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden" initial={{
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
          {steps.map((step, index) => <motion.div key={index} className={`relative p-6 flex items-center justify-between ${step.highlight ? 'bg-gray-900 text-white' : 'border-b border-gray-100'}`} initial={{
          opacity: 0,
          x: -30
        }} animate={isInView ? {
          opacity: 1,
          x: 0
        } : {
          opacity: 0,
          x: -30
        }} transition={{
          duration: 0.5,
          delay: index * 0.15,
          ease: [0.22, 1, 0.36, 1]
        }}>
              <div>
                <motion.h3 className={`text-lg font-bold ${step.highlight ? 'text-white' : 'text-gray-900'}`} initial={{
              opacity: 0
            }} animate={isInView ? {
              opacity: 1
            } : {
              opacity: 0
            }} transition={{
              delay: index * 0.15 + 0.2,
              duration: 0.4
            }}>
                  {step.label}
                </motion.h3>
                <motion.p className={`text-sm ${step.highlight ? 'text-gray-400' : 'text-gray-500'}`} initial={{
              opacity: 0
            }} animate={isInView ? {
              opacity: 1
            } : {
              opacity: 0
            }} transition={{
              delay: index * 0.15 + 0.3,
              duration: 0.4
            }}>
                  {step.desc}
                </motion.p>
              </div>
              {step.highlight && <motion.div className="text-2xl font-bold text-[#EB0A1E]" initial={{
            scale: 0,
            opacity: 0
          }} animate={isInView ? {
            scale: 1,
            opacity: 1
          } : {
            scale: 0,
            opacity: 0
          }} transition={{
            delay: index * 0.15 + 0.3,
            duration: 0.5,
            type: 'spring',
            stiffness: 200
          }}>
                  TOTAL
                </motion.div>}

              {!step.highlight && index < steps.length - 1 && <motion.div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 z-10 bg-white rounded-full p-1 border border-gray-100" initial={{
            opacity: 0,
            y: -10
          }} animate={isInView ? {
            opacity: 1,
            y: 0,
            transition: {
              delay: index * 0.15 + 0.4,
              duration: 0.3
            }
          } : {
            opacity: 0,
            y: -10
          }}>
                  <motion.div animate={isInView ? {
              y: [0, 3, 0],
              transition: {
                delay: index * 0.15 + 0.8,
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut'
              }
            } : {}}>
                    <ArrowDown className="w-4 h-4 text-gray-400" />
                  </motion.div>
                </motion.div>}
            </motion.div>)}
        </motion.div>
      </div>
    </AnimatedSection>;
}