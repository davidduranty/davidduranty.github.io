import React from 'react';

const SelectionTea = ({ tea }) => {
    
    return (
        <div className='card-container'>
            <img  src={tea.img} alt={"image" + tea.name} />
            <h1>{tea.name}</h1>
            <h2>{ tea.content}</h2>
            <p>{ tea.price.toFixed(2)} / les 100 G</p>
        </div>
    );
};

export default SelectionTea;