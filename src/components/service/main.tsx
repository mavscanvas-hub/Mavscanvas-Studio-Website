import Herobg from "../../assets/service/main_bg.png";
import Button from "../custom/button";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Main() {
  return (
    <section
      className="bg-white pt-[245px] px-15 flex flex-col gap-20 pb-40"
      style={{
        backgroundImage: `url(${Herobg})`,
        backgroundSize: "cover",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex flex-col">
        <h2 className="text-black text-[90px]/[120%] font-cormo italic">
          Digital Solutions That Build,
        </h2>
        <h2 className="text-black text-[90px]/[120%] font-extrabold">
          Launch, and Grow Brands
        </h2>
      </div>
      <div className="flex flex-col gap-15 items-center justify-center">
        <span className="text-[32px]/[120%] font-light text-center mt-38 block max-w-[800px]">
          We are prepared to replicate these results for your brand. Are you
          ready to begin?
        </span>
        <div className="flex justify-center items-center">
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
      </div>
    </section>
  );
}
