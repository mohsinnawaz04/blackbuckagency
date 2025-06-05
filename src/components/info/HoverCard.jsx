import { Link } from "react-router"; // Updated to react-router-dom
import { AnimatePresence, motion } from "motion/react";
import ArrowRight from "./ArrowRight";
import { useHoverFollow } from "../../hooks/useHoverFollow";
import { useIsDesktop } from "../../hooks/useIsDesktop";
import cardImage from "../../assets/card-hover-image-one.png";

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
    <Link
      className="item-holder py-8 lg:py-12 block relative border-t border-b border-white/20"
      ref={parentRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      to="/"
    >
      <div className="item flex justify-center items-center gap-3 text-[4vw] lg:text-[4vw] lg:gap-20">
        <span className="text-xl sm:text-[3.9vw]">{serial}</span>
        <div className="grow relative item-title lg:shrink-0">
          <h3 className="text-xl sm:text-[3.9vw]">{title}</h3>
        </div>
        <motion.span
          animate={{ rotate: isHovering ? -45 : 0 }}
          transition={{ type: "`spring", stiffness: 300, damping: 20 }}
        >
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

      <AnimatePresence>
        {isDesktop && (isHovering || isExiting) && (
          <motion.div
            initial={{ opacity: 0, width: 0, scale: 0.8 }}
            animate={{
              opacity: isHovering ? 1 : 0,
              width: isHovering ? 230 : 0,
              scale: isHovering ? 1 : 0.8,
              x: position.x,
              y: position.y - 40,
            }}
            exit={{ opacity: 0, width: 0, scale: 0.8 }}
            transition={{
              type: "spring",
              stiffness: 800,
              damping: 40,
              mass: 0.2,
              opacity: { duration: 0.2 },
              width: { duration: 0.4 },
            }}
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              transform: "translate(-50%, -50%)",
              height: 300,
              backgroundImage: `url(${image})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              pointerEvents: "none",
              zIndex: 50,
              borderRadius: "12px",
            }}
          />
        )}
      </AnimatePresence>
    </Link>
  );
};

export default HoverCard;
