import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="navigation">
        <ul>
          <NavLink to="/">
            <li>ACCUEIL</li>
          </NavLink>
          <NavLink to="/favorite">
            <li>COUP DE COEUR</li>
          </NavLink>
        </ul>
          </div>
          <div className="title">
              <h1>React Movies</h1>
          </div>
    </div>
  );
};

export default Header;
