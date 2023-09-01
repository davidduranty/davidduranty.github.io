import React from "react";
import { NavLink } from "react-router-dom";

const Accessoires = () => {
  return (
    <div className="boxContainer">
      <div className="boxContent">
        <ul className="content">
          <h1>Théières</h1>
          <NavLink>
            <li>Fonte de Chine</li>
          </NavLink>
          <NavLink>
            <li>Fonte du Japon</li>
          </NavLink>
          <NavLink>
            <li>Porcelaine</li>
          </NavLink>
          <NavLink>
            <li>Verre</li>
          </NavLink>
          <NavLink>
            <li className="bold">Toutes nos théières</li>
          </NavLink>
        </ul>
        <ul className="content">
          <h1>Bols, tasses, autres</h1>
          <NavLink>
            <li>Bols</li>
          </NavLink>
          <NavLink>
            <li>Tisanières</li>
          </NavLink>
          <NavLink>
            <li>Tasses</li>
          </NavLink>
          <NavLink>
            <li>Mugs</li>
          </NavLink>
          <NavLink>
            <li>Bouteilles isothermes</li>
          </NavLink>
          <NavLink>
            <li className="bold">Tous les accessoires pour la dégustation</li>
          </NavLink>
        </ul>
        <ul className="content">
          <h1>Boîtes à thé</h1>
          <NavLink>
            <li>Boîtes vides décorées</li>
          </NavLink>
          <NavLink>
            <li>Boîtes Dammann Frères</li>
          </NavLink>
          <NavLink>
            <li className="bold">Toutes nos boîtes à thé</li>
          </NavLink>
        </ul>
        <ul className="content">
          <h1>Accessoires de préparation</h1>
          <NavLink>
            <li>Cuillères et boules à thé</li>
          </NavLink>
          <NavLink>
            <li>Préparation du thé</li>
          </NavLink>
          <NavLink>
            <li>Collection maison</li>
          </NavLink>
          <NavLink>
            <li>Autres accessoires de préparation</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Accessoires;
