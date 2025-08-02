/**
 * ESTILOS GLOBAIS DO TEMPLATE
 * 
 * Este arquivo define os estilos globais da aplicação usando styled-components.
 * Inclui reset CSS, tipografia base, e estilos utilitários.
 */

import styled, { createGlobalStyle } from 'styled-components';

/**
 * Estilos globais da aplicação
 */
export const GlobalStyles = createGlobalStyle`
  /* Reset CSS moderno */
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  /* Configurações base do HTML */
  html {
    font-size: 16px;
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }

  /* Configurações do body */
  body {
    font-family: ${({ theme }) => theme.typography.fontFamily.primary};
    font-size: ${({ theme }) => theme.typography.fontSize.base};
    font-weight: ${({ theme }) => theme.typography.fontWeight.normal};
    line-height: ${({ theme }) => theme.typography.lineHeight.normal};
    color: ${({ theme }) => theme.colors.neutral.dark};
    background-color: ${({ theme }) => theme.colors.neutral.white};
    overflow-x: hidden;
  }

  /* Tipografia */
  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.typography.fontFamily.secondary};
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
    line-height: ${({ theme }) => theme.typography.lineHeight.tight};
    color: ${({ theme }) => theme.colors.neutral.black};
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }

  h1 {
    font-size: ${({ theme }) => theme.typography.fontSize['5xl']};
    
    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      font-size: ${({ theme }) => theme.typography.fontSize['4xl']};
    }
    
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      font-size: ${({ theme }) => theme.typography.fontSize['3xl']};
    }
  }

  h2 {
    font-size: ${({ theme }) => theme.typography.fontSize['4xl']};
    
    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      font-size: ${({ theme }) => theme.typography.fontSize['3xl']};
    }
    
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
    }
  }

  h3 {
    font-size: ${({ theme }) => theme.typography.fontSize['3xl']};
    
    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
    }
    
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      font-size: ${({ theme }) => theme.typography.fontSize.xl};
    }
  }

  h4 {
    font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
    
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      font-size: ${({ theme }) => theme.typography.fontSize.lg};
    }
  }

  h5 {
    font-size: ${({ theme }) => theme.typography.fontSize.xl};
  }

  h6 {
    font-size: ${({ theme }) => theme.typography.fontSize.lg};
  }

  /* Parágrafos */
  p {
    margin-bottom: ${({ theme }) => theme.spacing.md};
    line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
    color: ${({ theme }) => theme.colors.neutral.medium};
  }

  /* Links */
  a {
    color: ${({ theme }) => theme.colors.primary.main};
    text-decoration: none;
    transition: ${({ theme }) => theme.transitions.fast};
    
    &:hover {
      color: ${({ theme }) => theme.colors.primary.dark};
      text-decoration: underline;
    }
    
    &:focus {
      outline: 2px solid ${({ theme }) => theme.colors.primary.main};
      outline-offset: 2px;
    }
  }

  /* Listas */
  ul, ol {
    margin-bottom: ${({ theme }) => theme.spacing.md};
    padding-left: ${({ theme }) => theme.spacing.lg};
  }

  li {
    margin-bottom: ${({ theme }) => theme.spacing.xs};
    line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  }

  /* Imagens */
  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  /* Botões */
  button {
    font-family: inherit;
    cursor: pointer;
    border: none;
    background: none;
    transition: ${({ theme }) => theme.transitions.fast};
    
    &:focus {
      outline: 2px solid ${({ theme }) => theme.colors.primary.main};
      outline-offset: 2px;
    }
    
    &:disabled {
      cursor: not-allowed;
      opacity: 0.6;
    }
  }

  /* Inputs */
  input, textarea, select {
    font-family: inherit;
    font-size: inherit;
    border: 1px solid ${({ theme }) => theme.colors.neutral.medium};
    border-radius: ${({ theme }) => theme.borderRadius.md};
    padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
    transition: ${({ theme }) => theme.transitions.fast};
    
    &:focus {
      outline: none;
      border-color: ${({ theme }) => theme.colors.primary.main};
      box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primary.main}20;
    }
    
    &::placeholder {
      color: ${({ theme }) => theme.colors.neutral.medium};
    }
  }

  /* Textarea específico */
  textarea {
    resize: vertical;
    min-height: 120px;
  }

  /* Scrollbar personalizada */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.neutral.light};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.neutral.medium};
    border-radius: ${({ theme }) => theme.borderRadius.full};
    
    &:hover {
      background: ${({ theme }) => theme.colors.neutral.dark};
    }
  }

  /* Seleção de texto */
  ::selection {
    background: ${({ theme }) => theme.colors.primary.main}30;
    color: ${({ theme }) => theme.colors.primary.dark};
  }

  /* Classes utilitárias */
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  .skip-link {
    position: absolute;
    top: -40px;
    left: 6px;
    background: ${({ theme }) => theme.colors.primary.main};
    color: ${({ theme }) => theme.colors.primary.contrast};
    padding: 8px;
    border-radius: ${({ theme }) => theme.borderRadius.md};
    text-decoration: none;
    z-index: 1000;
    
    &:focus {
      top: 6px;
    }
  }

  /* Animações de entrada */
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideInLeft {
    from {
      opacity: 0;
      transform: translateX(-30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes slideInRight {
    from {
      opacity: 0;
      transform: translateX(30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes scaleIn {
    from {
      opacity: 0;
      transform: scale(0.9);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  /* Classes de animação */
  .animate-fade-in {
    animation: fadeIn 0.6s ease-out;
  }

  .animate-slide-in-left {
    animation: slideInLeft 0.6s ease-out;
  }

  .animate-slide-in-right {
    animation: slideInRight 0.6s ease-out;
  }

  .animate-scale-in {
    animation: scaleIn 0.6s ease-out;
  }

  /* Prefers reduced motion */
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
    
    html {
      scroll-behavior: auto;
    }
  }

  /* Print styles */
  @media print {
    * {
      background: transparent !important;
      color: black !important;
      box-shadow: none !important;
      text-shadow: none !important;
    }
    
    a, a:visited {
      text-decoration: underline;
    }
    
    a[href]:after {
      content: " (" attr(href) ")";
    }
    
    abbr[title]:after {
      content: " (" attr(title) ")";
    }
    
    .no-print {
      display: none !important;
    }
  }
`;

