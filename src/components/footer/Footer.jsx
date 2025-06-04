import { Link } from "react-router";
import logo from "../../assets/logo.png";
import { Copyright } from "lucide-react";
import { Facebook } from "lucide-react";
import { Instagram } from "lucide-react";
import { Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container mx-auto px-5 sm:px-10 xl:px-0">
        <div className="grid grid-cols-3 gap-8 space-y-5">
          <div className="col-span-3 space-y-5 lg:col-span-1">
            <div className="img-wrapper">
              <img src={logo} alt="" />
            </div>
            <p className="max-w-[38ch]">
              Black Buck Agency Dubai is a brand focused company that creates
              impactful digital strategies for businesses and startups based in
              the United Arab Emirates.
            </p>
          </div>
          <div className="col-span-3 lg:col-span-1">
            <div className="flex justify-around lg:justify-between">
              <div className="text-center lg:text-start">
                <h5>Our Company</h5>
                <ul className="mt-5 space-y-2">
                  <li>
                    <Link to={"#"}>About Us</Link>
                  </li>
                  <li>
                    <Link to={"#"}>Services</Link>
                  </li>
                  <li>
                    <Link to={"#"}>Terms & Conditions</Link>
                  </li>
                  <li>
                    <Link to={"#"}>Privacy Policy</Link>
                  </li>
                </ul>
              </div>

              <div className="text-center lg:text-start">
                <h5>Services</h5>
                <ul className="mt-5 space-y-2">
                  <li>
                    <Link to={"#"}>Web Development</Link>
                  </li>
                  <li>
                    <Link to={"#"}>Logo Design</Link>
                  </li>
                  <li>
                    <Link to={"#"}>UI / UX Design</Link>
                  </li>
                  <li>
                    <Link to={"#"}>Mobile App Development</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-span-3 space-y-5 lg:col-span-1">
            <h4>Talk to Us!</h4>
            <div className="space-y-2">
              <Link className="block" to={"tel:+971565952820"}>
                +971 56 595 2820
              </Link>
              <Link className="block" to={"mailto:support@blackbuckagency.com"}>
                support@blackbuckagency.com
              </Link>
              <Link className="block max-w-[45ch]" to={"#"}>
                FDCW1053 Compass Building, Al Shohada Road, AL Hamra Industrial
                Zone-FZ, Ras Al Khaimah, UAE
              </Link>
            </div>
            <div className="flex gap-5">
              <Link className="social-icon" to={"/"}>
                <Facebook size={17} />
              </Link>
              <Link className="social-icon" to={"/"}>
                <Instagram size={17} />
              </Link>
              <Link className="social-icon" to={"/"}>
                <Linkedin size={17} />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <div className="separator bg-white/10 mb-2"></div>
          <div className="flex items-center gap-1 justify-center w-full">
            <Copyright size={14} />
            <p>
              <span>
                <Link to={"/"} className="text-cyan">
                  Black Buck Agency{" "}
                </Link>
              </span>
              2024. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
