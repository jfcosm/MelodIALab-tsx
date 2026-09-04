import React, { useState, useEffect } from 'react';
import { 
  X, 
  Plus, 
  ExternalLink, 
  Music4, 
  Type, 
  Church, 
  Mic2, 
  Code2, 
  Monitor, 
  Smartphone, 
  Cpu, 
  Palette, 
  Sparkles, 
  Globe, 
  Video, 
  Zap, 
  Layers, 
  Flame, 
  Check, 
  Image as ImageIcon,
  Languages,
  Loader2,
  CheckCircle2,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { PortfolioItem, IconType } from '../../types/cms';
import { translatePortfolioItemWithAI } from '../../services/translator';
import { useContent } from '../../context/ContentContext';
import { LANGUAGES, Language } from '../../../translations';

interface PortfolioModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (item: Partial<PortfolioItem>) => void;
  initialData?: PortfolioItem | null;
}

const ICON_MAP: Record<IconType, React.ComponentType<{ size?: number; className?: string }>> = {
  Music4,
  Type,
  Church,
  Mic2,
  Code2,
  Monitor,
  Smartphone,
  Cpu,
  Palette,
  Sparkles,
  Globe,
  Video,
  Zap,
  Layers,
  Flame
};

const AVAILABLE_ICONS: IconType[] = [
  'Music4', 'Type', 'Church', 'Mic2', 'Code2', 
  'Monitor', 'Smartphone', 'Cpu', 'Palette', 
  'Sparkles', 'Globe', 'Video', 'Zap', 'Layers', 'Flame'
];

