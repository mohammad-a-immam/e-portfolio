import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { DEFAULT_PATHS } from 'config.js';
import {DataContext} from "../../data/DataProvider";

const NavTitle = () => {
    const data = useContext(DataContext)
  return (
    <div className="logo position-relative">
      <Link to={DEFAULT_PATHS.APP}>
        {/*
          Logo can be added directly
          <img src="/img/logo/logo-white.svg" alt="logo" />
          Or added via css to provide different ones for different color themes
         */}
        {/*<div className="img" />*/}
          <div className="text-white" style={{fontWeight:"bolder", fontFamily:"Tahoma", fontSize: "20px"}}>
              {data.profile?.name}
          </div>
      {/*    <hr/>
          <div className="text-white text-semi-large">Software Solutions Architect</div>
          <div className="text-white text-semi-large">&</div>
          <div className="text-white text-medium">Full-Stack Software Engineer</div>*/}
      </Link>
    </div>
  );
};
export default React.memo(NavTitle);
