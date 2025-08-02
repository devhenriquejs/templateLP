/**
 * CONFIGURAÇÃO DE TEMA DO TEMPLATE
 * 
 * Este arquivo centraliza todas as configurações visuais do template,
 * permitindo fácil personalização de cores, tipografia, espaçamentos e breakpoints.
 * 
 * Para personalizar o template:
 * 1. Modifique as cores na seção 'colors'
 * 2. Ajuste a tipografia na seção 'typography'
 * 3. Altere os espaçamentos na seção 'spacing'
 * 4. Configure os breakpoints responsivos na seção 'breakpoints'
 */

export interface Theme {
  colors: {
    // Cores primárias - principais da marca
    primary: {
      main: string;
      light: string;
      dark: string;
      contrast: string;
    };
    
    // Cores secundárias - complementares
    secondary: {
      main: string;
      light: string;
      dark: string;
      contrast: string;
    };
    
    // Cores neutras - textos e fundos
    neutral: {
      white: string;
      light: string;
      medium: string;
      dark: string;
      black: string;
    };
    
    // Cores de status - feedback visual
    status: {
      success: string;
      warning: string;
      error: string;
      info: string;
    };
    
    // Gradientes - efeitos visuais
    gradients: {
      primary: string;
      secondary: string;
      hero: string;
    };
  };
  
  typography: {
    // Famílias de fonte
    fontFamily: {
      primary: string;
      secondary: string;
      mono: string;
    };
    
    // Tamanhos de fonte
    fontSize: {
      xs: string;
      sm: string;
      base: string;
      lg: string;
      xl: string;
      '2xl': string;
      '3xl': string;
      '4xl': string;
      '5xl': string;
      '6xl': string;
    };
    
    // Pesos de fonte
    fontWeight: {
      light: number;
      normal: number;
      medium: number;
      semibold: number;
      bold: number;
      extrabold: number;
    };
    
    // Altura de linha
    lineHeight: {
      tight: number;
      normal: number;
      relaxed: number;
      loose: number;
    };
  };
  
  spacing: {
    // Espaçamentos em rem
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
    '3xl': string;
    '4xl': string;
    '5xl': string;
    '6xl': string;
  };
  
  breakpoints: {
    // Breakpoints responsivos
    mobile: string;
    tablet: string;
    desktop: string;
    wide: string;
  };
  
  shadows: {
    // Sombras para elevação
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  
  borderRadius: {
    // Raios de borda
    sm: string;
    md: string;
    lg: string;
    xl: string;
    full: string;
  };
  
  transitions: {
    // Transições padrão
    fast: string;
    normal: string;
    slow: string;
  };
}

/**
 * TEMA PADRÃO
 * 
 * Configuração padrão do template. Modifique os valores abaixo
 * para personalizar a aparência do seu projeto.
 */
export const defaultTheme: Theme = {
  colors: {
    primary: {
      main: '#3B82F6',      // Azul principal
      light: '#60A5FA',     // Azul claro
      dark: '#1D4ED8',      // Azul escuro
      contrast: '#FFFFFF',  // Branco para contraste
    },
    
    secondary: {
      main: '#8B5CF6',      // Roxo principal
      light: '#A78BFA',     // Roxo claro
      dark: '#7C3AED',      // Roxo escuro
      contrast: '#FFFFFF',  // Branco para contraste
    },
    
    neutral: {
      white: '#FFFFFF',     // Branco puro
      light: '#F8FAFC',     // Cinza muito claro
      medium: '#64748B',    // Cinza médio
      dark: '#334155',      // Cinza escuro
      black: '#0F172A',     // Preto/cinza muito escuro
    },
    
    status: {
      success: '#10B981',   // Verde para sucesso
      warning: '#F59E0B',   // Amarelo para aviso
      error: '#EF4444',     // Vermelho para erro
      info: '#3B82F6',      // Azul para informação
    },
    
    gradients: {
      primary: 'linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)',
      secondary: 'linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)',
      hero: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    },
  },
  
  typography: {
    fontFamily: {
      primary: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      secondary: '"Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      mono: '"Fira Code", "Monaco", "Cascadia Code", "Roboto Mono", monospace',
    },
    
    fontSize: {
      xs: '0.75rem',    // 12px
      sm: '0.875rem',   // 14px
      base: '1rem',     // 16px
      lg: '1.125rem',   // 18px
      xl: '1.25rem',    // 20px
      '2xl': '1.5rem',  // 24px
      '3xl': '1.875rem', // 30px
      '4xl': '2.25rem', // 36px
      '5xl': '3rem',    // 48px
      '6xl': '3.75rem', // 60px
    },
    
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
    },
    
    lineHeight: {
      tight: 1.25,
      normal: 1.5,
      relaxed: 1.625,
      loose: 2,
    },
  },
  
  spacing: {
    xs: '0.5rem',   // 8px
    sm: '0.75rem',  // 12px
    md: '1rem',     // 16px
    lg: '1.5rem',   // 24px
    xl: '2rem',     // 32px
    '2xl': '2.5rem', // 40px
    '3xl': '3rem',  // 48px
    '4xl': '4rem',  // 64px
    '5xl': '5rem',  // 80px
    '6xl': '6rem',  // 96px
  },
  
  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px',
    wide: '1280px',
  },
  
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  },
  
  borderRadius: {
    sm: '0.25rem',  // 4px
    md: '0.375rem', // 6px
    lg: '0.5rem',   // 8px
    xl: '0.75rem',  // 12px
    full: '9999px', // Circular
  },
  
  transitions: {
    fast: 'all 0.15s ease-in-out',
    normal: 'all 0.3s ease-in-out',
    slow: 'all 0.5s ease-in-out',
  },
};

