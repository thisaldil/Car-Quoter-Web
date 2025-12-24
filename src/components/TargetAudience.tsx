import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { AnimatedSection } from './ui/AnimatedSection';
import { Users, Truck, Briefcase, GraduationCap, Building2 } from 'lucide-react';
const audiences = [{
  icon: Users,
  title: 'Vehicle Importers',
  desc: 'Calculate exact costs before bidding on auctions.'
}, {
  icon: Truck,
  title: 'Motor Dealers',
  desc: 'Price your stock accurately for the local market.'
}, {
  icon: Briefcase,
  title: 'Clearing Agents',
  desc: 'Quickly generate estimates for clients.'
}, {
  icon: Building2,
  title: 'Consultants',
  desc: 'Provide professional advice on import taxation.'
}, {
  icon: GraduationCap,
  title: 'Students',
  desc: 'Learn logistics, customs, and IT systems.'
}];
export function TargetAudience() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-100px'
  });
  return <AnimatedSection background="gray">
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
        <h2 className="text-3xl font-extrabold text-gray-900">
          Who Is This For?
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Designed for professionals and learners who need precision in vehicle
          import logistics.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6" ref={ref}>
        {audiences.map((item, index) => <motion.div key={index} className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md" initial={{
        opacity: 0,
        y: 30
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {
        opacity: 0,
        y: 30
      }} transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1]
      }} whileHover={{
        y: -10,
        transition: {
          duration: 0.3
        }
      }}>
            <motion.div className="w-12 h-12 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4 text-[#EB0A1E]" whileHover={{
          rotate: 360,
          backgroundColor: '#EB0A1E',
          color: '#fff',
          transition: {
            duration: 0.5
          }
        }}>
              <item.icon className="w-6 h-6" />
            </motion.div>
            <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
            <p className="text-sm text-gray-500">{item.desc}</p>
          </motion.div>)}
      </div>
    </AnimatedSection>;
}