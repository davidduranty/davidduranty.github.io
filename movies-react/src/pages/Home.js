import React from 'react';
import Header from '../components/Header';
import Card from '../components/Card';




const Home = () => {
    return (
        <div>
            <Header /> 
            <div className="input-container">
                <input type="text" placeholder="Entrez le titre d'un film" />
                <button id='btn'>Rechercher</button>
            </div>
            <div className="top-flop">
                <button >Top &#8593;</button>
                <button >Flop &#8595;</button>
            </div>
            <Card/>
        </div>
    );
};

export default Home;