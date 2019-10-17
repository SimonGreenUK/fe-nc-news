import React from 'react';
import styled from 'styled-components';

const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
`;

const Loading = () => {
  return (
    <LoadingWrapper>
      <h3>
        <strong>LOADING...</strong>
      </h3>
    </LoadingWrapper>
  );
};

export default Loading;
