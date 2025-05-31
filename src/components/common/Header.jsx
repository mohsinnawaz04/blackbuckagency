import logo from "../../assets/logo.png";
import { Link } from "react-router";
import { Phone } from "lucide-react";
import HamburgerToggle from "./HamburgerToggle";
import { useState } from "react";
import HeaderNavigation from "../header/HeaderNavigation";

const Header = ({ toggleModal }) => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  return (
    <header className="absolute top-0 z-50 mx-auto w-full">
      <nav className="container relative mt-5 mx-auto px-2 sm:px-10 xl:px-0">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div>
            <Link to={"/"}>
              <img src={logo} alt="Logo" />
            </Link>
          </div>
          {/* Navigation Links */}
          <HeaderNavigation menuOpen={hamburgerOpen} />

          {/* CTA */}
          <div className="flex items-center gap-3">
            <Link
              to={"#"}
              className="items-center phone text-sm hidden lg:flex 2xl:text-base"
            >
              <Phone fill="#fff" size={18} /> {"+971 56 595 2820"}
            </Link>
            <button
              onClick={toggleModal}
              className="get-started-btn px-3 py-2 text-sm sm:text-base sm:px-5 sm:py-3 md:px-10 rounded-full"
            >
              <Link to={"#"}>Get Started</Link>
            </button>
            {/* Hamburger for Responsive Menu */}
            <div className="block lg:hidden">
              <HamburgerToggle
                hamburgerOpen={hamburgerOpen}
                setHamburgerOpen={setHamburgerOpen}
              />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
