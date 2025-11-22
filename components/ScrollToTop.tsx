import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Voltar ao topo"
      className={`fixed bottom-8 right-8 z-50 p-3 rounded-lg border transition-all duration-500 transform shadow-2xl flex items-center justify-center group
        ${isVisible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-10 pointer-events-none'}
        bg-brand-surface/80 backdrop-blur-md border-brand-border hover:border-brand-neon hover:shadow-brand-neon/20
      `}
    >
      <ArrowUp 
        size={20} 
        className="text-brand-muted group-hover:text-brand-neon transition-colors duration-300 group-hover:-translate-y-0.5 transform" 
      />
    </button>
  );
};

export default ScrollToTop;