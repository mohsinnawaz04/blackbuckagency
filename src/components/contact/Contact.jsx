import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section className="contact-us">
      <div className="container mx-auto px-5 sm:px-20">
        <div className="grid grid-cols-2 py-24 gap-30 lg:gap-0 lg:py-16">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
