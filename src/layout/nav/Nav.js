import React, {useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import classNames from 'classnames';

import NavUserMenu from './NavUserMenu';
import MainMenu from './main-menu/MainMenu';
import NavTitle from './NavTitle';
import NavMobileButtons from './NavMobileButtons';
import {NavPicture} from "./NavPicture";


const Nav = () => {
    const [showLinks, setShowLinks] = useState(false);

    return (
        <>
            {/*<NavSmallScreen/>*/}
            <div id="nav" className="nav-container d-flex">
                <div className="nav-content d-flex">
                    <NavTitle/>
                    <NavPicture/>
                    <MainMenu/>
                    <NavMobileButtons showLinks={showLinks} setShowLink={setShowLinks}/>
                </div>
                <div className="nav-shadow"/>
            </div>
            <div className={showLinks?"mobile-links w-100 show": "mobile-links w-100"}>
                <div className="mobile-links-item">Hello</div>
            </div>
        </>

    );
};
export default React.memo(Nav);
