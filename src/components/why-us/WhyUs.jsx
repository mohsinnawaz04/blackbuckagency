import { ChevronRight } from "lucide-react";
import benefitsImg from "../../assets/images/benefits.png";
import Marquee from "../portfolio/Marquee";

const WhyUs = () => {
  return (
    <>
      <div className="-mb-10 xl:-mb-30">
        <Marquee />
      </div>
      <section className="why-us relative z-40">
        <div className="container mx-auto px-2 sm:px-10 xl:px-0">
          <div className="work-with-us px-5 py-10 lg:p-14 rounded-4xl">
            <div className="flex items-center flex-wrap gap-5 lg:flex-nowrap">
              <h2 className="info-heading text-[6vw] sm:text-[4vw] lg:w-full">
                WHY WORK WITH US
              </h2>
              <p>
                You’ve got the problems, we’ve got the fix. Let's breathe new
                life into your brand the way you always wanted.
              </p>
            </div>
            <div className="grid grid-cols-7 gap-10 mt-5 lg:gap-0 lg:mt-20">
              <div className="col col-span-7 lg:col-span-3">
                <div className="step-card flex flex-col gap-10 w-full rounded-3xl px-5 sm:px-7 xl:px-10 py-14">
                  <h3 className="card-heading text-2xl sm:text-3xl lg:text-4xl">
                    Here’s how we get things rolling
                  </h3>
                  <p className="card-desc">
                    We provide complete visibility into how your plan is being
                    maximized. With our process, you can review progress and
                    give feedback at each step, ensuring everything is up to
                    standard. When you work with us, you get
                  </p>
                  <ul className="flex flex-col gap-5 list -ms-2">
                    <li className="flex items-center gap-3">
                      <span>
                        <ChevronRight color="#469be0" />
                      </span>
                      Fast turn around on your project within weeks
                    </li>
                    <li className="flex items-center gap-3">
                      <span>
                        <ChevronRight color="#469be0" />
                      </span>
                      Full timezone coverage to track progress anytime.
                    </li>
                    <li className="flex items-center gap-3">
                      <span>
                        <ChevronRight color="#469be0" />
                      </span>
                      Easy collaboration with project manager via platform
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col col-span-7 rounded-2xl overflow-hidden lg:col-span-4 lg:ms-8">
                <img
                  src={benefitsImg}
                  className="size-full object-cover"
                  alt="Benefits"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="-mt-10 xl:-mt-32">
        <Marquee direction="right" />
      </div>
    </>
  );
};

export default WhyUs;
