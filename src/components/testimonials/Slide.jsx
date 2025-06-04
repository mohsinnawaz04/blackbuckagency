import { SplideSlide } from "@splidejs/react-splide";

const Slide = ({ title, desc, author }) => {
  return (
    <SplideSlide>
      <div className="slide flex flex-col items-center gap-8">
        <h2 className="text-2xl sm:text-3xl lg:text-[40px]">{title}</h2>
        <p>{desc}</p>
        <span className="client_name mt-5 text-2xl lg:text-3xl">{author}</span>
      </div>
    </SplideSlide>
  );
};

export default Slide;
