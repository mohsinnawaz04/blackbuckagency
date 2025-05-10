import { useState, useRef, useEffect } from "react";

export const useHoverFollow = (delay = 0.1) => {
  const [isHovering, setIsHovering] = useState(false);
  const [isExiting, setIsExiting] = useState(false); // New state for exit animation
  const [targetPosition, setTargetPosition] = useState({ x: 0, y: 0 });
  const [currentPosition, setCurrentPosition] = useState({ x: 0, y: 0 });
  const parentRef = useRef(null);
  const animationRef = useRef();
  const exitTimeoutRef = useRef();

  const handleMouseMove = (e) => {
    if (parentRef.current) {
      const { left, top } = parentRef.current.getBoundingClientRect();
      setTargetPosition({
        x: e.clientX - left,
        y: e.clientY - top,
      });
    }
  };

  const handleMouseEnter = () => {
    setIsExiting(false); // Cancel any pending exit
    clearTimeout(exitTimeoutRef.current);
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsExiting(true); // Start exit animation
    exitTimeoutRef.current = setTimeout(() => {
      setIsHovering(false);
      setIsExiting(false);
    }, 300); // Match this with CSS transition duration
  };

  useEffect(() => {
    if (!isHovering) return;

    const updatePosition = () => {
      setCurrentPosition((prev) => ({
        x: prev.x + (targetPosition.x - prev.x) * delay,
        y: prev.y + (targetPosition.y - prev.y) * delay,
      }));
      animationRef.current = requestAnimationFrame(updatePosition);
    };

    animationRef.current = requestAnimationFrame(updatePosition);
    return () => cancelAnimationFrame(animationRef.current);
  }, [targetPosition, isHovering, delay]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      clearTimeout(exitTimeoutRef.current);
    };
  }, []);

  return {
    parentRef,
    isHovering,
    isExiting, // Pass this to component
    position: currentPosition,
    handleMouseEnter,
    handleMouseLeave,
    handleMouseMove,
  };
};
