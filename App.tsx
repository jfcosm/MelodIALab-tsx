
import React, { useState, useEffect } from 'react';
import { 
  Monitor, 
  Smartphone, 
  Cpu, 
  Zap, 
  Music, 
  Menu, 
  X, 
  Moon, 
  Sun, 
  ArrowRight, 
  ArrowLeft,
  CheckCircle2, 
  Code2, 
  Terminal,
  MessageSquare,
  Activity,
  DollarSign,
  Clock,
  GitCommit,
  LayoutDashboard,
  ExternalLink,
  BookOpen,
  Music4,
  Sparkles,
  Globe,
  Church,
  FileSignature,
  Mic2,
  Users,
  CloudLightning
} from 'lucide-react';
import { translations, LANGUAGES, Language } from './translations';

// --- Context / Hooks ---

const useLanguage = () => {
  const [lang, setLang] = useState<Language>('es');

  useEffect(() => {
    // Attempt to auto-detect language from browser without requiring permissions
    const browserLang = navigator.language.split('-')[0] as Language;
    const supportedCodes = LANGUAGES.map(l => l.code);
    
    if (supportedCodes.includes(browserLang)) {
      setLang(browserLang);
    } else {
      setLang('es'); // Fallback default
    }
  }, []);

  // Effect to handle RTL direction
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  const t = translations[lang];
  return { lang, setLang, t };
};

// --- Components ---

const Logo = () => (
  <span className="font-display font-bold text-2xl tracking-tighter">
    Melod<span className="text-brand-blue">IA</span> La<span className="text-brand-orange italic font-serif text-3xl leading-none">♭</span>
  </span>
);

