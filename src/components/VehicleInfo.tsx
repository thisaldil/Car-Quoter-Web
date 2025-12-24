import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { AnimatedSection } from './ui/AnimatedSection';
import { Car, Fuel, Calendar, Gauge, Image as ImageIcon, ChevronLeft, ChevronRight } from 'lucide-react';
import screenshot1 from './assets/ss1.png';
import screenshot2 from './assets/ss2.png';
export function VehicleInfo() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-100px'
  });
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const [viewportWidth, setViewportWidth] = useState(0);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const images = [{
    src: screenshot1,
    alt: 'Invoice and cost breakdown screen'
  }, {
    src: screenshot2,
    alt: 'Vehicle information form screen'
  }];
  useEffect(() => {
    const update = () => setViewportWidth(viewportRef.current?.clientWidth ?? 0);
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);
  const canGoPrev = activeImageIndex > 0;
  const canGoNext = activeImageIndex < images.length - 1;
  const trackStyle = viewportWidth ? {
    width: viewportWidth * images.length
  } : {
    width: `${images.length * 100}%`
  };
  const slideStyle = viewportWidth ? {
    width: viewportWidth
  } : {
    width: '100%'
  };
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
          <div className="bg-white rounded-xl shadow-xl border border-gray-200 p-4 md:p-6">
            <div ref={viewportRef} className="relative overflow-hidden rounded-lg border border-gray-200 bg-gray-50">
              <motion.div className="flex cursor-grab active:cursor-grabbing" drag="x" dragElastic={0} dragMomentum={false} dragConstraints={{
              left: -(viewportWidth * (images.length - 1)),
              right: 0
            }} onDragEnd={(_, info) => {
              const threshold = 60;
              if (info.offset.x < -threshold && activeImageIndex < images.length - 1) {
                setActiveImageIndex(activeImageIndex + 1);
                return;
              }
              if (info.offset.x > threshold && activeImageIndex > 0) {
                setActiveImageIndex(activeImageIndex - 1);
              }
            }} animate={{
              x: viewportWidth ? -(activeImageIndex * viewportWidth) : `-${activeImageIndex * 100}%`
            }} transition={{
              type: 'spring',
              stiffness: 280,
              damping: 30
            }} style={{
              ...trackStyle
            }}>
                {images.map(image => <div key={image.alt} className="flex-shrink-0" style={slideStyle}>
                    <div className="aspect-video">
                      <img src={image.src} alt={image.alt} className="h-full w-full object-contain bg-white" loading="lazy" draggable={false} />
                    </div>
                  </div>)}
              </motion.div>

              <div className="pointer-events-none absolute inset-0 flex items-center justify-between px-2">
                <button type="button" className="pointer-events-auto inline-flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 bg-white/90 text-gray-700 shadow-sm disabled:opacity-40" onClick={() => setActiveImageIndex(i => Math.max(0, i - 1))} disabled={!canGoPrev} aria-label="Previous image">
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button type="button" className="pointer-events-auto inline-flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 bg-white/90 text-gray-700 shadow-sm disabled:opacity-40" onClick={() => setActiveImageIndex(i => Math.min(images.length - 1, i + 1))} disabled={!canGoNext} aria-label="Next image">
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatedSection>;
}