export const PortfolioModal: React.FC<PortfolioModalProps> = ({
  isOpen,
  onClose,
  onSave,
  initialData
}) => {
  const { geminiApiKey } = useContent();

  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [icon, setIcon] = useState<IconType>('Code2');
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState('');
  const [cta, setCta] = useState('Explorar');
  const [link, setLink] = useState('');
  const [filename, setFilename] = useState('');
  const [fallback, setFallback] = useState('');
  const [badge, setBadge] = useState('');
  const [isAlternate, setIsAlternate] = useState(false);
  const [active, setActive] = useState(true);

  // Multilingual state
  const [titles, setTitles] = useState<Record<string, string>>({});
  const [descriptions, setDescriptions] = useState<Record<string, string>>({});
  const [ctas, setCtas] = useState<Record<string, string>>({});
  
  // UI Tabs & Translation controls
  const [previewTab, setPreviewTab] = useState<'form' | 'translations' | 'preview'>('form');
  const [selectedTransLang, setSelectedTransLang] = useState<Language>('en');
  const [isTranslating, setIsTranslating] = useState(false);
  const [translationStatus, setTranslationStatus] = useState<string | null>(null);

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title || '');
      setDesc(initialData.desc || '');
      setIcon(initialData.icon || 'Code2');
      setTags(initialData.tags || []);
      setCta(initialData.cta || 'Explorar');
      setLink(initialData.link || '');
      setFilename(initialData.filename || '');
      setFallback(initialData.fallback || 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2070&auto=format&fit=crop');
      setBadge(initialData.badge || '');
      setIsAlternate(initialData.isAlternate || false);
      setActive(initialData.active !== undefined ? initialData.active : true);
      setTitles(initialData.titles || { es: initialData.title || '' });
      setDescriptions(initialData.descriptions || { es: initialData.desc || '' });
      setCtas(initialData.ctas || { es: initialData.cta || 'Explorar' });
    } else {
      setTitle('');
      setDesc('');
      setIcon('Code2');
      setTags(['React', 'TypeScript', 'IA']);
      setCta('Explorar');
      setLink('');
      setFilename('');
      setFallback('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2064&auto=format&fit=crop');
      setBadge('');
      setIsAlternate(false);
      setActive(true);
      setTitles({});
      setDescriptions({});
      setCtas({});
    }
    setPreviewTab('form');
    setIsTranslating(false);
    setTranslationStatus(null);
  }, [initialData, isOpen]);

  if (!isOpen) return null;

  const handleAddTag = () => {
    if (tagInput.trim() && !tags.includes(tagInput.trim())) {
      setTags([...tags, tagInput.trim()]);
      setTagInput('');
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter(t => t !== tagToRemove));
  };

  const handleAutoTranslate = async () => {
    if (!title.trim() || !desc.trim()) {
      alert('Por favor ingresa primero el título y la descripción en español para poder traducirlos.');
      return;
    }

    setIsTranslating(true);
    setTranslationStatus('Generando traducciones para 11 idiomas con IA...');

    try {
      const result = await translatePortfolioItemWithAI(
        title,
        desc,
        cta || 'Explorar',
        geminiApiKey,
        (curr, total, lang) => {
          setTranslationStatus(`Traduciendo (${curr}/${total}) [${lang.toUpperCase()}]...`);
        }
      );

      setTitles(result.titles);
      setDescriptions(result.descriptions);
      setCtas(result.ctas);
      setTranslationStatus('¡Traducciones generadas con éxito! Puedes revisarlas en la pestaña Traducciones.');
      setTimeout(() => setTranslationStatus(null), 5000);
    } catch (e: any) {
      alert('Error en la traducción: ' + (e.message || 'Desconocido'));
      setTranslationStatus(null);
    } finally {
      setIsTranslating(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !desc.trim()) {
      alert('Por favor completa el título y la descripción del proyecto.');
      return;
    }

    const mergedTitles = { ...titles, es: title };
    const mergedDescriptions = { ...descriptions, es: desc };
    const mergedCtas = { ...ctas, es: cta || 'Explorar' };

    onSave({
      title,
      titles: mergedTitles,
      desc,
      descriptions: mergedDescriptions,
      icon,
      tags,
      cta: cta || 'Explorar',
      ctas: mergedCtas,
      link: link.trim() || undefined,
      filename: filename.trim() || undefined,
      fallback: fallback.trim() || 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2064&auto=format&fit=crop',
      badge: badge.trim() || undefined,
      isAlternate,
      active
    });
    onClose();
  };

  const SelectedIcon = ICON_MAP[icon] || Code2;
  const currentLangObj = LANGUAGES.find(l => l.code === selectedTransLang) || LANGUAGES[1];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-[#111116] border border-white/10 rounded-3xl w-full max-w-4xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden my-auto text-white font-sans">
        {/* Header Modal */}
        <div className="p-6 border-b border-white/10 flex flex-wrap items-center justify-between gap-4 bg-[#16161d]">
          <div>
            <h2 className="text-xl font-bold font-display text-white">
              {initialData ? 'Editar Proyecto del Portafolio' : 'Agregar Nuevo Proyecto'}
            </h2>
            <p className="text-xs text-gray-400">
              Personaliza detalles en español y genera traducciones automáticas para el público global.
            </p>
          </div>
          <div className="flex items-center gap-3">
            {/* Tabs */}
            <div className="flex bg-white/5 rounded-xl p-1 border border-white/10 text-xs">
              <button
                type="button"
                onClick={() => setPreviewTab('form')}
                className={`px-3 py-1.5 rounded-lg transition-all ${previewTab === 'form' ? 'bg-brand-blue text-white font-bold' : 'text-gray-400 hover:text-white'}`}
              >
                1. General (ES)
              </button>
              <button
                type="button"
                onClick={() => setPreviewTab('translations')}
                className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${previewTab === 'translations' ? 'bg-brand-blue text-white font-bold' : 'text-gray-400 hover:text-white'}`}
              >
                <Languages size={13} /> 2. Traducciones ({Object.keys(titles).length > 1 ? '✓' : '11'})
              </button>
              <button
                type="button"
                onClick={() => setPreviewTab('preview')}
                className={`px-3 py-1.5 rounded-lg transition-all ${previewTab === 'preview' ? 'bg-brand-blue text-white font-bold' : 'text-gray-400 hover:text-white'}`}
              >
                3. Vista Previa
              </button>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-xl transition-colors"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Notificación de Traducción */}
        {translationStatus && (
          <div className="px-6 py-3 bg-blue-500/15 border-b border-blue-500/30 text-xs text-blue-200 flex items-center gap-2">
            {isTranslating ? <Loader2 size={14} className="animate-spin text-brand-blue" /> : <CheckCircle2 size={14} className="text-emerald-400" />}
            <span>{translationStatus}</span>
          </div>
        )}

        {/* Body Modal */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1 custom-scrollbar">
          {/* TAB 1: FORMULARIO PRINCIPAL EN ESPAÑOL */}
          {previewTab === 'form' && (
            <form id="portfolio-form" onSubmit={handleSubmit} className="space-y-6">
              {/* Botón Acción Rápida de IA */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-900/30 via-indigo-900/20 to-orange-900/30 border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div>
                  <div className="text-sm font-bold text-white flex items-center gap-2">
                    <Sparkles size={16} className="text-brand-orange" />
                    Auto-traducción Inteligente Multilingüe
                  </div>
                  <p className="text-xs text-gray-400 mt-0.5">
                    Genera las versiones en inglés, francés, alemán, japonés, chino y 6 idiomas más con un solo clic.
                  </p>
                </div>
                <button
                  type="button"
                  disabled={isTranslating}
                  onClick={handleAutoTranslate}
                  className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-500 hover:to-orange-400 text-white font-bold text-xs shadow-lg shadow-blue-500/20 flex items-center gap-2 transition-all disabled:opacity-50 shrink-0"
                >
                  {isTranslating ? (
                    <>
                      <Loader2 size={14} className="animate-spin" /> Traducción en curso...
                    </>
                  ) : (
                    <>
                      <Sparkles size={14} /> ✨ Auto-traducir a 11 idiomas
                    </>
                  )}
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Título */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-2">
                    Título del Proyecto (Español) *
                  </label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Ej. Armonix Studio"
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 text-sm"
                  />
                </div>

                {/* Badge Opcional */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-2">
                    Distintivo / Badge (Opcional)
                  </label>
                  <input
                    type="text"
                    value={badge}
                    onChange={(e) => setBadge(e.target.value)}
                    placeholder="Ej. En Alpha, SaaS, Nuevo, Destacado"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 text-sm"
                  />
                </div>
              </div>

              {/* Descripción */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-2">
                  Descripción Detallada (Español) *
                </label>
                <textarea
                  rows={3}
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                  placeholder="Describe la solución tecnológica, el impacto y las tecnologías empleadas..."
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 text-sm leading-relaxed"
                />
              </div>

              {/* Selector de Ícono */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-2">
                  Ícono Representativo
                </label>
                <div className="grid grid-cols-5 sm:grid-cols-8 gap-2 p-3 bg-white/5 rounded-2xl border border-white/10 max-h-36 overflow-y-auto">
                  {AVAILABLE_ICONS.map((icName) => {
                    const Ic = ICON_MAP[icName];
                    const isSelected = icon === icName;
                    return (
                      <button
                        key={icName}
                        type="button"
                        onClick={() => setIcon(icName)}
                        className={`flex flex-col items-center justify-center p-2.5 rounded-xl border transition-all ${
                          isSelected
                            ? 'bg-blue-600/30 border-blue-500 text-brand-blue shadow-md'
                            : 'border-white/5 bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
                        }`}
                        title={icName}
                      >
                        <Ic size={20} />
                        <span className="text-[10px] mt-1 truncate max-w-[50px]">{icName}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Etiquetas / Tags */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-2">
                  Etiquetas / Tecnologías (Tags)
                </label>
                <div className="flex gap-2 mb-3">
                  <input
                    type="text"
                    value={tagInput}
                    onChange={(e) => setTagInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        handleAddTag();
                      }
                    }}
                    placeholder="Ej. React, Web Audio, Tone.js, AI"
                    className="flex-1 px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 text-sm focus:outline-none focus:border-blue-500"
                  />
                  <button
                    type="button"
                    onClick={handleAddTag}
                    className="px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-xl text-sm font-semibold flex items-center gap-1.5 transition-colors"
                  >
                    <Plus size={16} /> Agregar
                  </button>
                </div>
                <div className="flex flex-wrap gap-2 min-h-[32px]">
                  {tags.map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 border border-blue-500/30 text-blue-300"
                    >
                      {t}
                      <button
                        type="button"
                        onClick={() => handleRemoveTag(t)}
                        className="hover:text-red-400 transition-colors"
                      >
                        <X size={14} />
                      </button>
                    </span>
                  ))}
                </div>
              </div>

              {/* Enlace y CTA */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-2">
                    Texto del Botón CTA (Español)
                  </label>
                  <input
                    type="text"
                    value={cta}
                    onChange={(e) => setCta(e.target.value)}
                    placeholder="Explorar, Visitar, Ver, Próximamente"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-2">
                    Enlace de Destino (URL)
                  </label>
                  <input
                    type="url"
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                    placeholder="https://tudominio.com"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 text-sm"
                  />
                </div>
              </div>

              {/* Imágenes */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-2 flex items-center gap-1.5">
                    <ImageIcon size={14} /> Archivo local en /public (Opcional)
                  </label>
                  <input
                    type="text"
                    value={filename}
                    onChange={(e) => setFilename(e.target.value)}
                    placeholder="ej. armonix_landing.jpg"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-2">
                    URL Imagen Fallback / Web *
                  </label>
                  <input
                    type="url"
                    value={fallback}
                    onChange={(e) => setFallback(e.target.value)}
                    placeholder="https://images.unsplash.com/..."
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 text-sm"
                  />
                </div>
              </div>

              {/* Opciones de Estado & Layout */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <label className="flex items-center gap-3 p-3.5 rounded-xl bg-white/5 border border-white/10 cursor-pointer hover:bg-white/[0.07] transition-colors">
                  <input
                    type="checkbox"
                    checked={active}
                    onChange={(e) => setActive(e.target.checked)}
                    className="w-4 h-4 rounded text-blue-600 focus:ring-0 focus:ring-offset-0 bg-transparent border-gray-500"
                  />
                  <div>
                    <span className="text-sm font-semibold text-white block">Proyecto Activo / Visible</span>
                    <span className="text-[11px] text-gray-400">Si se desmarca, se mantendrá como borrador.</span>
                  </div>
                </label>

                <label className="flex items-center gap-3 p-3.5 rounded-xl bg-white/5 border border-white/10 cursor-pointer hover:bg-white/[0.07] transition-colors">
                  <input
                    type="checkbox"
                    checked={isAlternate}
                    onChange={(e) => setIsAlternate(e.target.checked)}
                    className="w-4 h-4 rounded text-orange-500 focus:ring-0 focus:ring-offset-0 bg-transparent border-gray-500"
                  />
                  <div>
                    <span className="text-sm font-semibold text-white block">Disposición Inversa (Zig-Zag)</span>
                    <span className="text-[11px] text-gray-400">Coloca la imagen a la izquierda o derecha.</span>
                  </div>
                </label>
              </div>
            </form>
          )}

          {/* TAB 2: GESTOR DE TRADUCCIONES MANUALES & REVISIÓN */}
          {previewTab === 'translations' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 border-b border-white/10">
                <div>
                  <h3 className="text-base font-bold text-white">Revisión y Ajuste de Traducciones</h3>
                  <p className="text-xs text-gray-400">
                    Modifica manualmente los textos traducidos para cada uno de los 11 idiomas soportados.
                  </p>
                </div>
                <button
                  type="button"
                  disabled={isTranslating}
                  onClick={handleAutoTranslate}
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-orange-500 text-white font-bold text-xs flex items-center gap-2 transition-all disabled:opacity-50"
                >
                  {isTranslating ? <Loader2 size={14} className="animate-spin" /> : <Sparkles size={14} />}
                  <span>{Object.keys(titles).length > 1 ? 'Re-traducir con IA' : 'Auto-traducir ahora'}</span>
                </button>
              </div>

              {/* Selector de idioma pills */}
              <div className="flex flex-wrap gap-2">
                {LANGUAGES.filter(l => l.code !== 'es').map((langObj) => {
                  const isSelected = selectedTransLang === langObj.code;
                  const isFilled = !!titles[langObj.code];
                  return (
                    <button
                      key={langObj.code}
                      type="button"
                      onClick={() => setSelectedTransLang(langObj.code)}
                      className={`px-3 py-1.5 rounded-xl border text-xs font-semibold flex items-center gap-1.5 transition-all ${
                        isSelected
                          ? 'bg-blue-600 border-blue-400 text-white shadow-lg'
                          : isFilled
                          ? 'bg-white/5 border-emerald-500/30 text-emerald-300 hover:bg-white/10'
                          : 'bg-white/5 border-white/10 text-gray-400 hover:text-white'
                      }`}
                    >
                      <span>{langObj.flag}</span>
                      <span>{langObj.name}</span>
                      {isFilled && <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>}
                    </button>
                  );
                })}
              </div>

              {/* Formulario de idioma seleccionado */}
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-4">
                <div className="flex items-center gap-2 text-sm font-bold text-white">
                  <span>{currentLangObj.flag}</span>
                  <span>Traducción en {currentLangObj.name} ({currentLangObj.code.toUpperCase()})</span>
                </div>

                <div>
                  <label className="block text-xs text-gray-400 mb-1 font-semibold">Título ({currentLangObj.code.toUpperCase()})</label>
                  <input
                    type="text"
                    value={titles[selectedTransLang] || ''}
                    onChange={(e) => setTitles({ ...titles, [selectedTransLang]: e.target.value })}
                    placeholder={title || 'Título en este idioma'}
                    className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs text-gray-400 mb-1 font-semibold">Descripción ({currentLangObj.code.toUpperCase()})</label>
                  <textarea
                    rows={3}
                    value={descriptions[selectedTransLang] || ''}
                    onChange={(e) => setDescriptions({ ...descriptions, [selectedTransLang]: e.target.value })}
                    placeholder={desc || 'Descripción en este idioma'}
                    className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs text-gray-400 mb-1 font-semibold">Texto Botón CTA ({currentLangObj.code.toUpperCase()})</label>
                  <input
                    type="text"
                    value={ctas[selectedTransLang] || ''}
                    onChange={(e) => setCtas({ ...ctas, [selectedTransLang]: e.target.value })}
                    placeholder={cta || 'Explore, Visit, View, etc.'}
                    className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: VISTA PREVIA EN VIVO */}
          {previewTab === 'preview' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                  Previsualización de la tarjeta en la landing:
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-400">Ver en idioma:</span>
                  <select
                    value={selectedTransLang}
                    onChange={(e) => setSelectedTransLang(e.target.value as Language)}
                    className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-xl text-white text-xs font-semibold focus:outline-none focus:border-blue-500"
                  >
                    <option value="es" className="bg-[#111116] text-white">🇪🇸 Español (Original)</option>
                    {LANGUAGES.filter(l => l.code !== 'es').map(l => (
                      <option key={l.code} value={l.code} className="bg-[#111116] text-white">
                        {l.flag} {l.name} ({l.code.toUpperCase()})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="p-4 bg-black/40 rounded-2xl border border-white/5">
                <div className="rounded-3xl border overflow-hidden bg-[#0a0a0a] border-white/10">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 items-center">
                    <div className={`order-2 ${isAlternate ? 'lg:order-2' : 'lg:order-1'} relative group`}>
                      <div className="rounded-xl border border-white/10 shadow-xl overflow-hidden relative h-64 w-full bg-[#16161d]">
                        <img
                          src={filename ? `/${filename}` : fallback}
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = fallback;
                          }}
                          alt={title}
                          className="w-full h-full object-cover"
                        />
                        {badge && (
                          <div className="absolute top-4 right-4 px-3 py-1 bg-brand-orange text-white text-[10px] font-bold uppercase rounded-full shadow-lg">
                            {badge}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className={`order-1 ${isAlternate ? 'lg:order-1' : 'lg:order-2'} space-y-5`}>
                      <div className="flex items-center gap-3">
                        <div className="p-3 rounded-xl bg-brand-blue/10 text-brand-blue">
                          <SelectedIcon size={26} />
                        </div>
                        <h3 className="text-2xl font-bold font-display text-white">
                          {(selectedTransLang === 'es' ? title : titles[selectedTransLang]) || title || 'Título del Proyecto'}
                        </h3>
                      </div>
                      <p className="text-base text-gray-400 leading-relaxed">
                        {(selectedTransLang === 'es' ? desc : descriptions[selectedTransLang]) || desc || 'Descripción del proyecto.'}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {tags.map((t) => (
                          <span key={t} className="px-3 py-1 rounded-full text-xs font-medium border bg-white/5 border-white/10 text-gray-300">
                            {t}
                          </span>
                        ))}
                      </div>
                      <div className="pt-2">
                        <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold bg-white text-black hover:bg-gray-200 text-sm">
                          {(selectedTransLang === 'es' ? cta : ctas[selectedTransLang]) || cta || 'Explorar'} <ExternalLink size={16} />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer Modal */}
        <div className="p-6 border-t border-white/10 flex items-center justify-end gap-3 bg-[#16161d]">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl text-sm font-semibold text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
          >
            Cancelar
          </button>
          <button
            type="submit"
            form="portfolio-form"
            className="px-6 py-2.5 rounded-xl text-sm font-bold bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-500 hover:to-orange-400 text-white shadow-lg shadow-blue-500/20 flex items-center gap-2 transition-all"
          >
            <Check size={16} /> {initialData ? 'Guardar Cambios' : 'Crear Proyecto'}
          </button>
        </div>
      </div>
    </div>
  );
};
