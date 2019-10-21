import React from 'react';
import styled from 'styled-components';
import homepageimg from '../assets/images/homepageimg.jpg';
import LinkStyled from '../components/LinkStyled';

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
`;

const HomeImage = styled.img`
  max-width: 100%;
  height: auto;
`;

const HomePage = () => {
  return (
    <HomeWrapper>
      <HomeImage src={homepageimg} alt="city scape" />
      <p>
        Northcoders News is a social news aggregation, web content rating, and
        discussion website.
      </p>
      <LinkStyled to={'/articles'}>View some articles</LinkStyled>
    </HomeWrapper>
  );
};

export default HomePage;
