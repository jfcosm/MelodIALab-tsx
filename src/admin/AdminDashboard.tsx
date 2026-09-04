import React, { useState, useRef } from 'react';
import { 
  FolderKanban, 
  LayoutGrid, 
  Settings, 
  LogOut, 
  Plus, 
  ExternalLink, 
  Edit3, 
  Trash2, 
  Eye, 
  EyeOff, 
  ArrowUp, 
  ArrowDown, 
  Download, 
  Upload, 
  RotateCcw, 
  CheckCircle2, 
  AlertCircle, 
  Sparkles, 
  Layers, 
  ShieldCheck, 
  Key, 
  Globe, 
  Save, 
  Code2,
  Languages,
  Loader2,
  Bot
} from 'lucide-react';
import { useContent } from '../context/ContentContext';
import { PortfolioItem } from '../types/cms';
import { PortfolioModal } from './components/PortfolioModal';
import { translations, LANGUAGES, Language } from '../../translations';

interface AdminDashboardProps {
  onGoToSite: () => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({ onGoToSite }) => {
  const {
    portfolio,
    overrides,
    currentUser,
    geminiApiKey,
    setGeminiApiKey,
    logout,
    updateCredentials,
    addPortfolioItem,
    updatePortfolioItem,
    deletePortfolioItem,
    togglePortfolioActive,
    reorderPortfolio,
    updateSectionOverride,
    translateAllPortfolioItems,
    exportDataJSON,
    importDataJSON,
    resetToDefaults,
    lastUpdated
  } = useContent();

  const [activeTab, setActiveTab] = useState<'portfolio' | 'sections' | 'settings'>('portfolio');
  const [modalOpen, setModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<PortfolioItem | null>(null);
  
  // Feedback toasts
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  // Global translation progress state
  const [isTranslatingAll, setIsTranslatingAll] = useState(false);
  const [translationProgress, setTranslationProgress] = useState<string | null>(null);

  // Gemini API key state in settings
  const [tempApiKey, setTempApiKey] = useState(geminiApiKey || '');

  // Settings form states
  const [newUsername, setNewUsername] = useState(currentUser || 'admin');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Sections form states (editable for Spanish or selected preview lang)
  const [selectedLang, setSelectedLang] = useState<Language>('es');
  const currentOverrides = overrides[selectedLang] || {};

  const [heroBadge, setHeroBadge] = useState(currentOverrides.hero?.badge || translations[selectedLang]?.hero?.badge || '');
  const [heroTitleStart, setHeroTitleStart] = useState(currentOverrides.hero?.title_start || translations[selectedLang]?.hero?.title_start || '');
  const [heroTitleEnd, setHeroTitleEnd] = useState(currentOverrides.hero?.title_end || translations[selectedLang]?.hero?.title_end || '');
  const [heroSubtitle, setHeroSubtitle] = useState(currentOverrides.hero?.subtitle || translations[selectedLang]?.hero?.subtitle || '');
  const [heroCtaPrimary, setHeroCtaPrimary] = useState(currentOverrides.hero?.cta_primary || translations[selectedLang]?.hero?.cta_primary || '');
  const [heroCtaSecondary, setHeroCtaSecondary] = useState(currentOverrides.hero?.cta_secondary || translations[selectedLang]?.hero?.cta_secondary || '');

  const [portfolioBadge, setPortfolioBadge] = useState(currentOverrides.portfolio_header?.badge || translations[selectedLang]?.portfolio?.badge || '');
  const [portfolioTitle, setPortfolioTitle] = useState(currentOverrides.portfolio_header?.title || translations[selectedLang]?.portfolio?.title || '');
  const [portfolioSubtitle, setPortfolioSubtitle] = useState(currentOverrides.portfolio_header?.subtitle || translations[selectedLang]?.portfolio?.subtitle || '');

  const [contactTitle, setContactTitle] = useState(currentOverrides.contact?.title || translations[selectedLang]?.contact?.title || '');
  const [contactSubtitle, setContactSubtitle] = useState(currentOverrides.contact?.subtitle || translations[selectedLang]?.contact?.subtitle || '');

  const fileInputRef = useRef<HTMLInputElement>(null);

  const showToast = (type: 'success' | 'error', message: string) => {
    setFeedback({ type, message });
    setTimeout(() => {
      setFeedback(null);
    }, 4000);
  };

  const handleOpenNewModal = () => {
    setEditingItem(null);
    setModalOpen(true);
  };

  const handleOpenEditModal = (item: PortfolioItem) => {
    setEditingItem(item);
    setModalOpen(true);
  };

  const handleSaveModal = (itemData: Partial<PortfolioItem>) => {
    if (editingItem) {
      updatePortfolioItem(editingItem.id, itemData);
      showToast('success', `Proyecto "${itemData.title || editingItem.title}" actualizado con éxito.`);
    } else {
      addPortfolioItem(itemData as any);
      showToast('success', `Nuevo proyecto "${itemData.title}" agregado al portafolio.`);
    }
  };

  const handleDeleteItem = (item: PortfolioItem) => {
    if (window.confirm(`¿Estás seguro de eliminar el proyecto "${item.title}"? Esta acción no se puede deshacer.`)) {
      deletePortfolioItem(item.id);
      showToast('success', `Proyecto "${item.title}" eliminado.`);
    }
  };

  const handleTranslateAllCatalog = async () => {
    if (!window.confirm(`¿Deseas traducir automáticamente los ${portfolio.length} proyectos del catálogo a los 11 idiomas soportados?`)) {
      return;
    }

    setIsTranslatingAll(true);
    setTranslationProgress(`Iniciando traducción de ${portfolio.length} proyectos...`);

    try {
      const res = await translateAllPortfolioItems((curr, total) => {
        setTranslationProgress(`Traduciendo proyecto (${curr}/${total})...`);
      });

      if (res.success) {
        showToast('success', res.message || 'Catálogo traducido con éxito.');
      } else {
        showToast('error', res.message || 'Error en la traducción.');
      }
    } catch (e: any) {
      showToast('error', 'Error: ' + e.message);
    } finally {
      setIsTranslatingAll(false);
      setTranslationProgress(null);
    }
  };

  const handleSaveGeminiKey = (e: React.FormEvent) => {
    e.preventDefault();
    setGeminiApiKey(tempApiKey);
    showToast('success', tempApiKey.trim() ? 'Clave de API de Gemini guardada.' : 'Clave de Gemini eliminada (usando traductor web gratuito).');
  };

  const handleSaveCredentials = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword && newPassword !== confirmPassword) {
      showToast('error', 'Las contraseñas no coinciden.');
      return;
    }
    const res = await updateCredentials(newUsername, newPassword || undefined);
    if (res.success) {
      showToast('success', res.message || 'Credenciales actualizadas.');
      setNewPassword('');
      setConfirmPassword('');
    } else {
      showToast('error', res.message || 'Error al actualizar credenciales.');
    }
  };

