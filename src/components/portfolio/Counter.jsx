import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Counter = ({ count, className }) => {
  const spanRef = useRef(null);

  useEffect(() => {
    const el = spanRef.current;

    const animate = () => {
      gsap.fromTo(
        el,
        { innerText: 0 },
        {
          innerText: count,
          duration: 1,
          ease: "none",
          snap: { innerText: 1 },
          onUpdate: () => {
            el.textContent = Math.floor(el.innerText);
          },
        }
      );
    };

    ScrollTrigger.create({
      trigger: el,
      start: "top 80%",
      onEnter: animate,
      onEnterBack: animate,
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, [count]);

  return <span className={className} ref={spanRef} />;
};

export default Counter;
