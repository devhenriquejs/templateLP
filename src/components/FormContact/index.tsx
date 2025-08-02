/**
 * COMPONENTE FORM CONTACT
 * 
 * Formulário de contato configurável com validação e envio.
 * Inclui integração com webhooks e feedback visual.
 * 
 * Funcionalidades:
 * - Campos configuráveis via props
 * - Validação com Zod e React Hook Form
 * - Envio via webhook (Zapier, etc.)
 * - Feedback visual de sucesso/erro
 * - Design responsivo e acessível
 */

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Send, CheckCircle, AlertCircle, X } from 'lucide-react';

// Importa tipos e estilos
import type { ContentConfig } from '../../types';
import {
  StyledSection,
  SectionContainer,
  SectionTitle,
  SectionSubtitle,
  SectionDescription,
  ContactContent,
  ContactInfo,
  ContactInfoItem,
  ContactInfoIcon,
  ContactInfoText,
  FormContainer,
  ContactForm,
  FormGroup,
  FormLabel,
  FormInput,
  FormTextarea,
  FormError,
  SubmitButton,
  SubmitButtonIcon,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalIcon,
  ModalTitle,
  ModalMessage,
  ModalCloseButton
} from './styles';

/**
 * Props do componente FormContact
 */
interface FormContactProps {
  content: ContentConfig['contact'];
}

/**
 * Schema de validação dinâmico baseado na configuração
 */
const createValidationSchema = (fields: ContentConfig['contact']['form']['fields']) => {
  const schemaObject: any = {};
  
  fields.forEach(field => {
    let fieldSchema: any;
    
    switch (field.type) {
      case 'email':
        fieldSchema = z.string().email('E-mail inválido');
        break;
      case 'tel':
        fieldSchema = z.string().regex(/^\(\d{2}\)\s\d{4,5}-\d{4}$/, 'Telefone inválido');
        break;
      default:
        fieldSchema = z.string();
    }
    
    if (field.required) {
      fieldSchema = fieldSchema.min(1, `${field.label} é obrigatório`);
    } else {
      fieldSchema = fieldSchema.optional();
    }
    
    schemaObject[field.name] = fieldSchema;
  });
  
  return z.object(schemaObject);
};

/**
 * Componente de Modal de Feedback
 */
interface FeedbackModalProps {
  isOpen: boolean;
  type: 'success' | 'error';
  message: string;
  onClose: () => void;
}

const FeedbackModal: React.FC<FeedbackModalProps> = ({ 
  isOpen, 
  type, 
  message, 
  onClose 
}) => {
  if (!isOpen) return null;

  return (
    <Modal>
      <ModalOverlay onClick={onClose} />
      <ModalContent>
        <ModalHeader $type={type}>
          <ModalIcon>
            {type === 'success' ? (
              <CheckCircle size={24} />
            ) : (
              <AlertCircle size={24} />
            )}
          </ModalIcon>
          <ModalTitle>
            {type === 'success' ? 'Sucesso!' : 'Erro!'}
          </ModalTitle>
          <ModalCloseButton onClick={onClose}>
            <X size={20} />
          </ModalCloseButton>
        </ModalHeader>
        <ModalMessage>{message}</ModalMessage>
      </ModalContent>
    </Modal>
  );
};

/**
 * Componente FormContact
 * 
 * @param content - Configuração de conteúdo do formulário de contato
 */
