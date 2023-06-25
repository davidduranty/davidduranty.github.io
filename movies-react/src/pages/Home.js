import React from 'react';
import Header from '../components/Header';



const Home = () => {
    return (
        <div>
            <Header /> 
            <div className="input-container">
                <input type="text" placeholder="Entrez le titre d'un film" />
                <button className='btn'>Rechercher</button>
            </div>
            <div className="top-flop">
                <button className='btn1'>Top &#8593;</button>
                <button className='btn1'>Flop &#8595;</button>
            </div>
        </div>
    );
};

export default Home;