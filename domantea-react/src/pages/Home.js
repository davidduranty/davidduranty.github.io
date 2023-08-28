import React from "react";
import Navigation from "../components/Navigation";
import ContentImg from "../components/ContentImg";
import TheContainer from "../components/TheContainer";
import StarsOfMonth from "../components/Swiper";
import MainFooter from "../components/MainFooter";

const Home = () => {
  return (
    <div>
      <Navigation />
      <ContentImg />
      <TheContainer />
      <StarsOfMonth />
      <MainFooter/>
    </div>
  );
};

export default Home;
