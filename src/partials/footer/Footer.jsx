import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  grid-area: footer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--black);
  color: white;
  font-size: 0.8rem;

  a {
    text-decoration: none;
    color: inherit;

    :hover {
      color: var(--turquoise-main);
      text-decoration: underline;
    }
  }
`;

const CreatedCredit = styled.p`
  margin: 0 0 0 0;
`;

const IconCredit = styled.p`
  margin: 0 0 0 0;
  color: #888888;
  font-size: 0.6rem;
`;

const Footer = () => {
  return (
    <StyledFooter className="footer">
      <CreatedCredit>
        Created by{' '}
        <a
          href="https://www.simongreen.dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Simon Green
        </a>
      </CreatedCredit>
      <IconCredit>
        Icons by{' '}
        <a
          href="https://fontawesome.com/license"
          target="_blank"
          rel="noopener noreferrer"
        >
          Font Awesome
        </a>
      </IconCredit>
    </StyledFooter>
  );
};

export default Footer;
