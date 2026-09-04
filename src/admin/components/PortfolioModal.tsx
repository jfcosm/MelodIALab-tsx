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
  Image as ImageIcon
} from 'lucide-react';
import { PortfolioItem, IconType } from '../../types/cms';

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
  const [previewTab, setPreviewTab] = useState<'form' | 'preview'>('form');

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
    } else {
      setTitle('');
      setDesc('');
      setIcon('Code2');
      setTags(['React', 'TypeScript', 'IA']);
      setCta('Ver Proyecto');
      setLink('');
      setFilename('');
      setFallback('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2064&auto=format&fit=crop');
      setBadge('');
      setIsAlternate(false);
      setActive(true);
    }
    setPreviewTab('form');
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !desc.trim()) {
      alert('Por favor completa el título y la descripción del proyecto.');
      return;
    }

    onSave({
      title,
      desc,
      icon,
      tags,
      cta: cta || 'Explorar',
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

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-[#111116] border border-white/10 rounded-3xl w-full max-w-4xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden my-auto text-white font-sans">
        {/* Header Modal */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between bg-[#16161d]">
          <div>
            <h2 className="text-xl font-bold font-display text-white">
              {initialData ? 'Editar Proyecto del Portafolio' : 'Agregar Nuevo Proyecto'}
            </h2>
            <p className="text-xs text-gray-400">
              Personaliza los detalles, badges, imágenes y enlaces del trabajo realizado.
            </p>
          </div>
          <div className="flex items-center gap-3">
            {/* Tabs Formulario vs Vista Previa */}
            <div className="flex bg-white/5 rounded-xl p-1 border border-white/10 text-xs">
              <button
                type="button"
                onClick={() => setPreviewTab('form')}
                className={`px-3 py-1.5 rounded-lg transition-all ${previewTab === 'form' ? 'bg-brand-blue text-white font-bold' : 'text-gray-400 hover:text-white'}`}
              >
                Formulario
              </button>
              <button
                type="button"
                onClick={() => setPreviewTab('preview')}
                className={`px-3 py-1.5 rounded-lg transition-all ${previewTab === 'preview' ? 'bg-brand-blue text-white font-bold' : 'text-gray-400 hover:text-white'}`}
              >
                Vista Previa
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

        {/* Body Modal */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1 custom-scrollbar">
          {previewTab === 'preview' ? (
            <div className="space-y-6">
              <div className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">
                Así se verá en la landing page:
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
                        <h3 className="text-2xl font-bold font-display text-white">{title || 'Título del Proyecto'}</h3>
                      </div>
                      <p className="text-base text-gray-400 leading-relaxed">
                        {desc || 'Descripción del proyecto y su propósito o alcance técnico.'}
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
                          {cta || 'Explorar'} <ExternalLink size={16} />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <form id="portfolio-form" onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Título */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-2">
                    Título del Proyecto *
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
                  Descripción Detallada *
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
                    Texto del Botón CTA
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
