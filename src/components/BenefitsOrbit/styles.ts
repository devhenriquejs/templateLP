/**
 * ESTILOS DO COMPONENTE BENEFITS ORBIT
 * 
 * Estilos para a seção de benefícios com layout em órbita.
 * Inclui animações, responsividade e efeitos visuais.
 */

import styled, { keyframes, css } from 'styled-components';

/**
 * Animação de rotação suave
 */
const floatAnimation = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
`;

/**
 * Animação de pulsação
 */
const pulseAnimation = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
`;

/**
 * Seção principal
 */
export const StyledSection = styled.section`
  background: ${({ theme }) => theme.colors.neutral.white};
  padding: ${({ theme }) => theme.spacing['5xl']} 0;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
      circle at 50% 50%,
      ${({ theme }) => theme.colors.primary.main}05 0%,
      transparent 70%
    );
    pointer-events: none;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing['4xl']} 0;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing['3xl']} 0;
  }
`;

/**
 * Container da seção
 */
export const SectionContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.lg};
  position: relative;
  z-index: 1;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0 ${({ theme }) => theme.spacing.md};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 0 ${({ theme }) => theme.spacing.sm};
  }
`;

/**
 * Título da seção
 */
export const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.fontSize['4xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.neutral.black};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.typography.fontSize['3xl']};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  }
`;

/**
 * Subtítulo da seção
 */
export const SectionSubtitle = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  text-align: center;
  color: ${({ theme }) => theme.colors.neutral.medium};
  margin-bottom: ${({ theme }) => theme.spacing['4xl']};
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.typography.fontSize.base};
    margin-bottom: ${({ theme }) => theme.spacing['3xl']};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-bottom: ${({ theme }) => theme.spacing['2xl']};
  }
`;

/**
 * Wrapper da órbita (desktop)
 */
export const OrbitWrapper = styled.div`
  position: relative;
  width: 600px;
  height: 600px;
  margin: 0 auto;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: none;
  }
`;

/**
 * Centro da órbita
 */
export const OrbitCenter = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
`;

/**
 * Ícone central da órbita
 */
export const OrbitCenterIcon = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.gradients.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.primary.contrast};
  box-shadow: ${({ theme }) => theme.shadows.xl};
  animation: ${pulseAnimation} 3s ease-in-out infinite;
  
  &::before {
    content: '';
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.primary.main}20;
    z-index: -1;
  }
`;

/**
 * Grid para mobile
 */
export const BenefitsGrid = styled.div`
  display: none;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: grid;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.lg};
  }
`;

/**
 * Card de benefício
 */
export const BenefitCard = styled.div<{
  $position?: number;
  $total?: number;
  $isMobile?: boolean;
}>`
  background: ${({ theme }) => theme.colors.neutral.white};
  border: 1px solid ${({ theme }) => theme.colors.neutral.light};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  padding: ${({ theme }) => theme.spacing.xl};
  text-align: center;
  box-shadow: ${({ theme }) => theme.shadows.md};
  transition: ${({ theme }) => theme.transitions.normal};
  position: ${({ $isMobile }) => $isMobile ? 'static' : 'absolute'};
  width: ${({ $isMobile }) => $isMobile ? 'auto' : '200px'};
  
  /* Posicionamento em órbita para desktop */
  ${({ $position, $total, $isMobile }) => {
    if ($isMobile || $position === undefined || $total === undefined) return '';
    
    const angle = (360 / $total) * $position;
    const radius = 250;
    const x = Math.cos((angle - 90) * (Math.PI / 180)) * radius;
    const y = Math.sin((angle - 90) * (Math.PI / 180)) * radius;
    
    return css`
      top: 50%;
      left: 50%;
      transform: translate(calc(-50% + ${x}px), calc(-50% + ${y}px));
      animation: ${floatAnimation} ${3 + ($position * 0.5)}s ease-in-out infinite;
    `;
  }}
  
  &:hover {
    transform: ${({ $isMobile, $position, $total }) => {
      if ($isMobile) return 'translateY(-5px)';
      
      if ($position !== undefined && $total !== undefined) {
        const angle = (360 / $total) * $position;
        const radius = 250;
        const x = Math.cos((angle - 90) * (Math.PI / 180)) * radius;
        const y = Math.sin((angle - 90) * (Math.PI / 180)) * radius;
        
        return `translate(calc(-50% + ${x}px), calc(-55% + ${y}px)) scale(1.05)`;
      }
      
      return 'scale(1.05)';
    }};
    box-shadow: ${({ theme }) => theme.shadows.lg};
    border-color: ${({ theme }) => theme.colors.primary.main};
  }
  
  &:nth-child(even) {
    animation-delay: 0.5s;
  }
  
  &:nth-child(3n) {
    animation-delay: 1s;
  }
`;

/**
 * Ícone do benefício
 */
export const BenefitIcon = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.gradients.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.primary.contrast};
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.primary.main}20;
    z-index: -1;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 56px;
    height: 56px;
  }
`;

/**
 * Título do benefício
 */
export const BenefitTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  color: ${({ theme }) => theme.colors.neutral.black};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.typography.fontSize.base};
  }
`;

/**
 * Descrição do benefício
 */
export const BenefitDescription = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  color: ${({ theme }) => theme.colors.neutral.medium};
  margin: 0;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.typography.fontSize.xs};
  }
`;
