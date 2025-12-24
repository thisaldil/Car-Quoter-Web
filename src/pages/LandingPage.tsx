import React from 'react';
import { motion } from 'framer-motion';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Features } from '../components/Features';
import { ExciseDutyExplainer } from '../components/ExciseDutyExplainer';
import { CostBreakdown } from '../components/CostBreakdown';
import { VehicleInfo } from '../components/VehicleInfo';
import { TargetAudience } from '../components/TargetAudience';
import { Differentiators } from '../components/Differentiators';
import { UseCase } from '../components/UseCase';
import { Technology } from '../components/Technology';
import { FutureEnhancements } from '../components/FutureEnhancements';
import { CTA } from '../components/CTA';
import logo from '../components/assets/carquoterlogo.png';
export function LandingPage() {
  return <div className="min-h-screen bg-white font-sans text-gray-900">
      {/* Animated Navigation */}
      <motion.nav className="border-b border-gray-100 bg-white/80 backdrop-blur-md sticky top-0 z-50" initial={{
      y: -100
    }} animate={{
      y: 0
    }} transition={{
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <motion.div className="flex items-center gap-3" whileHover={{
            scale: 1.05
          }} transition={{
            duration: 0.2
          }}>
              <img src={logo} alt="MotorDuty logo" className="h-8 w-auto" />
              <span className="text-2xl font-bold text-[#EB0A1E] tracking-tighter cursor-pointer">
                MotorDuty
              </span>
            </motion.div>
            <div className="hidden md:flex items-center space-x-8">
              {['Features', 'About'].map((item, i) => <motion.a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-gray-700 hover:text-[#EB0A1E] cursor-pointer" initial={{
              opacity: 0,
              y: -10
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: 0.1 * i,
              duration: 0.4
            }} whileHover={{
              y: -2
            }}>
                  {item}
                </motion.a>)}
            </div>
          </div>
        </div>
      </motion.nav>

      <Hero />
      <About />
      <Features />
      <ExciseDutyExplainer />
      <CostBreakdown />
      <VehicleInfo />
      <TargetAudience />
      <Differentiators />
      <UseCase />
      <Technology />
      <FutureEnhancements />
      <CTA />

      {/* Animated Footer */}
      <motion.footer className="bg-gray-900 text-white py-12 border-t border-gray-800" initial={{
      opacity: 0
    }} whileInView={{
      opacity: 1
    }} viewport={{
      once: true
    }} transition={{
      duration: 0.8
    }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-xl font-bold tracking-tighter">
              MotorDuty
            </span>
            <p className="text-sm text-gray-400 mt-1">
              © 2024 Vehicle Import Calculator. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-6 text-sm text-gray-400">
            {['Privacy Policy', 'Terms of Service', 'Contact'].map((item, i) => <motion.a key={item} href="#" className="hover:text-white" initial={{
            opacity: 0,
            y: 10
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: i * 0.1,
            duration: 0.4
          }} whileHover={{
            y: -2
          }}>
                  {item}
                </motion.a>)}
          </div>
        </div>
      </motion.footer>
    </div>;
}