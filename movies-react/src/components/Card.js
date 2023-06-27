import React, { useEffect, useState } from "react";
import axios from "axios";
import AfficheFilm from "./AfficheFilm";

const Card = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/search/movie?api_key=359f6579a53060155103b97763b790dd&query=code&language=fr-FR"
      )
      .then((res) => setData(res.data.results));
  }, []);

  return (
    <div className="card-container">
      
      <ul>
      
        {data.map((card, index) => (
          <AfficheFilm key={index} card={card} />
        ))}
        
      </ul>
    </div>
  );
};

export default Card;
