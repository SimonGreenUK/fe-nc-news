import React from 'react';
import styled from 'styled-components';

const CardItem = styled.li`
  /* display: grid;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  grid-gap: 1.5rem; */
  /* border-radius: 5px; */
  border-top: 1px solid lightgray;
  border-bottom: 1px solid lightgray;
  margin: 0 0 10px 0;
  padding: 5px 20px 5px 20px;
  /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.2s;
  :hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);
  } */
`;

const Card = props => {
  return <CardItem {...props}></CardItem>;
};

export default Card;
