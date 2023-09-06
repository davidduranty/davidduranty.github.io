import React from "react";
import Navigation from "../components/Navigation";
import ContentImg from "../components/ContentImg";
import TheContainer from "../components/TheContainer";
import SwiperBest from "../components/SwiperBest";
import MainFooter from "../components/MainFooter";
import SwiperSelection from "../components/SwiperSelection";


const Home = () => {
  return (
    <div>
      <Navigation />
      <ContentImg />
      <TheContainer />
      <SwiperBest />
      <SwiperSelection/>
      <MainFooter/>
    </div>
  );
};

export default Home;
