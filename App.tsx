
import React, { useState, useEffect, useRef } from 'react';
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
  CloudLightning,
  Clapperboard,
  Video,
  Play,
  Type,
  Radio,
  Dna,
  History,
  Rocket,
  Leaf,
  Waves,
  Disc,
  Volume2,
  RotateCcw,
  Camera,
  Film,
  Instagram,
  Linkedin
} from 'lucide-react';
import { translations, LANGUAGES, Language } from './translations';

// --- Utils ---

const isObject = (item: any) => {
  return (item && typeof item === 'object' && !Array.isArray(item));
};

const mergeDeep = (target: any, source: any) => {
  let output = Object.assign({}, target);
  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach(key => {
      if (isObject(source[key])) {
        if (!(key in target))
          Object.assign(output, { [key]: source[key] });
        else
          output[key] = mergeDeep(target[key], source[key]);
      } else {
        Object.assign(output, { [key]: source[key] });
      }
    });
  }
  return output;
};

// --- Context / Hooks ---

const useLanguage = () => {
  const [lang, setLang] = useState<Language>('es');

  useEffect(() => {
    const browserLang = navigator.language.split('-')[0] as Language;
    const supportedCodes = LANGUAGES.map(l => l.code);
    
    if (supportedCodes.includes(browserLang)) {
      setLang(browserLang);
    } else {
      setLang('es'); 
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const currentT = translations[lang];
  const t = lang === 'en' ? translations['en'] : { ...translations['en'], ...currentT };

  return { lang, setLang, t };
};

// --- Components ---

const Logo = ({ className = "" }: { className?: string }) => (
  <div className={`flex flex-col items-start leading-none ${className}`}>
    <span className="font-display font-bold text-2xl tracking-tighter">
      Melod<span className="text-brand-blue">IA</span> La<span className="text-brand-orange italic text-3xl leading-none">♭</span>
    </span>
    <span className="text-[9px] uppercase tracking-[0.2em] font-mono opacity-60 ps-1">Inteligencia Audiovisual</span>
  </div>
);

const AudioPlayer = ({ isDark, src, t }: { isDark: boolean; src: string; t: any }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const onTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
      setProgress((audioRef.current.currentTime / audioRef.current.duration) * 100);
    }
  };

  const onLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (audioRef.current) {
      const newTime = (parseFloat(e.target.value) / 100) * duration;
      audioRef.current.currentTime = newTime;
      setProgress(parseFloat(e.target.value));
    }
  };

  const formatTime = (time: number) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const reset = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      if (!isPlaying) audioRef.current.pause();
      setProgress(0);
      setCurrentTime(0);
    }
  };

  const p = t.tierrita.detailed.player;

  return (
    <div className={`mt-10 p-6 rounded-3xl border transition-all duration-300 font-sans ${
      isDark ? 'bg-white/5 border-white/10 shadow-2xl' : 'bg-white border-gray-200 shadow-xl'
    }`}>
      <audio 
        ref={audioRef} 
        src={src} 
        onTimeUpdate={onTimeUpdate} 
        onLoadedMetadata={onLoadedMetadata}
        onEnded={() => setIsPlaying(false)}
      />
      
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-5">
          <button 
            onClick={togglePlay}
            className={`w-16 h-16 rounded-full flex items-center justify-center transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-blue-500/20 ${
              isDark ? 'bg-brand-blue text-white' : 'bg-brand-blue text-white'
            }`}
          >
            {isPlaying ? <X size={28} /> : <Play size={28} className="ms-1" />}
          </button>
          
          <div className="flex-1 overflow-hidden">
             <div className="flex items-center gap-2 mb-1">
               <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-widest ${
                 isDark ? 'bg-brand-orange/20 text-brand-orange' : 'bg-orange-100 text-orange-600'
               }`}>{t.dashboard.status}</span>
               <p className={`text-[10px] font-mono opacity-40 uppercase tracking-tighter ${isDark ? 'text-white' : 'text-gray-900'}`}>
                 HIFI AUDIO
               </p>
             </div>
             <h4 className={`text-2xl font-display font-bold truncate ${isDark ? 'text-white' : 'text-gray-900'}`}>
               Tierra Tierrita
             </h4>
          </div>

          <button 
            onClick={reset}
            className={`p-3 rounded-full transition-colors ${isDark ? 'hover:bg-white/10 text-gray-400' : 'hover:bg-gray-100 text-gray-500'}`}
          >
            <RotateCcw size={20} />
          </button>
        </div>

        <div className="space-y-2">
           <div className="relative group w-full h-2 bg-gray-500/10 rounded-full overflow-hidden">
              <div 
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-brand-blue to-brand-orange transition-all duration-100 ease-linear pointer-events-none"
                style={{ width: `${progress}%` }}
              ></div>
              <input 
                type="range" 
                value={progress} 
                min="0"
                max="100"
                step="0.1"
                onChange={handleProgressChange}
                className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
              />
           </div>
           <div className="flex justify-between text-[11px] font-mono opacity-40">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
           </div>
        </div>

        <div className={`pt-6 border-t ${isDark ? 'border-white/5' : 'border-gray-100'}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
               <div className="flex items-start gap-2">
                 <Disc size={14} className="mt-0.5 text-brand-blue shrink-0" />
                 <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{p.song}</p>
               </div>
               <div className="flex items-start gap-2">
                 <Mic2 size={14} className="mt-0.5 text-brand-blue shrink-0" />
                 <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{p.voice}</p>
               </div>
            </div>
            <div className="space-y-2">
               <div className="flex items-start gap-2">
                 <Zap size={14} className="mt-0.5 text-brand-orange shrink-0" />
                 <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{p.guitar_solo}</p>
               </div>
               <div className="flex items-start gap-2">
                 <Sparkles size={14} className="mt-0.5 text-brand-orange shrink-0" />
                 <p className={`text-xs leading-relaxed opacity-60 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{p.full_prod}</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Navbar = ({ isDark, toggleTheme, lang, setLang, t, onBack }: { isDark: boolean; toggleTheme: () => void; lang: Language; setLang: (l: Language) => void; t: any; onBack?: () => void }) => {
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
    { name: t.nav.audiovisual, href: '#audiovisual' },
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
          <div className="flex items-center gap-4">
            {onBack && (
              <button 
                onClick={onBack}
                className={`p-2 rounded-full transition-colors ${
                  isDark ? 'hover:bg-white/10 text-white' : 'hover:bg-gray-100 text-gray-900'
                }`}
                title={t.tierrita.detailed.back}
              >
                <ArrowLeft size={24} />
              </button>
            )}
            <a href="/" onClick={(e) => { e.preventDefault(); if (onBack) onBack(); else window.scrollTo(0,0); }} className={`flex items-center gap-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              <Logo />
            </a>
          </div>

          <div className="hidden md:flex items-center gap-6">
            {!onBack && navLinks.map((link) => (
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
              <button 
                onClick={toggleTheme}
                className={`p-2 rounded-full transition-colors ${
                  isDark ? 'bg-white/10 hover:bg-white/20 text-yellow-400' : 'bg-gray-100 hover:bg-gray-200 text-gray-600'
                }`}
                title="Toggle Theme"
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>

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

            {!onBack && (
              <a 
                href="#contact"
                className="bg-brand-blue hover:bg-blue-600 text-white px-5 py-2.5 rounded-lg font-bold text-sm transition-transform hover:scale-105 shadow-lg shadow-blue-500/30"
              >
                {t.nav.start}
              </a>
            )}
          </div>

          <div className="md:hidden flex items-center gap-4">
            <button 
              onClick={toggleTheme}
              className={`p-2 rounded-full ${isDark ? 'text-yellow-400' : 'text-gray-600'}`}
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            {!onBack && (
              <button 
                onClick={() => setIsOpen(!isOpen)}
                className={isDark ? 'text-white' : 'text-gray-900'}
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            )}
            {onBack && (
               <div className="relative">
                <button
                  onClick={() => setLangMenuOpen(!langMenuOpen)}
                  className={`flex items-center gap-1.5 p-2 rounded-full transition-colors text-sm font-medium ${
                    isDark ? 'bg-white/10 text-white' : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  <Globe size={18} />
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
                          lang === l.code ? 'text-brand-blue font-bold' : ''
                        }`}
                      >
                        <span className="text-lg me-2">{l.flag}</span>
                        <span>{l.name}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {isOpen && !onBack && (
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

const TierraTierritaDetailed = ({ t, onBack, isDark, toggleTheme, lang, setLang }: { t: any; onBack: () => void; isDark: boolean; toggleTheme: () => void; lang: Language; setLang: (l: Language) => void }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const d = t.tierrita.detailed;

  return (
    <div className={`min-h-screen relative overflow-x-hidden font-sans animate-in fade-in duration-700 ${isDark ? 'bg-brand-dark text-white' : 'bg-white text-gray-900'}`}>
      <div className="fixed inset-0 pointer-events-none opacity-10 mix-blend-overlay z-40 bg-[url('https://www.transparenttextures.com/patterns/film-grain.png')]"></div>
      
      <Navbar isDark={isDark} toggleTheme={toggleTheme} lang={lang} setLang={setLang} t={t} onBack={onBack} />

      {/* Hero Inmersivo */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <img 
            src="/manuel-vera-hero.jpg" 
            alt="Manuel Vera Space"
            className="w-full h-full object-cover scale-100 transition-transform duration-[10s] animate-pulse-slow"
            onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=2072&auto=format&fit=crop" }}
          />
        </div>

        <div className="relative z-20 text-center px-4 max-w-5xl">
          <div className="inline-block px-4 py-1 rounded-full border border-brand-orange text-brand-orange font-mono text-sm mb-6 tracking-widest uppercase shadow-lg shadow-brand-orange/20">
            {d.hero_tag}
          </div>
          <h1 className="text-6xl md:text-9xl font-display font-bold mb-8 leading-none tracking-tighter drop-shadow-2xl">
            {t.tierrita.title.split(' ')[0]} <br/> <span className="text-brand-blue italic">{t.tierrita.title.split(' ')[1]}</span>
          </h1>
          <p className="text-xl md:text-2xl font-light opacity-90 max-w-2xl mx-auto italic">
            {d.hero_title}
          </p>
        </div>
      </header>

      {/* Sección Lore: El Exilio y la Biotecnología */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative group">
            <div className="aspect-[16/10] rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative">
              <img 
                src="/jose-bolados-actor.jpg" 
                alt="José Bolados Milla Actor"
                className="w-full h-full object-cover grayscale sepia-[0.3] hover:grayscale-0 transition-all duration-700"
                onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1925&auto=format&fit=crop" }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 to-transparent">
                 <p className="font-mono text-xs text-brand-orange mb-1">{d.audiovisual_label}</p>
                 <h4 className="text-2xl font-bold font-display tracking-tight">José Bolados Milla</h4>
              </div>
            </div>
            <div className="absolute -inset-4 bg-brand-orange/10 blur-3xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>

          <div className="space-y-8">
            <h2 className="text-4xl md:text-6xl font-display font-bold leading-tight">
              {d.lore_title}
            </h2>
            <div className="w-20 h-1 bg-brand-orange"></div>
            <p className="text-xl leading-relaxed opacity-80">
              {d.lore_desc}
            </p>
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/10">
              <div className="space-y-2">
                <Leaf className="text-green-500" size={24} />
                <h4 className="font-bold">Ystad, Suecia</h4>
              </div>
              <div className="space-y-2">
                <Waves className="text-brand-blue" size={24} />
                <h4 className="font-bold">Tomé, Chile</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Producción Musical Especializada */}
      <section className={`py-32 ${isDark ? 'bg-[#0f0f0f]' : 'bg-gray-100'}`}>
        <div className="max-w-7xl mx-auto px-6">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
             <div className="order-2 lg:order-1 space-y-8">
               <div className="inline-flex items-center gap-2 text-brand-blue uppercase tracking-widest text-xs font-bold">
                 <Disc size={16} /> {d.credits.prod}
               </div>
               <h2 className="text-4xl md:text-5xl font-display font-bold">{d.music_prod_title}</h2>
               <p className="text-xl leading-relaxed opacity-80">
                 {d.music_prod_desc}
               </p>

               <AudioPlayer isDark={isDark} src="/tierra_tierrita.mp3" t={t} />
               
               <div className="flex flex-wrap gap-8 pt-8 border-t border-white/5">
                  <div className="space-y-1">
                    <p className="text-[10px] uppercase opacity-40 font-bold tracking-wider text-brand-blue">{d.credits.prod}</p>
                    <p className="font-bold text-lg">Francisco Carle</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] uppercase opacity-40 font-bold tracking-wider text-brand-blue">{d.credits.guitars}</p>
                    <p className="font-bold text-lg">Claudio Pérez</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] uppercase opacity-40 font-bold tracking-wider text-brand-blue">{d.credits.voice}</p>
                    <p className="font-bold text-lg">Maunita</p>
                  </div>
               </div>
             </div>

             <div className="order-1 lg:order-2">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 aspect-square lg:aspect-[4/5]">
                  <img 
                    src="/maunita-studio.jpg" 
                    className="w-full h-full object-cover" 
                    alt="Maunita Recording" 
                    onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2070&auto=format&fit=crop" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-8 left-8">
                    <h4 className="text-3xl font-display font-bold">Maunita</h4>
                    <p className="opacity-60 text-sm uppercase tracking-widest">{d.credits.record}</p>
                  </div>
                </div>
             </div>
           </div>
        </div>
      </section>

      {/* Video Clip Inmersivo */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
             <div className="inline-flex items-center gap-2 text-brand-orange uppercase tracking-widest text-xs font-bold mb-2">
                <Clapperboard size={16} /> {d.audiovisual_label}
             </div>
             <h2 className="text-4xl md:text-6xl font-display font-bold">{d.mission_title}</h2>
             <p className="max-w-3xl mx-auto text-lg opacity-70 italic">{d.mission_desc}</p>
          </div>

          <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-black">
            <iframe 
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube-nocookie.com/embed/ybe4eGlZTGc?autoplay=0&rel=0&modestbranding=1" 
              title="Tierra Tierrita Video Clip"
              loading="lazy"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* Galería de Concepto */}
      <section className={`py-32 px-6 ${isDark ? 'bg-brand-surface' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <h2 className="text-4xl md:text-6xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-blue">{d.gallery_title}</h2>
            <p className="font-mono text-sm opacity-50 uppercase tracking-tighter">{d.gallery_subtitle}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="aspect-square rounded-2xl overflow-hidden border border-white/5">
              <img src="/moon-concept.jpg" onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1522030239044-129314828b10?q=80&w=2040&auto=format&fit=crop" }} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Moon Concept" />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden border border-white/5 md:translate-y-8">
              <img src="/pilot-suit.jpg" onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=2088&auto=format&fit=crop" }} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Pilot Suit" />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden border border-white/5">
              <img src="/ystad-biotech.jpg" onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1532187863486-abf9d39d6618?q=80&w=2070&auto=format&fit=crop" }} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Biotech Ystad" />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden border border-white/5 md:translate-y-8">
              <img src="/poster-tierrita.jpg" onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1446941611759-ad16727a294d?q=80&w=2070&auto=format&fit=crop" }} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Poster Tierra Tierrita" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 text-center border-t border-white/5 font-sans">
        <Logo className="mx-auto flex items-center" />
        <h3 className="text-3xl font-display font-bold mt-8 mb-8 opacity-80 italic">"{d.music_author_label}"</h3>
        <button 
          onClick={onBack}
          className="px-10 py-4 bg-brand-blue text-white font-bold rounded-2xl hover:bg-blue-600 transition-all shadow-xl shadow-blue-500/20 active:scale-95"
        >
          {d.back}
        </button>
      </section>
    </div>
  );
};

const DashboardMockup = ({ isDark, t, lang }: { isDark: boolean; t: any, lang: Language }) => {
  return (
    <div className={`w-full rounded-xl overflow-hidden border shadow-2xl backdrop-blur-xl ${
      isDark ? 'bg-brand-surface/80 border-white/10' : 'bg-white/90 border-gray-200'
    }`} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <div className={`h-10 border-b flex items-center px-4 gap-2 ${
        isDark ? 'bg-white/5 border-white/10' : 'bg-gray-50 border-gray-200'
      }`}>
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
        </div>
        <div className={`ms-4 text-[10px] font-mono opacity-50 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
          melodia-production-portal.reel
        </div>
      </div>

      <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="hidden md:flex flex-col gap-3 border-e pe-6 border-dashed border-gray-500/20">
          <div className={`flex items-center gap-2 font-medium text-sm p-2 rounded-lg ${isDark ? 'bg-brand-blue/20 text-brand-blue' : 'bg-blue-50 text-blue-600'}`}>
            <Video size={14} /> {t.dashboard.title}
          </div>
          <div className={`flex items-center gap-2 text-sm p-2 rounded-lg opacity-60 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            <Code2 size={14} /> {t.dashboard.sprints}
          </div>
          <div className={`flex items-center gap-2 text-sm p-2 rounded-lg opacity-60 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            <DollarSign size={14} /> {t.dashboard.budget}
          </div>
        </div>

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

          <div className="grid grid-cols-2 gap-4">
            <div className={`p-4 rounded-xl border ${isDark ? 'bg-white/5 border-white/5' : 'bg-gray-50 border-gray-200'}`}>
              <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                <Activity size={12} /> {t.dashboard.progress}
              </div>
              <div className={`text-xl font-bold font-mono ${isDark ? 'text-white' : 'text-gray-900'}`}>94%</div>
              <div className="w-full h-1 bg-gray-700/50 rounded-full mt-2 overflow-hidden">
                <div className={`h-full bg-brand-orange w-[94%] rounded-full ${lang === 'ar' ? 'origin-right' : 'origin-left'}`}></div>
              </div>
            </div>
            <div className={`p-4 rounded-xl border ${isDark ? 'bg-white/5 border-white/5' : 'bg-gray-50 border-gray-200'}`}>
              <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                <DollarSign size={12} /> {t.dashboard.budget}
              </div>
              <div className={`text-xl font-bold font-mono ${isDark ? 'text-white' : 'text-gray-900'}`}>OPTIMIZED</div>
              <div className="text-[10px] text-green-500 mt-1">{t.dashboard.no_deviation}</div>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className={`text-xs font-bold uppercase tracking-wider ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>{t.dashboard.activity}</h4>
            <div className="flex gap-3 items-center">
              <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-500">
                <Sparkles size={14} />
              </div>
              <div>
                <div className={`text-sm font-medium ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>{t.dashboard.model_opt}</div>
                <div className="text-xs text-gray-500">{t.dashboard.latency}</div>
              </div>
            </div>
             <div className="flex gap-3 items-center">
              <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500">
                <Terminal size={14} />
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
  <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden min-h-[90vh] flex items-center">
    <div className="absolute inset-0 z-0">
      <img 
        src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop" 
        alt="Background" 
        className="w-full h-full object-cover"
        onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop" }}
      />
      <div className={`absolute inset-0 ${
        isDark 
          ? 'bg-gradient-to-b from-brand-dark/95 via-brand-dark/85 to-brand-dark' 
          : 'bg-gradient-to-b from-white/90 via-white/70 to-gray-50'
      }`}></div>
    </div>

    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      <div className="absolute inset-0 grain-overlay z-10"></div>
      <div className="absolute top-0 left-0 w-full h-full mix-blend-screen">
        <div className={`absolute -top-20 -right-20 w-[600px] h-[600px] bg-brand-orange/20 rounded-full bokeh-blur animate-drift-slow opacity-60`}></div>
        <div className={`absolute -bottom-40 -left-40 w-[700px] h-[700px] bg-brand-blue/25 rounded-full bokeh-blur animate-drift-medium opacity-50`} style={{ animationDelay: '-5s' }}></div>
        <div className={`absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-purple-400/20 rounded-full bokeh-blur animate-drift-fast opacity-40`} style={{ animationDelay: '-10s' }}></div>
      </div>
    </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center font-sans">
      <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 border backdrop-blur-sm animate-in slide-in-from-top duration-1000 ${
        isDark ? 'bg-white/5 border-white/10 text-brand-orange' : 'bg-white/80 border-orange-100 text-brand-orange shadow-sm'
      }`}>
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-orange"></span>
        </span>
        <span className="text-sm font-semibold tracking-wide uppercase">{t.hero.badge}</span>
      </div>

      <h1 className={`text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 tracking-tight animate-in zoom-in duration-1000 ${
        isDark ? 'text-white' : 'text-gray-900'
      }`}>
        {t.hero.title_start} <br className="hidden md:block" />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-white to-brand-blue bg-[length:200%_auto] animate-pulse-slow">
          {t.hero.title_end}
        </span>
      </h1>

      <p className={`text-xl md:text-2xl max-w-2xl mx-auto mb-10 leading-relaxed animate-in fade-in slide-in-from-bottom duration-1000 delay-300 ${
        isDark ? 'text-gray-300' : 'text-gray-700'
      }`}>
        {t.hero.subtitle}
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in duration-1000 delay-500">
        <a 
          href="https://www.instagram.com/francisco.carle"
          target="_blank"
          rel="noreferrer"
          className="w-full sm:w-auto px-10 py-4 bg-brand-orange hover:bg-orange-600 text-white rounded-2xl font-bold text-lg transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-orange/40 flex items-center justify-center gap-2"
        >
          <Instagram size={20} /> {t.hero.cta_primary}
        </a>
        <a 
          href="#services"
          className={`w-full sm:w-auto px-10 py-4 rounded-2xl font-bold text-lg transition-all border backdrop-blur-md ${
            isDark 
              ? 'border-white/10 hover:bg-white/5 text-white' 
              : 'border-gray-300 hover:bg-white/50 text-gray-800'
          }`}
        >
          {t.hero.cta_secondary}
        </a>
      </div>

      <div className="mt-24 relative max-w-4xl mx-auto animate-float">
        <div className="relative">
           <div className="absolute -inset-4 bg-gradient-to-r from-brand-orange to-brand-blue rounded-3xl blur-[40px] opacity-15"></div>
           <DashboardMockup isDark={isDark} t={t} lang={lang} />
        </div>
        <p className={`mt-6 text-sm font-medium opacity-50 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          {t.hero.dashboard_caption}
        </p>
      </div>
    </div>
  </section>
);

const BentoItem = ({ title, desc, icon: Icon, cols = "col-span-1", isDark }: any) => (
  <div className={`${cols} group relative overflow-hidden rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 ${
    isDark 
      ? 'bg-brand-surface border border-white/10 hover:border-brand-orange/50' 
      : 'bg-white border border-gray-200 shadow-sm hover:shadow-md hover:border-brand-orange/50'
  }`}>
    <div className={`absolute top-0 end-0 p-32 bg-brand-orange/5 rounded-full blur-3xl transition-opacity opacity-0 group-hover:opacity-100`}></div>
    
    <div className="relative z-10">
      <div className={`inline-flex p-3 rounded-lg mb-4 ${
        isDark ? 'bg-white/5 text-brand-orange' : 'bg-orange-50 text-brand-orange'
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
      <div className="text-center max-w-3xl mx-auto mb-16 font-sans">
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
          cols="md:col-span-1"
          title={t.services.web.title}
          desc={t.services.web.desc}
          icon={Smartphone}
        />
        <BentoItem 
          isDark={isDark}
          cols="md:col-span-2"
          title={t.services.ai.title}
          desc={t.services.ai.desc}
          icon={Camera}
        />
        <BentoItem 
          isDark={isDark}
          title={t.services.software.title}
          desc={t.services.software.desc}
          icon={Code2}
        />
        <BentoItem 
          isDark={isDark}
          title={t.services.audiovisual.title}
          desc={t.services.audiovisual.desc}
          icon={Clapperboard}
        />
        <BentoItem 
          isDark={isDark}
          title={t.services.agile.title}
          desc={t.services.agile.desc}
          icon={Zap}
        />
        <BentoItem 
          isDark={isDark}
          cols="md:col-span-1"
          title={t.services.ui.title}
          desc={t.services.ui.desc}
          icon={Film}
        />
      </div>
    </div>
  </section>
);

const TierraTierritaTeaser = ({ isDark, t, onEnter }: { isDark: boolean; t: any; onEnter: () => void }) => (
  <section id="audiovisual" className={`py-24 relative overflow-hidden ${isDark ? 'bg-brand-dark' : 'bg-white'}`}>
    <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
       <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-orange/20 rounded-full blur-[120px]"></div>
       <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-blue/20 rounded-full blur-[120px]"></div>
    </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-sans">
      <div className="text-center max-w-4xl mx-auto mb-16">
        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full mb-6 border ${
          isDark ? 'bg-brand-orange/10 border-brand-orange/20 text-brand-orange' : 'bg-orange-50 border-orange-200 text-brand-orange'
        }`}>
          <Video size={14} />
          <span className="text-xs font-bold uppercase tracking-wider">{t.tierrita.badge}</span>
        </div>
        <h2 className={`text-4xl md:text-6xl font-display font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
          {t.tierrita.title}
        </h2>
        <p className={`text-xl md:text-2xl font-medium ${isDark ? 'text-brand-blue/80' : 'text-brand-blue'}`}>
          {t.tierrita.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-8 group relative">
          <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-black">
             <iframe 
               className="absolute inset-0 w-full h-full"
               src="https://www.youtube-nocookie.com/embed/ybe4eGlZTGc?autoplay=0&rel=0&modestbranding=1" 
               title="Tierra Tierrita Teaser"
               loading="lazy"
               frameBorder="0"
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
               allowFullScreen
             ></iframe>
          </div>
        </div>

        <div className="lg:col-span-4 space-y-8">
           <div className="space-y-4">
              <h3 className={`text-2xl font-bold font-display ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {t.tierrita.story_title}
              </h3>
              <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                {t.tierrita.desc}
              </p>
           </div>

           <div className={`p-6 rounded-2xl border group transition-all duration-500 hover:scale-[1.02] ${isDark ? 'bg-white/5 border-white/10 hover:border-brand-orange/40' : 'bg-gray-50 border-gray-200 hover:border-brand-orange/40 shadow-sm'}`}>
              <div className="flex items-center gap-3 mb-3 text-brand-orange font-bold text-sm uppercase tracking-wider">
                <Sparkles size={16} className="animate-pulse-slow" /> {t.tierrita.tagline}
              </div>
              <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'} italic`}>
                {t.tierrita.quote}
              </p>
           </div>

           <div className="flex items-center gap-4 pt-4">
             <button 
               onClick={onEnter}
               className={`flex items-center gap-2 font-bold transition-all hover:text-brand-orange ${isDark ? 'text-white' : 'text-gray-900'}`}
             >
               {t.tierrita.more} <ArrowRight size={18} />
             </button>
           </div>
        </div>
      </div>
    </div>
  </section>
);

const PortfolioCard = ({ title, desc, icon: Icon, tags, cta, isDark, image, link, isAlternate, badge }: any) => (
  <div className={`rounded-3xl border overflow-hidden transition-all hover:shadow-2xl hover:shadow-brand-blue/10 ${
    isDark ? 'bg-[#0a0a0a] border-white/10' : 'bg-gray-50 border-gray-200'
  }`}>
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 md:p-12 items-center`}>
      <div className={`order-2 ${isAlternate ? 'lg:order-2' : 'lg:order-1'} relative group`}>
        <div 
          className={`rounded-xl border shadow-xl overflow-hidden relative h-64 md:h-80 w-full bg-cover bg-center ${
           isDark ? 'border-gray-700 bg-gray-900' : 'border-gray-300 bg-gray-200'
          }`}
          style={{ backgroundImage: `url('${image}')` }}
        >
           <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
           {badge && (
             <div className="absolute top-4 right-4 px-3 py-1 bg-brand-orange text-white text-[10px] font-bold uppercase rounded-full shadow-lg">
               {badge}
             </div>
           )}
        </div>
      </div>
      
      <div className={`order-1 ${isAlternate ? 'lg:order-1' : 'lg:order-2'} space-y-6 font-sans`}>
        <div className="flex items-center gap-3">
           <div className={`p-3 rounded-xl ${isDark ? 'bg-brand-blue/10 text-brand-blue' : 'bg-blue-100 text-blue-600'}`}>
             <Icon size={28} />
           </div>
           <h3 className={`text-3xl font-bold font-display ${isDark ? 'text-white' : 'text-gray-900'}`}>{title}</h3>
        </div>
        <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          {desc}
        </p>
        <div className="flex flex-wrap gap-2">
           {tags.map((tag: string) => (
             <span key={tag} className={`px-3 py-1 rounded-full text-xs font-medium border ${
               isDark ? 'bg-white/5 border-white/10 text-gray-300' : 'bg-white border-gray-200 text-gray-600'
             }`}>
               {tag}
             </span>
           ))}
        </div>
        <div className="pt-4">
          <a 
            href={link || "#"} 
            target={link ? "_blank" : "_self"}
            rel="noreferrer"
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all ${
              isDark 
                ? 'bg-white text-black hover:bg-gray-200' 
                : 'bg-gray-900 text-white hover:bg-gray-800'
            }`}
          >
            {cta} <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </div>
  </div>
);

const Portfolio = ({ isDark, t }: { isDark: boolean; t: any }) => (
  <section id="portfolio" className={`py-24 ${isDark ? 'bg-brand-surface' : 'bg-white'}`}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-16 font-sans">
        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full mb-6 border ${
          isDark ? 'bg-white/5 border-white/10 text-brand-blue' : 'bg-blue-50 border-blue-200 text-brand-blue'
        }`}>
          <Code2 size={14} />
          <span className="text-xs font-bold uppercase tracking-wider">{t.portfolio.badge}</span>
        </div>
        <h2 className={`text-3xl md:text-5xl font-display font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
          {t.portfolio.title}
        </h2>
        <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          {t.portfolio.subtitle}
        </p>
      </div>

      <div className="flex flex-col gap-16">
        <PortfolioCard 
          title="Armonix"
          desc={t.portfolio.armonix.desc}
          icon={Music4}
          tags={['React', 'Web Audio API', 'Tone.js', 'UI Design']}
          cta={t.portfolio.armonix.cta}
          image="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2070&auto=format&fit=crop"
          isDark={isDark}
        />
        <PortfolioCard 
          title="La Palabra"
          desc={t.portfolio.palabra.desc}
          icon={Type}
          tags={['Typography', 'Accessibility', 'Daily Content', 'Reading Mode']}
          cta={t.portfolio.palabra.cta}
          image="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=2070&auto=format&fit=crop"
          link="https://lapalabradiaria.com"
          isDark={isDark}
          isAlternate
        />
        <PortfolioCard 
          title="Emaús"
          desc={t.portfolio.emaus.desc}
          icon={Church}
          tags={['SaaS', 'Management', 'Digital Signature', 'Security']}
          cta={t.portfolio.emaus.cta}
          image="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=2073&auto=format&fit=crop"
          isDark={isDark}
        />
        <PortfolioCard 
          title="Verso"
          desc={t.portfolio.verso.desc}
          icon={Mic2}
          tags={['Real-time', 'AI Music', 'Collab', 'Gemini API']}
          cta={t.portfolio.verso.cta}
          image="https://images.unsplash.com/photo-1514525253361-b83f859b73c0?q=80&w=2048&auto=format&fit=crop"
          isDark={isDark}
          isAlternate
          badge="In Alpha"
        />
      </div>
    </div>
  </section>
);

const Philosophy = ({ isDark, t }: { isDark: boolean; t: any }) => (
  <section id="philosophy" className="py-24 relative overflow-hidden font-sans">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
           <div className="flex items-center gap-2 mb-4 text-brand-orange font-bold tracking-wider text-sm uppercase">
             <Video size={16} /> {t.philosophy.badge}
           </div>
           <h2 className={`text-4xl md:text-5xl font-display font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
             {t.philosophy.title_start} <br/>
             <span className="italic text-brand-blue">{t.philosophy.title_end}</span>
           </h2>
           <p className={`text-lg mb-8 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
             {t.philosophy.desc}
           </p>

           <div className="space-y-6">
             {t.philosophy.points.map((item: any, idx: number) => (
               <div key={idx} className="flex gap-4">
                 <div className={`mt-1 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                   isDark ? 'bg-brand-orange/20 text-brand-orange' : 'bg-orange-100 text-orange-600'
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
          <div className={`relative rounded-2xl p-8 border ${
            isDark ? 'bg-brand-surface border-white/10' : 'bg-white border-gray-200 shadow-xl'
          }`}>
             <div className="space-y-4 font-mono text-sm">
                <div className="flex items-center gap-2 text-gray-500 mb-4">
                  <Terminal size={16} />
                  <span>render-engine — melodia-lab</span>
                </div>
                <div dir="ltr" className="text-start">
                  <div>
                    <span className="text-brand-orange">➜</span> <span className="text-blue-500">~</span> <span className={isDark ? 'text-white' : 'text-gray-800'}>{t.philosophy.terminal.start}</span>
                  </div>
                  <div className="text-gray-500">{t.philosophy.terminal.init}</div>
                  <div className="text-gray-500">{t.philosophy.terminal.loading} <span className="text-brand-orange">{t.philosophy.terminal.done}</span></div>
                  <div className="text-gray-500">{t.philosophy.terminal.budget} <span className="text-brand-orange">{t.philosophy.terminal.done}</span></div>
                  <div className="text-gray-500">{t.philosophy.terminal.agility} <span className="text-brand-orange">{t.philosophy.terminal.done}</span></div>
                  <div>
                    <span className="text-brand-orange">➜</span> <span className="text-blue-500">~</span> <span className={`${isDark ? 'text-white' : 'text-gray-800'} animate-pulse`}>_</span>
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
  <section id="contact" className={`py-24 ${isDark ? 'bg-brand-surface' : 'bg-white'} font-sans`}>
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className={`rounded-3xl p-8 md:p-12 overflow-hidden relative border ${
        isDark ? 'bg-[#0a0a0a] border-white/10' : 'bg-gray-50 border-gray-200'
      }`}>
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
                type="text" id="name" name="name" required
                className={`w-full px-4 py-3 rounded-lg outline-none border transition-all ${
                  isDark ? 'bg-white/5 border-white/10 text-white placeholder-gray-600 focus:ring-brand-blue' : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400'
                }`}
                placeholder={t.contact.name_ph} 
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{t.contact.email}</label>
              <input 
                type="email" id="email" name="email" required
                className={`w-full px-4 py-3 rounded-lg outline-none border transition-all ${
                  isDark ? 'bg-white/5 border-white/10 text-white placeholder-gray-600 focus:ring-brand-blue' : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400'
                }`} 
                placeholder={t.contact.email_ph} 
              />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{t.contact.message}</label>
            <textarea 
              id="message" name="message" required rows={4} 
              className={`w-full px-4 py-3 rounded-lg outline-none border transition-all resize-none ${
                isDark ? 'bg-white/5 border-white/10 text-white placeholder-gray-600 focus:ring-brand-blue' : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400'
              }`} 
              placeholder={t.contact.message_ph} 
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="w-full bg-brand-orange hover:bg-orange-600 text-white font-bold py-4 rounded-xl transition-all hover:scale-[1.02] shadow-lg shadow-brand-orange/25 flex items-center justify-center gap-2"
          >
            {t.contact.submit} <Play size={20} />
          </button>
        </form>
      </div>
    </div>
  </section>
);

const FooterCard = ({ title, label, icon: Icon, colorClass, link, isDark, connectLabel }: any) => (
  <a 
    href={link} 
    target="_blank" 
    rel="noreferrer"
    className={`group relative overflow-hidden p-6 md:p-10 rounded-[2.5rem] border transition-all duration-500 hover:-translate-y-2 ${
      isDark ? 'bg-white/5 border-white/10' : 'bg-white border-gray-200 shadow-sm'
    }`}
  >
    <div className={`absolute top-0 end-0 p-24 blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity ${colorClass}`}></div>
    <div className="relative z-10 flex flex-col gap-4">
       <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:rotate-6 ${
         isDark ? 'bg-white/10 text-white' : 'bg-gray-100 text-gray-900'
       }`}>
         <Icon size={32} />
       </div>
       <div>
         <p className="text-xs font-bold uppercase tracking-widest opacity-40 mb-1">{label}</p>
         <h4 className={`text-2xl md:text-3xl font-display font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>{title}</h4>
       </div>
       <div className={`inline-flex items-center gap-2 text-sm font-bold transition-colors group-hover:text-brand-orange ${isDark ? 'text-white/60' : 'text-gray-500'}`}>
         {connectLabel} <ArrowRight size={16} />
       </div>
    </div>
  </a>
);

const Footer = ({ isDark, t }: { isDark: boolean; t: any }) => {
  const navItems = [
    { name: t.nav.services, href: '#services' },
    { name: t.nav.audiovisual, href: '#audiovisual' },
    { name: t.nav.projects, href: '#portfolio' },
    { name: t.nav.philosophy, href: '#philosophy' },
    { name: t.nav.contact, href: '#contact' },
  ];

  return (
    <footer className={`relative overflow-hidden pt-24 font-sans ${isDark ? 'bg-brand-dark' : 'bg-brand-light'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
          <FooterCard 
            isDark={isDark}
            label={t.footer.connect_corporate}
            title="LinkedIn"
            icon={Linkedin}
            colorClass="bg-brand-blue"
            link="https://www.linkedin.com/company/melodialab/"
            connectLabel={t.footer.connect}
          />
          <FooterCard 
            isDark={isDark}
            label={t.footer.connect_visual}
            title="Instagram"
            icon={Instagram}
            colorClass="bg-brand-orange"
            link="https://www.instagram.com/francisco.carle"
            connectLabel={t.footer.connect}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-gray-500/10">
          <div className="lg:col-span-4 space-y-6">
            <Logo />
            <p className={`text-sm leading-relaxed max-w-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              {t.footer.subtitle}
            </p>
          </div>
          
          <div className="lg:col-span-4">
             <h5 className={`font-bold mb-6 text-sm uppercase tracking-widest ${isDark ? 'text-white' : 'text-gray-900'}`}>{t.footer.nav_title}</h5>
             <div className="grid grid-cols-2 gap-4">
               {navItems.map(item => (
                 <a 
                   key={item.name} 
                   href={item.href} 
                   className={`text-sm transition-colors hover:text-brand-orange ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
                 >
                   {item.name}
                 </a>
               ))}
             </div>
          </div>

          <div className="lg:col-span-4">
             <h5 className={`font-bold mb-6 text-sm uppercase tracking-widest ${isDark ? 'text-white' : 'text-gray-900'}`}>{t.footer.contact_title}</h5>
             <div className={`space-y-4 text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                <div className="flex gap-4">
                  <a href="https://www.instagram.com/francisco.carle" target="_blank" rel="noreferrer" className="hover:text-brand-orange"><Instagram size={18} /></a>
                  <a href="https://www.linkedin.com/company/melodialab/" target="_blank" rel="noreferrer" className="hover:text-brand-orange"><Linkedin size={18} /></a>
                </div>
             </div>
          </div>
        </div>

        <div className="py-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
            &copy; {new Date().getFullYear()} MelodIA lab. {t.footer.rights}
          </p>
          <div className="flex items-center gap-6">
             <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${isDark ? 'border-white/10 text-gray-500' : 'border-gray-200 text-gray-400'}`}>
               v2.7.2 — HYBRID ENGINE STABLE
             </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

const App = () => {
  const [isDark, setIsDark] = useState(true);
  const [activeProject, setActiveProject] = useState<string | null>(null);
  const { lang, setLang, t } = useLanguage();

  const toggleTheme = () => setIsDark(!isDark);

  useEffect(() => {
    const handleLocationChange = () => {
      const path = window.location.pathname.toLowerCase().replace(/\/$/, "");
      if (path === '/tierratierrita') {
        setActiveProject('tierrita');
      } else {
        setActiveProject(null);
      }
    };
    handleLocationChange();
    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  const navigateToProject = (projectId: string | null) => {
    if (projectId === 'tierrita') {
      window.history.pushState({}, '', '/tierratierrita');
      setActiveProject('tierrita');
    } else {
      window.history.pushState({}, '', '/');
      setActiveProject(null);
    }
    window.scrollTo(0, 0);
  };

  if (activeProject === 'tierrita') {
    return (
      <TierraTierritaDetailed 
        t={t} 
        onBack={() => navigateToProject(null)} 
        isDark={isDark} 
        toggleTheme={toggleTheme}
        lang={lang}
        setLang={setLang}
      />
    );
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 font-sans ${isDark ? 'bg-brand-dark text-white' : 'bg-brand-light text-gray-900'}`}>
      <Navbar isDark={isDark} toggleTheme={toggleTheme} lang={lang} setLang={setLang} t={t} />
      <main className="animate-in fade-in duration-700">
        <Hero isDark={isDark} t={t} lang={lang} />
        <Services isDark={isDark} t={t} />
        <TierraTierritaTeaser isDark={isDark} t={t} onEnter={() => navigateToProject('tierrita')} />
        <Portfolio isDark={isDark} t={t} />
        <Philosophy isDark={isDark} t={t} />
        <Contact isDark={isDark} t={t} />
      </main>
      <Footer isDark={isDark} t={t} />
    </div>
  );
};

export default App;
// v2.7.2 - Personalization Layer: User can now upload local images to /public with automatic high-quality fallbacks.
