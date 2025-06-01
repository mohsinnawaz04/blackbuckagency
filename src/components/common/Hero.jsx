import bannerVideo from "../../assets/videos/Black buck banner.mp4";
import { Link } from "react-router";
import Typewriter from "../Typewriter";
import { ChevronRight } from "lucide-react";
import HeroBottom from "../hero/HeroBottom";

const Hero = () => {
  return (
    <section className="relative hero pb-8 z-10 lg:pb-96">
      <video
        src={bannerVideo}
        loop
        autoPlay
        muted
        className="absolute w-full h-full object-cover opacity-30 top-0 left-0 -z-20 max-h-[70%]"
      ></video>
      <div className="container py-40 mx-auto px-2 sm:px-10 xl:px-0">
        <h1 className="uppercase hero-text max-w-[14ch] 2xl:max-w-[13ch] 2xl:leading-40">
          Result-Driven Branding Agency
        </h1>

        <div className="text-holder grid grid-cols-3 overflow-x-hidden lg:gap-10 items-center">
          <div className="paragraph-holder text-end col-span-3 order-2 lg:col-span-1 lg:order-1">
            <p className="hero-para">
              Black Buck is the best branding agency in Dubai that brings your
              business into the limelight of the UAE market. We spin your
              business online wheels through impactful branding, web creation,
              designing, app development, and animation
            </p>
            <Link to={"#"} className="flex justify-end mt-2 hero-cta">
              Get Started{" "}
              <span className="flex items-center relative">
                <ChevronRight size={15} className="absolute -right-4" />
                <ChevronRight size={15} className="absolute -right-5" />
              </span>
            </Link>
          </div>
          <div className="col-span-2 order-1 mb-0 lg:order-2">
            {/* Type Animation */}
            <Typewriter />
          </div>
        </div>

        {/* Bottom Countdown and Stats Info */}
        <HeroBottom />
      </div>
    </section>
  );
};

export default Hero;
