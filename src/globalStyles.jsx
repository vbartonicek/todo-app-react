import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    background: #f0f0f4;
    padding: 1rem;
    font-family: Roboto,sans-serif;
    color: #212121;
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyles;