const Navbar = ({ isDark, toggleTheme, lang, setLang, t }: { isDark: boolean; toggleTheme: () => void; lang: Language; setLang: (l: Language) => void; t: any }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.services, href: '#services' },
    { name: t.nav.projects, href: '#portfolio' },
    { name: t.nav.philosophy, href: '#philosophy' },
    { name: t.nav.contact, href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? (isDark ? 'bg-brand-dark/80 backdrop-blur-md border-b border-white/10' : 'bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm') 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <a href="#" className={`flex items-center gap-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            <Logo />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`text-sm font-medium transition-colors hover:text-brand-blue ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}
              >
                {link.name}
              </a>
            ))}
            
            <div className="flex items-center gap-2 border-s ps-6 border-gray-500/20">
              {/* Theme Toggle */}
              <button 
                onClick={toggleTheme}
                className={`p-2 rounded-full transition-colors ${
                  isDark ? 'bg-white/10 hover:bg-white/20 text-yellow-400' : 'bg-gray-100 hover:bg-gray-200 text-gray-600'
                }`}
                title="Toggle Theme"
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>

              {/* Language Selector */}
              <div className="relative">
                <button
                  onClick={() => setLangMenuOpen(!langMenuOpen)}
                  className={`flex items-center gap-1.5 p-2 rounded-full transition-colors text-sm font-medium ${
                    isDark ? 'bg-white/10 hover:bg-white/20 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                  }`}
                >
                  <Globe size={18} />
                  <span className="uppercase">{lang}</span>
                </button>

                {langMenuOpen && (
                  <div className={`absolute end-0 mt-2 w-48 py-2 rounded-xl shadow-xl border overflow-hidden max-h-80 overflow-y-auto ${
                    isDark ? 'bg-brand-surface border-white/10' : 'bg-white border-gray-200'
                  }`}>
                    {LANGUAGES.map((l) => (
                      <button
                        key={l.code}
                        onClick={() => {
                          setLang(l.code);
                          setLangMenuOpen(false);
                        }}
                        className={`w-full text-start px-4 py-2 text-sm flex items-center gap-3 hover:bg-brand-blue/10 ${
                          lang === l.code 
                            ? (isDark ? 'bg-brand-blue/20 text-brand-blue' : 'bg-blue-50 text-blue-600')
                            : (isDark ? 'text-gray-300' : 'text-gray-700')
                        }`}
                      >
                        <span className="text-lg">{l.flag}</span>
                        <span>{l.name}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <a 
              href="#contact"
              className="bg-brand-blue hover:bg-blue-600 text-white px-5 py-2.5 rounded-lg font-bold text-sm transition-transform hover:scale-105 shadow-lg shadow-blue-500/30"
            >
              {t.nav.start}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button 
              onClick={toggleTheme}
              className={`p-2 rounded-full ${isDark ? 'text-yellow-400' : 'text-gray-600'}`}
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className={isDark ? 'text-white' : 'text-gray-900'}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className={`md:hidden absolute w-full px-4 pt-2 pb-6 border-b ${
          isDark ? 'bg-brand-surface border-white/10 text-white' : 'bg-white border-gray-200 text-gray-900 shadow-xl'
        }`}>
          <div className="flex flex-col gap-4 mt-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium p-2 hover:bg-brand-blue/10 rounded-lg"
              >
                {link.name}
              </a>
            ))}
             
             {/* Mobile Language Selector */}
            <div className="grid grid-cols-2 gap-2 p-2">
              {LANGUAGES.map((l) => (
                <button
                  key={l.code}
                  onClick={() => {
                    setLang(l.code);
                    setIsOpen(false);
                  }}
                   className={`text-start px-3 py-2 text-sm rounded-lg flex items-center gap-2 ${
                    lang === l.code 
                      ? 'bg-brand-blue text-white' 
                      : (isDark ? 'bg-white/5' : 'bg-gray-100')
                  }`}
                >
                  <span>{l.flag}</span>
                  <span>{l.name}</span>
                </button>
              ))}
            </div>

             <a 
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="bg-brand-blue text-white text-center py-3 rounded-lg font-bold mt-2"
            >
              {t.nav.start}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

const DashboardMockup = ({ isDark, t, lang }: { isDark: boolean; t: any, lang: Language }) => {
  return (
    <div className={`w-full rounded-xl overflow-hidden border shadow-2xl backdrop-blur-xl ${
      isDark ? 'bg-brand-surface/80 border-white/10' : 'bg-white/90 border-gray-200'
    }`} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      {/* Fake Window Header */}
      <div className={`h-10 border-b flex items-center px-4 gap-2 ${
        isDark ? 'bg-white/5 border-white/10' : 'bg-gray-50 border-gray-200'
      }`}>
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
        </div>
        <div className={`ms-4 text-[10px] font-mono opacity-50 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
          melodia-client-portal.app
        </div>
      </div>

      {/* Dashboard Body */}
      <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Sidebar Mock */}
        <div className="hidden md:flex flex-col gap-3 border-e pe-6 border-dashed border-gray-500/20">
          <div className={`flex items-center gap-2 font-medium text-sm p-2 rounded-lg ${isDark ? 'bg-brand-blue/20 text-brand-blue' : 'bg-blue-50 text-blue-600'}`}>
            <LayoutDashboard size={14} /> Dashboard
          </div>
          <div className={`flex items-center gap-2 text-sm p-2 rounded-lg opacity-60 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            <Clock size={14} /> {t.dashboard.sprints}
          </div>
          <div className={`flex items-center gap-2 text-sm p-2 rounded-lg opacity-60 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            <DollarSign size={14} /> {t.dashboard.budget}
          </div>
        </div>

        {/* Main Content */}
        <div className="md:col-span-2 space-y-6">
          <div className="flex justify-between items-center">
            <div>
              <h3 className={`font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>{t.dashboard.title}</h3>
              <p className="text-xs text-gray-500">{t.dashboard.updated}</p>
            </div>
            <span className="px-2 py-1 bg-green-500/20 text-green-500 text-xs rounded-full font-bold border border-green-500/20">
              {t.dashboard.status}
            </span>
          </div>

          {/* Metrics Cards */}
          <div className="grid grid-cols-2 gap-4">
            <div className={`p-4 rounded-xl border ${isDark ? 'bg-white/5 border-white/5' : 'bg-gray-50 border-gray-200'}`}>
              <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                <Clock size={12} /> {t.dashboard.progress}
              </div>
              <div className={`text-xl font-bold font-mono ${isDark ? 'text-white' : 'text-gray-900'}`}>75%</div>
              <div className="w-full h-1 bg-gray-700/50 rounded-full mt-2 overflow-hidden">
                <div className={`h-full bg-brand-blue w-3/4 rounded-full ${lang === 'ar' ? 'origin-right' : 'origin-left'}`}></div>
              </div>
            </div>
            <div className={`p-4 rounded-xl border ${isDark ? 'bg-white/5 border-white/5' : 'bg-gray-50 border-gray-200'}`}>
              <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                <DollarSign size={12} /> {t.dashboard.budget}
              </div>
              <div className={`text-xl font-bold font-mono ${isDark ? 'text-white' : 'text-gray-900'}`}>OK</div>
              <div className="text-[10px] text-green-500 mt-1">{t.dashboard.no_deviation}</div>
            </div>
          </div>

          {/* Activity Feed */}
          <div className="space-y-3">
            <h4 className={`text-xs font-bold uppercase tracking-wider ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>{t.dashboard.activity}</h4>
            <div className="flex gap-3 items-center">
              <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-500">
                <Cpu size={14} />
              </div>
              <div>
                <div className={`text-sm font-medium ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>{t.dashboard.model_opt}</div>
                <div className="text-xs text-gray-500">{t.dashboard.latency}</div>
              </div>
            </div>
             <div className="flex gap-3 items-center">
              <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500">
                <GitCommit size={14} />
              </div>
              <div>
                <div className={`text-sm font-medium ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>{t.dashboard.deploy}</div>
                <div className="text-xs text-gray-500">{t.dashboard.live}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Hero = ({ isDark, t, lang }: { isDark: boolean; t: any, lang: Language }) => (
  <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
    {/* Background Image Container */}
    <div className="absolute inset-0 z-0">
      <img 
        src="https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=3540&auto=format&fit=crop" 
        alt="Background" 
        className="w-full h-full object-cover"
      />
      {/* Gradient Overlays for Readability */}
      <div className={`absolute inset-0 ${
        isDark 
          ? 'bg-gradient-to-b from-brand-dark/95 via-brand-dark/80 to-brand-dark' 
          : 'bg-gradient-to-b from-white/90 via-white/60 to-gray-50'
      }`}></div>
    </div>

    {/* Floating Orbs (Subtle on top of background) */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none z-0 mix-blend-screen opacity-50">
      <div className="absolute top-20 right-10 w-72 h-72 bg-brand-blue/30 rounded-full blur-[100px] animate-pulse-slow"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-500/30 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
    </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
      <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 border backdrop-blur-sm ${
        isDark ? 'bg-white/5 border-white/10 text-brand-blue' : 'bg-white/80 border-blue-100 text-brand-blue shadow-sm'
      }`}>
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
        </span>
        <span className="text-sm font-semibold tracking-wide">{t.hero.badge}</span>
      </div>

      <h1 className={`text-5xl md:text-7xl font-display font-bold mb-6 tracking-tight ${
        isDark ? 'text-white' : 'text-gray-900'
      }`}>
        {t.hero.title_start} <br className="hidden md:block" />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-purple-500">
          {t.hero.title_end}
        </span>
      </h1>

      <p className={`text-xl md:text-2xl max-w-2xl mx-auto mb-10 leading-relaxed ${
        isDark ? 'text-gray-300' : 'text-gray-700'
      }`}>
        {t.hero.subtitle}
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a 
          href="#contact"
          className="w-full sm:w-auto px-8 py-4 bg-brand-blue hover:bg-blue-600 text-white rounded-xl font-bold text-lg transition-all hover:-translate-y-1 shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2"
        >
          {t.hero.cta_primary} {lang === 'ar' ? <ArrowLeft size={20} /> : <ArrowRight size={20} />}
        </a>
        <a 
          href="#services"
          className={`w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-lg transition-all border backdrop-blur-sm ${
            isDark 
              ? 'border-white/10 hover:bg-white/5 text-white' 
              : 'border-gray-300 hover:bg-white/50 text-gray-800'
          }`}
        >
          {t.hero.cta_secondary}
        </a>
      </div>

      {/* Hero Visual Abstract - Replaced with Dashboard Mockup */}
      <div className="mt-20 relative max-w-4xl mx-auto animate-float">
        <div className="relative">
           {/* Glow effect behind dashboard */}
           <div className="absolute -inset-1 bg-gradient-to-r from-brand-blue to-purple-600 rounded-2xl blur opacity-20"></div>
           <DashboardMockup isDark={isDark} t={t} lang={lang} />
        </div>
        
        {/* Caption for the dashboard */}
        <p className={`mt-4 text-sm font-medium opacity-60 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          {t.hero.dashboard_caption}
        </p>
      </div>
    </div>
  </section>
);

const BentoItem = ({ title, desc, icon: Icon, cols = "col-span-1", isDark }: any) => (
  <div className={`${cols} group relative overflow-hidden rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 ${
    isDark 
      ? 'bg-brand-surface border border-white/10 hover:border-brand-blue/50' 
      : 'bg-white border border-gray-200 shadow-sm hover:shadow-md hover:border-brand-blue/50'
  }`}>
    <div className={`absolute top-0 end-0 p-32 bg-brand-blue/5 rounded-full blur-3xl transition-opacity opacity-0 group-hover:opacity-100`}></div>
    
    <div className="relative z-10">
      <div className={`inline-flex p-3 rounded-lg mb-4 ${
        isDark ? 'bg-white/5 text-brand-blue' : 'bg-blue-50 text-brand-blue'
      }`}>
        <Icon size={24} />
      </div>
      <h3 className={`text-xl font-display font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{title}</h3>
      <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{desc}</p>
    </div>
  </div>
);

const Services = ({ isDark, t }: { isDark: boolean; t: any }) => (
  <section id="services" className={`py-24 ${isDark ? 'bg-[#0a0a0a]' : 'bg-gray-50'}`}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className={`text-3xl md:text-5xl font-display font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
          {t.services.title}
        </h2>
        <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          {t.services.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <BentoItem 
          isDark={isDark}
          cols="md:col-span-2"
          title={t.services.web.title}
          desc={t.services.web.desc}
          icon={Monitor}
        />
        <BentoItem 
          isDark={isDark}
          title={t.services.ai.title}
          desc={t.services.ai.desc}
          icon={Cpu}
        />
        <BentoItem 
          isDark={isDark}
          title={t.services.agile.title}
          desc={t.services.agile.desc}
          icon={Zap}
        />
        <BentoItem 
          isDark={isDark}
          cols="md:col-span-2"
          title={t.services.ui.title}
          desc={t.services.ui.desc}
          icon={Smartphone}
        />
      </div>
    </div>
  </section>
);

const Portfolio = ({ isDark, t }: { isDark: boolean; t: any }) => (
  <section id="portfolio" className={`py-24 ${isDark ? 'bg-brand-surface' : 'bg-white'}`}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full mb-6 border ${
          isDark ? 'bg-white/5 border-white/10 text-brand-orange' : 'bg-orange-50 border-orange-200 text-brand-orange'
        }`}>
          <Sparkles size={14} />
          <span className="text-xs font-bold uppercase tracking-wider">{t.portfolio.badge}</span>
        </div>
        <h2 className={`text-3xl md:text-5xl font-display font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
          {t.portfolio.title}
        </h2>
        <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          {t.portfolio.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-12">
        {/* Armonix Project */}
        <div className={`rounded-3xl border overflow-hidden transition-all hover:shadow-2xl hover:shadow-brand-blue/10 ${
          isDark ? 'bg-[#0a0a0a] border-white/10' : 'bg-gray-50 border-gray-200'
        }`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 md:p-12 items-center">
            <div className="order-2 lg:order-1 relative group">
              <div 
                className={`rounded-xl border shadow-xl overflow-hidden relative transition-transform duration-500 group-hover:-translate-y-2 h-64 md:h-80 w-full bg-cover bg-center ${
                 isDark ? 'border-gray-700 bg-gray-900' : 'border-gray-300 bg-gray-200'
                }`}
                style={{
                  backgroundImage: "url('/armonix_landing.jpg')" 
                }}
              >
                 <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
              </div>
              <div className="absolute -inset-4 bg-purple-500/20 blur-3xl -z-10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            
            <div className="order-1 lg:order-2 space-y-6">
              <div className="flex items-center gap-3">
                 <div className={`p-3 rounded-xl ${isDark ? 'bg-purple-500/10 text-purple-400' : 'bg-purple-100 text-purple-600'}`}>
                   <Music4 size={28} />
                 </div>
                 <h3 className={`text-3xl font-bold font-display ${isDark ? 'text-white' : 'text-gray-900'}`}>Armonix</h3>
              </div>
              
              <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                {t.portfolio.armonix.desc}
              </p>

              <div className="flex flex-wrap gap-2">
                 {['React', 'Web Audio API', 'Canvas API', 'Tone.js'].map(tag => (
                   <span key={tag} className={`px-3 py-1 rounded-full text-xs font-medium border ${
                     isDark ? 'bg-white/5 border-white/10 text-gray-300' : 'bg-white border-gray-200 text-gray-600'
                   }`}>
                     {tag}
                   </span>
                 ))}
              </div>

              <div className="pt-4">
                <a 
                  href="https://www.armonix.app" 
                  target="_blank"
                  rel="noreferrer"
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all ${
                    isDark 
                      ? 'bg-white text-black hover:bg-gray-200' 
                      : 'bg-gray-900 text-white hover:bg-gray-800'
                  }`}
                >
                  {t.portfolio.armonix.cta} <ExternalLink size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* La Palabra Diaria Project */}
        <div className={`rounded-3xl border overflow-hidden transition-all hover:shadow-2xl hover:shadow-brand-blue/10 ${
          isDark ? 'bg-[#0a0a0a] border-white/10' : 'bg-gray-50 border-gray-200'
        }`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 md:p-12 items-center">
             <div className="order-1 space-y-6">
              <div className="flex items-center gap-3">
                 <div className={`p-3 rounded-xl ${isDark ? 'bg-indigo-500/10 text-indigo-400' : 'bg-indigo-100 text-indigo-600'}`}>
                   <BookOpen size={28} />
                 </div>
                 <h3 className={`text-3xl font-bold font-display ${isDark ? 'text-white' : 'text-gray-900'}`}>La Palabra Diaria</h3>
              </div>
              
              <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                {t.portfolio.palabra.desc}
              </p>

              <div className="flex flex-wrap gap-2">
                 {['Next.js', 'SSR', 'Accessibility', 'Minimal UI'].map(tag => (
                   <span key={tag} className={`px-3 py-1 rounded-full text-xs font-medium border ${
                     isDark ? 'bg-white/5 border-white/10 text-gray-300' : 'bg-white border-gray-200 text-gray-600'
                   }`}>
                     {tag}
                   </span>
                 ))}
              </div>

              <div className="pt-4">
                <a 
                  href="https://www.lapalabradiaria.com" 
                  target="_blank"
                  rel="noreferrer"
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all ${
                    isDark 
                      ? 'bg-white text-black hover:bg-gray-200' 
                      : 'bg-gray-900 text-white hover:bg-gray-800'
                  }`}
                >
                  {t.portfolio.palabra.cta} <ExternalLink size={18} />
                </a>
              </div>
            </div>

            <div className="order-2 relative group">
              <div 
                 className={`rounded-xl border shadow-xl overflow-hidden relative transition-transform duration-500 group-hover:-translate-y-2 h-64 md:h-80 w-full bg-cover bg-center ${
                 isDark ? 'border-gray-700 bg-gray-900' : 'border-gray-300 bg-white'
                }`}
                style={{
                  backgroundImage: "url('/lapalabradiaria_landing.jpg')" 
                }}
              >
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
              </div>
               <div className="absolute -inset-4 bg-indigo-500/20 blur-3xl -z-10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          </div>
        </div>

        {/* Emaús Project */}
        <div className={`rounded-3xl border overflow-hidden transition-all hover:shadow-2xl hover:shadow-brand-blue/10 ${
          isDark ? 'bg-[#0a0a0a] border-white/10' : 'bg-gray-50 border-gray-200'
        }`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 md:p-12 items-center">
            <div className="order-2 lg:order-1 relative group">
              <div 
                className={`rounded-xl border shadow-xl overflow-hidden relative transition-transform duration-500 group-hover:-translate-y-2 h-64 md:h-80 w-full bg-cover bg-center ${
                 isDark ? 'border-gray-700 bg-gray-900' : 'border-gray-300 bg-gray-200'
                }`}
                style={{
                  backgroundImage: "url('/emaus_landing.jpg')" 
                }}
              >
                 <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
              </div>
              <div className="absolute -inset-4 bg-orange-500/20 blur-3xl -z-10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            
            <div className="order-1 lg:order-2 space-y-6">
              <div className="flex items-center gap-3">
                 <div className={`p-3 rounded-xl ${isDark ? 'bg-orange-500/10 text-orange-400' : 'bg-orange-100 text-orange-600'}`}>
                   <Church size={28} />
                 </div>
                 <h3 className={`text-3xl font-bold font-display ${isDark ? 'text-white' : 'text-gray-900'}`}>Emaús</h3>
              </div>
              
              <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                {t.portfolio.emaus.desc}
              </p>

              <div className="flex flex-wrap gap-2">
                 {['SaaS', 'Digital Archive', 'Signature API', 'Catholic Tech'].map(tag => (
                   <span key={tag} className={`px-3 py-1 rounded-full text-xs font-medium border ${
                     isDark ? 'bg-white/5 border-white/10 text-gray-300' : 'bg-white border-gray-200 text-gray-600'
                   }`}>
                     {tag}
                   </span>
                 ))}
              </div>

              <div className="pt-4">
                <a 
                  href="https://www.emaus.social"
                  target="_blank"
                  rel="noreferrer"
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all ${
                    isDark 
                      ? 'bg-white text-black hover:bg-gray-200' 
                      : 'bg-gray-900 text-white hover:bg-gray-800'
                  }`}
                >
                  {t.portfolio.emaus.cta} <ExternalLink size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Verso Project */}
        <div className={`rounded-3xl border overflow-hidden transition-all hover:shadow-2xl hover:shadow-brand-blue/10 ${
          isDark ? 'bg-[#0a0a0a] border-white/10' : 'bg-gray-50 border-gray-200'
        }`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 md:p-12 items-center">
             <div className="order-1 space-y-6">
              <div className="flex items-center gap-3">
                 <div className={`p-3 rounded-xl ${isDark ? 'bg-emerald-500/10 text-emerald-400' : 'bg-emerald-100 text-emerald-600'}`}>
                   <Mic2 size={28} />
                 </div>
                 <h3 className={`text-3xl font-bold font-display ${isDark ? 'text-white' : 'text-gray-900'}`}>Verso</h3>
              </div>
              
              <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                {t.portfolio.verso.desc}
              </p>

              <div className="flex flex-wrap gap-2">
                 {['React 19', 'Firebase', 'Gemini AI', 'Real-time'].map(tag => (
                   <span key={tag} className={`px-3 py-1 rounded-full text-xs font-medium border ${
                     isDark ? 'bg-white/5 border-white/10 text-gray-300' : 'bg-white border-gray-200 text-gray-600'
                   }`}>
                     {tag}
                   </span>
                 ))}
              </div>

              <div className="pt-4">
                <button 
                  disabled
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all opacity-80 cursor-not-allowed ${
                    isDark 
                      ? 'bg-white/10 text-white' 
                      : 'bg-gray-200 text-gray-500'
                  }`}
                >
                  {t.portfolio.verso.cta}
                </button>
              </div>
            </div>

            <div className="order-2 relative group">
              <div 
                 className={`rounded-xl border shadow-xl overflow-hidden relative transition-transform duration-500 group-hover:-translate-y-2 h-64 md:h-80 w-full bg-cover bg-center ${
                 isDark ? 'border-gray-700 bg-gray-900' : 'border-gray-300 bg-white'
                }`}
                style={{
                  backgroundImage: "url('/verso_landing.jpg')" 
                }}
              >
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
              </div>
               <div className="absolute -inset-4 bg-emerald-500/20 blur-3xl -z-10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
);

const Philosophy = ({ isDark, t }: { isDark: boolean; t: any }) => (
  <section id="philosophy" className="py-24 relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
           <div className="flex items-center gap-2 mb-4 text-brand-orange font-bold tracking-wider text-sm uppercase">
             <Music size={16} /> {t.philosophy.badge}
           </div>
           <h2 className={`text-4xl md:text-5xl font-display font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
             {t.philosophy.title_start} <br/>
             <span className="italic font-serif text-brand-blue">{t.philosophy.title_end}</span>
           </h2>
           <p className={`text-lg mb-8 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
             {t.philosophy.desc}
           </p>

           <div className="space-y-6">
             {t.philosophy.points.map((item: any, idx: number) => (
               <div key={idx} className="flex gap-4">
                 <div className={`mt-1 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                   isDark ? 'bg-brand-blue/20 text-brand-blue' : 'bg-blue-100 text-blue-600'
                 }`}>
                   <CheckCircle2 size={18} />
                 </div>
                 <div>
                   <h4 className={`font-bold text-lg ${isDark ? 'text-white' : 'text-gray-900'}`}>{item.title}</h4>
                   <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{item.desc}</p>
                 </div>
               </div>
             ))}
           </div>
        </div>

        <div className="relative">
          <div className={`absolute inset-0 bg-gradient-to-tr from-brand-blue/20 to-brand-orange/20 rounded-2xl blur-2xl transform rotate-3`}></div>
          <div className={`relative rounded-2xl p-8 border ${
            isDark ? 'bg-brand-surface border-white/10' : 'bg-white border-gray-200 shadow-xl'
          }`}>
             <div className="space-y-4 font-mono text-sm">
                <div className="flex items-center gap-2 text-gray-500 mb-4">
                  <Terminal size={16} />
                  <span>terminal — zsh</span>
                </div>
                <div dir="ltr" className="text-start">
                  <div>
                    <span className="text-green-500">➜</span> <span className="text-blue-500">~</span> <span className={isDark ? 'text-white' : 'text-gray-800'}>{t.philosophy.terminal.start}</span>
                  </div>
                  <div className="text-gray-500">{t.philosophy.terminal.init}</div>
                  <div className="text-gray-500">{t.philosophy.terminal.loading} <span className="text-green-500">{t.philosophy.terminal.done}</span></div>
                  <div className="text-gray-500">{t.philosophy.terminal.budget} <span className="text-green-500">{t.philosophy.terminal.done}</span></div>
                  <div className="text-gray-500">{t.philosophy.terminal.agility} <span className="text-green-500">{t.philosophy.terminal.done}</span></div>
                  <div>
                    <span className="text-green-500">➜</span> <span className="text-blue-500">~</span> <span className={`${isDark ? 'text-white' : 'text-gray-800'} animate-pulse`}>_</span>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Contact = ({ isDark, t }: { isDark: boolean; t: any }) => (
  <section id="contact" className={`py-24 ${isDark ? 'bg-brand-surface' : 'bg-white'}`}>
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className={`rounded-3xl p-8 md:p-12 overflow-hidden relative border ${
        isDark ? 'bg-[#0a0a0a] border-white/10' : 'bg-gray-50 border-gray-200'
      }`}>
        {/* Decorative blobs */}
        <div className="absolute top-0 end-0 w-64 h-64 bg-brand-blue/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 start-0 w-64 h-64 bg-brand-orange/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2"></div>

        <div className="relative z-10 text-center mb-12">
          <h2 className={`text-3xl md:text-4xl font-display font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            {t.contact.title}
          </h2>
          <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            {t.contact.subtitle}
          </p>
        </div>

        <form action="https://formspree.io/f/xdkkpapn" method="POST" className="space-y-6 max-w-xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{t.contact.name}</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                required
                className={`w-full px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-brand-blue transition-all ${
                  isDark 
                    ? 'bg-white/5 border border-white/10 text-white placeholder-gray-600' 
                    : 'bg-white border border-gray-300 text-gray-900 placeholder-gray-400'
                }`}
                placeholder={t.contact.name_ph} 
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{t.contact.email}</label>
              <input 
                type="email" 
                id="email" 
                name="email"
                required
                className={`w-full px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-brand-blue transition-all ${
                  isDark 
                    ? 'bg-white/5 border border-white/10 text-white placeholder-gray-600' 
                    : 'bg-white border border-gray-300 text-gray-900 placeholder-gray-400'
                }`} 
                placeholder={t.contact.email_ph} 
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{t.contact.message}</label>
            <textarea 
              id="message" 
              name="message"
              required
              rows={4} 
              className={`w-full px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-brand-blue transition-all resize-none ${
                isDark 
                  ? 'bg-white/5 border border-white/10 text-white placeholder-gray-600' 
                  : 'bg-white border border-gray-300 text-gray-900 placeholder-gray-400'
              }`} 
              placeholder={t.contact.message_ph} 
            ></textarea>
          </div>

          <button 
            type="submit" 
            className="w-full bg-brand-blue hover:bg-blue-600 text-white font-bold py-4 rounded-xl transition-all hover:scale-[1.02] shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2"
          >
            {t.contact.submit} <MessageSquare size={20} />
          </button>
        </form>
      </div>
    </div>
  </section>
);

const Footer = ({ isDark, t }: { isDark: boolean; t: any }) => (
  <footer className={`py-12 border-t ${isDark ? 'bg-brand-dark border-white/10' : 'bg-gray-50 border-gray-200'}`}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
      <div className={isDark ? 'text-white' : 'text-gray-900'}>
        <Logo />
        <p className={`text-sm mt-2 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
          &copy; {new Date().getFullYear()} MelodIA La♭. {t.footer.rights}
        </p>
      </div>
      
      <div className="flex gap-6">
        <a 
          href="https://www.linkedin.com/company/melodialab/" 
          target="_blank" 
          rel="noreferrer" 
          className={`transition-colors ${isDark ? 'text-gray-500 hover:text-white' : 'text-gray-500 hover:text-gray-900'}`}
        >
          LinkedIn
        </a>
      </div>
    </div>
  </footer>
);

// --- Main App ---

const App = () => {
  // Default to dark mode for that tech vibe
  const [isDark, setIsDark] = useState(true);
  
  // Use custom hook for language management
  const { lang, setLang, t } = useLanguage();

  // Apply dark class to html element for Tailwind dark mode to work
  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div className={`min-h-screen transition-colors duration-300 font-sans ${isDark ? 'bg-brand-dark text-white' : 'bg-brand-light text-gray-900'}`}>
      <Navbar isDark={isDark} toggleTheme={toggleTheme} lang={lang} setLang={setLang} t={t} />
      
      <main>
        <Hero isDark={isDark} t={t} lang={lang} />
        <Services isDark={isDark} t={t} />
        <Portfolio isDark={isDark} t={t} />
        <Philosophy isDark={isDark} t={t} />
        <Contact isDark={isDark} t={t} />
      </main>

      <Footer isDark={isDark} t={t} />
    </div>
  );
};

export default App;