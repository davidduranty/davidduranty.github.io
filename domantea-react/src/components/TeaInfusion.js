import React from "react";
import { NavLink } from "react-router-dom";

const TeaInfusion = () => {
  return (
    <div className="the-infusion-container">
      <div className="the-infusion-content">
        <ul className="type-de-the">
          <h1>Type de thé</h1>
          <NavLink>
            <li>Thé noir</li>
          </NavLink>
          <NavLink>
            <li>Thé vert</li>
          </NavLink>
          <NavLink>
            <li>Thé blanc</li>
          </NavLink>
          <NavLink>
            <li>Thé sombre</li>
          </NavLink>
          <NavLink>
            <li>Thé jaune</li>
          </NavLink>
          <NavLink>
            <li>Tous les thés</li>
          </NavLink>
        </ul>
        <ul className="type-infusion">
          <h1>Type d'infusion</h1>
          <NavLink>
            <li>Maté</li>
          </NavLink>
          <NavLink>
            <li>Tisane</li>
          </NavLink>
          <NavLink>
            <li>Carcadet</li>
          </NavLink>
          <NavLink>
            <li>Cacao</li>
          </NavLink>
          <NavLink>
            <li>Curcuma</li>
          </NavLink>
          <NavLink>
            <li>Rooibos</li>
          </NavLink>
          <NavLink>
            <li>Toutes les infusions</li>
          </NavLink>
        </ul>
        <ul className="aromatique">
          <h1>Familles aromatiques</h1>
          <NavLink>
            <li>Epicée/Boisée</li>
          </NavLink>
          <NavLink>
            <li>Fleurie</li>
          </NavLink>
          <NavLink>
            <li>Fruitée</li>
          </NavLink>
          <NavLink>
            <li>Fumée</li>
          </NavLink>
          <NavLink>
            <li>Gourmande</li>
          </NavLink>
          <NavLink>
            <li>Grillée</li>
          </NavLink>
          <NavLink>
            <li>Mentholée</li>
          </NavLink>
          <NavLink>
            <li>Sous-bois</li>
          </NavLink>
          <NavLink>
            <li>Végétale</li>
          </NavLink>
          <NavLink>
            <li>Animale</li>
          </NavLink>
          <NavLink>
            <li>Toutes les familles aromatiques</li>
          </NavLink>
        </ul>
        <ul className="origine">
          <h1>Origines</h1>
          <NavLink>
            <li>Afrique</li>
          </NavLink>
          <NavLink>
            <li>Chine</li>
          </NavLink>
          <NavLink>
            <li>Colombie</li>
          </NavLink>
          <NavLink>
            <li>Corée</li>
          </NavLink>
          <NavLink>
            <li>Inde</li>
          </NavLink>
          <NavLink>
            <li>Japon</li>
          </NavLink>
          <NavLink>
            <li>Népal</li>
          </NavLink>
          <NavLink>
            <li>Ceylan</li>
          </NavLink>
          <NavLink>
            <li>Taïwan</li>
          </NavLink>
          <NavLink>
            <li>Tous nos thés d'origine</li>
          </NavLink>
        </ul>
        <ul className="selection">
          <h1>Séléctions</h1>
          <NavLink>
            <li>Nos Grands crus</li>
          </NavLink>
          <NavLink>
            <li>Mélanges classiques</li>
          </NavLink>
          <NavLink>
            <li>Thés et infusions galcés</li>
          </NavLink>
          <NavLink>
            <li>Thés et infusion nature</li>
          </NavLink>
          <NavLink>
            <li>Thés et infusions aromatisés</li>
          </NavLink>
          <NavLink>
            <li>Thés enfleurés</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default TeaInfusion;
