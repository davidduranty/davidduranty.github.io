import React from "react";

const AfficheFilm = ({ card }) => {
  return (
    <li className="card-content">
      <div className="infos">
        <img src={card.poster_path} alt="Affiche du film" />
        <h2>{card.title}</h2>
        <p>Sorti le : {card.release_date}</p>
        <div className="note">
          <p>{card.vote_average} </p>
          <span className="star">&#9734;</span>
        </div>
        <div className="genre-content">
          <p className="genre"> {card.genre_ids}</p>
        </div>
        <div className="synopsis">
          <p>Synopsis</p>
          <p>{card.overview}</p>
        </div>
        <button>Ajouter aux coups de coeur</button>
      </div>
    </li>
  );
};

export default AfficheFilm;
