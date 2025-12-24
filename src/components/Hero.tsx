import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import heroBg from './assets/car.jpg';
export function Hero() {
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
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
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };
  return <div className="relative overflow-hidden bg-gray-900">
      {/* Background image */}
      <div className="absolute inset-0 z-0 bg-cover bg-center" style={{
      backgroundImage: `url(${heroBg})`
    }} />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 z-20 bg-black/50" />

      {/* Animated Background Pattern */}
      <motion.div className="absolute inset-0 z-10 opacity-10" initial={{
      x: -100
    }} animate={{
      x: 0
    }} transition={{
      duration: 1.5,
      ease: [0.22, 1, 0.36, 1]
    }}>
        <div className="absolute right-0 top-0 h-full w-1/2 bg-gray-900 skew-x-[-12deg] translate-x-20" />
      </motion.div>

      <div className="relative z-30 max-w-7xl mx-auto">
        <div className="relative pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <motion.main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28" variants={containerVariants} initial="hidden" animate="visible">
            <div className="sm:text-center lg:text-left">
              <motion.div variants={itemVariants} className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider text-[#EB0A1E] uppercase bg-white/10 rounded-full">
                Professional Import Tool
              </motion.div>

              <motion.h1 variants={itemVariants} className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Accurate Vehicle</span>{' '}
                <span className="block text-[#EB0A1E] xl:inline">
                  Import Cost Estimation
                </span>
              </motion.h1>

              <motion.p variants={itemVariants} className="mt-3 text-base text-white/80 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Calculate Sri Lankan vehicle import duties with real customs
                rules, multi-currency pricing, and engine CC based excise duty.
                Designed for importers, dealers, and consultants.
              </motion.p>

              <motion.div variants={itemVariants} className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start gap-4">
                <Button size="lg" withArrow>
                  Get Started
                </Button>
                <Button variant="outline" size="lg">
                  View Sample Calculation
                </Button>
              </motion.div>
            </div>
          </motion.main>
        </div>
      </div>

     
    </div>;
}