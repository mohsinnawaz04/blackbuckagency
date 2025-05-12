import { useEffect } from "react";
import gsap from "gsap";
import ScrollSmoother from "gsap/ScrollSmoother";
import { useRef } from "react";

// Register the ScrollSmoother plugin with GSAP
gsap.registerPlugin(ScrollSmoother);

const SmoothScroll = ({ children }) => {
  const smootherRef = useRef(null);
  useEffect(() => {
    // Initialize ScrollSmoother on the whole document
    ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.2, // Adjust smoothness
      smoothTouch: 0.1,
      effects: true, // Enable scroll effects (if needed)
    });

    return () => {
      // Clean up the ScrollSmoother instance on component unmount
      if (smootherRef.current) {
        smootherRef.current.kill();
      }
    };
  }, []);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">{children}</div>
    </div>
  );
};

export default SmoothScroll;
