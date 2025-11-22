import React, { useState, useRef } from 'react';
import { SERVICES } from '../constants';
import { LucideIcon } from "lucide-react";
import { ServiceItem } from '../types';

// Spotlight Card Component
const SpotlightCard: React.FC<ServiceItem> = ({ 
  title, 
  description, 
  icon: Icon, 
  category 
}) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative overflow-hidden rounded-xl border border-brand-border bg-brand-surface p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl h-full flex flex-col"
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(var(--color-brand-neon), 0.1), transparent 40%)`,
        }}
      />
      <div className="relative z-10 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-6">
          <div className="text-brand-text bg-brand-text/5 p-3 rounded-lg group-hover:bg-brand-neon group-hover:text-brand-dark transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-lg group-hover:shadow-brand-neon/20">
            <Icon size={24} strokeWidth={1.5} />
          </div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-brand-muted bg-brand-dark/30 px-2 py-1 rounded border border-brand-text/5 group-hover:border-brand-text/20 transition-colors">
            {category}
          </span>
        </div>

        <h3 className="text-xl font-bold mb-3 text-brand-text group-hover:text-brand-neon transition-colors">
          {title}
        </h3>
        <p className="text-brand-muted leading-relaxed text-sm group-hover:text-brand-text/80 transition-colors flex-1">
          {description}
        </p>
      </div>
    </div>
  );
};

const ServicesMatrix: React.FC = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-brand-dark relative transition-colors duration-300 overflow-hidden">
       {/* Decorative Elements */}
       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-brand-border to-transparent"></div>
       <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-neon/5 blur-[120px] rounded-full pointer-events-none animate-pulse-slow"></div>
       <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/5 blur-[50px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-20 gap-6 border-b border-brand-border pb-8">
          <div>
             <div className="flex items-center gap-2 mb-3">
                <span className="w-1 h-4 bg-brand-neon"></span>
                <span className="text-brand-neon font-bold text-xs tracking-widest uppercase">Nossa Expertise</span>
             </div>
            <h2 className="text-3xl md:text-5xl font-bold text-brand-text tracking-tight">Soluções Integradas</h2>
          </div>
          <p className="text-brand-muted max-w-lg text-base leading-relaxed">
            Não entregamos apenas ferramentas. 
            A Creative Lane oferece a infraestrutura completa de processos e tecnologia para quem precisa escalar com solidez.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => (
            <SpotlightCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesMatrix;