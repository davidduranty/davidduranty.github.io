import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="navigation">
            <ul>
                <NavLink to="/">
                    <li>Accueil</li>
                </NavLink>
                <NavLink to="/team">
                    <li>Equipes</li>
                </NavLink>
                <NavLink to="/actuality">
                    <li>Actualités</li>
                </NavLink>
                <NavLink to="/results">
                    <li>Résultats</li>
                </NavLink>
                <NavLink to="/photos">
                    <li>Photos</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navigation;