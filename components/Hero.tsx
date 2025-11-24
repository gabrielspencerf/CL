import React from 'react';
import { ArrowRight, ChevronRight, Zap, Activity } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-brand-dark transition-colors duration-300">

      {/* Dynamic Animated Grid Background */}
      <div className="absolute inset-0 z-0 overflow-hidden perspective-[1000px]">
        <div className="absolute inset-0 opacity-[0.15] pointer-events-none grid-bg animate-grid-move origin-top scale-[1.5]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-dark/50 to-brand-dark"></div>
      </div>

      {/* Neon Accent Line */}
      <div className="absolute top-0 right-0 w-[1px] h-screen bg-gradient-to-b from-transparent via-brand-neon to-transparent opacity-20"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid lg:grid-cols-2 gap-16 items-center">

        <div className="space-y-10 opacity-0 animate-fade-in">
          <div className="inline-flex items-center gap-3 bg-brand-text/5 border border-brand-text/10 px-4 py-2 rounded-full hover:bg-brand-text/10 transition-colors cursor-default">
            <span className="w-2 h-2 rounded-full bg-brand-neon animate-ping"></span>
            <span className="w-2 h-2 rounded-full bg-brand-neon absolute"></span>
            <span className="text-xs font-medium text-brand-muted tracking-wide uppercase">Tecnologia & Assessoria Estratégica</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] text-brand-text group">
            Crescer não é opção. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-neon to-emerald-600 animate-pulse-slow inline-block">
              É sobrevivência.
            </span>
          </h1>

          <p className="text-lg text-brand-muted max-w-xl leading-relaxed font-light transform hover:text-brand-text/80 transition-colors duration-300">
            Unimos visão de assessoria com execução tecnológica.
            Transformamos negócios estagnados em operações eficientes, escaláveis e preparadas para o mercado atual.
            Sem fórmulas mágicas, apenas engenharia de negócios.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              onClick={() => window.Typebot?.open()}
              className="group relative overflow-hidden bg-brand-text text-brand-dark px-8 py-4 rounded-lg font-bold flex items-center justify-center gap-2 transition-all duration-300 tracking-wide shadow-[0_0_20px_-5px_rgba(var(--color-brand-text),0.3)] hover:shadow-[0_0_30px_-5px_rgba(var(--color-brand-neon),0.5)] hover:scale-105 active:scale-95"
            >
              <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shimmer" />
              <span className="relative z-10 flex items-center gap-2">
                CONSULTORIA IA <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <button
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="group border border-brand-text/20 hover:border-brand-text text-brand-text px-8 py-4 rounded-lg font-medium text-sm flex items-center justify-center gap-3 transition-all duration-300 hover:bg-brand-text/5 hover:scale-105 active:scale-95"
            >
              CONHECER SOLUÇÕES
            </button>
          </div>

          <div className="flex items-center gap-8 pt-8 border-t border-brand-text/5">
            <div className="flex flex-col gap-1 group cursor-default">
              <span className="text-2xl font-bold text-brand-text group-hover:text-brand-neon transition-colors">Advisory</span>
              <span className="text-xs text-brand-muted">Visão Estratégica</span>
            </div>
            <div className="w-px h-8 bg-brand-text/20"></div>
            <div className="flex flex-col gap-1 group cursor-default">
              <span className="text-2xl font-bold text-brand-text group-hover:text-brand-neon transition-colors">Tech</span>
              <span className="text-xs text-brand-muted">Execução & Automação</span>
            </div>
          </div>
        </div>

        {/* Visual Component: The Strategy Dashboard */}
        <div className="hidden lg:block relative animate-float">
          <div className="absolute -inset-1 bg-gradient-to-r from-brand-neon to-transparent opacity-20 blur-2xl rounded-xl animate-pulse-slow"></div>
          <div className="relative bg-brand-surface border border-brand-border rounded-xl p-1 shadow-2xl transition-colors duration-300 backdrop-blur-sm hover:shadow-brand-neon/10">
            {/* Window Header */}
            <div className="bg-brand-dark/50 px-4 py-3 border-b border-brand-border flex justify-between items-center rounded-t-lg">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
              </div>
              <span className="text-[10px] font-mono text-brand-muted uppercase tracking-widest flex items-center gap-2">
                <Activity size={10} className="text-brand-neon animate-pulse" />
                System_Monitor // CL_Core
              </span>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6 bg-brand-dark/95 rounded-b-lg transition-colors duration-300">

              {/* Metric Cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-brand-surface border border-brand-border p-5 rounded-lg hover:border-brand-neon/50 transition-all duration-500 group hover:-translate-y-1 cursor-crosshair relative overflow-hidden">
                  <div className="absolute inset-0 bg-brand-neon/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="flex justify-between items-start mb-3 relative z-10">
                    <Activity size={18} className="text-brand-muted group-hover:text-brand-neon transition-colors" />
                    <span className="text-[10px] text-brand-neon font-medium bg-brand-neon/10 px-2 py-0.5 rounded-full border border-brand-neon/20">ATIVO</span>
                  </div>
                  <div className="text-2xl font-bold text-brand-text mb-1 relative z-10">Eficiência</div>
                  <div className="text-[11px] text-brand-muted font-medium relative z-10">Otimização de Recursos</div>
                </div>
                <div className="bg-brand-surface border border-brand-border p-5 rounded-lg hover:border-brand-neon/50 transition-all duration-500 group hover:-translate-y-1 cursor-crosshair relative overflow-hidden">
                  <div className="absolute inset-0 bg-brand-text/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="flex justify-between items-start mb-3 relative z-10">
                    <Zap size={18} className="text-brand-muted group-hover:text-brand-neon transition-colors" />
                    <span className="text-[10px] text-brand-text font-medium bg-brand-text/10 px-2 py-0.5 rounded-full border border-brand-text/20">+42%</span>
                  </div>
                  <div className="text-2xl font-bold text-brand-text mb-1 relative z-10">Expansão</div>
                  <div className="text-[11px] text-brand-muted font-medium relative z-10">Receita Recorrente</div>
                </div>
              </div>

              {/* Code/Strategy Log */}
              <div className="font-mono text-xs space-y-3 text-brand-muted p-5 border border-brand-border bg-brand-surface/50 rounded-lg transition-colors duration-300 hover:bg-brand-surface/80">
                <div className="flex justify-between items-center">
                  <span className="text-brand-muted">Diagnóstico Inicial...</span>
                  <span className="text-brand-neon bg-brand-neon/10 px-2 py-0.5 rounded border border-brand-neon/20">CONCLUÍDO</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-brand-muted">Implementação Tech...</span>
                  <span className="text-blue-400 bg-blue-400/10 px-2 py-0.5 rounded border border-blue-400/20 animate-pulse">EM ANDAMENTO</span>
                </div>
                <div className="h-px w-full bg-brand-text/5 my-2"></div>
                <div className="flex gap-2 items-center text-brand-text">
                  <ChevronRight size={14} className="text-brand-neon animate-bounce-x" />
                  <span className="typing-effect">Status: Otimizando Operação</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;