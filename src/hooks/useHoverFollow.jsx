import { useState, useRef, useEffect } from "react";

export const useHoverFollow = (delay = 0.05, exitDelay = 300) => {
  const [isHovering, setIsHovering] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [targetPosition, setTargetPosition] = useState({ x: 0, y: 0 });
  const [currentPosition, setCurrentPosition] = useState({ x: 0, y: 0 });

  const parentRef = useRef(null);
  const animationRef = useRef(null);
  const exitTimeoutRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!parentRef.current) return;
    const rect = parentRef.current.getBoundingClientRect();
    // Clamp position to stay within parent bounds
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const y = Math.max(0, Math.min(e.clientY - rect.top, rect.height));
    setTargetPosition({ x, y });
  };

  const handleMouseEnter = () => {
    setIsExiting(false);
    clearTimeout(exitTimeoutRef.current);
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsExiting(true);
    exitTimeoutRef.current = setTimeout(() => {
      setIsHovering(false);
      setIsExiting(false);
    }, exitDelay);
  };

  useEffect(() => {
    if (!isHovering && !isExiting) return;

    const updatePosition = () => {
      setCurrentPosition((prev) => ({
        x: prev.x + (targetPosition.x - prev.x) * delay,
        y: prev.y + (targetPosition.y - prev.y) * delay,
      }));
      animationRef.current = requestAnimationFrame(updatePosition);
    };

    animationRef.current = requestAnimationFrame(updatePosition);
    return () => cancelAnimationFrame(animationRef.current);
  }, [targetPosition, isHovering, isExiting, delay]);

  useEffect(() => {
    return () => {
      clearTimeout(exitTimeoutRef.current);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return {
    parentRef,
    isHovering,
    isExiting,
    position: currentPosition,
    handleMouseEnter,
    handleMouseLeave,
    handleMouseMove,
  };
};
