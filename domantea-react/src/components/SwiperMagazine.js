import axios from "axios";
import React, { useEffect, useState } from "react";
import CardMagazine from "./CardMagazine";

const SwiperMagazine = () => {
    const [getMagazine, setGetMagazine] = useState([])

    const getDataMagazine = () => {
        axios.get("http://localhost:3004/magazine").then((res) => setGetMagazine(res.data))
    }
    useEffect(() => {
       getDataMagazine() 
    }, [])
  return (
    <div>
      <div className="title">
        <h1>MAGAZINE</h1>
      </div>
          <div className="caroussel-container">
              <ul className="caroussel">
                  {getMagazine.map((magazine) => (
                      <CardMagazine key={magazine.id} magazine={magazine} />
                  ))}
              </ul>
      </div>
    </div>
  );
};

export default SwiperMagazine;
