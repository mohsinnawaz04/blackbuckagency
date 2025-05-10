import { useState, useRef, useEffect } from "react";
import CountUp from "react-countup";

const StatsCounter = ({ initialNum = 0, finalNum = 100, duration = 2 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When the element enters the viewport, set isVisible to true
        // When it leaves, set it to false so it can trigger again when re-entering
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1, // Trigger when at least 10% of the element is visible
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <span ref={ref}>
      {isVisible && (
        <CountUp
          start={initialNum}
          end={finalNum}
          duration={duration}
          enableReinitialize={true}
        />
      )}
      %
    </span>
  );
};

export default StatsCounter;
