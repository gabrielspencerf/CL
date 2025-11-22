import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import ServicesMatrix from './components/ServicesMatrix';
import AIAdvisor from './components/AIAdvisor';
import MethodologyChart from './components/MethodologyChart';
import ChatHubLogin from './components/ChatHubLogin';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="min-h-screen bg-brand-dark text-brand-text selection:bg-brand-neon selection:text-brand-dark transition-colors duration-300">
      <Header />
      
      <main>
        <Hero />
        <TrustedBy />
        <ServicesMatrix />
        <AIAdvisor />
        <MethodologyChart />
        
        {/* ChatHub Client Area - Omni Channel Platform Access */}
        <ChatHubLogin />
        
        {/* CTA Section - Corporate Strategic */}
        <section className="py-32 relative overflow-hidden flex justify-center items-center bg-brand-dark border-t border-brand-border transition-colors duration-300">
          <div className="absolute inset-0 bg-[radial-gradient(var(--color-brand-text)_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.03] pointer-events-none"></div>
          
          <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-brand-text tracking-tight leading-tight">
              O mercado não espera quem <br /> pensa pequeno.
            </h2>
            <p className="text-brand-muted text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
              Estratégia de sobrevivência é manter-se relevante. 
              Vamos desenhar o próximo nível da sua operação com tecnologia e inteligência.
            </p>
            <button className="bg-brand-text text-brand-dark hover:bg-brand-neon transition-all duration-300 px-10 py-4 rounded-lg font-bold text-base tracking-wide shadow-lg hover:shadow-brand-neon/20 hover:scale-105 active:scale-95">
              AGENDAR REUNIÃO ESTRATÉGICA
            </button>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;