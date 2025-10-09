import { FaArrowRightLong } from "react-icons/fa6";
import Button from "../custom/button";
import Review from "../../assets/company_op/reviewbg.webp";

export default function Reviews() {
  return (
    <section
      className="bg-black px-15 pt-15 pb-25 flex flex-col gap-20"
      style={{
        backgroundImage: `url(${Review})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
      }}
    >
      <h2 className="font-cormo text-[90px]/[120%] italic text-start text-white">
        Clients <strong>Reviews</strong>
      </h2>
      <div className="flex flex-col items-center gap-4">
        <div className="border border-white min-h-[816px] w-full">helow</div>
        <div className="flex flex-col gap-26">
          <span className="text-white text-[28px] italic font-light max-w-[872px] text-center">
            We are prepared to replicate these results for your brand. Are you
            ready to begin?
          </span>
          <div className="flex justify-center items-center">
            <Button
              className="bg-[#02DDEF] rounded-full py-5.5 px-24 flex gap-6 items-center"
              onClick={() => {
                console.log("Logged");
              }}
            >
              <span className="font-medium text-[28px]">Start a Project</span>
              <FaArrowRightLong className="text-2xl" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
