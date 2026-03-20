import { useEffect, useState } from "react";
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
  const [bgLoaded, setBgLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setBgLoaded(true), 60);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="relative bg-black overflow-hidden w-full h-screen max-lg:h-full">
      <div className="absolute flex items-center justify-center w-full h-full pointer-events-none top-5 max-lg:top-0">
        <div
          aria-hidden
          className="bg-[conic-gradient(from_90deg,black_0%,black_18%,black_56%,#FA01F0_100%)] w-[50%] h-full"
        />
        <div className="bg-black w-full h-[400px] max-lg:h-[300px] blur-[80px] max-lg:blur-[50px] absolute z-5 top-[-100px] max-lg:top-[-170px] will-change-transform" />
        <div className="w-[698px] h-[720px] max-lg:h-[252px] max-lg:w-[250px] bg-[#02DDEF]/30 rounded-full blur-[500px] max-lg:blur-[120px] absolute z-10 will-change-transform top-[-80px] max-lg:top-[-20px]" />
        <div
          aria-hidden
          className="bg-[conic-gradient(from_90deg,black_0%,black_18%,black_56%,#FA01F0_100%)] to-100% w-[50%] h-full scale-x-[-1]"
        />
      </div>

      <div className="min-h-screen max-md:min-h-0 overscroll-hidden pt-40 max-md:pt-20 pb-20 max-lg:pb-16 px-15 max-md:px-3.5 relative z-50">
        <div className="mt-20 max-md:mt-5 pb-10 max-w-[1106px] max-md:w-full mx-auto max-md:mx-0 flex flex-col max-md:gap-3 gap-5">
          <div className="flex flex-col justify-center items-center w-full">
            <span
              className={
                "text-white font-cormo italic text-[76px]/[120%] max-md:text-[1.625rem]/[120%] transform transition-all duration-700 ease-out " +
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
                "text-white font-subito font-bold text-[76px]/[110%] max-md:text-[1.5rem]/[120%] transform transition-all duration-900 ease-out text-center" +
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
              "text-[22px]/[120%] max-md:text-[10px]/[120%] italic pb-10 mt-8 max-md:mt-0 max-md:pt-0 max-md:pb-4 font-subito text-white font-light mx-15 max-md:mx-0 text-center transform transition-all duration-700 ease-out " +
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
        </div>

        <div className="flex justify-center items-center pt-5">
          <Button
            className={
              "bg-[#02DDEF] hover:transform hover:scale-105 rounded-full py-4 max-md:py-3 max-md:px-10 px-12 flex gap-6 items-center transform transition-all duration-500 ease-out " +
              (bgLoaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6")
            }
            onClick={() => console.log("Logged")}
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
  );
}
