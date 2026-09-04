export type IconType = 
  | 'Music4' 
  | 'Type' 
  | 'Church' 
  | 'Mic2' 
  | 'Code2' 
  | 'Monitor' 
  | 'Smartphone' 
  | 'Cpu' 
  | 'Palette' 
  | 'Sparkles' 
  | 'Globe' 
  | 'Video' 
  | 'Zap'
  | 'Layers'
  | 'Flame';

export interface PortfolioItem {
  id: string;
  title: string;
  titles?: Record<string, string>; // Traducciones opcionales por código de idioma
  desc: string;
  descriptions?: Record<string, string>; // Traducciones opcionales
  icon: IconType;
  tags: string[];
  cta: string;
  ctas?: Record<string, string>;
  link?: string;
  filename?: string;
  fallback: string;
  badge?: string;
  isAlternate?: boolean;
  active: boolean;
  order: number;
  createdAt: string;
  updatedAt?: string;
}

export interface SectionContentOverrides {
  hero?: {
    badge?: string;
    title_start?: string;
    title_end?: string;
    subtitle?: string;
    cta_primary?: string;
    cta_secondary?: string;
    dashboard_caption?: string;
  };
  services_header?: {
    title?: string;
    subtitle?: string;
  };
  portfolio_header?: {
    badge?: string;
    title?: string;
    subtitle?: string;
  };
  contact?: {
    title?: string;
    subtitle?: string;
  };
}

export interface AdminCredentials {
  username: string;
  passwordHash: string;
}

export interface CMSData {
  portfolio: PortfolioItem[];
  overrides: Record<string, SectionContentOverrides>; // clave: código de idioma (ej: 'es', 'en', etc.)
  lastUpdated: string;
  version: string;
}
