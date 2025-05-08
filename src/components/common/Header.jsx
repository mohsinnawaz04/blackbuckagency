import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router";
import { ChevronDown } from "lucide-react";
import { Phone } from "lucide-react";
import { useRef } from "react";
import { useState } from "react";
const Header = () => {
  const dropdownRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    if (dropdownRef.current) {
      const scrollHeight = dropdownRef.current.scrollHeight;
      dropdownRef.current.style.height = `${scrollHeight}px`;
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (dropdownRef.current) {
      dropdownRef.current.style.height = "0px";
      setIsHovered(false);
    }
  };
  return (
    <header>
      <nav className="container mt-5">
        <div className="flex items-center justify-between">
          <img src={logo} alt="Logo" />
          <div className="navigation">
            <ul className="flex gap-16 bg-white/40 text-white nav-links py-3 px-14 grow rounded-full">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li
                className="has-dropdown flex items-center relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Link to="/">Services</Link>
                <ChevronDown size={20} className="mt-1" />
                <ul
                  ref={dropdownRef}
                  className="dropdown absolute top-[2.5rem] px-5 py-3 flex flex-col gap-3 min-w-[15rem] rounded-2xl"
                >
                  <li>
                    <Link to="#">Web Development</Link>
                  </li>
                  <li>
                    <Link to="#">Logo Designing</Link>
                  </li>
                  <li>
                    <Link to="#">UI/UX Designs</Link>
                  </li>
                  <li>
                    <Link to="#">Mobile App Development</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/">Contact</Link>
              </li>
              <li>
                <Link to="/">Blogs</Link>
              </li>
            </ul>
          </div>
          <div className=" flex items-center gap-10">
            <Link to={"#"} className="flex items-center">
              <Phone fill="#fff" size={18} /> {"+971 56 595 2820"}
            </Link>
            <Link to={"#"}>
              <button className="get-started-btn px-10 py-3 rounded-full">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
