import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Marquee = ({ direction = "left", margin = "mt-0" }) => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const element = marqueeRef.current;

    gsap.fromTo(
      element,
      { x: "-200%" },
      {
        x: direction === "left" ? "0%" : "-400%",
        scrollTrigger: {
          trigger: element,
          start: "top bottom",
          end: "+=3000",
          scrub: 1,
        },
      }
    );
  }, []);

  return (
    <div className={`${margin} overflow-hidden`}>
      <div
        ref={marqueeRef}
        className="flex text-[150px] whitespace-nowrap marque"
      >
        {Array(12)
          .fill("BlackBuck Agency")
          .map((text, index) => (
            <h2 key={index} className="mr-10">
              {text}
            </h2>
          ))}
      </div>
    </div>
  );
};

export default Marquee;
