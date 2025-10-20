import FooterBg from "../assets/company_op/footerbg.webp";
import { IoMdCall, IoMdMail } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

import Button from "./custom/button";

const menu = [
  { name: "Home", link: "/" },
  { name: "About Us", link: "/about" },
  { name: "Services", link: "/services" },
  { name: "Work", link: "/work" },
];
const support = [
  { name: "FAQ", link: "/faq" },
  { name: "Contact Us", link: "/contact" },
  { name: "Privacy Policy", link: "/privacy" },
  { name: "Terms of Service", link: "/terms" },
];
const contact = [
  { icon: <IoMdMail />, value: "info@mavscanvas.com" },
  { icon: <IoMdCall />, value: "+234 (0) 9121635235" },
];
const socialMedia = [
  { name: "Facebook", link: "https://facebook.com", icon: <FaFacebookF /> },
  { name: "Twitter", link: "https://twitter.com", icon: <FaXTwitter /> },
  { name: "LinkedIn", link: "https://linkedin.com", icon: <FaLinkedinIn /> },
  { name: "Instagram", link: "https://instagram.com", icon: <FaInstagram /> },
];

export default function Footer({
  faqModal,
  setFaqModal,
}: {
  faqModal: boolean;
  setFaqModal: (open: boolean) => void;
}) {
  return (
    <footer
      className="bg-black text-white px-20 py-25 max-md:py-10 max-md:px-4 w-full h-full font-subito"
      style={{
        backgroundImage: `url(${FooterBg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="flex items-start max-md:flex-col-reverse max-md:items-center gap-10 max-md:gap-3.5">
        <div className="pb-34 max-md:pb-4 pt-14 max-md:pt-6">
          <div className="grid grid-cols-3 gap-8 max-md:gap-x-2">
            <div className="flex flex-col gap-10 max-md:gap-0">
              <h3 className="text-4xl max-md:text-[15px]/[120%] max-md:font-medium font-semibold mb-4">
                Menu
              </h3>
              <ul className="space-y-2">
                {menu.map((item) => (
                  <li
                    key={item.name}
                    className="text-xl max-md:text-[9px]/[120%] max-md:font-light"
                  >
                    <a href={item.link} className="hover:underline">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-10 max-md:gap-0">
              <h3 className="text-4xl max-md:text-[15px]/[120%] max-md:font-medium font-semibold mb-4">
                Support
              </h3>
              <ul className="space-y-2">
                {support.map((item) => (
                  <li
                    key={item.name}
                    className="text-xl max-md:text-[9px]/[120%] max-md:font-light"
                  >
                    <a
                      className="hover:underline"
                      onClick={() => {
                        if (item.name === "FAQ") {
                          setFaqModal(!faqModal);
                        } else {
                          window.location.href = item.link;
                        }
                      }}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-10 max-md:gap-0">
              <h3 className="text-4xl font-semibold max-md:text-[15px]/[120%] max-md:font-medium mb-4">
                Contact
              </h3>
              <ul className="space-y-2">
                {contact.map((item, index) => (
                  <li
                    key={index}
                    className="text-xl flex items-center max-md:text-[9px]/[120%] max-md:font-light gap-2"
                  >
                    <span className="">{item.icon}</span>{" "}
                    <a
                      href={`mailto:${item.value}`}
                      className="hover:underline"
                    >
                      {item.value}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 max-md:gap-3 max-w-[459px] max-md:w-full">
          <span className="text-right text-5xl/[120%] max-md:text-[23px]/[120%] max-md:text-center">
            Join Our Newsletter Channel
          </span>
          <div className="flex flex-col items-center gap-2 pl-10 max-md:pl-0 w-full">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-6 max-md:px-3.5 py-3 max-md:py-2 rounded-4xl text-base border w-full focus-within:outline-0"
            />
            <div className="flex justify-between items-center gap-5 max-md:gap-3">
              <Button
                onClick={() => {
                  console.log("Subscribed");
                }}
                className="bg-white text-black text-[22px] max-md:w-full max-md:text-[12px]/[120%] max-md:font-bold py-2.5 max-md:py-2.5 px-10 max-md:px-15 rounded-full"
              >
                Subscribe
              </Button>
              <div className="flex max-md:flex-1 items-center gap-4 max-md:gap-1">
                {socialMedia.map((item) => (
                  <a
                    key={item.name}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl max-md:text-[12px] hover:scale-110 p-2 border rounded-full transition-transform"
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <div className="flex-1 border-b-[1px] max-md:border-b-[0.34px] border-white mb-10 max-md:mb-4" />
        <span className="text-center max-md:text-[5px]/[120%]">
          ©copyright. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
