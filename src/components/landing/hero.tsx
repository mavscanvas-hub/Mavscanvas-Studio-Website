import { useEffect, useState } from "react";
import hero from "../../assets/company_op/hero1.webp";
import Button from "../custom/button";
import { FaArrowRightLong } from "react-icons/fa6";
import adobe from "../../assets/company_op/adobe.webp";
import spotify from "../../assets/company_op/spotify.png";
import google from "../../assets/company_op/google.png";
import samsung from "../../assets/company_op/samsung.png";
import microsoft from "../../assets/company_op/microsoft.png";
import amazon from "../../assets/company_op/amazon.webp";

const logos = [google, adobe, spotify, samsung, microsoft, amazon];

export default function Home() {
  // wait for background to load before triggering text animation
  const [bgLoaded, setBgLoaded] = useState(false);

  useEffect(() => {
    let img = new Image();
    img.src = hero;
    img.onload = () => setBgLoaded(true);
    img.onerror = () => setBgLoaded(true); // fallback — still show text if load fails
    return () => {
      img.onload = null;
      img.onerror = null;
      img = null as any;
    };
  }, []);

  return (
    <>
      <div
        className="min-h-screen max-md:min-h-0 overscroll-contain pt-40 max-md:pt-16 pb-10 max-md:pb-5 px-15 max-md:px-3.5 bg-center max-md:bg-top"
        style={{
          backgroundImage: `url(${hero})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          willChange: "background-image",
        }}
      >
        <div className="mt-20 max-md:mt-5 max-w-[1106px] max-md:w-full mx-auto max-md:mx-0 flex flex-col max-md:gap-3.5 gap-0">
          {/* headline: animate only after bgLoaded */}
          <div className="flex flex-col justify-center items-center w-full">
            <span
              className={
                "text-white font-cormo italic text-[76px]/[120%] max-md:text-[26px]/[120%] transform transition-all duration-700 ease-out " +
                (bgLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8")
              }
              style={{ transitionDelay: bgLoaded ? "120ms" : "0ms" }}
            >
              From Idea to Impact,
            </span>

            <span
              className={
                "text-white font-subito font-bold text-[76px]/[110%] max-md:text-[26px]/[120%] transform transition-all duration-900 ease-out " +
                (bgLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12")
              }
              style={{ transitionDelay: bgLoaded ? "260ms" : "0ms" }}
            >
              Digital Solutions That Scale
            </span>
          </div>

          <div
            className={
              "text-[22px]/[120%] max-md:text-[10px]/[120%] italic pb-5 mt-8 max-md:mt-0 max-md:pt-0 max-md:pb-4 font-subito text-white font-light mx-15 max-md:mx-0 text-center transform transition-all duration-700 ease-out" +
              (bgLoaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6")
            }
            style={{ transitionDelay: bgLoaded ? "420ms" : "0ms" }}
          >
            <strong className="font-subito font-bold">Mavscanvas</strong> blends
            strategy, design, and technology to deliver brand systems, products,
            websites, and growth engines that actually perform
          </div>

          <div className="flex justify-center items-center pt-12 max-md:pt-6 mt-0 max-md:mt-4">
            <Button
              className={
                "bg-[#02DDEF] hover:transform hover:scale-105 rounded-full py-5 max-md:py-3 max-md:px-10 px-20 flex gap-6 items-center transform transition-all duration-500 ease-out " +
                (bgLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6")
              }
              onClick={() => {
                console.log("Logged");
              }}
            >
              <span className="font-medium text-[28px]/[120%] max-md:text-[14px]/[120%]">
                Start a Project
              </span>
              <FaArrowRightLong className="text-3xl max-md:text-xl" />
            </Button>
          </div>

          <div className="mt-10 max-md:mt-3 flex flex-col items-center justify-center gap-8 max-md:gap-3 text-white">
            <h4 className="text-[22px]/[120%] max-md:text-[7px]/[120%] font-normal">
              Trusted by
            </h4>
            <div className="flex items-center justify-center gap-17 max-md:gap-4">
              {logos.map((logo, index) => (
                <img
                  key={index}
                  src={logo}
                  alt={`logo-${index}`}
                  className="h-6 w-auto max-md:h-full max-md:w-[40px]"
                  loading="lazy"
                  decoding="async"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
