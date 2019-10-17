import React from 'react';
import styled from 'styled-components';

const TextInputPrimary = styled.input`
  height: 20px;
  padding: 12px 20px;
  margin: 8px 10px 0 0;
`;

const TextInput = props => {
  return <TextInputPrimary {...props}></TextInputPrimary>;
};

export default TextInput;
