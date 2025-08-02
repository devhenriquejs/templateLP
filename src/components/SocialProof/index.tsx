/**
 * COMPONENTE SOCIAL PROOF
 * 
 * Seção que apresenta depoimentos de clientes e estatísticas
 * para construir credibilidade e confiança.
 * 
 * Funcionalidades:
 * - Depoimentos configuráveis
 * - Estatísticas destacadas
 * - Avaliações com estrelas
 * - Layout responsivo
 * - Animações suaves
 */


import { Star, Quote } from 'lucide-react';

// Importa tipos e estilos
import type { ContentConfig } from '../../types';
import {
  StyledSection,
  SectionContainer,
  SectionTitle,
  SectionSubtitle,
  TestimonialsContainer,
  TestimonialCard,
  TestimonialContent,
  TestimonialQuote,
  TestimonialAuthor,
  AuthorAvatar,
  AuthorInfo,
  AuthorName,
  AuthorRole,
  AuthorCompany,
  TestimonialRating,
  StatsContainer,
  StatCard,
  StatValue,
  StatLabel,
  TrustSeal,
  TrustSealIcon,
  TrustSealText
} from './styles';

/**
 * Props do componente SocialProof
 */
interface SocialProofProps {
  content: ContentConfig['socialProof'];
}

/**
 * Componente para renderizar estrelas de avaliação
 */
const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  return (
    <TestimonialRating>
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          size={16}
          fill={index < rating ? '#F59E0B' : 'none'}
          color={index < rating ? '#F59E0B' : '#D1D5DB'}
        />
      ))}
    </TestimonialRating>
  );
};

/**
 * Componente SocialProof
 * 
 * @param content - Configuração de conteúdo da prova social
 */
function SocialProof({ content }: SocialProofProps) {
  return (
    <StyledSection id="social-proof">
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
        
        {/* Container dos depoimentos */}
        <TestimonialsContainer>
          {content.testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index}
              className="animate-fade-in"
              $isHighlighted={index === 0}
            >
              <TestimonialContent>
                {/* Ícone de aspas */}
                <TestimonialQuote>
                  <Quote size={24} />
                </TestimonialQuote>
                
                {/* Conteúdo do depoimento */}
                <p>{testimonial.content}</p>
                
                {/* Avaliação com estrelas */}
                {testimonial.rating && (
                  <StarRating rating={testimonial.rating} />
                )}
              </TestimonialContent>
              
              {/* Informações do autor */}
              <TestimonialAuthor>
                {/* Avatar do autor */}
                <AuthorAvatar>
                  {testimonial.avatar ? (
                    <img 
                      src={testimonial.avatar} 
                      alt={`Foto de ${testimonial.name}`}
                      loading="lazy"
                    />
                  ) : (
                    <div>{testimonial.name.charAt(0)}</div>
                  )}
                </AuthorAvatar>
                
                {/* Informações textuais */}
                <AuthorInfo>
                  <AuthorName>{testimonial.name}</AuthorName>
                  <AuthorRole>{testimonial.role}</AuthorRole>
                  {testimonial.company && (
                    <AuthorCompany>{testimonial.company}</AuthorCompany>
                  )}
                </AuthorInfo>
              </TestimonialAuthor>
            </TestimonialCard>
          ))}
        </TestimonialsContainer>
        
        {/* Estatísticas (se disponíveis) */}
        {content.stats && content.stats.length > 0 && (
          <StatsContainer className="animate-fade-in">
            {content.stats.map((stat, index) => (
              <StatCard key={index}>
                <StatValue>{stat.value}</StatValue>
                <StatLabel>{stat.label}</StatLabel>
              </StatCard>
            ))}
          </StatsContainer>
        )}
        
        {/* Selo de confiança */}
        <TrustSeal className="animate-scale-in">
          <TrustSealIcon>
            <Star size={24} fill="#F59E0B" color="#F59E0B" />
          </TrustSealIcon>
          <TrustSealText>
            Junte-se a milhares de clientes satisfeitos
          </TrustSealText>
        </TrustSeal>
      </SectionContainer>
    </StyledSection>
  );
}

export default SocialProof;

