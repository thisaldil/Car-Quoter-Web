import React from 'react';
interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: 'white' | 'gray' | 'dark';
  id?: string;
}
export function Section({
  children,
  className = '',
  background = 'white',
  id
}: SectionProps) {
  const backgrounds = {
    white: 'bg-white',
    gray: 'bg-[#F7F7F7]',
    dark: 'bg-[#1A1A1A] text-white'
  };
  return <section id={id} className={`py-16 md:py-24 ${backgrounds[background]} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </section>;
}