import React from 'react';
import { Linkedin, Instagram, Mail, MapPin, Phone, FileText, ShieldCheck, CheckCircle2 } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark border-t border-brand-border pt-16 pb-8 font-sans text-sm transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">

          <div className="col-span-1 md:col-span-2">
            <img
              src="/assets/logo.svg"
              alt="Creative Lane"
              className="h-12 w-auto logo-adaptive transition-all duration-300 hover:scale-105 mb-6"
            />
            <p className="text-brand-muted max-w-xs leading-relaxed mb-8">
              Creative Lane
              <br />
              Unindo estratégia de negócios baseada em dados e tecnologia de ponta para garantir a longevidade e expansão da sua empresa.
            </p>

            {/* Google Partner Badge - Static Image (No Link) */}
            <div className="flex flex-col items-start gap-4">
              <span className="text-xs uppercase tracking-widest text-brand-muted font-bold">Certificação Oficial</span>

              <div className="group relative bg-white p-6 rounded-xl border border-brand-border/50 shadow-lg inline-flex items-center gap-6 pr-10 overflow-hidden">
                <div className="relative z-10">
                  <img
                    src="https://www.gstatic.com/partners/badge/images/2024/PartnerBadgeClickable.svg"
                    alt="Google Partner Premier"
                    className="h-20 w-auto object-contain"
                  />
                </div>
                <div className="h-12 w-px bg-gray-200 z-10"></div>
                <div className="flex flex-col z-10">
                  <span className="text-gray-900 font-bold text-lg leading-tight">Google</span>
                  <span className="text-gray-500 font-medium text-sm">Partner</span>
                </div>

                {/* Verification Check */}
                <div className="absolute top-3 right-3 text-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-2 group-hover:translate-x-0">
                  <CheckCircle2 size={18} />
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-brand-text font-bold mb-6 uppercase tracking-wider text-xs">Soluções</h4>
            <ul className="space-y-4 text-brand-muted">
              <li className="hover:text-brand-neon cursor-pointer transition-colors hover:translate-x-1 duration-300">Arquitetura de Negócios</li>
              <li className="hover:text-brand-neon cursor-pointer transition-colors hover:translate-x-1 duration-300">Implementação OKR/KPI</li>
              <li className="hover:text-brand-neon cursor-pointer transition-colors hover:translate-x-1 duration-300">Inteligência Artificial</li>
              <li className="hover:text-brand-neon cursor-pointer transition-colors hover:translate-x-1 duration-300">Expansão Comercial</li>
            </ul>
          </div>

          <div>
            <h4 className="text-brand-text font-bold mb-6 uppercase tracking-wider text-xs">Contato & Localização</h4>
            <ul className="space-y-4 text-brand-muted">
              <li>
                <a href="mailto:hub@creativelane.io" className="flex items-center gap-3 hover:text-brand-neon transition-colors group">
                  <Mail size={16} className="text-brand-muted group-hover:text-brand-neon transition-colors" />
                  hub@creativelane.io
                </a>
              </li>
              <li>
                <a href="tel:+5551992409139" className="flex items-center gap-3 hover:text-brand-neon transition-colors group">
                  <Phone size={16} className="text-brand-muted group-hover:text-brand-neon transition-colors" />
                  (51) 99240-9139
                </a>
              </li>
              <li className="flex items-start gap-3 group">
                <MapPin size={16} className="mt-1 text-brand-muted group-hover:text-brand-neon transition-colors shrink-0" />
                <span className="leading-relaxed group-hover:text-brand-text transition-colors">
                  Av. Centenário, 585<br />
                  Torre II - Sala 409<br />
                  Centro, Gravataí - RS<br />
                  CEP 94010-050
                </span>
              </li>
              <li className="pt-4 flex items-center gap-2 text-brand-neon/80 text-xs">
                <ShieldCheck size={14} /> LGPD & GDPR Compliant
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-brand-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col md:flex-row items-center gap-4 text-brand-muted text-xs font-medium">
            <span>© 2026 CREATIVE LANE LTDA.</span>
            <span className="hidden md:inline text-brand-border">|</span>
            <span className="flex items-center gap-2 hover:text-brand-text transition-colors cursor-help" title="Cadastro Nacional da Pessoa Jurídica">
              <FileText size={12} />
              CNPJ: 35.050.841/0001-98
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a href="https://www.linkedin.com/company/creativelane" target="_blank" rel="noopener noreferrer" className="text-brand-muted hover:text-brand-neon transition-colors hover:scale-110 duration-300"><Linkedin size={18} /></a>
            <a href="https://www.instagram.com/creativelaneio/" target="_blank" rel="noopener noreferrer" className="text-brand-muted hover:text-brand-neon transition-colors hover:scale-110 duration-300"><Instagram size={18} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;