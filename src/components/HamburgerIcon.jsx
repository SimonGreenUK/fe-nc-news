import styled from 'styled-components';
import React from 'react';

const Burger = styled.div`
  color: white;
  display: none;
  cursor: pointer;
  z-index: 1;
  margin-left: auto;

  @media all and (max-width: 750px) {
    display: block;
  }
`;

const BurgerBar = styled.div`
  width: 35px;
  height: 3px;
  background-color: white;
  margin: 8px 0;
  transition: 0.3s;
`;

const HamburgerIcon = props => {
  const handleClick = () => {
    props.toggleMobileMenu();
  };
  return (
    <>
      <Burger onClick={handleClick}>
        <BurgerBar />
        <BurgerBar />
        <BurgerBar />
      </Burger>
    </>
  );
};

export default HamburgerIcon;
