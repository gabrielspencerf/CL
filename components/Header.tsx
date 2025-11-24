import React, { useState, useEffect } from 'react';
import { Activity, Menu, X, Sun, Moon, LogIn } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false); // Default to light mode

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);

    // Initialize Theme
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'dark') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      setIsDark(false);
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${isScrolled
        ? 'bg-brand-dark/90 backdrop-blur-md border-brand-border py-4 shadow-xl'
        : 'bg-transparent border-transparent py-6'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Corporate Logo */}
        <div className="flex items-center gap-3 cursor-pointer group" onClick={() => scrollToSection('hero')}>
          <img
            src="/assets/logo.svg"
            alt="Creative Lane"
            className="h-12 w-auto logo-adaptive transition-all duration-300 group-hover:scale-105"
          />
          <div className="flex flex-col">
            <span className="font-bold text-lg tracking-wide leading-none text-brand-text group-hover:text-brand-neon transition-colors duration-300">CREATIVE LANE</span>
            <span className="text-[9px] font-medium text-brand-muted tracking-[0.15em] uppercase group-hover:text-brand-text transition-colors">
              Strategic Growth
            </span>
          </div>
        </div>

        {/* Desktop Nav - Clean & Executive */}
        <nav className="hidden md:flex items-center gap-6">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="px-4 py-2 rounded-lg text-sm font-medium text-brand-muted hover:text-brand-text hover:bg-brand-text/5 transition-all duration-300 tracking-wide"
            >
              {item.label}
            </button>
          ))}

          {/* Client Login Link (Anchor to ChatHubLogin section) */}
          <button
            onClick={() => scrollToSection('chathub-login')}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-brand-muted hover:text-brand-neon transition-all duration-300 border border-transparent hover:border-brand-neon/20 rounded-lg hover:bg-brand-neon/5"
          >
            <LogIn size={16} />
            <span className="hidden lg:inline">Área do Cliente</span>
          </button>

          <div className="h-6 w-px bg-brand-border mx-1"></div>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-brand-muted hover:text-brand-text hover:bg-brand-text/10 transition-all duration-300 hover:rotate-12 active:scale-90"
            aria-label="Toggle Theme"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button
            onClick={() => scrollToSection('advisor')}
            className="group flex items-center gap-2 bg-brand-text/5 border border-brand-text/10 hover:border-brand-neon text-brand-text px-6 py-2.5 rounded-lg font-medium text-xs transition-all duration-300 uppercase tracking-widest hover:bg-brand-neon/5 hover:scale-105 active:scale-95 hover:shadow-[0_0_15px_-5px_rgba(var(--color-brand-neon),0.5)]"
          >
            <Activity size={14} className="text-brand-neon transition-transform group-hover:rotate-180 duration-500" />
            AI_Advisor
          </button>
        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="text-brand-muted hover:text-brand-text transition-colors"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            className="text-brand-text hover:text-brand-neon transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-brand-dark border-b border-brand-border p-6 flex flex-col gap-6 shadow-2xl animate-in slide-in-from-top-5 duration-300">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-left text-base font-medium text-brand-muted hover:text-brand-neon transition-colors hover:pl-2 duration-300"
            >
              {item.label}
            </button>
          ))}
          <div className="h-px bg-brand-border w-full"></div>
          <button
            onClick={() => scrollToSection('chathub-login')}
            className="flex items-center gap-2 text-base font-medium text-brand-text hover:text-brand-neon w-full text-left p-2 rounded-lg hover:bg-brand-surface transition-all"
          >
            <LogIn size={18} /> Acessar ChatHub (Cliente)
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;