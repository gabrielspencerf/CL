import React, { useState, useEffect, useRef } from 'react';
import { Brain, ArrowRight, Activity, Plus, Terminal, User, Cpu, Trash2, StopCircle, Code } from 'lucide-react';
import { getStrategicStream } from '../services/geminiService';
import { AnalysisStatus } from '../types';

interface HistoryItem {
  role: 'user' | 'ai';
  content: string;
  timestamp: string;
}

// Enhanced Markdown Formatter Component
const FormattedText: React.FC<{ text: string }> = ({ text }) => {
  // Detect code blocks ``` code ```
  const parts = text.split(/(```[\s\S]*?```)/g);

  return (
    <div className="space-y-2">
      {parts.map((part, index) => {
        if (part.startsWith('```')) {
          // Remove the backticks and render as code block
          const codeContent = part.replace(/```/g, '').trim();
          return (
            <div key={index} className="bg-black/40 border border-brand-border rounded-md p-3 overflow-x-auto my-2">
              <div className="flex items-center gap-2 text-xs text-brand-muted mb-2 border-b border-brand-border/50 pb-1">
                <Code size={12} /> Snippet
              </div>
              <pre className="font-mono text-xs md:text-sm text-brand-neon whitespace-pre-wrap break-all">
                {codeContent}
              </pre>
            </div>
          );
        }

        // Regular text processing
        const lines = part.split('\n');
        return (
          <div key={index} className="space-y-1">
            {lines.map((line, i) => {
              if (!line.trim()) return <div key={i} className="h-2" />;
              
              // Handle Bullet points
              if (line.trim().startsWith('- ') || line.trim().startsWith('* ')) {
                return (
                  <div key={i} className="flex gap-2 ml-2">
                    <span className="text-brand-neon mt-1.5 text-[10px]">•</span>
                    <span className="flex-1" dangerouslySetInnerHTML={{ 
                      __html: parseBold(line.replace(/^[-*]\s/, '')) 
                    }} />
                  </div>
                );
              }

              // Handle Headers (simple #)
              if (line.trim().startsWith('### ')) {
                  return <h4 key={i} className="text-brand-neon font-bold text-lg mt-4 mb-2" dangerouslySetInnerHTML={{ __html: parseBold(line.replace('### ', '')) }} />;
              }
              
               if (line.trim().startsWith('## ')) {
                  return <h3 key={i} className="text-brand-text font-bold text-xl mt-6 mb-3 border-b border-brand-border pb-1" dangerouslySetInnerHTML={{ __html: parseBold(line.replace('## ', '')) }} />;
              }

              // Regular paragraph with bold parsing
              return (
                <p key={i} className="leading-relaxed" dangerouslySetInnerHTML={{ 
                  __html: parseBold(line) 
                }} />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

// Helper to replace **text** with <strong>text</strong>
const parseBold = (text: string) => {
  return text.replace(/\*\*(.*?)\*\*/g, '<strong class="text-brand-text font-bold">$1</strong>');
};

const AIAdvisor: React.FC = () => {
  const [input, setInput] = useState('');
  const [status, setStatus] = useState<AnalysisStatus>(AnalysisStatus.IDLE);
  const [history, setHistory] = useState<HistoryItem[]>([]);
  
  // Streaming state
  const [currentStreamText, setCurrentStreamText] = useState('');
  
  const scrollRef = useRef<HTMLDivElement>(null);
  const [shouldAutoScroll, setShouldAutoScroll] = useState(true);

  // Smart scroll handler
  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
      // If user is close to bottom (within 50px), enable auto-scroll. Otherwise disable it.
      const isNearBottom = scrollHeight - scrollTop - clientHeight < 50;
      setShouldAutoScroll(isNearBottom);
    }
  };

  const scrollToBottom = () => {
    // Use direct scrollTop manipulation on the container to prevent main window scrolling
    // Use 'auto' behavior to prevent jittering during rapid streaming updates
    if (shouldAutoScroll && scrollRef.current) {
       scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: 'auto' 
      });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [history, currentStreamText]); // Trigger on updates

  const handleAnalyze = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || status === AnalysisStatus.ANALYZING) return;

    const userMessageText = input;
    const userMessage: HistoryItem = {
      role: 'user',
      content: userMessageText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setHistory(prev => [...prev, userMessage]);
    setInput('');
    setStatus(AnalysisStatus.ANALYZING);
    setCurrentStreamText('');
    setShouldAutoScroll(true); // Force scroll on new message

    try {
      // Note: We rely on state history, which might not have the very latest message in the current closure
      // yet if we didn't use functional update, but getStrategicStream takes history AND the new message separately.
      // The 'history' passed here is the history BEFORE the user's new message.
      const streamResponse = await getStrategicStream(history, userMessageText);
      
      let fullText = '';
      
      for await (const chunk of streamResponse) {
        if (chunk.text) {
           fullText += chunk.text;
           setCurrentStreamText(fullText);
        }
      }

      // Stream complete
      setHistory(prev => [...prev, {
        role: 'ai',
        content: fullText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }]);
      setCurrentStreamText('');
      setStatus(AnalysisStatus.COMPLETE);

    } catch (error) {
      console.error(error);
      setStatus(AnalysisStatus.ERROR);
      const errorMsg: HistoryItem = {
        role: 'ai',
        content: "⚠️ **ERRO DE SISTEMA:** \n\nFalha na comunicação com o Core. Verifique sua conexão ou tente novamente mais tarde.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setHistory(prev => [...prev, errorMsg]);
      setCurrentStreamText('');
    }
  };

  const stopGeneration = () => {
     setStatus(AnalysisStatus.IDLE);
     if (currentStreamText) {
        setHistory(prev => [...prev, {
            role: 'ai',
            content: currentStreamText + "\n\n*[Processamento Interrompido pelo Usuário]*",
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }]);
        setCurrentStreamText('');
     }
  };

  const clearHistory = () => {
    setHistory([]);
    setStatus(AnalysisStatus.IDLE);
    setCurrentStreamText('');
  };

  return (
    <section id="advisor" className="py-24 md:py-32 bg-brand-dark border-t border-brand-border relative transition-colors duration-300">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(var(--color-brand-muted)_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-brand-neon/20 bg-brand-neon/5 text-brand-neon rounded-full text-xs font-bold mb-6 uppercase tracking-widest">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-neon opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-neon"></span>
            </span>
            Gemini 2.5 Flash Engine
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-brand-text mb-4 tracking-tight">Conselheiro Estratégico IA</h2>
          <p className="text-brand-muted max-w-2xl mx-auto text-base leading-relaxed">
             Inteligência artificial treinada em Arquitetura de Vendas e Escala.
             Descreva seu cenário atual e receba insights táticos.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 h-[650px]">
          
          {/* Input Panel */}
          <div className="lg:col-span-4 bg-brand-surface border border-brand-border p-6 rounded-xl flex flex-col h-full shadow-xl transition-colors duration-300 order-2 lg:order-1">
            <h3 className="text-lg font-bold text-brand-text mb-6 flex items-center gap-2">
              <Plus size={18} className="text-brand-neon" /> 
              Parâmetros
            </h3>
            
            <div className="flex-1 flex flex-col">
              <label className="text-xs font-bold text-brand-muted uppercase mb-3 block tracking-wide">
                Input de Dados
              </label>
              <textarea 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ex: Tenho 5 vendedores mas não batemos a meta. O que posso analisar no CRM?"
                className="w-full flex-1 bg-brand-dark border border-brand-border p-4 text-sm text-brand-text focus:border-brand-neon focus:outline-none transition-all duration-300 resize-none font-sans rounded-lg mb-4 placeholder:text-brand-muted/60 custom-scrollbar"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleAnalyze(e);
                  }
                }}
              />
              
              <div className="space-y-3">
                {status === AnalysisStatus.ANALYZING ? (
                   <button 
                    onClick={stopGeneration}
                    className="w-full bg-red-500/10 text-red-400 border border-red-500/20 font-bold py-4 rounded-lg hover:bg-red-500/20 transition-all duration-300 flex items-center justify-center gap-2"
                   >
                      <StopCircle size={18} /> INTERROMPER
                   </button>
                ) : (
                  <button 
                    onClick={handleAnalyze}
                    disabled={!input.trim()}
                    className="w-full bg-brand-neon text-brand-dark font-bold py-4 rounded-lg hover:bg-brand-text hover:text-brand-dark transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.02] active:scale-[0.98]"
                  >
                    ENVIAR DADOS <ArrowRight size={16} />
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Output Panel (Terminal History) */}
          <div className="lg:col-span-8 flex flex-col order-1 lg:order-2 h-full min-h-0">
            <div className="h-full bg-brand-dark border border-brand-border rounded-xl relative overflow-hidden flex flex-col shadow-2xl transition-colors duration-300">
              
              {/* Terminal Header */}
              <div className="bg-brand-surface border-b border-brand-border px-4 py-3 flex justify-between items-center transition-colors duration-300 shrink-0 z-20">
                <div className="flex gap-2 items-center">
                  <Terminal size={14} className="text-brand-neon" />
                  <span className="text-xs font-medium text-brand-muted">STRATEGY_LOG_V2.4</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex gap-4 text-[10px] font-mono text-brand-muted hidden sm:flex">
                    <span>LATENCY: 12ms</span>
                    <span>BUFFER: {history.length} / 30</span>
                  </div>
                  {history.length > 0 && (
                    <button 
                      onClick={clearHistory}
                      className="text-brand-muted hover:text-red-500 transition-colors p-1"
                      title="Limpar Histórico"
                    >
                      <Trash2 size={14} />
                    </button>
                  )}
                </div>
              </div>

              {/* Terminal Body - Scrollable */}
              <div 
                ref={scrollRef}
                onScroll={handleScroll}
                className="flex-1 min-h-0 overflow-y-auto custom-scrollbar p-6 font-mono text-sm leading-relaxed relative bg-brand-dark transition-colors duration-300"
              >
                {history.length === 0 && status === AnalysisStatus.IDLE && (
                  <div className="h-full flex flex-col items-center justify-center text-brand-muted opacity-30 gap-4 select-none">
                    <Brain size={48} strokeWidth={1} />
                    <div className="text-center">
                        <p className="font-bold">AGUARDANDO INPUT</p>
                        <p className="text-xs mt-1">Sistema pronto para análise de arquitetura de vendas.</p>
                    </div>
                  </div>
                )}

                {/* History Items */}
                <div className="space-y-8 pb-4">
                  {history.map((item, index) => (
                    <div key={index} className="animate-in fade-in slide-in-from-bottom-2 duration-500">
                      
                      {/* Header for Item */}
                      <div className="flex items-center gap-2 mb-2 opacity-60 select-none">
                        {item.role === 'user' ? (
                          <>
                            <User size={12} className="text-brand-text" />
                            <span className="text-[10px] text-brand-text font-bold uppercase tracking-wider">User_Input</span>
                          </>
                        ) : (
                          <>
                            <Cpu size={12} className="text-brand-neon" />
                            <span className="text-[10px] text-brand-neon font-bold uppercase tracking-wider">Creative_Core</span>
                          </>
                        )}
                        <span className="text-[10px] text-brand-muted ml-auto font-sans">{item.timestamp}</span>
                      </div>

                      {/* Content */}
                      <div className={`
                        p-4 rounded-lg border relative overflow-hidden
                        ${item.role === 'user' 
                          ? 'bg-brand-surface border-brand-border text-brand-muted italic' 
                          : 'bg-brand-neon/5 border-brand-neon/20 text-brand-text shadow-[0_0_15px_-5px_rgba(var(--color-brand-neon),0.1)]'}
                      `}>
                        <div className="font-sans text-sm md:text-base">
                          <FormattedText text={item.content} />
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Active Streaming State */}
                  {status === AnalysisStatus.ANALYZING && (
                    <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                       <div className="flex items-center gap-2 mb-2 opacity-60 select-none">
                          <Cpu size={12} className="text-brand-neon" />
                          <span className="text-[10px] text-brand-neon font-bold uppercase tracking-wider">Creative_Core</span>
                          <span className="text-[10px] text-brand-neon ml-auto animate-pulse flex items-center gap-1">
                             <Activity size={10} /> THINKING
                          </span>
                       </div>
                       
                       <div className="p-4 rounded-lg border border-brand-neon/20 bg-brand-neon/5 text-brand-text min-h-[60px] shadow-[0_0_15px_-5px_rgba(var(--color-brand-neon),0.1)]">
                          {currentStreamText ? (
                            <div className="font-sans text-sm md:text-base">
                               <FormattedText text={currentStreamText} />
                               <span className="inline-block w-2 h-4 bg-brand-neon ml-1 animate-pulse align-middle shadow-[0_0_8px_rgba(var(--color-brand-neon),0.8)]"></span>
                            </div>
                          ) : (
                             <div className="flex items-center gap-2 text-brand-neon/70 text-sm py-2">
                                <div className="flex gap-1">
                                    <span className="w-1.5 h-1.5 bg-brand-neon rounded-full animate-bounce"></span>
                                    <span className="w-1.5 h-1.5 bg-brand-neon rounded-full animate-bounce animation-delay-2000"></span>
                                    <span className="w-1.5 h-1.5 bg-brand-neon rounded-full animate-bounce animation-delay-4000"></span>
                                </div>
                                <span>Analisando arquitetura de vendas...</span>
                             </div>
                          )}
                       </div>
                    </div>
                  )}
                  <div className="h-px w-full" />
                </div>
                
                {/* Scanline Effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-neon/5 to-transparent h-4 w-full pointer-events-none animate-scanline opacity-10 mix-blend-overlay z-10"></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AIAdvisor;