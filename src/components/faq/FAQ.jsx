import Accordion from "./Accordion";
import { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0); // First open by default

  const handleToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const faqAccordions = [
    {
      title: "How long does the branding process take?",
      desc: "timeline depends on the scope of your project. On average, it can take anywhere from a few days to a few weeks to complete a full branding strategy, including research, design, and implementation",
    },
    {
      title: "Could a website redesign help me attract more traffic?",
      desc: "Yes, without steady site traffic, you're missing out on potential revenue. Our web design and development team can help you in crafting custom websites, enhancing IJI/IJX, and implementing branding strategies that'll drive audience straight on to your site",
    },
    {
      title:
        "Can you help refresh an existing brand or do you only work with new brands?",
      desc: "Absolutely! We can rebrand your existing site or make it from scratch. It's totally your choice. We encourage you to book a consultation with us, so our project manager could explain to you what would work better for your brand or business.",
    },
    {
      title: "How do you make sure my brand reflects my business values?",
      desc: "The process for implementing your brands value goes down in the following manner:",
      list: true,
    },
  ];
  return (
    <section className="faq pt-30 -mb-[21.5rem] relative z-50">
      <div className="container mx-auto px-2 sm:px-10 xl:px-5">
        <h2 className="capitalize text-center text-4xl leading-tight max-w-[10ch] mx-auto lg:text-[5vw]">
          frequently asked questions
        </h2>
        <p className="text-center text-base mx-auto lg:max-w-[65ch]">
          If you have some questions then check this faq section, maybe you’ll
          find answers to some of your questions
        </p>

        <div className="accordions-wrapper mt-20 space-y-5">
          {faqAccordions.map((acc, idx) => (
            <Accordion
              key={idx}
              title={acc.title}
              desc={acc.desc}
              list={acc.list ? acc.list : false}
              isOpen={openIndex === idx}
              onToggle={() => handleToggle(idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
