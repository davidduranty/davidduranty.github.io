import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import Icons from "./Icons";
import Language from "./Language";
import TeaInfusion from "./TeaInfusion";


const Navigation = () => {
  const [over, setOver] = useState(false)

  return (
    <div className="navigation-container">
      <Logo/>
      <ul className='ul'>
        <NavLink to="/THES & INFUSIONS">
          <li className="li" onClick={() => setOver((prev) => !prev)}>THÉS & INFUSIONS</li>           
        </NavLink>
        <NavLink to="/BOITES & SACHETS">
          <li className="li">BOITES & SACHETS</li>
        </NavLink>
        <NavLink to="/COFFRETS & CADEAUX">
          <li className="li">COFFRETS & CADEAUX</li>
        </NavLink>
        <NavLink to="/ACCESSOIRES">
          <li className="li">ACCESSOIRES</li>
        </NavLink>
        <NavLink to="/GOURMANDISES">
          <li className="li">GOURMANDISES</li>
        </NavLink>
        <NavLink to="/FAMILLE DOMAN">
          <li className="li">FAMILLE DOMAN</li>
        </NavLink>
      </ul>
      <Language/>
      <Icons />
      {
        over &&<TeaInfusion/>
      }
    </div>
  );
};

export default Navigation;
