import { useState } from "react";
import { useRef } from "react";

const Accordion = ({ title, desc, list }) => {
  const [isOpen, setIsOpen] = useState(false);

  const AccordionRef = useRef();
  const handleAccordionResize = (e) => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div
      ref={AccordionRef}
      className={`accordion p-7 rounded-3xl border border-white/10 ${
        isOpen ? "opened" : "collapsed"
      }`}
    >
      <button
        onClick={handleAccordionResize}
        className="accordion-title text-start text-2xl cursor-pointer w-full"
      >
        {title}
      </button>
      <p className="accordion-desc mt-8">{desc}</p>
      {list && (
        <ul>
          <li>
            We first get on a call for in-depth discussions with you to
            understand what your business stands for and what your target
            audience expects.
          </li>
          <li>
            Afterwards, we conduct our own research to understand visuals,
            messaging, and tone that will authentically connect with your target
            audience.
          </li>
          <li>
            Once that’s done, we share this strategy with our customer to ensure
            we're on the same page before starting any work on your brand.
          </li>
          <li>
            After gaining approval and receiving upfront payment, we then start
            doing the work.
          </li>
        </ul>
      )}
    </div>
  );
};

export default Accordion;
