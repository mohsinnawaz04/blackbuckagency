import { Link } from "react-router";
import ArrowRight from "../../assets/svgs/arrow-right.svg";

const HoverGallery = () => {
  return (
    <div className="mt-16 hover-gallery">
      <Link className="item-holder block border-t border-b border-white/20 ">
        <div className="item one">
          <span>01</span>
          <div className="grow relative item-title">
            <h3>Web Development</h3>
          </div>
          <span className="arrow">
            <img src={ArrowRight} alt="Right Arrow Icon" />
          </span>
        </div>
        <p className="hover-para px-52 max-w-[90ch]">
          We build websites that are optimized for top performance with the
          ability to handle high traffic with ease.
        </p>
      </Link>
      {/* <Link to={"#"} className="item two border-t border-b border-white/20">
        <span>01</span>
        <h3 className="grow">Web Development</h3>
        <span className="arrow">
          <img src={ArrowRight} alt="Right Arrow Icon" />
        </span>
      </Link>
      <Link to={"#"} className="item three border-t border-b border-white/20">
        <span>01</span>
        <h3 className="grow">Web Development</h3>
        <span className="arrow">
          <img src={ArrowRight} alt="Right Arrow Icon" />
        </span>
      </Link>
      <Link to={"#"} className="item four border-t border-b border-white/20">
        <span>01</span>
        <h3 className="grow">Web Development</h3>
        <span className="arrow">
          <img src={ArrowRight} alt="Right Arrow Icon" />
        </span>
      </Link> */}
    </div>
  );
};

export default HoverGallery;
