import { useState } from "react";
import { TypeAnimation } from "react-type-animation";

const Typewriter = () => {
  const [step, setStep] = useState(0);
  const colors = ["#98B7FF", "#FE98EA", "#50D8FD"];

  const incrementSteps = () => {
    setStep((prevStep) => {
      const newStep = prevStep < 2 ? prevStep + 1 : 0;
      return newStep;
    });
  };

  return (
    <span
      style={{
        fontSize: "8vw",
        display: "inline-block",
        fontFamily: "Clash_Display, sans-serif",
        fontWeight: "500",
        color: colors[step],
      }}
    >
      <TypeAnimation
        sequence={[
          "Dubai.",
          500,
          "Dubai.",
          500,
          "Dubai.",
          500,
          "",
          100,
          incrementSteps,
        ]}
        wrapper="span"
        speed={5}
        repeat={Infinity}
        cursor={false}
      />
    </span>
  );
};

export default Typewriter;
