import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import Icons from "./Icons";
import Language from "./Language";
import TeaInfusion from "./TeaInfusion";
import BoiteSachets from "./BoiteSachets";
import CoffretKdo from "./CoffretKdo";
import Accessoires from "./Accessoires";
import DomanFrere from "./DomanFrere";

const Navigation = () => {
  const [overTeaIfusion, setOverTeaIfusion] = useState(false);
  const [overBoitesSachets, setOverBoitesSachets] = useState(false);
  const [overCoffretKdo, setOverCoffretKdo] = useState(false);
  const [overAccessoires, setOverAccessoires] = useState(false);
  const [overDoman, setOverDoman] = useState(false);

  return (
    <div className="navigation-container">
      <Logo />
      <ul className="ul">
        <NavLink>
          <li className="li" onClick={() => setOverTeaIfusion((prev) => !prev)}>
            THÉS & INFUSIONS
          </li>
        </NavLink>
        <NavLink>
          <li
            className="li"
            onClick={() => setOverBoitesSachets((prev) => !prev)}
          >
            BOITES & SACHETS
          </li>
        </NavLink>
        <NavLink>
          <li className="li" onClick={() => setOverCoffretKdo((prev) => !prev)}>
            COFFRETS & CADEAUX
          </li>
        </NavLink>
        <NavLink>
          <li
            className="li"
            onClick={() => setOverAccessoires((prev) => !prev)}
          >
            ACCESSOIRES
          </li>
        </NavLink>
        <NavLink to="/gourmandises">
          <li className="li">GOURMANDISES</li>
        </NavLink>
        <NavLink>
          <li className="li" onClick={() => setOverDoman((prev) => !prev)}>
            FAMILLE DOMAN
          </li>
        </NavLink>
      </ul>
      <Language />
      <Icons />
      {overTeaIfusion && <TeaInfusion />}
      {overBoitesSachets && <BoiteSachets />}
      {overCoffretKdo && <CoffretKdo />}
      {overAccessoires && <Accessoires />}
      {overDoman && <DomanFrere />}
    </div>
  );
};

export default Navigation;
