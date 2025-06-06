import { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Loading = () => {
  const [brandText] = useState(["Black", "Buck", "Agency"]);
  const loadingRef = useRef(null);
  const textRef = useRef(null);
  const animationRef = useRef(null);

  const staggerDuration = 0.1;
  const animationDuration = 0.4;
  const pauseBetweenWords = 0.1; // Adjustable pause between words

  const totalDuration = 2;

  const animateWord = (word, onComplete) => {
    const textToArray = word.toUpperCase().split("");
    const spans = textRef.current.children;

    // Clear previous content and set new text
    textRef.current.innerHTML = textToArray
      .map((char) => `<span class="inline-block">${char}</span>`)
      .join("");

    // Set initial position below
    gsap.set(spans, { y: 110 });

    // Animate letters: slide up to center, pause, then slide up and out
    gsap
      .timeline({ onComplete })
      .to(spans, {
        y: 0, // Move to center
        stagger: staggerDuration,
        duration: animationDuration,
        ease: "power2.out",
      })
      .to(
        spans,
        {
          y: -110, // Move up and out
          stagger: staggerDuration,
          duration: animationDuration,
          ease: "power2.in",
        },
        `+=${pauseBetweenWords}` // Pause when letters are centered
      );
  };

  useGSAP(() => {
    // Disable scrolling
    document.body.style.overflow = "hidden";
    const timeline = gsap.timeline();
    animationRef.current = timeline;

    brandText.forEach((word, index) => {
      timeline.add(() => animateWord(word, () => {}), index * totalDuration);
    });

    setTimeout(() => {
      gsap.to(loadingRef.current, {
        opacity: 0,
        duration: 0.5,
        ease: "power2.Out",
        onComplete: () => {
          document.body.style.overflow = "";
          loadingRef.current.style.display = "none";
        }, // Ensure scroll resets on unmount
      });
      console.log("done!");
    }, Number(`${totalDuration * brandText.length}000`));

    return () => {
      timeline.kill(); // Clean up on unmount
      document.body.style.overflow = ""; // Ensure scroll resets on unmount
    };
  }, []);

  return (
    <div
      ref={loadingRef}
      className="loading_div h-[100vh] w-full fixed top-0 left-0 grid place-items-center"
    >
      <div
        ref={textRef}
        style={{ cursor: "default" }}
        className="text_animate text-5xl lg:text-9xl font-clash-display font-semibold uppercase overflow-hidden"
      ></div>
    </div>
  );
};

export default Loading;
