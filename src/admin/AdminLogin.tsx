import React, { useState } from 'react';
import { Lock, User, Eye, EyeOff, ShieldCheck, ArrowLeft, Sparkles, AlertCircle } from 'lucide-react';
import { useContent } from '../context/ContentContext';

interface AdminLoginProps {
  onBackToSite: () => void;
  onLoginSuccess: () => void;
}

export const AdminLogin: React.FC<AdminLoginProps> = ({ onBackToSite, onLoginSuccess }) => {
  const { login } = useContent();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!username.trim() || !password.trim()) {
      setError('Por favor ingresa usuario y contraseña.');
      return;
    }

    setIsLoading(true);
    try {
      const res = await login(username, password);
      if (res.success) {
        onLoginSuccess();
      } else {
        setError(res.message || 'Credenciales inválidas.');
      }
    } catch (err: any) {
      setError('Ocurrió un error al intentar iniciar sesión.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#070709] text-white flex flex-col justify-center items-center px-4 relative overflow-hidden font-sans selection:bg-brand-blue selection:text-white">
      {/* Luces de fondo decorativas */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[130px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-orange-600/15 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="w-full max-w-md relative z-10">
        {/* Botón Volver */}
        <button
          onClick={onBackToSite}
          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white mb-6 transition-colors group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Volver a MelodIALab
        </button>

        {/* Tarjeta de Login */}
        <div className="bg-[#111116]/90 border border-white/10 rounded-3xl p-8 sm:p-10 shadow-2xl backdrop-blur-xl relative">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600 to-orange-500 flex items-center justify-center shadow-lg shadow-blue-500/20">
                <ShieldCheck size={26} className="text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold font-display tracking-tight text-white flex items-center gap-2">
                  Panel Admin <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-brand-orange/20 text-brand-orange border border-brand-orange/30">CMS</span>
                </h1>
                <p className="text-xs text-gray-400">MelodIALab Control Hub</p>
              </div>
            </div>
            <Sparkles size={20} className="text-brand-orange/80 animate-pulse" />
          </div>

          <div className="mb-6">
            <h2 className="text-2xl font-bold text-white mb-1">Iniciar Sesión</h2>
            <p className="text-sm text-gray-400">Ingresa tus credenciales para administrar contenidos y portafolio.</p>
          </div>

          {error && (
            <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-300 text-sm flex items-start gap-3 animate-in fade-in">
              <AlertCircle size={18} className="shrink-0 mt-0.5 text-red-400" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-2">
                Usuario
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-500">
                  <User size={18} />
                </div>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="admin"
                  required
                  className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-2">
                Contraseña
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-500">
                  <Lock size={18} />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  required
                  className="w-full pl-10 pr-12 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-sm"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-gray-400 hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full mt-2 py-3.5 px-4 bg-gradient-to-r from-blue-600 hover:from-blue-500 to-orange-500 hover:to-orange-400 text-white font-bold rounded-xl shadow-lg shadow-blue-500/20 transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 disabled:pointer-events-none flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                'Acceder al Panel'
              )}
            </button>
          </form>

          {/* Nota informativa de credenciales iniciales */}
          <div className="mt-8 pt-6 border-t border-white/10 text-center">
            <p className="text-xs text-gray-400 leading-relaxed">
              Credenciales por defecto: <code className="text-brand-orange bg-brand-orange/10 px-1.5 py-0.5 rounded font-mono">admin</code> / <code className="text-brand-orange bg-brand-orange/10 px-1.5 py-0.5 rounded font-mono">melodia2026!</code>
            </p>
            <p className="text-[11px] text-gray-400 mt-1">
              Podrás modificar la contraseña en cualquier momento dentro de la sección de Configuración.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
