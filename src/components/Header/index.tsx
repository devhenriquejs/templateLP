/**
 * COMPONENTE HEADER
 * 
 * Cabeçalho da landing page com navegação, logo e call-to-action principal.
 * Este componente é totalmente configurável através das props de conteúdo.
 * 
 * Funcionalidades:
 * - Logo/marca personalizável (texto ou imagem)
 * - Menu de navegação responsivo
 * - Botão de call-to-action destacado
 * - Navegação suave entre seções
 * - Design responsivo para mobile
 */

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

// Importa tipos e estilos
import type { ContentConfig } from '../../types';
import {
  StyledHeader,
  StyledHeaderContainer,
  StyledLogo,
  StyledNav,
  StyledNavList,
  StyledNavItem,
  StyledNavLink,
  StyledCtaButton,
  StyledMobileMenuButton,
  StyledMobileMenu,
  StyledMobileNavList,
  StyledMobileNavItem,
  StyledMobileNavLink,
  StyledMobileCtaButton
} from './styles';

/**
 * Props do componente Header
 */
interface HeaderProps {
  content: ContentConfig['header'];
}

/**
 * Componente Header
 * 
 * @param content - Configuração de conteúdo do cabeçalho
 */
function Header({ content }: HeaderProps) {
  // Estado para controlar o menu mobile
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Estado para controlar o scroll (header fixo)
  const [isScrolled, setIsScrolled] = useState(false);

  /**
   * Efeito para detectar scroll e aplicar estilo ao header
   */
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /**
   * Função para alternar o menu mobile
   */
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  /**
   * Função para fechar o menu mobile ao clicar em um link
   */
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  /**
   * Função para navegação suave
   */
  const handleNavigation = (href: string, external?: boolean) => {
    if (external) {
      window.open(href, '_blank', 'noopener noreferrer');
    } else if (href.startsWith('#')) {
      // Navegação suave para âncoras
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    } else {
      window.location.href = href;
    }
    closeMobileMenu();
  };

  return (
    <StyledHeader 
      role="banner" 
      $isScrolled={isScrolled}
      aria-label="Cabeçalho principal"
    >
      <StyledHeaderContainer>
        {/* Logo/Marca */}
        <StyledLogo>
          {content.logo.image ? (
            <img 
              src={content.logo.image} 
              alt={content.logo.text}
              width="auto"
              height="40"
            />
          ) : (
            <span>{content.logo.text}</span>
          )}
        </StyledLogo>

        {/* Navegação Desktop */}
        <StyledNav role="navigation" aria-label="Navegação principal">
          <StyledNavList>
            {content.navigation.map((item, index) => (
              <StyledNavItem key={index}>
                <StyledNavLink
                  onClick={() => handleNavigation(item.href, item.external)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleNavigation(item.href, item.external);
                    }
                  }}
                  aria-label={`Navegar para ${item.label}`}
                >
                  {item.label}
                </StyledNavLink>
              </StyledNavItem>
            ))}
          </StyledNavList>
        </StyledNav>

        {/* Call-to-Action Desktop */}
        <StyledCtaButton
          onClick={() => handleNavigation(content.cta.href)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              handleNavigation(content.cta.href);
            }
          }}
          aria-label={content.cta.text}
        >
          {content.cta.text}
        </StyledCtaButton>

        {/* Botão do Menu Mobile */}
        <StyledMobileMenuButton
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </StyledMobileMenuButton>
      </StyledHeaderContainer>

      {/* Menu Mobile */}
      <StyledMobileMenu 
        id="mobile-menu"
        $isOpen={isMobileMenuOpen}
        role="navigation"
        aria-label="Menu de navegação mobile"
        aria-hidden={!isMobileMenuOpen}
      >
        <StyledMobileNavList>
          {content.navigation.map((item, index) => (
            <StyledMobileNavItem key={index}>
              <StyledMobileNavLink
                onClick={() => handleNavigation(item.href, item.external)}
                role="button"
                tabIndex={isMobileMenuOpen ? 0 : -1}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleNavigation(item.href, item.external);
                  }
                }}
                aria-label={`Navegar para ${item.label}`}
              >
                {item.label}
              </StyledMobileNavLink>
            </StyledMobileNavItem>
          ))}
          
          {/* Call-to-Action Mobile */}
          <StyledMobileNavItem>
            <StyledMobileCtaButton
              onClick={() => handleNavigation(content.cta.href)}
              role="button"
              tabIndex={isMobileMenuOpen ? 0 : -1}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleNavigation(content.cta.href);
                }
              }}
              aria-label={content.cta.text}
            >
              {content.cta.text}
            </StyledMobileCtaButton>
          </StyledMobileNavItem>
        </StyledMobileNavList>
      </StyledMobileMenu>
    </StyledHeader>
  );
}

export default Header;

