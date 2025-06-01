import { useRef, useEffect, useState } from "react";
import { useIsDesktop } from "../../hooks/useIsDesktop";
import HeaderDropdown from "./HeaderDropdown";
import { Link } from "react-router";
import { motion, AnimatePresence } from "motion/react";

const HeaderNavigation = ({ menuOpen }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const isDesktop = useIsDesktop();
  console.log("Desktop Size", isDesktop);

  const isVisible = isDesktop || menuOpen;

  return (
    <AnimatePresence initial={false}>
      {isVisible && (
        <motion.div
          layout // This enables automatic layout animation
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="navigation glass-effect absolute top-20 left-1/2 -translate-x-1/2 w-full max-w-[90%] overflow-hidden lg:static lg:w-fit lg:overflow-visible lg:-translate-0"
        >
          <div>
            <ul className="flex flex-col items-center w-full gap-5 bg-white/10 text-white nav-links py-7 px-5 grow rounded-2xl lg:rounded-full lg:py-3 lg:flex-row 2xl:px-14 2xl:gap-14">
              <li>
                <Link
                  to="/"
                  className="navigation-link text-lg lg:text-sm 2xl:text-base"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="navigation-link text-lg lg:text-sm 2xl:text-base"
                >
                  About
                </Link>
              </li>

              {/* Dropdown List Item */}
              <HeaderDropdown
                submenuOpen={submenuOpen}
                setSubmenuOpen={setSubmenuOpen}
              />
              {/* Dropdown List Item */}

              <li>
                <Link
                  to="/"
                  className="navigation-link text-lg lg:text-sm 2xl:text-base"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="navigation-link text-lg lg:text-sm 2xl:text-base"
                >
                  Blogs
                </Link>
              </li>
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default HeaderNavigation;
