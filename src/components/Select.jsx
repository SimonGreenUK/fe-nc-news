import React from 'react';
import styled from 'styled-components';

const SelectSource = styled.select`
  padding: 8px 15px;
  margin: 8px 5px;
  border: 2px solid lightgray;
  border-radius: 6px;
  /* background-color: white; */
  /* color: gray; */
  text-transform: uppercase;
  font-family: inherit;
  border-radius: 4px;
  height: 32.5px;
  cursor: pointer;
  min-width: 100px;
  :hover {
    border: 2px solid gray;
  }
`;

const Select = props => {
  return <SelectSource {...props}> </SelectSource>;
};

export default Select;
