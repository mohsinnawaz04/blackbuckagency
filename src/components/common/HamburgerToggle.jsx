import { useState } from "react";

const HamburgerToggle = ({ hamburgerOpen, setHamburgerOpen }) => {
  return (
    <button
      onClick={() => setHamburgerOpen(!hamburgerOpen)}
      className="relative w-fit h-5 flex flex-col justify-between items-center"
      aria-label="Toggle Menu"
    >
      {/* Top Bar */}
      <span
        className={`block h-0.5 w-7 bg-white transform transition duration-300 ease-in-out origin-center ${
          hamburgerOpen ? "rotate-45 translate-y-3" : ""
        }`}
      ></span>
      {/* Middle Bar */}
      <span
        className={`block h-0.5 w-7 bg-white transition duration-300 ease-in-out ${
          hamburgerOpen ? "opacity-0" : ""
        }`}
      ></span>
      {/* Bottom Bar */}
      <span
        className={`block h-0.5 w-7 bg-white transform transition duration-300 ease-in-out origin-center ${
          hamburgerOpen ? "-rotate-45 -translate-y-1.5" : ""
        }`}
      ></span>
    </button>
  );
};

export default HamburgerToggle;
