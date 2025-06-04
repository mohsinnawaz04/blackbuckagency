import { useState, useRef, useEffect } from "react";

const Accordion = ({ title, desc, list, isOpen, onToggle }) => {
  const contentRef = useRef(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    if (isOpen) {
      const scrollHeight = contentRef.current?.scrollHeight || 0;
      setHeight(`${scrollHeight}px`);
    } else {
      setHeight("0px");
    }
  }, [isOpen]);
  return (
    <div
      className={`accordion p-7 rounded-3xl border border-white/10 ${
        isOpen ? "opened" : "collapsed"
      }`}
    >
      {/* Accordion Header */}
      <div className="accordion-header">
        <button
          onClick={onToggle}
          className="accordion-title text-start cursor-pointer w-full"
        >
          <h2 className="max-w-[90%] text-xl lg:text-2xl">{title}</h2>
        </button>
      </div>

      {/* Accordion Body */}
      <div
        ref={contentRef}
        style={{ height }}
        className={`accordion-body overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "opened" : "collapsed"
        }`}
      >
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
              messaging, and tone that will authentically connect with your
              target audience.
            </li>
            <li>
              Once that’s done, we share this strategy with our customer to
              ensure we're on the same page before starting any work on your
              brand.
            </li>
            <li>
              After gaining approval and receiving upfront payment, we then
              start doing the work.
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Accordion;
