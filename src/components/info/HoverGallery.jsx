import { Link } from "react-router";
import ArrowRight from "./ArrowRight";
import HoverCard from "./HoverCard";
import cardImageOne from "../../assets/card-hover-image-one.png";

const HoverGallery = () => {
  return (
    <div className="mt-16 hover-gallery">
      <HoverCard
        serial="01"
        title="Web Development"
        paragraph="We build websites that are optimized for top performance with the
          ability to handle high traffic with ease."
        image={cardImageOne}
      />
      <HoverCard
        serial="02"
        title="Logo Designing"
        paragraph="We design intuitive, engaging logos for your business interface that hooks readers from the start"
        image={cardImageOne}
      />
      <HoverCard
        serial="03"
        title="UI/UX Design"
        paragraph="We design your business face that is quick, responsive to adapt, and optimized for all sorts of devices (desktop, mobile, tablet)."
        image={cardImageOne}
      />
      <HoverCard
        serial="04"
        title="Mobile App Development"
        paragraph="We design and develop mobile apps that turn concepts into a high-performing experience. We give you the complete package of custom UI/UX, ongoing maintenance, and optimized performance."
        image={cardImageOne}
      />
    </div>
  );
};

export default HoverGallery;
