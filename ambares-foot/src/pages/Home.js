import React from "react";
import Navigation from "../components/Navigation";
import Logo from "../components/Logo";
import DynamicText from "../components/DynamicText";
import IconSocial from "../components/IconSocial";

const Home = () => {
  return (
    <div>
      <Navigation />
      <Logo />
      <DynamicText />
      <IconSocial/>
    </div>
  );
};

export default Home;
