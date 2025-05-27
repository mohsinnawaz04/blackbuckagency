import { Mail } from "lucide-react";

const Modal = () => {
  return (
    <div className="modal fixed z-50 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
      <h2>Get Started</h2>

      <form className="modal-form">
        <div className="form-group">
          <input type="text" placeholder="Name" id="name" />
        </div>
        <div className="form-group">
          <input type="email" placeholder="Email" id="email" />
        </div>
        <div className="form-group">
          <input type="number" placeholder="Phone" id="phone" />
        </div>
        <div className="form-group">
          <input type="text" placeholder="Subject" id="subject" />
        </div>
        <div className="form-group">
          <input type="text" placeholder="Message" id="message" />
        </div>

        <button type="submit">
          Submit <Mail />
        </button>
      </form>
    </div>
  );
};

export default Modal;
