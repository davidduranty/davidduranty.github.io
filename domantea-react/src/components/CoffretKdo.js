import React from 'react';
import { NavLink } from 'react-router-dom';

const CoffretKdo = () => {
    return (
        <div className='boxContainer'>
            <div className="boxContent contentCoffret">
                <ul className='content'>
                        <h1>Coffrets & cadeaux</h1>
                    <NavLink>
                        <li>Coffrets cadeaux thés en boîtes</li>
                    </NavLink>
                    <NavLink>
                        <li>Coffrets cadeaux thés en sachets</li>
                    </NavLink>
                    <NavLink>
                        <li>Coffrets vides</li>
                    </NavLink>
                    <NavLink>
                        <li>Petites attentions</li>
                    </NavLink>
                    <NavLink>
                        <li className="bold">Tous les coffrets et cadeaux</li>
                    </NavLink>
                </ul>
                <ul className='content'>
                    <h1>Séléctions</h1>
                    <NavLink>
                        <li>Cadeaux pour un amateur</li>
                    </NavLink>
                    <NavLink>
                        <li>Cadeaux pour un connaisseur</li>
                    </NavLink>
                    <NavLink>
                        <li>Cadeaux coup de coeur...</li>
                    </NavLink>
                    <NavLink>
                        <li>Cadeaux incontournables</li>
                    </NavLink>
                </ul>
            </div>
        </div>
    );
};

export default CoffretKdo;