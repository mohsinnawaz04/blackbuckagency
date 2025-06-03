const SvgSecond = ({ mirror = false }) => {
  return (
    <svg
      className={`absolute z-10 second  hidden lg:block ${
        mirror
          ? "-scale-x-100 right-46 bottom-18 xl:right-54 xl:bottom-12"
          : "left-46 bottom-18 xl:left-52 xl:bottom-18"
      }`}
      width="104"
      height="42"
      viewBox="0 0 104 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask id="path-1-inside-1_55_425" fill="white">
        <path d="M0 17C0 30.8071 11.1929 42 25 42H104V0H0V17Z"></path>
      </mask>
      <path
        d="M-2 17C-2 31.9117 10.0883 44 25 44H104V40H25C12.2975 40 2 29.7025 2 17H-2ZM104 0H0H104ZM-2 0V17C-2 31.9117 10.0883 44 25 44V40C12.2975 40 2 29.7025 2 17V0H-2ZM104 42V0V42Z"
        fill="#293740"
        mask="url(#path-1-inside-1_55_425)"
      ></path>
    </svg>
  );
};

export default SvgSecond;
