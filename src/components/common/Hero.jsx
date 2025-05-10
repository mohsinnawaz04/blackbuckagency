import bannerVideo from "../../assets/videos/Black buck banner.mp4";
import { Link } from "react-router";
import Typewriter from "../Typewriter";
import { ChevronRight } from "lucide-react";
import HeroBottom from "../hero/HeroBottom";

const Hero = () => {
  return (
    <section className="relative hero pb-[10rem]">
      <video
        src={bannerVideo}
        loop
        autoPlay
        muted
        className="absolute opacity-20 top-0 left-0"
      ></video>
      <div className="container py-40">
        <h1 className="uppercase hero-text max-w-[13ch] leading-40">
          Result-Driven Branding Agency
        </h1>

        <div className="text-holder grid grid-cols-12 gap-10 items-center">
          <div className="paragraph-holder text-end col-span-4 xl:w-[26rem]">
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
          <div className="col-span-8 min-h-[260px] mb-5">
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
