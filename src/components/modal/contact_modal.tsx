import { useEffect } from "react";
import bg from "../../assets/footer/contactbg.png";
import Buttonbg from "../../assets/about/deliver_btn_bg.png";
import Socialbg from "../../assets/about/social_bg.png";
import {
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
  FaWhatsapp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { IoMail } from "react-icons/io5";
import { IoMdCall } from "react-icons/io";

const contacts = [
  {
    method: "Email",
    icon: <IoMail />,
    detail: "mavscanvas@gmail.com",
  },
  {
    method: "Phone",
    icon: <IoMdCall />,
    detail: "+234 (0) 9121635235",
  },
];
const socialMedia = [
  {
    name: "Facebook",
    link: "https://www.facebook.com/mavscanvas",
    icon: <FaFacebookF />,
  },
  { name: "Twitter", link: "https://x.com/MavsCanvas", icon: <FaXTwitter /> },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/company/mavscanvas",
    icon: <FaLinkedinIn />,
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/mavs_canvas/",
    icon: <FaInstagram />,
  },
  { name: "WhatsApp", link: "https://whatsapp.com", icon: <FaWhatsapp /> },
];

export default function ContactModal({
  setContactModal,
}: {
  setContactModal: (open: boolean) => void;
}) {
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow || "";
    };
  }, []);

  return (
    <div
      className="px-10 z-[9999] bg-white/30 backdrop-blur-sm w-full h-screen fixed inset-0 flex items-center justify-center cursor-pointer"
      onClick={() => setContactModal(false)}
    >
      <div
        className=" bg-white py-10 px-10 cursor-auto flex-col gap-20 flex items-center justify-start rounded-[15px]"
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundImage: `url(${bg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col items-center justify-center max-w-[584px]">
          <span className="font-cormo text-[64px]/[120%] italic">
            For More Inquiries
          </span>
          <span className="font-subito font-bold text-[64px]/[120%]">
            Reach Out to Us
          </span>
        </div>
        <div className="flex flex-col gap-15 justify-center items-center">
          <div className="flex items-center max-md:flex-col gap-11 justify-between max-md:gap-7 w-full">
            {contacts.map((contact, idx) => (
              <div key={idx} className="flex flex-col gap-3 max-md:min-w-full">
                <span className="uppercase text-3xl max-md:text-xs font-medium text-black">
                  {contact.method}
                </span>
                <button
                  className="flex cursor-pointer items-center gap-5 justify-start bg-black px-10 max-md:px-4 max-md:py-3 py-6 rounded-full"
                  style={{
                    backgroundImage: `url(${Buttonbg})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                  onClick={() => {
                    if (contact.method === "Email") {
                      window.location.href = `mailto:${contact.detail}`;
                    } else if (contact.method === "Phone") {
                      return;
                    }
                  }}
                >
                  <span className="text-white text-[38px] max-md:text-xl">
                    {contact.icon}
                  </span>
                  <span className="text-white text-4xl/[120%] max-md:text-[20px]/[120%] font-light font-subito">
                    {contact.detail}
                  </span>
                </button>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-4 max-md:gap-2">
            {socialMedia.map((item) => (
              <Link
                key={item.name}
                to={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-4xl max-md:text-xl hover:scale-110 p-3 bg-black border text-white rounded-full transition-transform"
                style={{
                  backgroundImage: `url(${Socialbg})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {item.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
