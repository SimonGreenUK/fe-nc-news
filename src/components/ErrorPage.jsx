import React from 'react';
import styled from 'styled-components';

const ErrorWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
`;

const ErrorPage = err => {
  const msg = window.history.state
    ? window.history.state.msg
    : 'page not found';
  return (
    <ErrorWrapper>
      <h2>Error: {msg}</h2>
    </ErrorWrapper>
  );
};

export default ErrorPage;
