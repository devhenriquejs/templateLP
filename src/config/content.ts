/**
 * CONFIGURAÇÃO DE CONTEÚDO DO TEMPLATE
 * 
 * Este arquivo centraliza todo o conteúdo textual e configurações
 * da landing page, facilitando a personalização sem mexer no código.
 * 
 * Para personalizar o conteúdo:
 * 1. Modifique os textos nas seções correspondentes
 * 2. Atualize as URLs de imagens e links
 * 3. Configure as informações de contato
 * 4. Ajuste os dados de redes sociais
 */

export interface ContentConfig {
  // Informações gerais do site
  site: {
    title: string;
    description: string;
    keywords: string[];
    author: string;
    url: string;
  };
  
  // Configurações do cabeçalho
  header: {
    logo: {
      text: string;
      image?: string;
    };
    navigation: Array<{
      label: string;
      href: string;
      external?: boolean;
    }>;
    cta: {
      text: string;
      href: string;
    };
  };
  
  // Seção Hero (principal)
  hero: {
    title: string;
    subtitle: string;
    description: string;
    primaryCta: {
      text: string;
      href: string;
    };
    secondaryCta?: {
      text: string;
      href: string;
    };
    backgroundImage?: string;
    heroImage?: string;
  };
  
  // Seção Problema/Solução
  problemSolution: {
    title: string;
    subtitle: string;
    problem: {
      title: string;
      description: string;
      image?: string;
    };
    solution: {
      title: string;
      description: string;
      image?: string;
    };
  };
  
  // Seção de Benefícios
  benefits: {
    title: string;
    subtitle: string;
    items: Array<{
      icon: string;
      title: string;
      description: string;
    }>;
  };
  
  // Seção de Prova Social
  socialProof: {
    title: string;
    subtitle: string;
    testimonials: Array<{
      name: string;
      role: string;
      company: string;
      content: string;
      avatar?: string;
      rating?: number;
    }>;
    stats?: Array<{
      value: string;
      label: string;
    }>;
  };
  
  // Seção Sobre
  about: {
    title: string;
    subtitle: string;
    description: string;
    image?: string;
    features: Array<{
      title: string;
      description: string;
    }>;
  };
  
  // Seção de Contato
  contact: {
    title: string;
    subtitle: string;
    description: string;
    form: {
      fields: Array<{
        name: string;
        label: string;
        type: 'text' | 'email' | 'tel' | 'textarea';
        placeholder: string;
        required: boolean;
      }>;
      submitText: string;
      successMessage: string;
      errorMessage: string;
    };
    info: {
      email?: string;
      phone?: string;
      address?: string;
    };
  };
  
  // Rodapé
  footer: {
    description: string;
    links: Array<{
      title: string;
      items: Array<{
        label: string;
        href: string;
        external?: boolean;
      }>;
    }>;
    social: Array<{
      platform: string;
      url: string;
      icon: string;
    }>;
    copyright: string;
  };
}

/**
 * CONTEÚDO PADRÃO
 * 
 * Configuração padrão do conteúdo. Modifique os valores abaixo
 * para personalizar o conteúdo da sua landing page.
 */
