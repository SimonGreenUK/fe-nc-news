import React from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
  color: black;
`;

const HomePageLink = styled(Link)`
  color: inherit;
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }
`;

const HomePage = () => {
  return (
    <HomeWrapper>
      <h2>Welcome to NC News</h2>
      <HomePageLink to={'/articles'}>View some articles</HomePageLink>
    </HomeWrapper>
  );
};

export default HomePage;
