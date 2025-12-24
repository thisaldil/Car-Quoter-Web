import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { AnimatedSection } from './ui/AnimatedSection';
import { Code2, Cpu, Layout, Layers } from 'lucide-react';
export function Technology() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-100px'
  });
  const techs = [{
    icon: Code2,
    title: 'React Based',
    desc: 'Modern, component-based front end architecture.'
  }, {
    icon: Cpu,
    title: 'Dynamic Logic',
    desc: 'Complex form-driven calculations happen instantly.'
  }, {
    icon: Layout,
    title: 'Real-time Updates',
    desc: 'See cost changes immediately without page reloads.'
  }, {
    icon: Layers,
    title: 'Modular Design',
    desc: 'Built for easy future expansion and updates.'
  }];
  return <AnimatedSection>
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
          Technology Overview
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" ref={ref}>
        {techs.map((item, i) => <motion.div key={i} className="flex flex-col items-center text-center" initial={{
        opacity: 0,
        y: 30
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {
        opacity: 0,
        y: 30
      }} transition={{
        delay: i * 0.1,
        duration: 0.5
      }} whileHover={{
        y: -10
      }}>
            <motion.div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-4 text-gray-900" whileHover={{
          rotate: 360,
          backgroundColor: '#EB0A1E',
          color: '#fff',
          transition: {
            duration: 0.6
          }
        }}>
              <item.icon className="w-8 h-8" />
            </motion.div>
            <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
            <p className="text-sm text-gray-500">{item.desc}</p>
          </motion.div>)}
      </div>
    </AnimatedSection>;
}