/**
 * Container principal da aplicação
 */
export const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

/**
 * Container de conteúdo principal
 */
export const MainContent = styled.main`
  flex: 1;
`;

/**
 * Container genérico com largura máxima
 */
export const Container = styled.div<{
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  padding?: boolean;
  center?: boolean;
}>`
  width: 100%;
  max-width: ${({ maxWidth }) => {
    switch (maxWidth) {
      case 'sm': return '640px';
      case 'md': return '768px';
      case 'lg': return '1024px';
      case 'xl': return '1280px';
      case 'full': return '100%';
      default: return '1200px';
    }
  }};
  margin: ${({ center }) => center ? '0 auto' : '0'};
  padding: ${({ padding, theme }) => 
    padding ? `0 ${theme.spacing.lg}` : '0'
  };
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ padding, theme }) => 
      padding ? `0 ${theme.spacing.md}` : '0'
    };
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ padding, theme }) => 
      padding ? `0 ${theme.spacing.sm}` : '0'
    };
  }
`;

/**
 * Seção genérica
 */
export const Section = styled.section<{
  background?: 'white' | 'light' | 'dark' | 'gradient';
  padding?: 'sm' | 'md' | 'lg' | 'xl';
}>`
  width: 100%;
  padding: ${({ padding, theme }) => {
    switch (padding) {
      case 'sm': return `${theme.spacing['2xl']} 0`;
      case 'md': return `${theme.spacing['3xl']} 0`;
      case 'lg': return `${theme.spacing['4xl']} 0`;
      case 'xl': return `${theme.spacing['5xl']} 0`;
      default: return `${theme.spacing['4xl']} 0`;
    }
  }};
  
  background: ${({ background, theme }) => {
    switch (background) {
      case 'white': return theme.colors.neutral.white;
      case 'light': return theme.colors.neutral.light;
      case 'dark': return theme.colors.neutral.dark;
      case 'gradient': return theme.colors.gradients.primary;
      default: return 'transparent';
    }
  }};
  
  color: ${({ background, theme }) => 
    background === 'dark' ? theme.colors.neutral.white : 'inherit'
  };
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ padding, theme }) => {
      switch (padding) {
        case 'sm': return `${theme.spacing.xl} 0`;
        case 'md': return `${theme.spacing['2xl']} 0`;
        case 'lg': return `${theme.spacing['3xl']} 0`;
        case 'xl': return `${theme.spacing['4xl']} 0`;
        default: return `${theme.spacing['3xl']} 0`;
      }
    }};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ padding, theme }) => {
      switch (padding) {
        case 'sm': return `${theme.spacing.lg} 0`;
        case 'md': return `${theme.spacing.xl} 0`;
        case 'lg': return `${theme.spacing['2xl']} 0`;
        case 'xl': return `${theme.spacing['3xl']} 0`;
        default: return `${theme.spacing['2xl']} 0`;
      }
    }};
  }
`;

