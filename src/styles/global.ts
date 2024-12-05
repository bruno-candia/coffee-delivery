import { createGlobalStyle } from 'styled-components';
import { mixins } from './mixins'

export const GlobalStyle = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }


  body {
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors['base-text']};
    -webkit-font-smoothing: antialiased;
  }


  :focus {
    outline: none;
    box-shadow: transparent;
  }

    body, input, textarea, button {
      ${mixins.fonts.textM};
    }
 `;