import React from "react";
import DynamicText from "../components/DynamicText";
import IconSocial from "../components/IconSocial";
import Logo from "../components/Logo";
import Arrow from "../components/Arrow";

const PageGard = () => {
  return (
    <div>
      <Logo />
      <DynamicText />
      <Arrow right={"/accueil"} />
      <IconSocial />
    </div>
  );
};

export default PageGard;
