const StepCard = ({ num, title, desc }) => {
  return (
    <div className="step-card flex flex-col items-center gap-5 md:max-w-xs rounded-3xl px-3 py-14 z-20 xl:px-7">
      <span className="num">{num}</span>
      <h4 className="card-title font-bold capitalize text-center">{title}</h4>
      <p className="text-center">{desc}</p>
    </div>
  );
};

export default StepCard;