function FormContact({ content }: FormContactProps) {
  // Estado para controle do modal
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    type: 'success' | 'error';
    message: string;
  }>({
    isOpen: false,
    type: 'success',
    message: ''
  });

  // Estado para controle do envio
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Criação do schema de validação
  const validationSchema = createValidationSchema(content.form.fields);

  // Configuração do React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: zodResolver(validationSchema)
  });

  /**
   * Função para lidar com o envio do formulário
   */
  const onSubmit = async (data: any) => {
    setIsSubmitting(true);

    try {
      // Aqui você pode configurar o endpoint do seu webhook
      // Por exemplo: Zapier, Make.com, ou sua própria API
      const webhookUrl = import.meta.env.VITE_WEBHOOK_URL || 'https://hooks.zapier.com/hooks/catch/YOUR_WEBHOOK_ID/';
      
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          timestamp: new Date().toISOString(),
          source: 'Landing Page Template'
        }),
      });

      if (response.ok) {
        setModalState({
          isOpen: true,
          type: 'success',
          message: content.form.successMessage
        });
        reset();
      } else {
        throw new Error(`HTTP ${response.status}`);
      }
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      setModalState({
        isOpen: true,
        type: 'error',
        message: content.form.errorMessage
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  /**
   * Função para fechar o modal
   */
  const closeModal = () => {
    setModalState(prev => ({ ...prev, isOpen: false }));
  };

  /**
   * Função para renderizar campo do formulário
   */
  const renderField = (field: ContentConfig['contact']['form']['fields'][0]) => {
    const error = errors[field.name];
    
    if (field.type === 'textarea') {
      return (
        <FormGroup key={field.name}>
          <FormLabel htmlFor={field.name}>
            {field.label}
            {field.required && <span aria-label="obrigatório"> *</span>}
          </FormLabel>
          <FormTextarea
            id={field.name}
            placeholder={field.placeholder}
            $hasError={!!error}
            {...register(field.name)}
            aria-describedby={error ? `${field.name}-error` : undefined}
          />
          {error && (
            <FormError id={`${field.name}-error`} role="alert">
              {String(error?.message || '')}
            </FormError>
          )}
        </FormGroup>
      );
    }

    return (
      <FormGroup key={field.name}>
        <FormLabel htmlFor={field.name}>
          {field.label}
          {field.required && <span aria-label="obrigatório"> *</span>}
        </FormLabel>
        <FormInput
          type={field.type}
          id={field.name}
          placeholder={field.placeholder}
          $hasError={!!error}
          {...register(field.name)}
          aria-describedby={error ? `${field.name}-error` : undefined}
        />
        {error && (
          <FormError id={`${field.name}-error`} role="alert">
            {String(error?.message || '')}
          </FormError>
        )}
      </FormGroup>
    );
  };

  return (
    <StyledSection id="contact">
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
        
        {/* Descrição da seção */}
        <SectionDescription className="animate-fade-in">
          {content.description}
        </SectionDescription>
        
        {/* Conteúdo principal */}
        <ContactContent>
          {/* Informações de contato */}
          <ContactInfo className="animate-slide-in-left">
            {content.info.email && (
              <ContactInfoItem>
                <ContactInfoIcon>
                  📧
                </ContactInfoIcon>
                <ContactInfoText>
                  <strong>E-mail:</strong><br />
                  <a href={`mailto:${content.info.email}`}>
                    {content.info.email}
                  </a>
                </ContactInfoText>
              </ContactInfoItem>
            )}
            
            {content.info.phone && (
              <ContactInfoItem>
                <ContactInfoIcon>
                  📞
                </ContactInfoIcon>
                <ContactInfoText>
                  <strong>Telefone:</strong><br />
                  <a href={`tel:${content.info.phone}`}>
                    {content.info.phone}
                  </a>
                </ContactInfoText>
              </ContactInfoItem>
            )}
            
            {content.info.address && (
              <ContactInfoItem>
                <ContactInfoIcon>
                  📍
                </ContactInfoIcon>
                <ContactInfoText>
                  <strong>Endereço:</strong><br />
                  {content.info.address}
                </ContactInfoText>
              </ContactInfoItem>
            )}
          </ContactInfo>
          
          {/* Formulário */}
          <FormContainer className="animate-slide-in-right">
            <ContactForm onSubmit={handleSubmit(onSubmit)} noValidate>
              {content.form.fields.map(renderField)}
              
              <SubmitButton
                type="submit"
                disabled={isSubmitting}
                aria-label={content.form.submitText}
              >
                {isSubmitting ? 'Enviando...' : content.form.submitText}
                <SubmitButtonIcon $isLoading={isSubmitting}>
                  <Send size={20} />
                </SubmitButtonIcon>
              </SubmitButton>
            </ContactForm>
          </FormContainer>
        </ContactContent>
        
        {/* Modal de feedback */}
        <FeedbackModal
          isOpen={modalState.isOpen}
          type={modalState.type}
          message={modalState.message}
          onClose={closeModal}
        />
      </SectionContainer>
    </StyledSection>
  );
}

export default FormContact;

