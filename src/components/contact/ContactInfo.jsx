import { Link } from "react-router";
import DubaiLogo from "../../assets/images/dubai.svg";
const ContactInfo = () => {
  return (
    <div className="contact-info col-span-2 space-y-14 lg:pe-20 lg:col-span-1">
      {/* Country Card */}
      <div className="country flex flex-col gap-5 items-center justify-center max-w-max rounded-lg p-9">
        <img src={DubaiLogo} alt="Dubai Country Logo" />
        <h5 className="country_name text-2xl uppercase">Dubai</h5>
      </div>
      {/* Country Office Location Info */}
      <h2 className="office_info text-2xl uppercase">
        <span className="country_name text-cyan">Dubai</span> -{" "}
        <span className="text-cyan">Office</span> - <span>UAE</span>
      </h2>

      <div className="contact-details flex flex-wrap justify-between gap-10">
        <div className="phone_wrapper">
          <p>Phone</p>{" "}
          <Link to={"tel:+971565952820"} className="phone">
            +971 56 595 2820
          </Link>
        </div>
        <div className="email_wrapper">
          <p>Email </p>
          <Link to={"mailto:support@blackbuckagency.com"} className="email">
            support@blackbuckagency.com
          </Link>
        </div>
        <div className="address_wrapper max-w-[30ch]">
          <p>Address </p>
          <Link to={""} className="address">
            FDCW1053 Compass Building, Al Shohada Road, AL Hamra Industrial
            Zone-FZ, Ras Al Khaimah, UAE
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
