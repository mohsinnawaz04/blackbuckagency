import { Link } from "react-router";
import Carousel3D from "./Carousel3D";
import Marquee from "./Marquee";

import AboutUs from "./AboutUs";

const Portfolio = () => {
  return (
    <section className="portfolio mt-36">
      <div className="container mx-auto px-2 sm:px-10 xl:px-0">
        <h2 className="info-heading text-center uppercase text-[6.5vw] lg:text-[5vw]">
          Our Work Portfolio
        </h2>
        <p className="text-center mt-5">
          Feel free to explore our recent portfolio showcasing our latest
          branding projects. You'll quickly see why our clients consider us the
          best branding agency in Dubai. Our work speaks for itself,
          demonstrating our creativity, attention to detail, and commitment to
          delivering exceptional results.
        </p>

        <Carousel3D />
      </div>
      <Marquee margin="mt-40" />
      <AboutUs />
      <Marquee direction="right" />
    </section>
  );
};

export default Portfolio;