export const defaultContent: ContentConfig = {
  site: {
    title: 'Criação de Landing Pages Profissionais',
    description: 'Landing pages rápidas, modernas e pensadas para conversão. Mostre sua ideia com clareza e conquiste mais clientes.',
    keywords: ['landing page', 'site profissional', 'conversão', 'marketing digital', 'negócios online'],
    author: 'Luis Henrique',
    url: 'https://seusite.com',
  },
  
  header: {
    logo: {
      text: 'HenriqueDev',
    },
    navigation: [
      { label: 'Início', href: '#hero' },
      { label: 'Benefícios', href: '#benefits' },
      { label: 'Prova Social', href: '#social-proof' },
      { label: 'Sobre', href: '#about' },
      { label: 'Contato', href: '#contact' },
    ],
    cta: {
      text: 'Solicitar Orçamento',
      href: '#contact',
    },
  },
  
  hero: {
    title: 'Sua ideia merece uma página que vende',
    subtitle: 'Landing pages que convertem de verdade',
    description: 'Eu crio landing pages claras, rápidas e funcionais. Sem promessas milagrosas — apenas design estratégico para atrair, engajar e gerar resultados reais.',
    primaryCta: {
      text: 'Quero minha landing page',
      href: '#contact',
    },
    secondaryCta: {
      text: 'Saiba Mais',
      href: '#about',
    },
  },
  
  problemSolution: {
    title: 'O problema e a solução',
    subtitle: 'Por que uma landing page profissional faz diferença',
    problem: {
      title: 'O Problema',
      description: 'Muitos negócios perdem clientes porque usam páginas lentas, confusas ou cheias de distrações. Resultado: tráfego sem conversão.',
    },
    solution: {
      title: 'A Solução',
      description: 'Uma landing page bem estruturada, com copy clara e design focado em resultado. É isso que eu entrego.',
    },
  },
  
  benefits: {
    title: 'Benefícios de ter sua landing page',
    subtitle: 'Mais que aparência, é estratégia',
    items: [
      {
        icon: 'Zap',
        title: 'Velocidade e Performance',
        description: 'Sites rápidos que carregam em segundos.',
      },
      {
        icon: 'Shield',
        title: 'Design que Converte',
        description: 'Estrutura pensada para guiar o visitante até a ação.',
      },
      {
        icon: 'TrendingUp',
        title: 'Responsividade Total',
        description: 'Funciona em qualquer dispositivo, sem susto.',
      },
      {
        icon: 'Users',
        title: 'SEO Básico Incluído',
        description: 'Preparada para ser encontrada no Google.',
      },
            {
        icon: 'Users',
        title: 'Personalização Completa',
        description: 'Cada projeto é único, feito sob medida para você.',
      },
    ],
  },
  
  socialProof: {
    title: 'O que dizem meus clientes',
    subtitle: 'Resultados falam mais que palavras',
    testimonials: [
      {
        name: 'Maria Silva',
        role: 'CEO',
        company: 'TechCorp',
        content: 'Minha landing page começou a gerar leads já na primeira semana. Trabalho rápido e direto.',
        rating: 5,
      },
      {
        name: 'João Santos',
        role: 'Diretor de Marketing',
        company: 'InnovaCorp',
        content: 'Resultados impressionantes em apenas 30 dias. A equipe de suporte é excepcional.',
        rating: 5,
      },
      {
        name: 'Ana Costa',
        role: 'Gerente de Projetos',
        company: 'StartupXYZ',
        content: 'Interface intuitiva e funcionalidades poderosas. Exatamente o que precisávamos.',
        rating: 5,
      },
    ],
    stats: [
      { value: '10k+', label: 'Clientes Satisfeitos' },
      { value: '99.9%', label: 'Uptime Garantido' },
      { value: '24/7', label: 'Suporte Disponível' },
      { value: '300%', label: 'Aumento de Produtividade' },
    ],
  },
  
  about: {
    title: 'Quem sou eu',
    subtitle: 'De código a conversão',
    description: 'Sou desenvolvedor full stack especializado em criação de landing pages. Meu foco é entregar páginas rápidas, modernas e objetivas, sempre com transparência e sem enrolação.',
    features: [
      {
        title: 'Experiência real',
        description: 'Anos criando sites e sistemas para diferentes nichos.',
      },
      {
        title: 'Processo simples',
        description: 'Você passa a ideia, eu transformo em página funcional.',
      },
      {
        title: 'Foco em resultado',
        description: 'design bonito é bom, mas o que importa é converter.',
      },
    ],
  },
  
  contact: {
    title: 'Vamos conversar?',
    subtitle: 'Sua landing page começa aqui',
    description: 'Entre em contato e vamos tirar sua ideia do papel.',
    form: {
      fields: [
        {
          name: 'name',
          label: 'Nome Completo',
          type: 'text',
          placeholder: 'Digite seu nome completo',
          required: true,
        },
        {
          name: 'email',
          label: 'E-mail',
          type: 'email',
          placeholder: 'seu@email.com',
          required: true,
        },
        {
          name: 'phone',
          label: 'Telefone',
          type: 'tel',
          placeholder: '(11) 99999-9999',
          required: false,
        },
        {
          name: 'message',
          label: 'Mensagem',
          type: 'textarea',
          placeholder: 'Como podemos ajudar você?',
          required: true,
        },
      ],
      submitText: 'Enviar',
      successMessage: 'Obrigado! Vou responder em breve.',
      errorMessage: 'Ocorreu um erro. Tente novamente.',
    },
    info: {
      email: 'lh5818181@gmail.com',
      phone: '81 9 9942-9143',
    },
  },
  
  footer: {
    description: 'Landing pages que unem design, performance e resultado.',
    links: [
      {
        title: 'Empresa',
        items: [
          { label: 'Sobre Nós', href: '#about' },
          { label: 'Serviços', href: '#benefits' },
          { label: 'Contato', href: '#contact' },
        ],
      },
      {
        title: 'Suporte',
        items: [
          { label: 'Central de Ajuda', href: '#', external: true },
          { label: 'Documentação', href: '#', external: true },
          { label: 'Status', href: '#', external: true },
        ],
      },
      {
        title: 'Legal',
        items: [
          { label: 'Privacidade', href: '#', external: true },
          { label: 'Termos de Uso', href: '#', external: true },
          { label: 'Cookies', href: '#', external: true },
        ],
      },
    ],
    social: [
      { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/luis-henrique-76245231a/', icon: 'Linkedin' },
      { platform: 'Instagram', url: 'https://instagram.com', icon: 'Instagram' },
      { platform: 'Facebook', url: 'https://facebook.com', icon: 'Facebook' },
    ],
    copyright: '© 2024 Luis Henrique Vieira de Oliveira. Todos os direitos reservados.',
  },
};

