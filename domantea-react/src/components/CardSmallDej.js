import axios from "axios";
import React, { useEffect, useState } from "react";

const TassesSmallDej = () => {
  const [getTasse, setGetTasse] = useState([]);
  const getDataTasse = () => {
    axios.get("http://localhost:3004/dej").then((res) => setGetTasse(res.data));
  };
  useEffect(() => {
    getDataTasse();
  }, []);
  return (
    <div className="container-breakfast">
      <img src="photo-dej.webp" alt="Petit dej" />
      <div className="tasse-map">
        {getTasse.map((tasse) => (
          <ul className="ul-settings" key={tasse.id}>
            <img src={tasse.img} alt="Tasse Doman" />
            <h1>{tasse.name}</h1>
            <h2>{tasse.content}</h2>
            <p>{tasse.price.toFixed(2)} £</p>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default TassesSmallDej;
