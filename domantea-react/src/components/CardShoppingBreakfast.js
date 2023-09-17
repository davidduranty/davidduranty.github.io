import React from 'react';

const CardShoppingBreakfast = ({breakfast}) => {
  return (
    <div className='card-container'>
      <li key={breakfast.id}>
        <img src="breakfast.img" alt={"Photo" + breakfast.name} />
        <h1>{breakfast.name}</h1>
        <h2>{breakfast.content}</h2>
        <p>{ breakfast.price.toFixed(2)}</p>
      </li>
    </div>
  );
};

export default CardShoppingBreakfast;

