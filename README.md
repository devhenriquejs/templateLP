# Landing Page Template

Um template moderno, responsivo e totalmente configurável para criação de landing pages de alta conversão. Desenvolvido com React, TypeScript e styled-components.

## 🚀 Características Principais

- **Totalmente Configurável**: Personalize cores, tipografia, conteúdo e layout através de arquivos de configuração
- **Design Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Acessibilidade**: Implementa as melhores práticas de acessibilidade web (WCAG 2.1)
- **Performance Otimizada**: Carregamento rápido com lazy loading e otimizações de imagem
- **SEO Friendly**: Estrutura semântica e meta tags configuráveis
- **Formulário Inteligente**: Validação robusta com integração para webhooks (Zapier, Make.com, etc.)
- **Animações Suaves**: Micro-interações e animações que melhoram a experiência do usuário
- **TypeScript**: Tipagem completa para melhor experiência de desenvolvimento

## 📋 Índice

- [Instalação](#instalação)
- [Configuração Rápida](#configuração-rápida)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Personalização](#personalização)
- [Componentes](#componentes)
- [Deploy](#deploy)
- [Contribuição](#contribuição)
- [Licença](#licença)

## 🛠 Instalação

### Pré-requisitos

- Node.js 18+ 
- npm ou yarn

### Passos de Instalação

1. **Clone ou baixe o template**
   ```bash
   git clone [URL_DO_REPOSITORIO]
   cd landing-page-template
   ```

2. **Instale as dependências**
   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Inicie o servidor de desenvolvimento**
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

4. **Abra no navegador**
   ```
   http://localhost:5173
   ```

## ⚡ Configuração Rápida

Para personalizar rapidamente o template para seu projeto:

### 1. Configure o Conteúdo

Edite o arquivo `src/config/content.ts`:

```typescript
export const defaultContent: ContentConfig = {
  site: {
    title: 'Seu Projeto',
    description: 'Descrição do seu projeto',
    // ... outras configurações
  },
  header: {
    logo: {
      text: 'Sua Marca',
    },
    // ... outras configurações
  },
  // ... outras seções
};
```

### 2. Configure o Tema

Edite o arquivo `src/config/theme.ts`:

```typescript
export const defaultTheme: Theme = {
  colors: {
    primary: {
      main: '#SUA_COR_PRIMARIA',
      // ... outras cores
    },
    // ... outras configurações
  },
  // ... outras configurações
};
```

### 3. Configure o Formulário

Para integrar com seu webhook (Zapier, Make.com, etc.):

1. Crie uma variável de ambiente:
   ```bash
   echo "REACT_APP_WEBHOOK_URL=https://sua-url-webhook.com" > .env
   ```

2. O formulário enviará automaticamente os dados para essa URL.

## 📁 Estrutura do Projeto

```
landing-page-template/
├── public/                 # Arquivos públicos
├── src/
│   ├── components/         # Componentes React
│   │   ├── Header/         # Cabeçalho
│   │   ├── ProblemSolution/# Seção Hero + Problema/Solução
│   │   ├── BenefitsOrbit/  # Seção de Benefícios
│   │   ├── SocialProof/    # Depoimentos e Prova Social
│   │   ├── AboutSection/   # Seção Sobre
│   │   ├── FormContact/    # Formulário de Contato
│   │   └── Footer/         # Rodapé
│   ├── config/             # Arquivos de configuração
│   │   ├── theme.ts        # Configuração de tema
│   │   └── content.ts      # Configuração de conteúdo
│   ├── styles/             # Estilos globais
│   ├── types/              # Tipos TypeScript
│   ├── App.tsx             # Componente principal
│   └── main.tsx            # Ponto de entrada
├── package.json
└── README.md
```

## 🎨 Personalização

### Cores e Tema

O sistema de temas permite personalização completa das cores:

```typescript
// src/config/theme.ts
colors: {
  primary: {
    main: '#3B82F6',      // Cor principal
    light: '#60A5FA',     // Variação clara
    dark: '#1D4ED8',      // Variação escura
    contrast: '#FFFFFF',  // Cor de contraste
  },
  // ... outras cores
}
```

### Tipografia

Configure fontes e tamanhos:

```typescript
typography: {
  fontFamily: {
    primary: '"Inter", sans-serif',
    secondary: '"Poppins", sans-serif',
  },
  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    // ... outros tamanhos
  },
}
```

### Conteúdo

Todo o conteúdo é configurável através do arquivo `content.ts`:

```typescript
// Exemplo: Configurar seção de benefícios
benefits: {
  title: 'Por Que Escolher Nossa Solução?',
  subtitle: 'Benefícios que fazem a diferença',
  items: [
    {
      icon: 'Zap', // Nome do ícone do Lucide React
      title: 'Rapidez e Eficiência',
      description: 'Automatize processos...',
    },
    // ... outros benefícios
  ],
}
```

## 🧩 Componentes

### Header

Cabeçalho com navegação responsiva:

- Logo configurável (texto ou imagem)
- Menu de navegação
- Call-to-action destacado
- Menu mobile com animação

### ProblemSolution

Seção hero combinada com problema/solução:

- Título e descrição principais
- Botões de call-to-action
- Apresentação visual problema vs solução
- Imagens opcionais

### BenefitsOrbit

Seção de benefícios com layout em órbita:

- Layout em órbita para desktop
- Grid responsivo para mobile
- Ícones do Lucide React
- Animações flutuantes

### SocialProof

Depoimentos e prova social:

- Cards de depoimentos
- Sistema de avaliação com estrelas
- Estatísticas destacadas
- Selo de confiança

### AboutSection

Seção sobre a empresa/pessoa:

- Texto descritivo
- Lista de características
- Imagem opcional
- Layout flexível

### FormContact

Formulário de contato avançado:

- Campos configuráveis
- Validação com Zod
- Integração com webhooks
- Feedback visual
- Modal de sucesso/erro

### Footer

Rodapé completo:

- Links organizados por seções
- Redes sociais
- Informações de contato
- Copyright dinâmico

## 🚀 Deploy

### Vercel (Recomendado)

1. Faça push do código para GitHub
2. Conecte o repositório no Vercel
3. Configure as variáveis de ambiente
4. Deploy automático

### Netlify

1. Faça build do projeto:
   ```bash
   npm run build
   ```
2. Faça upload da pasta `dist` no Netlify
3. Configure as variáveis de ambiente

### Outros Provedores

O template gera arquivos estáticos que podem ser hospedados em qualquer provedor:

- GitHub Pages
- AWS S3
- Firebase Hosting
- Surge.sh

## 🔧 Scripts Disponíveis

```bash
npm run dev          # Servidor de desenvolvimento
npm run build        # Build para produção
npm run preview      # Preview do build
npm run lint         # Verificar código com ESLint
```

## 📱 Responsividade

O template é totalmente responsivo com breakpoints:

- **Mobile**: até 480px
- **Tablet**: 481px - 768px
- **Desktop**: 769px - 1024px
- **Wide**: 1025px+

## ♿ Acessibilidade

Implementa as melhores práticas:

- Navegação por teclado
- Leitores de tela
- Contraste adequado
- Foco visível
- Textos alternativos
- Estrutura semântica

## 🔗 Integrações

### Webhooks Suportados

- Zapier
- Make.com (Integromat)
- Webhooks personalizados
- APIs REST

### Exemplo de Configuração Zapier

1. Crie um novo Zap
2. Escolha "Webhooks by Zapier" como trigger
3. Selecione "Catch Hook"
4. Copie a URL fornecida
5. Configure no arquivo `.env`:
   ```
   REACT_APP_WEBHOOK_URL=https://hooks.zapier.com/hooks/catch/SEU_ID/
   ```

## 🤝 Contribuição

Contribuições são bem-vindas! Para contribuir:

1. Fork o projeto
2. Crie uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 🆘 Suporte

Se você encontrar problemas ou tiver dúvidas:

1. Verifique a documentação
2. Procure em issues existentes
3. Abra uma nova issue
4. Entre em contato: [seu-email@exemplo.com]

## 🎯 Roadmap

- [ ] Modo escuro automático
- [ ] Mais layouts de seções
- [ ] Integração com CMS
- [ ] Testes automatizados
- [ ] Storybook para componentes
- [ ] PWA support

---

**Desenvolvido com ❤️ para criar landing pages incríveis!**

