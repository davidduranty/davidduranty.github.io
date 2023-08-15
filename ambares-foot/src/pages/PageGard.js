import React from "react";
import DynamicText from "../components/DynamicText";
import IconSocial from "../components/IconSocial";
import Logo from "../components/Logo";
import Arrow from "../components/Arrow";
// import Bubble from "../components/Bubble";

const PageGard = () => {
  return (
    <div className="gard-container">
      <Logo />
      <DynamicText />
      <Arrow right={"/accueil"} />
      <IconSocial />
      {/* <Bubble/> */}
    </div>
  );
};

export default PageGard;
