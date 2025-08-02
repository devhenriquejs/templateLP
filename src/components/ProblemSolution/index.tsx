/**
 * COMPONENTE PROBLEM SOLUTION
 * 
 * Seção que apresenta o problema do cliente e a solução oferecida.
 * Inclui uma seção hero com call-to-action e uma apresentação visual
 * do problema vs solução.
 * 
 * Funcionalidades:
 * - Seção hero configurável
 * - Apresentação visual problema/solução
 * - Call-to-actions personalizáveis
 * - Design responsivo
 * - Animações suaves
 */


import { ArrowRight, CheckCircle, AlertCircle } from 'lucide-react';

// Importa tipos e estilos
import type { ContentConfig } from '../../types';
import {
  StyledSection,
  HeroContainer,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
  HeroDescription,
  HeroButtons,
  HeroPrimaryButton,
  HeroSecondaryButton,
  HeroImage,
  ProblemSolutionContainer,
  ProblemSolutionTitle,
  ProblemSolutionGrid,
  ProblemCard,
  SolutionCard,
  CardIcon,
  CardTitle,
  CardDescription,
  CardImage,
  ArrowConnector
} from './styles';

/**
 * Props do componente ProblemSolution
 */
interface ProblemSolutionProps {
  content: ContentConfig['hero'];
  problemSolution: ContentConfig['problemSolution'];
}

/**
 * Componente ProblemSolution
 * 
 * @param content - Configuração de conteúdo da seção hero
 * @param problemSolution - Configuração de conteúdo problema/solução
 */
function ProblemSolution({ content, problemSolution }: ProblemSolutionProps) {
  /**
   * Função para lidar com navegação de botões
   */
  const handleNavigation = (href: string) => {
    if (href.startsWith('#')) {
      // Navegação suave para âncoras
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    } else {
      window.open(href, '_blank', 'noopener noreferrer');
    }
  };

  return (
    <StyledSection id="hero">
      {/* Seção Hero */}
      <HeroContainer>
        <HeroContent>
          {/* Título principal */}
          <HeroTitle className="animate-fade-in">
            {content.title}
          </HeroTitle>
          
          {/* Subtítulo */}
          {content.subtitle && (
            <HeroSubtitle className="animate-fade-in">
              {content.subtitle}
            </HeroSubtitle>
          )}
          
          {/* Descrição */}
          <HeroDescription className="animate-fade-in">
            {content.description}
          </HeroDescription>
          
          {/* Botões de ação */}
          <HeroButtons className="animate-fade-in">
            <HeroPrimaryButton
              onClick={() => handleNavigation(content.primaryCta.href)}
              aria-label={content.primaryCta.text}
            >
              {content.primaryCta.text}
              <ArrowRight size={20} />
            </HeroPrimaryButton>
            
            {content.secondaryCta && (
              <HeroSecondaryButton
                onClick={() => handleNavigation(content.secondaryCta!.href)}
                aria-label={content.secondaryCta.text}
              >
                {content.secondaryCta.text}
              </HeroSecondaryButton>
            )}
          </HeroButtons>
        </HeroContent>
        
        {/* Imagem hero (opcional) */}
        {content.heroImage && (
          <HeroImage className="animate-slide-in-right">
            <img 
              src={content.heroImage} 
              alt="Ilustração da solução"
              loading="eager"
            />
          </HeroImage>
        )}
      </HeroContainer>

      {/* Seção Problema vs Solução */}
      <ProblemSolutionContainer>
        <ProblemSolutionTitle className="animate-fade-in">
          {problemSolution.title}
        </ProblemSolutionTitle>
        
        {problemSolution.subtitle && (
          <p className="animate-fade-in" style={{ 
            textAlign: 'center', 
            marginBottom: '3rem',
            fontSize: '1.125rem',
            color: '#64748B'
          }}>
            {problemSolution.subtitle}
          </p>
        )}
        
        <ProblemSolutionGrid>
          {/* Card do Problema */}
          <ProblemCard className="animate-slide-in-left">
            <CardIcon $variant="problem">
              <AlertCircle size={32} />
            </CardIcon>
            
            <CardTitle>{problemSolution.problem.title}</CardTitle>
            
            <CardDescription>
              {problemSolution.problem.description}
            </CardDescription>
            
            {problemSolution.problem.image && (
              <CardImage>
                <img 
                  src={problemSolution.problem.image} 
                  alt="Ilustração do problema"
                  loading="lazy"
                />
              </CardImage>
            )}
          </ProblemCard>
          
          {/* Seta conectora */}
          <ArrowConnector className="animate-scale-in">
            <ArrowRight size={32} />
          </ArrowConnector>
          
          {/* Card da Solução */}
          <SolutionCard className="animate-slide-in-right">
            <CardIcon $variant="solution">
              <CheckCircle size={32} />
            </CardIcon>
            
            <CardTitle>{problemSolution.solution.title}</CardTitle>
            
            <CardDescription>
              {problemSolution.solution.description}
            </CardDescription>
            
            {problemSolution.solution.image && (
              <CardImage>
                <img 
                  src={problemSolution.solution.image} 
                  alt="Ilustração da solução"
                  loading="lazy"
                />
              </CardImage>
            )}
          </SolutionCard>
        </ProblemSolutionGrid>
      </ProblemSolutionContainer>
    </StyledSection>
  );
}

export default ProblemSolution;

