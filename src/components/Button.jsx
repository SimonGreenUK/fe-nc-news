import React from 'react';
import styled from 'styled-components';

const ButtonPrimary = styled.button`
  font-size: 0.5rem;
  font-family: inherit;
  font-weight: 900;
  border: 1px solid var(--turquoise-main);
  border-radius: 2rem;
  text-transform: uppercase;
  width: 7rem;
  height: 2rem;
  margin: 5px;
  transition: all 0.3s ease;

  :hover {
    background-color: var(--turquoise-main);
    color: white;
    cursor: pointer;
  }
`;

const Button = props => {
  return <ButtonPrimary {...props}></ButtonPrimary>;
};

export default Button;
