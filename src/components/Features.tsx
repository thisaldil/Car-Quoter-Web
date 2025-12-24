import React, { useRef, Children } from 'react';
import { motion, useInView } from 'framer-motion';
import { AnimatedSection } from './ui/AnimatedSection';
import { Coins, Calculator, Scale, FileSpreadsheet } from 'lucide-react';
const features = [{
  icon: Coins,
  title: 'Multi Currency Support',
  items: ['Supports JPY, USD, GBP, and LKR', 'Adjustable currency to LKR conversion rate', 'Suitable for Japan, UK, and other markets']
}, {
  icon: Scale,
  title: 'Real Customs Tax Logic',
  items: ['Customs Import Duty (CID) at 20%', 'Surcharge calculated correctly on CID', 'VAT calculated on the correct tax base']
}, {
  icon: Calculator,
  title: 'Engine CC Based Excise Duty',
  items: ['Official method: Capacity × Rate', 'Accurate for small engines & hybrids', 'Works for large SUVs and luxury cars']
}, {
  icon: FileSpreadsheet,
  title: 'Detailed Cost Breakdown',
  items: ['CIF value in LKR visibility', 'Individual tax components listed', 'Final estimated vehicle cost']
}];
export function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-100px'
  });
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
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
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };
  return <AnimatedSection id="features">
      <motion.div className="text-center mb-16" initial={{
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
        <h2 className="text-base text-[#EB0A1E] font-semibold tracking-wide uppercase">
          Key Features
        </h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Everything you need for accurate estimates
        </p>
      </motion.div>

      <motion.div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" variants={containerVariants} initial="hidden" animate={isInView ? 'visible' : 'hidden'}>
        {features.map((feature, index) => <motion.div key={index} variants={itemVariants} className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300 group" whileHover={{
        y: -8,
        transition: {
          duration: 0.3,
          ease: [0.22, 1, 0.36, 1]
        }
      }}>
            <motion.div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#EB0A1E] transition-colors duration-300" whileHover={{
          rotate: [0, -10, 10, -10, 0],
          transition: {
            duration: 0.5
          }
        }}>
              <feature.icon className="h-6 w-6 text-[#EB0A1E] group-hover:text-white transition-colors duration-300" />
            </motion.div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              {feature.title}
            </h3>
            <ul className="space-y-3">
              {feature.items.map((item, idx) => <motion.li key={idx} className="text-sm text-gray-600 flex items-start" initial={{
            opacity: 0,
            x: -10
          }} animate={isInView ? {
            opacity: 1,
            x: 0
          } : {
            opacity: 0,
            x: -10
          }} transition={{
            delay: 0.5 + index * 0.15 + idx * 0.1,
            duration: 0.4
          }}>
                  <span className="mr-2 text-[#EB0A1E]">•</span>
                  {item}
                </motion.li>)}
            </ul>
          </motion.div>)}
      </motion.div>
    </AnimatedSection>;
}