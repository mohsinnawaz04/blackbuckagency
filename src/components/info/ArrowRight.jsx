const ArrowRight = ({ width = 82, height = 79, stroke = 5 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 82 79"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.5 39.5L57.5 39.5"
        stroke="white"
        strokeWidth={stroke}
        strokeLinecap="round"
      ></path>
      <path
        d="M39.7734 18.4868L59.9886 38.7019C60.2636 38.977 60.2636 39.423 59.9886 39.698L39.7734 59.9132"
        stroke="white"
        strokeWidth={stroke}
        strokeLinecap="round"
      ></path>
    </svg>
  );
};

export default ArrowRight;
