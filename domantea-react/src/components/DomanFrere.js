import React from "react";
import { NavLink } from "react-router-dom";

const DomanFrere = () => {
  return (
    <div className="boxContainer">
      <div className="boxContent contentDoman">
        <ul className="content">
          <h1>DOMAN Frères</h1>
          <NavLink>
            <li>Notre histoire</li>
          </NavLink>
          <NavLink>
            <li>Nos métiers</li>
          </NavLink>
          <NavLink>
            <li>Notre savoir faire</li>
          </NavLink>
          <NavLink>
            <li>Art de la dégustation</li>
          </NavLink>
        </ul>
        <ul className="content">
          <h1>Nos engagements sociétaux</h1>
          <NavLink>
            <li>Notre raison d'être et société à mission</li>
          </NavLink>
          <NavLink>
            <li>Notre charte éthique</li>
          </NavLink>
          <NavLink>
            <li>Nos engagements</li>
          </NavLink>
          <NavLink>
            <li>Notre sourcing</li>
          </NavLink>
        </ul>
        <ul className="content">
          <h1>Carrières</h1>
          <NavLink>
            <li>Travailler chez DAMMANN Frères</li>
          </NavLink>
          <NavLink>
            <li>Nos offres</li>
          </NavLink>
          <NavLink>
            <li>Devenir franchisé</li>
          </NavLink>
        </ul>
        <ul className="content">
          <h1>Éditos</h1>
          <NavLink>
            <li>A la une</li>
          </NavLink>
          <NavLink>
            <li>Dernières infos produits</li>
          </NavLink>
          <NavLink>
            <li>Cultivons nos liens</li>
          </NavLink>
          <NavLink>
            <li>L’essentiel sur nos thés...</li>
          </NavLink>
          <NavLink>
            <li>... et sur nos infusions</li>
          </NavLink>
          <NavLink>
            <li>DAMMANN Frères en cuisine</li>
          </NavLink>
          <NavLink>
            <li className="bold">Tous nos articles</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default DomanFrere;
