import { Link } from "react-router";
import ArrowRight from "./ArrowRight";
import { useHoverFollow } from "../../hooks/useHoverFollow";
import cardImage from "../../assets/card-hover-image-one.png";
import { useIsDesktop } from "../../hooks/useIsDesktop";
import { motion } from "motion/react";

const HoverCard = ({
  serial = "01",
  title = "Web Development",
  paragraph = "lorem ipsum dolor sit amet.",
  image = cardImage,
}) => {
  const {
    parentRef,
    isHovering,
    isExiting,
    position,
    handleMouseEnter,
    handleMouseLeave,
    handleMouseMove,
  } = useHoverFollow();

  const isDesktop = useIsDesktop();

  return (
    <>
      <Link
        className="item-holder py-8 lg:py-12 block relative border-t border-b border-white/20"
        ref={parentRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
      >
        <div className="item flex justify-center items-center gap-3 text-[4vw] lg:text-[4vw] lg:gap-20">
          <span className="text-xl sm:text-[3.9vw]">{serial}</span>
          <div className="grow relative item-title lg:shrink-0">
            <h3 className="text-xl sm:text-[3.9vw]">{title}</h3>
          </div>
          <motion.span animate={{ rotate: isHovering ? -45 : 0 }}>
            <ArrowRight
              width={isDesktop ? 82 : 45}
              height={isDesktop ? 79 : 43}
              color={isHovering ? "#4490d1" : "#fff"}
            />
          </motion.span>
        </div>
        <p className="hover-para lg:px-52 lg:-mt-[1rem] lg:max-w-[90ch]">
          {paragraph}
        </p>
        {/* Hover Preview (follows mouse) */}
        {isDesktop &&
          (isHovering || isExiting) && ( // Show during hover AND exit animation
            <div
              style={{
                position: "absolute",
                left: `calc(${position.x}px + 15%)`,
                top: `50%`,
                width: "300px",
                height: "300px",
                background: `url(${image})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                transform: isExiting
                  ? "translate(-50%, -50%) scale(0.9)"
                  : "translate(-50%, -60%)",
                pointerEvents: "none",
                borderRadius: "8px",
                zIndex: "9999999999",
                transition: "opacity 0.3s ease-out, transform 0.3s ease-out",
                opacity: isHovering && !isExiting ? 1 : isExiting ? 0 : 0, // Fade to 0 when exiting
              }}
            />
          )}
      </Link>
    </>
  );
};

export default HoverCard;
