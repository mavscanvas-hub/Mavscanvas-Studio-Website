import FooterBg from "../assets/company/footerbg.png";
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

export default function Footer() {
  return (
    <footer
      className="bg-black text-white px-20 py-25 w-full"
      style={{
        backgroundImage: `url(${FooterBg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="flex items-start gap-10">
        <div className="pb-34 pt-14">
          <div className="grid grid-cols-3 gap-8">
            <div className="flex flex-col gap-10">
              <h3 className="text-4xl font-semibold mb-4">Menu</h3>
              <ul className="space-y-2">
                {menu.map((item) => (
                  <li key={item.name} className="text-xl">
                    <a href={item.link} className="hover:underline">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-10">
              <h3 className="text-4xl font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                {support.map((item) => (
                  <li key={item.name} className="text-xl">
                    <a href={item.link} className="hover:underline">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-10">
              <h3 className="text-4xl font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                {contact.map((item, index) => (
                  <li key={index} className="text-xl flex items-center gap-2">
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
        <div className="flex flex-col gap-5 max-w-[459px]">
          <span className="text-right text-5xl/[120%]">
            Join Our Newsletter Channel
          </span>
          <div className="flex flex-col items-center gap-2 pl-10">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-6 py-3 rounded-4xl text-base border w-full focus-within:outline-0"
            />
            <div className="flex justify-between items-center gap-5">
              <Button
                onClick={() => {
                  console.log("Subscribed");
                }}
                className="bg-white text-black text-[22px] py-2.5 px-10 rounded-full"
              >
                Subscribe
              </Button>
              <div className="flex items-center gap-4 ">
                {socialMedia.map((item) => (
                  <a
                    key={item.name}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl hover:scale-110 p-2 border rounded-full transition-transform"
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
        <div className="flex-1 border-b-[1px] border-white mb-10" />
        <span className="text-center">©copyright. All rights reserved.</span>
      </div>
    </footer>
  );
}
