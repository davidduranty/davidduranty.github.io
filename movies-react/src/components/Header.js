import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="navigation">
        <ul>
          <li>
            <NavLink
              to="/"
              className={(nav) => (nav.isActive ? "nav-active" : "")}
            >
              ACCUEIL
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/favorite"
              className={(nav) => (nav.isActive ? "nav-active" : "")}
            >
              COUPS DE COEUR
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="title">
        <h1>React Movies</h1>
      </div>
    </div>
  );
};

export default Header;
