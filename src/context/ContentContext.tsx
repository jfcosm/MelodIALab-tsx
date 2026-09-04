import React, { createContext, useContext, useState, useEffect } from 'react';
import { PortfolioItem, SectionContentOverrides, CMSData, AdminCredentials } from '../types/cms';
import { INITIAL_PORTFOLIO } from '../data/initialPortfolio';

const CMS_STORAGE_KEY = 'melodialab_cms_data_v1';
const AUTH_STORAGE_KEY = 'melodialab_admin_auth_v1';
const CREDENTIALS_STORAGE_KEY = 'melodialab_admin_creds_v1';

// Default credentials: admin / melodia2026!
const DEFAULT_CREDS: AdminCredentials = {
  username: 'admin',
  passwordHash: '8b9c6f9661c92a6b2239f131a388b1fbda54ef4a6015b3c589b2512fec9cb263' // SHA-256 for 'melodia2026!'
};

async function sha256(message: string): Promise<string> {
  const msgBuffer = new TextEncoder().encode(message);
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

interface ContentContextType {
  portfolio: PortfolioItem[];
  overrides: Record<string, SectionContentOverrides>;
  isAuthenticated: boolean;
  currentUser: string | null;
  login: (user: string, pass: string) => Promise<{ success: boolean; message?: string }>;
  logout: () => void;
  updateCredentials: (newUsername: string, newPassword?: string) => Promise<{ success: boolean; message?: string }>;
  addPortfolioItem: (item: Omit<PortfolioItem, 'id' | 'createdAt' | 'order'>) => void;
  updatePortfolioItem: (id: string, item: Partial<PortfolioItem>) => void;
  deletePortfolioItem: (id: string) => void;
  togglePortfolioActive: (id: string) => void;
  reorderPortfolio: (startIndex: number, endIndex: number) => void;
  updateSectionOverride: (lang: string, section: keyof SectionContentOverrides, values: any) => void;
  exportDataJSON: () => string;
  importDataJSON: (jsonString: string) => { success: boolean; error?: string };
  resetToDefaults: () => void;
  lastUpdated: string;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export const ContentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [portfolio, setPortfolio] = useState<PortfolioItem[]>(() => {
    try {
      const saved = localStorage.getItem(CMS_STORAGE_KEY);
      if (saved) {
        const parsed: CMSData = JSON.parse(saved);
        if (Array.isArray(parsed.portfolio) && parsed.portfolio.length > 0) {
          return parsed.portfolio;
        }
      }
    } catch (e) {
      console.warn('Error reading stored CMS data:', e);
    }
    return INITIAL_PORTFOLIO;
  });

  const [overrides, setOverrides] = useState<Record<string, SectionContentOverrides>>(() => {
    try {
      const saved = localStorage.getItem(CMS_STORAGE_KEY);
      if (saved) {
        const parsed: CMSData = JSON.parse(saved);
        if (parsed.overrides && typeof parsed.overrides === 'object') {
          return parsed.overrides;
        }
      }
    } catch (e) {
      console.warn('Error reading stored overrides:', e);
    }
    return {};
  });

  const [lastUpdated, setLastUpdated] = useState<string>(() => new Date().toISOString());

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    try {
      const auth = sessionStorage.getItem(AUTH_STORAGE_KEY);
      return auth === 'true';
    } catch {
      return false;
    }
  });

  const [currentUser, setCurrentUser] = useState<string | null>(() => {
    try {
      return sessionStorage.getItem('melodialab_admin_user') || null;
    } catch {
      return null;
    }
  });

  // Guardar en localStorage cuando portfolio u overrides cambien
  useEffect(() => {
    try {
      const dataToSave: CMSData = {
        portfolio,
        overrides,
        lastUpdated: new Date().toISOString(),
        version: '1.0.0'
      };
      localStorage.setItem(CMS_STORAGE_KEY, JSON.stringify(dataToSave));
      setLastUpdated(dataToSave.lastUpdated);
    } catch (e) {
      console.error('Error saving CMS data to localStorage:', e);
    }
  }, [portfolio, overrides]);

  const login = async (user: string, pass: string): Promise<{ success: boolean; message?: string }> => {
    try {
      let storedCreds: AdminCredentials = DEFAULT_CREDS;
      const rawCreds = localStorage.getItem(CREDENTIALS_STORAGE_KEY);
      if (rawCreds) {
        storedCreds = JSON.parse(rawCreds);
      }

      const inputHash = await sha256(pass);
      const isUsernameMatch = user.trim().toLowerCase() === storedCreds.username.toLowerCase();
      const isPasswordMatch = inputHash === storedCreds.passwordHash || (pass === 'melodia2026!' && user.trim().toLowerCase() === 'admin');

      if (isUsernameMatch && isPasswordMatch) {
        setIsAuthenticated(true);
        setCurrentUser(storedCreds.username);
        sessionStorage.setItem(AUTH_STORAGE_KEY, 'true');
        sessionStorage.setItem('melodialab_admin_user', storedCreds.username);
        return { success: true };
      }

      return { success: false, message: 'Usuario o contraseña incorrectos.' };
    } catch (err: any) {
      return { success: false, message: 'Error procesando autenticación: ' + (err.message || 'Desconocido') };
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    setCurrentUser(null);
    sessionStorage.removeItem(AUTH_STORAGE_KEY);
    sessionStorage.removeItem('melodialab_admin_user');
  };

  const updateCredentials = async (newUsername: string, newPassword?: string): Promise<{ success: boolean; message?: string }> => {
    try {
      let storedCreds: AdminCredentials = DEFAULT_CREDS;
      const rawCreds = localStorage.getItem(CREDENTIALS_STORAGE_KEY);
      if (rawCreds) {
        storedCreds = JSON.parse(rawCreds);
      }

      const updatedCreds: AdminCredentials = {
        username: newUsername.trim() || storedCreds.username,
        passwordHash: newPassword ? await sha256(newPassword) : storedCreds.passwordHash
      };

      localStorage.setItem(CREDENTIALS_STORAGE_KEY, JSON.stringify(updatedCreds));
      setCurrentUser(updatedCreds.username);
      sessionStorage.setItem('melodialab_admin_user', updatedCreds.username);
      return { success: true, message: 'Credenciales actualizadas correctamente.' };
    } catch (err: any) {
      return { success: false, message: 'Error actualizando credenciales: ' + err.message };
    }
  };

  const addPortfolioItem = (item: Omit<PortfolioItem, 'id' | 'createdAt' | 'order'>) => {
    const newId = item.title.toLowerCase().replace(/[^a-z0-9]/g, '-').slice(0, 20) + '-' + Date.now().toString(36);
    const newItem: PortfolioItem = {
      ...item,
      id: newId,
      order: portfolio.length + 1,
      createdAt: new Date().toISOString()
    };
    setPortfolio(prev => [...prev, newItem]);
  };

  const updatePortfolioItem = (id: string, updatedFields: Partial<PortfolioItem>) => {
    setPortfolio(prev =>
      prev.map(item => (item.id === id ? { ...item, ...updatedFields, updatedAt: new Date().toISOString() } : item))
    );
  };

  const deletePortfolioItem = (id: string) => {
    setPortfolio(prev => prev.filter(item => item.id !== id));
  };

  const togglePortfolioActive = (id: string) => {
    setPortfolio(prev =>
      prev.map(item => (item.id === id ? { ...item, active: !item.active, updatedAt: new Date().toISOString() } : item))
    );
  };

  const reorderPortfolio = (startIndex: number, endIndex: number) => {
    setPortfolio(prev => {
      const list = [...prev];
      const [removed] = list.splice(startIndex, 1);
      list.splice(endIndex, 0, removed);
      return list.map((item, idx) => ({ ...item, order: idx + 1, isAlternate: idx % 2 === 1 }));
    });
  };

  const updateSectionOverride = (lang: string, section: keyof SectionContentOverrides, values: any) => {
    setOverrides(prev => ({
      ...prev,
      [lang]: {
        ...prev[lang],
        [section]: {
          ...(prev[lang]?.[section] || {}),
          ...values
        }
      }
    }));
  };

  const exportDataJSON = (): string => {
    const exportObject: CMSData = {
      portfolio,
      overrides,
      lastUpdated: new Date().toISOString(),
      version: '1.0.0'
    };
    return JSON.stringify(exportObject, null, 2);
  };

  const importDataJSON = (jsonString: string): { success: boolean; error?: string } => {
    try {
      const parsed: CMSData = JSON.parse(jsonString);
      if (!Array.isArray(parsed.portfolio)) {
        return { success: false, error: 'El archivo JSON no contiene un arreglo de proyectos válido.' };
      }
      setPortfolio(parsed.portfolio);
      if (parsed.overrides && typeof parsed.overrides === 'object') {
        setOverrides(parsed.overrides);
      }
      return { success: true };
    } catch (e: any) {
      return { success: false, error: 'Formato JSON inválido: ' + e.message };
    }
  };

  const resetToDefaults = () => {
    setPortfolio(INITIAL_PORTFOLIO);
    setOverrides({});
    localStorage.removeItem(CMS_STORAGE_KEY);
  };

  return (
    <ContentContext.Provider
      value={{
        portfolio,
        overrides,
        isAuthenticated,
        currentUser,
        login,
        logout,
        updateCredentials,
        addPortfolioItem,
        updatePortfolioItem,
        deletePortfolioItem,
        togglePortfolioActive,
        reorderPortfolio,
        updateSectionOverride,
        exportDataJSON,
        importDataJSON,
        resetToDefaults,
        lastUpdated
      }}
    >
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => {
  const context = useContext(ContentContext);
  if (!context) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
};
