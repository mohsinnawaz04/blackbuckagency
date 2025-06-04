import { Splide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import Slide from "./Slide";

const TestimonialSlider = () => {
  const slides = [
    {
      title: "We're reaching clients we never thought possible…",
      desc: "The results we have got so far are outstanding! Our bookings have increased, and we're reaching clients we never thought possible",
      author: "Jordan R",
    },
    {
      title: "They took the stress out of branding…",
      desc: "Black Buck delivered exactly what we needed, right on time. My website and socials were all muddled but thanks to them we now have a decent website to show our clients",
      author: "Maya Y",
    },
    {
      title: "Their expertise in branding helped us stand out…",
      desc: "Black Buck worked on our social media campaigns. Now, we're seeing direct traffic, increased online orders, and genuine connections with community.",
      author: "Ahlam J.",
    },
  ];

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
        autoplay: false,
        breakpoints: {
          768: {
            padding: "10vw",
          },
        },
      }}
      aria-label="My Favorite Images"
    >
      {slides.map((slide, idx) => (
        <Slide
          key={idx}
          title={slide.title}
          desc={slide.desc}
          author={slide.author}
        />
      ))}
    </Splide>
  );
};

export default TestimonialSlider;
