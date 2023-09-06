import React from "react";

const CardMoment = ({ moment }) => {
  return (
    <div className="card-container">
      <li>
        <img src={moment.img} alt={"Photo" + moment.name} />
        <h1>{moment.name}</h1>
        <h2>{moment.content}</h2>
        <div className="contenance">
          <p>{moment.price.toFixed(2)}</p>
          <h4>{moment.contenance}</h4>
        </div>
      </li>
    </div>
  );
};

export default CardMoment;
