import React, { useState, useEffect } from 'react';
import { 
  Zap, 
  Command, 
  Building2, 
  Globe2, 
  Cpu, 
  Rocket, 
  Layers, 
  GitMerge,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const TrustedBy: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  const clients = [
    { 
      name: "VANGUARD", 
      sub: "LOGISTICS", 
      icon: Globe2,
      color: "group-hover:text-blue-400", 
      borderColor: "group-hover:border-blue-400",
      shadowColor: "group-hover:shadow-blue-400/20",
      bgGradient: "from-blue-500/10 via-blue-500/5 to-transparent"
    },
    { 
      name: "NEXUS", 
      sub: "CAPITAL", 
      icon: Building2,
      color: "group-hover:text-emerald-400",
      borderColor: "group-hover:border-emerald-400",
      shadowColor: "group-hover:shadow-emerald-400/20",
      bgGradient: "from-emerald-500/10 via-emerald-500/5 to-transparent"
    },
    { 
      name: "APEX", 
      sub: "ENERGY", 
      icon: Zap,
      color: "group-hover:text-yellow-400",
      borderColor: "group-hover:border-yellow-400",
      shadowColor: "group-hover:shadow-yellow-400/20",
      bgGradient: "from-yellow-500/10 via-yellow-500/5 to-transparent"
    },
    { 
      name: "SYNAPSE", 
      sub: "SYSTEMS", 
      icon: Command,
      color: "group-hover:text-purple-400",
      borderColor: "group-hover:border-purple-400",
      shadowColor: "group-hover:shadow-purple-400/20",
      bgGradient: "from-purple-500/10 via-purple-500/5 to-transparent"
    },
    { 
      name: "CIPHER", 
      sub: "SECURITY", 
      icon: Cpu,
      color: "group-hover:text-red-400",
      borderColor: "group-hover:border-red-400",
      shadowColor: "group-hover:shadow-red-400/20",
      bgGradient: "from-red-500/10 via-red-500/5 to-transparent"
    },
    { 
      name: "STRATOS", 
      sub: "AEROSPACE", 
      icon: Rocket,
      color: "group-hover:text-orange-400",
      borderColor: "group-hover:border-orange-400",
      shadowColor: "group-hover:shadow-orange-400/20",
      bgGradient: "from-orange-500/10 via-orange-500/5 to-transparent"
    },
    { 
      name: "OMNI", 
      sub: "MEDIA", 
      icon: Layers,
      color: "group-hover:text-cyan-400",
      borderColor: "group-hover:border-cyan-400",
      shadowColor: "group-hover:shadow-cyan-400/20",
      bgGradient: "from-cyan-500/10 via-cyan-500/5 to-transparent"
    },
    { 
      name: "VECTOR", 
      sub: "ROBOTICS", 
      icon: GitMerge,
      color: "group-hover:text-pink-400",
      borderColor: "group-hover:border-pink-400",
      shadowColor: "group-hover:shadow-pink-400/20",
      bgGradient: "from-pink-500/10 via-pink-500/5 to-transparent"
    },
  ];

  // Responsividade do Carrossel
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(4);
      }
    };

    // Set initial value
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const maxIndex = clients.length - itemsPerPage;
      return prevIndex >= maxIndex ? 0 : prevIndex + 1;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const maxIndex = clients.length - itemsPerPage;
      return prevIndex <= 0 ? maxIndex : prevIndex - 1;
    });
  };

  return (
    <section className="py-24 bg-brand-dark border-b border-brand-border transition-colors duration-300 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center justify-center gap-12">
          
          <div className="flex items-center gap-4 opacity-60 hover:opacity-100 transition-opacity duration-500">
             <div className="h-[1px] w-12 bg-brand-border"></div>
             <p className="text-center text-[11px] font-bold text-brand-muted uppercase tracking-[0.3em]">
              Ecossistema de Parceiros
            </p>
            <div className="h-[1px] w-12 bg-brand-border"></div>
          </div>

          {/* Carousel Container */}
          <div className="relative w-full group/carousel">
            
            {/* Navigation Buttons */}
            <button 
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-brand-surface border border-brand-border text-brand-muted hover:text-brand-text hover:border-brand-neon/50 transition-all duration-300 -ml-4 md:-ml-12 hover:scale-110 shadow-lg"
              aria-label="Previous slide"
            >
              <ChevronLeft size={20} />
            </button>

            <button 
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-brand-surface border border-brand-border text-brand-muted hover:text-brand-text hover:border-brand-neon/50 transition-all duration-300 -mr-4 md:-mr-12 hover:scale-110 shadow-lg"
              aria-label="Next slide"
            >
              <ChevronRight size={20} />
            </button>

            {/* Viewport */}
            <div className="overflow-hidden px-2 py-4">
              <div 
                className="flex transition-transform duration-700 ease-out"
                style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
              >
                {clients.map((client, index) => {
                  const Icon = client.icon;
                  return (
                    <div 
                      key={index} 
                      className="flex-shrink-0 px-4 flex justify-center"
                      style={{ width: `${100 / itemsPerPage}%` }}
                    >
                      <div className="relative flex items-center gap-4 group cursor-default w-full justify-center p-6 rounded-xl border border-transparent hover:border-brand-border bg-transparent hover:bg-brand-surface/50 transition-all duration-500">
                        
                        {/* Icon Box */}
                        <div className={`
                          p-3 rounded-lg bg-brand-surface border border-brand-border 
                          text-brand-muted
                          transition-all duration-500 
                          ${client.color}
                          ${client.borderColor}
                          group-hover:shadow-lg
                        `}>
                          <Icon size={24} strokeWidth={1.5} />
                        </div>
                        
                        <div className="flex flex-col">
                          <span className={`
                            text-lg font-bold tracking-tight leading-none 
                            text-brand-text
                            transition-colors duration-300
                          `}>
                            {client.name}
                          </span>
                          <span className="text-[9px] font-medium text-brand-muted tracking-[0.2em] uppercase mt-1.5">
                            {client.sub}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Progress Indicators */}
          <div className="flex gap-2 mt-2">
             {Array.from({ length: Math.ceil(clients.length / itemsPerPage) }).map((_, idx) => (
               <button
                 key={idx}
                 onClick={() => setCurrentIndex(idx * itemsPerPage)}
                 className={`h-1 rounded-full transition-all duration-500 ${
                   Math.floor(currentIndex / itemsPerPage) === idx 
                    ? 'w-12 bg-brand-neon' 
                    : 'w-2 bg-brand-border hover:bg-brand-muted'
                 }`}
                 aria-label={`Go to page ${idx + 1}`}
               />
             ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default TrustedBy;