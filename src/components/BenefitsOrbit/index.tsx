/**
 * COMPONENTE BENEFITS ORBIT
 * 
 * Seção que apresenta os benefícios do produto/serviço em um layout
 * de grid responsivo, focado na simplicidade e funcionalidade.
 * 
 * Funcionalidades:
 * - Layout de grid responsivo
 * - Ícones personalizáveis (Lucide React)
 * - Animações suaves
 * - Configuração via props
 */

import * as LucideIcons from 'lucide-react';

// Importa tipos e estilos do arquivo simplificado
import type { ContentConfig } from '../../types';
import {
  StyledSection,
  SectionContainer,
  SectionTitle,
  SectionSubtitle,
  BenefitCard,
  BenefitIcon,
  BenefitTitle,
  BenefitDescription,
  BenefitsGrid
} from './styles-simple'; // Importa do arquivo de estilos simplificado

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
        
        {/* Layout de grid para todos os tamanhos de tela */}
        <BenefitsGrid>
          {content.items.map((benefit, index) => (
            <BenefitCard 
              key={index}
              className="animate-fade-in"
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
