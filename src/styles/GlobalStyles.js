import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
  }

  body {
    background-color: #2f2f2f;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  input, button {
    font-family: inherit;
  }
`;

export default GlobalStyles;
