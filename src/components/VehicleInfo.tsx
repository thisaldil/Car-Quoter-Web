import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { AnimatedSection } from './ui/AnimatedSection';
import { Car, Fuel, Calendar, Gauge, Image as ImageIcon } from 'lucide-react';
export function VehicleInfo() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-100px'
  });
  const features = [{
    icon: Car,
    text: 'Select vehicle make and model'
  }, {
    icon: Fuel,
    text: 'Support for grades & fuel type'
  }, {
    icon: Calendar,
    text: 'Year of manufacture tracking'
  }, {
    icon: Gauge,
    text: 'Mileage recording'
  }, {
    icon: ImageIcon,
    text: 'Image gallery support'
  }];
  return <AnimatedSection>
      <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
        <motion.div className="lg:col-span-5" initial={{
        opacity: 0,
        x: -30
      }} animate={isInView ? {
        opacity: 1,
        x: 0
      } : {
        opacity: 0,
        x: -30
      }} transition={{
        duration: 0.8
      }}>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
            Vehicle Information Management
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Manage all vehicle details in one place. The system automatically
            generates vehicle names and organizes specifications for easy
            reference.
          </p>

          <ul className="space-y-6" ref={ref}>
            {features.map((item, i) => <motion.li key={i} className="flex items-center text-gray-700" initial={{
            opacity: 0,
            x: -20
          }} animate={isInView ? {
            opacity: 1,
            x: 0
          } : {
            opacity: 0,
            x: -20
          }} transition={{
            delay: i * 0.1,
            duration: 0.5
          }}>
                <motion.div whileHover={{
              rotate: 360,
              scale: 1.2
            }} transition={{
              duration: 0.5
            }}>
                  <item.icon className="w-5 h-5 text-[#EB0A1E] mr-4" />
                </motion.div>
                <span className="font-medium">{item.text}</span>
              </motion.li>)}
          </ul>
        </motion.div>

        <motion.div className="mt-10 lg:mt-0 lg:col-span-7" initial={{
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
        delay: 0.2
      }}>
          <div className="bg-white rounded-xl shadow-xl border border-gray-200 p-6 md:p-8">
            <div className="grid grid-cols-2 gap-4 mb-4">
              <motion.div className="col-span-2" initial={{
              opacity: 0,
              y: 20
            }} animate={isInView ? {
              opacity: 1,
              y: 0
            } : {
              opacity: 0,
              y: 20
            }} transition={{
              delay: 0.4,
              duration: 0.5
            }}>
                <div className="h-4 bg-gray-100 rounded w-1/3 mb-2"></div>
                <div className="h-10 bg-gray-50 border border-gray-200 rounded w-full"></div>
              </motion.div>
              {[0, 1].map(i => <motion.div key={i} initial={{
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
                  <div className="h-4 bg-gray-100 rounded w-1/2 mb-2"></div>
                  <div className="h-10 bg-gray-50 border border-gray-200 rounded w-full"></div>
                </motion.div>)}
            </div>
            <motion.div className="flex items-center gap-4 p-4 bg-red-50 rounded-lg border border-red-100" initial={{
            opacity: 0,
            scale: 0.9
          }} animate={isInView ? {
            opacity: 1,
            scale: 1
          } : {
            opacity: 0,
            scale: 0.9
          }} transition={{
            delay: 0.7,
            duration: 0.5
          }} whileHover={{
            scale: 1.02
          }}>
              <div className="w-16 h-16 bg-white rounded border border-gray-200 flex items-center justify-center">
                <Car className="text-gray-300" />
              </div>
              <div>
                <div className="h-4 bg-gray-200 rounded w-32 mb-2"></div>
                <div className="h-3 bg-gray-200 rounded w-24"></div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </AnimatedSection>;
}