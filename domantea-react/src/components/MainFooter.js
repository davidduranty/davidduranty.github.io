import React from "react";
import { NavLink } from "react-router-dom";

const MainFooter = () => {
  return (
    <div className="footer-container">

      {/* Footer Haut */}

      <div className="footer-container-haut">
        <div className="frais-de-port-container">
          <div className="img">
            <img src="frame.svg" alt="" />
          </div>
          <div className="h2">
            <h2>FRAIS DE PORT OFFERTS</h2>
          </div>
          <div className="h4">
            <h4>Dès 40€ d’achats en France métropolitaine</h4>
          </div>
        </div>
        <div className="paiement-securise">
          <div className="img">
            <img src="fdf.svg" alt="" />
          </div>
          <div className="h2">
            <h2>PAIEMENT SÉCURISÉ</h2>
          </div>
          <div className="h4">
            <h4>Visa, Mastercard, CB, Amex, Paypal</h4>
          </div>
        </div>
        <div className="sav-qualite">
          <div className="img">
            <img src="sav.svg" alt="" />
          </div>
          <div className="h2">
            <h2>SAV DE QUALITÉ</h2>
          </div>
          <div className="h4">
            <h4>02 37 65 60 00</h4>
          </div>
        </div>
      </div>

      {/* Footer Milieu */}

      <div className="footer-container-milieu">

        {/* Premier container */}

        <div className="doman-freres-container">
        
            <h1>DOMAN Frères</h1>
          
          <NavLink to="/contacter">
            <li>Nous contacter</li>
          </NavLink>
          <NavLink to="/delais">
            <li>Délais de livraison</li>
          </NavLink>
          <NavLink to="/offres">
            <li>Nos offres d'emploi</li>
          </NavLink>
        </div>

        {/* Deuxième container */}

        <div className="nous-trouver-container">
          <div className="title">
            <h1>Nous Trouver</h1>
          </div>
          <NavLink to="/boutiques">
            <li>Nos Boutiques</li>
          </NavLink>
          <NavLink to="/revendeurs">
            <li>Nos revendeurs</li>
          </NavLink>
          <NavLink to="/distributeurs">
            <li>Nos distributeurs</li>
          </NavLink>
          <NavLink to="/kdo">
            <li>Service cadeaux d'entreprise</li>
          </NavLink>
          <NavLink to="/presse">
            <li>Espace Presse</li>
          </NavLink>
        </div>

        {/* Troisième container */}

        <div className="pro-container">
          <div className="title">
            <h1>Professionnel</h1>
          </div>
          <div className="text">
            <p>Vous êtes un professionnel ? Connectez-vous :</p>
          </div>
          <a href="*">SE CONNECTER</a>
        </div>

        {/* Quatrième container */}

        <div className="suivez-container">
          <div className="title">
            <h1>Suivez-nous</h1>
          </div>
          <div className="text">
            <p>Inscrivez-vous à notre newsletter pour recevoir conseils, actualités et dernières créations</p>
          </div>
          <div className="input">
            <input type="email" placeholder="Entrez votre adresse mail *" autoComplete="off"/>
          </div>
          <button className="btn">JE M'INSCRIS</button>
          <div className="icons-container-footer">
            <img className="face" src="facebook.png" alt="Lien Facebook" />
            <img src="instagram.png" alt="Lien Instagram" />
            <img src="Pinterest.png" alt="Lien Pinterest" />
            <img src="linkedin.png" alt="Lien Linkedin" />
          </div>
        </div>
      </div>

      {/* Footer Bas */}
      <div className="footer-bas">
        <div className="all-droits-container">
          <div className="all-droits">
            <p>DOMAN Tea Frères © 2023 - All rights reserved</p>
          </div>
          <div className="lien-container-bas">
            <NavLink to="/mentions">
              <li>Mentions Légales</li>
            </NavLink>
            <NavLink to="/cgv">
              <li>CGV</li>
            </NavLink>
            <NavLink to="/plan">
              <li>Plan du site</li>
            </NavLink>
            <NavLink to="/credits">
              <li>Crédits</li>
            </NavLink>
            <NavLink to="/politique">
              <li>Politique de confidentialité</li>
            </NavLink>
          </div>
        </div>
        <div className="iref">
            <div className="icon-iref">
              <img src="logo-iref.webp" alt="Lien Iref" />
            </div>
            <div className="last-text">
              <p>DOMANN Frères, élue enseigne de l’année 2023</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default MainFooter;
