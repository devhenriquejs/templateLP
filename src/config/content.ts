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
    title: 'Landing Page Template',
    description: 'Template moderno e responsivo para criação de landing pages eficazes',
    keywords: ['landing page', 'template', 'react', 'typescript', 'conversão'],
    author: 'Seu Nome',
    url: 'https://seusite.com',
  },
  
  header: {
    logo: {
      text: 'SeuLogo',
    },
    navigation: [
      { label: 'Início', href: '#hero' },
      { label: 'Benefícios', href: '#benefits' },
      { label: 'Sobre', href: '#about' },
      { label: 'Contato', href: '#contact' },
    ],
    cta: {
      text: 'Começar Agora',
      href: '#contact',
    },
  },
  
  hero: {
    title: 'Transforme Suas Ideias em Realidade',
    subtitle: 'A Solução Que Você Estava Procurando',
    description: 'Descubra como nossa solução inovadora pode revolucionar seu negócio e aumentar seus resultados de forma significativa.',
    primaryCta: {
      text: 'Começar Gratuitamente',
      href: '#contact',
    },
    secondaryCta: {
      text: 'Saiba Mais',
      href: '#about',
    },
  },
  
  problemSolution: {
    title: 'Do Problema à Solução',
    subtitle: 'Entendemos seus desafios e temos a resposta',
    problem: {
      title: 'O Problema',
      description: 'Muitas empresas enfrentam dificuldades para alcançar seus objetivos devido à falta de ferramentas adequadas e estratégias eficazes.',
    },
    solution: {
      title: 'Nossa Solução',
      description: 'Oferecemos uma plataforma completa e intuitiva que simplifica processos complexos e acelera seus resultados.',
    },
  },
  
  benefits: {
    title: 'Por Que Escolher Nossa Solução?',
    subtitle: 'Benefícios que fazem a diferença',
    items: [
      {
        icon: 'Zap',
        title: 'Rapidez e Eficiência',
        description: 'Automatize processos e economize tempo valioso com nossa tecnologia avançada.',
      },
      {
        icon: 'Shield',
        title: 'Segurança Garantida',
        description: 'Seus dados estão protegidos com os mais altos padrões de segurança do mercado.',
      },
      {
        icon: 'TrendingUp',
        title: 'Resultados Comprovados',
        description: 'Aumente sua produtividade em até 300% com nossas ferramentas otimizadas.',
      },
      {
        icon: 'Users',
        title: 'Suporte Especializado',
        description: 'Conte com nossa equipe de especialistas para te ajudar em cada etapa.',
      },
    ],
  },
  
  socialProof: {
    title: 'O Que Nossos Clientes Dizem',
    subtitle: 'Histórias reais de sucesso',
    testimonials: [
      {
        name: 'Maria Silva',
        role: 'CEO',
        company: 'TechCorp',
        content: 'Esta solução transformou completamente nossa operação. Recomendo para qualquer empresa que busca eficiência.',
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
    title: 'Sobre Nossa Empresa',
    subtitle: 'Inovação e excelência em cada projeto',
    description: 'Somos uma empresa dedicada a fornecer soluções tecnológicas inovadoras que impulsionam o crescimento dos nossos clientes. Com anos de experiência no mercado, desenvolvemos ferramentas que realmente fazem a diferença.',
    features: [
      {
        title: 'Experiência Comprovada',
        description: 'Mais de 10 anos desenvolvendo soluções para empresas de todos os tamanhos.',
      },
      {
        title: 'Tecnologia de Ponta',
        description: 'Utilizamos as mais modernas tecnologias para garantir performance e segurança.',
      },
      {
        title: 'Foco no Cliente',
        description: 'Cada solução é desenvolvida pensando nas necessidades específicas dos nossos clientes.',
      },
    ],
  },
  
  contact: {
    title: 'Entre em Contato',
    subtitle: 'Pronto para começar?',
    description: 'Fale conosco e descubra como podemos ajudar sua empresa a alcançar novos patamares.',
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
      submitText: 'Enviar Mensagem',
      successMessage: 'Mensagem enviada com sucesso! Entraremos em contato em breve.',
      errorMessage: 'Erro ao enviar mensagem. Tente novamente.',
    },
    info: {
      email: 'contato@suaempresa.com',
      phone: '(11) 99999-9999',
      address: 'Rua Exemplo, 123 - São Paulo, SP',
    },
  },
  
  footer: {
    description: 'Transformando ideias em soluções digitais inovadoras.',
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
      { platform: 'LinkedIn', url: 'https://linkedin.com', icon: 'Linkedin' },
      { platform: 'Twitter', url: 'https://twitter.com', icon: 'Twitter' },
      { platform: 'Instagram', url: 'https://instagram.com', icon: 'Instagram' },
      { platform: 'Facebook', url: 'https://facebook.com', icon: 'Facebook' },
    ],
    copyright: '© 2024 Sua Empresa. Todos os direitos reservados.',
  },
};

