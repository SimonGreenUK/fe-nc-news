import React from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1.5;

    --turquoise-main: #008e9f;
    --dark-gray: #324b4f;
    --light-gray: #95b0b5;
    --pale-purple: #8a78ad;
    --dark-purple: #574778;
    --light-gray-text: #5a5a5a
    --black: #101010;
    
    color: var(--black);
  }

  @media all and (max-width: 750px) {
  .desktop-menu {
    visibility: hidden;
    height: 0;
  }
}
`;

const GlobalStyles = () => {
  return <GlobalStyle />;
};

export default GlobalStyles;
