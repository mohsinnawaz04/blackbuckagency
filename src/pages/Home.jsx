import React from "react";
import Hero from "../components/common/Hero";
import Info from "../components/info/Info";
import Portfolio from "../components/portfolio/Portfolio";
import Steps from "../components/steps/Steps";

const Home = () => {
  return (
    <>
      <Hero />
      <Info />
      <Portfolio />
      <Steps />
    </>
  );
};

export default Home;
