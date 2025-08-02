/**
 * COMPONENTE PRINCIPAL DA APLICAÇÃO
 * 
 * Este é o componente raiz da landing page template.
 * Ele organiza todos os componentes de seção e aplica o tema global.
 * 
 * Para personalizar:
 * 1. Modifique a ordem das seções conforme necessário
 * 2. Adicione ou remova seções baseado no seu projeto
 * 3. Configure o tema no arquivo src/config/theme.ts
 * 4. Ajuste o conteúdo no arquivo src/config/content.ts
 */

import { ThemeProvider } from 'styled-components';

// Importa configurações do template
import { defaultTheme } from './config/theme';
import { defaultContent } from './config/content';

// Importa estilos globais
import { GlobalStyles, AppContainer, MainContent } from './styles/GlobalStyles';

// Importa componentes das seções
import Header from './components/Header';
import ProblemSolution from './components/ProblemSolution';
import BenefitsOrbit from './components/BenefitsOrbit';
import SocialProof from './components/SocialProof';
import AboutSection from './components/AboutSection';
import FormContact from './components/FormContact';
import Footer from './components/Footer';

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
          {/* Seção Hero - primeira impressão */}
          <ProblemSolution 
            content={defaultContent.hero}
            problemSolution={defaultContent.problemSolution}
          />
          
          {/* Seção de Benefícios - pontos fortes do produto/serviço */}
          <BenefitsOrbit content={defaultContent.benefits} />
          
          {/* Seção de Prova Social - depoimentos e estatísticas */}
          <SocialProof content={defaultContent.socialProof} />
          
          {/* Seção Sobre - informações da empresa */}
          <AboutSection content={defaultContent.about} />
          
          {/* Seção de Contato - formulário e informações */}
          <FormContact content={defaultContent.contact} />
        </MainContent>
        
        {/* Rodapé com links e informações adicionais */}
        <Footer content={defaultContent.footer} />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;

