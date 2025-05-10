import React from "react";
import StatsCounter from "./StatsCounter";

const HeroBottom = () => {
  return (
    <div className="hero-bottom">
      <div className="separator bg-white/20"></div>

      <div className="grid grid-cols-4 stats mt-14 gap-5 lg:px-5">
        {/* Stats */}
        <div className="col col-span-1 px-3 text-cyan text-center">
          <div className="percentage">
            <StatsCounter finalNum={3} />
          </div>
          <h4>MASSIVE CONVERSION RATE AFTER WEB OPTIMIZATION</h4>
        </div>
        <div className="col col-span-1 px-3 text-center">
          <p className="percentage">
            <StatsCounter finalNum={46} />
          </p>
          <h4>MORE VISITORS AFTER BRANDING DONE ON SOCIAL PLATFORMS</h4>
        </div>
        <div className="col col-span-1 px-3 text-center">
          <p className="percentage">
            <StatsCounter finalNum={32} />
          </p>
          <h4>WEBSITE TRAFFIC BOOM AFTER SITE SPEED OPTIMIZATION</h4>
        </div>
        <div className="col col-span-1 px-3 text-center mt-8 min-w-[26rem]">
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
