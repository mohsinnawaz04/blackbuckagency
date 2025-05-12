import { Link } from "react-router";
import ArrowRight from "../info/ArrowRight";
import Counter from "./counter";
import rotatingText from "../../assets/images/rotating-text.png";
import AboutUsCoverImage from "../../assets/images/about-us-image.png";

const AboutUs = () => {
  return (
    <div className="container mt-10 lg:px-5">
      <div className="grid grid-cols-3 about-us-info">
        <div className="col-span-2">
          <h2>
            BEST BRANDING AGENCY DUBAI <br /> THAT PROVIDES BRILLIANT <br />{" "}
            IDEAS TO FORMULATE <br /> BRANDING
          </h2>
          <div className="mt-10 flex gap-10">
            <div className="flex flex-col info relative">
              <Counter className="count mb-5" count={"15"} />
              <p>
                Since 2016, Black Buck Agency has been paving its path by
                cracking brands' hidden potential through its branding
                solutions.
              </p>
            </div>
            <div className="flex flex-col gap-18">
              <p>
                We have helped close to hundred global brands, with many of them
                on track to becoming unbeatable in their industries.
              </p>
              <Link
                to={"/"}
                className="rotating-text relative ms-5 flex justify-center items-center w-fit"
              >
                <img
                  src={rotatingText}
                  className="absolute left-0 top-0 scale-140 animate-spin"
                  alt="Rotating Text"
                  style={{ animationDuration: "3.5s" }}
                />
                <button className="arrow-btn size-28 flex justify-center items-center rounded-full">
                  <ArrowRight width={25} height={25} stroke={7} />
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-span-1 overflow-hidden rounded-4xl scale-125">
          <img src={AboutUsCoverImage} alt="About Us Cover Image" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
