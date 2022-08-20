import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';

import NavUserMenu from './NavUserMenu';
import MainMenu from './main-menu/MainMenu';
import NavLogo from './NavLogo';
import NavMobileButtons from './NavMobileButtons';


const Nav = () => {



  return (
    <div id="nav" className="nav-container d-flex">
      <div
        className="nav-content d-flex"
      >
        <NavLogo />
        {/*<NavLanguageSwitcher />*/}
        <NavUserMenu />
        {/*<NavIconMenu />*/}
        <MainMenu />

        <NavMobileButtons />
      </div>
      <div className="nav-shadow" />

    </div>
  );
};
export default React.memo(Nav);
