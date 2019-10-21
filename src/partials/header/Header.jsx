import React from 'react';
import { Link } from '@reach/router';
import user_default from '../../assets/images/user_default.jpg';
import DesktopMenu from './DesktopMenu';
import HamburgerIcon from './HamburgerIcon';
import styled from 'styled-components';

const HeaderStyled = styled.header`
  grid-area: header;
  background-color: var(--black);
  color: white;
  min-height: 160px;

  a {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
  }
`;

const HeaderUserInfoWrapper = styled.div`
  border-bottom: 1px solid var(--turquoise-main);
  display: flex;
  justify-content: flex-end;
  padding: 10px 1rem 10px 1rem;
  min-height: 80px;
`;

const HeaderUserInfo = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.85rem;
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
  margin-left: 5px;
  display: flex;
  align-items: center;
  :hover {
    color: var(--turquoise-main);
    text-decoration: underline;
  }
`;

const UserImg = styled.img`
  max-width: 40px;
  height: auto;
  border-radius: 50%;
  margin-left: 10px;
`;

const LoggedInAs = styled.span`
  color: var(--light-gray);
`;

const HeaderTitleLink = styled(Link)`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:300&display=swap');
  font-family: 'Montserrat', sans-serif;
  color: inherit;
  text-transform: uppercase;
  text-decoration: none;
  font-size: 1.75rem;
`;

const Header = props => {
  return (
    <HeaderStyled className="header">
      <HeaderUserInfoWrapper>
        <HamburgerIcon toggleMobileMenu={props.toggleMobileMenu} />
        <HeaderUserInfo>
          <LoggedInAs>Logged in as:</LoggedInAs>
          <ChangeUserLink to={`/change-user`}>
            {props.loggedInUser.username}
            <UserImg
              src={props.loggedInUser.avatar_url}
              onError={e => {
                e.target.onerror = null;
                e.target.src = user_default;
              }}
              alt="user avatar"
            />
          </ChangeUserLink>
        </HeaderUserInfo>
      </HeaderUserInfoWrapper>
      <HeaderTitleWrapper>
        <HeaderTitleLink to={'/'}>
          <h1>NC News</h1>
        </HeaderTitleLink>
      </HeaderTitleWrapper>
      <HeaderNav>
        <DesktopMenu />
      </HeaderNav>
    </HeaderStyled>
  );
};

export default Header;
