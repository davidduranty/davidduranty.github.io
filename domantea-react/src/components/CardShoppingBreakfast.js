import axios from "axios";
import React, { useEffect, useState } from "react";

const CardShoppingBreakfast = () => {
  const [getDataShop, setGetDataShop] = useState([]);
  const getShopBreakfast = () => {
    axios
      .get("http://localhost:3004/shopping")
      .then((res) => setGetDataShop(res.data));
  };
  useEffect(() => {
    getShopBreakfast();
  }, []);
  return (
    <div>
      <div className="title-shop-container">
        <h1>SHOPPING BREAKFAST</h1>
        <span className="left">&#8678;</span>
        <span className="right">&#8680;</span>
      </div>
      <div className="card-shop-container">
        {getDataShop.map((shop) => (
          <ul className="ul-settings-shop" key={shop.id}>
            <img src={shop.img} alt={"Images" + shop.name} />
            <h1>{shop.name}</h1>
            <h2>{shop.content}</h2>
            <div className="price-bag">
              <p className="price">{shop.price.toFixed(2)}</p>
              <p className="bag">{shop.icon}</p>
            </div>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default CardShoppingBreakfast;
