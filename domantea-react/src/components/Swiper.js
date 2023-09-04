import axios from "axios";
import React, { useEffect, useState } from "react";
import SelectionTea from "./SelectionTea";

const Swiper = () => {
  const [thes, setthes] = useState([])


  const getData = () => {
    axios.get("http://localhost:3004/thes").then((res) => setthes(res.data));
  };

  useEffect(() => getData(), []);

  return (
    <div>
      <div className="stars-title">
        <h1>MEILLEURES VENTES DU MOIS</h1>
        <ul>
          {thes.map((the) => (
            <SelectionTea/>
          ))}
        </ul>
      </div>
      <div className="swiper-stars-of-month"></div>
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
