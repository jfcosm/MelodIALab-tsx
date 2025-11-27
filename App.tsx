
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
  Sparkles
} from 'lucide-react';

// --- Components ---

const Logo = () => (
  <span className="font-display font-bold text-2xl tracking-tighter">
    Melod<span className="text-brand-blue">IA</span> La<span className="text-brand-orange italic font-serif text-3xl leading-none">♭</span>
  </span>
);

const Navbar = ({ isDark, toggleTheme }: { isDark: boolean; toggleTheme: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Servicios', href: '#services' },
    { name: 'Proyectos', href: '#portfolio' },
    { name: 'Filosofía', href: '#philosophy' },
    { name: 'Contacto', href: '#contact' },
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
          <div className="hidden md:flex items-center gap-8">
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
            
            <button 
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors ${
                isDark ? 'bg-white/10 hover:bg-white/20 text-yellow-400' : 'bg-gray-100 hover:bg-gray-200 text-gray-600'
              }`}
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <a 
              href="#contact"
              className="bg-brand-blue hover:bg-blue-600 text-white px-5 py-2.5 rounded-lg font-bold text-sm transition-transform hover:scale-105 shadow-lg shadow-blue-500/30"
            >
              Iniciar Proyecto
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
             <a 
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="bg-brand-blue text-white text-center py-3 rounded-lg font-bold mt-2"
            >
              Iniciar Proyecto
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

const DashboardMockup = ({ isDark }: { isDark: boolean }) => {
  return (
    <div className={`w-full rounded-xl overflow-hidden border shadow-2xl backdrop-blur-xl ${
      isDark ? 'bg-brand-surface/80 border-white/10' : 'bg-white/90 border-gray-200'
    }`}>
      {/* Fake Window Header */}
      <div className={`h-10 border-b flex items-center px-4 gap-2 ${
        isDark ? 'bg-white/5 border-white/10' : 'bg-gray-50 border-gray-200'
      }`}>
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
        </div>
        <div className={`ml-4 text-[10px] font-mono opacity-50 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
          melodia-client-portal.app
        </div>
      </div>

      {/* Dashboard Body */}
      <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Sidebar Mock */}
        <div className="hidden md:flex flex-col gap-3 border-r pr-6 border-dashed border-gray-500/20">
          <div className={`flex items-center gap-2 font-medium text-sm p-2 rounded-lg ${isDark ? 'bg-brand-blue/20 text-brand-blue' : 'bg-blue-50 text-blue-600'}`}>
            <LayoutDashboard size={14} /> Dashboard
          </div>
          <div className={`flex items-center gap-2 text-sm p-2 rounded-lg opacity-60 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            <Clock size={14} /> Sprints
          </div>
          <div className={`flex items-center gap-2 text-sm p-2 rounded-lg opacity-60 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            <DollarSign size={14} /> Presupuesto
          </div>
        </div>

        {/* Main Content */}
        <div className="md:col-span-2 space-y-6">
          <div className="flex justify-between items-center">
            <div>
              <h3 className={`font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Proyecto Beta</h3>
              <p className="text-xs text-gray-500">Actualizado hace 2 min</p>
            </div>
            <span className="px-2 py-1 bg-green-500/20 text-green-500 text-xs rounded-full font-bold border border-green-500/20">
              En Curso
            </span>
          </div>

          {/* Metrics Cards */}
          <div className="grid grid-cols-2 gap-4">
            <div className={`p-4 rounded-xl border ${isDark ? 'bg-white/5 border-white/5' : 'bg-gray-50 border-gray-200'}`}>
              <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                <Clock size={12} /> Progreso Sprint
              </div>
              <div className={`text-xl font-bold font-mono ${isDark ? 'text-white' : 'text-gray-900'}`}>75%</div>
              <div className="w-full h-1 bg-gray-700/50 rounded-full mt-2 overflow-hidden">
                <div className="h-full bg-brand-blue w-3/4 rounded-full"></div>
              </div>
            </div>
            <div className={`p-4 rounded-xl border ${isDark ? 'bg-white/5 border-white/5' : 'bg-gray-50 border-gray-200'}`}>
              <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                <DollarSign size={12} /> Presupuesto
              </div>
              <div className={`text-xl font-bold font-mono ${isDark ? 'text-white' : 'text-gray-900'}`}>OK</div>
              <div className="text-[10px] text-green-500 mt-1">Sin desviaciones</div>
            </div>
          </div>

          {/* Activity Feed */}
          <div className="space-y-3">
            <h4 className={`text-xs font-bold uppercase tracking-wider ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>Actividad Reciente</h4>
            <div className="flex gap-3 items-center">
              <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-500">
                <Cpu size={14} />
              </div>
              <div>
                <div className={`text-sm font-medium ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>Modelo IA Optimizado</div>
                <div className="text-xs text-gray-500">Reducción de latencia en 20%</div>
              </div>
            </div>
             <div className="flex gap-3 items-center">
              <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500">
                <GitCommit size={14} />
              </div>
              <div>
                <div className={`text-sm font-medium ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>Frontend Deploy</div>
                <div className="text-xs text-gray-500">v2.4.0 Live</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Hero = ({ isDark }: { isDark: boolean }) => (
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
        <span className="text-sm font-semibold tracking-wide">Desarrollo Web & IA</span>
      </div>

      <h1 className={`text-5xl md:text-7xl font-display font-bold mb-6 tracking-tight ${
        isDark ? 'text-white' : 'text-gray-900'
      }`}>
        Componiendo Software <br className="hidden md:block" />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-purple-500">
          Inteligente
        </span>
      </h1>

      <p className={`text-xl md:text-2xl max-w-2xl mx-auto mb-10 leading-relaxed ${
        isDark ? 'text-gray-300' : 'text-gray-700'
      }`}>
        Donde la agilidad encuentra su ritmo. Creamos experiencias digitales afinadas con Inteligencia Artificial.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a 
          href="#contact"
          className="w-full sm:w-auto px-8 py-4 bg-brand-blue hover:bg-blue-600 text-white rounded-xl font-bold text-lg transition-all hover:-translate-y-1 shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2"
        >
          Agendar Consultoría <ArrowRight size={20} />
        </a>
        <a 
          href="#services"
          className={`w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-lg transition-all border backdrop-blur-sm ${
            isDark 
              ? 'border-white/10 hover:bg-white/5 text-white' 
              : 'border-gray-300 hover:bg-white/50 text-gray-800'
          }`}
        >
          Ver Servicios
        </a>
      </div>

      {/* Hero Visual Abstract - Replaced with Dashboard Mockup */}
      <div className="mt-20 relative max-w-4xl mx-auto animate-float">
        <div className="relative">
           {/* Glow effect behind dashboard */}
           <div className="absolute -inset-1 bg-gradient-to-r from-brand-blue to-purple-600 rounded-2xl blur opacity-20"></div>
           <DashboardMockup isDark={isDark} />
        </div>
        
        {/* Caption for the dashboard */}
        <p className={`mt-4 text-sm font-medium opacity-60 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          *Así gestionamos tu proyecto: claridad total, cero ruido.
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
    <div className={`absolute top-0 right-0 p-32 bg-brand-blue/5 rounded-full blur-3xl transition-opacity opacity-0 group-hover:opacity-100`}></div>
    
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

const Services = ({ isDark }: { isDark: boolean }) => (
  <section id="services" className={`py-24 ${isDark ? 'bg-[#0a0a0a]' : 'bg-gray-50'}`}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className={`text-3xl md:text-5xl font-display font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
          Nuestra Suite de Servicios
        </h2>
        <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          Soluciones modulares diseñadas para escalar con tu negocio.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <BentoItem 
          isDark={isDark}
          cols="md:col-span-2"
          title="Desarrollo Web & Apps"
          desc="Creamos experiencias digitales nativas y progresivas. Desde landing pages de alto impacto hasta aplicaciones móviles complejas, utilizamos React, Node.js y las últimas tecnologías para garantizar velocidad y escalabilidad."
          icon={Monitor}
        />
        <BentoItem 
          isDark={isDark}
          title="Soluciones IA"
          desc="Integramos modelos de lenguaje y automatización inteligente para optimizar tus procesos de negocio. No es magia, es ingeniería."
          icon={Cpu}
        />
        <BentoItem 
          isDark={isDark}
          title="Consultoría Ágil"
          desc="Auditoría tecnológica y optimización de flujos de trabajo con metodologías Scrum adaptadas a equipos pequeños."
          icon={Zap}
        />
        <BentoItem 
          isDark={isDark}
          cols="md:col-span-2"
          title="Diseño UI/UX"
          desc="Interfaces que no solo se ven bien, sino que funcionan. Nos centramos en la usabilidad y la accesibilidad para convertir visitantes en clientes leales."
          icon={Smartphone}
        />
      </div>
    </div>
  </section>
);

const Portfolio = ({ isDark }: { isDark: boolean }) => (
  <section id="portfolio" className={`py-24 ${isDark ? 'bg-brand-surface' : 'bg-white'}`}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full mb-6 border ${
          isDark ? 'bg-white/5 border-white/10 text-brand-orange' : 'bg-orange-50 border-orange-200 text-brand-orange'
        }`}>
          <Sparkles size={14} />
          <span className="text-xs font-bold uppercase tracking-wider">Desarrollos Actuales</span>
        </div>
        <h2 className={`text-3xl md:text-5xl font-display font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
          Donde las ideas <br/> cobran vida
        </h2>
        <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          No solo hablamos de código, lo demostramos. Conoce algunos de los productos que estamos construyendo.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-12">
        {/* Armonix Project - Lifestyle Image */}
        <div className={`rounded-3xl border overflow-hidden transition-all hover:shadow-2xl hover:shadow-brand-blue/10 ${
          isDark ? 'bg-[#0a0a0a] border-white/10' : 'bg-gray-50 border-gray-200'
        }`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 md:p-12 items-center">
            <div className="order-2 lg:order-1 relative group">
              {/* Lifestyle Image Frame - USING LOCAL IMAGE */}
              <div 
                className={`rounded-xl border shadow-xl overflow-hidden relative transition-transform duration-500 group-hover:-translate-y-2 h-64 md:h-80 w-full bg-cover bg-center ${
                 isDark ? 'border-gray-700 bg-gray-900' : 'border-gray-300 bg-gray-200'
                }`}
                style={{
                  backgroundImage: "url('/armonix_landing.jpg')" 
                }}
              >
                 {/* Fallback content or Overlay */}
                 <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
              </div>
              {/* Glow */}
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
                Una suite musical interactiva para compositores y estudiantes. Armonix combina visualización de teoría musical en tiempo real con herramientas como un <strong>Groovebox</strong> y un afinador de alta precisión.
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
                  Probar Armonix <ExternalLink size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* La Palabra Diaria Project - Lifestyle Image */}
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
                Plataforma dedicada a la lectura y reflexión. Diseñada con un enfoque en la <strong>accesibilidad</strong> y la tipografía, ofrece lecturas católicas diarias, biografías de santos y reflexiones en una interfaz limpia y libre de distracciones.
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
                  Visitar Web <ExternalLink size={18} />
                </a>
              </div>
            </div>

            <div className="order-2 relative group">
               {/* Lifestyle Image Frame - USING LOCAL IMAGE */}
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
               {/* Glow */}
               <div className="absolute -inset-4 bg-indigo-500/20 blur-3xl -z-10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
);

const Philosophy = ({ isDark }: { isDark: boolean }) => (
  <section id="philosophy" className="py-24 relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
           <div className="flex items-center gap-2 mb-4 text-brand-orange font-bold tracking-wider text-sm uppercase">
             <Music size={16} /> Filosofía del Estudio
           </div>
           <h2 className={`text-4xl md:text-5xl font-display font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
             No solo programamos, <br/>
             <span className="italic font-serif text-brand-blue">componemos.</span>
           </h2>
           <p className={`text-lg mb-8 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
             En MelodIA La♭, creemos que el desarrollo de software debe tener ritmo. Eliminamos el ruido innecesario para centrarnos en lo que realmente importa: tu producto.
           </p>

           <div className="space-y-6">
             {[
               { title: "Certeza (Afinación)", desc: "Presupuestos claros desde el inicio. Sin sorpresas ni costos ocultos." },
               { title: "Agilidad (Ritmo)", desc: "Sprints cortos y entregables tangibles. Ves el progreso semana a semana." },
               { title: "Inteligencia (Armonía)", desc: "La IA es nuestro copiloto, permitiéndonos desarrollar más rápido y mejor." }
             ].map((item, idx) => (
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
                <div>
                  <span className="text-green-500">➜</span> <span className="text-blue-500">~</span> <span className={isDark ? 'text-white' : 'text-gray-800'}>melodia-lab start-project</span>
                </div>
                <div className="text-gray-500">Initializing environment...</div>
                <div className="text-gray-500">Loading AI modules... <span className="text-green-500">Done</span></div>
                <div className="text-gray-500">Optimizing budget... <span className="text-green-500">Done</span></div>
                <div className="text-gray-500">Generating agility... <span className="text-green-500">Done</span></div>
                <div>
                  <span className="text-green-500">➜</span> <span className="text-blue-500">~</span> <span className={`${isDark ? 'text-white' : 'text-gray-800'} animate-pulse`}>_</span>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Contact = ({ isDark }: { isDark: boolean }) => (
  <section id="contact" className={`py-24 ${isDark ? 'bg-brand-surface' : 'bg-white'}`}>
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className={`rounded-3xl p-8 md:p-12 overflow-hidden relative border ${
        isDark ? 'bg-[#0a0a0a] border-white/10' : 'bg-gray-50 border-gray-200'
      }`}>
        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-orange/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2"></div>

        <div className="relative z-10 text-center mb-12">
          <h2 className={`text-3xl md:text-4xl font-display font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            ¿Quién dijo yo?
          </h2>
          <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Cuéntanos tu idea. Te respondemos con un plan concreto y un presupuesto transparente.
          </p>
        </div>

        <form action="https://formspree.io/f/xdkkpapn" method="POST" className="space-y-6 max-w-xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Nombre</label>
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
                placeholder="Tu nombre" 
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Email</label>
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
                placeholder="hola@ejemplo.com" 
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Mensaje</label>
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
              placeholder="Descríbenos brevemente tu proyecto..." 
            ></textarea>
          </div>

          <button 
            type="submit" 
            className="w-full bg-brand-blue hover:bg-blue-600 text-white font-bold py-4 rounded-xl transition-all hover:scale-[1.02] shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2"
          >
            Enviar Mensaje <MessageSquare size={20} />
          </button>
        </form>
      </div>
    </div>
  </section>
);

const Footer = ({ isDark }: { isDark: boolean }) => (
  <footer className={`py-12 border-t ${isDark ? 'bg-brand-dark border-white/10' : 'bg-gray-50 border-gray-200'}`}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
      <div className={isDark ? 'text-white' : 'text-gray-900'}>
        <Logo />
        <p className={`text-sm mt-2 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
          &copy; {new Date().getFullYear()} MelodIA La♭. Todos los derechos reservados.
        </p>
      </div>
      
      <div className="flex gap-6">
        <a href="#" className={`transition-colors ${isDark ? 'text-gray-500 hover:text-white' : 'text-gray-500 hover:text-gray-900'}`}>GitHub</a>
        <a href="#" className={`transition-colors ${isDark ? 'text-gray-500 hover:text-white' : 'text-gray-500 hover:text-gray-900'}`}>LinkedIn</a>
        <a href="#" className={`transition-colors ${isDark ? 'text-gray-500 hover:text-white' : 'text-gray-500 hover:text-gray-900'}`}>Twitter</a>
      </div>
    </div>
  </footer>
);

// --- Main App ---

const App = () => {
  // Default to dark mode for that tech vibe
  const [isDark, setIsDark] = useState(true);

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
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      
      <main>
        <Hero isDark={isDark} />
        <Services isDark={isDark} />
        <Portfolio isDark={isDark} />
        <Philosophy isDark={isDark} />
        <Contact isDark={isDark} />
      </main>

      <Footer isDark={isDark} />
    </div>
  );
};

export default App;
