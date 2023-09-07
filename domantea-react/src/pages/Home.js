import React, { useEffect } from "react";
import Navigation from "../components/Navigation";
import ContentImg from "../components/ContentImg";
import TheContainer from "../components/TheContainer";
import SwiperBest from "../components/SwiperBest";
import MainFooter from "../components/MainFooter";
import SwiperSelection from "../components/SwiperSelection";
import SwiperMagazine from "../components/SwiperMagazine";

const Home = () => {
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
      <ContentImg />
      <TheContainer />
      <SwiperBest />
      <SwiperSelection />
      <SwiperMagazine />
      <div className="arrow-fixed">
        <span className="arrow-scroll" onClick={() => window.scrollTo(0, 0)}>
          &#8678;
        </span>
      </div>
      <MainFooter />
    </div>
  );
};

export default Home;
