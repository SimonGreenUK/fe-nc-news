import React from 'react';
import styled from 'styled-components';

const HomeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
`;

const HomePage = () => {
  return (
    <HomeWrapper>
      <h2>Welcome to NC News</h2>
    </HomeWrapper>
  );
};

export default HomePage;
