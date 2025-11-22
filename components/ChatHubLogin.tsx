import React from 'react';
import { MessageSquare, Users, Lock, ExternalLink, Headset, Zap, ArrowRight } from 'lucide-react';

const ChatHubLogin: React.FC = () => {
  return (
    <section id="chathub-login" className="py-24 md:py-32 bg-brand-surface border-t border-brand-border relative overflow-hidden group/section transition-colors duration-300">
      {/* Grid Pattern Background (reused from Hero for consistency) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      {/* Subtle Glows */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand-neon/5 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="bg-brand-dark/50 backdrop-blur-xl border border-brand-border rounded-2xl p-8 md:p-16 shadow-2xl flex flex-col lg:flex-row items-center gap-12 lg:gap-24 transition-all duration-500 hover:border-brand-neon/20 group/card">
          
          {/* Left Content */}
          <div className="flex-1 space-y-8 text-center lg:text-left">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-neon/10 border border-brand-neon/20 text-brand-neon text-xs font-bold uppercase tracking-widest mb-4">
                <Zap size={12} className="fill-brand-neon" />
                Plataforma Exclusiva
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-brand-text tracking-tight leading-tight">
                Acesso <span className="text-brand-neon">ChatHub</span>
              </h2>
            </div>
            
            <p className="text-brand-muted text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 font-light">
              Centralize seu atendimento. A plataforma Omni Channel da Creative Lane para gestão de múltiplas equipes, automação de vendas e suporte 24/7.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2 justify-center lg:justify-start">
              <a 
                href="https://app.chathub.cl/app/login" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative overflow-hidden bg-brand-neon text-brand-dark px-8 py-4 rounded-lg font-bold flex items-center justify-center gap-3 transition-all duration-300 hover:shadow-[0_0_30px_-5px_rgba(var(--color-brand-neon),0.6)] hover:scale-[1.02] active:scale-95 tracking-wide"
              >
                <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shimmer" />
                <span className="relative flex items-center gap-2 z-10">
                   ACESSAR SISTEMA <ExternalLink size={18} />
                </span>
              </a>
              
              <div className="flex items-center justify-center gap-3 px-4 text-brand-muted text-sm font-medium bg-brand-surface/50 rounded-lg border border-transparent hover:border-brand-border transition-colors">
                <Lock size={14} className="text-brand-neon" />
                <span>Ambiente Criptografado</span>
              </div>
            </div>
          </div>

          {/* Right Content - Visual Representation */}
          <div className="flex-1 w-full max-w-lg relative group/interface animate-float">
            <div className="absolute -inset-2 bg-gradient-to-tr from-brand-neon/20 to-blue-500/20 rounded-2xl blur-xl opacity-0 group-hover/interface:opacity-100 transition duration-700"></div>
            <div className="relative bg-brand-dark border border-brand-border rounded-xl p-6 shadow-2xl overflow-hidden backdrop-blur-sm">
              {/* Fake UI Header */}
              <div className="flex items-center gap-4 mb-6 border-b border-brand-border pb-4">
                 <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-brand-border hover:bg-red-500 transition-colors"></div>
                    <div className="w-3 h-3 rounded-full bg-brand-border hover:bg-yellow-500 transition-colors"></div>
                    <div className="w-3 h-3 rounded-full bg-brand-border hover:bg-green-500 transition-colors"></div>
                 </div>
                 <div className="flex-1 flex justify-center">
                    <div className="h-2 w-32 bg-brand-surface rounded-full"></div>
                 </div>
                 <div className="w-10"></div>
              </div>
              
              {/* Fake Chat UI */}
              <div className="space-y-6 font-mono text-xs">
                 {/* Message 1 */}
                 <div className="flex gap-4 animate-in fade-in slide-in-from-left-4 duration-700">
                    <div className="w-10 h-10 rounded-lg bg-brand-surface border border-brand-border flex-shrink-0 flex items-center justify-center text-brand-muted">
                      <Users size={16} />
                    </div>
                    <div className="bg-brand-surface p-4 rounded-lg rounded-tl-none border border-brand-border text-brand-muted w-full relative">
                       <div className="h-2 w-24 bg-brand-border/50 rounded-full mb-3"></div>
                       <div className="h-2 w-full bg-brand-border/30 rounded-full"></div>
                       <div className="h-2 w-3/4 bg-brand-border/30 rounded-full mt-2"></div>
                    </div>
                 </div>
                 
                 {/* Message 2 */}
                 <div className="flex gap-4 flex-row-reverse animate-in fade-in slide-in-from-right-4 duration-700 delay-300">
                    <div className="w-10 h-10 rounded-lg bg-brand-neon flex-shrink-0 flex items-center justify-center text-brand-dark font-bold">
                       CL
                    </div>
                    <div className="bg-brand-neon/10 p-4 rounded-lg rounded-tr-none border border-brand-neon/20 text-brand-text w-full">
                       <div className="h-2 w-full bg-brand-neon/20 rounded-full"></div>
                       <div className="h-2 w-5/6 bg-brand-neon/20 rounded-full mt-2"></div>
                    </div>
                 </div>

                 {/* Input Area */}
                 <div className="pt-4 mt-2 border-t border-brand-border/50 animate-in fade-in duration-1000 delay-500">
                    <div className="h-12 bg-brand-surface/50 rounded-lg border border-brand-border w-full flex items-center justify-between px-4">
                       <div className="flex items-center gap-2">
                          <div className="h-1.5 w-1 bg-brand-neon animate-pulse"></div>
                          <span className="text-brand-muted/50">Digite sua mensagem...</span>
                       </div>
                       <div className="p-1.5 bg-brand-neon rounded text-brand-dark">
                          <ArrowRight size={12} strokeWidth={3} />
                       </div>
                    </div>
                 </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ChatHubLogin;