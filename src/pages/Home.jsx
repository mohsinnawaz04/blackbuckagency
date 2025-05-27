import Hero from "../components/common/Hero";
import Contact from "../components/contact/Contact";
import FAQ from "../components/faq/faq";
import Footer from "../components/footer/Footer";
import Info from "../components/info/Info";
import Portfolio from "../components/portfolio/Portfolio";
import Steps from "../components/steps/Steps";
import Testimonials from "../components/testimonials/Testimonials";
import WhyUs from "../components/why-us/WhyUs";
import Modal from "../components/common/Modal";

const Home = () => {
  return (
    <>
      <Modal />
      <Hero />
      <Info />
      <Portfolio />
      <Steps />
      <WhyUs />
      <Testimonials />
      <Contact />
      <FAQ />
      <Footer />
    </>
  );
};

export default Home;
