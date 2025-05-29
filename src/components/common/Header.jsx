import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router";
import { ChevronDown } from "lucide-react";
import { Phone } from "lucide-react";
import { useRef } from "react";
import { useState } from "react";
import Modal from "./modal";
const Header = ({ toggleModal }) => {
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
    <header className="absolute top-0 z-50 mx-auto w-full">
      <nav className="container mt-5">
        <div className="flex items-center justify-between">
          <Link to={"/"}>
            <img src={logo} alt="Logo" />
          </Link>
          <div className="navigation">
            <ul className="flex gap-14 bg-white/10 text-white nav-links py-3 px-14 grow rounded-full">
              <li>
                <Link to="/" className="navigation-link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="navigation-link">
                  About
                </Link>
              </li>
              <li
                className="has-dropdown flex items-center relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Link to="/" className="navigation-link">
                  Services
                </Link>
                <ChevronDown size={20} className="mt-1" />
                <div
                  ref={dropdownRef}
                  className="dropdown absolute top-[2.5rem] rounded-2xl min-w-[15rem] "
                >
                  <ul className="px-5 py-3 flex flex-col gap-3">
                    <li>
                      <Link to="#" className="dropdown-link relative">
                        Web Development
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-link relative">
                        Logo Designing
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-link relative">
                        UI/UX Designs
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-link relative">
                        Mobile App Development
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <Link to="/" className="navigation-link">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/" className="navigation-link">
                  Blogs
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-3">
            <Link to={"#"} className="flex items-center phone">
              <Phone fill="#fff" size={18} /> {"+971 56 595 2820"}
            </Link>
            <Link to={"#"}>
              <button
                onClick={toggleModal}
                className="get-started-btn px-10 py-3 rounded-full"
              >
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
