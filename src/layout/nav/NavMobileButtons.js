import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import ScrollspyMobile from 'components/scrollspy/ScrollspyMobile';



const NavMobileButtons = ({showLinks,setShowLink}) => {

    return (
        <>
            <div className="mobile-buttons-container" onClick={()=>setShowLink(!showLinks)}>
                <CsLineIcons icon="menu" className="text-white"/>
            </div>

        </>
    )
        ;
};
export default React.memo(NavMobileButtons);
