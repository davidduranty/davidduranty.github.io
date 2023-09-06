import React from "react";

const CardMagazine = ({ magazine }) => {
  return (
    <div className="card-container">
      <li>
        <img src={magazine.img} alt={"Photo" + magazine} />
        <h1>{magazine.question}</h1>
        <p>{magazine.content}</p>
      </li>
    </div>
  );
};

export default CardMagazine;
