import React from 'react';
import { Link } from '@reach/router';
import no_img from '../assets/images/no_img.png';
import DesktopMenu from './DesktopMenu';
import HamburgerIcon from './HamburgerIcon';
import styled from 'styled-components';

const HeaderStyled = styled.header`
  background-color: black;
  color: white;

  a {
    text-decoration: none;
    color: inherit;

    :hover {
      text-decoration: underline;
    }
  }
`;

const UserImg = styled.img`
  max-width: 40px;
  height: auto;
`;

const Header = props => {
  return (
    <HeaderStyled className="header">
      <div className="header-current-user-info">
        <div className="header-current-user-info-wrapper">
          <Link to={`/change-user`}>Change User</Link>
          <span>{props.loggedInUser.username}</span>
          <UserImg
            src={props.loggedInUser.avatar_url}
            onError={e => {
              e.target.onerror = null;
              e.target.src = no_img;
            }}
            alt="user avatar"
          />
        </div>
      </div>
      <div className="header-title">
        <h1>NC NEWS</h1>
      </div>
      <nav className="header-nav">
        <DesktopMenu />
        <HamburgerIcon toggleMobileMenu={props.toggleMobileMenu} />
      </nav>
    </HeaderStyled>
  );
};

export default Header;
