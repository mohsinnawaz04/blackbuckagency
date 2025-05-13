import Hero from "../components/common/Hero";
import Info from "../components/info/Info";
import Portfolio from "../components/portfolio/Portfolio";
import Steps from "../components/steps/Steps";
import WhyUs from "../components/why-us/WhyUs";

const Home = () => {
  return (
    <>
      <Hero />
      <Info />
      <Portfolio />
      <Steps />
      <WhyUs />
    </>
  );
};

export default Home;
