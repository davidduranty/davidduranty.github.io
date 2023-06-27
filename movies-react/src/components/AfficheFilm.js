import React from "react";

const AfficheFilm = ({ card }) => {
  // IMPORTANT TRAITEMENT DES DATES
  const dateFormater = (date) => {
    let newDate = new Date(date).toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    });

    return newDate;
  };

  // const modifStyle = { vote_average };
  // modifStyle = modifStyle.replace(".", "/")

  return (
    <li className="card-content">
      
      <div className="infos">
        <img
          src={"https://image.tmdb.org/t/p/original/" + card.poster_path}
          alt="Affiche du film"
        />
        <h2 className="title-card">{card.title}</h2>
        <p className="date">Sorti le : {dateFormater(card.release_date)}</p>
        <div className="note">
          <p>{card.vote_average} </p>
          <span className="star">&#9734;</span>
        </div>
        <div className="genre-content">
          <p className="genre"> {card.genre_ids}</p>
        </div>
        <p className="title-text">Synopsis</p>
        <div className="synopsis">
          <p>{card.overview}</p>
          
        </div>
      <button>Ajouter aux coups de coeur</button>
      </div>
    </li>
  );
};

export default AfficheFilm;
