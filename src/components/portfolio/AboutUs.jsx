import { Link } from "react-router";
import ArrowRight from "../info/ArrowRight";
import Counter from "./counter";
import rotatingText from "../../assets/images/rotating-text.png";
import AboutUsCoverImage from "../../assets/images/about-us-image.png";

const AboutUs = () => {
  return (
    <div className="container mt-10 mx-auto px-2 sm:px-10 xl:px-5">
      <div className="about-us-info grid grid-cols-3 gap-28 lg:gap-5">
        <div className="col-span-3 lg:col-span-2">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl">
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
              {/* Rotating Text Animation */}
              <Link
                to={"/"}
                className="rotating-text relative ms-5 flex justify-center items-center w-fit scale-75 sm:scale-100"
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
        <div className="col-span-3 max-w-xs h-fit rounded-4xl mx-auto overflow-hidden sm:max-w-md lg:col-span-1">
          <img src={AboutUsCoverImage} alt="About Us Cover Image" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
