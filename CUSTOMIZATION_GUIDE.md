# Guia de Personalização - Landing Page Template

Este guia detalha como personalizar completamente o template para atender às necessidades específicas do seu projeto.

## 📋 Índice

1. [Configuração Inicial](#configuração-inicial)
2. [Personalização de Cores e Tema](#personalização-de-cores-e-tema)
3. [Configuração de Conteúdo](#configuração-de-conteúdo)
4. [Personalização de Componentes](#personalização-de-componentes)
5. [Adição de Novas Seções](#adição-de-novas-seções)
6. [Configuração de Formulários](#configuração-de-formulários)
7. [SEO e Meta Tags](#seo-e-meta-tags)
8. [Integração com Serviços Externos](#integração-com-serviços-externos)

## 🚀 Configuração Inicial

### 1. Informações Básicas do Site

Edite `src/config/content.ts` na seção `site`:

```typescript
site: {
  title: 'Nome da Sua Empresa',
  description: 'Descrição clara do que sua empresa faz',
  keywords: ['palavra-chave1', 'palavra-chave2', 'palavra-chave3'],
  author: 'Seu Nome ou Nome da Empresa',
  url: 'https://seudominio.com',
}
```

### 2. Configuração do Logo

```typescript
header: {
  logo: {
    text: 'SeuLogo', // Para logo em texto
    image: '/caminho/para/logo.png', // Para logo em imagem
  },
  // ... resto da configuração
}
```

**Dica**: Se usar imagem, coloque o arquivo na pasta `public/` e referencie como `/logo.png`.

## 🎨 Personalização de Cores e Tema

### Cores Primárias

```typescript
// src/config/theme.ts
colors: {
  primary: {
    main: '#3B82F6',      // Azul principal - mude para sua cor
    light: '#60A5FA',     // Versão mais clara
    dark: '#1D4ED8',      // Versão mais escura
    contrast: '#FFFFFF',  // Cor para texto sobre a primária
  },
}
```

### Paleta de Cores Recomendada

Para escolher cores harmoniosas, use estas ferramentas:

- **Coolors.co**: Gerador de paletas
- **Adobe Color**: Paletas profissionais
- **Material Design Colors**: Cores testadas

### Exemplo de Paletas Populares

```typescript
// Paleta Azul Profissional
primary: {
  main: '#2563EB',
  light: '#3B82F6',
  dark: '#1D4ED8',
  contrast: '#FFFFFF',
}

// Paleta Verde Natureza
primary: {
  main: '#059669',
  light: '#10B981',
  dark: '#047857',
  contrast: '#FFFFFF',
}

// Paleta Roxo Criativo
primary: {
  main: '#7C3AED',
  light: '#8B5CF6',
  dark: '#6D28D9',
  contrast: '#FFFFFF',
}
```

### Tipografia

```typescript
typography: {
  fontFamily: {
    primary: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
    secondary: '"Poppins", sans-serif',
    mono: '"Fira Code", monospace',
  },
}
```

**Fontes Recomendadas**:
- **Profissional**: Inter, Roboto, Open Sans
- **Criativo**: Poppins, Montserrat, Nunito
- **Elegante**: Playfair Display, Crimson Text, Lora

## 📝 Configuração de Conteúdo

### Seção Hero

```typescript
hero: {
  title: 'Transforme Suas Ideias em Realidade',
  subtitle: 'A Solução Que Você Estava Procurando',
  description: 'Texto que explica claramente o valor que você oferece...',
  primaryCta: {
    text: 'Começar Agora',
    href: '#contact', // ou URL externa
  },
  secondaryCta: {
    text: 'Saiba Mais',
    href: '#about',
  },
  heroImage: '/caminho/para/imagem-hero.jpg', // Opcional
}
```

### Seção de Benefícios

```typescript
benefits: {
  title: 'Por Que Escolher Nossa Solução?',
  subtitle: 'Benefícios que fazem a diferença',
  items: [
    {
      icon: 'Zap', // Ícone do Lucide React
      title: 'Rapidez e Eficiência',
      description: 'Automatize processos e economize tempo...',
    },
    // Adicione até 6 benefícios para melhor visual
  ],
}
```

**Ícones Disponíveis** (Lucide React):
- `Zap`, `Shield`, `TrendingUp`, `Users`, `Star`, `Heart`
- `CheckCircle`, `Award`, `Target`, `Rocket`, `Globe`, `Lock`
- Veja todos em: https://lucide.dev/icons/

### Depoimentos

```typescript
socialProof: {
  testimonials: [
    {
      name: 'Maria Silva',
      role: 'CEO',
      company: 'TechCorp',
      content: 'Depoimento detalhado sobre a experiência...',
      avatar: '/caminho/para/foto.jpg', // Opcional
      rating: 5, // 1-5 estrelas
    },
  ],
  stats: [
    { value: '10k+', label: 'Clientes Satisfeitos' },
    { value: '99.9%', label: 'Uptime Garantido' },
  ],
}
```

## 🧩 Personalização de Componentes

### Modificando Estilos

Cada componente tem seu arquivo `styles.ts`. Para personalizar:

```typescript
// Exemplo: src/components/Header/styles.ts
export const StyledHeader = styled.header`
  background: ${({ theme }) => theme.colors.neutral.white};
  padding: ${({ theme }) => theme.spacing.md} 0;
  
  // Suas personalizações aqui
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing.sm} 0;
  }
`;
```

### Adicionando Animações

```typescript
// Adicione animações CSS
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const AnimatedComponent = styled.div`
  animation: ${fadeInUp} 0.6s ease-out;
`;
```

## ➕ Adição de Novas Seções

### 1. Criar Nova Seção

```bash
mkdir src/components/NovaSecao
touch src/components/NovaSecao/index.tsx
touch src/components/NovaSecao/styles.ts
```

### 2. Estrutura Básica

```typescript
// src/components/NovaSecao/index.tsx
import React from 'react';
import { StyledSection, SectionContainer } from './styles';

interface NovaSecaoProps {
  // Defina as props necessárias
}

function NovaSecao({ }: NovaSecaoProps) {
  return (
    <StyledSection id="nova-secao">
      <SectionContainer>
        {/* Conteúdo da seção */}
      </SectionContainer>
    </StyledSection>
  );
}

export default NovaSecao;
```

### 3. Adicionar ao App.tsx

```typescript
// src/App.tsx
import NovaSecao from './components/NovaSecao';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      {/* ... outros componentes */}
      <NovaSecao />
      {/* ... resto dos componentes */}
    </ThemeProvider>
  );
}
```

## 📋 Configuração de Formulários

### Campos Personalizados

```typescript
// src/config/content.ts
contact: {
  form: {
    fields: [
      {
        name: 'name',
        label: 'Nome Completo',
        type: 'text',
        placeholder: 'Digite seu nome',
        required: true,
      },
      {
        name: 'company',
        label: 'Empresa',
        type: 'text',
        placeholder: 'Nome da sua empresa',
        required: false,
      },
      {
        name: 'budget',
        label: 'Orçamento',
        type: 'text',
        placeholder: 'Qual seu orçamento?',
        required: false,
      },
    ],
  },
}
```

### Validação Personalizada

```typescript
// src/components/FormContact/index.tsx
const createValidationSchema = (fields) => {
  const schemaObject = {};
  
  fields.forEach(field => {
    let fieldSchema;
    
        switch (field.type) {
      case 'email':
        fieldSchema = z.string().email('E-mail inválido');
        break;
      case 'tel':
        // Validando pela quantidade de dígitos (aceita 10 ou 11 dígitos)
        fieldSchema = z.string().refine(
          (v) => {
            const digits = v.replace(/\D/g, '');
            return digits.length === 10 || digits.length === 11;
          },
          'Telefone inválido (informe DDD + número)'
        );
        break;
      case 'url':
        fieldSchema = z.string().url('URL inválida');
        break;
      default:
        fieldSchema = z.string();
    }
    
    if (field.required) {
      fieldSchema = fieldSchema.min(1, `${field.label} é obrigatório`);
    }
    
    schemaObject[field.name] = fieldSchema;
  });
  
  return z.object(schemaObject);
};
```

## 🔍 SEO e Meta Tags

### Configuração Básica

```typescript
// src/config/content.ts
site: {
  title: 'Título da Página | Sua Empresa',
  description: 'Descrição de 150-160 caracteres que aparece no Google',
  keywords: ['palavra-chave1', 'palavra-chave2', 'palavra-chave3'],
  author: 'Nome do Autor',
  url: 'https://seudominio.com',
}
```

### Meta Tags Avançadas

Adicione no `index.html`:

```html
<!-- Open Graph (Facebook) -->
<meta property="og:title" content="Título da Página">
<meta property="og:description" content="Descrição da página">
<meta property="og:image" content="https://seudominio.com/og-image.jpg">
<meta property="og:url" content="https://seudominio.com">
<meta property="og:type" content="website">

<!-- Twitter Cards -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Título da Página">
<meta name="twitter:description" content="Descrição da página">
<meta name="twitter:image" content="https://seudominio.com/twitter-image.jpg">

<!-- Favicon -->
<link rel="icon" type="image/svg+xml" href="/favicon.svg">
<link rel="icon" type="image/png" href="/favicon.png">
```

## 🔗 Integração com Serviços Externos

### Zapier

1. **Criar Webhook no Zapier**:
   - Acesse zapier.com
   - Crie novo Zap
   - Trigger: "Webhooks by Zapier" → "Catch Hook"
   - Copie a URL fornecida

2. **Configurar no Template**:
   ```bash
   # .env
   VITE_WEBHOOK_URL=https://hooks.zapier.com/hooks/catch/SEU_ID/
   ```

### Make.com (Integromat)

1. **Criar Webhook**:
   - Acesse make.com
   - Crie novo cenário
   - Adicione módulo "Webhooks" → "Custom webhook"
   - Copie a URL

2. **Configurar**:
   ```bash
   # .env
   VITE_WEBHOOK_URL=https://hook.make.com/SEU_ID
   ```

### Google Analytics

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Facebook Pixel

```html
<!-- Facebook Pixel -->
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', 'SEU_PIXEL_ID');
  fbq('track', 'PageView');
</script>
```

## 🎯 Dicas de Conversão

### 1. Headlines Eficazes

- Use números específicos: "Aumente suas vendas em 300%"
- Inclua benefícios claros: "Sem mensalidades, sem complicação"
- Crie urgência: "Vagas limitadas até sexta-feira"

### 2. Call-to-Actions

- Use verbos de ação: "Começar", "Descobrir", "Transformar"
- Seja específico: "Baixar Guia Gratuito" vs "Clique Aqui"
- Teste diferentes cores e textos

### 3. Prova Social

- Use números reais: "Mais de 1.000 clientes"
- Inclua fotos reais nos depoimentos
- Adicione logos de empresas conhecidas

### 4. Formulários

- Peça apenas informações essenciais
- Use placeholders descritivos
- Ofereça algo em troca (lead magnet)

## 🔧 Troubleshooting

### Problemas Comuns

**1. Imagens não carregam**
- Verifique se estão na pasta `public/`
- Use caminhos relativos: `/imagem.jpg`

**2. Cores não aplicam**
- Verifique se está usando `${({ theme }) => theme.colors.primary.main}`
- Confirme se o ThemeProvider está envolvendo o componente

**3. Formulário não envia**
- Verifique a URL do webhook
- Confirme se a variável de ambiente está configurada
- Teste a URL diretamente

**4. Layout quebrado no mobile**
- Use media queries: `@media (max-width: ${({ theme }) => theme.breakpoints.mobile})`
- Teste em diferentes dispositivos

### Logs e Debug

```typescript
// Adicione logs para debug
console.log('Dados do formulário:', data);
console.log('URL do webhook:', import.meta.env.VITE_WEBHOOK_URL);
```

## 📚 Recursos Adicionais

### Ferramentas Úteis

- **Figma**: Design de layouts
- **Unsplash**: Imagens gratuitas
- **Pexels**: Vídeos e imagens
- **Canva**: Criação de gráficos
- **TinyPNG**: Compressão de imagens

### Inspiração

- **Land-book**: Galeria de landing pages
- **Mobbin**: Designs mobile
- **Page Flows**: Fluxos de usuário
- **Really Good Emails**: Inspiração para e-mails

### Aprendizado

- **MDN Web Docs**: Documentação web
- **React Docs**: Documentação oficial
- **TypeScript Handbook**: Guia TypeScript
- **Styled Components Docs**: Documentação styled-components

---

**Precisa de ajuda?** Abra uma issue no repositório ou entre em contato!

