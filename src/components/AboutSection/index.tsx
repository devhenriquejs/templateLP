/**
 * COMPONENTE ABOUT SECTION
 * 
 * Seção que apresenta informações sobre a empresa ou pessoa,
 * incluindo descrição, características e recursos destacados.
 * 
 * Funcionalidades:
 * - Conteúdo configurável via props
 * - Layout flexível com imagem opcional
 * - Lista de características/recursos
 * - Design responsivo
 * - Animações suaves
 */


import { CheckCircle } from 'lucide-react';

// Importa tipos e estilos
import type { ContentConfig } from '../../types';
import {
  StyledSection,
  SectionContainer,
  SectionTitle,
  SectionSubtitle,
  AboutContent,
  AboutText,
  AboutDescription,
  AboutImage,
  FeaturesGrid,
  FeatureCard,
  FeatureIcon,
  FeatureTitle,
  FeatureDescription
} from './styles';

/**
 * Props do componente AboutSection
 */
interface AboutSectionProps {
  content: ContentConfig['about'];
}

/**
 * Componente AboutSection
 * 
 * @param content - Configuração de conteúdo da seção sobre
 */
function AboutSection({ content }: AboutSectionProps) {
  return (
    <StyledSection id="about">
      <SectionContainer>
        {/* Título da seção */}
        <SectionTitle className="animate-fade-in">
          {content.title}
        </SectionTitle>
        
        {/* Subtítulo da seção */}
        {content.subtitle && (
          <SectionSubtitle className="animate-fade-in">
            {content.subtitle}
          </SectionSubtitle>
        )}
        
        {/* Conteúdo principal */}
        <AboutContent>
          {/* Texto descritivo */}
          <AboutText className="animate-slide-in-left">
            <AboutDescription>
              {content.description}
            </AboutDescription>
            
            {/* Lista de características/recursos */}
            {content.features && content.features.length > 0 && (
              <FeaturesGrid>
                {content.features.map((feature, index) => (
                  <FeatureCard key={index}>
                    <FeatureIcon>
                      <CheckCircle size={20} />
                    </FeatureIcon>
                    
                    <div>
                      <FeatureTitle>
                        {feature.title}
                      </FeatureTitle>
                      
                      <FeatureDescription>
                        {feature.description}
                      </FeatureDescription>
                    </div>
                  </FeatureCard>
                ))}
              </FeaturesGrid>
            )}
          </AboutText>
          
          {/* Imagem (opcional) */}
          {content.image && (
            <AboutImage className="animate-slide-in-right">
              <img 
                src={content.image} 
                alt="Sobre nós"
                loading="lazy"
              />
            </AboutImage>
          )}
        </AboutContent>
      </SectionContainer>
    </StyledSection>
  );
}

export default AboutSection;

