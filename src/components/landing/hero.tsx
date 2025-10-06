import hero from "../../assets/company/Hero1.png";
import Button from "../custom/button";
import { FaArrowRightLong } from "react-icons/fa6";
import adobe from "../../assets/company/adobe.png";
import spotify from "../../assets/company/spotify.png";
import google from "../../assets/company/google.png";
import samsung from "../../assets/company/samsung.png";
import microsoft from "../../assets/company/microsoft.png";
import amazon from "../../assets/company/amazon.png";

const logos = [google, adobe, spotify, samsung, microsoft, amazon];

export default function Home() {
  return (
    <div
      className="min-h-screen overscroll-contain pt-44 pb-24 px-15"
      style={{
        backgroundImage: `url(${hero})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top",
      }}
    >
      <div className="mt-24 max-w-[950px] mx-auto flex flex-col gap-15">
        <div className="flex flex-col justify-center items-center">
          <span className="text-white font-cormo italic text-[80px]/[120%]">
            From Idea to Impact,
          </span>
          <span className="text-white font-cormo font-bold text-[80px]/[120%]">
            Digital Solutions That Scale
          </span>
        </div>
        <div className="text-2lg italic text-white font-light mx-20 text-center">
          <strong className="font-bold">Mavscanvas</strong> blends strategy,
          design, and technology to deliver brand systems, products, websites,
          and growth engines that actually perform
        </div>
        <div className="flex justify-center items-center mt-34">
          <Button
            className="bg-[#02DDEF] rounded-full py-5 px-20 flex gap-6 items-center"
            onClick={() => {
              console.log("Logged");
            }}
          >
            <span className="font-medium text-[28px]">Start a Project</span>
            <FaArrowRightLong className="text-3xl" />
          </Button>
        </div>
        <div className="mt-25.5 flex flex-col items-center justify-center gap-12 text-white">
          <h4 className="text-[22px] font-normal">Trusted by</h4>
          <div className="flex items-center justify-center gap-17">
            {logos.map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`logo-${index}`}
                className="h-6 w-auto"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
