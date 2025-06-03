import HoverGallery from "./HoverGallery";

const Info = () => {
  return (
    <section className="about-us">
      <div className="container mx-auto px-2 sm:px-10 xl:px-0">
        <div className="text space-y-5">
          <h2 className="info-heading text-[6.5vw] lg:text-[5vw]">
            BRANDING AGENCY THAT Runs Faster Than Your Competitors
          </h2>
          <p className="font-bold">
            If you’re not online, the chances are that 60% of your customers
            don’t even know you exist.
          </p>
          <p>
            Black Buck believes that the key to stellar marketing campaigns lies
            in aligning every message with your business goals. To deliver that
            goal, our branding agency UAE is here to help your business build a
            consistent lead pipeline. We want to help our customers get linked
            to the online world faster, dominating everything on trend so they
            never miss out when it comes to securing customers.
          </p>
        </div>
        <HoverGallery />
      </div>
    </section>
  );
};

export default Info;
