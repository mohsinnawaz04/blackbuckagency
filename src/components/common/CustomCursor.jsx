import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const cursorInnerRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorInner = cursorInnerRef.current;

    const onMouseMove = (e) => {
      cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
      cursorInner.style.left = `${e.clientX}px`;
      cursorInner.style.top = `${e.clientY}px`;
    };

    const onMouseDown = () => {
      cursor.classList.add("click");
      cursorInner.classList.add("cursorinnerhover");
    };

    const onMouseUp = () => {
      cursor.classList.remove("click");
      cursorInner.classList.remove("cursorinnerhover");
    };

    const onLinkHover = () => cursor.classList.add("hover");
    const onLinkLeave = () => cursor.classList.remove("hover");

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);

    const links = document.querySelectorAll("a");
    links.forEach((link) => {
      link.addEventListener("mouseover", onLinkHover);
      link.addEventListener("mouseleave", onLinkLeave);
    });

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
      links.forEach((link) => {
        link.removeEventListener("mouseover", onLinkHover);
        link.removeEventListener("mouseleave", onLinkLeave);
      });
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="cursor"></div>
      <div ref={cursorInnerRef} className="cursor2"></div>
    </>
  );
};

export default CustomCursor;
