import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import Icons from "./Icons";
import Language from "./Language";
import TeaInfusion from "./TeaInfusion";
import BoiteSachets from "./BoiteSachets";
import CoffretKdo from "./CoffretKdo";


const Navigation = () => {
  const [overTeaIfusion, setOverTeaIfusion] = useState(false)
  const [overBoitesSachets, setOverBoitesSachets] = useState(false)
  const [overCoffretKdo, setOverCoffretKdo] = useState(false)
  return (
    <div className="navigation-container">
      <Logo/>
      <ul className='ul'>
        <NavLink to="/THES & INFUSIONS">
          <li className="li" onClick={() => setOverTeaIfusion((prev) => !prev)}>THÉS & INFUSIONS</li>           
        </NavLink>
        <NavLink to="/BOITES & SACHETS">
          <li className="li" onClick={() =>  setOverBoitesSachets((prev) => !prev)}>BOITES & SACHETS</li>
        </NavLink>
        <NavLink to="/COFFRETS & CADEAUX">
          <li className="li" onClick={() => setOverCoffretKdo((prev) => !prev)}>COFFRETS & CADEAUX</li>
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
        overTeaIfusion &&<TeaInfusion/>
      }
      {
        overBoitesSachets && <BoiteSachets/>
      }
      {
        overCoffretKdo && <CoffretKdo/>
      }
    </div>
  );
};

export default Navigation;
