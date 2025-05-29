import { AtSign } from "lucide-react";
import { Pencil } from "lucide-react";
import { X } from "lucide-react";
import { MessageSquare } from "lucide-react";
import { PhoneCall } from "lucide-react";
import { User } from "lucide-react";
import { Mail } from "lucide-react";

const Modal = ({ isModalOpen, toggleModal }) => {
  return (
    <div
      className={`modal fixed p-8 pb-14 w-lg rounded-3xl z-50 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transition-all duration-500 ease-in-out ${
        isModalOpen
          ? "opacity-100 rotate-y-0 scale-100"
          : "opacity-0 rotate-y-90 scale-75"
      }
      
`}
      style={{ transformStyle: "preserve-3d" }}
    >
      <h2 className="text-3xl mb-5">Get Started</h2>
      <button
        onClick={toggleModal}
        className="close_modal absolute top-1 right-1 rounded-full p-[7px] cursor-pointer"
      >
        <X size={15} strokeWidth={3.5} />
      </button>

      <form className="modal-form space-y-5">
        <div className="form-group relative flex justify-between">
          <input type="text" placeholder="Name" id="name" />
          <User
            size={20}
            className="form-icon absolute top-1/2 -translate-1/2 right-3"
          />
        </div>
        <div className="form-group relative flex justify-between">
          <input type="email" placeholder="Email" id="email" />
          <AtSign
            size={20}
            className="form-icon absolute top-1/2 -translate-1/2 right-3"
          />
        </div>
        <div className="form-group relative flex justify-between">
          <input type="number" placeholder="Phone" id="phone" />
          <PhoneCall
            size={20}
            className="form-icon absolute top-1/2 -translate-1/2 right-3"
          />
        </div>
        <div className="form-group relative flex justify-between">
          <input type="text" placeholder="Subject" id="subject" />
          <Pencil
            size={20}
            className="form-icon absolute top-1/2 -translate-1/2 right-3"
          />
        </div>

        <div className="relative border rounded-2xl p-5 textarea-wrapper">
          <textarea
            className="w-full"
            rows={5}
            placeholder="Message"
            id="message"
          />
          <MessageSquare
            size={20}
            className="form-icon absolute top-5 right-5"
          />
        </div>

        <button
          type="submit"
          className="flex items-center gap-5 get-started-btn py-3 px-7 rounded-2xl w-fit"
        >
          Submit <Mail size={16} />
        </button>
      </form>
    </div>
  );
};

export default Modal;
