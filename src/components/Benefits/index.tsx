/**
 * COMPONENTE BENEFITS
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

import { Zap, Shield, TrendingUp, Search, Palette, Star, type LucideIcon } from 'lucide-react';

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
  BenefitsGrid,
} from './styles-simple';

/**
 * Props do componente Benefits
 */
interface BenefitsProps {
  content: ContentConfig['benefits'];
}

/**
 * Função para obter ícone do Lucide React
 */
const getIcon = (iconName: string, size: number = 28) => {
  const IconComponent = BENEFIT_ICONS[iconName] || Star;
  return <IconComponent size={size} />;
};

const BENEFIT_ICONS: Record<string, LucideIcon> = {
  Zap,
  Shield,
  TrendingUp,
  Search,
  Palette,
};

/**
 * Componente Benefits
 *
 * @param content - Configuração de conteúdo dos benefícios
 */
function Benefits({ content }: BenefitsProps) {
  return (
    <StyledSection id="benefits">
      <SectionContainer>
        {/* Título da seção */}
        <SectionTitle className="animate-fade-in">{content.title}</SectionTitle>

        {/* Subtítulo da seção */}
        {content.subtitle && (
          <SectionSubtitle className="animate-fade-in">{content.subtitle}</SectionSubtitle>
        )}

        {/* Layout de grid para todos os tamanhos de tela */}
        <BenefitsGrid>
          {content.items.map((benefit, index) => (
            <BenefitCard key={index} className="animate-fade-in">
              <BenefitIcon>{getIcon(benefit.icon)}</BenefitIcon>

              <BenefitTitle>{benefit.title}</BenefitTitle>

              <BenefitDescription>{benefit.description}</BenefitDescription>
            </BenefitCard>
          ))}
        </BenefitsGrid>
      </SectionContainer>
    </StyledSection>
  );
}

export default Benefits;
