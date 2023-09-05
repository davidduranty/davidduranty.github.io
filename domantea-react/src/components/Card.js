import React from "react";

const Card = ({ tea }) => {
  return (
    <div className="card-container">
      <li key={tea.id}>
        <img src={tea.img} alt={"image" + tea.name} />
        <h1>{tea.name}</h1>
        <h2>{tea.content}</h2>
        <p>{tea.price.toFixed(2)} / les 100 G</p>
      </li>
    </div>
  );
};

export default Card;
