/**
 * TIPOS TYPESCRIPT DO TEMPLATE
 * 
 * Este arquivo define todos os tipos TypeScript utilizados
 * no template, garantindo type safety e melhor experiência
 * de desenvolvimento.
 */

// Re-exporta os tipos de configuração
export type { Theme } from '../config/theme';
export type { ContentConfig } from '../config/content';

/**
 * Tipos para componentes de formulário
 */
export interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'tel' | 'textarea';
  placeholder: string;
  required: boolean;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

/**
 * Tipos para navegação
 */
export interface NavigationItem {
  label: string;
  href: string;
  external?: boolean;
}

/**
 * Tipos para botões e CTAs
 */
export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  disabled?: boolean;
  loading?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  external?: boolean;
}

/**
 * Tipos para seções da landing page
 */
export interface BenefitItem {
  icon: string;
  title: string;
  description: string;
}

export interface TestimonialItem {
  name: string;
  role: string;
  company: string;
  content: string;
  avatar?: string;
  rating?: number;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface FeatureItem {
  title: string;
  description: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface FooterSection {
  title: string;
  items: FooterLink[];
}

/**
 * Tipos para responsividade
 */
export type Breakpoint = 'mobile' | 'tablet' | 'desktop' | 'wide';

/**
 * Tipos para animações
 */
export interface AnimationProps {
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade';
}

/**
 * Tipos para imagens
 */
export interface ImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  loading?: 'lazy' | 'eager';
  className?: string;
}

/**
 * Tipos para ícones
 */
export interface IconProps {
  name: string;
  size?: number;
  color?: string;
  className?: string;
}

/**
 * Tipos para containers e layout
 */
export interface ContainerProps {
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  padding?: boolean;
  center?: boolean;
  children: React.ReactNode;
  className?: string;
}

export interface SectionProps {
  id?: string;
  background?: 'white' | 'light' | 'dark' | 'gradient';
  padding?: 'sm' | 'md' | 'lg' | 'xl';
  children: React.ReactNode;
  className?: string;
}

/**
 * Tipos para hooks personalizados
 */
export interface UseScrollOptions {
  threshold?: number;
  rootMargin?: string;
}

export interface UseFormOptions {
  onSubmit: (data: ContactFormData) => Promise<void>;
  onSuccess?: () => void;
  onError?: (error: string) => void;
}

/**
 * Tipos para contexto do tema
 */
export interface ThemeContextType {
  theme: import('../config/theme').Theme;
  toggleTheme?: () => void;
  isDark?: boolean;
}

/**
 * Tipos para utilitários
 */
export type ClassNameValue = string | number | boolean | undefined | null;
export type ClassNameArray = ClassNameValue[];
export type ClassNameObject = Record<string, any>;
export type ClassNameArg = ClassNameValue | ClassNameArray | ClassNameObject;

/**
 * Tipos para eventos
 */
export interface ScrollEvent {
  scrollY: number;
  direction: 'up' | 'down';
  isScrolling: boolean;
}

export interface ResizeEvent {
  width: number;
  height: number;
  breakpoint: Breakpoint;
}

/**
 * Tipos para SEO
 */
export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article';
}

/**
 * Tipos para performance
 */
export interface LazyComponentProps {
  fallback?: React.ComponentType;
  threshold?: number;
  rootMargin?: string;
}

/**
 * Tipos para acessibilidade
 */
export interface A11yProps {
  'aria-label'?: string;
  'aria-labelledby'?: string;
  'aria-describedby'?: string;
  'aria-expanded'?: boolean;
  'aria-hidden'?: boolean;
  role?: string;
  tabIndex?: number;
}

