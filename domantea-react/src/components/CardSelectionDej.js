import axios from "axios";
import React, { useEffect, useState } from "react";

const CardSelectionDej = () => {
  const [getDej, sertGetDej] = useState([]);

  const getSelectionTea = () => {
    axios
      .get("http://localhost:3004/selection-small-dej")
      .then((res) => sertGetDej(res.data));
  };

  useEffect(() => {
    getSelectionTea();
  }, []);
  return (
    <div>
      <div className="title">
        <h1>SÉLECTION PETIT-DÉJEUNER</h1>
      </div>
      <div className="selection-map">
        {getDej.map((dej) => (
          <ul className="ul-settings-select" key={dej.id}>
            <img src={dej.img} alt={"Thé" + dej.name} />
            <h1>{dej.name}</h1>
            <h2>{dej.content}</h2>
            <p>{dej.price.toFixed(2)} / Les 100g</p>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default CardSelectionDej;
