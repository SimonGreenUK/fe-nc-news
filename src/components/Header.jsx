import React from 'react';
import { Link } from '@reach/router';
import user_default from '../assets/images/user_default.jpg';
import DesktopMenu from './DesktopMenu';
import HamburgerIcon from './HamburgerIcon';
import styled from 'styled-components';

const HeaderStyled = styled.header`
  grid-area: header;
  background-color: black;
  color: white;
  min-height: 205px;

  a {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
  }
`;

const HeaderUserInfoWrapper = styled.div`
  border-bottom: 1px solid #a7a6a6;
  display: flex;
  justify-content: flex-end;
  padding: 10px 1rem 10px 1rem;
`;

const HeaderUserInfo = styled.div`
  display: flex;
  min-width: 275px;
  justify-content: space-around;
  align-items: center;
`;

const HeaderTitleWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const HeaderNav = styled.nav`
  display: flex;
  justify-content: center;
  padding: 0 0.5rem 0 0.5rem;
`;

const ChangeUserLink = styled(Link)`
  :hover {
    text-decoration: underline;
  }
`;

const UserImg = styled.img`
  max-width: 40px;
  height: auto;
`;

const Header = props => {
  return (
    <HeaderStyled className="header">
      <HeaderUserInfoWrapper>
        <HeaderUserInfo>
          <ChangeUserLink to={`/change-user`}>Change User</ChangeUserLink>
          <span>{props.loggedInUser.username}</span>
          <UserImg
            src={props.loggedInUser.avatar_url}
            onError={e => {
              e.target.onerror = null;
              e.target.src = user_default;
            }}
            alt="user avatar"
          />
        </HeaderUserInfo>
      </HeaderUserInfoWrapper>
      <HeaderTitleWrapper>
        <h1>NC NEWS</h1>
      </HeaderTitleWrapper>
      <HeaderNav>
        <DesktopMenu />
        <HamburgerIcon toggleMobileMenu={props.toggleMobileMenu} />
      </HeaderNav>
    </HeaderStyled>
  );
};

export default Header;
