import React from 'react';
import { Link } from '@reach/router';
import no_img from '../assets/images/no_img.png';
import DesktopNav from './DesktopNav';
import HamburgerIcon from './HamburgerIcon';

const Header = props => {
  return (
    <header className="header">
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
      <h1>NC NEWS</h1>
      <nav className="header-nav">
        <DesktopNav />
        <HamburgerIcon
          toggleMobileNav={props.toggleMobileNav}
          className="align-burger"
        />
      </nav>
    </header>
  );
};

export default Header;
