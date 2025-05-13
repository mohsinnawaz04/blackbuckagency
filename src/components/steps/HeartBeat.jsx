import pulseIcon from "../../assets/images/pulse-icon.png";

const HeartBeat = () => {
  return (
    <div className="pulse size-24 rounded-full flex items-center justify-center absolute z-40 left-1/2 -translate-1/2 -top-14">
      <img src={pulseIcon} className="size-1/2" alt="Pulse Icon" />
    </div>
  );
};

export default HeartBeat;
