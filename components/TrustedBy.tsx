import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TrustedBy: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  const clients = [
    {
      name: "Barros & Barros",
      logo: "/assets/clients/barrosebarros.png",
    },
    {
      name: "MedSênior",
      logo: "/assets/clients/medsenior.png",
    },
    {
      name: "MJL",
      logo: "/assets/clients/mjl.png",
    },
    {
      name: "VLI Incorporações",
      logo: "/assets/clients/vli-incorporacoes.png",
    },
    {
      name: "Plastfort Sul",
      logo: "/assets/clients/plastfortsul.png",
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
      // If we have fewer items than per page, don't scroll
      if (clients.length <= itemsPerPage) return 0;

      const maxIndex = clients.length - itemsPerPage;
      return prevIndex >= maxIndex ? 0 : prevIndex + 1;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      if (clients.length <= itemsPerPage) return 0;

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

            {/* Navigation Buttons (Only show if needed) */}
            {clients.length > itemsPerPage && (
              <>
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
              </>
            )}

            {/* Viewport */}
            <div className="overflow-hidden px-2 py-4">
              <div
                className="flex transition-transform duration-700 ease-out items-center"
                style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
              >
                {clients.map((client, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 px-8 flex justify-center items-center"
                    style={{ width: `${100 / itemsPerPage}%` }}
                  >
                    <div className="relative group cursor-default w-full flex justify-center items-center p-6 rounded-xl border border-transparent hover:border-brand-border bg-transparent hover:bg-brand-surface/50 transition-all duration-500 grayscale hover:grayscale-0 opacity-60 hover:opacity-100">
                      <img
                        src={client.logo}
                        alt={client.name}
                        className="max-h-16 w-auto object-contain transition-all duration-500 group-hover:scale-110 dark:brightness-0 dark:invert"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Progress Indicators (Only if needed) */}
          {clients.length > itemsPerPage && (
            <div className="flex gap-2 mt-2">
              {Array.from({ length: Math.ceil(clients.length / itemsPerPage) }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx * itemsPerPage)}
                  className={`h-1 rounded-full transition-all duration-500 ${Math.floor(currentIndex / itemsPerPage) === idx
                      ? 'w-12 bg-brand-neon'
                      : 'w-2 bg-brand-border hover:bg-brand-muted'
                    }`}
                  aria-label={`Go to page ${idx + 1}`}
                />
              ))}
            </div>
          )}

        </div>
      </div>
    </section>
  );
};

export default TrustedBy;