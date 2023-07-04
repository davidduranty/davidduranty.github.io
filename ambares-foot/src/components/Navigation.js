import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <div className="nav-left">
        <NavLink to="/">
          <li>Accueil</li>
        </NavLink>
        <NavLink to="/team">
          <li>Equipes</li>
        </NavLink>
      </div>
      <div className="nav-right">
        <NavLink to="/photo">
          <li>Photo</li>
        </NavLink>
        <NavLink to="/evenement">
          <li>Evènement</li>
        </NavLink>
      </div>
    </div>
  );
};

export default Navigation;
