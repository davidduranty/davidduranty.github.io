import axios from "axios";
import React, { useEffect, useState } from "react";
import CardMoment from "./CardMoment";

const SwiperSelection = () => {
  const [getMoment, setGetMoment] = useState([]);

  const getDataSelect = () => {
    axios
      .get("http://localhost:3004/moment")
      .then((res) => setGetMoment(res.data));
  };

  useEffect(() => {
    getDataSelect();
  }, []);

  return (
    <div>
      <div className="title">
        <h1>S&#201;LECTION DU MOMENT</h1>
      </div>
      <div className="caroussel-container">
        <span className="left">&#8678;</span>
        <ul className="caroussel">
          {getMoment.map((moment) => (
            <CardMoment key={moment.id} moment={moment} />
          ))}
        </ul>
        <span className="right">&#8680;</span>
      </div>
    </div>
  );
};

export default SwiperSelection;
