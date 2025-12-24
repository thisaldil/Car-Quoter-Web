import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { AnimatedSection } from './ui/AnimatedSection';
import { ArrowRight } from 'lucide-react';
export function UseCase() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-100px'
  });
  const vehicleImageUrl = 'https://tse2.mm.bing.net/th/id/OIP.kXUmKzNLC7paIa_HcruULwHaDt?w=2000&h=1000&rs=1&pid=ImgDetMain&o=7&rm=3';
  const steps = ['Select GBP (£) as the currency', 'Enter vehicle price (e.g., £45,000)', 'Set current GBP to LKR rate', 'Enter engine capacity (2755 CC)', 'Instantly view full customs duty breakdown'];
  return <AnimatedSection background="gray">
      <div className="max-w-5xl mx-auto">
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
            Example Use Case
          </h2>
          <p className="mt-4 text-gray-600">
            See how the calculator handles a real-world scenario.
          </p>
        </motion.div>

        <motion.div ref={ref} className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden" initial={{
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
          <div className="md:flex">
            <motion.div className="md:w-1/3 bg-gray-100 p-8 flex flex-col justify-center items-center text-center border-r border-gray-200" initial={{
            opacity: 0,
            x: -30
          }} animate={isInView ? {
            opacity: 1,
            x: 0
          } : {
            opacity: 0,
            x: -30
          }} transition={{
            duration: 0.6,
            delay: 0.2
          }}>
              <motion.div className="w-full aspect-video bg-gray-300 rounded-lg mb-4 overflow-hidden" whileHover={{
              scale: 1.05
            }} transition={{
              duration: 0.3
            }}>
                <img src={vehicleImageUrl} alt="Toyota Land Cruiser Prado" className="h-full w-full object-cover" loading="lazy" />
              </motion.div>
              <h3 className="text-xl font-bold text-gray-900">
                Import from UK
              </h3>
              <p className="text-sm text-gray-500 mt-2">2.8L Diesel Turbo</p>
            </motion.div>

            <div className="md:w-2/3 p-8">
              <motion.h4 className="font-bold text-gray-900 mb-6 uppercase tracking-wide text-sm" initial={{
              opacity: 0
            }} animate={isInView ? {
              opacity: 1
            } : {
              opacity: 0
            }} transition={{
              delay: 0.4,
              duration: 0.4
            }}>
                User Workflow
              </motion.h4>
              <div className="space-y-6">
                {steps.map((step, i) => <motion.div key={i} className="flex items-center" initial={{
                opacity: 0,
                x: 30
              }} animate={isInView ? {
                opacity: 1,
                x: 0
              } : {
                opacity: 0,
                x: 30
              }} transition={{
                duration: 0.5,
                delay: 0.5 + i * 0.1,
                ease: [0.22, 1, 0.36, 1]
              }}>
                    <motion.div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-50 text-[#EB0A1E] flex items-center justify-center font-bold text-sm border border-red-100" whileHover={{
                  scale: 1.2,
                  backgroundColor: '#EB0A1E',
                  color: '#fff'
                }} transition={{
                  duration: 0.2
                }}>
                      {i + 1}
                    </motion.div>
                    <div className="ml-4 text-gray-700 font-medium">{step}</div>
                    {i < 4 && <motion.div initial={{
                  opacity: 0
                }} animate={isInView ? {
                  opacity: 1
                } : {
                  opacity: 0
                }} transition={{
                  delay: 0.5 + i * 0.1 + 0.2
                }}>
                        <ArrowRight className="ml-auto w-4 h-4 text-gray-300 hidden md:block" />
                      </motion.div>}
                  </motion.div>)}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatedSection>;
}