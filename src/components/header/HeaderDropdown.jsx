import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router";
import { AnimatePresence, motion } from "motion/react";
import { useIsDesktop } from "../../hooks/useIsDesktop.jsx";
import { useRef } from "react";
import { useEffect } from "react";

const HeaderDropdown = () => {
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const closeTimeoutRef = useRef(null);
  const isDesktop = useIsDesktop();

  const handleMouseEnter = () => {
    if (isDesktop) {
      clearTimeout(closeTimeoutRef.current);
      setSubmenuOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (isDesktop) {
      closeTimeoutRef.current = setTimeout(() => {
        setSubmenuOpen(false);
      }, 200); // Delay before closing
    }
  };

  const handleClick = () => {
    if (!isDesktop) setSubmenuOpen((prev) => !prev);
  };

  useEffect(() => {
    return () => clearTimeout(closeTimeoutRef.current); // Cleanup on unmount
  }, []);
  return (
    <li
      className="has-dropdown flex flex-col gap-3 items-center relative lg:flex-row lg:gap-0"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button onClick={handleClick} className="flex items-center gap-1">
        <Link
          to="/"
          className="navigation-link text-lg lg:text-sm 2xl:text-base"
        >
          Services
        </Link>
        <ChevronDown size={20} className="mt-1" />
      </button>
      <AnimatePresence>
        {submenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: "0" }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="dropdown top-[2.5rem] rounded-2xl min-w-[15rem] overflow-hidden bg-white/10 lg:absolute"
          >
            <ul className="px-5 py-3 flex flex-col items-center gap-3 lg:items-baseline">
              <li className="dropdown-link">
                <Link to="#">Web Development</Link>
              </li>
              <li className="dropdown-link">
                <Link to="#">Logo Designing</Link>
              </li>
              <li className="dropdown-link">
                <Link to="#">UI/UX Designs</Link>
              </li>
              <li className="dropdown-link">
                <Link to="#">Mobile App Development</Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
};

export default HeaderDropdown;
