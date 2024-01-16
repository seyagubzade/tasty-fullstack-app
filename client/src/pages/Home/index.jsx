import React from "react";
import HeroSlider from "../../components/HeroSlider";
import AboutChef from "./AboutChef";
import Menu from "./Menu";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <HeroSlider />
      <AboutChef />
      <Menu />
    </div>
  );
};

export default Home;
