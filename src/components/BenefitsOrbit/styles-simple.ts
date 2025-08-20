/**
 * ESTILOS SIMPLIFICADOS DO COMPONENTE BENEFITS ORBIT
 * 
 * Versão simplificada sem layout em órbita complexo.
 * Foca em um grid responsivo e funcional.
 */

import styled, { keyframes } from 'styled-components';

/**
 * Animação de flutuação
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
 * Seção principal
 */
export const StyledSection = styled.section`
  background: #f8fafc;
  padding: 80px 0;
  position: relative;
  
  @media (max-width: 768px) {
    padding: 60px 0;
  }
  
  @media (max-width: 480px) {
    padding: 40px 0;
  }
`;

/**
 * Container da seção
 */
export const SectionContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  
  @media (max-width: 768px) {
    padding: 0 16px;
  }
`;

/**
 * Título da seção
 */
export const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 16px;
  color: #1e293b;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.75rem;
  }
`;

/**
 * Subtítulo da seção
 */
export const SectionSubtitle = styled.p`
  font-size: 1.125rem;
  text-align: center;
  color: #64748b;
  margin-bottom: 64px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 48px;
  }
  
  @media (max-width: 480px) {
    margin-bottom: 32px;
  }
`;

/**
 * Grid de benefícios
 */
export const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 32px;
  
  @media (max-width: 768px) {
    gap: 24px;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

/**
 * Card de benefício
 */
export const BenefitCard = styled.div`
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  padding: 32px;
  text-align: center;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  animation: ${floatAnimation} 6s ease-in-out infinite;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
    border-color: #3b82f6;
  }
  
  &:nth-child(2n) {
    animation-delay: 1s;
  }
  
  &:nth-child(3n) {
    animation-delay: 2s;
  }
  
  @media (max-width: 480px) {
    padding: 24px;
  }
`;

/**
 * Ícone do benefício
 */
export const BenefitIcon = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 24px;
  color: white;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
    border-radius: 50%;
    background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
    opacity: 0.2;
    z-index: -1;
  }
  
  @media (max-width: 480px) {
    width: 56px;
    height: 56px;
    margin-bottom: 20px;
  }
`;

/**
 * Título do benefício
 */
export const BenefitTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 12px;
  color: #1e293b;
  
  @media (max-width: 480px) {
    font-size: 1.125rem;
  }
`;

/**
 * Descrição do benefício
 */
export const BenefitDescription = styled.p`
  font-size: 0.875rem;
  line-height: 1.6;
  color: #64748b;
  margin: 0;
  
  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

/**
 * Wrapper da órbita (não usado na versão simplificada)
 */
export const OrbitWrapper = styled.div`
  display: none;
`;

/**
 * Centro da órbita (não usado na versão simplificada)
 */
export const OrbitCenter = styled.div`
  display: none;
`;

/**
 * Ícone central da órbita (não usado na versão simplificada)
 */
export const OrbitCenterIcon = styled.div`
  display: none;
`;
