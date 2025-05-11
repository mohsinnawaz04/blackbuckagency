import Carousel3D from "./Carousel3D";
import CardImage from "../../assets/card-hover-image-one.png";

const Portfolio = () => {
  const items = [
    { content: "Slide 1", background: "#3498db" },
    { content: "Slide 2", background: "#e74c3c" },
    { content: "Slide 3", background: "#2ecc71" },
    { content: "Slide 4", background: "#f39c12" },
    { content: "Slide 5", background: "#9b59b6" },
    { content: "Slide 6", background: "#1abc9c" },
  ];
  return (
    <section className="portfolio mt-36">
      <div className="container lg:px-5">
        <h2 className="info-heading text-center uppercase">
          Our Work Portfolio
        </h2>
        <p className="text-center mt-5">
          Feel free to explore our recent portfolio showcasing our latest
          branding projects. You'll quickly see why our clients consider us the
          best branding agency in Dubai. Our work speaks for itself,
          demonstrating our creativity, attention to detail, and commitment to
          delivering exceptional results.
        </p>

        <Carousel3D items={items} />
      </div>
    </section>
  );
};

export default Portfolio;
