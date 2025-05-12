import { useState, useRef, useEffect } from "react";
import "../../assets/css/3dCarousel.css";

const Carousel3D = () => {
  const [currDeg, setCurrDeg] = useState(0);
  const [scaledItem, setScaledItem] = useState(null); // Track scaled item
  const [textVisibleItem, setTextVisibleItem] = useState(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const startDeg = useRef(0);
  const hasDragged = useRef(false); // Track if drag occurred
  const containerRef = useRef(null); // Ref for carousel-container

  // Item angles and text corresponding to classes a, b, c, d, e, f
  const itemData = {
    a: { angle: 0, text: "Lumira" },
    b: { angle: 60, text: "Tajreed" },
    c: { angle: 120, text: "Serenity" },
    d: { angle: 180, text: "MoveMint" },
    e: { angle: 240, text: "Latte Skin" },
    f: { angle: 300, text: "Nexus" },
  };

  // Find the centered item based on currDeg
  const getCenteredItem = () => {
    // Normalize currDeg to 0–360°
    const normalizedDeg = ((currDeg % 360) + 360) % 360;
    // Invert normalizedDeg to match visual front-facing item
    const invertedDeg = (360 - normalizedDeg) % 360;
    // Find item with angle closest to invertedDeg
    let closestItem = null;
    let minDiff = Infinity;
    Object.entries(itemData).forEach(([item, { angle }]) => {
      const diff = Math.min(
        Math.abs((((angle - invertedDeg) % 360) + 360) % 360),
        Math.abs((((invertedDeg - angle) % 360) + 360) % 360)
      );
      if (diff < minDiff && diff <= 60) {
        minDiff = diff;
        closestItem = item;
      }
    });
    return closestItem;
  };

  const handleDragStart = (clientX) => {
    isDragging.current = true;
    startX.current = clientX;
    startDeg.current = currDeg;
    hasDragged.current = false;
  };

  const handleDragMove = (clientX, e) => {
    if (!isDragging.current) return;
    e.preventDefault(); // Prevent scrolling on touch
    const deltaX = clientX - startX.current;
    const sensitivity = 0.3; // Adjust drag sensitivity
    const newDeg = startDeg.current + deltaX * sensitivity;
    setCurrDeg(newDeg);
    if (Math.abs(deltaX) > 10) hasDragged.current = true;
  };

  const handleDragEnd = () => {
    if (isDragging.current && hasDragged.current) {
      // Reset scale only after actual drag
      const snappedDeg = Math.round(currDeg / 60) * 60;
      setCurrDeg(snappedDeg);
      setScaledItem(null);
    }
    isDragging.current = false;
    hasDragged.current = false;
  };

  const handleItemClick = (item) => {
    const centeredItem = getCenteredItem();
    if (item === centeredItem) {
      setScaledItem(item); // Scale only the centered item
    }
  };

  // Handle clicks outside carousel to reset scale
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setScaledItem(null);
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);

  // Effect for delayed text appearance
  useEffect(() => {
    if (scaledItem) {
      const timer = setTimeout(() => {
        setTextVisibleItem(scaledItem);
      }, 300); // Wait for scale animation
      return () => clearTimeout(timer);
    } else {
      setTextVisibleItem(null);
    }
  }, [scaledItem]);

  return (
    <main className="relative mt-48 mb-28">
      <div
        className="carousel-container"
        ref={containerRef}
        onMouseDown={(e) => handleDragStart(e.clientX)}
        onMouseMove={(e) => handleDragMove(e.clientX, e)}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
        onTouchMove={(e) => handleDragMove(e.touches[0].clientX, e)}
        onTouchEnd={handleDragEnd}
        style={{ cursor: isDragging.current ? "grabbing" : "grab" }}
      >
        <div
          className="carousel"
          style={{ transform: `rotateY(${currDeg}deg)` }}
        >
          {/* Carousel items */}
          {Object.keys(itemData).map((item) => (
            <div
              key={item}
              className={`carousel-item ${item} ${
                getCenteredItem() === item ? "centereditem" : ""
              } ${
                scaledItem === item && getCenteredItem() === item
                  ? "scaled_item"
                  : ""
              }`}
              onClick={() => handleItemClick(item)}
              style={{
                transform: `rotateY(${
                  itemData[item].angle
                }deg) translateZ(250px) ${
                  scaledItem === item ? "scale(1.5)" : "scale(1)"
                }`,
              }}
            />
          ))}
          {/* Text overlays */}
          {Object.keys(itemData).map((item) => (
            <div
              key={`text-${item}`}
              className="carousel-text-overlay"
              style={{
                transform: `rotateY(${itemData[item].angle}deg) translateZ(250px)`,
              }}
            >
              {scaledItem === item && (
                <span
                  className={`carousel-item-text ${
                    textVisibleItem === item ? "visible" : ""
                  }`}
                >
                  {itemData[item].text}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Carousel3D;
