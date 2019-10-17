import React from 'react';
import styled from 'styled-components';

const TextareaPrimary = styled.textarea`
  height: 100px;
  width: 300px;
  padding: 12px 20px;
  margin: 8px 10px 0 0;
`;

const Textarea = props => {
  return <TextareaPrimary {...props}></TextareaPrimary>;
};

export default Textarea;
