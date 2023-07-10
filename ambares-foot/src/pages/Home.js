import React from "react";
import Navigation from "../components/Navigation";
import Arrow from "../components/Arrow";
import WordPresident from "../components/WordPresident";
import Footer from "../components/Footer";


const Home = () => {
  return (
    <div>
      <Navigation />
      <Arrow left={"/pagegard"} />
      <WordPresident />
      <Footer/>
    </div>
  );
};

export default Home;
