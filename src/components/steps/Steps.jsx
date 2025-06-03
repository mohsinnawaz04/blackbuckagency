import HeartBeat from "./HeartBeat";
import StepCard from "./StepCard";
import SvgFirst from "./SvgFirst";
import SvgLast from "./SvgLast";
import SvgSecond from "./SvgSecond";

const Steps = () => {
  const stepCards = [
    {
      num: "01",
      title: "We're obsessed with results",
      desc: "We don't just generate fancy reports that look good on a shelf. We track, analyze, and tweak your campaigns until they're laser-focused on driving real results for your business.",
    },
    {
      num: "02",
      title: "We're not afraid to do things differently",
      desc: "We come up with the most effective marketing that breaks the mold of all redundant strategies. We'll brainstorm creative concepts that will leave a lasting impression on your target audience.",
    },
    {
      num: "03",
      title: "We’re all about Strategy",
      desc: "We start off by conducting an in-depth competitor audit and then create a strategic plan for doing all the brand work. This includes defining the messaging, content, and services necessary to drive your business toward its growth targets.",
    },
    {
      num: "04",
      title: "We're transparent with all our customers",
      desc: "On every step we take, you'll always know exactly what we're doing and why. No smoke and mirrors, we bring just honest communication and a collaborative approach to the table",
    },
  ];
  return (
    <section className="steps py-72">
      <div className="container mx-auto px-2 sm:px-10 xl:px-5">
        <h2 className="info-heading text-center lg:px-5">
          MARKETING AGENCIES ARE EVERYWHERE… BUT WE’RE UNLIKE OTHER
        </h2>
        <div className="step-cards flex flex-wrap justify-center gap-5 relative mt-40 lg:flex-nowrap">
          {stepCards.map((card, idx) => (
            <StepCard
              key={idx}
              num={card.num}
              title={card.title}
              desc={card.desc}
            />
          ))}
          <SvgFirst />
          <SvgSecond />
          <SvgSecond mirror={true} />
          <SvgLast />
          <HeartBeat />
        </div>
      </div>
    </section>
  );
};

export default Steps;
