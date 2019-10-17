import styled from 'styled-components';
import React from 'react';

const BurgerButton = styled.button`
  position: absolute;
  right: 5px;
  display: flex;
  visibility: hidden;
  flex-direction: column;
  align-items: center;
  justify-content: space - around;
  width: 4rem;
  height: 4rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  @media all and (max-width: 750px) {
    visibility: visible;
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
      <BurgerButton onClick={handleClick}>
        <BurgerBar />
        <BurgerBar />
        <BurgerBar />
      </BurgerButton>
    </>
  );
};

export default HamburgerIcon;
