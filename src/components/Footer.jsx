import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  grid-area: footer;
  border: 1px solid lightgray;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--black);
  color: white;

  a {
    text-decoration: none;
    color: inherit;

    :hover {
      color: var(--turquoise-main);
      text-decoration: underline;
    }
  }
`;

const Footer = () => {
  return (
    <StyledFooter className="footer">
      <p>
        Created by{' '}
        <a
          href="https://www.simongreen.dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Simon Green
        </a>
      </p>
    </StyledFooter>
  );
};

export default Footer;
