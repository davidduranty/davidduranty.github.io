import React from "react";

const MainFooter = () => {
  return (
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
  );
};

export default MainFooter;
