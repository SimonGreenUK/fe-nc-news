import React from 'react';
import styled from 'styled-components';

const TextareaPrimary = styled.textarea`
  height: 100px;
  width: 300px;
  padding: 12px 10px;
  margin: 8px 0 8px 0;
  font-family: inherit;
  border: 2px solid var(--light-gray);
  transition: border 0.3s ease;
  :hover {
    border: 2px solid var(--dark-gray);
  }
  border-radius: 2px;
  :required {
    box-shadow: none;
  }
`;

const Textarea = props => {
  return <TextareaPrimary {...props}></TextareaPrimary>;
};

export default Textarea;
