import React from "react";
import StatsCounter from "./StatsCounter";

const HeroBottom = () => {
  return (
    <div className="hero-bottom">
      <div className="separator bg-white/20 my-20 lg:my-0"></div>

      <div className="stats flex flex-wrap items-center justify-center gap-2 lg:gap-5 mt-14 ">
        {/* Stat Blocks */}
        <div className="flex-1 md:px-3 text-cyan text-center md:min-w-[200px]">
          <div className="percentage">
            <StatsCounter finalNum={3} />
          </div>
          <h4 className="text-[16px] md:text-[18px]">
            MASSIVE CONVERSION RATE AFTER WEB OPTIMIZATION
          </h4>
        </div>

        <div className="flex-1 md:px-3 text-center md:min-w-[200px]">
          <p className="percentage">
            <StatsCounter finalNum={46} />
          </p>
          <h4 className="text-[16px] md:text-[18px]">
            MORE VISITORS AFTER BRANDING DONE ON SOCIAL PLATFORMS
          </h4>
        </div>

        <div className="flex-1 md:px-3 text-center md:min-w-[200px]">
          <p className="percentage">
            <StatsCounter finalNum={32} />
          </p>
          <h4 className="text-[16px] md:text-[18px]">
            WEBSITE TRAFFIC BOOM AFTER SITE SPEED OPTIMIZATION
          </h4>
        </div>

        {/* Fixed Width Last Column */}
        <div className="text-center mt-8 md:px-3 lg:w-[25rem]">
          <p className="stats-para text-start">
            As the best branding agency Dubai, we don't just bring customers
            like everyone else, we rebrand your business in a way that attracts
            customers towards itself. We guarantee our work to be the best
            decision you can make for your business.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroBottom;
