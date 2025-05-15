import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

const TestimonialSlider = () => {
  return (
    <Splide
      options={{
        type: "loop",
        padding: "20vw",
        gap: "1.2rem",
        updateOnMove: true,
        interval: 2000,
        speed: 1000,
        arrows: false,
      }}
      aria-label="My Favorite Images"
    >
      <SplideSlide>
        <div className="slide flex flex-col items-center gap-8">
          <h2>They took the stress out of branding…</h2>
          <p>
            The results we have got so far are outstanding! Our bookings have
            increased, and we're reaching clients we never thought possible
          </p>
          <p className="client_name mt-5">Jordan R</p>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className="slide flex flex-col items-center gap-8">
          <h2>They took the stress out of branding…</h2>
          <p>
            The results we have got so far are outstanding! Our bookings have
            increased, and we're reaching clients we never thought possible
          </p>
          <p className="client_name mt-5">Jordan R</p>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className="slide flex flex-col items-center gap-8">
          <h2>They took the stress out of branding…</h2>
          <p>
            The results we have got so far are outstanding! Our bookings have
            increased, and we're reaching clients we never thought possible
          </p>
          <p className="client_name mt-5">Jordan R</p>
        </div>
      </SplideSlide>
    </Splide>
  );
};

export default TestimonialSlider;
