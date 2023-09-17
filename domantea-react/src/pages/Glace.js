import React, { useEffect } from "react";
import Navigation from "../components/Navigation";
import TassesSmallDej from "../components/CardSmallDej";
import CardSelectionDej from "../components/CardSelectionDej";
import MainFooter from "../components/MainFooter";
import SwiperShoppingBreakFast from "../components/SwiperShoppingBreakFast";

const Glace = () => {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        document.querySelector(".arrow-fixed").classList.add("active");
      } else {
        document.querySelector(".arrow-fixed").classList.remove("active");
      }
    });
  }, []);
  return (
    <div>
      <Navigation />
      <div className="smallBreakfast">
        <h1>PETIT-DÉJEUNER</h1>
        <img src="petit-dej.webp" alt="petit dej" />
      </div>
      <div className="textContainer">
        <p>
          Faîtes de votre petit-déjeuner le meilleur moment de la journée.
          Découvrez notre sélection de thés au caractère corsé, qui peuvent être
          dégustés nature ou avec du lait pour une tasse plus onctueuse.
        </p>
      </div>
      <div className="arrow-fixed">
        <span className="arrow-scroll" onClick={() => window.scrollTo(0, 0)}>
          &#8678;
        </span>
      </div>
      <TassesSmallDej />
      <CardSelectionDej />
      <SwiperShoppingBreakFast />
      <MainFooter />
    </div>
  );
};

export default Glace;
