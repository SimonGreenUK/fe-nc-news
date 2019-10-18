import React from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';
import homepageimg from '../assets/images/homepageimg.jpg';

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
  color: black;
`;

const HomeImage = styled.img`
  max-width: 100%;
  height: auto;
`;

const HomePageLink = styled(Link)`
  color: inherit;
`;

const HomePage = () => {
  return (
    <HomeWrapper>
      <HomeImage src={homepageimg} alt="city scape" />
      <p>
        Northcoders News is a social news aggregation, web content rating, and
        discussion website.
      </p>
      <HomePageLink to={'/articles'}>View some articles</HomePageLink>
    </HomeWrapper>
  );
};

export default HomePage;
