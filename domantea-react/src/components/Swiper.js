import axios from "axios";
import React, { useEffect, useState } from "react";
import SelectionTea from "./SelectionTea";

const Swiper = () => {
  const [teas, setTea] = useState([]);

  const getData = () => {
    axios.get("http://localhost:3004/thes").then((res) => setTea(res.data));
  };

  useEffect(() => getData(), []);

  return (
    <div>
      <div className="stars-title">
        <h1>MEILLEURES VENTES DU MOIS</h1>
      </div>
      <div className="caroussel-container">
        <span className="left">&#8678;</span>
        <ul className="caroussel-vente">
          {teas.map((tea) => (
            <SelectionTea key={tea.id} tea={tea} />
          ))}
        </ul>
        <span className="right">&#8680;</span>
      </div>
      <div className="selection-title">
        <h1>S&#201;LECTION DU MOMENT</h1>
      </div>
      <div className="swiper-selection"></div>
      <div className="magazine-title">
        <h1>MAGAZINE</h1>
      </div>
      <div className="swiper-magazine"></div>
    </div>
  );
};

export default Swiper;
