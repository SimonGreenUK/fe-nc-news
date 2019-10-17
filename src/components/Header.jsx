import React from 'react';
import { Link } from '@reach/router';
import no_img from '../assets/images/no_img.png';
import DesktopMenu from './DesktopMenu';
import HamburgerIcon from './HamburgerIcon';

const Header = props => {
  return (
    <header className="header">
      <div className="header-current-user-info">
        {/* <img
        src={props.loggedInUser.avatar_url}
        onError={e => {
          e.target.onerror = null;
          e.target.src = no_img;
        }}
        alt="user avatar"
      /> */}
        <span>USER IMG HERE - {props.loggedInUser.username}</span>
        <Link to={`/change-user`}>Change User</Link>
      </div>
      <div className="header-title">
        <h1>NC NEWS</h1>
      </div>
      <nav className="header-nav">
        <DesktopMenu />
        <HamburgerIcon toggleMobileMenu={props.toggleMobileMenu} />
      </nav>
    </header>
  );
};

export default Header;
