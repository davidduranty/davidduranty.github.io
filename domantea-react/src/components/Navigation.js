import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import Icons from "./Icons";
import Language from "./Language";

const Navigation = () => {
  return (
    <div className="navigation-container">
      <Logo/>
      <ul>
        <NavLink to="/THES & INFUSIONS">
          <li>THÉS & INFUSIONS</li>
        </NavLink>
        <NavLink to="/BOITES & SACHETS">
          <li>BOITES & SACHETS</li>
        </NavLink>
        <NavLink to="/COFFRETS & CADEAUX">
          <li>COFFRETS & CADEAUX</li>
        </NavLink>
        <NavLink to="/ACCESSOIRES">
          <li>ACCESSOIRES</li>
        </NavLink>
        <NavLink to="/GOURMANDISES">
          <li>GOURMANDISES</li>
        </NavLink>
        <NavLink to="/FAMILLE DOMAN">
          <li>FAMILLE DOMAN</li>
        </NavLink>
      </ul>
      <Language/>
      <Icons/>
    </div>
  );
};

export default Navigation;
