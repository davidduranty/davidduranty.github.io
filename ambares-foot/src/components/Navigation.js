import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <div className="nav-left">
        <NavLink to="/">
          <li style={{ style: "--i: 6" }}>Accueil</li>
        </NavLink>
        <NavLink to="/team">
          <li style={{ style: "--i: 7" }}>Equipes</li>
        </NavLink>
      </div>
      <div className="nav-right">
        <NavLink to="/photo">
          <li style={{ style: "--i: 8" }}>Galerie</li>
        </NavLink>
        <NavLink to="/evenement">
          <li style={{ style: "--i: 9" }}>Evènement</li>
        </NavLink>
      </div>
    </div>
  );
};

export default Navigation;
