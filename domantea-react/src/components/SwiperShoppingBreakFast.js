import axios from "axios";
import React, { useEffect, useState } from "react";
import CardShoppingBreakfast from "./CardShoppingBreakfast";

const SwiperShoppingBreakFast = () => {
  const [getDataShopBreak, setGetDataShopBreak] = useState([]);

  const getShoppingBreakfast = () => {
    axios
      .get("http://localhost:3004/shopping")
      .then((res) => setGetDataShopBreak(res.data));
  };

  useEffect(() => {
    getShoppingBreakfast();
  }, []);
  return (
    <div>
      <div className="title-shop-container">
        <h1>SHOPPING BREAKFAST</h1>
        {/* <span className="left" onClick={() => scrollToImage("prev")}>
          &#8678;
        </span>
        <span className="right" onClick={() => scrollToImage("next")}>
          &#8680;
        </span> */}
      </div>
      <div className="card-shop-container">
        {getDataShopBreak.map((breakfast) => (
          <CardShoppingBreakfast key={breakfast.id} breakfast={breakfast} />
        ))}
      </div>
    </div>
  );
};

export default SwiperShoppingBreakFast;
