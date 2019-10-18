import React from 'react';
import styled from 'styled-components';

const CardItem = styled.li`
  border-top: 1px solid var(--light-gray);
  margin: 0 0 10px 0;
  padding: 5px 20px 5px 20px;

  a {
    text-decoration: none;
    color: inherit;

    :hover {
      text-decoration: underline;
    }
  }
`;

const Card = props => {
  return <CardItem {...props}></CardItem>;
};

export default Card;