  const handleSaveSectionContent = () => {
    updateSectionOverride(selectedLang, 'hero', {
      badge: heroBadge,
      title_start: heroTitleStart,
      title_end: heroTitleEnd,
      subtitle: heroSubtitle,
      cta_primary: heroCtaPrimary,
      cta_secondary: heroCtaSecondary
    });

    updateSectionOverride(selectedLang, 'portfolio_header', {
      badge: portfolioBadge,
      title: portfolioTitle,
      subtitle: portfolioSubtitle
    });

    updateSectionOverride(selectedLang, 'contact', {
      title: contactTitle,
      subtitle: contactSubtitle
    });

    showToast('success', `Contenidos para el idioma [${selectedLang.toUpperCase()}] guardados y aplicados.`);
  };

  const handleExportJSON = () => {
    const json = exportDataJSON();
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `melodialab-cms-backup-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
    showToast('success', 'Copia de respaldo JSON descargada.');
  };

  const handleFileImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (evt) => {
      const content = evt.target?.result as string;
      const res = importDataJSON(content);
      if (res.success) {
        showToast('success', 'Datos importados y aplicados correctamente.');
      } else {
        showToast('error', res.error || 'Error al importar archivo.');
      }
    };
    reader.readAsText(file);
  };

  const handleResetFactory = () => {
    if (window.confirm('¿Deseas restablecer todos los contenidos y portafolio a los valores originales de fábrica? Se perderán las modificaciones locales.')) {
      resetToDefaults();
      showToast('success', 'Contenidos restablecidos a valores por defecto.');
    }
  };

  const activeProjectsCount = portfolio.filter(p => p.active).length;

  return (
    <div className="min-h-screen bg-[#070709] text-white flex flex-col font-sans selection:bg-brand-blue selection:text-white">
      {/* Toast Notification */}
      {feedback && (
        <div
          className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3.5 rounded-2xl shadow-2xl border text-sm animate-in slide-in-from-bottom-5 duration-300 ${
            feedback.type === 'success'
              ? 'bg-[#0e2a1b] border-emerald-500/30 text-emerald-300'
              : 'bg-[#2a0e0e] border-red-500/30 text-red-300'
          }`}
        >
          {feedback.type === 'success' ? <CheckCircle2 size={18} /> : <AlertCircle size={18} />}
          <span>{feedback.message}</span>
        </div>
      )}

      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-40 bg-[#0f0f14]/90 backdrop-blur-md border-b border-white/10 px-4 sm:px-8 py-4 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-orange-500 flex items-center justify-center shadow-lg shadow-blue-500/20">
            <Code2 size={22} className="text-white" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-lg font-bold font-display text-white tracking-tight">MelodIALab</h1>
              <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-brand-orange/20 text-brand-orange border border-brand-orange/30">
                Panel CMS
              </span>
            </div>
            <p className="text-xs text-gray-400">Control de contenidos y portafolio digital</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onGoToSite}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white transition-colors"
          >
            <ExternalLink size={14} /> Ver Sitio Web
          </button>
          <div className="h-6 w-[1px] bg-white/10 hidden sm:block"></div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 border border-white/5 text-xs text-gray-300">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="font-medium text-white">{currentUser || 'Admin'}</span>
          </div>
          <button
            onClick={logout}
            className="p-2 text-gray-400 hover:text-red-400 hover:bg-red-500/10 rounded-xl transition-colors"
            title="Cerrar Sesión"
          >
            <LogOut size={18} />
          </button>
        </div>
      </header>

      {/* Main Layout */}
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-8 py-8 flex-1 flex flex-col md:flex-row gap-8">
        {/* Sidebar Tabs */}
        <aside className="w-full md:w-64 shrink-0 space-y-2">
          <button
            onClick={() => setActiveTab('portfolio')}
            className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl text-sm font-semibold transition-all ${
              activeTab === 'portfolio'
                ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-500/20'
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <FolderKanban size={18} />
            <span>Portafolio de Apps</span>
            <span className="ml-auto text-xs px-2 py-0.5 rounded-full bg-black/30 text-white font-mono">
              {portfolio.length}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('sections')}
            className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl text-sm font-semibold transition-all ${
              activeTab === 'sections'
                ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-500/20'
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <LayoutGrid size={18} />
            <span>Textos y Secciones</span>
          </button>

          <button
            onClick={() => setActiveTab('settings')}
            className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl text-sm font-semibold transition-all ${
              activeTab === 'settings'
                ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-500/20'
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Settings size={18} />
            <span>Ajustes y Respaldos</span>
          </button>

          {/* Quick Metrics Widget */}
          <div className="mt-8 p-4 rounded-2xl bg-white/5 border border-white/10 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-gray-400 flex items-center gap-1.5">
              <Sparkles size={14} className="text-brand-orange" /> Resumen del Sistema
            </div>
            <div className="text-xs text-gray-300 space-y-1.5 font-mono">
              <div className="flex justify-between">
                <span>Apps activas:</span>
                <span className="text-emerald-400 font-bold">{activeProjectsCount} / {portfolio.length}</span>
              </div>
              <div className="flex justify-between">
                <span>Idiomas front:</span>
                <span className="text-brand-blue font-bold">{LANGUAGES.length} disponibles</span>
              </div>
              <div className="flex justify-between">
                <span>Motor IA:</span>
                <span className="text-brand-orange font-bold">{geminiApiKey ? 'Gemini Pro' : 'Traductor Web'}</span>
              </div>
              <div className="flex justify-between text-[11px] text-gray-400 pt-1 border-t border-white/5">
                <span>Modificado:</span>
                <span>{new Date(lastUpdated).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
              </div>
            </div>
          </div>
        </aside>

        {/* Tab Content Area */}
        <main className="flex-1 bg-[#111116] border border-white/10 rounded-3xl p-6 sm:p-8 shadow-xl">
          {/* TAB 1: PORTAFOLIO */}
          {activeTab === 'portfolio' && (
            <div className="space-y-6">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-white/10">
                <div>
                  <h2 className="text-2xl font-bold font-display text-white">Gestor del Portafolio</h2>
                  <p className="text-sm text-gray-400 mt-1">
                    Administra aplicaciones, edita descripciones y genera traducciones automáticas en 11 idiomas.
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    disabled={isTranslatingAll}
                    onClick={handleTranslateAllCatalog}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 text-white font-semibold text-xs transition-all disabled:opacity-50"
                    title="Traduce automáticamente todo el catálogo a los 11 idiomas"
                  >
                    {isTranslatingAll ? <Loader2 size={14} className="animate-spin text-brand-orange" /> : <Languages size={14} className="text-brand-orange" />}
                    <span>{isTranslatingAll ? translationProgress : 'Traducir Todo el Catálogo'}</span>
                  </button>

                  <button
                    onClick={handleOpenNewModal}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-500 hover:to-orange-400 text-white font-bold text-xs shadow-lg shadow-blue-500/20 transition-all hover:scale-[1.02]"
                  >
                    <Plus size={16} /> Agregar Proyecto
                  </button>
                </div>
              </div>

              {/* Lista de Proyectos */}
              <div className="space-y-4">
                {portfolio.map((item, index) => {
                  const translatedCount = Object.keys(item.titles || {}).length;
                  return (
                    <div
                      key={item.id}
                      className={`p-5 rounded-2xl border transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-5 ${
                        item.active
                          ? 'bg-white/5 border-white/10 hover:border-blue-500/40'
                          : 'bg-white/[0.02] border-white/5 opacity-60'
                      }`}
                    >
                      <div className="flex items-center gap-4 flex-1">
                        {/* Controles de orden */}
                        <div className="flex flex-col gap-1 shrink-0 text-gray-400">
                          <button
                            disabled={index === 0}
                            onClick={() => reorderPortfolio(index, index - 1)}
                            className="p-1 hover:text-white disabled:opacity-20 disabled:hover:text-gray-400 rounded transition-colors"
                            title="Subir posición"
                          >
                            <ArrowUp size={16} />
                          </button>
                          <button
                            disabled={index === portfolio.length - 1}
                            onClick={() => reorderPortfolio(index, index + 1)}
                            className="p-1 hover:text-white disabled:opacity-20 disabled:hover:text-gray-400 rounded transition-colors"
                            title="Bajar posición"
                          >
                            <ArrowDown size={16} />
                          </button>
                        </div>

                        {/* Miniatura Imagen */}
                        <div className="w-16 h-16 rounded-xl bg-[#16161d] border border-white/10 overflow-hidden shrink-0 relative">
                          <img
                            src={item.filename ? `/${item.filename}` : item.fallback}
                            alt={item.title}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = item.fallback;
                            }}
                          />
                        </div>

                        {/* Info del Proyecto */}
                        <div className="space-y-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <h3 className="text-base font-bold text-white truncate">{item.title}</h3>
                            {item.badge && (
                              <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-full bg-brand-orange/20 text-brand-orange border border-brand-orange/30">
                                {item.badge}
                              </span>
                            )}
                            <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                              translatedCount >= 10
                                ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300'
                                : 'bg-blue-500/10 border-blue-500/30 text-blue-300'
                            }`}>
                              🌐 {translatedCount > 1 ? `${translatedCount} idiomas` : '1 idioma (ES)'}
                            </span>
                            {!item.active && (
                              <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded-full bg-gray-700 text-gray-300">
                                Oculto
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed">
                            {item.desc}
                          </p>
                          <div className="flex flex-wrap gap-1.5 pt-1">
                            {item.tags.slice(0, 4).map(tag => (
                              <span key={tag} className="text-[10px] px-2 py-0.5 rounded-md bg-white/5 border border-white/5 text-gray-400">
                                {tag}
                              </span>
                            ))}
                            {item.tags.length > 4 && (
                              <span className="text-[10px] text-gray-500">+{item.tags.length - 4} más</span>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Acciones */}
                      <div className="flex items-center gap-2 self-end md:self-center shrink-0">
                        <button
                          onClick={() => togglePortfolioActive(item.id)}
                          className={`p-2.5 rounded-xl border text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                            item.active
                              ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-300 hover:bg-emerald-500/20'
                              : 'bg-white/5 border-white/10 text-gray-400 hover:text-white'
                          }`}
                          title={item.active ? 'Ocultar en la web' : 'Publicar en la web'}
                        >
                          {item.active ? <Eye size={16} /> : <EyeOff size={16} />}
                          <span className="hidden sm:inline">{item.active ? 'Visible' : 'Oculto'}</span>
                        </button>

                        <button
                          onClick={() => handleOpenEditModal(item)}
                          className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-200 hover:text-white transition-colors"
                          title="Editar Proyecto y Traducciones"
                        >
                          <Edit3 size={16} />
                        </button>

                        <button
                          onClick={() => handleDeleteItem(item)}
                          className="p-2.5 rounded-xl bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 text-red-300 transition-colors"
                          title="Eliminar Proyecto"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 2: SECCIONES Y TEXTOS */}
          {activeTab === 'sections' && (
            <div className="space-y-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
                <div>
                  <h2 className="text-2xl font-bold font-display text-white">Editor de Secciones Web</h2>
                  <p className="text-sm text-gray-400 mt-1">
                    Personaliza los títulos, subtítulos y llamados a la acción de las principales áreas del sitio.
                  </p>
                </div>
                {/* Selector de idioma para edición */}
                <div className="flex items-center gap-2">
                  <Globe size={16} className="text-brand-blue" />
                  <select
                    value={selectedLang}
                    onChange={(e) => setSelectedLang(e.target.value as Language)}
                    className="px-3 py-2 bg-white/5 border border-white/10 rounded-xl text-white text-xs font-semibold focus:outline-none focus:border-blue-500"
                  >
                    {LANGUAGES.map(l => (
                      <option key={l.code} value={l.code} className="bg-[#111116] text-white">
                        {l.flag} {l.name} ({l.code.toUpperCase()})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* SECCIÓN HERO */}
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-4">
                <div className="flex items-center gap-2 text-brand-blue font-bold text-sm uppercase tracking-wider">
                  <Layers size={16} /> 1. Sección Hero Principal
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-gray-400 mb-1 font-semibold">Distintivo / Badge</label>
                    <input
                      type="text"
                      value={heroBadge}
                      onChange={(e) => setHeroBadge(e.target.value)}
                      className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-400 mb-1 font-semibold">Título - Inicio</label>
                    <input
                      type="text"
                      value={heroTitleStart}
                      onChange={(e) => setHeroTitleStart(e.target.value)}
                      className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-400 mb-1 font-semibold">Título - Final Resaltado</label>
                    <input
                      type="text"
                      value={heroTitleEnd}
                      onChange={(e) => setHeroTitleEnd(e.target.value)}
                      className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-400 mb-1 font-semibold">Texto Botón Primario</label>
                    <input
                      type="text"
                      value={heroCtaPrimary}
                      onChange={(e) => setHeroCtaPrimary(e.target.value)}
                      className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-xs text-gray-400 mb-1 font-semibold">Subtítulo Hero</label>
                    <textarea
                      rows={2}
                      value={heroSubtitle}
                      onChange={(e) => setHeroSubtitle(e.target.value)}
                      className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>
              </div>

              {/* SECCIÓN CABECERA PORTAFOLIO */}
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-4">
                <div className="flex items-center gap-2 text-brand-orange font-bold text-sm uppercase tracking-wider">
                  <FolderKanban size={16} /> 2. Cabecera del Portafolio
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-gray-400 mb-1 font-semibold">Badge de Sección</label>
                    <input
                      type="text"
                      value={portfolioBadge}
                      onChange={(e) => setPortfolioBadge(e.target.value)}
                      className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-400 mb-1 font-semibold">Título Principal</label>
                    <input
                      type="text"
                      value={portfolioTitle}
                      onChange={(e) => setPortfolioTitle(e.target.value)}
                      className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-xs text-gray-400 mb-1 font-semibold">Subtítulo Descriptivo</label>
                    <input
                      type="text"
                      value={portfolioSubtitle}
                      onChange={(e) => setPortfolioSubtitle(e.target.value)}
                      className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>
              </div>

              {/* SECCIÓN CONTACTO */}
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-4">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm uppercase tracking-wider">
                  <CheckCircle2 size={16} /> 3. Sección Contacto & Conversación
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-gray-400 mb-1 font-semibold">Título de Contacto</label>
                    <input
                      type="text"
                      value={contactTitle}
                      onChange={(e) => setContactTitle(e.target.value)}
                      className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-400 mb-1 font-semibold">Subtítulo de Contacto</label>
                    <input
                      type="text"
                      value={contactSubtitle}
                      onChange={(e) => setContactSubtitle(e.target.value)}
                      className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-end pt-4">
                <button
                  onClick={handleSaveSectionContent}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-500 hover:to-orange-400 text-white font-bold text-sm shadow-lg shadow-blue-500/20 flex items-center gap-2 transition-all hover:scale-[1.01]"
                >
                  <Save size={18} /> Guardar Cambios de Secciones
                </button>
              </div>
            </div>
          )}

          {/* TAB 3: AJUSTES Y RESPALDOS */}
          {activeTab === 'settings' && (
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold font-display text-white">Configuración y Seguridad</h2>
                <p className="text-sm text-gray-400 mt-1">
                  Gestiona credenciales de acceso, claves de Inteligencia Artificial para traducción y copias de seguridad.
                </p>
              </div>

              {/* Gemini AI Settings */}
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-4">
                <div className="flex items-center gap-2 text-brand-blue font-bold text-sm uppercase tracking-wider">
                  <Bot size={16} /> Motor de Traducción IA (Google Gemini)
                </div>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Ingresa tu clave de API de Google AI Studio / Gemini para traducciones técnicas de máxima precisión y calidad publicitaria. Si la dejas vacía, el sistema utilizará el motor de traducción web de respaldo sin costo alguno.
                </p>
                <form onSubmit={handleSaveGeminiKey} className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="password"
                    value={tempApiKey}
                    onChange={(e) => setTempApiKey(e.target.value)}
                    placeholder="AIzaSy..."
                    className="flex-1 px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-blue-500 font-mono"
                  />
                  <button
                    type="submit"
                    className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold transition-all shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2"
                  >
                    <Save size={15} /> Guardar Clave API
                  </button>
                </form>
              </div>

              {/* Cambio de Contraseña */}
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-5">
                <div className="flex items-center gap-2 text-brand-orange font-bold text-sm uppercase tracking-wider">
                  <Key size={16} /> Credenciales de Acceso Administrador
                </div>
                <form onSubmit={handleSaveCredentials} className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs text-gray-400 mb-1 font-semibold">Nombre de Usuario</label>
                    <input
                      type="text"
                      value={newUsername}
                      onChange={(e) => setNewUsername(e.target.value)}
                      required
                      className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-400 mb-1 font-semibold">Nueva Contraseña (Opcional)</label>
                    <input
                      type="password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      placeholder="Dejar vacío para conservar"
                      className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-400 mb-1 font-semibold">Confirmar Contraseña</label>
                    <input
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="Confirmar nueva contraseña"
                      className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div className="md:col-span-3 flex justify-end">
                    <button
                      type="submit"
                      className="px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs font-bold transition-colors flex items-center gap-2"
                    >
                      <ShieldCheck size={16} /> Actualizar Credenciales
                    </button>
                  </div>
                </form>
              </div>

              {/* Copia de Seguridad JSON */}
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-4">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm uppercase tracking-wider">
                  <Download size={16} /> Copias de Seguridad y Migración
                </div>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Exporta un archivo JSON con todos los proyectos del portafolio (incluidas todas sus traducciones) y personalizaciones para guardarlo como respaldo o cargarlo en otro entorno.
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <button
                    onClick={handleExportJSON}
                    className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold flex items-center gap-2 shadow-lg shadow-blue-500/20 transition-all"
                  >
                    <Download size={16} /> Descargar Respaldo JSON
                  </button>

                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileImport}
                    accept=".json"
                    className="hidden"
                  />
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold flex items-center gap-2 transition-all"
                  >
                    <Upload size={16} /> Importar Archivo JSON
                  </button>
                </div>
              </div>

              {/* Restablecer Valores de Fábrica */}
              <div className="p-6 rounded-2xl bg-red-500/5 border border-red-500/20 space-y-4">
                <div className="flex items-center gap-2 text-red-400 font-bold text-sm uppercase tracking-wider">
                  <RotateCcw size={16} /> Zona de Peligro: Restablecer Fábrica
                </div>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Esta acción borrará las personalizaciones locales de este navegador y restaurará los 4 proyectos originales de MelodIALab (Armonix, La Palabra Diaria, Emaús, Verso).
                </p>
                <div>
                  <button
                    onClick={handleResetFactory}
                    className="px-5 py-2.5 rounded-xl bg-red-500/15 hover:bg-red-500/30 text-red-300 border border-red-500/30 text-xs font-bold flex items-center gap-2 transition-colors"
                  >
                    <RotateCcw size={14} /> Restablecer a Valores Originales
                  </button>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* Modal de Agregar/Editar Proyecto */}
      <PortfolioModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSave={handleSaveModal}
        initialData={editingItem}
      />
    </div>
  );
};
