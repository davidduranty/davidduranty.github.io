import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="navigation">
        <ul>
          <NavLink to="/" className={(nav) => (nav.isActive? "nav-active" : "") } >
            <li>ACCUEIL</li>
          </NavLink>
          <NavLink to="/favorite" className={(nav) => (nav.isActive? "nav-active" : "") }>
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
