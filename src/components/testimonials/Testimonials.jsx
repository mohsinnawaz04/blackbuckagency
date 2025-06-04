import TestimonialSlider from "./TestimonialSlider";

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container">
        <div className="text-center">
          <h2 className="info-heading text-[6.5vw] lg:text-[5vw]">
            Testimonials
          </h2>
          <p>
            Find firsthand what our customers are saying about the exceptional
            work we deliver.
          </p>
        </div>
      </div>
      <div className="mt-10">
        <TestimonialSlider />
      </div>
    </section>
  );
};

export default Testimonials;
