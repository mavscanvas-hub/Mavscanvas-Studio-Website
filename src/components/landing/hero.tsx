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
  return (
    <div
      className="min-h-screen max-md:min-h-0 overscroll-contain pt-44 max-md:pt-16 pb-24 max-md:pb-12 px-15 max-md:px-3.5 bg-center max-md:bg-top"
      style={{
        backgroundImage: `url(${hero})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="mt-24 max-md:mt-2 max-w-[950px] max-md:w-full mx-auto max-md:mx-0 flex flex-col gap-15 max-md:gap-3">
        <div className="flex flex-col justify-center items-center">
          <span className="text-white font-cormo italic text-[80px]/[120%] max-md:text-[26px]/[120%]">
            From Idea to Impact,
          </span>
          <span className="text-white font-cormo font-bold text-[80px]/[120%] max-md:text-[26px]/[120%]">
            Digital Solutions That Scale
          </span>
        </div>
        <div className="text-[28px]/[120%] max-md:text-[10px]/[120%] italic text-white font-light mx-20 max-md:mx-0 text-center">
          <strong className="font-bold">Mavscanvas</strong> blends strategy,
          design, and technology to deliver brand systems, products, websites,
          and growth engines that actually perform
        </div>
        <div className="flex justify-center items-center mt-34 max-md:mt-8">
          <Button
            className="bg-[#02DDEF] rounded-full py-5 max-md:py-3 max-md:px-10 px-20 flex gap-6 items-center"
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
        <div className="mt-25.5 max-md:mt-3 flex flex-col items-center justify-center gap-12 max-md:gap-3 text-white">
          <h4 className="text-[22px]/[120%] max-md:text-[7px]/[120%] font-normal">
            Trusted by
          </h4>
          <div className="flex items-center justify-center gap-17 max-md:gap-4">
            {logos.map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`logo-${index}`}
                className="h-6 w-auto max-md:h-auto max-md:w-[38px]"
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
