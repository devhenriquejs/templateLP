/**
 * COMPONENTE FOOTER
 * 
 * Rodapé da landing page com links, informações de contato,
 * redes sociais e copyright.
 * 
 * Funcionalidades:
 * - Links organizados por seções
 * - Redes sociais configuráveis
 * - Informações de contato
 * - Copyright dinâmico
 * - Design responsivo
 */


import * as LucideIcons from 'lucide-react';

// Importa tipos e estilos
import type { ContentConfig } from '../../types';
import {
  StyledFooter,
  FooterContainer,
  FooterContent,
  FooterDescription,
  FooterLinks,
  FooterSection,
  FooterSectionTitle,
  FooterLinksList,
  FooterLink,
  FooterSocial,
  SocialTitle,
  SocialLinks,
  SocialLink,
  FooterBottom,
  FooterCopyright
} from './styles';

/**
 * Props do componente Footer
 */
interface FooterProps {
  content: ContentConfig['footer'];
}

/**
 * Função para obter ícone do Lucide React
 */
const getIcon = (iconName: string, size: number = 20) => {
  const IconComponent = (LucideIcons as any)[iconName];
  return IconComponent ? <IconComponent size={size} /> : <LucideIcons.ExternalLink size={size} />;
};

/**
 * Componente Footer
 * 
 * @param content - Configuração de conteúdo do rodapé
 */
function Footer({ content }: FooterProps) {
  /**
   * Função para lidar com navegação de links
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
  };

  return (
    <StyledFooter role="contentinfo">
      <FooterContainer>
        <FooterContent>
          {/* Descrição da empresa */}
          <FooterDescription>
            <p>{content.description}</p>
          </FooterDescription>
          
          {/* Links organizados por seções */}
          <FooterLinks>
            {content.links.map((section, index) => (
              <FooterSection key={index}>
                <FooterSectionTitle>
                  {section.title}
                </FooterSectionTitle>
                
                <FooterLinksList>
                  {section.items.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <FooterLink
                        onClick={() => handleNavigation(link.href, link.external)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            handleNavigation(link.href, link.external);
                          }
                        }}
                        aria-label={`Navegar para ${link.label}`}
                      >
                        {link.label}
                        {link.external && (
                          <LucideIcons.ExternalLink size={14} />
                        )}
                      </FooterLink>
                    </li>
                  ))}
                </FooterLinksList>
              </FooterSection>
            ))}
          </FooterLinks>
          
          {/* Redes sociais */}
          {content.social && content.social.length > 0 && (
            <FooterSocial>
              <SocialTitle>
                Siga-nos
              </SocialTitle>
              
              <SocialLinks>
                {content.social.map((social, index) => (
                  <SocialLink
                    key={index}
                    onClick={() => handleNavigation(social.url, true)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        handleNavigation(social.url, true);
                      }
                    }}
                    aria-label={`Visitar ${social.platform}`}
                    title={social.platform}
                  >
                    {getIcon(social.icon)}
                  </SocialLink>
                ))}
              </SocialLinks>
            </FooterSocial>
          )}
        </FooterContent>
        
        {/* Rodapé inferior com copyright */}
        <FooterBottom>
          <FooterCopyright>
            {content.copyright}
          </FooterCopyright>
        </FooterBottom>
      </FooterContainer>
    </StyledFooter>
  );
}

export default Footer;

