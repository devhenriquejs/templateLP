import { lazy, Suspense } from 'react';
import { ThemeProvider } from 'styled-components';

import { defaultTheme } from './config/theme';
import { defaultContent } from './config/content';
import { GlobalStyles, AppContainer, MainContent } from './styles/GlobalStyles';

// Estes dois continuam sendo importados normalmente (pois aparecem na primeira tela)
import Header from './components/Header';
import ProblemSolution from './components/ProblemSolution';

// O RESTO vira importação dinâmica (Lazy)
const Benefits = lazy(() => import('./components/Benefits'));
const SocialProof = lazy(() => import('./components/SocialProof'));
const AboutSection = lazy(() => import('./components/AboutSection'));
const FormContact = lazy(() => import('./components/FormContact'));
const Footer = lazy(() => import('./components/Footer'));

/**
 * Componente principal da aplicação
 *
 * Renderiza toda a estrutura da landing page com:
 * - Cabeçalho com navegação
 * - Seções de conteúdo principal
 * - Formulário de contato
 * - Rodapé
 */
function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      {/* Estilos globais aplicados a toda a aplicação */}
      <GlobalStyles />

      {/* Link para pular para o conteúdo principal (acessibilidade) */}
      <a href="#main-content" className="skip-link">
        Pular para o conteúdo principal
      </a>

      {/* Container principal da aplicação */}
      <AppContainer>
        {/* Cabeçalho com navegação e logo */}
        <Header content={defaultContent.header} />

        {/* Conteúdo principal da página */}
        <MainContent id="main-content">
          {/* Seção Hero - Carrega imediatamente */}
          <ProblemSolution
            content={defaultContent.hero}
            problemSolution={defaultContent.problemSolution}
          />

          {/* O resto fica dentro do Suspense para não travar a tela */}
          <Suspense fallback={<div style={{ padding: '4rem', textAlign: 'center' }}>Carregando...</div>}>
            <Benefits content={defaultContent.benefits} />
            <SocialProof content={defaultContent.socialProof} />
            <AboutSection content={defaultContent.about} />
            <FormContact content={defaultContent.contact} />
          </Suspense>
        </MainContent>

        {/* Rodapé com links e informações adicionais (também protegido pelo Suspense) */}
        <Suspense fallback={<div style={{ height: '200px', background: '#334155' }}></div>}>
          <Footer content={defaultContent.footer} />
        </Suspense>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;