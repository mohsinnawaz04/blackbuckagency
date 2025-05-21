import { TrendingUp } from "lucide-react";
import React from "react";

const ContactForm = () => {
  return (
    <div className="col-span-1 contact-form-wrapper">
      <form className="contact-form ps-20 grid grid-cols-2 gap-5 space-y-10">
        <h2 className="font-medium text-5xl col-span-2">Get Started today !</h2>

        <div className="form-group">
          <label htmlFor="name" className="capitalize inline-block mb-3">
            name *
          </label>
          <input type="text" id="name" />
        </div>

        <div className="form-group">
          <label htmlFor="email" className="capitalize inline-block mb-3">
            email *
          </label>
          <input type="text" id="email" />
        </div>

        <div className="form-group">
          <label htmlFor="phone" className="capitalize inline-block mb-3">
            phone *
          </label>
          <input type="text" id="phone" />
        </div>

        <div className="form-group">
          <label htmlFor="subject" className="capitalize inline-block mb-3">
            subject
          </label>
          <input type="text" id="subject" />
        </div>

        <div className="form-group col-span-2">
          <label htmlFor="message" className="capitalize inline-block mb-3">
            message
          </label>
          <input type="text" id="message" />
        </div>

        <button
          type="submit"
          className="btn-submit w-fit flex gap-3 capitalize rounded-full border border-white px-8 py-3 cursor-pointer"
        >
          submit <TrendingUp />
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
