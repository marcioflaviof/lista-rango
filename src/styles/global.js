import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
   :root {
    --white: #FFFFFF;
    --gray-100: #FBFBFB;
    --gray-200: #E6E6E6;
    --gray-250: #989898;
    --gray-300: #404040;
    --gray-500: #00000029;
    --gray-700: #0000001A;
    --cyan: #009CA3;
    --blue-500: #2B0D61;
    --purple-100: #B5ABD4;
    --black: #000000
  }

  * {
    font-family: "Montserrat", sans-serif;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: 0;
  }

  h1, h2, h3, p {
    color: var(--gray-300);
  }

  button {
    cursor: pointer;
    background: none;
    border: none;
  }
`;

export { GlobalStyle };
