/**
 * COMPONENTE BENEFITS ORBIT
 * 
 * Seção que apresenta os benefícios do produto/serviço em um layout
 * visual atrativo com cards organizados em órbita.
 * 
 * Funcionalidades:
 * - Layout em órbita responsivo
 * - Ícones personalizáveis (Lucide React)
 * - Animações suaves
 * - Configuração via props
 * - Design adaptativo para mobile
 */


import * as LucideIcons from 'lucide-react';

// Importa tipos e estilos
import type { ContentConfig } from '../../types';
import {
  StyledSection,
  SectionContainer,
  SectionTitle,
  SectionSubtitle,
  OrbitWrapper,
  OrbitCenter,
  OrbitCenterIcon,
  BenefitCard,
  BenefitIcon,
  BenefitTitle,
  BenefitDescription,
  BenefitsGrid
} from './styles';

/**
 * Props do componente BenefitsOrbit
 */
interface BenefitsOrbitProps {
  content: ContentConfig['benefits'];
}

/**
 * Função para obter ícone do Lucide React
 */
const getIcon = (iconName: string, size: number = 28) => {
  const IconComponent = (LucideIcons as any)[iconName];
  return IconComponent ? <IconComponent size={size} /> : <LucideIcons.Star size={size} />;
};

/**
 * Componente BenefitsOrbit
 * 
 * @param content - Configuração de conteúdo dos benefícios
 */
function BenefitsOrbit({ content }: BenefitsOrbitProps) {
  return (
    <StyledSection id="benefits">
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
        
        {/* Layout para desktop - órbita */}
        <OrbitWrapper className="animate-scale-in">
          {/* Centro da órbita */}
          <OrbitCenter>
            <OrbitCenterIcon>
              <LucideIcons.Rocket size={48} />
            </OrbitCenterIcon>
          </OrbitCenter>
          
          {/* Cards dos benefícios em órbita */}
          {content.items.map((benefit, index) => (
            <BenefitCard 
              key={index} 
              className={`orbit-card-${index}`}
              $position={index}
              $total={content.items.length}
            >
              <BenefitIcon>
                {getIcon(benefit.icon)}
              </BenefitIcon>
              
              <BenefitTitle>
                {benefit.title}
              </BenefitTitle>
              
              <BenefitDescription>
                {benefit.description}
              </BenefitDescription>
            </BenefitCard>
          ))}
        </OrbitWrapper>
        
        {/* Layout para mobile - grid */}
        <BenefitsGrid>
          {content.items.map((benefit, index) => (
            <BenefitCard 
              key={`mobile-${index}`}
              className="animate-fade-in"
              $isMobile
            >
              <BenefitIcon>
                {getIcon(benefit.icon)}
              </BenefitIcon>
              
              <BenefitTitle>
                {benefit.title}
              </BenefitTitle>
              
              <BenefitDescription>
                {benefit.description}
              </BenefitDescription>
            </BenefitCard>
          ))}
        </BenefitsGrid>
      </SectionContainer>
    </StyledSection>
  );
}

export default BenefitsOrbit;

