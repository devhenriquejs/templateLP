/**
 * DECLARAÇÃO DE TIPOS PARA STYLED-COMPONENTS
 * 
 * Este arquivo estende o DefaultTheme do styled-components
 * com os tipos do nosso tema personalizado.
 */

import 'styled-components';
import { Theme } from './config/theme';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

