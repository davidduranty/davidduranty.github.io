import React, { useEffect, useState } from "react";
import axios from "axios";
import AfficheFilm from "./AfficheFilm";

const Card = () => {
  const [data, setData] = useState([]);
  const [movies, setMovies] = useState("code");

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/search/movie?api_key=359f6579a53060155103b97763b790dd&query=" +
          movies +
          "&language=fr-FR"
      )
      .then((res) => setData(res.data.results));
  }, [movies]);

  return (
    <div>
      <div className="input-container">
        <input
          type="text"
          placeholder="Entrez le titre d'un film"
          id="search-input"
          onChange={(e) => setMovies(e.target.value)}
        />
        <input type="submit" Rechercher id="btn" />
      </div>
      <div className="top-flop">
        <button
          className={(bouton) => (bouton.isActive ? "bouton-active" : "")}
        >
          Top &#8593;
        </button>
        <button
          className={(bouton) => (bouton.isActive ? "bouton-active" : "")}
        >
          Flop &#8595;
        </button>
      </div>
      <div className="card-container">
        <ul>
          {data
            .sort((a, b) => b.vote_average - a.vote_average)
            .map((card, index) => (
              <AfficheFilm key={index} card={card} />
            ))}
        </ul>
      </div>
      </div>
  );
};

export default Card;
