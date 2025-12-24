import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { AnimatedSection } from './ui/AnimatedSection';
import { Zap, FileText, Settings, User } from 'lucide-react';
export function FutureEnhancements() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-100px'
  });
  const enhancements = [{
    icon: Zap,
    text: 'Hybrid and electric vehicle tax rules'
  }, {
    icon: FileText,
    text: 'Saved invoices and export to PDF'
  }, {
    icon: Settings,
    text: 'Admin controlled tax rate updates'
  }, {
    icon: User,
    text: 'User accounts and history tracking'
  }];
  return <AnimatedSection background="gray">
      <div className="max-w-4xl mx-auto">
        <motion.h2 className="text-2xl font-bold text-gray-900 mb-8" initial={{
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
          Future Enhancements Roadmap
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-4" ref={ref}>
          {enhancements.map((item, i) => <motion.div key={i} className="flex items-center p-4 bg-white rounded-lg border border-gray-200" initial={{
          opacity: 0,
          x: i % 2 === 0 ? -30 : 30
        }} animate={isInView ? {
          opacity: 1,
          x: 0
        } : {
          opacity: 0,
          x: i % 2 === 0 ? -30 : 30
        }} transition={{
          delay: i * 0.1,
          duration: 0.5
        }} whileHover={{
          scale: 1.02,
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          transition: {
            duration: 0.2
          }
        }}>
              <motion.div whileHover={{
            rotate: 360
          }} transition={{
            duration: 0.5
          }}>
                <item.icon className="w-5 h-5 text-[#EB0A1E] mr-3" />
              </motion.div>
              <span className="text-gray-700 font-medium">{item.text}</span>
            </motion.div>)}
        </div>
      </div>
    </AnimatedSection>;
}