import React from 'react';
import { NavLink } from 'react-router-dom';

const BoiteSachets = () => {
    return (
        <div className='boxContainer'>
            <div className="boxContent">
                <ul className='content'>
                    <h1>Boîtes métal</h1>
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
                        <li>Thé Oolong</li>
                    </NavLink>
                    <NavLink>
                        <li>Thé sombre</li>
                    </NavLink>
                    <NavLink>
                        <li>Thé jaune</li>
                    </NavLink>
                    <NavLink>
                        <li>Tisane</li>
                    </NavLink>
                    <NavLink>
                        <li>Rooibos</li>
                    </NavLink>
                    <NavLink>
                        <li>Carcadet</li>
                    </NavLink>
                    <NavLink>
                        <li>Maté</li>
                    </NavLink>
                    <NavLink>
                        <li className="bold">Toutes nos boîtes de thés et infusions</li>
                    </NavLink>
                </ul>
                <ul className='content'>
                    <h1>Boîtes sachets</h1>
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
                        <li>Thé Oolong</li>
                    </NavLink>
                    <NavLink>
                        <li>Tisane</li>
                    </NavLink>
                    <NavLink>
                        <li>Rooibos</li>
                    </NavLink>
                    <NavLink>
                        <li>Carcadet</li>
                    </NavLink>
                    <NavLink>
                        <li className="bold">Tous les thés et infusions en sachets</li>
                    </NavLink>
                </ul>
                <ul className='content'>
                        <h1>Boîtes sachets enveloppés</h1>
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
                        <li>Thé Oolong</li>
                    </NavLink>
                    <NavLink>
                        <li>Thé sombre</li>
                    </NavLink>
                    <NavLink>
                        <li>Tisane</li>
                    </NavLink>
                    <NavLink>
                        <li>Rooibos</li>
                    </NavLink>
                    <NavLink>
                        <li>Carcadet</li>
                    </NavLink>
                    <NavLink>
                        <li className="bold">Tous les thés et infusions en sachets enveloppés</li>
                    </NavLink>
                </ul>
            </div>
        </div>
    );
};

export default BoiteSachets;