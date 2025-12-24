import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  withArrow?: boolean;
}
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  withArrow = false,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-bold transition-all duration-200 uppercase tracking-wide focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  const variants = {
    primary: 'bg-[#EB0A1E] text-white hover:bg-[#C00015] focus:ring-[#EB0A1E] border border-transparent',
    secondary: 'bg-gray-900 text-white hover:bg-gray-800 focus:ring-gray-900 border border-transparent',
    outline: 'bg-transparent text-[#EB0A1E] border-2 border-[#EB0A1E] hover:bg-[#EB0A1E] hover:text-white focus:ring-[#EB0A1E]',
    ghost: 'bg-transparent text-gray-700 hover:text-[#EB0A1E] hover:bg-gray-50 focus:ring-gray-200'
  };
  const sizes = {
    sm: 'text-xs px-4 py-2',
    md: 'text-sm px-6 py-3',
    lg: 'text-base px-8 py-4'
  };
  return <motion.button className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`} whileHover={{
    scale: 1.05
  }} whileTap={{
    scale: 0.95
  }} transition={{
    duration: 0.2,
    ease: [0.22, 1, 0.36, 1]
  }} {...props}>
      {children}
      {withArrow && <motion.span initial={{
      x: 0
    }} whileHover={{
      x: 5
    }} transition={{
      duration: 0.2
    }}>
          <ArrowRight className="ml-2 h-4 w-4" />
        </motion.span>}
    </motion.button>;
}