import Accordion from "./Accordion";

const FAQ = () => {
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
      <div className="container">
        <h2 className="capitalize text-center text-8xl leading-28 max-w-[10ch] mx-auto">
          frequently asked questions
        </h2>
        <p className="text-center text-base mx-auto lg:max-w-[65ch]">
          If you have some questions then check this faq section, maybe you’ll
          find answers to some of your questions
        </p>

        <div className="accordions-wrapper mt-20 space-y-5">
          {faqAccordions.map((acc) => (
            <Accordion
              title={acc.title}
              desc={acc.desc}
              list={acc.list ? acc.list : false}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
