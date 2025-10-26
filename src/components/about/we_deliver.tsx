import { IoMail } from "react-icons/io5";
import { IoMdCall } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import {
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
  FaWhatsapp,
} from "react-icons/fa";
import Buttonbg from "../../assets/about/deliver_btn_bg.png";
import Socialbg from "../../assets/about/social_bg.png";
import Deliverbg from "../../assets/about/deliver_bg.png";
import Button from "../custom/button";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";

// CountUp component: animates numeric portion of strings like "85%", "2.1x", "3.5x"
function CountUp({ value, className }: { value: string; className?: string }) {
  const elRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    const match = value.match(/^([\d.]+)(.*)$/);
    if (!match) {
      el.textContent = value;
      return;
    }

    const numStr = match[1];
    const suffix = match[2] || "";
    const end = parseFloat(numStr);
    const decimals = numStr.includes(".") ? numStr.split(".")[1].length : 0;
    const duration = 1000;
    let rafId: number | null = null;
    let startTime: number | null = null;
    let canceled = false;

    const format = (v: number) =>
      decimals > 0
        ? v.toFixed(decimals) + suffix
        : Math.round(v).toString() + suffix;

    const easeOutQuad = (t: number) => 1 - (1 - t) * (1 - t);

    const animate = (t: number) => {
      if (canceled) return;
      if (startTime === null) startTime = t;
      const elapsed = t - startTime;
      const progress = Math.min(1, elapsed / duration);
      const eased = easeOutQuad(progress);
      const current = end * eased;
      el.textContent = format(current);
      if (progress < 1) {
        rafId = requestAnimationFrame(animate);
      } else {
        rafId = null;
      }
    };

    el.textContent = (decimals > 0 ? (0).toFixed(decimals) : "0") + suffix;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            rafId = requestAnimationFrame(animate);
            io.disconnect();
            break;
          }
        }
      },
      { threshold: 0.3 }
    );

    io.observe(el);

    return () => {
      canceled = true;
      io.disconnect();
      if (rafId != null) cancelAnimationFrame(rafId);
    };
  }, [value]);

  return (
    <span ref={elRef} className={className} aria-label={value}>
      {value}
    </span>
  );
}

const outcomes = [
  {
    value: "85%",
    label: "Brand Recall",
  },
  {
    value: "2.1x",
    label: "Conversions",
  },
  {
    value: "70%",
    label: "Web optimization",
  },
  {
    value: "120%",
    label: "Qualified Leads",
  },
  {
    value: "35%",
    label: "Customer Acquisition Cost",
  },
  {
    value: "3.5x",
    label: "Customer Retention",
  },
];

const contacts = [
  {
    method: "Email",
    icon: <IoMail />,
    detail: "hello@mavscanvas.com",
  },
  {
    method: "Phone",
    icon: <IoMdCall />,
    detail: "+234 (0) 9121635235",
  },
];

const socialMedia = [
  { name: "Facebook", link: "https://facebook.com", icon: <FaFacebookF /> },
  { name: "Twitter", link: "https://twitter.com", icon: <FaXTwitter /> },
  { name: "LinkedIn", link: "https://linkedin.com", icon: <FaLinkedinIn /> },
  { name: "Instagram", link: "https://instagram.com", icon: <FaInstagram /> },
  { name: "WhatsApp", link: "https://whatsapp.com", icon: <FaWhatsapp /> },
];

export default function WeDeliver() {
  return (
    <section
      className="bg-[#FAFAFA] pt-15 max-md:pt-7 px-15 max-md:px-4 pb-40 max-md:pb-12.5 flex flex-col gap-47 max-md:gap-14 font-subito"
      style={{
        backgroundImage: `url(${Deliverbg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "top",
      }}
    >
      <div className="flex flex-col gap-22.5 max-md:gap-7">
        <div>
          <h2 className="text-[90px]/[120%] max-md:text-[36px]/[120%] font-cormo italic text-[#161616]">
            The Consistent
          </h2>
          <h3 className="text-[90px]/[120%] max-md:text-[36px]/[120%] font-extrabold text-[#161616] font-subito">
            Results We Deliver
          </h3>
        </div>
        <div className="grid grid-cols-3 items-center px-20 max-md:px-1 mt-25 max-md:mt-0 relative">
          <div className="absolute inset-y-0 left-[36%] max-md:left-[34%] w-px bg-[linear-gradient(0deg,_#FA01F0_0%,_#02DDEF_100%)] rounded-full" />
          <div className="absolute inset-y-0 left-[64%] max-md:left-[66%] w-px bg-[linear-gradient(0deg,_#FA01F0_0%,_#02DDEF_100%)] rounded-full" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[1.1px] max-md:w-[90%] bg-[linear-gradient(90deg,_#02DDEF_0%,_#FA01F0_100%)] w-[80%]"></div>
          {outcomes.map((outcome, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center p-20 max-md:p-8 relative"
            >
              <CountUp
                value={outcome.value}
                className="text-[108px]/[120%] max-md:text-[34px]/[120%] font-extrabold text-black"
              />
              <span className="text-3xl max-md:text-[12px]/[120%] text-black font-light text-center">
                {outcome.label}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-28 max-md:gap-7">
        <div className="flex flex-col gap-32 max-md:gap-6.5">
          <div>
            <h2 className="text-[90px]/[120%] max-md:text-[36px]/[120%] font-cormo italic text-[#161616]">
              For More Inquiries
            </h2>
            <h3 className="text-[90px]/[120%] max-md:text-[36px]/[120%] font-extrabold text-[#161616]">
              Reach Out to Us
            </h3>
          </div>
          <div className="flex items-center max-md:flex-col justify-between max-md:gap-7 w-full">
            {contacts.map((contact, idx) => (
              <div
                key={idx}
                className="flex flex-col gap-3 min-w-[530px] max-md:min-w-full"
              >
                <span className="uppercase text-3xl max-md:text-xs font-medium text-black">
                  {contact.method}
                </span>
                <div
                  className="flex items-center gap-5 justify-start bg-black px-10 max-md:px-4 max-md:py-3 py-6 rounded-full"
                  style={{
                    backgroundImage: `url(${Buttonbg})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <span className="text-white text-5xl max-md:text-xl">
                    {contact.icon}
                  </span>
                  <span className="text-white text-4xl/[120%] max-md:text-[20px]/[120%] font-light font-subito">
                    {contact.detail}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full flex flex-col items-center justify-center">
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
          <span className="text-[32px]/[120%] max-md:text-[10px]/[120%] font-light text-center mt-38 max-md:mt-13 block max-md:w-full max-w-[800px]">
            We are prepared to replicate these results for your brand. Are you
            ready to begin?
          </span>
          <div className="flex justify-center items-center mt-15 max-md:mt-5 font-subito">
            <Button
              className="bg-[#02DDEF] hover:scale-105 rounded-full py-5.5 max-md:py-3 max-md:px-10 px-24 flex gap-6 max-md:gap-2 items-center"
              onClick={() => {
                console.log("Logged");
              }}
            >
              <span className="font-medium text-[28px] text-[28px]/[120%] max-md:text-[14px]/[120%]">
                Start a Project
              </span>
              <FaArrowRightLong className="text-2xl max-md:text-[20px]" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
